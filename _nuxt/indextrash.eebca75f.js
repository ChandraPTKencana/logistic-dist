import ie from"./Header.bacd5d07.js";import re from"./Plus.f0b59dac.js";import ue from"./Edit.28f86a6d.js";import ce from"./Eyes.f18663f4.js";import _e from"./Signature.ce846c1e.js";import de from"./Search.2634d619.js";import me from"./Line.4ff6e51a.js";import pe from"./Check.f1a23a62.js";import fe from"./mst.d8bc3ae5.js";import ve from"./validasi.dfce0252.js";import{g as he,h as ye,r as a,B as ge,j as R,s as ke,f as we,c as m,b as p,a as e,l as t,n as b,k as T,A as xe,m as be,v as E,C as Ce,F as De,D as Se,q as $e,o as r,E as Ae,z as C,t as c,H as Pe,G as Ue,x as D,y as O}from"./entry.6653cba1.js";import{u as g}from"./useUtils.68ef0d10.js";import{u as K}from"./useMyFetch.6bc70573.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./HeaderPopup.vue.16e7fbba.js";import"./Times.6020b457.js";import"./WidthMiniList.vue.9e93c1c3.js";import"./WidthMiniPart.vue.645f3d27.js";import"./InputPointFormat.vue.c0affdd1.js";import"./AttachmentSingle.ed9f03bc.js";import"./PDFJsView.43ebb88c.js";import"./part.038ef20c.js";import"./Calculator.af538592.js";import"./trx.a589224d.js";import"./trx_validasi.664cb18c.js";const Me={class:"w-full h-full flex flex-col"},Te={class:"w-full flex grow flex-col overflow-auto h-0"},je={class:"w-full flex"},Ne={action:"#",class:"w-full flex p-1"},Fe={class:"grow"},Ie=e("div",{class:"font-bold"}," Keyword ",-1),Le={class:"pl-1"},Be=e("div",{class:"font-bold"}," Sort By ",-1),He=Pe('<option value=""></option><option value="id">ID</option><option value="xto">To</option><option value="jenis">Jenis</option><option value="tipe">Tipe</option>',5),Ve=[He],ze={class:"pl-1"},Re=e("div",{class:"font-bold"}," Sort Order ",-1),Ee=e("option",{value:"asc"},"Asc",-1),Oe=e("option",{value:"desc"},"Desc",-1),Ke=[Ee,Oe],Je={class:"flex items-end pl-1"},Ye={class:"w-full flex justify-center items-center grow h-0 p-1"},qe={key:0,class:""},Ge={class:"tacky"},Ze=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"App 1"),e("th",null,"App 2"),e("th",null,"ID"),e("th",null,"Nama Pekerja"),e("th",null,"No Pol"),e("th",null,"Kejadian"),e("th",null,"Nominal"),e("th",null,"Nominal Potongan"),e("th",null,"Sisa Potongan"),e("th",null,"Status"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1),Qe=["onClick"],We={class:"flex items-center justify-center"},Xe={class:"flex items-center justify-center"},et={class:"bold"},At={__name:"indextrash",async setup(tt){let k,j;const{$moment:N}=Ue(),{pointFormat:S}=g(),n={};n._TimeZoneOffset=new Date().getTimezoneOffset(),n.sort="created_at:desc";const F=he("token"),{data:J}=([k,j]=ye(async()=>$e(async()=>{let s=[];D().loading_full=!0;const{data:l,error:y,status:U}=await K("/potongan_msts",{method:"get",headers:{Authorization:`Bearer ${F.value}`,Accept:"application/json"},params:n,retry:0});return D().loading_full=!1,U.value==="error"?(O().trigger(y),{potongan_msts:s}):(s=l.value.data,{potongan_msts:s})},"$8f0rINALFg")),k=await k,j(),k),u=a(J.value.potongan_msts),_=a(""),f=a({field:"created_at",by:"desc"}),d=a(-1),i=a({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),Y=()=>{n.like="",_.value!=""&&(n.like=`id:%${_.value}%,employee_name:%${_.value}%,no_pol:%${_.value}%,info:%${_.value}%,status:%${_.value}%`),n.sort="",f.value.field&&(n.sort=f.value.field+":"+f.value.by)},w=a(null),I=async()=>{D().loading_full=!0,i.value.may_get_data=!1,n.page=i.value.page,n.page==1&&(u.value=[]),n.first_row&&delete n.first_row,n.page>1&&(n.first_row=JSON.stringify(u.value[0]));const{data:s,error:l,status:y}=await K("/potongan_msts",{method:"get",headers:{Authorization:`Bearer ${F.value}`,Accept:"application/json"},params:n,retry:0});if(D().loading_full=!1,i.value.may_get_data=!0,y.value==="error"){O().trigger(l);return}i.value.page==1?(u.value=s.value.data,w.value&&(w.value.scrollTop=0)):i.value.page>1&&(u.value=[...u.value,...s.value.data]),s.value.data.length==0&&(i.value.is_last_record=!0)},q=async()=>{if(!i.value.may_get_data)return;let s=w.value;if(s.scrollLeft!=i.value.scrollLeft){i.value.scrollLeft=s.scrollLeft;return}i.value.is_last_record||!(Math.round(s.scrollTop)+s.clientHeight>=s.scrollHeight-1)||(i.value.page++,await I())},G=()=>{i.value.page=1,i.value.is_last_record=!1,Y(),I()};ge();const v=a(!1),x=a(0),$=a(0),Z=()=>{x.value=0,v.value=!0,$.value=!1,h.value=!1},{display:A}=R();ke(R());const h=a(!1),Q=()=>{d.value==-1?A({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(x.value=u.value[d.value].id,v.value=!0,$.value=!1,h.value=!1)},P=a(!1),L=a(0),W=()=>{d.value==-1?A({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(L.value=u.value[d.value].id,P.value=!0,h.value=!0)},X=()=>{d.value==-1?A({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(x.value=u.value[d.value].id,v.value=!0,h.value=!0)},B=a(!1);a({}),a(!1);const ee=a("");return we(()=>ee.value,s=>{s.trim().length>0?B.value=!0:B.value=!1},{immediate:!1}),(s,l)=>{const y=ie,U=re,te=ue,oe=ce,se=_e,le=de,H=me,V=pe,ae=fe,ne=ve;return r(),m("div",Me,[p(y,{title:"List Potongan"}),e("div",Te,[e("div",je,[("useUtils"in s?s.useUtils:t(g))().checkPermission("potongan_mst.create")?(r(),m("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:l[0]||(l[0]=o=>Z())},[p(U)])):b("",!0),("useUtils"in s?s.useUtils:t(g))().checkPermissions(["potongan_mst.modify","potongan_trx.create","potongan_trx.modify","potongan_trx.remove"])?(r(),m("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:l[1]||(l[1]=o=>Q())},[p(te)])):b("",!0),t(d)>-1&&("useUtils"in s?s.useUtils:t(g))().checkPermission("potongan_mst.view")?(r(),m("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:l[2]||(l[2]=o=>X())},[p(oe)])):b("",!0),("useUtils"in s?s.useUtils:t(g))().checkPermissions(["potongan_mst.val","potongan_mst.val1","potongan_trx.val","potongan_trx.val1"])?(r(),m("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:l[3]||(l[3]=o=>W())},[p(se)])):b("",!0)]),e("form",Ne,[e("div",Fe,[Ie,T(e("input",{class:"",type:"text","onUpdate:modelValue":l[4]||(l[4]=o=>be(_)?_.value=o:null),name:"search",placeholder:"Keyword"},null,512),[[xe,t(_)]])]),e("div",Le,[Be,T(e("select",{class:"","onUpdate:modelValue":l[5]||(l[5]=o=>t(f).field=o)},Ve,512),[[E,t(f).field]])]),e("div",ze,[Re,T(e("select",{class:"","onUpdate:modelValue":l[6]||(l[6]=o=>t(f).by=o)},Ke,512),[[E,t(f).by]])]),e("div",Je,[e("button",{class:"",type:"submit",name:"button",onClick:l[7]||(l[7]=Ce(o=>G(),["prevent"]))},[p(le,{class:"text-2xl"})])])]),e("div",Ye,[t(u).length==0?(r(),m("div",qe," Maaf Tidak Ada Record ")):(r(),m("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:w,onScroll:q},[e("table",Ge,[Ze,e("tbody",null,[(r(!0),m(De,null,Se(t(u),(o,M)=>{var z;return r(),m("tr",{key:M,onClick:ot=>d.value=M,class:Ae(t(d)==M?"active":"")},[e("td",null,[e("div",We,[o.val?(r(),C(V,{key:1})):(r(),C(H,{key:0}))])]),e("td",null,[e("div",Xe,[o.val1?(r(),C(V,{key:1})):(r(),C(H,{key:0}))])]),e("td",et,c(o.id),1),e("td",null,c((z=o.employee)==null?void 0:z.name),1),e("td",null,c(o.no_pol),1),e("td",null,c(o.kejadian),1),e("td",null,c(t(S)(o.nominal)),1),e("td",null,c(t(S)(o.nominal_cut)),1),e("td",null,c(t(S)(o.remaining_cut)),1),e("td",null,c(o.status),1),e("td",null,c(o.created_at?t(N)(o.created_at).format("DD-MM-Y HH:mm:ss"):""),1),e("td",null,c(o.updated_at?t(N)(o.updated_at).format("DD-MM-Y HH:mm:ss"):""),1)],10,Qe)}),128))])])],544))])]),p(ae,{show:t(v),fnClose:()=>{v.value=!1},id:t(x),p_data:t(u),is_copy:t($),is_view:t(h)},null,8,["show","fnClose","id","p_data","is_copy","is_view"]),p(ne,{show:t(P),fnClose:()=>{P.value=!1},id:t(L),p_data:t(u)},null,8,["show","fnClose","id","p_data"])])}}};export{At as default};