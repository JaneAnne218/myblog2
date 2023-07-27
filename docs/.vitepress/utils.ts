interface Item {
    frontMatter: {
      title: string;
      date: string;
      tags: string[];
    };
    regularPath: string;
  }
  
  interface GroupedData {
    [year: string]: Item[];
  }
  export function sortDataByYearAndDate(data: Item[]): GroupedData {
    const groupedData: GroupedData = {};
  
    data.forEach(item => {
      const year = item.frontMatter.date.slice(0, 4);
  
      if (!groupedData[year]) {
        groupedData[year] = [];
      }
  
      groupedData[year].push(item);
    });
  
    const sortedYears = Object.keys(groupedData).sort((a, b) => b - a);
    // console.log("sortedYears",sortedYears)
  
    sortedYears.forEach(year => {
      const items = groupedData[year];
  
      items.sort((a, b) => {
        const dateA = new Date(a.frontMatter.date);
        const dateB = new Date(b.frontMatter.date);
        return dateB.getTime() - dateA.getTime();
      });
    });
    
    const sortedGroupedData: GroupedData = {};
    
    sortedYears.forEach(year => {
        sortedGroupedData[year] = groupedData[year];
    });
  
    // console.log("groupedData", sortedGroupedData);
    return sortedGroupedData;
  }
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
  