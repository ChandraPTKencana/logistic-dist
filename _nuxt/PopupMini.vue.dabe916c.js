import{_ as y}from"./Times.5d27c9df.js";import{_ as g}from"./_plugin-vue_export-helper.c27b6911.js";import{o as a,c as d,a as e,z as k,r as C,g as f,K as $,b as m,Q as _,d as p,G as h,F as q,n as B,t as b,k as c,q as I}from"./entry.04ddde50.js";const V={name:"MaterialSymbolsExclamation"},j={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},z=e("path",{fill:"currentColor",d:"M11 14V5h2v9zm0 5v-2h2v2z"},null,-1),O=[z];function D(t,n,o,s,u,l){return a(),d("svg",j,O)}const F=g(V,[["render",D]]),N={key:0,class:"flex items-center justify-center fixed top-0 left-0 z-10 p-3 w-full h-full bg-black bg-opacity-80"},S={class:"flex items-center max-w-xs w-full relative bg-white border-solid border-gray-600 border-2 p-3 flex-col flex-wrap"},E={class:"absolute -top-7 right-0 py-1 px-2 bg-white border-solid border-2 border-gray-600 border-b-0 rounded-tl-md"},M={class:"flex items-center justify-center p-2 border-red-600 border-solid border-2 rounded-full"},L={class:"mx-0 my-2 text-justify"},T={key:0},G={key:1},K=e("b",null,"tidak dapat dikembalikan lagi",-1),P={class:"w-full text-left mt-3"},Q=e("b",{class:"text-gray-600"},"Data Information :",-1),U={class:"w-full border-solid border-2 border-black"},A={class:"border-solid border-2 border-black p-1 capitalize bg-slate-800 text-white text-right"},H={class:"border-solid border-2 border-black p-1 text-left"},J={class:"w-full text-left mt-3"},R={class:"flex w-full justify-between mt-5"},W=["disabled"],ee=k({__name:"PopupMini",props:{show:{type:Boolean,required:!0},data:{type:Object,required:!1,default:""},fnClose:{type:Function,required:!0},fnConfirm:{type:Function,required:!0},type:{type:String,required:!0},enabledOk:{type:Boolean,required:!1,default:!0}},setup(t){const n=t;let o=null;const s=C(0),u=()=>{o==null&&(s.value=1,o=setInterval(()=>{s.value--,s.value<=0&&(clearInterval(o),o=null)},1e3))};return f(()=>n.show,(l,r)=>{l?u():(clearInterval(o),o=null)},{immediate:!0,deep:!0}),f(()=>n.enabledOk,(l,r)=>{l&&n.show&&u()},{immediate:!0,deep:!0}),$(()=>{clearInterval(o),o=null}),(l,r)=>{const x=y,w=F;return t.show?(a(),d("div",N,[e("div",S,[e("div",E,[m(x,{class:"text-2xl text-black cursor-pointer",onClick:r[0]||(r[0]=i=>t.fnClose())})]),e("div",M,[m(w,{class:"text-4xl text-red-600"})]),e("div",L,[t.type=="custome"?(a(),d("div",T,[_(l.$slots,"words")])):t.type=="delete"?(a(),d("div",G,[p(" Data yang akan dihapus "),K,p(", yakin untuk menghapus data ini ? ")])):h("",!0)]),e("div",P,[Q,e("table",U,[(a(!0),d(q,null,B(t.data,(i,v)=>(a(),d("tr",null,[e("td",A,b(v),1),e("td",H,b(i),1)]))),256))])]),e("div",J,[_(l.$slots,"footer")]),e("div",R,[e("button",{onClick:r[1]||(r[1]=i=>t.fnClose()),class:"w-full bg-blue-500 border-blue-500 border-solid border-2 p-1 text-white mr-2"}," Batal "),e("button",{onClick:r[2]||(r[2]=i=>t.fnConfirm()),disabled:!n.enabledOk||c(s)>0,class:I(["w-full border-solid border-2 p-1 text-white",n.enabledOk&&c(s)<=0?"bg-red-600 border-red-600":"bg-slate-600 border-slate-600"])}," Lanjutkan "+b(c(s)>0?c(s):""),11,W)])])])):h("",!0)}}});export{ee as _};