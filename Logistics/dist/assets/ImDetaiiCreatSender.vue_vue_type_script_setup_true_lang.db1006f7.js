import{d as y,s as m,H as A,p as C,o as E,c as g,a as e,h as t,w as a,q as w,J as B,b as o,t as _,i,F as V,W as b}from"./index.cfdd819b.js";const k={class:"py f-row"},N={class:"pt f-row"},U={class:"w-333"},S={class:"w-333"},T={class:"w-333"},q={class:"pt_s pb f-row"},H={class:"w-333"},I={class:"w-333"},J={class:"w-333"},M={class:"py f-row"},W={class:"w-333"},j={class:"w-333"},K=y({__name:"ImDetaiiCreatSender",setup(z,{expose:D}){const r=m(),d=m(),c=m(),F=m();let u=m({}),v={chinese_name:"",english_name:"",phone_no:""};A(r,async(s,n)=>{v.chinese_name=s+""}),A(d,async(s,n)=>{v.english_name=s+""}),A(c,async(s,n)=>{v.phone_no=s+""});const f=async()=>{if(r.value||d.value||c.value){let s=await b.many_of_param(v);s?(u.value=s[0]?s[0]:{},F.value=!1,r.value=u.value.chinese_name,d.value=u.value.english_name,c.value=u.value.phone_no):F.value=!0}};return D({resuit:()=>{const s=u.value?u.value:null,n=s?s.id:null;return n||(F.value=!0,!1)}}),(s,n)=>{const h=C("eos-input"),l=C("eos-inine-input"),x=C("cp-deiiver-net");return E(),g(V,null,[e("div",k,[t(h,{class:"w-333",is_err:!1,header:"\u96FB\u8A71\u865F\u78BC\uFF1A"},{default:a(()=>[w(e("input",{class:"input","onUpdate:modelValue":n[0]||(n[0]=p=>c.value=p),placeholder:"\u8ACB\u8F38\u5165 \u96FB\u8A71\u865F\u78BC \u9032\u884C\u641C\u7D22",onBlur:f},null,544),[[B,c.value]])]),_:1}),t(h,{class:"w-333",is_err:!1,header:"\u4E2D\u6587\u540D\uFF1A"},{default:a(()=>[w(e("input",{class:"input","onUpdate:modelValue":n[1]||(n[1]=p=>r.value=p),placeholder:"\u8ACB\u8F38\u5165 \u4E2D\u6587\u540D \u9032\u884C\u641C\u7D22",onBlur:f},null,544),[[B,r.value]])]),_:1}),t(h,{class:"w-333",is_err:!1,header:"\u82F1\u6587\u540D\uFF1A"},{default:a(()=>[w(e("input",{class:"input","onUpdate:modelValue":n[2]||(n[2]=p=>d.value=p),placeholder:"\u8ACB\u8F38\u5165 \u82F1\u6587\u540D \u9032\u884C\u641C\u7D22",onBlur:f},null,544),[[B,d.value]])]),_:1})]),e("div",N,[e("div",U,[t(l,{txt_mode:!0},{default:a(()=>[o(" \u8EAB\u4EFD\u8B49\u865F\u78BC\uFF1A"),e("span",null,_(i(u).id_card_no),1)]),_:1})]),e("div",S,[t(l,{txt_mode:!0},{default:a(()=>[o(" \u96FB\u90F5\uFF1A"),e("span",null,_(i(u).email),1)]),_:1})]),e("div",T,[t(l,{txt_mode:!0},{default:a(()=>[o(" \u516C\u53F8\u540D\u7A31\uFF1A"),e("span",null,_(i(u).company_name),1)]),_:1})])]),e("div",q,[e("div",H,[t(l,{txt_mode:!0},{default:a(()=>[o(" \u5546\u696D\u767B\u8A18\uFF1A"),e("span",null,_(i(u).business_registration_no),1)]),_:1})]),e("div",I,[t(l,{txt_mode:!0},{default:a(()=>[o(" \u9001\u8CA8\u54E1\u985E\u5225\uFF1A"),e("span",null,_(i(u).type),1)]),_:1})]),e("div",J,[t(l,{txt_mode:!0},{default:a(()=>[o(" \u5224\u982D\u540D\u7A31\uFF1A"),e("span",null,_(i(u).contractor_name),1)]),_:1})])]),e("div",M,[e("div",W,[t(l,{txt_mode:!0},{default:a(()=>[o(" \u8ECA\u724C\uFF1A"),e("span",null,_(i(u).license_plate_no),1)]),_:1})]),e("div",j,[t(l,{txt_mode:!0},{default:a(()=>[o(" \u8CA8\u8ECA\u985E\u578B\uFF1A"),e("span",null,_(i(u).truck_type),1)]),_:1})])]),t(x)],64)}}});export{K as _};