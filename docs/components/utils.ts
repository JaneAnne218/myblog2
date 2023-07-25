type Post = {
    frontMatter: {
      date?: string;
      title?: string;
      tags?: string[];
      description?: string;
    };
    regularPath: string;
  };
  
  export function initTags(post: Post[]) {
    const data: any = {};
    for (let i = 0; i < post.length; i++) {
      const element = post[i];
      console.log("element",element)
      const tags = element.frontMatter.tags;
      console.log("tags",tags)
      console.log("Array.isArray(tags)",Array.isArray(tags))
      // tags是数组，需要tags按照数组语法的格式书写
      if (Array.isArray(tags)) {
        tags.forEach((item) => {
          if (!data[item]) {
            data[item] = [];
          }
          data[item].push(element);
          console.log("data[item]",data[item])
        });
      }
    }
    console.log("data新",data)
    return data;
  }