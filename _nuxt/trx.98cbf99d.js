import Qe from"./Header.c69cba41.js";import Ze from"./Plus.6b5294ec.js";import We from"./Edit.c4fb02c2.js";import Xe from"./Eyes.d7049b05.js";import et from"./Delete.760d8dfb.js";import tt from"./Void.5d9d564e.js";import at from"./Signature.a086d32a.js";import lt from"./PrinterEye.2e399bda.js";import ot from"./Line.fef29273.js";import nt from"./Check.e19ff855.js";import rt from"./TableView.d5b02995.js";import{_ as st}from"./PopupMini.vue.8b296581.js";import it from"./extra_money_trx.b42c5f6f.js";import dt from"./extra_money_trx_validasi.3e812dc3.js";import{r as d,j as te,f as ut,g as _t,G as M,i as ce,s as vt,A as v,c as h,b as x,a as g,m as ae,q as pt,k as r,n as le,l as D,d as m,C as mt,t as k,w as _,z as ct,B as C,o as u,D as b,v as fe,H as ft,E as yt}from"./entry.0b383aed.js";import{u as y}from"./useUtils.65910895.js";import{u as T}from"./useMyFetch.0d0fc1d4.js";import{u as xt}from"./useDownload.174f4da2.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.3dd60951.js";import"./Adjust.58c81dba.js";import"./TableHeaderEye.7983b8d0.js";import"./Times.97131b0c.js";import"./ClearAll.60e4cead.js";import"./client-only.6ba4fae0.js";import"./ClearEach.c9d5980d.js";import"./CaretLeftDoubleBold.29850f13.js";import"./CaretLeftBold.a10d3c45.js";import"./CaretRightBold.7a46a00e.js";import"./CaretRightDoubleBold.673645f9.js";import"./Exclamation.322adc76.js";import"./HeaderPopup.vue.352aaf45.js";import"./WidthMiniList.vue.0b6008a4.js";import"./WidthMiniPart.vue.c2c47043.js";const kt={class:"w-full h-full flex flex-col"},bt={class:"w-full flex grow flex-col overflow-auto h-0"},gt={class:"w-full flex justify-between flex-wrap"},ht={class:"grow flex"},wt={class:"m-1"},Dt=ft('<option value="undone">Undone</option><option value="done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),qt=[Dt],Pt={class:"flex"},At=g("span",{class:"text-xs"},"Mode",-1),$t={class:"grow mb-5"},Ot=g("b",null,"tidak dapat dibatalkan lagi",-1),Ct={class:"grow mb-5"},Tt=g("b",null,"tidak dapat dibatalkan lagi",-1),pa={__name:"trx",async setup(jt){let R,oe;const{$moment:ne}=yt(),{pointFormat:L}=y(),Y=e=>e.deleted==1?"!bg-red-400":e.pvr_id>0&&e.req_deleted==1?"!bg-yellow-300":e.pv_id>0?"!bg-blue-300":"",J=e=>(e.map(t=>{t.class_h=Y(t)}),e),q=d("undone");te(()=>q.value,e=>{pe.value.map(t=>{let p=["deleted_by_username","deleted_at","deleted_reason","req_deleted_by_username","req_deleted_at","req_deleted_reason"].indexOf(t.key)>-1;return["all","deleted","req_deleted"].indexOf(e)>-1?p&&(t.tbl_show=1):p&&(t.tbl_show=0),t}),de()},{immediate:!1});const f={};f._TimeZoneOffset=new Date().getTimezoneOffset(),f.sort="tanggal:desc";const re=d({}),z=d({from:"",to:""}),A=ut("token"),{data:ye}=([R,oe]=_t(async()=>ct(async()=>{v().loading_full=!0;let e=[];const[t,p]=await Promise.all([T("/extra_money_trxs",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:{filter_status:q},retry:0})]);return t.status.value!=="error"&&(e=J(t.data.value.data)),t.status.value==="error"?(C().trigger(t.error),{extra_money_trxs:e}):(v().loading_full=!1,{extra_money_trxs:e})},"$M1coKGGJnq")),R=await R,oe(),R),o=d(ye.value.extra_money_trxs||[]),se=d([]),j=d(!1),xe=async()=>{v().loading_full=!0;const{data:e,error:t,status:p}=await T("/extra_money_trx_load_sqlsrv",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:{online_status:j.value},retry:0});if(v().loading_full=!1,p.value==="error"){C().trigger(t);return}se.value=e.value.list_cost_center},G=d({field:"tanggal",by:"desc"}),l=d(-1),i=M(()=>o.value[l.value]),P=d({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),ke=()=>{f.like="";let e=JSON.parse(JSON.stringify(v()._tv.global_keyword));e!=""&&(f.like=`id:%${e}%,transition_target:%${e}%,transition_type:%${e}%,standby_mst_name:%${e}%,standby_mst_type:%${e}%,supir:%${e}%,kernet:%${e}%,no_pol:%${e}%,xto:%${e}%,pvr_no:%${e}%,pv_no:%${e}%,pvr_no:%${e}%,tanggal:%${e}%,transition_target:%${e}%,cost_center_code:%${e}%`),f.sort="",G.value.field&&(f.sort=G.value.field+":"+G.value.by),f.date_from=z.value.from?ne(z.value.from).format("YYYY-MM-DD"):"",f.date_to=z.value.to?ne(z.value.to).format("YYYY-MM-DD"):"",f.filter_model=JSON.stringify(v()._tv.filter_model)},ie=async()=>{v().loading_full=!0,re.value={},P.value.may_get_data=!1,f.page=P.value.page,f.page==1&&(o.value=[]),f.first_row&&delete f.first_row,f.page>1&&(f.first_row=JSON.stringify(o.value[0])),f.filter_status=q.value;const{data:e,error:t,status:p}=await T("/extra_money_trxs",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:f,retry:0});if(v().loading_full=!1,P.value.may_get_data=!0,p.value==="error"){C().trigger(t,re);return}P.value.page==1?o.value=J(e.value.data):P.value.page>1&&(o.value=[...o.value,...J(e.value.data)]),e.value.data.length==0&&(P.value.is_last_record=!0),v()._tv.filter_box=!1},de=()=>{l.value=-1,P.value.page=1,P.value.is_last_record=!1,ke(),ie()},I=d(!1),K=d(0),be=()=>{K.value=0,I.value=!0},{display:$}=ce();vt(ce());const ge=()=>{l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(K.value=o.value[l.value].id,I.value=!0)},H=d(!1),Q=d(0),Z=d(!1),he=()=>{l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(Q.value=o.value[l.value].id,H.value=!0,Z.value=!1)},we=()=>{l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(Q.value=o.value[l.value].id,H.value=!0,Z.value=!0)},W=d(!1),ue=d({}),B=d(!1),U=d(""),De=async()=>{B.value&&(B.value=!1)},qe=()=>{l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(U.value="",ue.value={id:o.value[l.value].id,"no pol":o.value[l.value].no_pol,tujuan:o.value[l.value].extra_money.xto},B.value=!0)};te(()=>U.value,e=>{e.trim().length>0?W.value=!0:W.value=!1},{immediate:!1});const Pe=async()=>{v().loading_full=!0;const e=new FormData;e.append("id",o.value[l.value].id),e.append("deleted_reason",U.value),e.append("_method","DELETE");const{data:t,error:p,status:w}=await T("/extra_money_trx",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(v().loading_full=!1,w.value==="error"){C().trigger(p);return}let n={...o.value[l.value]};n.deleted=t.value.deleted,n.deleted_user=t.value.deleted_user,n.deleted_at=t.value.deleted_at,n.deleted_by=t.value.deleted_by,n.deleted_reason=t.value.deleted_reason,n.class_h=Y(n),q.value!="all"?o.value.splice(l.value,1):o.value.splice(l.value,1,{...n}),l.value=-1,B.value=!1},X=d(!1),_e=d({}),E=d(!1),V=d(""),Ae=async()=>{E.value&&(E.value=!1)},$e=()=>{l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(V.value="",_e.value={id:o.value[l.value].id,"no pol":o.value[l.value].no_pol,tujuan:o.value[l.value].extra_money.xto},E.value=!0)},ve=d({}),F=d(!1),Oe=d(""),Ce=async()=>{F.value&&(F.value=!1)},Te=()=>{var e;l.value==-1?$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(Oe.value="",ve.value={id:o.value[l.value].id,"no pol":o.value[l.value].no_pol,tujuan:o.value[l.value].extra_money.xto,permintaan:(e=o.value[l.value].approve_void_by)==null?void 0:e.username,alasan:o.value[l.value].approve_void_reason},F.value=!0)},je=async()=>{v().loading_full=!0;const e=new FormData;e.append("id",o.value[l.value].id),e.append("_method","DELETE");const{data:t,error:p,status:w}=await T("/extra_money_trx_approve_void",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(v().loading_full=!1,w.value==="error"){C().trigger(p);return}let n={...o.value[l.value]};n.deleted=t.value.deleted,n.deleted_user=t.value.deleted_user,n.deleted_at=t.value.deleted_at,n.deleted_by=t.value.deleted_by,n.deleted_reason=t.value.deleted_reason,n.class_h=Y(n),q.value!="all"?o.value.splice(l.value,1):o.value.splice(l.value,1,{...n}),l.value=-1,F.value=!1};te(()=>V.value,e=>{e.trim().length>0?X.value=!0:X.value=!1},{immediate:!1});const Me=async()=>{v().loading_full=!0;const e=new FormData;e.append("id",o.value[l.value].id),e.append("req_deleted_reason",V.value),e.append("_method","DELETE");const{data:t,error:p,status:w}=await T("/extra_money_trx_req_delete",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(v().loading_full=!1,w.value==="error"){C().trigger(p);return}let n={...o.value[l.value]};n.req_deleted=t.value.req_deleted,n.req_deleted_user=t.value.req_deleted_user,n.req_deleted_by=t.value.req_deleted_by,n.req_deleted_at=t.value.req_deleted_at,n.req_deleted_reason=t.value.req_deleted_reason,n.class_h=Y(n),q.value!="all"?o.value.splice(l.value,1):o.value.splice(l.value,1,{...n}),l.value=-1,E.value=!1},{printHtml:Se}=xt(),Ne=async()=>{if(l.value==-1){$({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"});return}v().loading_full=!0;const{data:e,error:t,status:p}=await T("/extra_money_trx_preview_file",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:{id:o.value[l.value].id},retry:0});if(v().loading_full=!1,p.value==="error"){C().trigger(t);return}Se(e.value.html,318)},Ue=async()=>{v().loading_full=!0;const e=new FormData;e.append("online_status",j.value);const{data:t,error:p,status:w}=await T("/extra_money_trx_do_gen_pvr",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(v().loading_full=!1,w.value==="error"){C().trigger(p);return}t.value.forEach(n=>{let O=o.value.map(c=>c.id).indexOf(n.id);if(O!==-1){let c=o.value[O];c.pvr_id=n.pvr_id,c.pvr_no=n.pvr_no,c.pvr_total=n.pvr_total,c.pvr_complete=n.pvr_complete,c.updated_at=n.updated_at,o.value.splice(O,1,{...c})}}),$({show:!0,status:"Success",message:"Generate Or Update PVR Done"})},Ve=async()=>{v().loading_full=!0;const e=new FormData;e.append("online_status",j.value);const{data:t,error:p,status:w}=await T("/extra_money_trx_do_update_pv",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(v().loading_full=!1,w.value==="error"){C().trigger(p);return}t.value.data.forEach(n=>{let O=o.value.map(c=>c.id).indexOf(n.id);if(O!==-1){let c=o.value[O];c.pv_id=n.pv_id,c.pv_no=n.pv_no,c.pv_total=n.pv_total,c.pv_datetime=n.pv_datetime,c.updated_at=n.updated_at,o.value.splice(O,1,{...c})}}),$({show:!0,status:"Success",message:"Update PV Done"})},pe=d([{key:"no",label:"No",isai:!0},{key:"val1",label:"App 1",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"App 2",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val3",label:"App 3",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val4",label:"App 4",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val5",label:"App 5",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val6",label:"App 6",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"tanggal",label:"Tanggal",type:"datetime",dateformat:"DD-MM-Y",filter_on:1},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"employee_name",label:"Nama Pekerja",type:"string"},{key:"employee_rek_no",label:"No rek Pekerja",type:"string"},{key:"employee_rek_name",label:"Nama Rek Pekerja",type:"string"},{key:"note",label:"Note",filter_on:1,type:"string"},{key:"payment_method_name",label:"Payment Method Name",type:"string"},{key:"extra_money_xto",label:"Tujuan",filter_on:1,type:"string"},{key:"extra_money_jenis",label:"Jenis",filter_on:1,type:"string"},{key:"extra_money_nominal",label:"Nominal",class:" justify-end",type:"number"},{key:"extra_money_qty",label:"Qty",class:" justify-end",type:"number"},{key:"extra_money_total",label:"Total",class:" justify-end",type:"number"},{key:"extra_money_transition_target",label:"Pengalihan",filter_on:1,type:"select",select_item:v().list_pabrik},{key:"extra_money_transition_type",label:"Tipe Pengalihan",type:"select",select_item:[{k:"From",v:"Dari"},{k:"To",v:"Ke"}]},{key:"cost_center",label:"Cost Center",childs:[{key:"cost_center_code",label:"Code",type:"string",class:" justify-start",filter_on:1},{key:"cost_center_desc",label:"Desc",filter_on:1,type:"string"}]},{key:"pvr",label:"PVR",childs:[{key:"pvr_no",label:"No",filter_on:1,type:"string"},{key:"pvr_total",label:"Total",filter_on:1,type:"number"},{key:"pvr_complete",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"pv",label:"PV",childs:[{key:"pv_datetime",label:"Date",type:"date",dateformat:"DD-MM-Y",filter_on:1},{key:"pv_no",label:"No",filter_on:1,type:"string"},{key:"pv_total",label:"Total",filter_on:1,type:"number"}]},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1,tbl_show:0},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1,tbl_show:0},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0,type:"string",filter_on:1}]),Be=M(()=>["undone","all"].indexOf(q.value)>-1&&y().checkPermission("extra_money_trx.create")),Ee=M(()=>l.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&[void 0,0].indexOf(i.value.val1)>-1&&[void 0,""].indexOf(i.value.pvr_id)>-1&&y().checkPermission("extra_money_trx.modify")),Fe=M(()=>l.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&([void 0,""].indexOf(i.value.pvr_id)>-1&&(y().checkPermission("extra_money_trx.val1")&&[void 0,0].indexOf(i.value.val1)>-1||y().checkPermission("extra_money_trx.val2")&&[void 0,0].indexOf(i.value.val2)>-1)||i.value.pvr_id>-1&&(y().checkPermission("extra_money_trx.val3")&&[void 0,0].indexOf(i.value.val3)>-1||y().checkPermission("extra_money_trx.val4")&&[void 0,0].indexOf(i.value.val4)>-1||y().checkPermission("extra_money_trx.val5")&&[void 0,0].indexOf(i.value.val5)>-1||y().checkPermission("extra_money_trx.val6")&&[void 0,0].indexOf(i.value.val6)>-1))),Re=M(()=>y().checkPermission("extra_money_trx.remove")&&l.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&[void 0,""].indexOf(i.value.pvr_id)>-1),Ye=M(()=>y().checkPermission("extra_money_trx.request_remove")&&l.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&i.value.pvr_id!=""),ze=M(()=>y().checkPermission("extra_money_trx.approve_request_remove")&&l.value>-1&&i.value.deleted==0&&i.value.req_deleted==1&&i.value.val2==0),Ie=M(()=>y().checkPermission("extra_money_trx.preview_file")&&l.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&i.value.val1==1);return(e,t)=>{const p=Qe,w=Ze,n=We,O=Xe,c=et,me=tt,He=at,Le=lt,S=ot,N=nt,Je=rt,ee=st,Ge=it,Ke=dt;return u(),h("div",kt,[x(p,{title:"List Transaction"}),g("div",bt,[g("div",gt,[g("div",ht,[g("div",wt,[ae(g("select",{class:"","onUpdate:modelValue":t[0]||(t[0]=a=>le(q)?q.value=a:null)},qt,512),[[pt,r(q)]])]),r(Be)?(u(),h("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=a=>be())},[x(w)])):D("",!0),r(Ee)?(u(),h("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=a=>ge())},[x(n)])):D("",!0),r(l)>-1?(u(),h("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[3]||(t[3]=a=>we())},[x(O)])):D("",!0),r(Re)?(u(),h("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[4]||(t[4]=a=>qe())},[x(c)])):D("",!0),r(Ye)?(u(),h("button",{key:4,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[5]||(t[5]=a=>$e())},[x(me)])):D("",!0),r(ze)?(u(),h("button",{key:5,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[6]||(t[6]=a=>Te())},[x(me)])):D("",!0),r(Fe)?(u(),h("button",{key:6,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[7]||(t[7]=a=>he())},[x(He)])):D("",!0),r(Ie)?(u(),h("button",{key:7,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[8]||(t[8]=a=>Ne())},[x(Le)])):D("",!0)]),g("div",Pt,[("useUtils"in e?e.useUtils:r(y))().checkPermission("extra_money_trx.generate_pvr")?(u(),h("button",{key:0,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:t[9]||(t[9]=a=>Ue())}," Gen/Update PVR ")):D("",!0),("useUtils"in e?e.useUtils:r(y))().checkPermission("extra_money_trx.get_pv")?(u(),h("button",{key:1,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:t[10]||(t[10]=a=>Ve())}," Update PV ")):D("",!0),("useUtils"in e?e.useUtils:r(y))().checkPermissions(["extra_money_trx.create","extra_money_trx.modify"])?(u(),h("div",{key:2,class:"m-1 card-border cursor-pointer",onClick:t[11]||(t[11]=a=>j.value=!r(j))},[At,m(" : "),g("span",{class:mt(["font-bold",r(j)?"text-green-600":"text-red-600"])},k(r(j)?"ONLINE":"OFFLINE"),3)])):D("",!0)])]),x(Je,{thead:r(pe),selected:r(l),onSetSelected:t[12]||(t[12]=a=>l.value=a),tbody:r(o),fnCallData:ie,scrolling:r(P),onSetScrollingPage:t[13]||(t[13]=a=>r(P).page=a),onDoFilter:t[14]||(t[14]=a=>de())},{val1:_(({item:a})=>[a.val1?(u(),b(N,{key:1})):(u(),b(S,{key:0}))]),val2:_(({item:a})=>[a.val2?(u(),b(N,{key:1})):(u(),b(S,{key:0}))]),val3:_(({item:a})=>[a.val3?(u(),b(N,{key:1})):(u(),b(S,{key:0}))]),val4:_(({item:a})=>[a.val4?(u(),b(N,{key:1})):(u(),b(S,{key:0}))]),val5:_(({item:a})=>[a.val5?(u(),b(N,{key:1})):(u(),b(S,{key:0}))]),val6:_(({item:a})=>[a.val6?(u(),b(N,{key:1})):(u(),b(S,{key:0}))]),payment_method_name:_(({item:a})=>{var s;return[m(k((s=a.payment_method)==null?void 0:s.name),1)]}),employee_name:_(({item:a})=>{var s;return[m(k((s=a.employee)==null?void 0:s.name),1)]}),employee_rek_no:_(({item:a})=>{var s;return[m(k((s=a.employee)==null?void 0:s.rek_no),1)]}),employee_rek_name:_(({item:a})=>{var s;return[m(k((s=a.employee)==null?void 0:s.rek_name),1)]}),extra_money_transition_target:_(({item:a})=>{var s;return[m(k((s=a.extra_money)==null?void 0:s.transition_target),1)]}),extra_money_transition_type:_(({item:a})=>{var s;return[m(k((s=a.extra_money)==null?void 0:s.transition_type),1)]}),extra_money_xto:_(({item:a})=>{var s;return[m(k((s=a.extra_money)==null?void 0:s.xto),1)]}),extra_money_jenis:_(({item:a})=>{var s;return[m(k((s=a.extra_money)==null?void 0:s.jenis),1)]}),extra_money_nominal:_(({item:a})=>{var s;return[m(" Rp. "+k(r(L)(((s=a.extra_money)==null?void 0:s.nominal)||0)),1)]}),extra_money_qty:_(({item:a})=>{var s;return[m(k(r(L)(((s=a.extra_money)==null?void 0:s.qty)||0)),1)]}),extra_money_total:_(({item:a})=>{var s;return[m(" Rp. "+k(r(L)(((s=a.extra_money)==null?void 0:s.total)||0)),1)]}),pvr_complete:_(({item:a})=>[a.pvr_complete?(u(),b(N,{key:1})):(u(),b(S,{key:0}))]),deleted_by_username:_(({item:a})=>{var s;return[m(k((s=a.deleted_by)==null?void 0:s.username),1)]}),req_deleted_by_username:_(({item:a})=>{var s;return[m(k((s=a.req_deleted_by)==null?void 0:s.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])]),x(ee,{type:"delete",show:r(B),data:r(ue),fnClose:De,fnConfirm:Pe,enabledOk:r(W)},{footer:_(()=>[m(" Masukkan Alasan Penghapusan: "),g("div",$t,[ae(g("textarea",{"onUpdate:modelValue":t[15]||(t[15]=a=>le(U)?U.value=a:null)},null,512),[[fe,r(U)]])])]),_:1},8,["show","data","enabledOk"]),x(ee,{type:"custome",show:r(E),data:r(_e),fnClose:Ae,fnConfirm:Me,enabledOk:r(X)},{words:_(()=>[m(" Data akan diproses dan "),Ot,m(", yakin untuk melanjutkan ? ")]),footer:_(()=>[m(" Masukkan Alasan Permintaan Penghapusan: "),g("div",Ct,[ae(g("textarea",{"onUpdate:modelValue":t[16]||(t[16]=a=>le(V)?V.value=a:null)},null,512),[[fe,r(V)]])])]),_:1},8,["show","data","enabledOk"]),x(ee,{type:"custome",show:r(F),data:r(ve),fnClose:Ce,fnConfirm:je},{words:_(()=>[m(" Data akan diproses dan "),Tt,m(", apakah Anda menyetujui permintaan penghapusan data berikut? ")]),_:1},8,["show","data"]),x(Ge,{show:r(I),fnClose:()=>{I.value=!1},fnLoadDBData:xe,id:r(K),p_data:r(o),list_cost_center:r(se),online_status:r(j)},null,8,["show","fnClose","id","p_data","list_cost_center","online_status"]),x(Ke,{show:r(H),fnClose:()=>{H.value=!1},id:r(Q),p_data:r(o),is_view:r(Z)},null,8,["show","fnClose","id","p_data","is_view"])])}}};export{pa as default};