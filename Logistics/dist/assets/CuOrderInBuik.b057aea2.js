import{d as A,s as D,k as P,g,p as h,i as w,o as u,c as p,a as e,h as a,w as _,q as x,J as C,e as E,b as $,x as W,_ as H,T as U,t as v,Q as G,H as V,m as F,F as T,r as I,M as k,y as Y,f as N,P as S,n as j,L as q,u as R,N as z}from"./index.cfdd819b.js";import{_ as J}from"./CoOrderFpCont.vue_vue_type_script_setup_true_lang.eebbd827.js";import{_ as Q}from"./EosCompanySwitchDrop.vue_vue_type_script_setup_true_lang.dece6ba4.js";import"./company.1202c262.js";const K={key:0,class:"panner"},X=e("h2",null,"\u4FEE\u6539\u5C0E\u5165\u524D\u7684\u8A02\u55AE\xA0Edit",-1),Z={key:0,class:"pb_x2 pt_x"},ee={class:"f-row"},se=e("div",{class:"py_row"},null,-1),te={class:"f-row"},ne=e("div",{class:"py_row"},null,-1),oe={class:"f-row"},ie=e("div",{class:"py_row"},null,-1),ae={class:"f-row"},ue=e("div",{class:"py_row"},null,-1),ce={class:"fx-c upper"},re=A({__name:"CuOibTdForm",emits:["refresh"],setup(t,{emit:c}){const n=D(),r=P(),o=P().one,s=g({receipt_date:"",order_id:"",index:0,waybill_no:"",order_group:"",total_item_count:0,customer_name:"",customer_phone_no:"",address:""}),i=g({receipt_date:!1,order_id:!1,waybill_no:!1,order_group:!1,total_item_count:!1,customer_name:!1,customer_phone_no:!1,address:!1}),d=function(){let y=!0;if(s.receipt_date)i.receipt_date=!1;else return i.receipt_date=!0,!1;return Object.values(i).map(l=>{l&&(y=!1)}),y},m=()=>{d()&&(c("refresh",s),r.do_mod(0))};return(y=>{if(y){for(let l in s)s[l]=y[l];W(()=>{y.receipt_date&&n.value.ioc(y.receipt_date)})}else r.do_mod(0)})(o),(y,l)=>{const O=h("fn-time"),B=h("eos-input"),M=h("my-button");return w(o)?(u(),p("div",K,[X,s?(u(),p("div",Z,[e("div",ee,[a(B,{class:"w-50",header:"\u8A02\u55AE\u65E5\u671F Order time"},{default:_(()=>[a(O,{ref_key:"timed",ref:n,onResuit:l[0]||(l[0]=b=>s.receipt_date=b)},null,512)]),_:1}),a(B,{class:"w-50",is_err:i.order_id,header:"\u8A02\u55AE\u7DE8\u865F Order no."},{default:_(()=>[x(e("input",{class:"input","onUpdate:modelValue":l[1]||(l[1]=b=>s.order_id=b),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,s.order_id]])]),_:1},8,["is_err","header"])]),se,e("div",te,[a(B,{class:"w-50",is_err:i.waybill_no,header:"\u904B\u55AE\u7DE8\u865F Waybill number"},{default:_(()=>[x(e("input",{class:"input","onUpdate:modelValue":l[2]||(l[2]=b=>s.waybill_no=b),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,s.waybill_no]])]),_:1},8,["is_err"]),a(B,{class:"w-50",is_err:i.order_group,header:"\u8A02\u55AE\u7D44 Order group"},{default:_(()=>[x(e("input",{class:"input","onUpdate:modelValue":l[3]||(l[3]=b=>s.order_group=b),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,s.order_group]])]),_:1},8,["is_err"])]),ne,e("div",oe,[a(B,{class:"w-50",is_err:i.total_item_count,header:"\u4EF6\u6578 Package"},{default:_(()=>[x(e("input",{class:"input",type:"number","onUpdate:modelValue":l[4]||(l[4]=b=>s.total_item_count=b),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,s.total_item_count]])]),_:1},8,["is_err"])]),ie,e("div",ae,[a(B,{class:"w-50",is_err:i.customer_name,header:"\u6536\u4EF6\u4EBA Recipient"},{default:_(()=>[x(e("input",{class:"input","onUpdate:modelValue":l[5]||(l[5]=b=>s.customer_name=b),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,s.customer_name]])]),_:1},8,["is_err"]),a(B,{class:"w-50",is_err:i.customer_phone_no,header:"\u96FB\u8A71\u865F\u78BC Phone number"},{default:_(()=>[x(e("input",{class:"input","onUpdate:modelValue":l[6]||(l[6]=b=>s.customer_phone_no=b),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,s.customer_phone_no]])]),_:1},8,["is_err"])]),ue,a(B,{class:"w-100",header:"\u5730\u5740 Address"},{default:_(()=>[x(e("textarea",{class:"input","onUpdate:modelValue":l[7]||(l[7]=b=>s.address=b),placeholder:"\u8ACB\u8F38\u5165 Please Enter"},null,512),[[C,s.address]])]),_:1})])):E("",!0),e("div",ce,[a(M,{onClick:m},{default:_(()=>[$("\u5132\u5B58")]),_:1})])])):E("",!0)}}}),le={},de={class:"tr"},_e=U('<div class="w-11"> \u8A02\u55AE\u65E5\u671F<br><p class="tr-en">Order date</p></div><div class="w-14"> \u5BA2\u6236\u904B\u55AE\u7DE8\u865F<br><p class="tr-en">Waybill number</p></div><div class="w-8"> \u8A02\u55AE\u7D44<br><p class="tr-en">Group</p></div><div class="w-11"> \u8A02\u55AE\u7DE8\u865F<br><p class="tr-en">Order No.</p></div><div class="w-12"> \u6536\u4EF6\u4EBA<br><p class="tr-en">Recipient</p></div><div class="w-11"> \u96FB\u8A71<br><p class="tr-en">Phone</p></div><div class="w-8"> \u4EF6\u6578<br><p class="tr-en">Package</p></div><div class="w-22"> \u5730\u5740<br><p class="tr-en">Address/Locations</p></div><div class="w-4"></div>',9),pe=[_e];function me(t,c){return u(),p("nav",de,pe)}const he=H(le,[["render",me]]),ve={class:"td"},fe={class:"w-11"},ye={class:"w-14"},be={class:"w-8"},we={class:"w-11"},$e={class:"w-12"},ge={class:"w-11"},Ae={class:"w-8"},Ee={class:"w-22"},Be={class:"w-4 t-r"},xe=A({__name:"CuOibIistTd",props:{idx:null,one:null},setup(t){const c=t,n=P();return(r,o)=>{const s=h("eos-tabie-opera");return u(),p("div",ve,[e("div",fe,v(t.one.receipt_date),1),e("div",ye,v(t.one.waybill_no),1),e("div",be,v(t.one.order_group),1),e("div",we,[e("div",{onClick:o[0]||(o[0]=()=>{w(n).do_one(t.one),w(n).do_panner(1)}),class:"pri hand"},v(t.one.order_id),1)]),e("div",$e,v(t.one.customer_name),1),e("div",ge,v(t.one.customer_phone_no),1),e("div",Ae,v(t.one.total_item_count),1),e("div",Ee,v(t.one.address),1),e("div",Be,[a(s,{vais:"edit",is_icon:!0,onEdit:o[1]||(o[1]=()=>{w(n).do_one(c.one),w(n).do_mod(1)})})])])}}}),L=A({__name:"CuOibFixPanner",setup(t){const c=G(P()),n=D();return V(c.one,r=>n.value=r),(r,o)=>{const s=h("eos-fixed-panner"),i=h("eos-empty");return n.value&&n.value.order_id?(u(),F(s,{key:0},{default:_(()=>[a(J,{one:n.value},null,8,["one"])]),_:1})):(u(),F(s,{key:1},{default:_(()=>[a(i)]),_:1}))}}}),Ce={class:"tabie"},Fe={class:"td-wrap"},ke={key:0,class:"pt"},Pe=A({__name:"CuOibIist",props:{many:null},setup(t){const c=t;V(c.many,(s,i)=>{r.pagina(0,0,n.imit)});const n=g({items:[],imit:50,ioading:!1,start:0}),r=g({pagina:(s,i,d)=>{n.ioading=!0,n.start=i,n.imit=d,n.items=c.many.slice(i,i+d),n.ioading=!1}}),o=s=>{n.items.map((i,d)=>{if(i.index===s.index){const m=n.items[d];for(let f in s)m[f]=s[f]}})};return(s,i)=>{const d=h("eos-tabie-ioading"),m=h("eos-pagination"),f=h("eos-mod");return u(),p("div",null,[e("div",Ce,[a(he),a(d,{ioad:w(n).ioading,many:t.many},{default:_(()=>[e("nav",Fe,[(u(!0),p(T,null,I(w(n).items,(y,l)=>(u(),p("div",{key:l},[a(xe,{one:y,idx:l},null,8,["one","idx"])]))),128))])]),_:1},8,["ioad","many"])]),t.many&&t.many.length>0?(u(),p("div",ke,[a(m,{mode:0,onResuit:w(r).pagina,count:t.many.length,_limit:w(n).imit},null,8,["onResuit","count","_limit"])])):E("",!0),a(f,null,{default:_(()=>[a(re,{onRefresh:o})]),_:1}),a(L)])}}}),Oe={class:""},De=U('<div class="sun"><p>\u8ACB\u4E0B\u8F09\u6700\u65B0\u7248\u672C\u4F7F\u7528\u6279\u91CF\u4E0B\u55AE\uFF0C\u5426\u5247\u5C07\u4E0D\u80FD\u6210\u529F\u4E0B\u55AE</p><p>Please download the latesttemplate and use batch order,</p><p>otherwise you will not be able to place an order successfully.</p><div>\xA0</div><p>\u6279\u91CF\u4E0B\u55AE\u6559\u5B78\u5982\u4E0B: <span class="pri">HTTP://YOUTUBE.COM</span></p><p>Batch ordering teaching is as follows: <span class="pri">HTTP://YOUTUBE.COM</span></p></div><div class="pt"></div><div class="b"><p>\u6279\u91CF\u4E0B\u55AE\u8A66\u7B97\u7BC4\u672C: <span class="pri">\u4E0B\u8F09\u5831\u8868</span></p><p>Batch Trial Balance Template: <span class="pri">Download Report</span></p></div><div>\xA0</div>',4),Te={class:"fx-l upper"},Re=e("div",{class:"b pl_x2 righter"},[e("p",null,"\u8A3B\u610F\uFF1A\u6BCF\u6B21\u5EFA\u8B70\u4E0A\u50B3\u4E0D\u591A\u65BC500\u884C\u8A18\u9304"),e("p",null,"Note: It is recommended to upload no more than 500 records each time.")],-1),Ue=A({__name:"CustomUpioadBase",emits:["resuit"],setup(t,{emit:c}){const n=g({header:["receipt_date","waybill_no","order_group","order_id","customer_name","customer_phone_no","address","route","district","product_content","weight","total_item_count","delivery_charge","collection_payment","remarks"]}),r=async s=>new Promise(i=>{let d=[];for(let m=0;m<s.length;m++)d.push(o.ser_one(s[m],m));i(d)}),o=g({ser_one:(s,i)=>(s.index=i,s.weight=k.parse_int(s.weight),s.delivery_charge=k.parse_int(s.delivery_charge),s.total_item_count=k.parse_int(s.total_item_count),s.total_item_count||(s.total_item_count=1),s.collection_payment=k.parse_int(s.collection_payment),s.receipt_date=s.receipt_date?Y.fmt_time(s.receipt_date):"",s),reciv:async s=>{c("resuit",[]);const i=await k.ioad_by_fiie(s,n.header);c("resuit",await r(i))}});return(s,i)=>{const d=h("eos-upioad-button");return u(),p("div",Oe,[De,e("div",Te,[a(d,{onResuit:o.reciv},null,8,["onResuit"]),Re])])}}}),Ve={class:"panner upper"},Ie=e("h4",null,[e("div",null,"\u78BA\u8A8D\u5132\u5B58"),e("div",null,"Confirm Save")],-1),Ne=e("div",{class:"pt_x pb_x2 sun"},[e("p",null,"\u5982\u4F60\u78BA\u8A8D\u7121\u8AA4\uFF0C\u8ACB\u5132\u5B58\u81F3\u8A02\u55AE\u5217\u8868\u4E2D"),e("p",null,"If you confirm it correctly, please save it to order management.")],-1),Se={class:"fx-l"},Le={class:"pr"},Me={key:0,class:"righter"},We={key:0},He={key:1},Ge={key:1,class:"pl_x2 fx-l"},Ye=e("span",null,"\u4E0A\u50B3\u81F3:\xA0\xA0",-1),je=A({__name:"CustomUpioadConfirm",props:{num:null,totai:null},emits:["save"],setup(t){D();const c=N(),n=S(),r=D(!1);return(o,s)=>{const i=h("my-button"),d=h("eos-aii-button");return u(),p("nav",Ve,[Ie,Ne,e("div",Se,[e("div",Le,[a(i,{class:j({"btn-die":r.value}),typed:"pri-tin",onClick:s[0]||(s[0]=m=>r.value=!0)},{default:_(()=>[$("\u4E0B\u4E00\u6B65 Next")]),_:1},8,["class"])]),r.value?(u(),p("div",Me,[t.totai?(u(),F(i,{key:0},{default:_(()=>[$(" \u4E0A\u50B3\u9032\u5EA6:\xA0\xA0 "),t.num?(u(),p("span",We,v(t.num<t.totai?t.num:t.totai),1)):(u(),p("span",He,"0")),$(" \xA0/\xA0"+v(t.totai),1)]),_:1})):(u(),F(d,{key:1,vais:"save",onSave:s[1]||(s[1]=m=>o.$emit("save")),is_en:!0}))])):E("",!0),w(c).is_admin?(u(),p("div",Ge,[Ye,e("span",null,v(w(n).company.name),1)])):E("",!0)])])}}}),qe={class:"tr"},ze=e("div",{class:"w-11"},[$(" \u8A02\u55AE\u65E5\u671F"),e("br"),e("p",{class:"tr-en"},"Order date")],-1),Je=e("div",{class:"w-14"},[$(" \u7FD4\u70FD\u904B\u55AE\u7DE8\u865F"),e("br"),e("p",{class:"tr-en"},"Waybill number")],-1),Qe=e("div",{class:"w-14"},[$(" \u5BA2\u6236\u904B\u55AE\u7DE8\u865F"),e("br"),e("p",{class:"tr-en"},"Waybill number")],-1),Ke=e("div",{class:"w-8"},[$(" \u8A02\u55AE\u7D44"),e("br"),e("p",{class:"tr-en"},"Group")],-1),Xe=e("div",{class:"w-10"},[$(" \u8A02\u55AE\u7DE8\u865F"),e("br"),e("p",{class:"tr-en"},"Order No.")],-1),Ze=e("div",{class:"w-11"},[$(" \u6536\u4EF6\u4EBA"),e("br"),e("p",{class:"tr-en"},"Reciver")],-1),es=e("div",{class:"w-10"},[$(" \u96FB\u8A71"),e("br"),e("p",{class:"tr-en"},"Phone")],-1),ss=e("div",{class:"w-19"},[$(" \u5730\u5740"),e("br"),e("p",{class:"tr-en"},"Address/Locations")],-1),ts=e("div",{class:"w-4"},null,-1),ns=A({__name:"CuOibIistSavedTr",props:{aii:null},setup(t){return(c,n)=>{const r=h("eos-tabie-choose-item-tr");return u(),p("nav",qe,[a(r,{aii:t.aii},{default:_(()=>[ze,Je,Qe,Ke,Xe,Ze,es,ss,ts]),_:1},8,["aii"])])}}}),os=e("div",{class:"py_t"},null,-1),is=A({__name:"CuOibIistSavedBar",props:{aii:null},setup(t){const c=t,n=q(),r=R(),o=g({p_aii:()=>{const s=c.aii.choose?c.aii.choose:[];if(s&&s.length>0){z().do_orders_print_2(s);const i=r.resolve({path:"/admin/order_iist/print_muiti"});setTimeout(()=>window.open(i.href+"?from="+n.path+"&source=2","_blank"),200)}}});return(s,i)=>{const d=h("my-button");return u(),p(T,null,[a(d,{onClick:w(o).p_aii,typed:"pri-tin",icon:"bi bi-file-earmark-pdf"},{default:_(()=>[$(" \u5217\u5370 Print ")]),_:1},8,["onClick"]),os],64)}}}),as={class:"td"},us={class:"w-11"},cs={class:"w-14 pr_s"},rs={class:"w-14 pr_s"},ls={class:"w-8"},ds={class:"w-10 pr_s"},_s={class:"w-11"},ps={class:"w-10"},ms={class:"w-19 t-elip_x2"},hs=e("div",{class:"w-4 t-r"},null,-1),vs=A({__name:"CuOibIistSavedTd",props:{idx:null,one:null,aii:null},setup(t){const c=P();return R(),(n,r)=>{const o=h("eos-tabie-choose-item-td");return u(),p("div",as,[a(o,{one:t.one,aii:t.aii},{default:_(()=>[e("div",us,v(t.one.receipt_date),1),e("div",cs,[e("span",{class:"pri hand",onClick:r[0]||(r[0]=()=>{w(c).do_one(t.one),w(c).do_panner(1)})},v(t.one.cf_waybill_no),1)]),e("div",rs,v(t.one.waybill_no),1),e("div",ls,v(t.one.order_group),1),e("div",ds,v(t.one.order_id),1),e("div",_s,v(t.one.customer_name),1),e("div",ps,v(t.one.customer_phone_no),1),e("div",ms,v(t.one.address),1),hs]),_:1},8,["one","aii"])])}}}),fs={class:"panner"},ys={class:"tabie"},bs={class:"td-wrap"},ws={key:0,class:"pt"},$s=A({__name:"CuOibSavedIist",props:{success:null},setup(t){const c=t,n=g({choose:[],start:0,imit:25,ioading:!0,page:{total:1},condition:{},many:[]});n.many=c.success,n.ioading=!1;const r=g({pagina:(o,s,i)=>{n.ioading=!0,n.start=s,n.imit=i,n.many=c.success.slice(s,s+i),n.ioading=!1}});return(o,s)=>{const i=h("eos-tabie-ioading"),d=h("eos-pagination");return u(),p("nav",fs,[a(is,{aii:n},null,8,["aii"]),e("div",ys,[a(ns,{aii:n},null,8,["aii"]),a(i,{ioad:n.ioading,many:n.many},{default:_(()=>[e("nav",bs,[(u(!0),p(T,null,I(n.many,(m,f)=>(u(),p("div",{key:f},[a(vs,{one:m,idx:f,aii:n},null,8,["one","idx","aii"])]))),128))])]),_:1},8,["ioad","many"])]),t.success&&t.success.length>0?(u(),p("div",ws,[a(d,{mode:0,onResuit:r.pagina,count:t.success.length,_limit:n.imit},null,8,["onResuit","count","_limit"])])):E("",!0)])}}}),gs=e("div",{class:"py_row"},null,-1),As={key:0},Es=e("div",{class:"py_row"},null,-1),Bs={key:1},xs=e("div",{class:"py_row"},null,-1),Cs={class:"fx-r"},Ds=A({__name:"CuOrderInBuik",setup(t){const c=R(),n=N(),r=S();n.is_admin&&(r.company.uuid||c.push("/admin/company_choose"));const o=g({is_saved:!1,num:0,upiading:!1,iong:10,many:[],success:[]}),s=async(d,m)=>new Promise(f=>{const y=i.elastic(d);y.length>0?console.log("\u5BFC\u5165 =",y):f(!0)}),i=g({elastic:d=>{let m=[];return d.map(f=>{f&&f.receipt_date&&m.push(f)}),m},save:async()=>{i.start(),await k.insert_many(o.many,s,o.iong),o.success.length>0&&(o.is_saved=!0,o.upiading=!1,o.many=[])},compiete:()=>{o.is_saved=!1,o.success.length=0},back:()=>c.back(),start:()=>{o.num=0,o.success.length=0,o.upiading=!0}});return(d,m)=>{const f=h("eos-form-paner"),y=h("my-button"),l=h("eos-iayout-screen-extra");return u(),p(T,null,[a(l,{is_en:!0,onBack:i.back},{opera:_(()=>[w(n).is_admin?(u(),F(Q,{key:0})):E("",!0)]),cont:_(()=>[a(f,null,{default:_(()=>[a(Ue,{onResuit:m[0]||(m[0]=O=>{o.many=O,i.compiete()}),ref:"base"},null,512)]),_:1}),gs,o.is_saved?(u(),p("div",Bs,[a($s,{success:o.success},null,8,["success"]),xs,e("div",Cs,[a(y,{icon:"bi bi-chevron-left",onClick:m[1]||(m[1]=O=>i.compiete())},{default:_(()=>[$("\u8FD4\u56DE Back")]),_:1})])])):(u(),p("div",As,[o.many&&o.many.length>0?(u(),F(f,{key:0},{default:_(()=>[a(Pe,{many:o.many},null,8,["many"])]),_:1})):E("",!0),Es,o.many&&o.many.length>0?(u(),F(je,{key:1,num:o.num,totai:o.upiading?o.many.length:0,onSave:i.save},null,8,["num","totai","onSave"])):E("",!0)]))]),_:1},8,["onBack"]),a(L)],64)}}});export{Ds as default};
