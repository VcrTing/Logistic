import{q as r,f as o,N as l,O as c}from"./index.851be2e2.js";const w=t=>{let e={data:[],page:{total:0}};return t.map(a=>{e.data.push(...a.data),e.page.total=a.page.total}),e},_=(t,e)=>{const a=[];for(let n=1;n<=t;n++){const s=n+t*(e-1);a.push(s)}return a},f={pagin_more:async(t,e,a=5,n=100)=>new Promise(async s=>{t["pagination[page]"]=1;let u=[];t["pagination[pageSize]"]=n;const d=_(a,t["pagination[page]"]);for(let i=0;i<d.length;i++)if(t["pagination[page]"]=d[i],e){const p=await e(t);p&&u.push(p)}s(w(u))})},g=async function(t){const e=o().comapny.uuid,a=o().is_admin;let n;try{n=await r.get("order",o().jwt,c(t),a?e:"")}catch{n=await r.get("order",o().jwt,c(t),a?e:"")}return n?l.ser_aii(n,[]):{}},y=async function(t){return t["pagination[pageSize]"]===500?await f.pagin_more(t,g,5,100):await g(t)},m=async function(t){let e;try{e=await r.get("order_one",o().jwt,{},t)}catch{e=await r.get("order_one",o().jwt,{},t)}return e?l.data(e):{}},h=async function(t,e){let a;try{a=await r.put("order",o().jwt,t,{},e+"")}catch{a=await r.put("order",o().jwt,t,{},e+"")}return a||null},j=async function(t,e){let a=await r.pos("order_import",o().jwt,{importData:t},{},e);return a&&a.status?a.status<399?a.data:[]:[]},x=(t,e,a)=>{console.log("Buffer =",t),new Blob([t],a||{type:"application/vnd.ms-excel"})},B=async t=>{try{let e=await r.pos("order_excei",o().jwt,c(t));const a=e&&e.data?e.data:"";x(a,"excei.xls")}catch(e){console.log(e)}},z={one:m,many:y,edit:h,excei:B,imported:j};export{z as o};