import fs from 'fs';

function getMarkdownFiles(directory) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      const markdownFiles = files
        .filter(file => file.endsWith('.md'))
        .map(filename => {
          const filePath = `${directory}/${filename}`;

          return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf-8', (err, fileContent) => {
              if (err) {
                reject(err);
                return;
              }

              const frontMatterRegex = /---\r\n([\s\S]*?)\r\n---/m;
              const frontMatterMatch = fileContent.match(frontMatterRegex);

              let date = '';
              let tags = [];
              if (frontMatterMatch) {
                const frontMatterContent = frontMatterMatch[1];

                const dateRegex = /^date:\s*(.*)/m;
                const dateMatch = frontMatterContent.match(dateRegex);

                if (dateMatch) {
                  date = dateMatch[1];
                }
                
                const match = frontMatterContent.match(/tags:[\s\S]*?-\s*(.*)/);
        
                if (match) {
                  tags = match[1].trim().split('\n').map(tag => tag.trim());
                }
              }

              const title = filename.slice(0, -3);

              const result = {
                frontMatter: {
                  title,
                  date,
                  tags,
                },
                regularPath: `${title}.html`,
              };

              resolve(result);
            });
          });
        });
      Promise.all(markdownFiles)
        .then(results => resolve(results))
        .catch(error => reject(error));
    });
  });
}

export default getMarkdownFiles;
