import{d as w,B as U,s as C,k as v,o as d,c as h,a as e,f as a,w as _,v as B,x as A,e as k,b,i as E,H as V,_ as I,I as D,t as c,h as $,C as R,L as N,F as x,r as O,M as z,l as F,u as P}from"./index.fa0804b5.js";import{p as T}from"./index.7c3dcca3.js";const L={class:"panner"},M=e("h2",null,"\u8A02\u55AE\u4FEE\u6539",-1),H={key:0,class:"pb_x2 pt"},G={class:"f-row"},W=e("div",{class:"py_row"},null,-1),Y={class:"f-row"},j=e("div",{class:"py_row"},null,-1),q={class:"f-row"},J=e("div",{class:"py_row"},null,-1),K=e("div",{class:"py_row"},null,-1),Q={class:"fx-c"},X=w({__name:"CuOibTdForm",emits:["refresh"],setup(n,{emit:s}){const u=U(),t=C({date:"",order_id:"",index:0,cf_waybill_number:"",waybill_no:"",customer_name_zh:"",customer_name_en:"",customer_phone_no:"",address:""}),i=C({date:!1,order_id:!1,cf_waybill_number:!1,waybill_no:!1,customer_name_zh:!1,customer_name_en:!1,customer_phone_no:!1,address:!1}),o=function(){let m=!0;if(t.order_id)i.order_id=!1;else return i.order_id=!0,!1;if(t.waybill_no)i.waybill_no=!1;else return i.waybill_no=!0,!1;if(t.customer_phone_no)i.customer_phone_no=!1;else return i.customer_phone_no=!0,!1;return Object.values(i).map(r=>{r&&(m=!1)}),m},l=()=>{o()&&(s("refresh",t),E().do_mod(0))};return(()=>{const m=E().one;if(m&&m.order_id){for(let r in t)t[r]=m[r];V(()=>{m.date&&u.value.ioc(m.date)})}else E().do_mod(0)})(),(m,r)=>{const g=v("fn-time"),y=v("eos-input"),S=v("my-button");return d(),h("div",L,[M,t.order_id?(d(),h("div",H,[e("div",G,[a(y,{class:"w-50",header:"\u8A02\u55AE\u65E5\u671F"},{default:_(()=>[a(g,{ref_key:"timed",ref:u,onResuit:r[0]||(r[0]=f=>t.date=f)},null,512)]),_:1}),a(y,{class:"w-50",is_err:i.order_id,header:"\u8A02\u55AE\u7DE8\u865F"},{default:_(()=>[B(e("input",{class:"input","onUpdate:modelValue":r[1]||(r[1]=f=>t.order_id=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[A,t.order_id]])]),_:1},8,["is_err"])]),W,e("div",Y,[a(y,{class:"w-50",header:"\u5BA2\u6236\u904B\u55AE\u7DE8\u865F"},{default:_(()=>[B(e("input",{class:"input","onUpdate:modelValue":r[2]||(r[2]=f=>t.cf_waybill_number=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[A,t.cf_waybill_number]])]),_:1}),a(y,{class:"w-50",is_err:i.waybill_no,header:"\u904B\u55AE\u7DE8\u865F"},{default:_(()=>[B(e("input",{class:"input","onUpdate:modelValue":r[3]||(r[3]=f=>t.waybill_no=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[A,t.waybill_no]])]),_:1},8,["is_err"])]),j,e("div",q,[a(y,{class:"w-50",header:"\u6536\u4EF6\u4EBA\u4E2D\u6587\u540D"},{default:_(()=>[B(e("input",{class:"input","onUpdate:modelValue":r[4]||(r[4]=f=>t.customer_name_zh=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[A,t.customer_name_zh]])]),_:1}),a(y,{class:"w-50",header:"\u6536\u4EF6\u4EBA\u82F1\u6587\u540D"},{default:_(()=>[B(e("input",{class:"input","onUpdate:modelValue":r[5]||(r[5]=f=>t.customer_name_en=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[A,t.customer_name_en]])]),_:1})]),J,a(y,{class:"w-100",is_err:i.customer_phone_no,header:"\u96FB\u8A71\u865F\u78BC"},{default:_(()=>[B(e("input",{class:"input","onUpdate:modelValue":r[6]||(r[6]=f=>t.customer_phone_no=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[A,t.customer_phone_no]])]),_:1},8,["is_err"]),K,a(y,{class:"w-100",header:"\u5730\u5740"},{default:_(()=>[B(e("input",{class:"input","onUpdate:modelValue":r[7]||(r[7]=f=>t.address=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[A,t.address]])]),_:1})])):k("",!0),e("div",Q,[a(S,{onClick:l},{default:_(()=>[b("\u5132\u5B58")]),_:1})])])}}}),Z={},ee={class:"tr"},se=D('<div class="w-11"> \u8A02\u55AE\u65E5\u671F<br><p class="tr-en">Order date</p></div><div class="w-14"> \u5BA2\u6236\u904B\u55AE\u7DE8\u865F<br><p class="tr-en">Waybill number</p></div><div class="w-8"> \u8A02\u55AE\u7D44<br><p class="tr-en">Group</p></div><div class="w-11"> \u8A02\u55AE\u7DE8\u865F<br><p class="tr-en">Order No.</p></div><div class="w-12"> \u6536\u4EF6\u4EBA<br><p class="tr-en">Reciver</p></div><div class="w-11"> \u96FB\u8A71<br><p class="tr-en">Phone</p></div><div class="w-30"> \u5730\u5740<br><p class="tr-en">Address/Locations</p></div><div class="w-4"></div>',8),ne=[se];function te(n,s){return d(),h("nav",ee,ne)}const oe=I(Z,[["render",te]]),ae={class:"td"},ue={class:"w-11"},ie={class:"w-14"},re={class:"w-8"},le={class:"w-11"},de={class:"w-12"},ce={class:"w-11"},_e={class:"w-30"},me={class:"w-4 t-r"},pe=w({__name:"CuOibIistTd",props:{idx:null,one:null},setup(n){const s=n,u=E(),t=()=>{console.log("edit =",s.one),u.do_one(s.one),u.do_mod(1)};return(i,o)=>{const l=v("eos-tabie-opera");return d(),h("div",ae,[e("div",ue,c(n.one.date),1),e("div",ie,c(n.one.waybill_no),1),e("div",re,c(n.one.order_group),1),e("div",le,[e("div",{onClick:o[0]||(o[0]=()=>{$(R)().do_order(n.one),$(u).do_panner(1)}),class:"pri hand"},c(n.one.order_id),1)]),e("div",de,c(n.one.customer_name_zh),1),e("div",ce,c(n.one.customer_phone_no),1),e("div",_e,c(n.one.address),1),e("div",me,[a(l,{vais:"edit",is_icon:!0,onEdit:t})])])}}}),he={class:"tabie"},ve={class:"td-wrap"},fe={key:0,class:"pt"},be=w({__name:"CuOibIist",props:{many:null},setup(n){const s=n;N(s.many,(o,l)=>{t.pagina(0,0,u.imit)});const u=C({items:[],imit:25,ioading:!1,start:0}),t=C({pagina:(o,l,p)=>{u.ioading=!0,u.start=l,u.imit=p,u.items=s.many.slice(l,l+p),u.ioading=!1}}),i=o=>{u.items.map((l,p)=>{l.index===o.index&&(u.items[p]=o)})};return(o,l)=>{const p=v("eos-tabie-ioading"),m=v("eos-pagination"),r=v("eos-mod");return d(),h("div",null,[e("div",he,[a(oe),a(p,{ioad:$(u).ioading,many:n.many},{default:_(()=>[e("nav",ve,[(d(!0),h(x,null,O($(u).items,(g,y)=>(d(),h("div",{key:y},[a(pe,{one:g,idx:y},null,8,["one","idx"])]))),128))])]),_:1},8,["ioad","many"])]),n.many&&n.many.length>0?(d(),h("div",fe,[a(m,{onResuit:$(t).pagina,count:n.many.length,_limit:$(u).imit},null,8,["onResuit","count","_limit"])])):k("",!0),a(r,null,{default:_(()=>[a(X,{onRefresh:i})]),_:1})])}}}),ye=D('<div class="sun"><p>\u8ACB\u4E0B\u8F09\u6700\u65B0\u7248\u672C\u4F7F\u7528\u6279\u91CF\u4E0B\u55AE\uFF0C\u5426\u5247\u5C07\u4E0D\u80FD\u6210\u529F\u4E0B\u55AE</p><p>Please download the latesttemplate and use batch order,</p><p>otherwise you will not be able to place an order successfully.</p><div>\xA0</div><p>\u6279\u91CF\u4E0B\u55AE\u6559\u5B78\u5982\u4E0B: <span class="pri">HTTP://YOUTUBE.COM</span></p><p>Batch ordering teaching is as follows: <span class="pri">HTTP://YOUTUBE.COM</span></p></div><div class="pt"></div><div class="b"><p>\u6279\u91CF\u4E0B\u55AE\u8A66\u7B97\u7BC4\u672C: <span class="pri">\u4E0B\u8F09\u5831\u8868</span></p><p>Batch Trial Balance Template: <span class="pri">Download Report</span></p></div><div>\xA0</div>',4),we={class:"fx-l"},Ce=e("div",{class:"b pl_x2"},[e("p",null,"\u8A3B\u610F\uFF1A\u6BCF\u6B21\u5EFA\u8B70\u4E0A\u50B3\u4E0D\u591A\u65BC500\u884C\u8A18\u9304"),e("p",null,"Note: It is recommended to upload no more than 500 records each time.")],-1),Be=w({__name:"CustomUpioadBase",emits:["resuit"],setup(n,{emit:s}){const u=C({header:["","date","cf_waybill_no","waybill_no","order_id","customer_name","customer_phone_no","iocation"]}),t=async o=>new Promise(l=>{let p=[];for(let m=0;m<o.length;m++)p.push(i.ser_one(o[m],m));l(p)}),i=C({ser_one:(o,l)=>{const p=o.customer_name;return p&&p.split(" "),o.index=l,o.is_edit=!1,o.address=o.iocation,o.customer_name_zh=o.customer_name,o.date=o.date?z.fmt_time(o.date):"",o},reciv:async o=>{s("resuit",[]);const l=await T.ioad_by_fiie(o,u.header);s("resuit",await t(l))}});return(o,l)=>{const p=v("eos-upioad-button");return d(),h("div",null,[ye,e("div",we,[a(p,{onResuit:i.reciv},null,8,["onResuit"]),Ce])])}}}),Ae={class:"panner"},$e=e("h4",null,[e("div",null,"\u78BA\u8A8D\u5132\u5B58"),e("div",null,"Confirm Save")],-1),Ee=e("div",{class:"pt_x pb_x2 sun"},[e("p",null,"\u5982\u4F60\u78BA\u8A8D\u7121\u8AA4\uFF0C\u8ACB\u5132\u5B58\u81F3\u8A02\u55AE\u5217\u8868\u4E2D"),e("p",null,"If you confirm it correctly, please save it to order management.")],-1),Fe={class:"fx-l"},ge=w({__name:"CustomUpioadConfirm",props:{num:null,totai:null},emits:["save"],setup(n){return(s,u)=>{const t=v("my-button"),i=v("eos-aii-button");return d(),h("nav",Ae,[$e,Ee,e("div",Fe,[n.totai?(d(),F(t,{key:0},{default:_(()=>[b(" \u4E0A\u50B3\u9032\u5EA6:\xA0\xA0"+c(n.num)+"\xA0/\xA0"+c(n.totai),1)]),_:1})):(d(),F(i,{key:1,vais:"save",onSave:u[0]||(u[0]=o=>s.$emit("save")),is_en:!0}))])])}}}),xe={class:"tr"},ke=e("div",{class:"w-11"},[b(" \u8A02\u55AE\u65E5\u671F"),e("br"),e("p",{class:"tr-en"},"Order date")],-1),De=e("div",{class:"w-14"},[b(" \u5BA2\u6236\u904B\u55AE\u7DE8\u865F"),e("br"),e("p",{class:"tr-en"},"Waybill number")],-1),Oe=e("div",{class:"w-8"},[b(" \u8A02\u55AE\u7D44"),e("br"),e("p",{class:"tr-en"},"Group")],-1),Pe=e("div",{class:"w-10"},[b(" \u8A02\u55AE\u7DE8\u865F"),e("br"),e("p",{class:"tr-en"},"Order No.")],-1),Te=e("div",{class:"w-11"},[b(" \u6536\u4EF6\u4EBA"),e("br"),e("p",{class:"tr-en"},"Reciver")],-1),Se=e("div",{class:"w-11"},[b(" \u96FB\u8A71"),e("br"),e("p",{class:"tr-en"},"Phone")],-1),Ue=e("div",{class:"w-32"},[b(" \u5730\u5740"),e("br"),e("p",{class:"tr-en"},"Address/Locations")],-1),Ve=e("div",{class:"w-4"},null,-1),Ie=w({__name:"CuOibIistSavedTr",props:{aii:null},setup(n){return(s,u)=>{const t=v("eos-tabie-choose-item-tr");return d(),h("nav",xe,[a(t,{many:n.aii.many,choose:n.aii.choose},{default:_(()=>[ke,De,Oe,Pe,Te,Se,Ue,Ve]),_:1},8,["many","choose"])])}}}),Re=e("div",{class:"py_t"},null,-1),Ne=w({__name:"CuOibIistSavedBar",setup(n){const s=()=>{console.log("\u6253\u5370")};return(u,t)=>{const i=v("my-button");return d(),h(x,null,[a(i,{onClick:s,typed:"pri-tin",icon:"bi bi-file-earmark-pdf"},{default:_(()=>[b(" \u5217\u5370 Print ")]),_:1}),Re],64)}}}),ze={class:"td"},Le={class:"w-11"},Me={class:"w-14"},He={class:"w-8"},Ge={class:"w-10"},We={class:"w-11"},Ye=e("br",null,null,-1),je={class:"w-11"},qe={class:"w-32"},Je={class:"w-4 t-r"},Ke=w({__name:"CuOibIistSavedTd",props:{idx:null,one:null,choose:null},setup(n){const s=E();return P(),(u,t)=>{const i=v("eos-tabie-opera"),o=v("eos-tabie-choose-item-td");return d(),h("div",ze,[a(o,{one:n.one,choose:n.choose},{default:_(()=>[e("div",Le,c(n.one.date),1),e("div",Me,c(n.one.number),1),e("div",He,c(n.one.group),1),e("div",Ge,[e("span",{class:"pri hand",onClick:t[0]||(t[0]=l=>$(s).do_panner(1))},c(n.one.order_no),1)]),e("div",We,[b(c(n.one.reciver.name_hk),1),Ye,b(" "+c(n.one.reciver.name_en),1)]),e("div",je,c(n.one.reciver.phone),1),e("div",qe,c(n.one.reciver.region)+" "+c(n.one.reciver.area)+" "+c(n.one.reciver.address),1),e("div",Je,[a(i,{vais:"edit",is_icon:!0})])]),_:1},8,["one","choose"])])}}}),Qe={class:"panner"},Xe={class:"tabie"},Ze={class:"td-wrap"},es=w({__name:"CuOibSavedIist",setup(n){const s=C({choose:[],ioading:!0,page:{total:1},condition:{},imit:25,many:[{id:1,date:"2022-12-12",number:"SF 0000001",group:"ABC",order_no:"AS 0000001",reciver:{name_hk:"\u5289\u5148\u751F",name_en:"liu xiansheng",phone:"9727 0934",region:"\u4E5D\u9F8D",area:"\u5C6F\u9580",address:"\u5BCC\u8CB4\u5927\u8857\u5BCC\u8CB4\u5927\u5EC84\u6A13402"}},{id:2,date:"2022-12-12",number:"SF 0000001",group:"ABC",order_no:"AS 0000001",reciver:{name_hk:"\u5289\u5148\u751F",name_en:"liu xiansheng",phone:"9727 0934",region:"\u4E5D\u9F8D",area:"\u5C6F\u9580",address:"\u5BCC\u8CB4\u5927\u8857\u5BCC\u8CB4\u5927\u5EC84\u6A13402"}},{id:3,date:"2022-12-12",number:"SF 0000001",group:"ABC",order_no:"AS 0000001",reciver:{name_hk:"\u5289\u5148\u751F",name_en:"liu xiansheng",phone:"9727 0934",region:"\u4E5D\u9F8D",area:"\u5C6F\u9580",address:"\u5BCC\u8CB4\u5927\u8857\u5BCC\u8CB4\u5927\u5EC84\u6A13402"}}]});return(u,t)=>(d(),h("nav",Qe,[a(Ne),e("div",Xe,[a(Ie,{aii:s},null,8,["aii"]),e("nav",Ze,[(d(!0),h(x,null,O(s.many,(i,o)=>(d(),F(Ke,{key:o,one:i,idx:o,choose:s.choose},null,8,["one","idx","choose"]))),128))])])]))}}),ss=e("div",{class:"py_row"},null,-1),ns={key:0},ts=e("div",{class:"py_row"},null,-1),os={key:1},as=e("div",{class:"py_row"},null,-1),us={class:"pl"},ls=w({__name:"CuOrderInBuik",setup(n){P();const s=C({is_saved:!1,num:0,upiading:!1,iong:10,many:[],success:[]}),u=async(i,o)=>new Promise(l=>{setTimeout(()=>l(!0),800),s.success.push(...i),s.num+=s.iong,s.num>s.many.length&&(s.num=s.many.length)}),t=C({save:async()=>{s.upiading=!0,await T.insert_many(s.many,u,s.iong),s.is_saved=!0,s.upiading=!1}});return(i,o)=>{const l=v("eos-form-paner"),p=v("my-button"),m=v("eos-iayout-screen-siot");return d(),F(m,{is_en:!0},{cont:_(()=>[a(l,null,{default:_(()=>[a(Be,{onResuit:o[0]||(o[0]=r=>{s.many=r}),ref:"base"},null,512)]),_:1}),ss,s.is_saved?(d(),h("div",os,[a(es),as,e("div",us,[a(p,{onClick:o[1]||(o[1]=r=>s.is_saved=!1)},{default:_(()=>[b("\u8FD4\u56DE Back")]),_:1})])])):(d(),h("div",ns,[a(l,null,{default:_(()=>[a(be,{many:s.many},null,8,["many"])]),_:1}),ts,a(ge,{num:s.num,totai:s.upiading?s.many.length:0,onSave:t.save},null,8,["num","totai","onSave"])]))]),_:1})}}});export{ls as default};