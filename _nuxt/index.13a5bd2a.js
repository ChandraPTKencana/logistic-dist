import he from"./Header.ab0edfaf.js";import we from"./Plus.b7702c80.js";import xe from"./Edit.b0cfe3e9.js";import De from"./Eyes.c3b620d9.js";import Se from"./Delete.b058ee23.js";import Ae from"./Signature.573e475d.js";import Ce from"./Line.0ffb5f18.js";import Pe from"./Check.4502dfaf.js";import Oe from"./TypeIcon.611656ee.js";import $e from"./TableView.57253a91.js";import{_ as Te}from"./PopupMini.vue.ff6ced29.js";import Me from"./salary_bonus.bdb71096.js";import Ne from"./salary_bonus_validasi.0bc48efc.js";import{r as n,f as G,g as Be,h as Fe,i as O,j as K,s as Ie,c as h,b as d,a as _,k as Z,v as Ve,l,m as Q,n as $,w as m,q as Ue,x as v,y as z,o as u,z as w,d as x,t as D,A as je}from"./entry.fa6a43a6.js";import{u as k}from"./useUtils.e43caca5.js";import{u as J}from"./useMyFetch.e44aed2a.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./DocJPEG.6c84526c.js";import"./DocJPG.8988d768.js";import"./DocPNG.e8025712.js";import"./DocPDF.f61e5856.js";import"./Search.3716b011.js";import"./Adjust.f0ede0cf.js";import"./TableHeaderEye.57c43c0c.js";import"./Times.abdf3177.js";import"./ClearAll.25445a36.js";import"./client-only.da14e2b9.js";import"./ClearEach.04cba3a6.js";import"./CaretLeftDoubleBold.64c0a9d8.js";import"./CaretLeftBold.c8638abb.js";import"./CaretRightBold.9933bec0.js";import"./CaretRightDoubleBold.bae7809b.js";import"./Exclamation.48001766.js";import"./HeaderPopup.vue.84d65bd6.js";import"./WidthMiniList.vue.b736552e.js";import"./WidthMiniPart.vue.beda00e2.js";import"./InputPointFormat.vue.2a2fb126.js";import"./AttachmentSingle.5bcb407d.js";import"./PDFJsView.30babf3e.js";const Ee={class:"w-full h-full flex flex-col"},He={class:"w-full flex grow flex-col overflow-auto h-0"},ze={class:"w-full flex justify-between flex-wrap"},Je={class:"grow flex"},Le={class:"m-1"},Re=_("option",{value:"undone"},"Undone",-1),Ye=_("option",{value:"done"},"Done",-1),qe=_("option",{value:"deleted"},"Trash",-1),Ge=_("option",{value:"all"},"All",-1),Ke=[Re,Ye,qe,Ge],Ze={style:{"min-width":"350px","text-wrap":"wrap"}},Qe={class:"grow mb-5"},Ut={__name:"index",async setup(We){let T,L;const W=t=>t.deleted==1?"!bg-red-400":t.val1>0&&t.val2>0&&t.val3>0&&t.salary_paid_id>0?"!bg-blue-300":"",c=n("undone");G(()=>c.value,t=>{Y()},{immediate:!1});const r={};r._TimeZoneOffset=new Date().getTimezoneOffset(),r.sort="created_at:desc";const F=Be("token"),{data:X}=([T,L]=Fe(async()=>Ue(async()=>{let t=[];v().loading_full=!0;const{data:a,error:b,status:P}=await J("/salary_bonuses",{method:"get",headers:{Authorization:`Bearer ${F.value}`,Accept:"application/json"},params:{filter_status:c},retry:0});return v().loading_full=!1,P.value==="error"?(z().trigger(b),{salary_bonuses:t}):(t=a.value.data,{salary_bonuses:t})},"$tya7A7egnO")),T=await T,L(),T),s=n(X.value.salary_bonuses);n("");const I=n({field:"created_at",by:"desc"}),o=n(-1),y=O(()=>s.value[o.value]),p=n({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),ee=()=>{r.like="";let t=JSON.parse(JSON.stringify(v()._tv.global_keyword));t!=""&&(r.like=`id:%${t}%,employee_name:%${t}%`),r.sort="",I.value.field&&(r.sort=I.value.field+":"+I.value.by),r.filter_model=JSON.stringify(v()._tv.filter_model)},R=async()=>{v().loading_full=!0,p.value.may_get_data=!1,r.page=p.value.page,r.page==1&&(s.value=[]),r.first_row&&delete r.first_row,r.page>1&&(r.first_row=JSON.stringify(s.value[0])),r.filter_status=c.value;const{data:t,error:a,status:b}=await J("/salary_bonuses",{method:"get",headers:{Authorization:`Bearer ${F.value}`,Accept:"application/json"},params:r,retry:0});if(v().loading_full=!1,p.value.may_get_data=!0,b.value==="error"){z().trigger(a);return}p.value.page==1?s.value=t.value.data:p.value.page>1&&(s.value=[...s.value,...t.value.data]),t.value.data.length==0&&(p.value.is_last_record=!0),v()._tv.filter_box=!1},Y=()=>{o.value=-1,o.value=-1,p.value.page=1,p.value.is_last_record=!1,ee(),R()},M=n(!1),V=n(0),S=n(0),A=n(!1),te=()=>{V.value=0,A.value=!1,S.value=!1,M.value=!0},{display:N}=K();Ie(K());const ae=()=>{o.value==-1?N({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(V.value=s.value[o.value].id,A.value=!1,S.value=!1,M.value=!0)},B=n(!1),U=n(0),le=()=>{o.value==-1?N({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(U.value=s.value[o.value].id,A.value=!1,S.value=!1,B.value=!0)},oe=()=>{o.value==-1?N({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(U.value=s.value[o.value].id,A.value=!0,S.value=!1,B.value=!0)},j=n(!1),q=n({}),C=n(!1),g=n(""),se=async()=>{C.value&&(C.value=!1)},ne=()=>{o.value==-1?N({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(g.value="",q.value={id:s.value[o.value].id},C.value=!0)};G(()=>g.value,t=>{t.trim().length>0?j.value=!0:j.value=!1},{immediate:!1});const re=async()=>{v().loading_full=!0;const t=new FormData;t.append("id",s.value[o.value].id),t.append("deleted_reason",g.value),t.append("_method","DELETE");const{data:a,error:b,status:P}=await J("/salary_bonus",{method:"post",headers:{Authorization:`Bearer ${F.value}`,Accept:"application/json"},body:t,retry:0});if(v().loading_full=!1,P.value==="error"){z().trigger(b);return}let f={...s.value[o.value]};f.deleted=a.value.deleted,f.deleted_user=a.value.deleted_user,f.deleted_at=a.value.deleted_at,f.deleted_by=a.value.deleted_by,f.deleted_reason=a.value.deleted_reason,c.value!="all"?s.value.splice(o.value,1):s.value.splice(o.value,1,{...f}),o.value=-1,C.value=!1},ie=n([{key:"no",label:"No",isai:!0},{key:"val",label:"APP",childs:[{key:"val1",label:"Staff",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"SPV",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val3",label:"MGR",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"tanggal",label:"Tanggal",type:"date",dateformat:"DD-MM-Y",filter_on:1,sort:{priority:1,type:"desc"}},{key:"type",label:"Tipe",filter_on:1,type:"string"},{key:"employee_name",label:"Nama",freeze:1,filter_on:1,type:"string"},{key:"employee_ktp_no",label:"No KTP",filter_on:1,type:"string"},{key:"employee_sim_no",label:"No SIM",filter_on:1,type:"string"},{key:"nominal",label:"Nominal",class:" justify-end",type:"number"},{key:"note",label:"Note",filter_on:1,type:"string"},{key:"attachment_1_type",label:"File",filter_on:1,type:"string"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:1},{key:"deleted_at",label:"Deleted At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1,tbl_show:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:1,type:"string",filter_on:1}]),ue=O(()=>["undone","all"].indexOf(c.value)>-1&&k().checkPermission("salary_bonus.create")),_e=O(()=>o.value>-1&&[void 0,0].indexOf(y.value.deleted)>-1&&(k().checkPermission("salary_bonus.val")&&[void 0,0].indexOf(y.value.val)>-1||k().checkPermission("salary_bonus.val1")&&[void 0,0].indexOf(y.value.val1)>-1)&&k().checkPermissions(["salary_bonus.modify"])),de=O(()=>o.value>-1&&[void 0,0].indexOf(y.value.deleted)>-1&&(k().checkPermission("salary_bonus.val")&&[void 0,0].indexOf(y.value.val)>-1||k().checkPermission("salary_bonus.val1")&&[void 0,0].indexOf(y.value.val1)>-1)),me=O(()=>o.value>-1&&k().checkPermission("salary_bonus.remove")&&[void 0,0].indexOf(y.value.deleted)>-1);return(t,a)=>{const b=he,P=we,f=xe,pe=De,ve=Se,ce=Ae,E=Ce,H=Pe,fe=Oe,ye=$e,be=Te,ke=Me,ge=Ne;return u(),h("div",Ee,[d(b,{title:"List Salary Additional"}),_("div",He,[_("div",ze,[_("div",Je,[_("div",Le,[Z(_("select",{class:"","onUpdate:modelValue":a[0]||(a[0]=e=>Q(c)?c.value=e:null)},Ke,512),[[Ve,l(c)]])]),l(ue)?(u(),h("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[1]||(a[1]=e=>te())},[d(P)])):$("",!0),l(_e)?(u(),h("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[2]||(a[2]=e=>ae())},[d(f)])):$("",!0),l(o)>-1?(u(),h("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[3]||(a[3]=e=>oe())},[d(pe)])):$("",!0),l(me)?(u(),h("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[4]||(a[4]=e=>ne())},[d(ve)])):$("",!0),l(de)?(u(),h("button",{key:4,type:"button",name:"button",class:"m-1 text-2xl",onClick:a[5]||(a[5]=e=>le())},[d(ce)])):$("",!0)])]),d(ye,{thead:l(ie),selected:l(o),onSetSelected:a[6]||(a[6]=e=>o.value=e),tbody:l(s),fnCallData:R,scrolling:l(p),onSetScrollingPage:a[7]||(a[7]=e=>l(p).page=e),onDoFilter:a[8]||(a[8]=e=>Y()),rowBgColor:W},{val1:m(({item:e})=>[e.val1?(u(),w(H,{key:1})):(u(),w(E,{key:0}))]),val2:m(({item:e})=>[e.val2?(u(),w(H,{key:1})):(u(),w(E,{key:0}))]),val3:m(({item:e})=>[e.val3?(u(),w(H,{key:1})):(u(),w(E,{key:0}))]),employee_name:m(({item:e})=>{var i;return[x(D((i=e.employee)==null?void 0:i.name),1)]}),employee_ktp_no:m(({item:e})=>{var i;return[x(D((i=e.employee)==null?void 0:i.ktp_no),1)]}),employee_sim_no:m(({item:e})=>{var i;return[x(D((i=e.employee)==null?void 0:i.sim_no),1)]}),note:m(({item:e})=>[_("div",Ze,D(e.note),1)]),attachment_1_type:m(({item:e})=>[d(fe,{value:e.attachment_1_type},null,8,["value"])]),deleted_by_username:m(({item:e})=>{var i;return[x(D((i=e.deleted_by)==null?void 0:i.username),1)]}),req_deleted_by_username:m(({item:e})=>{var i;return[x(D((i=e.req_deleted_by)==null?void 0:i.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])]),d(be,{type:"delete",show:l(C),data:l(q),fnClose:se,fnConfirm:re,enabledOk:l(j)},{footer:m(()=>[x(" Masukkan Alasan Penghapusan: "),_("div",Qe,[Z(_("textarea",{"onUpdate:modelValue":a[9]||(a[9]=e=>Q(g)?g.value=e:null)},null,512),[[je,l(g)]])])]),_:1},8,["show","data","enabledOk"]),d(ke,{show:l(M),fnClose:()=>{M.value=!1},id:l(V),p_data:l(s),is_copy:l(S)},null,8,["show","fnClose","id","p_data","is_copy"]),d(ge,{show:l(B),fnClose:()=>{B.value=!1},id:l(U),p_data:l(s),is_view:l(A)},null,8,["show","fnClose","id","p_data","is_view"])])}}};export{Ut as default};