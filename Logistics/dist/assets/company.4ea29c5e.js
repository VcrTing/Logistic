import{q as e,f as r,s as c,D as i}from"./index.a1a6f076.js";const o=async function(a={"sort[0]":"createdAt:desc","pagination[page]":1,"pagination[pageSize]":100}){let t;try{t=await e.get("company",r().jwt,c(a))}catch{t=await e.get("company",r().jwt,c(a))}return t?i.ser_aii(t,[]):{}},s=async function(a){let t;try{t=await e.pos("company",r().jwt,a)}catch{t=await e.pos("company",r().jwt,a)}return t||null},p=async function(a,t){let n;try{n=await e.put("company",r().jwt,a,{},t)}catch{n=await e.put("company",r().jwt,a,{},t)}return n||null},w={many:o,edit:p,creat:s};export{w as c};