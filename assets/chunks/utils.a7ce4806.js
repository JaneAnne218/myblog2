function f(s){const a={};s.forEach(t=>{const e=t.frontMatter.date.slice(0,4);a[e]||(a[e]=[]),a[e].push(t)});const o=Object.keys(a).sort((t,e)=>e-t);o.forEach(t=>{a[t].sort((n,c)=>{const l=new Date(n.frontMatter.date);return new Date(c.frontMatter.date).getTime()-l.getTime()})});const r={};return o.forEach(t=>{r[t]=a[t]}),r}function g(s){const a={};for(let o=0;o<s.length;o++){const r=s[o];console.log("element",r);const t=r.frontMatter.tags;console.log("tags",t),console.log("Array.isArray(tags)",Array.isArray(t)),Array.isArray(t)&&t.forEach(e=>{a[e]||(a[e]=[]),a[e].push(r),console.log("data[item]",a[e])})}return console.log("data新",a),a}export{g as i,f as s};
