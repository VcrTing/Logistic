import{d as g,z as R,i as O,s as $,k as p,h as b,o as r,c as _,a as s,f as i,w as d,x as B,A as C,e as x,b as y,C as L,_ as M,M as D,t as h,H as G,v as U,l as k,F as P,r as V,S as F,L as H,n as W,B as z,u as T,G as Y}from"./index.598e6139.js";import{_ as q}from"./CoOrderFpCont.vue_vue_type_script_setup_true_lang.7f8c3557.js";import{o as j}from"./order.9de45962.js";const J={key:0,class:"panner"},K=s("h2",null,"\u4FEE\u6539\u5C0E\u5165\u524D\u7684\u8A02\u55AE\xA0Edit",-1),Q={key:0,class:"pb_x2 pt_x"},X={class:"f-row"},Z=s("div",{class:"py_row"},null,-1),ee={class:"f-row"},se=s("div",{class:"py_row"},null,-1),te={class:"f-row"},ne=s("div",{class:"py_row"},null,-1),oe={class:"f-row"},ae=s("div",{class:"py_row"},null,-1),ie={class:"fx-c upper"},ue=g({__name:"CuOibTdForm",emits:["refresh"],setup(a,{emit:t}){const o=R(),u=O(),l=O().one,e=$({create_date:"",order_id:"",index:0,waybill_no:"",order_group:"",total_item_count:0,customer_name:"",customer_phone_no:"",address:""}),n=$({create_date:!1,order_id:!1,waybill_no:!1,order_group:!1,total_item_count:!1,customer_name:!1,customer_phone_no:!1,address:!1}),m=function(){let w=!0;if(e.order_id)n.order_id=!1;else return n.order_id=!0,!1;if(e.waybill_no)n.waybill_no=!1;else return n.waybill_no=!0,!1;if(e.customer_phone_no)n.customer_phone_no=!1;else return n.customer_phone_no=!0,!1;return Object.values(n).map(c=>{c&&(w=!1)}),w},v=()=>{m()&&(t("refresh",e),u.do_mod(0))};return(w=>{if(w&&w.order_id){for(let c in e)e[c]=w[c];L(()=>{w.create_date&&o.value.ioc(w.create_date)})}else u.do_mod(0)})(l),(w,c)=>{const I=p("fn-time"),E=p("eos-input"),N=p("my-button");return b(l)?(r(),_("div",J,[K,e.order_id?(r(),_("div",Q,[s("div",X,[i(E,{class:"w-50",header:"\u8A02\u55AE\u65E5\u671F Order date"},{default:d(()=>[i(I,{ref_key:"timed",ref:o,onResuit:c[0]||(c[0]=f=>e.create_date=f)},null,512)]),_:1}),i(E,{class:"w-50",is_err:n.order_id,header:"\u8A02\u55AE\u7DE8\u865F Order no."},{default:d(()=>[B(s("input",{class:"input","onUpdate:modelValue":c[1]||(c[1]=f=>e.order_id=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,e.order_id]])]),_:1},8,["is_err","header"])]),Z,s("div",ee,[i(E,{class:"w-50",is_err:n.waybill_no,header:"\u904B\u55AE\u7DE8\u865F Waybill number"},{default:d(()=>[B(s("input",{class:"input","onUpdate:modelValue":c[2]||(c[2]=f=>e.waybill_no=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,e.waybill_no]])]),_:1},8,["is_err"]),i(E,{class:"w-50",is_err:n.order_group,header:"\u8A02\u55AE\u7D44 Order group"},{default:d(()=>[B(s("input",{class:"input","onUpdate:modelValue":c[3]||(c[3]=f=>e.order_group=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,e.order_group]])]),_:1},8,["is_err"])]),se,s("div",te,[i(E,{class:"w-50",is_err:n.total_item_count,header:"\u4EF6\u6578 Package"},{default:d(()=>[B(s("input",{class:"input",type:"number","onUpdate:modelValue":c[4]||(c[4]=f=>e.total_item_count=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,e.total_item_count]])]),_:1},8,["is_err"])]),ne,s("div",oe,[i(E,{class:"w-50",is_err:n.customer_name,header:"\u6536\u4EF6\u4EBA Recipient"},{default:d(()=>[B(s("input",{class:"input","onUpdate:modelValue":c[5]||(c[5]=f=>e.customer_name=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,e.customer_name]])]),_:1},8,["is_err"]),i(E,{class:"w-50",is_err:n.customer_phone_no,header:"\u96FB\u8A71\u865F\u78BC Phone number"},{default:d(()=>[B(s("input",{class:"input","onUpdate:modelValue":c[6]||(c[6]=f=>e.customer_phone_no=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,e.customer_phone_no]])]),_:1},8,["is_err"])]),ae,i(E,{class:"w-100",header:"\u5730\u5740 Address"},{default:d(()=>[B(s("textarea",{class:"input","onUpdate:modelValue":c[7]||(c[7]=f=>e.address=f),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,e.address]])]),_:1})])):x("",!0),s("div",ie,[i(N,{onClick:v},{default:d(()=>[y("\u5132\u5B58")]),_:1})])])):x("",!0)}}}),re={},le={class:"tr"},ce=D('<div class="w-11"> \u8A02\u55AE\u65E5\u671F<br><p class="tr-en">Order date</p></div><div class="w-14"> \u5BA2\u6236\u904B\u55AE\u7DE8\u865F<br><p class="tr-en">Waybill number</p></div><div class="w-8"> \u8A02\u55AE\u7D44<br><p class="tr-en">Group</p></div><div class="w-11"> \u8A02\u55AE\u7DE8\u865F<br><p class="tr-en">Order No.</p></div><div class="w-12"> \u6536\u4EF6\u4EBA<br><p class="tr-en">Recipient</p></div><div class="w-11"> \u96FB\u8A71<br><p class="tr-en">Phone</p></div><div class="w-30"> \u5730\u5740<br><p class="tr-en">Address/Locations</p></div><div class="w-4"></div>',8),de=[ce];function _e(a,t){return r(),_("nav",le,de)}const me=M(re,[["render",_e]]),pe={class:"td"},he={class:"w-11"},fe={class:"w-14"},ve={class:"w-8"},ye={class:"w-11"},be={class:"w-12"},we={class:"w-11"},$e={class:"w-30"},ge={class:"w-4 t-r"},Ae=g({__name:"CuOibIistTd",props:{idx:null,one:null},setup(a){const t=a,o=O();return(u,l)=>{const e=p("eos-tabie-opera");return r(),_("div",pe,[s("div",he,h(a.one.create_date),1),s("div",fe,h(a.one.waybill_no),1),s("div",ve,h(a.one.order_group),1),s("div",ye,[s("div",{onClick:l[0]||(l[0]=()=>{b(o).do_one(a.one),b(o).do_panner(1)}),class:"pri hand"},h(a.one.order_id),1)]),s("div",be,h(a.one.customer_name),1),s("div",we,h(a.one.customer_phone_no),1),s("div",$e,h(a.one.address),1),s("div",ge,[i(e,{vais:"edit",is_icon:!0,onEdit:l[1]||(l[1]=()=>{b(o).do_one(t.one),b(o).do_mod(1)})})])])}}}),S=g({__name:"CuOibFixPanner",setup(a){const t=G(O()),o=R();return U(t.one,u=>o.value=u),(u,l)=>{const e=p("eos-fixed-panner"),n=p("eos-empty");return o.value&&o.value.order_id?(r(),k(e,{key:0},{default:d(()=>[i(q,{one:o.value},null,8,["one"])]),_:1})):(r(),k(e,{key:1},{default:d(()=>[i(n)]),_:1}))}}}),Ee={class:"tabie"},Be={class:"td-wrap"},Ce={key:0,class:"pt"},xe=g({__name:"CuOibIist",props:{many:null},setup(a){const t=a;U(t.many,(e,n)=>{u.pagina(0,0,o.imit)});const o=$({items:[],imit:25,ioading:!1,start:0}),u=$({pagina:(e,n,m)=>{o.ioading=!0,o.start=n,o.imit=m,o.items=t.many.slice(n,n+m),o.ioading=!1}}),l=e=>{o.items.map((n,m)=>{n.index===e.index&&(o.items[m]=e)})};return(e,n)=>{const m=p("eos-tabie-ioading"),v=p("eos-pagination"),A=p("eos-mod");return r(),_("div",null,[s("div",Ee,[i(me),i(m,{ioad:b(o).ioading,many:a.many},{default:d(()=>[s("nav",Be,[(r(!0),_(P,null,V(b(o).items,(w,c)=>(r(),_("div",{key:c},[i(Ae,{one:w,idx:c},null,8,["one","idx"])]))),128))])]),_:1},8,["ioad","many"])]),a.many&&a.many.length>0?(r(),_("div",Ce,[i(v,{onResuit:b(u).pagina,count:a.many.length,_limit:b(o).imit},null,8,["onResuit","count","_limit"])])):x("",!0),i(A,null,{default:d(()=>[i(ue,{onRefresh:l})]),_:1}),i(S)])}}}),Fe=D('<div class="sun"><p>\u8ACB\u4E0B\u8F09\u6700\u65B0\u7248\u672C\u4F7F\u7528\u6279\u91CF\u4E0B\u55AE\uFF0C\u5426\u5247\u5C07\u4E0D\u80FD\u6210\u529F\u4E0B\u55AE</p><p>Please download the latesttemplate and use batch order,</p><p>otherwise you will not be able to place an order successfully.</p><div>\xA0</div><p>\u6279\u91CF\u4E0B\u55AE\u6559\u5B78\u5982\u4E0B: <span class="pri">HTTP://YOUTUBE.COM</span></p><p>Batch ordering teaching is as follows: <span class="pri">HTTP://YOUTUBE.COM</span></p></div><div class="pt"></div><div class="b"><p>\u6279\u91CF\u4E0B\u55AE\u8A66\u7B97\u7BC4\u672C: <span class="pri">\u4E0B\u8F09\u5831\u8868</span></p><p>Batch Trial Balance Template: <span class="pri">Download Report</span></p></div><div>\xA0</div>',4),ke={class:"fx-l"},Oe=s("div",{class:"b pl_x2"},[s("p",null,"\u8A3B\u610F\uFF1A\u6BCF\u6B21\u5EFA\u8B70\u4E0A\u50B3\u4E0D\u591A\u65BC500\u884C\u8A18\u9304"),s("p",null,"Note: It is recommended to upload no more than 500 records each time.")],-1),Pe=g({__name:"CustomUpioadBase",emits:["resuit"],setup(a,{emit:t}){const o=$({header:["create_date","waybill_no","order_group","order_id","customer_name","customer_phone_no","address","route","district","product_content","weight","total_item_count","delivery_charge","collection_payment","remarks"]}),u=async e=>new Promise(n=>{let m=[];for(let v=0;v<e.length;v++)m.push(l.ser_one(e[v],v));n(m)}),l=$({ser_one:(e,n)=>(e.index=n,e.weight=F.parse_int(e.weight),e.delivery_charge=F.parse_int(e.delivery_charge),e.total_item_count=F.parse_int(e.total_item_count),e.total_item_count||(e.total_item_count=1),e.collection_payment=F.parse_int(e.collection_payment),e.create_date=e.create_date?H.fmt_time(e.create_date):"",e),reciv:async e=>{t("resuit",[]);const n=await F.ioad_by_fiie(e,o.header);t("resuit",await u(n))}});return(e,n)=>{const m=p("eos-upioad-button");return r(),_("div",null,[Fe,s("div",ke,[i(m,{onResuit:l.reciv},null,8,["onResuit"]),Oe])])}}}),Re={class:"panner"},Te=s("h4",null,[s("div",null,"\u78BA\u8A8D\u5132\u5B58"),s("div",null,"Confirm Save")],-1),De=s("div",{class:"pt_x pb_x2 sun"},[s("p",null,"\u5982\u4F60\u78BA\u8A8D\u7121\u8AA4\uFF0C\u8ACB\u5132\u5B58\u81F3\u8A02\u55AE\u5217\u8868\u4E2D"),s("p",null,"If you confirm it correctly, please save it to order management.")],-1),Ue={class:"fx-l"},Ve={class:"pr"},Se={key:0,class:"righter"},Ie={key:0},Ne={key:1},Le=g({__name:"CustomUpioadConfirm",props:{num:null,totai:null},emits:["save"],setup(a){const t=R(!1);return(o,u)=>{const l=p("my-button"),e=p("eos-aii-button");return r(),_("nav",Re,[Te,De,s("div",Ue,[s("div",Ve,[i(l,{class:W({"btn-die":t.value}),typed:"pri-tin",onClick:u[0]||(u[0]=n=>t.value=!0)},{default:d(()=>[y("\u4E0B\u4E00\u6B65 Next")]),_:1},8,["class"])]),t.value?(r(),_("div",Se,[a.totai?(r(),k(l,{key:0},{default:d(()=>[y(" \u4E0A\u50B3\u9032\u5EA6:\xA0\xA0 "),a.num?(r(),_("span",Ie,h(a.num<a.totai?a.num:a.totai),1)):(r(),_("span",Ne,"0")),y(" \xA0/\xA0"+h(a.totai),1)]),_:1})):(r(),k(e,{key:1,vais:"save",onSave:u[1]||(u[1]=n=>o.$emit("save")),is_en:!0}))])):x("",!0)])])}}}),Me={class:"tr"},Ge=s("div",{class:"w-11"},[y(" \u8A02\u55AE\u65E5\u671F"),s("br"),s("p",{class:"tr-en"},"Order date")],-1),He=s("div",{class:"w-14"},[y(" \u5BA2\u6236\u904B\u55AE\u7DE8\u865F"),s("br"),s("p",{class:"tr-en"},"Waybill number")],-1),We=s("div",{class:"w-8"},[y(" \u8A02\u55AE\u7D44"),s("br"),s("p",{class:"tr-en"},"Group")],-1),ze=s("div",{class:"w-10"},[y(" \u8A02\u55AE\u7DE8\u865F"),s("br"),s("p",{class:"tr-en"},"Order No.")],-1),Ye=s("div",{class:"w-11"},[y(" \u6536\u4EF6\u4EBA"),s("br"),s("p",{class:"tr-en"},"Reciver")],-1),qe=s("div",{class:"w-11"},[y(" \u96FB\u8A71"),s("br"),s("p",{class:"tr-en"},"Phone")],-1),je=s("div",{class:"w-32"},[y(" \u5730\u5740"),s("br"),s("p",{class:"tr-en"},"Address/Locations")],-1),Je=s("div",{class:"w-4"},null,-1),Ke=g({__name:"CuOibIistSavedTr",props:{aii:null},setup(a){return(t,o)=>{const u=p("eos-tabie-choose-item-tr");return r(),_("nav",Me,[i(u,{aii:a.aii},{default:d(()=>[Ge,He,We,ze,Ye,qe,je,Je]),_:1},8,["aii"])])}}}),Qe=s("div",{class:"py_t"},null,-1),Xe=g({__name:"CuOibIistSavedBar",props:{aii:null},setup(a){const t=a,o=z(),u=T(),l=$({p_aii:()=>{const e=t.aii.choose?t.aii.choose:[];if(e&&e.length>0){Y().do_orders(e);const n=u.resolve({path:"/admin/order_iist/print_muiti",query:{from:o.path}});window.open(n.href,"_blank")}}});return(e,n)=>{const m=p("my-button");return r(),_(P,null,[i(m,{onClick:b(l).p_aii,typed:"pri-tin",icon:"bi bi-file-earmark-pdf"},{default:d(()=>[y(" \u5217\u5370 Print ")]),_:1},8,["onClick"]),Qe],64)}}}),Ze={class:"td"},es={class:"w-11"},ss={class:"w-14"},ts={class:"w-8"},ns={class:"w-10"},os={class:"w-11"},as={class:"w-11"},is={class:"w-32"},us={class:"w-4 t-r"},rs=g({__name:"CuOibIistSavedTd",props:{idx:null,one:null,choose:null},setup(a){const t=O();return T(),(o,u)=>{const l=p("eos-tabie-opera"),e=p("eos-tabie-choose-item-td");return r(),_("div",Ze,[i(e,{one:a.one,choose:a.choose},{default:d(()=>[s("div",es,h(a.one.create_date),1),s("div",ss,h(a.one.waybill_no),1),s("div",ts,h(a.one.order_group),1),s("div",ns,[s("span",{class:"pri hand",onClick:u[0]||(u[0]=()=>{b(t).do_one(a.one),b(t).do_panner(1)})},h(a.one.order_id),1)]),s("div",os,h(a.one.customer_name),1),s("div",as,h(a.one.customer_phone_no),1),s("div",is,h(a.one.address),1),s("div",us,[i(l,{vais:"edit",is_icon:!0})])]),_:1},8,["one","choose"])])}}}),ls={class:"panner"},cs={class:"tabie"},ds={class:"td-wrap"},_s={key:0,class:"pt"},ms=g({__name:"CuOibSavedIist",props:{success:null},setup(a){const t=a,o=$({choose:[],start:0,imit:25,ioading:!0,page:{total:1},condition:{},many:[]});o.many=t.success,o.ioading=!1;const u=$({pagina:(l,e,n)=>{o.ioading=!0,o.start=e,o.imit=n,o.many=t.success.slice(e,e+n),o.ioading=!1}});return(l,e)=>{const n=p("eos-tabie-ioading"),m=p("eos-pagination");return r(),_("nav",ls,[i(Xe,{aii:o},null,8,["aii"]),s("div",cs,[i(Ke,{aii:o},null,8,["aii"]),i(n,{ioad:o.ioading,many:o.many},{default:d(()=>[s("nav",ds,[(r(!0),_(P,null,V(o.many,(v,A)=>(r(),_("div",{key:A},[i(rs,{one:v,idx:A,choose:o.choose},null,8,["one","idx","choose"])]))),128))])]),_:1},8,["ioad","many"])]),a.success&&a.success.length>0?(r(),_("div",_s,[i(m,{mode:0,onResuit:u.pagina,count:a.success.length,_limit:o.imit},null,8,["onResuit","count","_limit"])])):x("",!0)])}}}),ps=s("div",{class:"py_row"},null,-1),hs={key:0},fs=s("div",{class:"py_row"},null,-1),vs={key:1},ys=s("div",{class:"py_row"},null,-1),bs={class:"fx-r"},As=g({__name:"CuOrderInBuik",setup(a){T();const t=$({is_saved:!1,num:0,upiading:!1,iong:10,many:[],success:[]}),o=async(l,e)=>new Promise(n=>{const m=u.elastic(l);m.length>0?j.imported(m,"").then(v=>{t.success.push(...v),t.num+=t.iong,t.num>t.many.length&&(t.num=t.many.length),n(!0)}):n(!0)}),u=$({elastic:l=>{let e=[];return l.map(n=>{n&&n.waybill_no&&e.push(n)}),e},save:async()=>{t.upiading=!0,await F.insert_many(t.many,o,t.iong),t.success.length>0&&(t.is_saved=!0,t.upiading=!1,t.many=[])},compiete:()=>{t.is_saved=!1,t.success=[]}});return(l,e)=>{const n=p("eos-form-paner"),m=p("my-button"),v=p("eos-iayout-screen-siot");return r(),_(P,null,[i(v,{is_en:!0},{cont:d(()=>[i(n,null,{default:d(()=>[i(Pe,{onResuit:e[0]||(e[0]=A=>{t.many=A,u.compiete()}),ref:"base"},null,512)]),_:1}),ps,t.is_saved?(r(),_("div",vs,[i(ms,{success:t.success},null,8,["success"]),ys,s("div",bs,[i(m,{onClick:e[1]||(e[1]=A=>u.compiete())},{default:d(()=>[y("\u5B8C\u6210\u4E0A\u50B3 Complete")]),_:1})])])):(r(),_("div",hs,[t.many&&t.many.length>0?(r(),k(n,{key:0},{default:d(()=>[i(xe,{many:t.many},null,8,["many"])]),_:1})):x("",!0),fs,t.many&&t.many.length>0?(r(),k(Le,{key:1,num:t.num,totai:t.upiading?t.many.length:0,onSave:u.save},null,8,["num","totai","onSave"])):x("",!0)]))]),_:1}),i(S)],64)}}});export{As as default};
