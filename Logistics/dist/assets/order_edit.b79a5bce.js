import{o as g}from"./order.99f07e3a.js";import{d as A,z as y,s as w,k as m,o as F,c as C,a as s,f as l,w as o,x as d,A as _,F as k,l as b,u as P,G as V,C as U,L as D}from"./index.32d32065.js";const $={class:"py f-row"},O=s("input",{class:"input",disabled:"",value:"",placeholder:"\u66AB\u4E0D\u53EF\u66F4\u6539 Cannot be changed"},null,-1),x={class:"py f-row"},R={class:"py f-row"},j={class:"py f-row"},N=A({__name:"OrderEditBase",setup(B,{expose:f}){const t=y(),r=w({create_date:"",waybill_no:"",order_id:"",order_group:"",product_content:""}),i=w({create_date:!1,waybill_no:!1,order_id:!1,order_group:!1,product_content:!1}),n=function(){let e=!0;if(r.waybill_no)i.waybill_no=!1;else return i.waybill_no=!0,!1;if(r.order_id)i.order_id=!1;else return i.order_id=!0,!1;if(r.order_group)i.order_group=!1;else return i.order_group=!0,!1;return Object.values(i).map(u=>{u&&(e=!1)}),e};return f({resuit:()=>n()?r:void 0,reset:e=>{for(let u in r)r[u]=e[u];t.value.ioc(e.receipt_date)}}),(e,u)=>{const a=m("fn-time"),c=m("eos-input");return F(),C(k,null,[s("div",$,[l(c,{class:"w-50 w-50-p",is_err:i.create_date,header:"\u8A02\u55AE\u65E5\u671F Order date"},{default:o(()=>[l(a,{timed:r.create_date,ref_key:"dateRef",ref:t,onResuit:u[0]||(u[0]=p=>r.create_date=p)},null,8,["timed"])]),_:1},8,["is_err"]),l(c,{class:"w-50 w-50-p",is_err:!1,header:"\u7FD4\u70FD\u904B\u55AE\u7DE8\u865F CF waybill number"},{default:o(()=>[O]),_:1})]),s("div",x,[l(c,{class:"w-50 w-50-p",is_err:i.waybill_no,header:"\u5BA2\u6236\u904B\u55AE\u7DE8\u865F Waybill number"},{default:o(()=>[d(s("input",{class:"input","onUpdate:modelValue":u[1]||(u[1]=p=>r.waybill_no=p),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.waybill_no]])]),_:1},8,["is_err"]),l(c,{class:"w-50 w-50-p",is_err:i.order_id,header:"\u8A02\u55AE\u7DE8\u865F Order No."},{default:o(()=>[d(s("input",{class:"input","onUpdate:modelValue":u[2]||(u[2]=p=>r.order_id=p),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.order_id]])]),_:1},8,["is_err","header"])]),s("div",R,[l(c,{class:"w-50 w-50-p",is_err:i.order_group,header:"\u8A02\u55AE\u7D44 Group"},{default:o(()=>[d(s("input",{class:"input","onUpdate:modelValue":u[3]||(u[3]=p=>r.order_group=p),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.order_group]])]),_:1},8,["is_err"])]),s("div",j,[l(c,{class:"w-100 w-100-p",is_err:i.product_content,header:"\u8CA8\u54C1\u5167\u5BB9 Product detail"},{default:o(()=>[d(s("input",{class:"input","onUpdate:modelValue":u[4]||(u[4]=p=>r.product_content=p),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,r.product_content]])]),_:1},8,["is_err"])])],64)}}}),T={class:"py f-row"},G=s("span",{class:"ip-unit"},"kg",-1),S={class:"py f-row"},W={class:"py f-row"},z={class:"py f-row"},L=A({__name:"OrderEditDetaii",setup(B,{expose:f}){const t=w({weight:"",total_item_count:"",car_park:"",tunnel_fee:"",misc_fee:"",floor_count:"",collection_payment:""}),r=w({weight:!1,total_item_count:!1,car_park:!1,tunnel_fee:!1,misc_fee:!1,floor_count:!1,collection_payment:!1}),i=function(){let n=!0;if(t.weight)r.weight=!1;else return r.weight=!0,!1;if(t.total_item_count)r.total_item_count=!1;else return r.total_item_count=!0,!1;return Object.values(r).map(e=>{e&&(n=!1)}),n};return f({resuit:()=>i()?t:void 0,reset:n=>{for(let e in t)t[e]=n[e]}}),(n,e)=>{const u=m("eos-input");return F(),C(k,null,[s("div",T,[l(u,{class:"w-50 w-50-p ip-weight",is_err:r.weight,header:"\u91CD\u91CF Weight"},{default:o(()=>[d(s("input",{class:"input",type:"number","onUpdate:modelValue":e[0]||(e[0]=a=>t.weight=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.weight]]),G]),_:1},8,["is_err"]),l(u,{class:"w-50 w-50-p",is_err:r.total_item_count,header:"\u4EF6\u6578 No."},{default:o(()=>[d(s("input",{class:"input",type:"number","onUpdate:modelValue":e[1]||(e[1]=a=>t.total_item_count=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.total_item_count]])]),_:1},8,["is_err","header"])]),s("div",S,[l(u,{class:"w-50 w-50-p",is_err:r.car_park,header:"\u505C\u8ECA\u5834 Parking"},{default:o(()=>[d(s("input",{class:"input",type:"number","onUpdate:modelValue":e[2]||(e[2]=a=>t.car_park=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.car_park]])]),_:1},8,["is_err"]),l(u,{class:"w-50 w-50-p",is_err:r.tunnel_fee,header:"\u96A7\u9053\u8CBB Tunnel fee"},{default:o(()=>[d(s("input",{class:"input",type:"number","onUpdate:modelValue":e[3]||(e[3]=a=>t.tunnel_fee=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.tunnel_fee]])]),_:1},8,["is_err"])]),s("div",W,[l(u,{class:"w-50 w-50-p",is_err:r.misc_fee,header:"\u96DC\u8CBB Other charges"},{default:o(()=>[d(s("input",{class:"input",type:"number","onUpdate:modelValue":e[4]||(e[4]=a=>t.misc_fee=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.misc_fee]])]),_:1},8,["is_err"]),l(u,{class:"w-50 w-50-p",is_err:r.floor_count,header:"\u6A13\u68AF\u5C64\u6578 Stairs floor"},{default:o(()=>[d(s("input",{class:"input",type:"number","onUpdate:modelValue":e[5]||(e[5]=a=>t.floor_count=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.floor_count]])]),_:1},8,["is_err"])]),s("div",z,[l(u,{class:"w-50 w-50-p",is_err:r.collection_payment,header:"\u4EE3\u6536\u8D27\u6B3E Collection Payment"},{default:o(()=>[d(s("input",{class:"input",type:"number","onUpdate:modelValue":e[6]||(e[6]=a=>t.collection_payment=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.collection_payment]])]),_:1},8,["is_err"])])],64)}}}),M=A({__name:"OrderEditRemark",setup(B,{expose:f}){const t=w({remark:""}),r=w({remark:!1}),i=function(){let n=!0;return Object.values(r).map(e=>{e&&(n=!1)}),n};return f({resuit:()=>i()?t:void 0,reset:n=>{for(let e in t)t[e]=n[e]}}),(n,e)=>{const u=m("eos-input");return F(),b(u,{class:"w-100",is_err:r.remark,header:"\u5099\u8A3B Remark"},{default:o(()=>[d(s("textarea",{class:"input","onUpdate:modelValue":e[0]||(e[0]=a=>t.remark=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.remark]])]),_:1},8,["is_err"])}}}),q={class:"py f-row"},H={class:"py f-row"},I={class:"py f-row"},J={class:"py f-row"},K=A({__name:"OrderEditReciver",setup(B,{expose:f}){const t=w({customer_name:"",customer_phone_no:"",district:"",area:"",address:"",route:""}),r=w({customer_name:!1,customer_phone_no:!1,district:!1,area:!1,address:!1,route:!1}),i=function(){let n=!0;if(t.customer_name)r.customer_name=!1;else return r.customer_name=!0,!1;if(t.address)r.address=!1;else return r.address=!0,!1;return Object.values(r).map(e=>{e&&(n=!1)}),n};return f({resuit:()=>i()?t:void 0,reset:n=>{for(let e in t)t[e]=n[e]}}),(n,e)=>{const u=m("eos-input");return F(),C(k,null,[s("div",q,[l(u,{class:"w-50 w-50-p",is_err:r.customer_name,header:"\u6536\u4EF6\u4EBA\u540D\u79F0 Recipient name"},{default:o(()=>[d(s("input",{class:"input","onUpdate:modelValue":e[0]||(e[0]=a=>t.customer_name=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.customer_name]])]),_:1},8,["is_err"]),l(u,{class:"w-50 w-50-p",is_err:r.customer_phone_no,header:"\u6536\u4EF6\u4EBA\u96FB\u8A71\u865F\u78BC Tel."},{default:o(()=>[d(s("input",{class:"input","onUpdate:modelValue":e[1]||(e[1]=a=>t.customer_phone_no=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.customer_phone_no]])]),_:1},8,["is_err","header"])]),s("div",H,[l(u,{class:"w-50 w-50-p",is_err:r.district,header:"\u5730\u5340 District"},{default:o(()=>[d(s("input",{class:"input","onUpdate:modelValue":e[2]||(e[2]=a=>t.district=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.district]])]),_:1},8,["is_err"]),l(u,{class:"w-50 w-50-p",is_err:r.area,header:"\u5340\u57DF Area"},{default:o(()=>[d(s("input",{class:"input","onUpdate:modelValue":e[3]||(e[3]=a=>t.area=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.area]])]),_:1},8,["is_err"])]),s("div",I,[l(u,{class:"w-100 w-100-p",is_err:r.address,header:"\u5730\u5740\u8A73\u60C5 Address"},{default:o(()=>[d(s("input",{class:"input","onUpdate:modelValue":e[4]||(e[4]=a=>t.address=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.address]])]),_:1},8,["is_err"])]),s("div",J,[l(u,{class:"w-100 w-100-p",is_err:r.route,header:"\u8DEF\u7EBF Route"},{default:o(()=>[d(s("input",{class:"input","onUpdate:modelValue":e[5]||(e[5]=a=>t.route=a),placeholder:"\u8ACB\u8F38\u5165 Please enter"},null,512),[[_,t.route]])]),_:1},8,["is_err"])])],64)}}}),Q=s("div",{class:"py_row"},null,-1),X=s("div",{class:"py_row"},null,-1),Y=s("div",{class:"py_row"},null,-1),te=A({__name:"order_edit",setup(B){const f=P(),t=y(),r=y(),i=y(),n=y(),e=V().order;U(()=>{e.receipt_date=e.receipt_date?e.receipt_date:D.now(),e.id||a(),t.value.reset(e),r.value.reset(e),i.value.reset(e),n.value.reset(e)});const u=async function(){const c=t.value.resuit(),p=r.value.resuit(),h=i.value.resuit(),v=n.value.resuit();c&&p&&h&&await g.edit({...c,...p,...h,...v},e.id)&&a()},a=()=>f.push("/admin/order_iist");return(c,p)=>{const h=m("eos-form-paner"),v=m("eos-iayout-form"),E=m("eos-iayout-screen");return F(),b(E,{is_en:!0,onBack:a},{default:o(()=>[l(v,{is_en:!0,onSubmit:u,onBack:a},{default:o(()=>[l(h,{tit:"\u57FA\u672C\u4FE1\u606F Basic information"},{default:o(()=>[l(N,{ref_key:"base",ref:t},null,512)]),_:1}),Q,l(h,{tit:"\u6536\u4EF6\u4EBA\u4FE1\u606F Recipient information"},{default:o(()=>[l(K,{ref_key:"reciv",ref:r},null,512)]),_:1}),X,l(h,{tit:"\u8A02\u55AE\u8A73\u60C5 Order details"},{default:o(()=>[l(L,{ref_key:"detaii",ref:i},null,512)]),_:1}),Y,l(h,{tit:"\u5176\u4ED6 Other"},{default:o(()=>[l(M,{ref_key:"remark",ref:n},null,512)]),_:1})]),_:1})]),_:1})}}});export{te as default};