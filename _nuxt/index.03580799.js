import ae from"./Header.de1a6f48.js";import oe from"./Plus.3024eefe.js";import le from"./Edit.510772e4.js";import se from"./Delete.1f71e896.js";import ne from"./Search.0e9d7088.js";import{_ as re}from"./PopupMini.vue.e306e4b1.js";import ie from"./vehicle.2c74ce6a.js";import{f as ue,g as ce,r,h as de,i as H,s as _e,j as fe,c as g,a as e,b as f,m as C,v as N,k as o,n as O,q as P,F as j,y as pe,w as ve,z as me,A as m,B,o as y,C as he,t as A,d as ge,p as ye,e as we,E as xe}from"./entry.1da81da6.js";import{u as V}from"./useMyFetch.bacdf18d.js";import{_ as be}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.67ba30c4.js";import"./Exclamation.ca0bc743.js";import"./HeaderPopup.vue.83dedf7d.js";import"./useUtils.5bacb879.js";const c=w=>(ye("data-v-fa182446"),w=w(),we(),w),ke={class:"w-full h-full flex flex-col"},De={class:"w-full flex grow flex-col overflow-auto h-0"},Ce={class:"w-full flex"},Ae={class:"w-full flex p-1"},Se={class:"grow"},Te=c(()=>e("div",{class:"font-bold"}," Keyword ",-1)),$e={class:"pl-1"},Me=c(()=>e("div",{class:"font-bold"}," Sort By ",-1)),Be=c(()=>e("option",{value:""},null,-1)),Ve=c(()=>e("option",{value:"no_pol"},"No Pol",-1)),Ee=[Be,Ve],Ie={class:"pl-1"},Le=c(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),ze=c(()=>e("option",{value:"asc"},"Asc",-1)),Fe=c(()=>e("option",{value:"desc"},"Desc",-1)),He=[ze,Fe],Ne={class:"flex items-end pl-1"},Oe={class:"w-full flex justify-center items-center grow h-0 p-1"},Pe={key:0,class:""},je={class:"tacky"},Re=c(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"No Pol"),e("th",null,"Tanggal Dibuat"),e("th",null,"Tanggal Diubah")])],-1)),Ue=["onClick"],Ke={class:"bold"},Ye={class:"grow mb-5"},qe={__name:"index",async setup(w){let x,E;const{$moment:I}=xe(),i={};i._TimeZoneOffset=new Date().getTimezoneOffset();const S=ue("token"),{data:n}=([x,E]=ce(async()=>me(async()=>{m().loading_full=!0;const{data:a,error:t,status:_}=await V("/vehicles",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:i,retry:0});return m().loading_full=!1,_.value==="error"?(B().trigger(t),[]):a.value.data},"$OEvmawoGm4")),x=await x,E(),x),p=r(""),d=r({field:"",by:"desc"}),u=r(-1),s=r({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),R=()=>{i.like="",p.value!=""&&(i.like=`id:%${p.value}%,no_pol:%${p.value}%`),i.sort="",d.value.field&&(i.sort=d.value.field+":"+d.value.by)},b=r(null),L=async()=>{m().loading_full=!0,s.value.may_get_data=!1,i.page=s.value.page,i.page==1&&(n.value=[]);const{data:a,error:t,status:_}=await V("/vehicles",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:i,retry:0});if(m().loading_full=!1,s.value.may_get_data=!0,_.value==="error"){B().trigger(t);return}s.value.page==1?(n.value=a.value.data,b.value&&(b.value.scrollTop=0)):s.value.page>1&&(n.value=[...n.value,...a.value.data]),a.value.data.length==0&&(s.value.is_last_record=!0)},U=async()=>{if(!s.value.may_get_data)return;let a=b.value;if(a.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=a.scrollLeft;return}s.value.is_last_record||!(Math.round(a.scrollTop)+a.clientHeight>=a.scrollHeight-1)||(s.value.page++,await L())},K=()=>{s.value.page=1,s.value.is_last_record=!1,R(),L()};de();const k=r(!1),T=r(0),Y=()=>{T.value=0,k.value=!0},{display:z}=H();_e(H());const q=()=>{u.value==-1?z({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(T.value=n.value[u.value].id,k.value=!0)},$=r(!1),F=r({}),h=r(!1),v=r(""),G=async()=>{h.value&&(h.value=!1)},Z=()=>{u.value==-1?z({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(v.value="",F.value={id:n.value[u.value].id},h.value=!0)};fe(()=>v.value,a=>{a.trim().length>0?$.value=!0:$.value=!1},{immediate:!1});const J=async()=>{m().loading_full=!0;const a=new FormData;a.append("id",n.value[u.value].id),a.append("deleted_reason",v.value),a.append("_method","DELETE");const{data:t,error:_,status:M}=await V("/vehicle",{method:"post",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},body:a,retry:0});if(m().loading_full=!1,M.value==="error"){B().trigger(_);return}n.value.splice(u.value,1),u.value=-1,h.value=!1};return(a,t)=>{const _=ae,M=oe,Q=le,W=se,X=ne,ee=re,te=ie;return y(),g(j,null,[e("div",ke,[f(_,{title:"List Vehicle"}),e("div",De,[e("div",Ce,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[0]||(t[0]=l=>Y())},[f(M)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=l=>q())},[f(Q)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=l=>Z())},[f(W)])]),e("div",Ae,[e("div",Se,[Te,C(e("input",{class:"",type:"text","onUpdate:modelValue":t[3]||(t[3]=l=>O(p)?p.value=l:null),name:"search",placeholder:"Keyword"},null,512),[[N,o(p)]])]),e("div",$e,[Me,C(e("select",{class:"","onUpdate:modelValue":t[4]||(t[4]=l=>o(d).field=l)},Ee,512),[[P,o(d).field]])]),e("div",Ie,[Le,C(e("select",{class:"","onUpdate:modelValue":t[5]||(t[5]=l=>o(d).by=l)},He,512),[[P,o(d).by]])]),e("div",Ne,[e("button",{class:"",type:"button",name:"button",onClick:t[6]||(t[6]=l=>K())},[f(X,{class:"text-2xl"})])])]),e("div",Oe,[o(n).length==0?(y(),g("div",Pe," Maaf Tidak Ada Record ")):(y(),g("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:b,onScroll:U},[e("table",je,[Re,e("tbody",null,[(y(!0),g(j,null,pe(o(n),(l,D)=>(y(),g("tr",{key:D,onClick:Ge=>u.value=D,class:he(o(u)==D?"active":"")},[e("td",null,A(D+1)+".",1),e("td",Ke,A(l.no_pol),1),e("td",null,A(o(I)(l.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,A(o(I)(l.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,Ue))),128))])])],544))])])]),f(ee,{type:"delete",show:o(h),data:o(F),fnClose:G,fnConfirm:J,enabledOk:o($)},{footer:ve(()=>[ge(" Masukkan Alasan Penghapusan: "),e("div",Ye,[C(e("textarea",{"onUpdate:modelValue":t[7]||(t[7]=l=>O(v)?v.value=l:null)},null,512),[[N,o(v)]])])]),_:1},8,["show","data","enabledOk"]),f(te,{show:o(k),fnClose:()=>{k.value=!1},id:o(T),p_data:o(n)},null,8,["show","fnClose","id","p_data"])],64)}}},ut=be(qe,[["__scopeId","data-v-fa182446"]]);export{ut as default};