import{J as d,o as s,c as a,y as i,F as o,a as l,t as c,D as m,a0 as u,k as f,I as v,l as r}from"./entry.1da81da6.js";const _={key:0,class:"flex flex-col flex-wrap p-1"},x={for:"",class:"text-xs"},p={class:"flex"},h={class:"flex items-center pr-[1px]"},b=d({__name:"WidthMiniPart",props:{selected:{type:Object,required:!1,default:{_:{},id:-1,name:"",title:""}}},setup(e){return(n,C)=>(s(!0),a(o,null,i(Object.keys(e.selected._),t=>(s(),a(o,null,[e.selected._[t].val?(s(),a("div",_,[l("label",x,c(e.selected._[t].text),1),l("div",p,[l("div",h,[e.selected._[t].tcon?(s(),m(u(("resolveComponent"in n?n.resolveComponent:f(v))(e.selected._[t].tcon)),{key:0})):r("",!0)]),l("div",null,c(e.selected._[t].val),1)])])):r("",!0)],64))),256))}});export{b as _};