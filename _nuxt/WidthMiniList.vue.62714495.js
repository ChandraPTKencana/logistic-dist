import{_ as S}from"./WidthMiniPart.vue.71090db3.js";import $ from"./Times.7f466a98.js";import{K as B,r as u,G as N,o as n,c as a,l as m,a as s,b as _,m as k,J as q,k as f,n as O,v as T,F as V,y as j,t as x}from"./entry.e212c805.js";const E={class:"relative"},I={key:0,class:"absolute w-full h-full"},J={key:2,class:"card-border cursor-pointer !flex flex-row flex-nowrap"},M={key:0,class:"flex items-center"},D={class:"fixed h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10"},F={class:"grow overflow-y-auto"},W=["onClick"],z={class:"p-1 flex flex-wrap items-center"},A={class:"w-full"},G={class:""},K={class:"ml-1"},P={key:0,class:"w-full"},X=B({__name:"WidthMiniList",props:{arr:{type:Array,required:!0,default:[]},pure:{type:Object,required:!0,default:[]},disabled:{type:Boolean,required:!1,default:!1},selected:{type:Object,required:!1,default:{_:{},id:"",name:"",title:"",note:""}}},emits:["input","nextBlur","setSelected"],setup(i,{emit:y}){const v=i,c=u(!1),w=u(null),l=u(null),o=u(""),b=()=>{setTimeout(()=>{c.value=!0},1),setTimeout(()=>{l!=null&&l.value&&(l==null||l.value.focus())},2)};window.addEventListener("click",r=>{var d;const e=r.target;e instanceof Element&&c.value&&((d=w.value)!=null&&d.contains(e)||(c.value=!1))});const g=N(()=>o.value!=""?v.arr.filter(r=>r.id.toString().toLowerCase().includes(o.value.toLowerCase())||r.name.toLowerCase().includes(o.value.toLowerCase())||r.title.toLowerCase().includes(o.value.toLowerCase())):v.arr),C=r=>{y("setSelected",r),c.value=!1},L=()=>{y("setSelected",JSON.parse(JSON.stringify(v.pure)))};return(r,e)=>{const d=S,h=$;return n(),a("div",E,[i.disabled?(n(),a("div",I)):m("",!0),i.selected.id==""?(n(),a("div",{key:1,class:"card-border cursor-pointer",onClick:e[0]||(e[0]=t=>b())})):(n(),a("div",J,[s("div",{class:"flex flex-wrap items-center grow",onClick:e[1]||(e[1]=t=>b())},[_(d,{selected:i.selected},null,8,["selected"])]),i.disabled?m("",!0):(n(),a("div",M,[s("button",{type:"button",class:"bg-red-500 text-white border-none",onClick:e[2]||(e[2]=t=>L())},[_(h)])]))])),k(s("div",D,[s("div",{ref_key:"search_box",ref:w,class:"w-[320px] h-full ring-1 ring-gray-500 p-2 bg-white flex flex-col relative"},[k(s("input",{ref_key:"search_words",ref:l,type:"text","onUpdate:modelValue":e[3]||(e[3]=t=>O(o)?o.value=t:null),placeholder:"search",class:"max-h-8"},null,512),[[T,f(o)]]),_(h,{class:"absolute right-3 top-4 cursor-pointer",onClick:e[4]||(e[4]=t=>{var p;return o.value="",(p=f(l))==null?void 0:p.focus()})}),s("div",F,[(n(!0),a(V,null,j(f(g),(t,p)=>(n(),a("div",{class:"mt-3 flex border-[1px] border-solid border-gray-400 cursor-pointer",onClick:R=>C(t)},[s("div",z,[s("div",A,[s("span",G," #"+x(t.id),1),s("span",K,x(t.name),1)]),t.title?(n(),a("div",P,x(t.title||""),1)):m("",!0)])],8,W))),256))])],512)],512),[[q,f(c)]])])}}});export{X as _};