import{d as F,A as v,g as c,l as f,o as h,c as A,a,h as t,w as r,y as o,B as i,k as y}from"./index.9186fe41.js";const g={class:"py f-row"},D=a("div",{class:"fx-1"},null,-1),j=F({__name:"DeliverCreatCar",setup(w,{expose:d}){const e=v(),s=c({license_plate_no:"",truck_type:""}),p=c({license_plate_no:!1}),_=function(){let l=!0;if(s.license_plate_no)p.license_plate_no=!1;else return p.license_plate_no=!0,!1;return Object.values(p).map(n=>{n&&(l=!1)}),l};return d({resuit:function(){return _()?(s.truck_type=e.value.now,s):null},reset:l=>{for(let n in s)s[n]=l[n]}}),(l,n)=>{const m=f("eos-input"),C=f("ef-car-typed");return h(),A("div",null,[a("div",g,[t(m,{class:"w-25 w-333-p",is_err:p.license_plate_no,header:"\u8ECA\u724C\uFF1A"},{default:r(()=>[o(a("input",{class:"input","onUpdate:modelValue":n[0]||(n[0]=B=>s.license_plate_no=B),placeholder:"\u8ACB\u8F38\u5165"},null,512),[[i,s.license_plate_no]])]),_:1},8,["is_err"]),t(m,{class:"w-25 w-333-p",header:"\u8CA8\u8ECA\u985E\u578B\uFF1A"},{default:r(()=>[t(C,{class:"input",ref_key:"truck_type",ref:e},null,512)]),_:1}),D])])}}}),V={class:"py f-row"},k={class:"py f-row"},x=a("div",{class:"fx-1"},null,-1),E={class:"py f-row"},U=a("div",{class:"fx-1"},null,-1),b={class:"py f-row"},N=F({__name:"DeliverCreatBase",setup(w,{expose:d}){const e=c({chinese_name:"",english_name:"",id_card_no:"",phone_no:"",email:"",company_name:"",business_registration_no:"",contractor_name:""}),s=c({chinese_name:!1,english_name:!1,id_card_no:!1,phone_no:!1,email:!1,company_name:!1,business_registration_no:!1,contractor_name:!1}),p=function(){let _=!0;if(e.chinese_name)s.chinese_name=!1;else return s.chinese_name=!0,!1;if(e.phone_no)s.phone_no=!1;else return s.phone_no=!0,!1;if(e.email)s.email=!1;else return s.email=!0,!1;return Object.values(s).map(u=>{u&&(_=!1)}),_};return d({resuit:()=>p()?e:{},reset:_=>{for(let u in e)e[u]=_[u]}}),(_,u)=>{const l=f("eos-input");return h(),A("div",null,[a("div",V,[t(l,{class:"w-25 w-333-p",is_err:s.chinese_name,header:"\u4E2D\u6587\u540D\uFF1A"},{default:r(()=>[o(a("input",{class:"input","onUpdate:modelValue":u[0]||(u[0]=n=>e.chinese_name=n),placeholder:"\u8ACB\u8F38\u5165"},null,512),[[i,e.chinese_name]])]),_:1},8,["is_err"]),t(l,{class:"w-25 w-333-p",is_err:s.english_name,header:"\u82F1\u6587\u540D\uFF1A"},{default:r(()=>[o(a("input",{class:"input","onUpdate:modelValue":u[1]||(u[1]=n=>e.english_name=n),placeholder:"\u8ACB\u8F38\u5165"},null,512),[[i,e.english_name]])]),_:1},8,["is_err"]),t(l,{class:"w-25 w-333-p",is_err:s.id_card_no,header:"\u8EAB\u4EFD\u8B49\u865F\u78BC\uFF1A"},{default:r(()=>[o(a("input",{class:"input","onUpdate:modelValue":u[2]||(u[2]=n=>e.id_card_no=n),placeholder:"\u8ACB\u8F38\u5165"},null,512),[[i,e.id_card_no]])]),_:1},8,["is_err"])]),a("div",k,[t(l,{class:"w-25 w-333-p",is_err:s.phone_no,header:"\u96FB\u8A71\uFF1A"},{default:r(()=>[o(a("input",{class:"input","onUpdate:modelValue":u[3]||(u[3]=n=>e.phone_no=n),placeholder:"\u8ACB\u8F38\u5165"},null,512),[[i,e.phone_no]])]),_:1},8,["is_err"]),t(l,{class:"w-25 w-333-p",is_err:s.email,header:"\u96FB\u90F5\uFF1A"},{default:r(()=>[o(a("input",{class:"input","onUpdate:modelValue":u[4]||(u[4]=n=>e.email=n),placeholder:"\u8ACB\u8F38\u5165"},null,512),[[i,e.email]])]),_:1},8,["is_err"]),x]),a("div",E,[t(l,{class:"w-25 w-333-p",is_err:s.company_name,header:"\u516C\u53F8\u540D\u7A31\uFF08\u5982\u6709\uFF09\uFF1A"},{default:r(()=>[o(a("input",{class:"input","onUpdate:modelValue":u[5]||(u[5]=n=>e.company_name=n),placeholder:"\u8ACB\u8F38\u5165"},null,512),[[i,e.company_name]])]),_:1},8,["is_err"]),t(l,{class:"w-25 w-333-p",is_err:s.business_registration_no,header:"\u5546\u696D\u767B\u8A18\u865F\u78BC\uFF08\u5982\u6709\uFF09\uFF1A"},{default:r(()=>[o(a("input",{class:"input","onUpdate:modelValue":u[6]||(u[6]=n=>e.business_registration_no=n),placeholder:"\u8ACB\u8F38\u5165"},null,512),[[i,e.business_registration_no]])]),_:1},8,["is_err"]),U]),a("div",b,[t(l,{class:"w-50 w-333-p",header:"\u9001\u8CA8\u54E1\u985E\u5225\uFF1A",is_txt_mode:!0},{default:r(()=>[y(_.$slots,"default")]),_:3}),t(l,{class:"fx-1",is_err:s.contractor_name,header:"\u5224\u982D\u540D\u7A31\uFF1A"},{default:r(()=>[o(a("input",{class:"input","onUpdate:modelValue":u[7]||(u[7]=n=>e.contractor_name=n),placeholder:"\u8ACB\u8F38\u5165"},null,512),[[i,e.contractor_name]])]),_:1},8,["is_err"])])])}}});export{N as _,j as a};