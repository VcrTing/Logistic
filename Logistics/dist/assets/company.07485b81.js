import{C as c,f as o,R as e,S as r}from"./index.afa8f2c9.js";const s=async function(a){let t;try{t=await c.get("company",o().jwt,e(a))}catch{t=await c.get("company",o().jwt,e(a))}return t?r.ser_aii(t,[]):{}},i=async function(a){let t;try{t=await c.pos("company",o().jwt,a)}catch{t=await c.pos("company",o().jwt,a)}return t||null},u=async function(a,t){console.log("\u7DE8\u8F2F\u516C\u53F8 =",a),console.log("pk =",t);let n;try{n=await c.put("company",o().jwt,a,{},t)}catch{n=await c.put("company",o().jwt,a,{},t)}return n||null},w={many:s,edit:u,creat:i};export{w as c};
