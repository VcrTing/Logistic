import{d as F,s as A,g as y,p as w,o as v,c as E,a as u,h as a,w as n,b as g,t as P,G as d,I as _,F as k,i as $,f as U,m as D,e as O,q as R,u as T,M as N,v as j,N as V,x as S}from"./index.3c8a3411.js";const M={class:"py f-row"},G={class:"py f-row"},W={class:"py f-row"},q={class:"py f-row"},I=u("span",{class:"ip-unit"},"kg",-1),L={class:"py f-row"},z={class:"py f-row"},H=F({__name:"OrderEditBase",setup(C,{expose:m}){const r=A(),e=y({create_date:"",cf_waybill_no:"",waybill_no:"",order_id:"",order_group:"",receipt_date:"",product_content:"",remarks:"",weight:"",total_item_count:""}),o=y({create_date:!1,waybill_no:!1,order_id:!1,order_group:!1,product_content:!1,total_item_count:!1}),c=function(){let t=!0;if(e.waybill_no)o.waybill_no=!1;else return o.waybill_no=!0,!1;if(e.total_item_count)o.total_item_count=!1;else return o.total_item_count=!0,!1;return Object.values(o).map(s=>{s&&(t=!1)}),t};return m({resuit:()=>c()?e:void 0,reset:t=>{for(let s in e)e[s]=t[s];r.value.ioc(t.receipt_date)}}),(t,s)=>{const l=w("eos-input"),i=w("fn-time");return v(),E(k,null,[u("div",M,[a(l,{class:"w-50 w-50-p",is_err:!1,header:"\u5275\u5EFA\u65E5\u671F Order date",is_txt_mode:!0},{default:n(()=>[g(P(e.create_date),1)]),_:1}),a(l,{class:"w-50 w-50-p",is_err:!1,header:"\u7FD4\u70FD\u904B\u55AE\u7DE8\u865F CF waybill number",is_txt_mode:!0},{default:n(()=>[g(P(e.cf_waybill_no),1)]),_:1})]),u("div",G,[a(l,{class:"w-50 w-50-p",is_err:o.waybill_no,header:"\u5BA2\u6236\u904B\u55AE\u7DE8\u865F Waybill number"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":s[0]||(s[0]=p=>e.waybill_no=p),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,e.waybill_no]])]),_:1},8,["is_err"]),a(l,{class:"w-50 w-50-p",is_err:o.order_id,header:"\u8A02\u55AE\u7DE8\u865F Order No."},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":s[1]||(s[1]=p=>e.order_id=p),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,e.order_id]])]),_:1},8,["is_err","header"])]),u("div",W,[a(l,{class:"w-50 w-50-p",is_err:o.order_group,header:"\u8A02\u55AE\u7D44 Group"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":s[2]||(s[2]=p=>e.order_group=p),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,e.order_group]])]),_:1},8,["is_err"]),a(l,{class:"w-50 w-50-p",is_err:!1,header:"\u8A02\u55AE\u65E5\u671F Order date"},{default:n(()=>[a(i,{timed:e.receipt_date,ref_key:"dateRef",ref:r,onResuit:s[3]||(s[3]=p=>e.receipt_date=p)},null,8,["timed"])]),_:1})]),u("div",q,[a(l,{class:"w-50 w-50-p",is_err:o.total_item_count,header:"\u4EF6\u6578 Package"},{default:n(()=>[d(u("input",{class:"input",type:"number","onUpdate:modelValue":s[4]||(s[4]=p=>e.total_item_count=p),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,e.total_item_count]])]),_:1},8,["is_err"]),a(l,{class:"w-50 w-50-p ip-weight",is_err:!1,header:"\u91CD\u91CF Weight"},{default:n(()=>[d(u("input",{class:"input",type:"number","onUpdate:modelValue":s[5]||(s[5]=p=>e.weight=p),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,e.weight]]),I]),_:1})]),u("div",L,[a(l,{class:"w-100 w-100-p",is_err:o.product_content,header:"\u8CA8\u54C1\u5167\u5BB9 Product detail"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":s[6]||(s[6]=p=>e.product_content=p),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,e.product_content]])]),_:1},8,["is_err"])]),u("div",z,[a(l,{class:"w-100",is_err:!1,header:"\u5099\u8A3B Remark"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":s[7]||(s[7]=p=>e.remarks=p),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,e.remarks]])]),_:1})])],64)}}}),J={class:"py f-row"},K={class:"py f-row"},Q={class:"py f-row"},X={class:"py f-row"},Y=F({__name:"OrderEditDetaii",setup(C,{expose:m}){const r=y({weight:"",total_item_count:"",car_park:"",tunnel_fee:"",misc_fee:"",floor_count:"",collection_payment:"",delivery_date:"",delivery_charge:"",delivery_men:""}),e=y({weight:!1,total_item_count:!1,car_park:!1,tunnel_fee:!1,misc_fee:!1,floor_count:!1,collection_payment:!1,delivery_charge:!1}),o=function(){let c=!0;if(r.weight)e.weight=!1;else return e.weight=!0,!1;if(r.total_item_count)e.total_item_count=!1;else return e.total_item_count=!0,!1;return Object.values(e).map(t=>{t&&(c=!1)}),c};return m({resuit:()=>o()?r:void 0,reset:c=>{for(let t in r)r[t]=c[t]}}),(c,t)=>{const s=w("fn-time"),l=w("eos-input");return v(),E(k,null,[u("div",J,[a(l,{class:"w-50 w-50-p",is_err:!1,header:"\u9001\u8CA8\u65E5\u671F Delivery date"},{default:n(()=>[a(s,{timed:r.delivery_date,ref:"dateRef",onResuit:t[0]||(t[0]=i=>r.delivery_date=i)},null,8,["timed"])]),_:1}),$(U)().is_admin?(v(),D(l,{key:0,class:"w-50 w-50-p",is_err:!1,header:"\u9001\u8CA8\u5458 Delivery men"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":t[1]||(t[1]=i=>r.delivery_men=i),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.delivery_men]])]),_:1})):O("",!0)]),u("div",K,[a(l,{class:"w-50 w-50-p",is_err:e.car_park,header:"\u505C\u8ECA\u5834 Parking"},{default:n(()=>[d(u("input",{class:"input",type:"number","onUpdate:modelValue":t[2]||(t[2]=i=>r.car_park=i),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.car_park]])]),_:1},8,["is_err"]),a(l,{class:"w-50 w-50-p",is_err:e.tunnel_fee,header:"\u96A7\u9053\u8CBB Tunnel fee"},{default:n(()=>[d(u("input",{class:"input",type:"number","onUpdate:modelValue":t[3]||(t[3]=i=>r.tunnel_fee=i),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.tunnel_fee]])]),_:1},8,["is_err"])]),u("div",Q,[a(l,{class:"w-50 w-50-p",is_err:e.misc_fee,header:"\u96DC\u8CBB Other charges"},{default:n(()=>[d(u("input",{class:"input",type:"number","onUpdate:modelValue":t[4]||(t[4]=i=>r.misc_fee=i),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.misc_fee]])]),_:1},8,["is_err"]),a(l,{class:"w-50 w-50-p",is_err:e.floor_count,header:"\u6A13\u68AF\u5C64\u6578 Stairs floor"},{default:n(()=>[d(u("input",{class:"input",type:"number","onUpdate:modelValue":t[5]||(t[5]=i=>r.floor_count=i),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.floor_count]])]),_:1},8,["is_err"])]),u("div",X,[a(l,{class:"w-50 w-50-p",is_err:e.delivery_charge,header:"\u904B\u8CBB Delivery charges"},{default:n(()=>[d(u("input",{class:"input",type:"number","onUpdate:modelValue":t[6]||(t[6]=i=>r.delivery_charge=i),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.delivery_charge]])]),_:1},8,["is_err"]),a(l,{class:"w-50 w-50-p",is_err:e.collection_payment,header:"\u4EE3\u6536\u8D27\u6B3E Collection Payment"},{default:n(()=>[d(u("input",{class:"input",type:"number","onUpdate:modelValue":t[7]||(t[7]=i=>r.collection_payment=i),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.collection_payment]])]),_:1},8,["is_err"])])],64)}}}),Z={class:"py f-row"},ee={class:"py f-row"},te={class:"py f-row"},se={class:"py f-row"},re=F({__name:"OrderEditReciver",setup(C,{expose:m}){const r=y({customer_name:"",customer_phone_no:"",district:"",area:"",address:"",route:""}),e=y({customer_name:!1,customer_phone_no:!1,district:!1,area:!1,address:!1,route:!1}),o=function(){let c=!0;if(r.customer_name)e.customer_name=!1;else return e.customer_name=!0,!1;if(r.address)e.address=!1;else return e.address=!0,!1;return Object.values(e).map(t=>{t&&(c=!1)}),c};return m({resuit:()=>o()?r:void 0,reset:c=>{for(let t in r)r[t]=c[t]}}),(c,t)=>{const s=w("eos-input");return v(),E(k,null,[u("div",Z,[a(s,{class:"w-50 w-50-p",is_err:e.customer_name,header:"\u6536\u4EF6\u4EBA\u540D\u79F0 Recipient name"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":t[0]||(t[0]=l=>r.customer_name=l),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.customer_name]])]),_:1},8,["is_err"]),a(s,{class:"w-50 w-50-p",is_err:e.customer_phone_no,header:"\u6536\u4EF6\u4EBA\u96FB\u8A71\u865F\u78BC Tel."},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":t[1]||(t[1]=l=>r.customer_phone_no=l),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.customer_phone_no]])]),_:1},8,["is_err","header"])]),u("div",ee,[a(s,{class:"w-50 w-50-p",is_err:e.district,header:"\u5730\u5340 District"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":t[2]||(t[2]=l=>r.district=l),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.district]])]),_:1},8,["is_err"]),a(s,{class:"w-50 w-50-p",is_err:e.area,header:"\u5340\u57DF Area"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":t[3]||(t[3]=l=>r.area=l),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.area]])]),_:1},8,["is_err"])]),u("div",te,[a(s,{class:"w-100 w-100-p",is_err:e.address,header:"\u5730\u5740\u8A73\u60C5 Address"},{default:n(()=>[d(u("textarea",{class:"input","onUpdate:modelValue":t[4]||(t[4]=l=>r.address=l),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.address]])]),_:1},8,["is_err"])]),u("div",se,[a(s,{class:"w-50 w-50-p",is_err:e.route,header:"\u8DEF\u7EBF Route"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":t[5]||(t[5]=l=>r.route=l),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.route]])]),_:1},8,["is_err"])])],64)}}}),ue={class:"py fx-s"},le=u("h4",null,"\u8A02\u55AE\u5DF2\u5B8C\u6210\u9001\u8CA8\xA0\xA0The order has been delivered",-1),ae={class:"fx-r"},ne=F({__name:"OrderEditFinished",setup(C,{expose:m}){const r=A(),e=y({phone_no:"",chinese:"",english:""}),o=y({create_date:!1,waybill_no:!1,order_id:!1}),c=function(){let t=!0;if(e.waybill_no)o.waybill_no=!1;else return o.waybill_no=!0,!1;return Object.values(o).map(s=>{s&&(t=!1)}),t};return m({resuit:()=>c()?e:void 0,reset:t=>{for(let s in e)e[s]=t[s];r.value.ioc(t.receipt_date)}}),(t,s)=>{const l=w("eos-switch");return v(),E("div",ue,[le,u("div",ae,[g(" \u5426\xA0\xA0\xA0"),a(l),g("\xA0\xA0\u662F ")])])}}}),oe={class:"py f-row"},ie={class:"py f-row"},de=R('<div class="py pl"><p class="pb">\u9001\u8CA8\u54E1\u985E\u5225 Type of deliveryman:\xA0\xA0\u8CA8\u8ECA\u53F8\u6A5F</p><p class="pb">\u5224\u982D\u540D\u7A31 Company name:\xA0\xA0\u5F35\u4E09</p><p class="pb">\u8ECA\u724C Licence plate:\xA0\xA0Ak 67876</p><p class="">\u8CA8\u8ECA\u985E\u578B Truck type:\xA0\xA0\u8CA8VAN</p></div>',1),_e=F({__name:"OrderEditDeiiverMan",setup(C,{expose:m}){const r=A(),e=y({phone_no:"",chinese:"",english:""}),o=y({create_date:!1,waybill_no:!1,order_id:!1}),c=function(){let t=!0;if(e.waybill_no)o.waybill_no=!1;else return o.waybill_no=!0,!1;return Object.values(o).map(s=>{s&&(t=!1)}),t};return m({resuit:()=>c()?e:void 0,reset:t=>{for(let s in e)e[s]=t[s];r.value.ioc(t.receipt_date)}}),(t,s)=>{const l=w("eos-input");return v(),E(k,null,[u("div",oe,[a(l,{class:"w-50 w-50-p",is_err:!1,header:"\u4E2D\u6587\u540D Chinese name"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":s[0]||(s[0]=i=>e.chinese=i),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,e.chinese]])]),_:1}),a(l,{class:"w-50 w-50-p",is_err:!1,header:"\u82F1\u6587\u540D English name"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":s[1]||(s[1]=i=>e.english=i),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,e.english]])]),_:1})]),u("div",ie,[a(l,{class:"w-100",is_err:!1,header:"\u96FB\u8A71\u865F\u78BC Telephone number"},{default:n(()=>[d(u("input",{class:"input","onUpdate:modelValue":s[2]||(s[2]=i=>e.phone_no=i),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,e.phone_no]])]),_:1})]),de],64)}}}),ce=u("div",{class:"py_row"},null,-1),pe=u("div",{class:"py_row"},null,-1),fe=u("div",{class:"py_row"},null,-1),me=u("div",{class:"py_row"},null,-1),we={class:"panner"},Ae=F({__name:"order_edit",setup(C){const m=T(),r=A(),e=A(),o=A(),c=A(),t=A(),s=N().order,l=async()=>{s.id||p();const f=await V.one(s.id);f.receipt_date=f.receipt_date?f.receipt_date:S.now(),r.value.reset(f),e.value.reset(f),o.value.reset(f),c.value.reset(f),console.log("\u4E00\u4E2A\u8BA2\u5355 =",f)},i=async function(){const f=r.value.resuit(),b=e.value.resuit(),h=o.value.resuit(),B=c.value.resuit(),x=t.value.resuit();console.log(f,b,h,B,x),f&&b&&h&&B&&await V.edit({...f,...b,...h,...B},s.id)&&p()};j(async()=>{await l()});const p=()=>m.push("/admin/order_iist");return(f,b)=>{const h=w("eos-form-paner"),B=w("eos-iayout-form"),x=w("eos-iayout-screen");return v(),D(x,{is_en:!0,onBack:p},{default:n(()=>[a(B,{is_en:!0,onSubmit:i,onBack:p},{default:n(()=>[a(h,{tit:"\u57FA\u672C\u4FE1\u606F Basic information"},{default:n(()=>[a(H,{ref_key:"base",ref:r},null,512)]),_:1}),ce,a(h,{tit:"\u8A02\u55AE\u8A73\u60C5 Order details"},{default:n(()=>[a(Y,{ref_key:"detaii",ref:o},null,512)]),_:1}),pe,a(h,{tit:"\u6536\u4EF6\u4EBA\u4FE1\u606F Recipient information"},{default:n(()=>[a(re,{ref_key:"reciv",ref:e},null,512)]),_:1}),fe,a(h,{tit:"\u9001\u8CA8\u54E1\u4FE1\u606F Deliveryman information"},{default:n(()=>[a(_e,{ref_key:"deiiver",ref:c},null,512)]),_:1}),me,u("nav",we,[a(ne,{ref_key:"finished",ref:t},null,512)])]),_:1})]),_:1})}}});export{Ae as default};
