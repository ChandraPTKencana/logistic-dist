import le from"./Plus.52e78f82.js";import oe from"./Edit.13d742fe.js";import ne from"./Signature.443c0fcf.js";import re from"./Calculator.e2a971c7.js";import ie from"./Search.9d693f3d.js";import ue from"./Line.7257d21a.js";import de from"./Check.51004f7d.js";import ce from"./trx.f057225c.js";import me from"./trx_validasi.2793f47f.js";import{f as _e,r as o,i as fe,j as L,o as u,c as _,a as e,k as l,b as f,l as M,m as pe,v as ve,n as he,x as ge,F as ye,y as ke,C as c,D as k,t as p,E as be,A as b,B as H}from"./entry.a289b04e.js";import{u as w}from"./useUtils.4534ad1e.js";import{u as V}from"./useMyFetch.d7b7cecf.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./HeaderPopup.vue.70032f31.js";import"./Times.c09bbbe0.js";import"./InputPointFormat.vue.c481350f.js";const we={class:"w-full h-full flex flex-col bg-white"},xe={class:"w-full flex grow flex-col"},Ce={class:"w-full flex"},$e={action:"#",class:"w-full flex p-1"},De={class:"grow"},Ae=e("div",{class:"font-bold"}," Keyword ",-1),Te={class:"flex items-end pl-1"},Me={class:"w-full flex justify-center items-center grow p-1"},Se={key:0,class:""},Ue={class:"tacky"},Fe=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"App 1"),e("th",null,"App 2"),e("th",null,"ID"),e("th",null,"ID Trx Trp"),e("th",null,"Nominal Potong"),e("th",null,"Note"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1),Ie=["onClick"],Pe={class:"flex items-center justify-center"},Be={class:"flex items-center justify-center"},Xe={__name:"part",props:{show:{type:Boolean,required:!0,default:!1},id:{type:Number,required:!1,default:0}},emits:["updateRemainingCut"],setup(z,{emit:E}){const v=z,{$moment:S}=be(),{pointFormat:O}=w(),n={};n._TimeZoneOffset=new Date().getTimezoneOffset(),n.sort="created_at:desc";const U=_e("token"),i=o([]),d=o(""),x=o({field:"created_at",by:"desc"}),m=o(-1),r=o({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),q=()=>{n.like="",d.value!=""&&(n.like=`id:%${d.value}%,employee_name:%${d.value}%,no_pol:%${d.value}%,info:%${d.value}%,status:%${d.value}%`),n.sort="",x.value.field&&(n.sort=x.value.field+":"+x.value.by)},g=o(null),C=async()=>{b().loading_full=!0,r.value.may_get_data=!1,n.page=r.value.page,n.page==1&&(i.value=[]),n.first_row&&delete n.first_row,n.page>1&&(n.first_row=JSON.stringify(i.value[0])),n.potongan_mst_id=v.id;const{data:s,error:a,status:h}=await V("/potongan_trxs",{method:"get",headers:{Authorization:`Bearer ${U.value}`,Accept:"application/json"},params:n,retry:0});if(b().loading_full=!1,r.value.may_get_data=!0,h.value==="error"){H().trigger(a);return}r.value.page==1?(i.value=s.value.data,g.value&&(g.value.scrollTop=0)):r.value.page>1&&(i.value=[...i.value,...s.value.data]),s.value.data.length==0&&(r.value.is_last_record=!0)},K=async()=>{if(!r.value.may_get_data)return;let s=g.value;if(s.scrollLeft!=r.value.scrollLeft){r.value.scrollLeft=s.scrollLeft;return}r.value.is_last_record||!(Math.round(s.scrollTop)+s.clientHeight>=s.scrollHeight-1)||(r.value.page++,await C())},Y=()=>{r.value.page=1,r.value.is_last_record=!1,q(),C()},y=o(!1),$=o(0),F=o(0),J=()=>{$.value=0,y.value=!0,F.value=!1},{display:I}=fe(),Z=()=>{m.value==-1?I({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):($.value=i.value[m.value].id,y.value=!0,F.value=!1)},D=o(!1),P=o(0),G=()=>{m.value==-1?I({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(P.value=i.value[m.value].id,D.value=!0)},B=o(!1);o({}),o(!1);const Q=o("");L(()=>Q.value,s=>{s.trim().length>0?B.value=!0:B.value=!1},{immediate:!1});const W=async()=>{b().loading_full=!0;const s=new FormData;s.append("potongan_mst_id",v.id);const{data:a,error:h,status:A}=await V("/potongan_trx_recalculate",{method:"post",headers:{Authorization:`Bearer ${U.value}`,Accept:"application/json"},body:s,retry:0});if(b().loading_full=!1,A.value==="error"){H().trigger(h);return}E("updateRemainingCut",a.value.remaining_cut)};return L(()=>v.show,async(s,a)=>{s==!0&&v.id!=0&&C()},{immediate:!0}),(s,a)=>{var j;const h=le,A=oe,X=ne,ee=re,te=ie,N=ue,R=de,se=ce,ae=me;return u(),_("div",we,[e("div",xe,[e("div",Ce,[("useUtils"in s?s.useUtils:l(w))().checkPermission("potongan_trx.create")?(u(),_("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[0]||(a[0]=t=>J())},[f(h)])):M("",!0),("useUtils"in s?s.useUtils:l(w))().checkPermissions(["potongan_trx.modify"])&&l(m)>-1&&!((j=l(i)[l(m)])!=null&&j.trx_trp_id)?(u(),_("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[1]||(a[1]=t=>Z())},[f(A)])):M("",!0),("useUtils"in s?s.useUtils:l(w))().checkPermissions(["potongan_trx.val","potongan_trx.val1"])?(u(),_("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[2]||(a[2]=t=>G())},[f(X)])):M("",!0),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:a[3]||(a[3]=t=>W())},[f(ee)])]),e("form",$e,[e("div",De,[Ae,pe(e("input",{class:"",type:"text","onUpdate:modelValue":a[4]||(a[4]=t=>he(d)?d.value=t:null),name:"search",placeholder:"Keyword"},null,512),[[ve,l(d)]])]),e("div",Te,[e("button",{class:"",type:"submit",name:"button",onClick:a[5]||(a[5]=ge(t=>Y(),["prevent"]))},[f(te,{class:"text-2xl"})])])]),e("div",Me,[l(i).length==0?(u(),_("div",Se," Maaf Tidak Ada Record ")):(u(),_("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:K},[e("table",Ue,[Fe,e("tbody",null,[(u(!0),_(ye,null,ke(l(i),(t,T)=>(u(),_("tr",{key:T,onClick:Ne=>m.value=T,class:c(l(m)==T?"active":"")},[e("td",{class:c(t.deleted?"!bg-red-500":"")},[e("div",Pe,[t.val?(u(),k(R,{key:1})):(u(),k(N,{key:0}))])],2),e("td",{class:c(t.deleted?"!bg-red-500":"")},[e("div",Be,[t.val1?(u(),k(R,{key:1})):(u(),k(N,{key:0}))])],2),e("td",{class:c([t.deleted?"!bg-red-500":"","bold"])},p(t.id),3),e("td",{class:c(t.deleted?"!bg-red-500":"")},p(t.trx_trp_id),3),e("td",{class:c(t.deleted?"!bg-red-500":"")},p(l(O)(t.nominal_cut)),3),e("td",{class:c(t.deleted?"!bg-red-500":"")},p(t.note),3),e("td",{class:c(t.deleted?"!bg-red-500":"")},p(t.created_at?l(S)(t.created_at).format("DD-MM-Y HH:mm:ss"):""),3),e("td",{class:c(t.deleted?"!bg-red-500":"")},p(t.updated_at?l(S)(t.updated_at).format("DD-MM-Y HH:mm:ss"):""),3)],10,Ie))),128))])])],544))])]),f(se,{show:l(y),fnClose:()=>{y.value=!1},id:l($),potongan_mst_id:v.id,p_data:l(i),onUpdateRemainingCut:a[6]||(a[6]=t=>s.$emit("updateRemainingCut",t))},null,8,["show","fnClose","id","potongan_mst_id","p_data"]),f(ae,{show:l(D),fnClose:()=>{D.value=!1},id:l(P),p_data:l(i)},null,8,["show","fnClose","id","p_data"])])}}};export{Xe as default};