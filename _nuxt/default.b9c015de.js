import W from"./Times.ab10e003.js";import J from"./Burger.3645a436.js";import G from"./Home.7f991d6c.js";import{_ as H}from"./nuxt-link.02e7c055.js";import K from"./Money.184dc8f4.js";import O from"./Product.d04c9fc5.js";import Q from"./FileCopy.7107a691.js";import X from"./Person.05d52762.js";import{_ as Y}from"./Alert.vue.bc8a8e5f.js";import{_ as Z}from"./Loading.vue.f45d306c.js";import{f as tt,i as et,j as st,r as T,I as P,g as L,A as B,x as C,h as S,N as rt,o as a,c as p,a as x,m as r,J as I,E as d,b as e,w as l,d as i,G as _,n as ot,v as nt,t as at,_ as lt,F as it,y as ct}from"./entry.f2e433ad.js";import{u as ut}from"./useMyFetch.04b8e4b6.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./client-only.47dc31b8.js";import"./Loading.3597c6be.js";const pt={class:"w-full h-full flex"},dt={class:"relative h-full"},_t={class:"h-full flex flex-col p-2 overflow-hidden"},mt={class:"grow overflow-auto"},ft={id:"panel",class:"h-7 text-xs relative"},vt={class:"w-full absolute bottom-full mb-2 bg-slate-700 bg-opacity-80 cursor-pointer"},xt={class:"grow flex flex-col overflow-hidden"},Et=tt({__name:"default",setup(kt){const R=et(),E=st(),n=T("");P(()=>E.path,(o,t)=>{let f=o.split("/");f=f.filter(g=>g!=""),n.value="/"+f.join("/")},{immediate:!0});const{logUserOut:j}=L(),{authenticated:M}=B(L()),{triggerSidebar:F}=C(),{is_sidebar_open:y}=B(C()),V=S("token"),N=async()=>{C().loading_full=!0;const{data:o,error:t,status:f}=await ut("/logout",{method:"post",headers:{Authorization:`Bearer ${V.value}`,Accept:"application/json"},retry:0});if(C().loading_full=!1,f.value==="error"){ct().trigger(t);return}else j()},q=S("username");S("fullname");const b=T(!1);window.addEventListener("click",o=>{var f;const t=o.target;t instanceof Element&&((f=document==null?void 0:document.getElementById("panel"))!=null&&f.contains(t)||(b.value=!1))}),window.addEventListener("resize",o=>{let t=document.getElementById("side_menu");t&&(window.innerWidth>=640?t.style.left="0px":y.value||(t.style.left="-150px"))}),rt(()=>{let o=document.getElementById("side_menu");o&&(window.innerWidth>=640?o.style.left="0px":y.value||(o.style.left="-150px"))});const z=S("role"),m=o=>o.includes(z.value),u=o=>{n.value!=o&&(n.value=o,window.innerWidth<640&&(y.value=!1),R.push(o))},h=T(null);return P(()=>y.value,(o,t)=>{let f=150,g=300/150,v=null,s=h.value;v&&(clearInterval(v),v=null),s&&(v=setInterval(()=>{let k=parseFloat(s.style.left);o?k>=0&&v?(s.style.left="0px",clearInterval(v),v=null):s.style.left=k+g+"px":k<=f*-1&&v?(s.style.left="-150px",clearInterval(v),v=null):s.style.left=k-g+"px"},1))}),(o,t)=>{const f=W,g=J,v=G,s=H,k=K,$=O,w=Q,A=X,D=Y,U=Z;return a(),p(it,null,[x("div",pt,[x("nav",{id:"side_menu",ref_key:"side_menu",ref:h,class:"bg-slate-800 h-full min-w-[150px] max-w-[150px] fixed sm:relative sm:left-0 text-white z-10",style:{width:"320px"}},[x("div",dt,[x("button",{class:"absolute left-full h-8 text-2xl text-white bg-slate-500 sm:hidden bg-opacity-0 ring-0 focus:ring-0 flex justify-center items-center",onClick:t[0]||(t[0]=c=>r(F)(!r(y)))},[r(y)?(a(),I(f,{key:0})):(a(),I(g,{key:1}))]),x("header",_t,[x("ul",mt,[x("li",{class:d(r(n)=="/"?"active":"")},[e(s,{to:"/",class:"cursor-pointer",onClick:t[1]||(t[1]=c=>u("/"))},{default:l(()=>[e(v,{class:"mr-1"}),i(" Dashboard ")]),_:1})],2),m(["SuperAdmin","Logistic","PabrikTransport"])?(a(),p("li",{key:0,class:d(r(n)=="/data_ujalan"?"active":"")},[e(s,{to:"/data_ujalan",class:"cursor-pointer",onClick:t[2]||(t[2]=c=>u("/data_ujalan"))},{default:l(()=>[e(k,{class:"mr-1"}),i(" U.Jalan ")]),_:1})],2)):_("",!0),m(["SuperAdmin","PabrikTransport"])?(a(),p("li",{key:1,class:d(r(n)=="/data_trx_trp"?"active":"")},[e(s,{to:"/data_trx_trp",class:"cursor-pointer",onClick:t[3]||(t[3]=c=>u("/data_trx_trp"))},{default:l(()=>[e($,{class:"mr-1"}),i(" Trx Trp ")]),_:1})],2)):_("",!0),m(["SuperAdmin","PabrikTransport","Logistic"])?(a(),p("li",{key:2,class:d(r(n)=="/data_trx_trp/ticket"?"active":"")},[e(s,{to:"/data_trx_trp/ticket",class:"cursor-pointer",onClick:t[4]||(t[4]=c=>u("/data_trx_trp/ticket"))},{default:l(()=>[e($,{class:"mr-1"}),i(" Trx Ticket ")]),_:1})],2)):_("",!0),m(["SuperAdmin","PabrikMandor"])?(a(),p("li",{key:3,class:d(r(n)=="/data_trx_trp/ritase"?"active":"")},[e(s,{to:"/data_trx_trp/ritase",class:"cursor-pointer",onClick:t[5]||(t[5]=c=>u("/data_trx_trp/ritase"))},{default:l(()=>[e($,{class:"mr-1"}),i(" Trx Ritase ")]),_:1})],2)):_("",!0),m(["SuperAdmin","Logistic","PabrikTransport"])?(a(),p("li",{key:4,class:d(r(n)=="/data_standby"?"active":"")},[e(s,{to:"/data_standby",class:"cursor-pointer",onClick:t[6]||(t[6]=c=>u("/data_standby"))},{default:l(()=>[e(k,{class:"mr-1"}),i(" StandBy ")]),_:1})],2)):_("",!0),m(["SuperAdmin","PabrikTransport","PabrikMandor","Logistic"])?(a(),p("li",{key:5,class:d(r(n)=="/data_standby/trx"?"active":"")},[e(s,{to:"/data_standby/trx",class:"cursor-pointer",onClick:t[7]||(t[7]=c=>u("/data_standby/trx"))},{default:l(()=>[e(k,{class:"mr-1"}),i(" StandBy Trx ")]),_:1})],2)):_("",!0),m(["SuperAdmin","Logistic","Finance","Marketing","MIS","Accounting"])?(a(),p("li",{key:6,class:d(r(n)=="/report_trx_trp"?"active":"")},[e(s,{to:"/report_trx_trp",class:"cursor-pointer",onClick:t[8]||(t[8]=c=>u("/report_trx_trp"))},{default:l(()=>[e(w,{class:"mr-1"}),i(" Report Trp ")]),_:1})],2)):_("",!0),m(["SuperAdmin","Logistic"])?(a(),p("li",{key:7,class:d(r(n)=="/report/ramp"?"active":"")},[e(s,{to:"/report/ramp",class:"cursor-pointer",onClick:t[9]||(t[9]=c=>u("/report/ramp"))},{default:l(()=>[e(w,{class:"mr-1"}),i(" Report Ramp ")]),_:1})],2)):_("",!0),m(["SuperAdmin","Logistic"])?(a(),p("li",{key:8,class:d(r(n)=="/report/ast_n_driver"?"active":"")},[e(s,{to:"/report/ast_n_driver",class:"cursor-pointer",onClick:t[10]||(t[10]=c=>u("/report/ast_n_driver"))},{default:l(()=>[e(w,{class:"mr-1"}),i(" Report Ast & Driver ")]),_:1})],2)):_("",!0),m(["SuperAdmin","Finance"])?(a(),p("li",{key:9,class:d(r(n)=="/fin_payment_req"?"active":"")},[e(s,{to:"/fin_payment_req",class:"cursor-pointer",onClick:t[11]||(t[11]=c=>u("/fin_payment_req"))},{default:l(()=>[e(w,{class:"mr-1"}),i(" Payment Request ")]),_:1})],2)):_("",!0),m(["SuperAdmin","PabrikTransport","Logistic"])?(a(),p("li",{key:10,class:d(r(n)=="/vehicle"?"active":"")},[e(s,{to:"/vehicle",class:"cursor-pointer",onClick:t[12]||(t[12]=c=>u("/vehicle"))},{default:l(()=>[e(A,{class:"mr-1"}),i(" Kendaraan ")]),_:1})],2)):_("",!0),m(["SuperAdmin","Logistic"])?(a(),p("li",{key:11,class:d(r(n)=="/employee"?"active":"")},[e(s,{to:"/employee",class:"cursor-pointer",onClick:t[13]||(t[13]=c=>u("/employee"))},{default:l(()=>[e(A,{class:"mr-1"}),i(" Pekerja ")]),_:1})],2)):_("",!0),m(["SuperAdmin"])?(a(),p("li",{key:12,class:d(r(n)=="/user"?"active":"")},[e(s,{to:"/user",class:"cursor-pointer",onClick:t[14]||(t[14]=c=>u("/user"))},{default:l(()=>[e(A,{class:"mr-1"}),i(" User ")]),_:1})],2)):_("",!0)]),x("div",ft,[ot(x("div",vt,[e(s,{to:"/profile/change_password",class:"block w-full text-left p-2 hover:bg-slate-900"},{default:l(()=>[i(" Change Password ")]),_:1}),r(M)?(a(),I(s,{key:0,class:"block w-full text-left p-2 hover:bg-slate-900",onClick:N},{default:l(()=>[i(" Logout ")]),_:1})):_("",!0)],512),[[nt,r(b)]]),x("div",{class:"bg-slate-700 bg-opacity-80 p-2 cursor-pointer",onClick:t[15]||(t[15]=c=>b.value=!r(b))},at(r(q)),1)])])])],512),x("div",xt,[lt(o.$slots,"default")])]),e(D),e(U)],64)}}});export{Et as default};