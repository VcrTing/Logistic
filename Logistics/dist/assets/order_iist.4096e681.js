import{d as A,o as l,c as p,F as E,r as N,a as e,n as F,t as y,e as w,u as I,k as g,O as B,f as C,p as v,h as m,w as f,i as r,P as S,m as x,b,g as O,Q as R,N as V,v as T,y as D,I as P,z as W,R as j,L as H,M as Q,_ as Y,x as J,S as X}from"./index.7e76ef48.js";import{_ as Z}from"./EosCompanySwitchDrop.vue_vue_type_script_setup_true_lang.e55ecf00.js";import{_ as ee}from"./JsBarcode.vue_vue_type_script_setup_true_lang.dddc1945.js";import{L as se}from"./ICON_CF_S.c52d5a84.js";import{_ as te}from"./OrderIistFixedPanner.vue_vue_type_script_setup_true_lang.9508bd35.js";import"./company.06acef09.js";import"./CoOrderFpCont.vue_vue_type_script_setup_true_lang.986d401d.js";const ne={class:"eos-tabie-opera fx-r fx-wp"},oe=["onClick"],ie={key:0,class:"hand"},ae={key:1,class:"hand hv-big"},ue=A({__name:"EosTabieOperaOrder",props:{vais:null,is_icon:{type:Boolean}},emits:["view","edit","trash","save","print","cancei"],setup(u,{emit:a}){const n=[{txt:"\u8A73\u60C5",code:"view",caii:()=>a("view"),icon:"bi bi-eye",ciass:"pri_son"},{txt:"\u522A\u9664",code:"trash",caii:()=>a("trash"),icon:"bi bi-trash",ciass:"err_trash_son"},{txt:"\u53D6\u6D88",code:"cancei",caii:()=>a("cancei"),icon:"bi bi-x-circle",ciass:"pri_son"},{txt:"\u7DE8\u8F2F",code:"edit",caii:()=>a("edit"),icon:"bi bi-pencil-square",ciass:"pri_son"},{txt:"\u5132\u5B58",code:"save",caii:()=>a("save"),icon:"bi bi-save",ciass:"pri_son"},{txt:"\u6253\u5370",code:"print",caii:()=>a("print"),icon:"bi bi-printer-fill",ciass:"pri_son"}];return(t,o)=>(l(),p("div",ne,[(l(),p(E,null,N(n,(i,s)=>e("span",{key:s},[u.vais&&u.vais.indexOf(i.code)>=0?(l(),p("span",{key:0,class:F(["px_s",i.ciass]),onClick:c=>i.caii()},[u.is_icon?(l(),p("span",ae,[e("i",{class:F(["d-ib",i.icon])},null,2)])):(l(),p("span",ie,y(i.txt),1))],10,oe)):w("",!0)])),64))]))}}),ce={class:"w-9"},_e={class:"w-14 pr_s"},le={class:"w-12 pr_s"},re={class:"w-10 pr"},de={class:"w-11 px_s fx-l ps-r"},pe=e("span",{class:"hv-big"},[e("i",{class:"bi bi-person-circle"})],-1),he=[pe],me={class:"w-10 pr"},ye={class:"w-9 pr_s"},fe={class:"w-10"},ve={class:"w-8 pr_s"},$e={class:"w-7 fx-r"},be=A({__name:"OrderIistTd",props:{idx:null,one:null,aii:null},setup(u){const a=u,n=I(),t=g(),o=B(),i=C().is_admin,s={print:()=>new Promise(c=>{const _=a.one;o.do_order(_),t.do_mod(1),o.do_orders_print([_]),o.read(_.id,_.is_new),_.is_new=!1,c(0)}),open:c=>{a.aii.who.length=0,a.aii.who.push(a.one),t.do_mod(c)},trash:()=>s.open(-205),cancei:()=>s.open(-206)};return(c,_)=>{const h=v("eos-tabie-choose-item-td");return l(),p("div",{class:F(["td",{"td-kiiied":u.one.kiiied,"td-focus-err":u.one.is_new,"td-succ":u.one.is_complete_list,"td-die":u.one.is_cancel}])},[m(h,{one:u.one,aii:u.aii},{default:f(()=>[e("div",ce,y(r(S).view_time(u.one.create_date,"/")),1),e("div",_e,y(u.one.cf_waybill_no),1),e("div",le,y(u.one.waybill_no),1),e("div",re,y(u.one.order_group),1),e("div",de,[e("span",{class:F(["order-td-deiivery-icon",{"order-td-deiivery-icon-iive":u.one.delivery_man_info&&u.one.delivery_man_info.id}]),onClick:_[0]||(_[0]=()=>{r(o).do_order(u.one),r(n).push("/admin/order_iist/edit")})},he,2),e("span",{class:"pri hand",onClick:_[1]||(_[1]=()=>{r(o).do_order(u.one),r(t).do_panner(1),r(o).read(u.one.id,u.one.is_new),u.one.is_new=!1})},y(u.one.order_id),1)]),e("div",me,y(r(S).view_time(u.one.delivery_date,"/")),1),e("div",ye,y(r(S).view_time(u.one.receipt_date,"/")),1),e("div",fe,y(u.one.customer_name),1),e("div",ve,y(u.one.customer_phone_no),1),e("div",$e,[m(ue,{is_icon:!0,vais:r(i)?"trash_cancei_edit_print":"cancei_edit_print",onEdit:_[2]||(_[2]=()=>{r(o).do_order(u.one),r(n).push("/admin/order_iist/edit")}),onTrash:_[3]||(_[3]=d=>s.trash()),onCancei:_[4]||(_[4]=d=>s.cancei()),onPrint:_[5]||(_[5]=d=>s.print())},null,8,["vais"])])]),_:1},8,["one","aii"])],2)}}}),xe={class:"tr"},Ae=e("div",{class:"w-9"},[b(" \u5275\u5EFA\u65E5\u671F"),e("br"),e("p",{class:"tr-en"},"Create date")],-1),we=e("div",{class:"w-14"},[b(" \u7FD4\u70FD\u904B\u55AE\u865F\u78BC"),e("br"),e("p",{class:"tr-en"},"CF waybill number")],-1),ke=e("div",{class:"w-12"},[b(" \u5BA2\u6236\u904B\u55AE\u7DE8\u865F"),e("br"),e("p",{class:"tr-en"},"Waybill number")],-1),ge=e("div",{class:"w-10"},[b(" \u8A02\u55AE\u7D44"),e("br"),e("p",{class:"tr-en"},"Group")],-1),Ce=e("div",{class:"w-11"},[b(" \u8A02\u55AE\u7DE8\u865F"),e("br"),e("p",{class:"tr-en"},"Order No.")],-1),Ee=e("div",{class:"w-10"},[b(" \u6D3E\u9001\u65E5\u671F"),e("br"),e("p",{class:"tr-en"},"Delivery date")],-1),De=e("div",{class:"w-9"},[b(" \u8A02\u55AE\u65E5\u671F"),e("br"),e("p",{class:"tr-en"},"Order date")],-1),Fe=e("div",{class:"w-10"},[b(" \u6536\u4EF6\u4EBA"),e("br"),e("p",{class:"tr-en"},"Recipient")],-1),Be=e("div",{class:"w-8"},[b(" \u6536\u4EF6\u96FB\u8A71"),e("br"),e("p",{class:"tr-en"},"Phone")],-1),Oe={class:"w-7 fx-r"},Te=A({__name:"OrderIistTr",props:{aii:null},setup(u){return(a,n)=>{const t=v("eos-go-button"),o=v("eos-tabie-choose-item-tr");return l(),p("nav",xe,[m(o,{aii:u.aii},{default:f(()=>[Ae,we,ke,ge,Ce,Ee,De,Fe,Be,e("div",Oe,[u.aii.many.length>30?(l(),x(t,{key:0})):w("",!0)])]),_:1},8,["aii"])])}}}),Pe=e("i",{class:"bi bi-filetype-pdf"},null,-1),Re=e("span",null,"\xA0\u5217\u5370 Print",-1),Ie=A({__name:"EosPdfButton",setup(u){return(a,n)=>{const t=v("my-button");return l(),x(t,{typed:"pri-tin"},{default:f(()=>[Pe,Re]),_:1})}}}),Me=e("i",{class:"bi bi-trash"},null,-1),Se=e("span",null," \u6279\u91CF\u522A\u9664\u9078\u64C7\u8A02\u55AE Delete order selection in bulk ",-1),Ve=e("i",{class:"bi bi-x-circle"},null,-1),Ne=e("span",null," \u6279\u91CF\u53D6\u6D88\u9078\u64C7\u8A02\u55AE Cancel order selection in bulk ",-1),L=A({__name:"EosMuiTrashButton",props:{is_cancei:{type:Boolean}},emits:["trash","cancei"],setup(u){return(a,n)=>{const t=v("my-button");return u.is_cancei?(l(),x(t,{key:1,typed:"pri-out",onClick:n[1]||(n[1]=o=>a.$emit("cancei"))},{default:f(()=>[Ve,Ne]),_:1})):(l(),x(t,{key:0,typed:"pri-out",onClick:n[0]||(n[0]=o=>a.$emit("trash"))},{default:f(()=>[Me,Se]),_:1}))}}}),Ue={class:"fx-s fx-b"},Le=e("span",{class:"px_s"},null,-1),je=e("i",{class:"bi bi-person-plus"},null,-1),qe=e("i",{class:"bi bi-plus-lg"},null,-1),ze={key:0,class:"pt"},Ge=e("span",{class:"px_s"},null,-1),Ke=e("span",{class:"px_s"},null,-1),We=e("i",{class:"bi bi-file-earmark-spreadsheet"},null,-1),He=e("div",{class:"py_t"},null,-1),Qe=A({__name:"OrderIistBar",props:{aii:null},setup(u){const a=u,n=g(),t=C(),o=I(),i=t.is_admin,s=O({p_aii:()=>{s._has_choose()&&(B().do_orders_print(a.aii.choose),o.push("/admin/order_iist/print_muiti"))},export_excei:async()=>{const c=[],_=C().company.uuid,h=a.aii?a.aii.choose:[];h&&h.length>0&&h.map(d=>{const $=d.cf_waybill_no;$&&c.push($+"")}),_&&c.length>0&&R.excei(c,_+"")},export_front:()=>{const _=(a.aii?a.aii.choose:[]).map(h=>{for(let d in h)h[d]=h[d]?h[d]:"";return h.company=h.company?h.company.name:"",h});_&&_.length>0&&V.dowioad_xisx(_)},_has_choose:()=>{const c=a.aii.choose;return c&&c.length>0},mui_trash:()=>{s._has_choose()&&n.do_mod(-201)},mui_cancei:()=>{s._has_choose()&&n.do_mod(-202)},mui_deiivery_pius:()=>{n.do_mod(102)}});return(c,_)=>{const h=v("my-button");return l(),p(E,null,[e("div",Ue,[e("div",null,[e("div",null,[m(Ie,{onClick:_[0]||(_[0]=d=>r(s).p_aii())}),Le,r(i)?(l(),x(h,{key:0,typed:"pri-out",onClick:_[1]||(_[1]=d=>r(s).mui_deiivery_pius())},{default:f(()=>[je,b(" \xA0\u6279\u91CF\u6DFB\u52A0\u9001\u8CA8\u54E1 Upload Deliveryman in bulk ")]),_:1})):(l(),x(h,{key:1,typed:"pri-out",onClick:_[2]||(_[2]=d=>r(o).push("/admin/custom_order_iist/upioad_order_in_buik"))},{default:f(()=>[qe,b(" \u6279\u91CF\u4E0A\u50B3\u8A02\u55AE Upload orders in bulk ")]),_:1}))]),r(i)?(l(),p("div",ze,[m(L,{onTrash:r(s).mui_trash,onCancei:_[3]||(_[3]=()=>{})},null,8,["onTrash"]),Ge,m(L,{is_cancei:!0,onCancei:r(s).mui_cancei,onTrash:_[4]||(_[4]=()=>{})},null,8,["onCancei"]),Ke])):w("",!0)]),e("div",null,[m(h,{onClick:_[5]||(_[5]=d=>r(s).export_excei())},{default:f(()=>[We,b(" \xA0\u5C0E\u51FA Excel Export Excel ")]),_:1})])]),He],64)}}}),Ye={class:"fiiter-bar fx-t"},Je={class:"fx-1"},Xe={class:"fiiter-inner fiiter-inner-many"},Ze=e("option",{value:""},"\u65E5\u671F\u985E\u578B Date type",-1),es=e("option",{value:"creation"},"\u5275\u5EFA\u65E5\u671F Create date",-1),ss=e("option",{value:"receive"},"\u8A02\u55AE\u65E5\u671F Order date",-1),ts=e("option",{value:"delivery"},"\u6D3E\u9001\u65E5\u671F Delivery date",-1),ns=[Ze,es,ss,ts],os=e("div",{class:"pt_s"},null,-1),is=A({__name:"OrderIistTop",emits:["search"],setup(u,{emit:a}){I(),T();const n=C();let t=O({wb_order_no:"",startDate:"",endDate:"",dateType:"",deliveryman:""});const o=()=>a("search",t);return(i,s)=>{const c=v("eos-input-fiiter"),_=v("fn-time-doubie"),h=v("eos-search-button");return l(),p("div",null,[e("div",Ye,[e("nav",Je,[e("div",Xe,[m(c,{class:"w-31",header:"\u4EFB\u610F\u904B\u55AE\u7DE8\u865F:"},{default:f(()=>[D(e("input",{class:"input","onUpdate:modelValue":s[0]||(s[0]=d=>r(t).wb_order_no=d),onBlur:s[1]||(s[1]=()=>{r(t).wb_order_no&&o()}),placeholder:"Enter the any waybill number"},null,544),[[P,r(t).wb_order_no]])]),_:1}),m(c,{class:"w-18",header:""},{default:f(()=>[D(e("select",{class:F(["input px-0",{"ui-ip-fiiter-empty":!r(t).dateType}]),"onUpdate:modelValue":s[2]||(s[2]=d=>r(t).dateType=d)},ns,2),[[W,r(t).dateType]])]),_:1}),m(c,{class:"w-34",header:"\u65E5\u671F\u5340\u9593:"},{default:f(()=>[m(_,{onReset:s[3]||(s[3]=()=>{r(t).startDate="",r(t).endDate="",o()}),onResuit_1:s[4]||(s[4]=d=>r(t).startDate=d),onResuit_2:s[5]||(s[5]=d=>r(t).endDate=d)})]),_:1}),r(n).is_admin?(l(),x(c,{key:0,class:"w-17",header:"\u9001\u8CA8\u54E1:"},{default:f(()=>[D(e("input",{class:"input","onUpdate:modelValue":s[6]||(s[6]=d=>r(t).deliveryman=d),placeholder:"Delivery men"},null,512),[[P,r(t).deliveryman]])]),_:1})):w("",!0)])]),e("div",{class:F(["",{"fiiter-fixed-btn":r(n).is_admin}])},[m(h,{onResuit:o,forms:r(t),kiii_vaiid:!0,is_en:!0},null,8,["forms"])],2)]),os])}}}),as=A({__name:"OrderIistTopCompanySwitch",emits:["refresh"],setup(u){const a=C();return j(),(n,t)=>r(a).is_admin?(l(),x(Z,{key:0,onResuit:t[0]||(t[0]=o=>{n.$emit("refresh")})})):w("",!0)}}),k=u=>(H("data-v-80d23405"),u=u(),Q(),u),us={class:"fx-c eos-oop-wrapper pt_s"},cs={class:"eos-order-one-pdf"},_s={border:"1",cellspacing:"0"},ls={width:"24%",style:{padding:"0.3em 0.5em"}},rs=["src"],ds=k(()=>e("td",{class:"t_c"},[e("h1",null,"\u7FD4\u70FD\u7269\u6D41"),e("h4",null,"Cheung Fung Logistics Limited")],-1)),ps={colspan:"2"},hs=k(()=>e("p",null,"\u7FD4\u70FD\u904B\u55AE\u7DE8\u865F CF waybill number:",-1)),ms={class:"t_c pt_1"},ys={class:"eoop_center_tabie",border:"1",cellspacing:"0"},fs={rowspan:"3",width:"54%",class:"t_t"},vs=k(()=>e("p",{class:"pt_1"},"\u6D3E\u9001\u5730\u5740 Ddelivery address:",-1)),$s={key:0,class:"ih-h4"},bs={key:1,class:"ih-h6"},xs=k(()=>e("p",null,"\u6536\u4EF6\u4EBA To :",-1)),As=k(()=>e("p",null,"\u6536\u4EF6\u4EBA\u96FB\u8A71 Tel :",-1)),ws=k(()=>e("p",null,"\u5BA2\u6236\u904B\u55AE\u7DE8\u865F Waybill number :",-1)),ks={key:0,class:"n eiip_x1"},gs={key:1,class:"n eiip_x1"},Cs={class:"eoop_center_tabie",border:"1",cellspacing:"0"},Es={colspan:"3"},Ds=k(()=>e("p",null,"\u5BC4\u4EF6\u4EBA\u8CC7\u6599 FROM :",-1)),Fs={class:"ih-h4"},Bs={width:"41%"},Os=k(()=>e("p",null,"\u8A02\u55AE\u7D44 Order group :",-1)),Ts={width:"28%"},Ps=k(()=>e("p",null,"\u91CD\u91CF Weight :",-1)),Rs=k(()=>e("p",null,"\u5730\u5340 District :",-1)),Is=k(()=>e("p",null,"\u8A02\u55AE\u7DE8\u865F Order No. :",-1)),Ms={key:0,class:"n"},Ss={key:1,class:"n eiip_x1"},Vs=k(()=>e("p",null,"\u4EF6\u6578 Package :",-1)),Ns=k(()=>e("p",null,"\u8DEF\u7DDA Route :",-1)),Us={class:"eoop_center_tabie",border:"1",cellspacing:"0"},Ls={width:"54%"},js=k(()=>e("p",null,"\u904B\u8CBB Delivery charge:",-1)),qs={key:0,style:{display:"inline-block"}},zs=k(()=>e("p",null,"\u4EE3\u6536\u8CA8\u6B3E Collection payment:",-1)),Gs={key:0,style:{display:"inline-block"}},Ks={class:"",colspan:"2"},Ws=k(()=>e("p",null,"\u5099\u8A3B Note:",-1)),Hs={class:"mh_5 eiip_x4 ih-h4 pb_1"},Qs=A({__name:"CoPdfOrderOne",props:{one:null,idx:null},setup(u){const a=u,n=()=>a.one.company?a.one.company.name:"",t=(o,i="- -")=>a.one[o]?a.one[o]:i;return(o,i)=>(l(),p("div",us,[e("div",cs,[e("table",_s,[e("tr",null,[e("td",ls,[e("img",{class:"w-100",src:r(se)},null,8,rs)]),ds]),e("tr",null,[e("td",ps,[hs,e("div",ms,[m(ee,{class:"barcode",w:444,idx:u.idx,code:u.one.cf_waybill_no},null,8,["idx","code"])])])])]),e("table",ys,[e("tr",null,[e("td",fs,[vs,t("address").length<96?(l(),p("h4",$s,y(t("address")),1)):(l(),p("h6",bs,y(t("address")),1))]),e("td",null,[xs,e("h4",null,y(t("customer_name")),1)])]),e("tr",null,[e("td",null,[As,e("h4",null,y(t("customer_phone_no")),1)])]),e("tr",null,[e("td",null,[ws,u.one.waybill_no.length<19?(l(),p("h4",ks,y(t("waybill_no")),1)):(l(),p("h6",gs,y(t("waybill_no")),1))])])]),e("table",Cs,[e("tr",null,[e("td",Es,[Ds,e("h4",Fs,y(n())+"\xA0 ",1)])]),e("tr",null,[e("td",Bs,[Os,e("h4",null,y(t("order_group")),1)]),e("td",Ts,[Ps,e("h4",null,y(t("weight","0"))+"\xA0KG",1)]),e("td",null,[Rs,e("h4",null,y(t("district")),1)])]),e("tr",null,[e("td",null,[Is,u.one.order_id.length<19?(l(),p("h4",Ms,y(t("order_id")),1)):(l(),p("h6",Ss,y(t("order_id")),1))]),e("td",null,[Vs,e("h4",null,y(t("count_now"))+"/"+y(t("total_item_count")),1)]),e("td",null,[Ns,e("h4",null,y(t("route")),1)])])]),e("table",Us,[e("tr",null,[e("td",Ls,[js,e("h4",null,[b("HK$\xA0"),t("delivery_charge","")?(l(),p("div",qs,y(r(V).money(t("delivery_charge",""))),1)):w("",!0)])]),e("td",null,[zs,e("h4",null,[b("HK$\xA0"),t("collection_payment","")?(l(),p("div",Gs,y(r(V).money(t("collection_payment",""))),1)):w("",!0)])])]),e("tr",null,[e("td",Ks,[Ws,e("h4",Hs,y(t("remarks")),1)])])])])]))}});const Ys=Y(Qs,[["__scopeId","data-v-80d23405"]]),Js={class:"pr sub"},Xs=e("span",null,"\xA0",-1),Zs=A({__name:"OrderOnePrintMod",setup(u){const a=B().order,n=O({many:[],ioading:!0});return(()=>{B().do_orders([a]),n.many=[];const o=a.total_item_count;for(let i=0;i<o;i++)a.count_now=i+1,n.many.push({...a});setTimeout(()=>n.ioading=!1,100)})(),(o,i)=>{const s=v("eos-tabie-ioading"),c=v("cp-pdfs-button"),_=v("my-button"),h=v("eos-panner-print");return l(),x(h,null,{cont:f(()=>[m(s,{many:n.many,ioad:n.ioading},{default:f(()=>[(l(!0),p(E,null,N(n.many,(d,$)=>(l(),p("div",{class:"pb_x3 fx-s fx-t",key:$},[e("span",Js,y(d.count_now)+" / "+y(d.total_item_count),1),m(Ys,{class:"__qiong_printed_ciass",one:d,idx:$},null,8,["one","idx"]),Xs]))),128))]),_:1},8,["many","ioad"])]),bar:f(()=>[n.many&&n.many.length>0?(l(),x(c,{key:0,ref:"pdfs",doms:"__qiong_printed_ciass"},null,512)):(l(),x(_,{key:1,onClick:i[0]||(i[0]=()=>{r(g)().do_mod(0)}),typed:"pri-tin"},{default:f(()=>[b("\u95DC\u9589")]),_:1}))]),_:1})}}}),et=A({__name:"OrderTrashRef",props:{aii:null},setup(u,{expose:a}){const n=u;B();const t=C().is_admin,o={buiid:()=>{const i=n.aii.who;if(i.length==1){const s=i[0];return s?s.id:null}return null},deiete:async()=>new Promise(async i=>{if(t)try{const s=o.buiid();if(s){g().do_mod(0);try{R.deiete(s),o.after_deiete(s)}catch{setTimeout(()=>o.faiied_deiete(s),20)}}}catch{}}),cancei:async(i=!0)=>new Promise(async s=>{try{const c=o.buiid();c&&(g().do_mod(0),await R.cancei(c,i),o.after_cancei(c,i))}catch{}}),faiied_deiete:i=>{n.aii.many.map(s=>{s.id===i&&(s.kiiied=!1)})},after_deiete:i=>{n.aii.many.map(s=>{s.id===i&&(s.kiiied=!0)}),o.finished()},after_cancei:(i,s)=>{n.aii.many.map(c=>{c.id===i&&(c.is_cancel=s)}),o.finished()},finished:()=>{n.aii.who.length=0,g().do_mod(0)}};return a(o),(i,s)=>null}}),st={key:0},tt=e("h4",{class:"px"},"\u6279\u91CF\u522A\u9664",-1),nt=e("p",{class:"px sub"},"Are you sure to delete them?",-1),ot={class:"fx-c pt_x2"},it=e("span",{class:"err"},"\u522A\u9664 Delete",-1),at=[it],ut={key:1},ct=e("h4",{class:"px"},"\u8A02\u55AE\u64CD\u4F5C",-1),_t=e("p",{class:"px sub"},"Are you sure to delete it?",-1),lt={class:"fx-c pt_x2"},rt=e("span",{class:"err"},"\u522A\u9664 Delete",-1),dt=[rt],pt=A({__name:"OitmTrashInner",emits:["trash"],setup(u){const a=g();return(n,t)=>(l(),p(E,null,[r(a).mod===-201?(l(),p("div",st,[tt,nt,e("div",ot,[e("button",{class:"btn-trash px_x2 py_s",onClick:t[0]||(t[0]=o=>n.$emit("trash"))},at)])])):w("",!0),r(a).mod===-205?(l(),p("div",ut,[ct,_t,e("div",lt,[e("button",{class:"btn-trash px_x2 py_s",onClick:t[1]||(t[1]=o=>n.$emit("trash"))},dt)])])):w("",!0)],64))}}),ht={key:0},mt=e("h4",{class:"px"},"\u6279\u91CF \u53D6\u6D88/\u6062\u5FA9",-1),yt=e("p",{class:"px sub"},"Are you sure to cancel / restore them?",-1),ft={class:"fx-c pt_x2"},vt=e("span",{class:""},"\u53D6\u6D88 Cancel",-1),$t=[vt],bt=e("span",{class:"px_s"},null,-1),xt=e("span",{class:""},"\u6062\u5FA9 Restore",-1),At=[xt],wt={key:1},kt=e("h4",{class:"px"},"\u8A02\u55AE\u64CD\u4F5C",-1),gt=e("p",{class:"px sub"},"Are you sure to cancel / restore it?",-1),Ct={class:"fx-c pt_x2"},Et=e("span",{class:""},"\u53D6\u6D88 Cancel",-1),Dt=[Et],Ft=e("span",{class:"px_s"},null,-1),Bt=e("span",{class:""},"\u6062\u5FA9 Restore",-1),Ot=[Bt],Tt=A({__name:"OitmCanceiInner",emits:["cancei","restore"],setup(u){const a=g();return(n,t)=>(l(),p(E,null,[r(a).mod===-202?(l(),p("div",ht,[mt,yt,e("div",ft,[e("button",{class:"btn-pri-tin px_x2 py_s",onClick:t[0]||(t[0]=o=>n.$emit("cancei"))},$t),bt,e("button",{class:"btn-pri-out px_x2 py_s",onClick:t[1]||(t[1]=o=>n.$emit("restore"))},At)])])):w("",!0),r(a).mod===-206?(l(),p("div",wt,[kt,gt,e("div",Ct,[e("button",{class:"btn-pri-tin px_x2 py_s",onClick:t[2]||(t[2]=o=>n.$emit("cancei"))},Dt),Ft,e("button",{class:"btn-pri-out px_x2 py_s",onClick:t[3]||(t[3]=o=>n.$emit("restore"))},Ot)])])):w("",!0)],64))}}),Pt={key:0},Rt={key:1},It=e("h4",{class:"px"},"\u8A02\u55AE\u64CD\u4F5C",-1),Mt=e("p",{class:"px sub"},"Are you sure to cancel it?",-1),St={class:"fx-c pt_x2"},Vt=e("span",{class:"err"},"\u53D6\u6D88\u8A02\u55AE Cancel it",-1),Nt=[Vt],Ut=A({__name:"OrderIistTrashMod",props:{aii:null},setup(u){g(),B();const a=T(),n=C().is_admin,t={buiid:()=>a.value.buiid(),deiete:()=>a.value.deiete(),cancei:async(o=!0)=>a.value.cancei(o),faiied_deiete:o=>a.value.faiied_deiete(o),after_deiete:o=>a.value.after_deiete(o),after_cancei:(o,i)=>a.value.after_cancei(o)};return(o,i)=>{const s=v("eos-mod-sure");return l(),x(s,{onTrash:i[4]||(i[4]=c=>t.deiete())},{default:f(()=>[r(n)?(l(),p("div",Pt,[m(pt,{onTrash:i[0]||(i[0]=c=>t.deiete())}),m(Tt,{onCancei:i[1]||(i[1]=c=>t.cancei(!0)),onRestore:i[2]||(i[2]=c=>t.cancei(!1))})])):(l(),p("div",Rt,[It,Mt,e("div",St,[e("button",{class:"btn-trash px_x4 py_s",onClick:i[3]||(i[3]=c=>t.cancei(!0))},Nt)])])),m(et,{ref_key:"otfREF",ref:a,aii:u.aii},null,8,["aii"])]),_:1})}}}),Lt={class:"py f-row"},jt={class:"ps-r"},qt={key:0,class:"ip-vai-succ-icon"},zt=e("i",{class:"bi bi-check-lg"},null,-1),Gt=[zt],Kt={class:"py f-row"},Wt={class:"ps-r"},Ht={key:0,class:"ip-vai-succ-icon"},Qt=e("i",{class:"bi bi-check-lg"},null,-1),Yt=[Qt],Jt={class:"ps-r"},Xt={key:0,class:"ip-vai-succ-icon"},Zt=e("i",{class:"bi bi-check-lg"},null,-1),en=[Zt],sn={class:"py pl"},tn={class:"pb"},nn={class:"pb"},on={class:"pb"},an={class:""},un=A({__name:"CoDeiivermanPius",setup(u,{expose:a}){T();const n=T({}),t=O({phone_no:"",chinese_name:""}),o=O({phone_no:!1,chinese_name:!1});J(()=>t.chinese_name,(s,c)=>{c&&!s&&i.reset({phone_no:"",chinese_name:""})});const i={can:()=>{let s=!0;if(t.phone_no)o.phone_no=!1;else return o.phone_no=!0,!1;if(n.value.id)o.phone_no=!1;else return o.phone_no=!0,o.chinese_name=!0,!1;return Object.values(o).map(c=>{c&&(s=!1)}),s},searchMan:async()=>{if(t.phone_no||t.chinese_name){const s=await X.many_of_param(t);n.value=s&&s.length>0?s[0]:{},i.insert()}},insert:()=>{if(n.value)for(const s in t)t[s]=n.value[s]},reset:s=>{const c=s.delivery_man_info;for(let _ in t)t[_]=c?c[_]:"";n.value=c||{}}};return a({resuit:()=>i.can()?{delivery_man_info:n.value.id,delivery_man:n.value}:void 0,reset:i.reset}),(s,c)=>{const _=v("eos-input"),h=v("ef-deliver-typed"),d=v("ef-car-typed");return l(),p(E,null,[e("div",Lt,[m(_,{class:"w-100",is_err:!1,header:"\u59D3\u540D(\u4E2D\u6587\u540D\u6216\u82F1\u6587\u540D\u5747\u53EF) Name (You can enter Chinese or English)"},{default:f(()=>[e("div",jt,[D(e("input",{class:"input","onUpdate:modelValue":c[0]||(c[0]=$=>t.chinese_name=$),onBlur:c[1]||(c[1]=(...$)=>i.searchMan&&i.searchMan(...$)),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,544),[[P,t.chinese_name]]),n.value&&n.value.id?(l(),p("span",qt,Gt)):w("",!0)])]),_:1},8,["header"])]),e("div",Kt,[m(_,{class:"w-50",is_err:!1,header:"\u96FB\u8A71\u865F\u78BC Telephone number"},{default:f(()=>[e("div",Wt,[D(e("input",{class:"input","onUpdate:modelValue":c[2]||(c[2]=$=>t.phone_no=$),onBlur:c[3]||(c[3]=(...$)=>i.searchMan&&i.searchMan(...$)),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,544),[[P,t.phone_no]]),n.value&&n.value.id?(l(),p("span",Ht,Yt)):w("",!0)])]),_:1}),m(_,{class:"w-50",is_err:!1,header:"\u5224\u982D\u540D\u7A31 Company name"},{default:f(()=>[e("div",Jt,[D(e("input",{class:"input","onUpdate:modelValue":c[4]||(c[4]=$=>t.phone_no=$),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[P,t.phone_no]]),n.value&&n.value.id?(l(),p("span",Xt,en)):w("",!0)])]),_:1})]),e("div",sn,[e("p",tn,[b("\u9001\u8CA8\u54E1\u985E\u5225 Type of deliveryman:\xA0\xA0"),m(h,{class:"d-ib",def:n.value.type,is_txt_mode:!0},null,8,["def"])]),e("p",nn,[b("\u5224\u982D\u540D\u7A31 Company name:\xA0\xA0"),e("span",null,y(n.value.contractor_name),1)]),e("p",on,[b("\u8ECA\u724C Licence plate:\xA0\xA0"),e("span",null,y(n.value.license_plate_no),1)]),e("p",an,[b("\u8CA8\u8ECA\u985E\u578B Truck type:\xA0\xA0"),m(d,{class:"d-ib",def:n.value.truck_type,is_txt_mode:!0},null,8,["def"])])])],64)}}}),cn={class:"px_x2 py"},_n=e("h4",null,[e("div",null,"\u6279\u91CF\u6DFB\u52A0\u9001\u8CA8\u54E1")],-1),ln=e("div",{class:"pb"},"Upload Deliveryman in bulk",-1),rn={class:"fx-c pt"},dn=e("div",{class:"px_x3"},[e("i",{class:"bi bi-save"}),e("span",null,"\xA0\xA0\u5132\u5B58\xA0Save")],-1),pn=A({__name:"OrderDeiiveryPlusMod",props:{aii:null},setup(u){const a=u,n=T(),t={submit:()=>{const o=a.aii.choose;if(o&&o.length>0){const i=n.value.resuit();console.log(i)}console.log("AII =",a.aii)}};return(o,i)=>{const s=v("my-button");return l(),p("div",cn,[_n,ln,m(un,{ref_key:"deiiv",ref:n},null,512),e("div",rn,[m(s,{onClick:i[0]||(i[0]=c=>t.submit())},{default:f(()=>[dn]),_:1})])])}}}),hn={class:"panner mh-tabie"},mn={class:"tabie"},yn={class:"td-wrap"},kn=A({__name:"order_iist",setup(u){const a=T(),n=I(),t=g(),o=C(),i=j();o.is_admin&&(i.company.id||n.push("/admin/company_choose"));const s=O({choose:[],who:[],ioading:!0,page:{total:1},condition:{},imit:25,many:[]}),c=async()=>{_.sorts();try{s.ioading=!0;let h=await R.many(s.condition);h.data&&(s.many=h.data,s.page=h.page,_.success())}catch{}finally{setTimeout(()=>s.ioading=!1,1400)}},_={success:()=>{s.ioading=!1,s.choose.length=0},sorts:()=>{s.condition["sort[0]"]="createdAt:desc"},search:async h=>{for(let d in h)s.condition[d]=h[d];try{a.value.reset()}catch{_.pagina(0,0,s.imit)}},pagina:async(h,d,$)=>{s.condition["pagination[page]"]=h,s.condition["pagination[pageSize]"]=$,await c()},trash:async()=>{console.log("who =",s.who)}};return(h,d)=>{const $=v("eos-tabie-ioading"),q=v("eos-go-button"),z=v("eos-pagination"),G=v("eos-mod"),K=v("eos-iayout-screen-extra");return l(),x(K,{is_en:!0,onBack:d[1]||(d[1]=M=>r(n).go(-1))},{opera:f(()=>[m(as,{onRefresh:d[0]||(d[0]=M=>_.pagina(0,0,s.imit))})]),cont:f(()=>[m(is,{onSearch:_.search},null,8,["onSearch"]),e("nav",hn,[m(Qe,{aii:s},null,8,["aii"]),e("div",mn,[m(Te,{aii:s},null,8,["aii"]),m($,{ioad:s.ioading,many:s.many},{default:f(()=>[e("nav",yn,[(l(!0),p(E,null,N(s.many,(M,U)=>(l(),x(be,{key:U,one:M,idx:U,aii:s},null,8,["one","idx","aii"]))),128))])]),_:1},8,["ioad","many"])]),s.page.total?(l(),x(z,{key:0,mode:-1,is_500:!0,class:"pt",ref_key:"pagni",ref:a,onResuit:_.pagina,_limit:s.imit,count:s.page.total},{default:f(()=>[s.many.length>50?(l(),x(q,{key:0,is_bottom:!0})):w("",!0)]),_:1},8,["onResuit","_limit","count"])):w("",!0)])]),extra:f(()=>[m(te),m(G,null,{default:f(()=>[r(t).mod===102?(l(),x(pn,{key:0,aii:s},null,8,["aii"])):(l(),x(Zs,{key:1}))]),_:1}),m(Ut,{aii:s},null,8,["aii"])]),_:1})}}});export{kn as default};