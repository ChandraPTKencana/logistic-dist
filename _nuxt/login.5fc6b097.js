import w from"./Loading.cc482880.js";import{f as v,g as d,y,A as k,r as c,i as S,x as C,o as V,c as U,a as s,n as u,q as m,m as e,E as a,t as g,s as j,b as q,d as B}from"./entry.026e5532.js";import"./_plugin-vue_export-helper.c27b6911.js";const E={class:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"},N=s("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[s("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-500"},"Sign in to your account ")],-1),T={action:"#"},A={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},D={class:"space-y-6"},M=s("label",{for:"username",class:"block text-sm font-medium leading-6 text-gray-900"},"Username",-1),R={class:"mt-2"},z=["disabled"],I={class:"sm:text-sm text-red-500"},L=s("div",{class:"flex items-center justify-between"},[s("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Password"),s("div",{class:"text-sm"})],-1),P={class:"mt-2"},F=["disabled"],G={class:"sm:text-sm text-red-500"},H=["disabled","onClick"],W=v({__name:"login",setup(J){const{authenticateUser:f}=d(),{trigger:p}=y(),{authenticated:x,loading:t}=k(d()),o=c({username:"",password:""}),i=c({}),_=S();C().loading_full=!1;const b=async()=>{try{i.value={},await f({username:o.value.username,password:o.value.password}),x.value&&_.push("/")}catch(l){p(l,i)}finally{}};return(l,n)=>{const h=w;return V(),U("div",E,[N,s("form",T,[s("div",A,[s("div",D,[s("div",null,[M,s("div",R,[u(s("input",{disabled:e(t),class:a([e(t)?"bg-gray-300":"bg-white-500","block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"]),id:"username",name:"username",type:"text",autocomplete:"username",required:"","onUpdate:modelValue":n[0]||(n[0]=r=>e(o).username=r)},null,10,z),[[m,e(o).username]]),s("div",I,g(e(i).username),1)])]),s("div",null,[L,s("div",P,[u(s("input",{disabled:e(t),class:a([e(t)?"bg-gray-300":"bg-white-500","block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"]),id:"password",name:"password",type:"password",autocomplete:"current-password",required:"","onUpdate:modelValue":n[1]||(n[1]=r=>e(o).password=r)},null,10,F),[[m,e(o).password]]),s("div",G,g(e(i).password),1)])]),s("div",null,[s("button",{disabled:e(t),class:a([e(t)?"bg-blue-300":"bg-blue-500","flex w-full items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"]),onClick:j(b,["prevent"])},[s("div",{class:a([e(t)?"block":"hidden","mr-1"])},[q(h)],2),B(" Sign in ")],10,H)])])])])])}}});export{W as default};