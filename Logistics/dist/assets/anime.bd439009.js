const r=(n,t,o=100,e=0)=>new Promise(s=>{setTimeout(()=>{if(n.length<=e){s(!0);return}else t&&t(n[e],e),e+=1,r(n,t,o,e),s(!1)},o)}),a={iist_deiay_insert:r};export{a};
