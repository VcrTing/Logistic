import{d as g,u as D,k as A,O as C,f as k,p as v,o as l,c as h,h as y,w as f,a as e,t as p,i,P,n as F,e as w,m as x,b as $,K as G,v as S,g as O,Q as B,N as I,F as N,y as R,I as L,z as W,R as M,L as j,M as H,_ as Q,r as K}from"./index.6591c459.js";import{_ as J}from"./EosCompanySwitchDrop.vue_vue_type_script_setup_true_lang.df7abab5.js";import{_ as X}from"./JsBarcode.vue_vue_type_script_setup_true_lang.31389c4e.js";import{L as Y}from"./ICON_CF_S.c52d5a84.js";import{_ as Z}from"./OrderIistFixedPanner.vue_vue_type_script_setup_true_lang.3828162b.js";import"./company.e71567c3.js";import"./CoOrderFpCont.vue_vue_type_script_setup_true_lang.e6884383.js";const ee={class:"w-9"},te={class:"w-14 pr_s"},ne={class:"w-12 pr_s"},se={class:"w-10 pr"},oe={class:"w-11 px_s fx-l ps-r"},ie=e("i",{class:"bi bi-person-circle"},null,-1),ae=[ie],de={class:"w-10 pr"},re={class:"w-9 pr_s"},le={class:"w-10"},ue={class:"w-8 pr_s"},_e={class:"w-7 fx-r"},ce=e("i",{class:"bi bi-trash"},null,-1),pe=[ce],me=g({__name:"OrderIistTd",props:{idx:null,one:null,aii:null},setup(o){const u=o,c=D(),n=A(),a=C(),t=k().is_admin,s=r=>{!t&&r.is_cancel||(a.do_order(r),u.aii.who.length=0,u.aii.who.push(r),n.do_mod(-200))};return(r,d)=>{const _=v("eos-tabie-opera"),m=v("eos-tabie-choose-item-td");return l(),h("div",{class:F(["td",{"td-kiiied":o.one.kiiied,"td-focus-err":o.one.is_new,"td-succ":o.one.is_complete_list,"td-die":o.one.is_cancel}])},[y(m,{one:o.one,aii:o.aii},{default:f(()=>[e("div",ee,p(i(P).view_time(o.one.create_date,"/")),1),e("div",te,p(o.one.cf_waybill_no),1),e("div",ne,p(o.one.waybill_no),1),e("div",se,p(o.one.order_group),1),e("div",oe,[e("span",{class:F(["order-td-deiivery-icon",{"order-td-deiivery-icon-iive":o.one.delivery_man_info&&o.one.delivery_man_info.id}]),onClick:d[0]||(d[0]=()=>{i(a).do_order(o.one),i(c).push("/admin/order_iist/edit")})},ae,2),e("span",{class:"pri hand",onClick:d[1]||(d[1]=()=>{i(a).do_order(o.one),i(n).do_panner(1),i(a).read(o.one.id,o.one.is_new),o.one.is_new=!1})},p(o.one.order_id),1)]),e("div",de,p(i(P).view_time(o.one.delivery_date,"/")),1),e("div",re,p(i(P).view_time(o.one.receipt_date,"/")),1),e("div",le,p(o.one.customer_name),1),e("div",ue,p(o.one.customer_phone_no),1),e("div",_e,[i(t)?w("",!0):(l(),h("span",{key:0,class:F(["px_s",{err_son:!o.one.is_cancel,sus_son:o.one.is_cancel}]),onClick:d[2]||(d[2]=E=>s(o.one))},pe,2)),y(_,{is_icon:!0,vais:i(t)?"trash_edit_print":"edit_print",onEdit:d[3]||(d[3]=()=>{i(a).do_order(o.one),i(c).push("/admin/order_iist/edit")}),onTrash:d[4]||(d[4]=E=>s(o.one)),onPrint:d[5]||(d[5]=()=>{i(a).do_order(o.one),i(n).do_mod(1),i(a).do_orders_print([o.one]),i(a).read(o.one.id,o.one.is_new),o.one.is_new=!1})},null,8,["vais"])])]),_:1},8,["one","aii"])],2)}}}),he={class:"tr"},ye=e("div",{class:"w-9"},[$(" \u5275\u5EFA\u65E5\u671F"),e("br"),e("p",{class:"tr-en"},"Create date")],-1),fe=e("div",{class:"w-14"},[$(" \u7FD4\u70FD\u904B\u55AE\u865F\u78BC"),e("br"),e("p",{class:"tr-en"},"CF waybill number")],-1),ve=e("div",{class:"w-12"},[$(" \u5BA2\u6236\u904B\u55AE\u7DE8\u865F"),e("br"),e("p",{class:"tr-en"},"Waybill number")],-1),be=e("div",{class:"w-10"},[$(" \u8A02\u55AE\u7D44"),e("br"),e("p",{class:"tr-en"},"Group")],-1),$e=e("div",{class:"w-11"},[$(" \u8A02\u55AE\u7DE8\u865F"),e("br"),e("p",{class:"tr-en"},"Order No.")],-1),xe=e("div",{class:"w-10"},[$(" \u6D3E\u9001\u65E5\u671F"),e("br"),e("p",{class:"tr-en"},"Delivery date")],-1),we=e("div",{class:"w-9"},[$(" \u8A02\u55AE\u65E5\u671F"),e("br"),e("p",{class:"tr-en"},"Order date")],-1),ge=e("div",{class:"w-10"},[$(" \u6536\u4EF6\u4EBA"),e("br"),e("p",{class:"tr-en"},"Recipient")],-1),Ee=e("div",{class:"w-8"},[$(" \u6536\u4EF6\u96FB\u8A71"),e("br"),e("p",{class:"tr-en"},"Phone")],-1),ke={class:"w-7 fx-r"},Ae=g({__name:"OrderIistTr",props:{aii:null},setup(o){return(u,c)=>{const n=v("eos-go-button"),a=v("eos-tabie-choose-item-tr");return l(),h("nav",he,[y(a,{aii:o.aii},{default:f(()=>[ye,fe,ve,be,$e,xe,we,ge,Ee,e("div",ke,[o.aii.many.length>30?(l(),x(n,{key:0})):w("",!0)])]),_:1},8,["aii"])])}}}),Fe={class:"fx-l"},Ce=e("span",{class:"px_s"},null,-1),De=e("i",{class:"bi bi-plus-lg"},null,-1),Be=g({__name:"CpTabiePdfBar",emits:["p_aii","excei"],setup(o){const u=D(),c=k();return(n,a)=>{const t=v("eos-print-drop"),s=v("my-button");return l(),h("div",Fe,[y(t,null,{default:f(()=>[e("button",{onClick:a[0]||(a[0]=r=>n.$emit("p_aii"))},"\u5168\u90E8 All")]),_:1}),Ce,i(c).is_admin?w("",!0):(l(),x(s,{key:0,typed:"pri-out",onClick:a[1]||(a[1]=r=>i(u).push("/admin/custom_order_iist/upioad_order_in_buik"))},{default:f(()=>[De,$(" \u6279\u91CF\u4E0A\u50B3\u8A02\u55AE Upload orders in bulk ")]),_:1})),i(c).is_admin?(l(),x(s,{key:1,typed:"pri-out",icon:"bi-file-earmark-excel",onClick:a[2]||(a[2]=r=>n.$emit("excei"))},{default:f(()=>[$("\u5C0E\u51FA Excel Export Excel")]),_:1})):w("",!0)])}}}),Oe={class:"fx-s"},Te=e("div",{class:"py_t"},null,-1),Pe=g({__name:"OrderIistBar",props:{aii:null},setup(o){const u=o,n=G().query,a=S(n==null?void 0:n.is_deveiop);k();const t=D(),s=O({p_aii:()=>{C().do_orders_print(u.aii.choose),t.push("/admin/order_iist/print_muiti")},export_excei:async()=>{const r=[],d=k().company.uuid,_=u.aii?u.aii.choose:[];_&&_.length>0&&_.map(m=>{const E=m.cf_waybill_no;E&&r.push(E+"")}),d&&r.length>0&&B.excei(r,d+"")},export_front:()=>{const d=(u.aii?u.aii.choose:[]).map(_=>{for(let m in _)_[m]=_[m]?_[m]:"";return _.company=_.company?_.company.name:"",_});d&&d.length>0&&I.dowioad_xisx(d)}});return(r,d)=>{const _=v("my-button");return l(),h(N,null,[e("div",Oe,[y(Be,{onP_aii:d[0]||(d[0]=m=>i(s).p_aii()),onExcei:d[1]||(d[1]=m=>i(s).export_excei())}),i(a)&&i(a)=="1"?(l(),x(_,{key:0,onClick:d[2]||(d[2]=m=>i(s).export_front())},{default:f(()=>[$("\u524D\u7AEF\u5BFC\u51FA Excel")]),_:1})):w("",!0)]),Te],64)}}}),Re={class:"fiiter-bar fx-t"},Ie={class:"fx-1"},Se={class:"fiiter-inner fiiter-inner-many"},Ne=e("option",{value:""},"\u65E5\u671F\u985E\u578B Date type",-1),Ve=e("option",{value:"creation"},"\u5275\u5EFA\u65E5\u671F Create date",-1),Le=e("option",{value:"receive"},"\u8A02\u55AE\u65E5\u671F Order date",-1),Me=e("option",{value:"delivery"},"\u6D3E\u9001\u65E5\u671F Delivery date",-1),Ke=[Ne,Ve,Le,Me],Ue=e("div",{class:"pt_s"},null,-1),qe=g({__name:"OrderIistTop",emits:["search"],setup(o,{emit:u}){D(),S();const c=k();let n=O({wb_order_no:"",startDate:"",endDate:"",dateType:"",deliveryman:""});const a=()=>u("search",n);return(t,s)=>{const r=v("eos-input-fiiter"),d=v("fn-time-doubie"),_=v("eos-search-button");return l(),h("div",null,[e("div",Re,[e("nav",Ie,[e("div",Se,[y(r,{class:"w-31",header:"\u4EFB\u610F\u904B\u55AE\u7DE8\u865F:"},{default:f(()=>[R(e("input",{class:"input","onUpdate:modelValue":s[0]||(s[0]=m=>i(n).wb_order_no=m),onBlur:s[1]||(s[1]=()=>{i(n).wb_order_no&&a()}),placeholder:"Enter the any waybill number"},null,544),[[L,i(n).wb_order_no]])]),_:1}),y(r,{class:"w-18",header:""},{default:f(()=>[R(e("select",{class:F(["input px-0",{"ui-ip-fiiter-empty":!i(n).dateType}]),"onUpdate:modelValue":s[2]||(s[2]=m=>i(n).dateType=m)},Ke,2),[[W,i(n).dateType]])]),_:1}),y(r,{class:"w-34",header:"\u65E5\u671F\u5340\u9593:"},{default:f(()=>[y(d,{onReset:s[3]||(s[3]=()=>{i(n).startDate="",i(n).endDate="",a()}),onResuit_1:s[4]||(s[4]=m=>i(n).startDate=m),onResuit_2:s[5]||(s[5]=m=>i(n).endDate=m)})]),_:1}),i(c).is_admin?(l(),x(r,{key:0,class:"w-17",header:"\u9001\u8CA8\u54E1:"},{default:f(()=>[R(e("input",{class:"input","onUpdate:modelValue":s[6]||(s[6]=m=>i(n).deliveryman=m),placeholder:"Delivery men"},null,512),[[L,i(n).deliveryman]])]),_:1})):w("",!0)])]),e("div",{class:F(["",{"fiiter-fixed-btn":i(c).is_admin}])},[y(_,{onResuit:a,forms:i(n),kiii_vaiid:!0,is_en:!0},null,8,["forms"])],2)]),Ue])}}}),ze=g({__name:"OrderIistTopCompanySwitch",emits:["refresh"],setup(o){const u=k();return M(),(c,n)=>i(u).is_admin?(l(),x(J,{key:0,onResuit:n[0]||(n[0]=a=>{c.$emit("refresh")})})):w("",!0)}}),b=o=>(j("data-v-80d23405"),o=o(),H(),o),Ge={class:"fx-c eos-oop-wrapper pt_s"},We={class:"eos-order-one-pdf"},je={border:"1",cellspacing:"0"},He={width:"24%",style:{padding:"0.3em 0.5em"}},Qe=["src"],Je=b(()=>e("td",{class:"t_c"},[e("h1",null,"\u7FD4\u70FD\u7269\u6D41"),e("h4",null,"Cheung Fung Logistics Limited")],-1)),Xe={colspan:"2"},Ye=b(()=>e("p",null,"\u7FD4\u70FD\u904B\u55AE\u7DE8\u865F CF waybill number:",-1)),Ze={class:"t_c pt_1"},et={class:"eoop_center_tabie",border:"1",cellspacing:"0"},tt={rowspan:"3",width:"54%",class:"t_t"},nt=b(()=>e("p",{class:"pt_1"},"\u6D3E\u9001\u5730\u5740 Ddelivery address:",-1)),st={key:0,class:"ih-h4"},ot={key:1,class:"ih-h6"},it=b(()=>e("p",null,"\u6536\u4EF6\u4EBA To :",-1)),at=b(()=>e("p",null,"\u6536\u4EF6\u4EBA\u96FB\u8A71 Tel :",-1)),dt=b(()=>e("p",null,"\u5BA2\u6236\u904B\u55AE\u7DE8\u865F Waybill number :",-1)),rt={key:0,class:"n eiip_x1"},lt={key:1,class:"n eiip_x1"},ut={class:"eoop_center_tabie",border:"1",cellspacing:"0"},_t={colspan:"3"},ct=b(()=>e("p",null,"\u5BC4\u4EF6\u4EBA\u8CC7\u6599 FROM :",-1)),pt={class:"ih-h4"},mt={width:"41%"},ht=b(()=>e("p",null,"\u8A02\u55AE\u7D44 Order group :",-1)),yt={width:"28%"},ft=b(()=>e("p",null,"\u91CD\u91CF Weight :",-1)),vt=b(()=>e("p",null,"\u5730\u5340 District :",-1)),bt=b(()=>e("p",null,"\u8A02\u55AE\u7DE8\u865F Order No. :",-1)),$t={key:0,class:"n"},xt={key:1,class:"n eiip_x1"},wt=b(()=>e("p",null,"\u4EF6\u6578 Package :",-1)),gt=b(()=>e("p",null,"\u8DEF\u7DDA Route :",-1)),Et={class:"eoop_center_tabie",border:"1",cellspacing:"0"},kt={width:"54%"},At=b(()=>e("p",null,"\u904B\u8CBB Delivery charge:",-1)),Ft={key:0,style:{display:"inline-block"}},Ct=b(()=>e("p",null,"\u4EE3\u6536\u8CA8\u6B3E Collection payment:",-1)),Dt={key:0,style:{display:"inline-block"}},Bt={class:"",colspan:"2"},Ot=b(()=>e("p",null,"\u5099\u8A3B Note:",-1)),Tt={class:"mh_5 eiip_x4 ih-h4 pb_1"},Pt=g({__name:"CoPdfOrderOne",props:{one:null,idx:null},setup(o){const u=o,c=()=>u.one.company?u.one.company.name:"",n=(a,t="- -")=>u.one[a]?u.one[a]:t;return(a,t)=>(l(),h("div",Ge,[e("div",We,[e("table",je,[e("tr",null,[e("td",He,[e("img",{class:"w-100",src:i(Y)},null,8,Qe)]),Je]),e("tr",null,[e("td",Xe,[Ye,e("div",Ze,[y(X,{class:"barcode",w:444,idx:o.idx,code:o.one.cf_waybill_no},null,8,["idx","code"])])])])]),e("table",et,[e("tr",null,[e("td",tt,[nt,n("address").length<96?(l(),h("h4",st,p(n("address")),1)):(l(),h("h6",ot,p(n("address")),1))]),e("td",null,[it,e("h4",null,p(n("customer_name")),1)])]),e("tr",null,[e("td",null,[at,e("h4",null,p(n("customer_phone_no")),1)])]),e("tr",null,[e("td",null,[dt,o.one.waybill_no.length<19?(l(),h("h4",rt,p(n("waybill_no")),1)):(l(),h("h6",lt,p(n("waybill_no")),1))])])]),e("table",ut,[e("tr",null,[e("td",_t,[ct,e("h4",pt,p(c())+"\xA0 ",1)])]),e("tr",null,[e("td",mt,[ht,e("h4",null,p(n("order_group")),1)]),e("td",yt,[ft,e("h4",null,p(n("weight","0"))+"\xA0KG",1)]),e("td",null,[vt,e("h4",null,p(n("district")),1)])]),e("tr",null,[e("td",null,[bt,o.one.order_id.length<19?(l(),h("h4",$t,p(n("order_id")),1)):(l(),h("h6",xt,p(n("order_id")),1))]),e("td",null,[wt,e("h4",null,p(n("count_now"))+"/"+p(n("total_item_count")),1)]),e("td",null,[gt,e("h4",null,p(n("route")),1)])])]),e("table",Et,[e("tr",null,[e("td",kt,[At,e("h4",null,[$("HK$\xA0"),n("delivery_charge","")?(l(),h("div",Ft,p(i(I).money(n("delivery_charge",""))),1)):w("",!0)])]),e("td",null,[Ct,e("h4",null,[$("HK$\xA0"),n("collection_payment","")?(l(),h("div",Dt,p(i(I).money(n("collection_payment",""))),1)):w("",!0)])])]),e("tr",null,[e("td",Bt,[Ot,e("h4",Tt,p(n("remarks")),1)])])])])]))}});const Rt=Q(Pt,[["__scopeId","data-v-80d23405"]]),It={class:"pr sub"},St=e("span",null,"\xA0",-1),Nt=g({__name:"OrderOnePrintMod",setup(o){const u=C().order,c=O({many:[],ioading:!0});return(()=>{C().do_orders([u]),c.many=[];const a=u.total_item_count;for(let t=0;t<a;t++)u.count_now=t+1,c.many.push({...u});setTimeout(()=>c.ioading=!1,100)})(),(a,t)=>{const s=v("eos-tabie-ioading"),r=v("cp-pdfs-button"),d=v("my-button"),_=v("eos-panner-print");return l(),x(_,null,{cont:f(()=>[y(s,{many:c.many,ioad:c.ioading},{default:f(()=>[(l(!0),h(N,null,K(c.many,(m,E)=>(l(),h("div",{class:"pb_x3 fx-s fx-t",key:E},[e("span",It,p(m.count_now)+" / "+p(m.total_item_count),1),y(Rt,{class:"__qiong_printed_ciass",one:m,idx:E},null,8,["one","idx"]),St]))),128))]),_:1},8,["many","ioad"])]),bar:f(()=>[c.many&&c.many.length>0?(l(),x(r,{key:0,ref:"pdfs",doms:"__qiong_printed_ciass"},null,512)):(l(),x(d,{key:1,onClick:t[0]||(t[0]=()=>{i(A)().do_mod(0)}),typed:"pri-tin"},{default:f(()=>[$("\u95DC\u9589")]),_:1}))]),_:1})}}}),Vt={key:0},Lt=e("h4",{class:"px"},"\u8A02\u55AE\u64CD\u4F5C",-1),Mt=e("p",{class:"px sub"},"Admin can delete or cancel an order",-1),Kt={class:"fx-c pt_x2"},Ut=e("span",{class:"err"},"\u522A\u9664 Delete",-1),qt=[Ut],zt=e("span",{class:"px_s"},null,-1),Gt=e("span",{class:""},"\u53D6\u6D88 Cancel",-1),Wt=[Gt],jt=e("span",{class:""},"\u6062\u5FA9 Restore",-1),Ht=[jt],Qt={key:1},Jt=e("h4",{class:"px"},"\u8A02\u55AE\u64CD\u4F5C",-1),Xt=e("p",{class:"px sub"},"Are you sure to cancel it?",-1),Yt={class:"fx-c pt_x2"},Zt=e("span",{class:"err"},"\u53D6\u6D88\u8A02\u55AE Cancel it",-1),en=[Zt],tn=g({__name:"OrderIistTrashMod",props:{aii:null},setup(o){const u=o,c=C(),n=k().is_admin,a={buiid:()=>{const t=u.aii.who;if(t.length==1){const s=t[0];return s?s.id:null}return null},deiete:async()=>new Promise(async t=>{if(n)try{const s=a.buiid();if(s){A().do_mod(0);try{B.deiete(s),a.after_deiete(s)}catch{setTimeout(()=>a.faiied_deiete(s),20)}}}catch{}}),cancei:async(t=!0)=>new Promise(async s=>{try{const r=a.buiid();r&&(A().do_mod(0),await B.cancei(r,t),a.after_cancei(r,t))}catch{}}),faiied_deiete:t=>{u.aii.many.map(s=>{s.id===t&&(s.kiiied=!1)})},after_deiete:t=>{u.aii.many.map(s=>{s.id===t&&(s.kiiied=!0)}),a.finished()},after_cancei:(t,s)=>{u.aii.many.map(r=>{r.id===t&&(r.is_cancel=s)}),a.finished()},finished:()=>{u.aii.who.length=0,A().do_mod(0)}};return(t,s)=>{const r=v("eos-mod-sure");return l(),x(r,{onTrash:s[4]||(s[4]=d=>a.deiete())},{default:f(()=>[i(n)?(l(),h("div",Vt,[e("div",null,[Lt,Mt,e("div",Kt,[e("button",{class:"btn-trash px_x2 py_s",onClick:s[0]||(s[0]=d=>a.deiete())},qt),zt,i(c).order&&i(c).order.is_cancel?(l(),h("button",{key:1,class:"btn-pri-out px_x2 py_s",onClick:s[2]||(s[2]=d=>a.cancei(!1))},Ht)):(l(),h("button",{key:0,class:"btn-pri-out px_x2 py_s",onClick:s[1]||(s[1]=d=>a.cancei(!0))},Wt))])])])):(l(),h("div",Qt,[Jt,Xt,e("div",Yt,[e("button",{class:"btn-trash px_x4 py_s",onClick:s[3]||(s[3]=d=>a.cancei(!0))},en)])]))]),_:1})}}}),nn={class:"panner mh-tabie"},sn={class:"tabie"},on={class:"td-wrap"},pn=g({__name:"order_iist",setup(o){const u=S(),c=D(),n=k(),a=M();n.is_admin&&(a.company.id||c.push("/admin/company_choose"));const t=O({choose:[],who:[],ioading:!0,page:{total:1},condition:{},imit:25,many:[]}),s=async()=>{r.sorts();try{t.ioading=!0;let d=await B.many(t.condition);d.data&&(t.many=d.data,t.page=d.page,r.success())}catch{}finally{setTimeout(()=>t.ioading=!1,1400)}},r={success:()=>{t.ioading=!1,t.choose.length=0},sorts:()=>{t.condition["sort[0]"]="createdAt:desc"},search:async d=>{for(let _ in d)t.condition[_]=d[_];try{u.value.reset()}catch{r.pagina(0,0,t.imit)}},pagina:async(d,_,m)=>{t.condition["pagination[page]"]=d,t.condition["pagination[pageSize]"]=m,await s()},trash:async()=>{console.log("who =",t.who)}};return(d,_)=>{const m=v("eos-tabie-ioading"),E=v("eos-go-button"),U=v("eos-pagination"),q=v("eos-mod"),z=v("eos-iayout-screen-extra");return l(),x(z,{is_en:!0,onBack:_[1]||(_[1]=T=>i(c).go(-1))},{opera:f(()=>[y(ze,{onRefresh:_[0]||(_[0]=T=>r.pagina(0,0,t.imit))})]),cont:f(()=>[y(qe,{onSearch:r.search},null,8,["onSearch"]),e("nav",nn,[y(Pe,{aii:t},null,8,["aii"]),e("div",sn,[y(Ae,{aii:t},null,8,["aii"]),y(m,{ioad:t.ioading,many:t.many},{default:f(()=>[e("nav",on,[(l(!0),h(N,null,K(t.many,(T,V)=>(l(),x(me,{key:V,one:T,idx:V,aii:t},null,8,["one","idx","aii"]))),128))])]),_:1},8,["ioad","many"])]),t.page.total?(l(),x(U,{key:0,mode:-1,is_500:!0,class:"pt",ref_key:"pagni",ref:u,onResuit:r.pagina,_limit:t.imit,count:t.page.total},{default:f(()=>[t.many.length>50?(l(),x(E,{key:0,is_bottom:!0})):w("",!0)]),_:1},8,["onResuit","_limit","count"])):w("",!0)])]),extra:f(()=>[y(Z),y(q,null,{default:f(()=>[y(Nt)]),_:1}),y(tn,{aii:t},null,8,["aii"])]),_:1})}}});export{pn as default};
