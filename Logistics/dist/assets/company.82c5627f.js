import{D as e,g as o,E as s,G as c}from"./index.fa0804b5.js";const r=async function(t){let n=await e.get("company",o().jwt,s(t));return console.log("\u83B7\u53D6company =",n),n?c.ser_aii(n,[]):{}},i=async function(t){let n=await e.pos("company",o().jwt,t);return console.log("creat res =",n),n||null},l=async function(t,n){let a=await e.put("company",o().jwt,t,{},n);return console.log("edit res =",a),a||null},p={many:r,edit:l,creat:i};export{p as c};