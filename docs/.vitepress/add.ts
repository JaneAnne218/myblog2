import fs from 'fs';

function getMarkdownFiles(directory: string): { title: string, date: string, frontMatter: any, regularPath: string }[] {
  const files = fs.readdirSync(directory);
  const markdownFiles = files
    .filter(file => file.endsWith('.md'))
    .map(filename => {
      const filePath = `${directory}/${filename}`;
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const frontMatterRegex = /---\n([\s\S]*?)\n---/m; // 匹配包含在 --- --- 之间的内容 linux下的
      //const frontMatterRegex = /---\r\n([\s\S]*?)\r\n---/m;
      const frontMatterMatch = fileContent.match(frontMatterRegex);
      let date = ''; // 默认为空字符串
      let tags: any[] = []; // 默认为空数组
      if (frontMatterMatch) {
        const frontMatterContent = frontMatterMatch[1];
      
        const dateRegex = /^date:\s*(.*)/m; // 匹配以 date: 开头的行
        
        const dateMatch = frontMatterContent.match(dateRegex);
  
        if (dateMatch) {
          date = dateMatch[1];
        };
        const match = frontMatterContent.match(/tags:[\s\S]*?-\s*(.*)/);
    
        if (match) {
          tags = match[1].trim().split('\n').map(tag => tag.trim());
        }
      
      }
      const title = filename.slice(0, -3); // 去除文件扩展名
      return {   
        frontMatter: {
            title,
            date,
            tags:tags,
        },
        regularPath: title+'.html',
      };
    });
  return markdownFiles;
}

export default getMarkdownFiles;
