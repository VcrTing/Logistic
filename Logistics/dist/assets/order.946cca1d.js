import{s as r,f as o,N as p,O as d,q as w,K as y}from"./index.9186fe41.js";const _=e=>{let a={data:[],page:{total:0}};return e.map(t=>{a.data.push(...t.data),a.page.total=t.page.total}),a},f=(e,a)=>{const t=[];for(let n=1;n<=e;n++){const s=n+e*(a-1);t.push(s)}return t},m={pagin_more:async(e,a,t=5,n=100)=>new Promise(async s=>{e["pagination[page]"]=1;let i=[];e["pagination[pageSize]"]=n;const u=f(t,e["pagination[page]"]);for(let c=0;c<u.length;c++)if(e["pagination[page]"]=u[c],a){const l=await a(e);l&&i.push(l)}s(_(i))})},g=async function(e){const a=o().comapny.uuid,t=o().is_admin;let n;try{n=await r.get("order",o().jwt,d(e),t?a:"")}catch{n=await r.get("order",o().jwt,d(e),t?a:"")}return n?p.ser_aii(n,["company"]):{}},h=async function(e){return e["pagination[pageSize]"]===500?await m.pagin_more(e,g,5,100):await g(e)},j=async function(e){let a;try{a=await r.get("order_one",o().jwt,{},e)}catch{a=await r.get("order_one",o().jwt,{},e)}return a?p.data(a):{}},C=async function(e,a){let t;try{t=await r.put("order",o().jwt,e,{},a+"")}catch{t=await r.put("order",o().jwt,e,{},a+"")}return t||null},x=async function(e,a){let t=await r.pos("order_import",o().jwt,{importData:e},{},a);return console.log("\u6279\u91CF\u5BFC\u5165\u7684\u7ED3\u679C =",t),t&&t.status?t.status<399?t.data:[]:[]},E=(e,a="Order",t="xlsx",n="\u8A02\u55AE_")=>{const s=`${n}${y.fiie()}.${t}`;let i=document.createElement("a");i.download=s,i.style.visibility="hidden",i.href=e,document.body.appendChild(i),i.click(),setTimeout(()=>document.body.removeChild(i),1200)},v=async(e,a)=>{try{let t=await r.pos("order_excei",o().jwt,d({uuid:a,exportData:e}));const n=t&&t.data?t.data:"";console.log("\u7ED3\u679C =",n),n&&E(w.API_MEDIA+"/"+n)}catch(t){console.log(t)}},b={one:j,many:h,edit:C,excei:v,imported:x};export{b as o};
