import{_ as f}from"./client-only.2cd078e0.js";import m from"./Times.e773cb70.js";import{K as p,j as a,s as u,k as d,J as x,l as t,o as w,c as v,a as e,b as n,w as h,t as r,E as b}from"./entry.571f57c8.js";const g={class:"h-full flex flex-row flex-wrap overflow-auto"},C={class:"flex flex-col flex-grow"},D=p({__name:"Alert",setup(k){a();const{show:s,status:o,message:c,permit_close:y}=u(a());return(B,l)=>{const i=f,_=m;return d((w(),v("div",{id:"alert",class:b(["fixed w-full h-14 bottom-0 text-white p-1 border-t-2 border-slate-700 z-20",t(o)=="Failed"?"bg-red-800 ":"bg-slate-800 "])},[e("div",g,[e("div",C,[n(i,null,{default:h(()=>[e("strong",null,r(t(o)),1),e("small",null,r(t(c)),1)]),_:1})]),e("div",{class:"flex items-center justify-center",onClick:l[0]||(l[0]=S=>s.value=!1)},[n(_,{class:"text-2xl cursor-pointer"})])])],2)),[[x,t(s)]])}}});export{D as _};