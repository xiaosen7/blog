import{a4 as u,u as c,r as i,M as d,L as f,n as m,a7 as p}from"./vendor.62f997fd.js";import{a as l,j as s}from"./index.aef5b0f1.js";const x=()=>{const[e]=u(),a=e.get("id"),{data:t,run:o,loading:n,error:r}=c(async()=>{if(!a)throw new Error("id\u4E0D\u5B58\u5728");return await p(a)});return i.exports.useEffect(()=>{o()},[]),r&&d.error(r),l(f,{loading:n,children:[t&&s("div",{className:"braft-output-content",dangerouslySetInnerHTML:{__html:t.content}}),s(m,{showBack:!0})]})};export{x as default};