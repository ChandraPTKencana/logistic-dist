import Ze from"./Header.6d5350ed.js";import Xe from"./Plus.459d30c6.js";import et from"./Edit.66aec821.js";import tt from"./Eyes.16a3f24d.js";import at from"./Delete.ee865c11.js";import lt from"./Void.096bab6e.js";import ot from"./Signature.fd7b6ba8.js";import nt from"./PrinterEye.5d636261.js";import rt from"./Line.d9146943.js";import st from"./Check.bc4dedd1.js";import it from"./TableView.6681c6f9.js";import{_ as dt}from"./PopupMini.vue.b8718d33.js";import ut from"./extra_money_trx.4be0249a.js";import _t from"./extra_money_trx_validasi.11537587.js";import{r as u,f as te,g as vt,h as pt,i as j,j as fe,s as mt,x as v,c as h,b as x,a as g,k as ae,v as ct,l as r,m as le,n as w,d as m,E as yt,t as b,w as _,q as ft,y as A,o as d,z as k,A as xe,H as xt,G as kt}from"./entry.01c2230e.js";import{u as f}from"./useUtils.1d2cad7d.js";import{u as C}from"./useMyFetch.f17f669a.js";import{u as bt}from"./useDownload.174f4da2.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.5d2da181.js";import"./Adjust.4c3add70.js";import"./TableHeaderEye.9495b4c3.js";import"./Times.f39974ac.js";import"./ClearAll.131fa561.js";import"./client-only.f38a5c65.js";import"./ClearEach.cd26e8af.js";import"./CaretLeftDoubleBold.f078679d.js";import"./CaretLeftBold.d0bf0290.js";import"./CaretRightBold.5433a4df.js";import"./CaretRightDoubleBold.8ed0321a.js";import"./Exclamation.7aae5984.js";import"./HeaderPopup.vue.eec85662.js";import"./WidthMiniList.vue.982550e9.js";import"./WidthMiniPart.vue.85362d55.js";import"./AttachmentSingle.ff37fd41.js";import"./PDFJsView.2e280467.js";import"./CaretTop.27dd809d.js";import"./CaretDown.2dbe0339.js";const gt={class:"w-full h-full flex flex-col"},ht={class:"w-full flex grow flex-col overflow-auto h-0"},wt={class:"w-full flex justify-between flex-wrap"},Dt={class:"grow flex"},Pt={class:"m-1"},qt=xt('<option value="undone">Undone</option><option value="done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),Ot=[qt],$t={class:"flex"},At=g("span",{class:"text-xs"},"Mode",-1),Ct={class:"grow mb-5"},Tt=g("b",null,"tidak dapat dibatalkan lagi",-1),jt={class:"grow mb-5"},Mt=g("b",null,"tidak dapat dibatalkan lagi",-1),ka={__name:"trx",async setup(St){let R,oe;const{$moment:ne}=kt(),{pointFormat:G}=f(),I=t=>t.deleted==1?"!bg-red-400":t.pvr_id>0&&t.req_deleted==1?"!bg-yellow-300":t.pv_id>0?"!bg-blue-300":"",J=t=>(t.map(e=>{e.class_h=I(e)}),t),P=u("undone");te(()=>P.value,t=>{me.value.map(e=>{let p=["deleted_by_username","deleted_at","deleted_reason","req_deleted_by_username","req_deleted_at","req_deleted_reason"].indexOf(e.key)>-1;return["all","deleted","req_deleted"].indexOf(t)>-1?p&&(e.tbl_show=1):p&&(e.tbl_show=0),e}),de()},{immediate:!1});const y={};y._TimeZoneOffset=new Date().getTimezoneOffset(),y.sort="tanggal:desc";const re=u({}),z=u({from:"",to:""}),q=vt("token"),{data:ke}=([R,oe]=pt(async()=>ft(async()=>{v().loading_full=!0;let t=[];const[e,p]=await Promise.all([C("/extra_money_trxs",{method:"get",headers:{Authorization:`Bearer ${q.value}`,Accept:"application/json"},params:{filter_status:P},retry:0})]);return e.status.value!=="error"&&(t=J(e.data.value.data)),e.status.value==="error"?(A().trigger(e.error),{extra_money_trxs:t}):(v().loading_full=!1,{extra_money_trxs:t})},"$M1coKGGJnq")),R=await R,oe(),R),o=u(ke.value.extra_money_trxs||[]),se=u([]),M=u(!1),be=async()=>{v().loading_full=!0;const{data:t,error:e,status:p}=await C("/extra_money_trx_load_sqlsrv",{method:"get",headers:{Authorization:`Bearer ${q.value}`,Accept:"application/json"},params:{online_status:M.value},retry:0});if(v().loading_full=!1,p.value==="error"){A().trigger(e);return}se.value=t.value.list_cost_center},K=u({field:"tanggal",by:"desc"}),l=u(-1),i=j(()=>o.value[l.value]),O=u({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),ge=()=>{y.like="";let t=JSON.parse(JSON.stringify(v()._tv.global_keyword));t!=""&&(y.like=`id:%${t}%,tanggal:%${t}%,no_pol:%${t}%,employee_name:%${t}%,employee_rek_no:%${t}%,employee_rek_name:%${t}%,kernet:%${t}%,extra_money_xto:%${t}%,extra_money_jenis:%${t}%,extra_money_desc:%${t}%,pv_no:%${t}%,pvr_no:%${t}%,extra_money_transition_target:%${t}%,cost_center_code:%${t}%`),y.sort="",K.value.field&&(y.sort=K.value.field+":"+K.value.by),y.date_from=z.value.from?ne(z.value.from).format("YYYY-MM-DD"):"",y.date_to=z.value.to?ne(z.value.to).format("YYYY-MM-DD"):"",y.filter_model=JSON.stringify(v()._tv.filter_model)},ie=async()=>{v().loading_full=!0,re.value={},O.value.may_get_data=!1,y.page=O.value.page,y.page==1&&(o.value=[]),y.first_row&&delete y.first_row,y.page>1&&(y.first_row=JSON.stringify(o.value[0])),y.filter_status=P.value;const{data:t,error:e,status:p}=await C("/extra_money_trxs",{method:"get",headers:{Authorization:`Bearer ${q.value}`,Accept:"application/json"},params:y,retry:0});if(v().loading_full=!1,O.value.may_get_data=!0,p.value==="error"){A().trigger(e,re);return}O.value.page==1?o.value=J(t.value.data):O.value.page>1&&(o.value=[...o.value,...J(t.value.data)]),t.value.data.length==0&&(O.value.is_last_record=!0),v()._tv.filter_box=!1},de=()=>{l.value=-1,O.value.page=1,O.value.is_last_record=!1,ge(),ie()},Y=u(!1),Q=u(0),he=()=>{Q.value=0,Y.value=!0},{display:$}=fe();mt(fe());const we=()=>{l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(Q.value=o.value[l.value].id,Y.value=!0)},L=u(!1),H=u(0),W=u(!1),De=()=>{l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(H.value=o.value[l.value].id,L.value=!0,W.value=!1)},Pe=()=>{l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(H.value=o.value[l.value].id,L.value=!0,W.value=!0)},Z=u(!1),ue=u({}),B=u(!1),N=u(""),qe=async()=>{B.value&&(B.value=!1)},Oe=()=>{l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(N.value="",ue.value={id:o.value[l.value].id,"no pol":o.value[l.value].no_pol,tujuan:o.value[l.value].extra_money.xto},B.value=!0)};te(()=>N.value,t=>{t.trim().length>0?Z.value=!0:Z.value=!1},{immediate:!1});const $e=async()=>{v().loading_full=!0;const t=new FormData;t.append("id",o.value[l.value].id),t.append("deleted_reason",N.value),t.append("_method","DELETE");const{data:e,error:p,status:D}=await C("/extra_money_trx",{method:"post",headers:{Authorization:`Bearer ${q.value}`,Accept:"application/json"},body:t,retry:0});if(v().loading_full=!1,D.value==="error"){A().trigger(p);return}let n={...o.value[l.value]};n.deleted=e.value.deleted,n.deleted_user=e.value.deleted_user,n.deleted_at=e.value.deleted_at,n.deleted_by=e.value.deleted_by,n.deleted_reason=e.value.deleted_reason,n.class_h=I(n),P.value!="all"?o.value.splice(l.value,1):o.value.splice(l.value,1,{...n}),l.value=-1,B.value=!1},X=u(!1),_e=u({}),E=u(!1),V=u(""),Ae=async()=>{E.value&&(E.value=!1)},Ce=()=>{l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(V.value="",_e.value={id:o.value[l.value].id,"no pol":o.value[l.value].no_pol,tujuan:o.value[l.value].extra_money.xto},E.value=!0)},ve=u({}),F=u(!1),Te=u(""),je=async()=>{F.value&&(F.value=!1)},Me=()=>{var t;l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(Te.value="",ve.value={id:o.value[l.value].id,"no pol":o.value[l.value].no_pol,tujuan:o.value[l.value].extra_money.xto,permintaan:(t=o.value[l.value].approve_void_by)==null?void 0:t.username,alasan:o.value[l.value].approve_void_reason},F.value=!0)},Se=async()=>{v().loading_full=!0;const t=new FormData;t.append("id",o.value[l.value].id),t.append("_method","DELETE");const{data:e,error:p,status:D}=await C("/extra_money_trx_approve_void",{method:"post",headers:{Authorization:`Bearer ${q.value}`,Accept:"application/json"},body:t,retry:0});if(v().loading_full=!1,D.value==="error"){A().trigger(p);return}let n={...o.value[l.value]};n.deleted=e.value.deleted,n.deleted_user=e.value.deleted_user,n.deleted_at=e.value.deleted_at,n.deleted_by=e.value.deleted_by,n.deleted_reason=e.value.deleted_reason,n.class_h=I(n),P.value!="all"?o.value.splice(l.value,1):o.value.splice(l.value,1,{...n}),l.value=-1,F.value=!1};te(()=>V.value,t=>{t.trim().length>0?X.value=!0:X.value=!1},{immediate:!1});const Ue=async()=>{v().loading_full=!0;const t=new FormData;t.append("id",o.value[l.value].id),t.append("req_deleted_reason",V.value),t.append("_method","DELETE");const{data:e,error:p,status:D}=await C("/extra_money_trx_req_delete",{method:"post",headers:{Authorization:`Bearer ${q.value}`,Accept:"application/json"},body:t,retry:0});if(v().loading_full=!1,D.value==="error"){A().trigger(p);return}let n={...o.value[l.value]};n.req_deleted=e.value.req_deleted,n.req_deleted_user=e.value.req_deleted_user,n.req_deleted_by=e.value.req_deleted_by,n.req_deleted_at=e.value.req_deleted_at,n.req_deleted_reason=e.value.req_deleted_reason,n.class_h=I(n),P.value!="all"?o.value.splice(l.value,1):o.value.splice(l.value,1,{...n}),l.value=-1,E.value=!1},{printHtml:pe}=bt(),Ne=async()=>{if(l.value==-1){$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"});return}v().loading_full=!0;const{data:t,error:e,status:p}=await C("/extra_money_trx_preview_file",{method:"get",headers:{Authorization:`Bearer ${q.value}`,Accept:"application/json"},params:{id:o.value[l.value].id},retry:0});if(v().loading_full=!1,p.value==="error"){A().trigger(e);return}pe(t.value.html,318)},Ve=async()=>{if(l.value==-1){$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"});return}v().loading_full=!0;const{data:t,error:e,status:p}=await C("/extra_money_trx_preview_file_bt",{method:"get",headers:{Authorization:`Bearer ${q.value}`,Accept:"application/json"},params:{id:o.value[l.value].id},retry:0});if(v().loading_full=!1,p.value==="error"){A().trigger(e);return}pe(t.value.html,318)},Be=async()=>{v().loading_full=!0;const t=new FormData;t.append("online_status",M.value);const{data:e,error:p,status:D}=await C("/extra_money_trx_do_gen_pvr",{method:"post",headers:{Authorization:`Bearer ${q.value}`,Accept:"application/json"},body:t,retry:0});if(v().loading_full=!1,D.value==="error"){A().trigger(p);return}e.value.forEach(n=>{let T=o.value.map(c=>c.id).indexOf(n.id);if(T!==-1){let c=o.value[T];c.pvr_id=n.pvr_id,c.pvr_no=n.pvr_no,c.pvr_total=n.pvr_total,c.pvr_complete=n.pvr_complete,c.updated_at=n.updated_at,o.value.splice(T,1,{...c})}}),$({show:!0,status:"Success",message:"Generate Or Update PVR Done"})},Ee=async()=>{v().loading_full=!0;const t=new FormData;t.append("online_status",M.value);const{data:e,error:p,status:D}=await C("/extra_money_trx_do_gen_pv",{method:"post",headers:{Authorization:`Bearer ${q.value}`,Accept:"application/json"},body:t,retry:0});if(v().loading_full=!1,D.value==="error"){A().trigger(p);return}e.value.forEach(n=>{let T=o.value.map(c=>c.id).indexOf(n.id);if(T!==-1){let c=o.value[T];c.pv_id=n.pv_id,c.pv_no=n.pv_no,c.pv_total=n.pv_total,c.pv_datetime=n.pv_datetime,c.pv_complete=n.pv_complete,c.updated_at=n.updated_at,o.value.splice(T,1,{...c})}}),$({show:!0,status:"Success",message:"Generate Or Update PV Done"})},me=u([{key:"no",label:"No",isai:!0},{key:"val",label:"APP",childs:[{key:"val1",label:"Kasir",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"Mandor",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val3",label:"KTU/W",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val4",label:"Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val5",label:"SPV Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val6",label:"MGR Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"tanggal",label:"Tanggal",type:"datetime",dateformat:"DD-MM-Y",filter_on:1},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"employee_name",label:"Nama Pekerja",filter_on:1,type:"string"},{key:"employee_rek_no",label:"No rek Pekerja",type:"string"},{key:"employee_rek_name",label:"Nama Rek Pekerja",type:"string"},{key:"note",label:"Note",filter_on:1,type:"string"},{key:"payment_method_name",label:"Payment Method Name",type:"string"},{key:"extra_money_xto",label:"Tujuan",filter_on:1,type:"string"},{key:"extra_money_jenis",label:"Jenis",filter_on:1,type:"string"},{key:"extra_money_desc",label:"Desc",filter_on:1,type:"string"},{key:"extra_money_nominal",label:"Nominal",class:" justify-end",type:"number"},{key:"extra_money_qty",label:"Qty",class:" justify-end",type:"number"},{key:"extra_money_total",label:"Total",class:" justify-end",type:"number"},{key:"extra_money_transition_target",label:"Pengalihan",filter_on:1,type:"select",select_item:v().list_pabrik},{key:"extra_money_transition_type",label:"Tipe Pengalihan",type:"select",select_item:[{k:"From",v:"Dari"},{k:"To",v:"Ke"}]},{key:"cost_center",label:"Cost Center",childs:[{key:"cost_center_code",label:"Code",type:"string",class:" justify-start",filter_on:1},{key:"cost_center_desc",label:"Desc",filter_on:1,type:"string"}]},{key:"pvr",label:"PVR",childs:[{key:"pvr_no",label:"No",filter_on:1,type:"string"},{key:"pvr_total",label:"Total",filter_on:1,type:"number"},{key:"pvr_complete",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"pv",label:"PV",childs:[{key:"pv_datetime",label:"Date",type:"date",dateformat:"DD-MM-Y",filter_on:1},{key:"pv_no",label:"No",filter_on:1,type:"string"},{key:"pv_total",label:"Total",filter_on:1,type:"number"},{key:"pv_complete",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1,tbl_show:0},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1,tbl_show:0},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0,type:"string",filter_on:1}]),Fe=j(()=>["undone","all"].indexOf(P.value)>-1&&f().checkPermission("extra_money_trx.create")),Re=j(()=>l.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&[void 0,0].indexOf(i.value.val6)>-1&&[void 0,""].indexOf(i.value.pvr_id)>-1&&f().checkPermission("extra_money_trx.modify")),Ie=j(()=>l.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&([void 0,""].indexOf(i.value.pvr_id)>-1&&(f().checkPermission("extra_money_trx.val1")&&[void 0,0].indexOf(i.value.val1)>-1||f().checkPermission("extra_money_trx.val2")&&[void 0,0].indexOf(i.value.val2)>-1)||i.value.pvr_id>-1&&(f().checkPermission("extra_money_trx.val3")&&[void 0,0].indexOf(i.value.val3)>-1||f().checkPermission("extra_money_trx.val4")&&[void 0,0].indexOf(i.value.val4)>-1||f().checkPermission("extra_money_trx.val5")&&[void 0,0].indexOf(i.value.val5)>-1||f().checkPermission("extra_money_trx.val6")&&[void 0,0].indexOf(i.value.val6)>-1))),ze=j(()=>f().checkPermission("extra_money_trx.remove")&&l.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&[void 0,""].indexOf(i.value.pvr_id)>-1),Ye=j(()=>f().checkPermission("extra_money_trx.request_remove")&&l.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&i.value.pvr_id!=""),Le=j(()=>f().checkPermission("extra_money_trx.approve_request_remove")&&l.value>-1&&i.value.deleted==0&&i.value.req_deleted==1&&i.value.val2==0),He=j(()=>f().checkPermission("extra_money_trx.preview_file")&&l.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&i.value.val1==1),Ge=j(()=>l.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&i.value.payment_method_id==2&&i.value.received_payment==1&&i.value.duitku_employee_disburseId!=""&&f().checkPermission("extra_money_trx.preview_file"));return(t,e)=>{const p=Ze,D=Xe,n=et,T=tt,c=at,ce=lt,Je=ot,ye=nt,S=rt,U=st,Ke=it,ee=dt,Qe=ut,We=_t;return d(),h("div",gt,[x(p,{title:"List Transaction"}),g("div",ht,[g("div",wt,[g("div",Dt,[g("div",Pt,[ae(g("select",{class:"","onUpdate:modelValue":e[0]||(e[0]=a=>le(P)?P.value=a:null)},Ot,512),[[ct,r(P)]])]),r(Fe)?(d(),h("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[1]||(e[1]=a=>he())},[x(D)])):w("",!0),r(Re)?(d(),h("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[2]||(e[2]=a=>we())},[x(n)])):w("",!0),r(l)>-1?(d(),h("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[3]||(e[3]=a=>Pe())},[x(T)])):w("",!0),r(ze)?(d(),h("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[4]||(e[4]=a=>Oe())},[x(c)])):w("",!0),r(Ye)?(d(),h("button",{key:4,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[5]||(e[5]=a=>Ce())},[x(ce)])):w("",!0),r(Le)?(d(),h("button",{key:5,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[6]||(e[6]=a=>Me())},[x(ce)])):w("",!0),r(Ie)?(d(),h("button",{key:6,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[7]||(e[7]=a=>De())},[x(Je)])):w("",!0),r(He)?(d(),h("button",{key:7,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[8]||(e[8]=a=>Ne())},[x(ye)])):w("",!0),r(Ge)?(d(),h("button",{key:8,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[9]||(e[9]=a=>Ve())},[x(ye)])):w("",!0)]),g("div",$t,[("useUtils"in t?t.useUtils:r(f))().checkPermission("extra_money_trx.generate_pvr")?(d(),h("button",{key:0,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:e[10]||(e[10]=a=>Be())}," Gen/Update PVR ")):w("",!0),("useUtils"in t?t.useUtils:r(f))().checkPermission("extra_money_trx.generate_pv")?(d(),h("button",{key:1,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:e[11]||(e[11]=a=>Ee())}," Gen/Update PV ")):w("",!0),("useUtils"in t?t.useUtils:r(f))().checkPermissions(["extra_money_trx.generate_pvr","extra_money_trx.generate_pv","extra_money_trx.get_pv"])?(d(),h("div",{key:2,class:"m-1 card-border cursor-pointer",onClick:e[12]||(e[12]=a=>M.value=!r(M))},[At,m(" : "),g("span",{class:yt(["font-bold",r(M)?"text-green-600":"text-red-600"])},b(r(M)?"ONLINE":"OFFLINE"),3)])):w("",!0)])]),x(Ke,{thead:r(me),selected:r(l),onSetSelected:e[13]||(e[13]=a=>l.value=a),tbody:r(o),fnCallData:ie,scrolling:r(O),onSetScrollingPage:e[14]||(e[14]=a=>r(O).page=a),onDoFilter:e[15]||(e[15]=a=>de())},{val1:_(({item:a})=>[a.val1?(d(),k(U,{key:1})):(d(),k(S,{key:0}))]),val2:_(({item:a})=>[a.val2?(d(),k(U,{key:1})):(d(),k(S,{key:0}))]),val3:_(({item:a})=>[a.val3?(d(),k(U,{key:1})):(d(),k(S,{key:0}))]),val4:_(({item:a})=>[a.val4?(d(),k(U,{key:1})):(d(),k(S,{key:0}))]),val5:_(({item:a})=>[a.val5?(d(),k(U,{key:1})):(d(),k(S,{key:0}))]),val6:_(({item:a})=>[a.val6?(d(),k(U,{key:1})):(d(),k(S,{key:0}))]),payment_method_name:_(({item:a})=>{var s;return[m(b((s=a.payment_method)==null?void 0:s.name),1)]}),employee_name:_(({item:a})=>{var s;return[m(b((s=a.employee)==null?void 0:s.name),1)]}),employee_rek_no:_(({item:a})=>{var s;return[m(b((s=a.employee)==null?void 0:s.rek_no),1)]}),employee_rek_name:_(({item:a})=>{var s;return[m(b((s=a.employee)==null?void 0:s.rek_name),1)]}),extra_money_transition_target:_(({item:a})=>{var s;return[m(b((s=a.extra_money)==null?void 0:s.transition_target),1)]}),extra_money_transition_type:_(({item:a})=>{var s;return[m(b((s=a.extra_money)==null?void 0:s.transition_type),1)]}),extra_money_xto:_(({item:a})=>{var s;return[m(b((s=a.extra_money)==null?void 0:s.xto),1)]}),extra_money_jenis:_(({item:a})=>{var s;return[m(b((s=a.extra_money)==null?void 0:s.jenis),1)]}),extra_money_desc:_(({item:a})=>{var s;return[m(b((s=a.extra_money)==null?void 0:s.description),1)]}),extra_money_nominal:_(({item:a})=>{var s;return[m(" Rp. "+b(r(G)(((s=a.extra_money)==null?void 0:s.nominal)||0)),1)]}),extra_money_qty:_(({item:a})=>{var s;return[m(b(r(G)(((s=a.extra_money)==null?void 0:s.qty)||0)),1)]}),extra_money_total:_(({item:a})=>{var s;return[m(" Rp. "+b(r(G)(((s=a.extra_money)==null?void 0:s.total)||0)),1)]}),pvr_complete:_(({item:a})=>[a.pvr_complete?(d(),k(U,{key:1})):(d(),k(S,{key:0}))]),pv_complete:_(({item:a})=>[a.pv_complete?(d(),k(U,{key:1})):(d(),k(S,{key:0}))]),deleted_by_username:_(({item:a})=>{var s;return[m(b((s=a.deleted_by)==null?void 0:s.username),1)]}),req_deleted_by_username:_(({item:a})=>{var s;return[m(b((s=a.req_deleted_by)==null?void 0:s.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])]),x(ee,{type:"delete",show:r(B),data:r(ue),fnClose:qe,fnConfirm:$e,enabledOk:r(Z)},{footer:_(()=>[m(" Masukkan Alasan Penghapusan: "),g("div",Ct,[ae(g("textarea",{"onUpdate:modelValue":e[16]||(e[16]=a=>le(N)?N.value=a:null)},null,512),[[xe,r(N)]])])]),_:1},8,["show","data","enabledOk"]),x(ee,{type:"custome",show:r(E),data:r(_e),fnClose:Ae,fnConfirm:Ue,enabledOk:r(X)},{words:_(()=>[m(" Data akan diproses dan "),Tt,m(", yakin untuk melanjutkan ? ")]),footer:_(()=>[m(" Masukkan Alasan Permintaan Penghapusan: "),g("div",jt,[ae(g("textarea",{"onUpdate:modelValue":e[17]||(e[17]=a=>le(V)?V.value=a:null)},null,512),[[xe,r(V)]])])]),_:1},8,["show","data","enabledOk"]),x(ee,{type:"custome",show:r(F),data:r(ve),fnClose:je,fnConfirm:Se},{words:_(()=>[m(" Data akan diproses dan "),Mt,m(", apakah Anda menyetujui permintaan penghapusan data berikut? ")]),_:1},8,["show","data"]),x(Qe,{show:r(Y),fnClose:()=>{Y.value=!1},fnLoadDBData:be,id:r(Q),p_data:r(o),list_cost_center:r(se),online_status:r(M)},null,8,["show","fnClose","id","p_data","list_cost_center","online_status"]),x(We,{show:r(L),fnClose:()=>{L.value=!1},id:r(H),p_data:r(o),is_view:r(W),onSetID:e[18]||(e[18]=a=>H.value=a),onSetIndex:e[19]||(e[19]=a=>l.value=a)},null,8,["show","fnClose","id","p_data","is_view"])])}}};export{ka as default};
