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
    console.log("sort被调用了");
    const groupedData: GroupedData = {};
  
    data.forEach(item => {
      const year = item.frontMatter.date.slice(0, 4);
  
      if (!groupedData[year]) {
        groupedData[year] = [];
      }
  
      groupedData[year].push(item);
    });
  
    const sortedYears = Object.keys(groupedData).sort((a, b) => b - a);
    console.log("sortedYears",sortedYears)
  
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
  
    console.log("groupedData", sortedGroupedData);
    return sortedGroupedData;
  }
  