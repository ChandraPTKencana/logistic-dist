import le from"./Plus.16a87b8d.js";import ae from"./Edit.e6170973.js";import oe from"./Signature.6d8b0e4b.js";import ne from"./Calculator.d2ed4d00.js";import re from"./Search.0c9742cc.js";import ie from"./Line.2300f6a2.js";import ue from"./Check.1029c086.js";import de from"./trx.2a404e43.js";import{f as ce,r as a,i as me,j as N,o as i,c as f,a as e,k as n,b as p,l as T,m as fe,v as _e,n as pe,x as ve,F as he,y as ge,C as u,D as b,t as m,E as ye,A as k,B as P}from"./entry.71d3ffb3.js";import{u as w}from"./useUtils.4ecc014f.js";import{u as j}from"./useMyFetch.e93b9b43.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./HeaderPopup.vue.4e79d294.js";import"./Times.aa566d17.js";import"./InputPointFormat.vue.6ae7088e.js";const be={class:"w-full h-full flex flex-col bg-white"},ke={class:"w-full flex grow flex-col"},we={class:"w-full flex"},Ce={action:"#",class:"w-full flex p-1"},De={class:"grow"},xe=e("div",{class:"font-bold"}," Keyword ",-1),$e={class:"flex items-end pl-1"},Ae={class:"w-full flex justify-center items-center grow p-1"},Me={key:0,class:""},Te={class:"tacky"},Se=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"App 1"),e("th",null,"App 2"),e("th",null,"ID"),e("th",null,"ID Trx Trp"),e("th",null,"Nominal Potong"),e("th",null,"Note"),e("th",null,"Created At"),e("th",null,"Updated At"),e("th",null,"Deleted At"),e("th",null,"Deleted By"),e("th",null,"Deleted Reason")])],-1),Ue=["onClick"],Be={class:"flex items-center justify-center"},Ie={class:"flex items-center justify-center"},Ge={__name:"part",props:{show:{type:Boolean,required:!0,default:!1},id:{type:Number,required:!1,default:0}},emits:["updateRemainingCut"],setup(L,{emit:z}){const v=L,{$moment:C}=ye(),{pointFormat:V}=w(),o={};o._TimeZoneOffset=new Date().getTimezoneOffset(),o.sort="created_at:desc";const S=ce("token"),d=a([]),c=a(""),D=a({field:"created_at",by:"desc"}),_=a(-1),r=a({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),E=()=>{o.like="",c.value!=""&&(o.like=`id:%${c.value}%,employee_name:%${c.value}%,no_pol:%${c.value}%,info:%${c.value}%,status:%${c.value}%`),o.sort="",D.value.field&&(o.sort=D.value.field+":"+D.value.by)},g=a(null),x=async()=>{k().loading_full=!0,r.value.may_get_data=!1,o.page=r.value.page,o.page==1&&(d.value=[]),o.first_row&&delete o.first_row,o.page>1&&(o.first_row=JSON.stringify(d.value[0])),o.potongan_mst_id=v.id;const{data:s,error:l,status:h}=await j("/potongan_trxs",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:o,retry:0});if(k().loading_full=!1,r.value.may_get_data=!0,h.value==="error"){P().trigger(l);return}r.value.page==1?(d.value=s.value.data,g.value&&(g.value.scrollTop=0)):r.value.page>1&&(d.value=[...d.value,...s.value.data]),s.value.data.length==0&&(r.value.is_last_record=!0)},O=async()=>{if(!r.value.may_get_data)return;let s=g.value;if(s.scrollLeft!=r.value.scrollLeft){r.value.scrollLeft=s.scrollLeft;return}r.value.is_last_record||!(Math.round(s.scrollTop)+s.clientHeight>=s.scrollHeight-1)||(r.value.page++,await x())},Y=()=>{r.value.page=1,r.value.is_last_record=!1,E(),x()},y=a(!1),$=a(0),U=a(0),q=()=>{$.value=0,y.value=!0,U.value=!1},{display:B}=me(),K=()=>{_.value==-1?B({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):($.value=d.value[_.value].id,y.value=!0,U.value=!1)},J=a(!1),Z=a(0),G=()=>{_.value==-1?B({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(Z.value=d.value[_.value].id,J.value=!0)},I=a(!1);a({}),a(!1);const Q=a("");N(()=>Q.value,s=>{s.trim().length>0?I.value=!0:I.value=!1},{immediate:!1});const W=async()=>{k().loading_full=!0;const s=new FormData;s.append("potongan_mst_id",v.id);const{data:l,error:h,status:A}=await j("/potongan_trx_recalculate",{method:"post",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},body:s,retry:0});if(k().loading_full=!1,A.value==="error"){P().trigger(h);return}z("updateRemainingCut",l.value.remaining_cut)};return N(()=>v.show,async(s,l)=>{s==!0&&v.id!=0&&x()},{immediate:!0}),(s,l)=>{const h=le,A=ae,X=oe,ee=ne,te=re,R=ie,F=ue,se=de;return i(),f("div",be,[e("div",ke,[e("div",we,[("useUtils"in s?s.useUtils:n(w))().checkPermission("potongan_trx.create")?(i(),f("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:l[0]||(l[0]=t=>q())},[p(h)])):T("",!0),("useUtils"in s?s.useUtils:n(w))().checkPermissions(["potongan_trx.modify","potongan_trx.create","potongan_trx.modify","potongan_trx.remove"])?(i(),f("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:l[1]||(l[1]=t=>K())},[p(A)])):T("",!0),("useUtils"in s?s.useUtils:n(w))().checkPermissions(["potongan_trx.val","potongan_trx.val1"])?(i(),f("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:l[2]||(l[2]=t=>G())},[p(X)])):T("",!0),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:l[3]||(l[3]=t=>W())},[p(ee)])]),e("form",Ce,[e("div",De,[xe,fe(e("input",{class:"",type:"text","onUpdate:modelValue":l[4]||(l[4]=t=>pe(c)?c.value=t:null),name:"search",placeholder:"Keyword"},null,512),[[_e,n(c)]])]),e("div",$e,[e("button",{class:"",type:"submit",name:"button",onClick:l[5]||(l[5]=ve(t=>Y(),["prevent"]))},[p(te,{class:"text-2xl"})])])]),e("div",Ae,[n(d).length==0?(i(),f("div",Me," Maaf Tidak Ada Record ")):(i(),f("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:O},[e("table",Te,[Se,e("tbody",null,[(i(!0),f(he,null,ge(n(d),(t,M)=>{var H;return i(),f("tr",{key:M,onClick:Re=>_.value=M,class:u(n(_)==M?"active":"")},[e("td",{class:u(t.deleted?"!bg-red-500":"")},[e("div",Be,[t.val?(i(),b(F,{key:1})):(i(),b(R,{key:0}))])],2),e("td",{class:u(t.deleted?"!bg-red-500":"")},[e("div",Ie,[t.val1?(i(),b(F,{key:1})):(i(),b(R,{key:0}))])],2),e("td",{class:u([t.deleted?"!bg-red-500":"","bold"])},m(t.id),3),e("td",{class:u(t.deleted?"!bg-red-500":"")},m(t.trx_trp_id),3),e("td",{class:u(t.deleted?"!bg-red-500":"")},m(n(V)(t.nominal_cut)),3),e("td",{class:u(t.deleted?"!bg-red-500":"")},m(t.note),3),e("td",{class:u(t.deleted?"!bg-red-500":"")},m(t.created_at?n(C)(t.created_at).format("DD-MM-Y HH:mm:ss"):""),3),e("td",{class:u(t.deleted?"!bg-red-500":"")},m(t.updated_at?n(C)(t.updated_at).format("DD-MM-Y HH:mm:ss"):""),3),e("td",{class:u(t.deleted?"!bg-red-500":"")},m(t.deleted_at?n(C)(t.deleted_at).format("DD-MM-Y HH:mm:ss"):""),3),e("td",{class:u(t.deleted?"!bg-red-500":"")},m((H=t.deleted_by)==null?void 0:H.username),3),e("td",{class:u(t.deleted?"!bg-red-500":"")},m(t.deleted_reason),3)],10,Ue)}),128))])])],544))])]),p(se,{show:n(y),fnClose:()=>{y.value=!1},id:n($),potongan_mst_id:v.id,p_data:n(d),onUpdateRemainingCut:l[6]||(l[6]=t=>s.$emit("updateRemainingCut",t))},null,8,["show","fnClose","id","potongan_mst_id","p_data"])])}}};export{Ge as default};