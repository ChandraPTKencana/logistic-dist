import Ke from"./Header.f9a8a056.js";import Ge from"./Plus.5de0a6d4.js";import Ze from"./Edit.d683d318.js";import Qe from"./Eyes.1efd7f6d.js";import We from"./Delete.766cc2c9.js";import Xe from"./Void.66e239a4.js";import et from"./Signature.bf8d295b.js";import tt from"./PrinterEye.248047b0.js";import at from"./Line.5c411d8d.js";import lt from"./Check.deac2546.js";import nt from"./TableView.18049728.js";import{_ as ot}from"./PopupMini.vue.3e0104b1.js";import st from"./standby_trx.374eaf6a.js";import rt from"./standby_trx_validasi.e002f1cb.js";import{r as d,f as X,g as dt,h as it,i as h,j as ve,s as ut,x as p,c as b,b as f,a as y,k as ee,v as _t,l as o,m as te,n as w,w as v,q as pt,y as T,o as u,z as D,F as vt,D as mt,E as ft,t as q,d as c,A as me,H as ct,G as yt,p as bt,e as kt}from"./entry.110bb6e4.js";import{u as x}from"./useUtils.7da625d1.js";import{u as P}from"./useMyFetch.0f590c25.js";import{u as gt}from"./useDownload.174f4da2.js";import{_ as xt}from"./_plugin-vue_export-helper.c27b6911.js";import"./Search.af2b42d5.js";import"./Adjust.09d41e80.js";import"./TableHeaderEye.e6d5d2a9.js";import"./Times.5db8c599.js";import"./ClearAll.df5e01ec.js";import"./client-only.fbe84062.js";import"./ClearEach.bd3fe4f2.js";import"./CaretLeftDoubleBold.284ca664.js";import"./CaretLeftBold.66936fb5.js";import"./CaretRightBold.8636e5b5.js";import"./CaretRightDoubleBold.e8c187c7.js";import"./Exclamation.da1fba21.js";import"./HeaderPopup.vue.98473ed0.js";import"./WidthMiniList.vue.3012e631.js";import"./WidthMiniPart.vue.3ffe0c9b.js";import"./Tools.cb608b02.js";import"./AttachmentSingle.7ef7f2d7.js";import"./PDFJsView.25701afe.js";import"./ToolsPopup.dcb55c27.js";import"./CaretTop.de9530e2.js";import"./CaretDown.595731ae.js";const fe=B=>(bt("data-v-fcd5b6d4"),B=B(),kt(),B),ht={class:"w-full h-full flex flex-col"},wt={class:"w-full flex grow flex-col overflow-auto h-0"},Dt={class:"w-full flex justify-between flex-wrap"},qt={class:"grow flex"},St={class:"m-1"},$t=ct('<option value="trx_not_done" data-v-fcd5b6d4>Undone</option><option value="trx_done" data-v-fcd5b6d4>Done</option><option value="deleted" data-v-fcd5b6d4>Trash</option><option value="all" data-v-fcd5b6d4>All</option><option value="req_deleted" data-v-fcd5b6d4>Req Delete</option>',5),At=[$t],Ct={class:"relative z-[1]"},Ot={class:"grow mb-5"},Tt=fe(()=>y("b",null,"tidak dapat dibatalkan lagi",-1)),Pt={class:"grow mb-5"},Mt=fe(()=>y("b",null,"tidak dapat dibatalkan lagi",-1)),Nt={__name:"trx",async setup(B){let F,ae;const{$moment:R}=yt(),{pointFormat:le}=x(),V=e=>e.deleted==1?"!bg-red-400":(e.pvr_id>0||e.salary_paid_id>0)&&e.req_deleted==1?"!bg-yellow-300":e.pv_id>0||e.salary_paid_id>0?"!bg-blue-300":"",L=e=>(e.map(t=>{t.class_h=V(t)}),e),k=d("trx_not_done");X(()=>k.value,e=>{ue.value.map(t=>{let m=["deleted_by_username","deleted_at","deleted_reason","req_deleted_by_username","req_deleted_at","req_deleted_reason"].indexOf(t.key)>-1;return["all","deleted","req_deleted"].indexOf(e)>-1?m&&(t.tbl_show=1):m&&(t.tbl_show=0),t}),se()},{immediate:!1});const _={};_._TimeZoneOffset=new Date().getTimezoneOffset(),_.sort="tanggal:desc";const ne=d({}),E=d({from:"",to:""}),A=dt("token"),{data:ce}=([F,ae]=it(async()=>pt(async()=>{p().loading_full=!0;let e=[];const[t,m]=await Promise.all([P("/standby_trxs",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:{filter_status:k},retry:0})]);return t.status.value!=="error"&&(e=L(t.data.value.data)),t.status.value==="error"?(T().trigger(t.error),{standby_trxs:e}):(p().loading_full=!1,{standby_trxs:e})},"$rVBHTgwE0s")),F=await F,ae(),F),n=d(ce.value.standby_trxs||[]),J=d({field:"tanggal",by:"desc"}),a=d(-1),i=h(()=>n.value[a.value]),g=d({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),ye=()=>{_.like="";let e=JSON.parse(JSON.stringify(p()._tv.global_keyword));e!=""&&(_.like=`id:%${e}%,transition_target:%${e}%,transition_type:%${e}%,standby_mst_name:%${e}%,standby_mst_type:%${e}%,supir:%${e}%,kernet:%${e}%,no_pol:%${e}%,xto:%${e}%,pvr_no:%${e}%,pv_no:%${e}%,pvr_no:%${e}%,tanggal:%${e}%,transition_target:%${e}%,cost_center_code:%${e}%`),_.sort="",J.value.field&&(_.sort=J.value.field+":"+J.value.by),_.date_from=E.value.from?R(E.value.from).format("YYYY-MM-DD"):"",_.date_to=E.value.to?R(E.value.to).format("YYYY-MM-DD"):"",_.filter_model=JSON.stringify(p()._tv.filter_model)},oe=async()=>{p().loading_full=!0,ne.value={},g.value.may_get_data=!1,_.page=g.value.page,_.page==1&&(n.value=[]),_.first_row&&delete _.first_row,_.page>1&&(_.first_row=JSON.stringify(n.value[0])),_.filter_status=k.value;const{data:e,error:t,status:m}=await P("/standby_trxs",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:_,retry:0});if(p().loading_full=!1,g.value.may_get_data=!0,m.value==="error"){T().trigger(t,ne);return}g.value.page==1?n.value=L(e.value.data):g.value.page>1&&(n.value=[...n.value,...L(e.value.data)]),e.value.data.length==0&&(g.value.is_last_record=!0),p()._tv.filter_box=!1},se=()=>{a.value=-1,g.value.page=1,g.value.is_last_record=!1,ye(),oe()},I=d(!1),K=d(0),be=()=>{K.value=0,I.value=!0},{display:S}=ve();ut(ve());const ke=()=>{a.value==-1?S({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(K.value=n.value[a.value].id,I.value=!0)},Y=d(!1),H=d(0),G=d(!1),ge=()=>{a.value==-1?S({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(H.value=n.value[a.value].id,Y.value=!0,G.value=!1)},xe=()=>{a.value==-1?S({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(H.value=n.value[a.value].id,Y.value=!0,G.value=!0)},Z=d(!1),re=d({}),M=d(!1),C=d(""),he=async()=>{M.value&&(M.value=!1)},we=()=>{a.value==-1?S({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(C.value="",re.value={id:n.value[a.value].id,"no pol":n.value[a.value].no_pol,tujuan:n.value[a.value].xto},M.value=!0)};X(()=>C.value,e=>{e.trim().length>0?Z.value=!0:Z.value=!1},{immediate:!1});const De=async()=>{p().loading_full=!0;const e=new FormData;e.append("id",n.value[a.value].id),e.append("deleted_reason",C.value),e.append("_method","DELETE");const{data:t,error:m,status:$}=await P("/standby_trx",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(p().loading_full=!1,$.value==="error"){T().trigger(m);return}let s={...n.value[a.value]};s.deleted=t.value.deleted,s.deleted_user=t.value.deleted_user,s.deleted_at=t.value.deleted_at,s.deleted_by=t.value.deleted_by,s.deleted_reason=t.value.deleted_reason,s.class_h=V(s),k.value!="all"?n.value.splice(a.value,1):n.value.splice(a.value,1,{...s}),a.value=-1,M.value=!1},Q=d(!1),de=d({}),N=d(!1),O=d(""),qe=async()=>{N.value&&(N.value=!1)},Se=()=>{a.value==-1?S({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(O.value="",de.value={id:n.value[a.value].id,"no pol":n.value[a.value].no_pol,tujuan:n.value[a.value].xto},N.value=!0)},ie=d({}),j=d(!1),$e=d(""),Ae=async()=>{j.value&&(j.value=!1)},Ce=()=>{var e;a.value==-1?S({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):($e.value="",ie.value={id:n.value[a.value].id,"no pol":n.value[a.value].no_pol,tujuan:n.value[a.value].xto,permintaan:(e=n.value[a.value].approve_void_by)==null?void 0:e.username,alasan:n.value[a.value].approve_void_reason},j.value=!0)},Oe=async()=>{p().loading_full=!0;const e=new FormData;e.append("id",n.value[a.value].id),e.append("_method","DELETE");const{data:t,error:m,status:$}=await P("/standby_trx_approve_void",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(p().loading_full=!1,$.value==="error"){T().trigger(m);return}let s={...n.value[a.value]};s.deleted=t.value.deleted,s.deleted_user=t.value.deleted_user,s.deleted_at=t.value.deleted_at,s.deleted_by=t.value.deleted_by,s.deleted_reason=t.value.deleted_reason,s.class_h=V(s),k.value!="all"?n.value.splice(a.value,1):n.value.splice(a.value,1,{...s}),a.value=-1,j.value=!1};X(()=>O.value,e=>{e.trim().length>0?Q.value=!0:Q.value=!1},{immediate:!1});const Te=async()=>{p().loading_full=!0;const e=new FormData;e.append("id",n.value[a.value].id),e.append("req_deleted_reason",O.value),e.append("_method","DELETE");const{data:t,error:m,status:$}=await P("/standby_trx_req_delete",{method:"post",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:e,retry:0});if(p().loading_full=!1,$.value==="error"){T().trigger(m);return}let s={...n.value[a.value]};s.req_deleted=t.value.req_deleted,s.req_deleted_user=t.value.req_deleted_user,s.req_deleted_by=t.value.req_deleted_by,s.req_deleted_at=t.value.req_deleted_at,s.req_deleted_reason=t.value.req_deleted_reason,s.class_h=V(s),k.value!="all"?n.value.splice(a.value,1):n.value.splice(a.value,1,{...s}),a.value=-1,N.value=!1},{printHtml:Pe}=gt(),Me=async()=>{if(a.value==-1){S({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"});return}p().loading_full=!0;const{data:e,error:t,status:m}=await P("/standby_trx_preview_file",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:{id:n.value[a.value].id},retry:0});if(p().loading_full=!1,m.value==="error"){T().trigger(t);return}Pe(e.value.html,318)},ue=d([{key:"no",label:"No",isai:!0},{key:"val",label:"App 1",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val1",label:"App 2",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"App 3",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"detail_dates",label:"Detail Dates",type:"string"},{key:"salary_paid",label:"Salary Paid",type:"string"},{key:"standby_trx_dtl_tanggal",label:"Detail Date",type:"date",dateformat:"DD-MM-Y",filter_on:1,tbl_show:0,sort_off:1},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"supir_rek_no",label:"No Rek Supir",filter_on:1,type:"string"},{key:"supir_rek_name",label:"Nama Rek Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"kernet_rek_no",label:"No Rek Kernet",filter_on:1,type:"string"},{key:"kernet_rek_name",label:"Nama Rek Kernet",filter_on:1,type:"string"},{key:"xto",label:"Tujuan",filter_on:1,type:"string"},{key:"standby_mst_name",label:"Nama Standby",filter_on:1,type:"string"},{key:"standby_mst_type",label:"Tipe Standby",filter_on:1,type:"string"},{key:"standby_mst_amount",label:"Nilai SB",class:" justify-end",type:"number"},{key:"details_count",label:"Jlh SB",class:" justify-end",type:"number"},{key:"sb_total",label:"Total SB",class:" justify-end",type:"number"},{key:"note_for_remarks",label:"Note untuk Remarks"},{key:"trx_trp_id",label:"Trx Trp"},{key:"transition_target",label:"Pengalihan",filter_on:1,type:"select",select_item:p().list_pabrik},{key:"transition_type",label:"Tipe Pengalihan",type:"select",select_item:[{k:"From",v:"Dari"},{k:"To",v:"Ke"}]},{key:"cost_center",label:"Cost Center",childs:[{key:"cost_center_code",label:"Code",type:"string",class:" justify-start",filter_on:1},{key:"cost_center_desc",label:"Desc",filter_on:1,type:"string"}]},{key:"pvr",label:"PVR",childs:[{key:"pvr_no",label:"No",filter_on:1,type:"string"},{key:"pvr_total",label:"Total",filter_on:1,type:"number"},{key:"pvr_had_detail",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"pv",label:"PV",childs:[{key:"pv_datetime",label:"Date",type:"date",dateformat:"DD-MM-Y",filter_on:1},{key:"pv_no",label:"No",filter_on:1,type:"string"},{key:"pv_total",label:"Total",filter_on:1,type:"number"}]},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1,tbl_show:0},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1,tbl_show:0},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0,type:"string",filter_on:1}]),Ne=h(()=>["trx_not_done","all"].indexOf(k.value)>-1&&x().checkPermission("standby_trx.create")),je=h(()=>a.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&[void 0,0].indexOf(i.value.val)>-1&&[void 0,""].indexOf(i.value.pvr_id)>-1&&x().checkPermission("standby_trx.modify")),Be=h(()=>a.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&([void 0,""].indexOf(i.value.pvr_id)>-1&&(x().checkPermission("standby_trx.val")&&[void 0,0].indexOf(i.value.val)>-1||x().checkPermission("standby_trx.val1")&&[void 0,0].indexOf(i.value.val1)>-1)||i.value.pvr_id>-1&&x().checkPermission("standby_trx.val2")&&[void 0,0].indexOf(i.value.val2)>-1)),Fe=h(()=>x().checkPermission("standby_trx.remove")&&a.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&[void 0,""].indexOf(i.value.pvr_id)>-1),Re=h(()=>x().checkPermission("standby_trx.request_remove")&&a.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&i.value.pvr_id!=""),Ve=h(()=>x().checkPermission("standby_trx.approve_request_remove")&&a.value>-1&&i.value.deleted==0&&i.value.req_deleted==1&&i.value.val2==0),Ee=h(()=>x().checkPermission("standby_trx.preview_file")&&a.value>-1&&[void 0,0].indexOf(i.value.deleted)>-1&&[void 0,0].indexOf(i.value.req_deleted)>-1&&i.value.val==1);return(e,t)=>{const m=Ke,$=Ge,s=Ze,Ie=Qe,Ye=We,_e=Xe,He=et,ze=tt,z=at,U=lt,Ue=nt,W=ot,Le=st,Je=rt;return u(),b("div",ht,[f(m,{title:"List Transaction"}),y("div",wt,[y("div",Dt,[y("div",qt,[y("div",St,[ee(y("select",{class:"","onUpdate:modelValue":t[0]||(t[0]=l=>te(k)?k.value=l:null)},At,512),[[_t,o(k)]])]),o(Ne)?(u(),b("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=l=>be())},[f($)])):w("",!0),o(je)?(u(),b("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=l=>ke())},[f(s)])):w("",!0),o(a)>-1?(u(),b("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[3]||(t[3]=l=>xe())},[f(Ie)])):w("",!0),o(Fe)?(u(),b("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[4]||(t[4]=l=>we())},[f(Ye)])):w("",!0),o(Re)?(u(),b("button",{key:4,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[5]||(t[5]=l=>Se())},[f(_e)])):w("",!0),o(Ve)?(u(),b("button",{key:5,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[6]||(t[6]=l=>Ce())},[f(_e)])):w("",!0),o(Be)?(u(),b("button",{key:6,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[7]||(t[7]=l=>ge())},[f(He)])):w("",!0),o(Ee)?(u(),b("button",{key:7,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[8]||(t[8]=l=>Me())},[f(ze)])):w("",!0)])]),f(Ue,{thead:o(ue),selected:o(a),onSetSelected:t[9]||(t[9]=l=>a.value=l),tbody:o(n),fnCallData:oe,scrolling:o(g),onSetScrollingPage:t[10]||(t[10]=l=>o(g).page=l),onDoFilter:t[11]||(t[11]=l=>se())},{val:v(({item:l})=>[l.val?(u(),D(U,{key:1})):(u(),D(z,{key:0}))]),val1:v(({item:l})=>[l.val1?(u(),D(U,{key:1})):(u(),D(z,{key:0}))]),val2:v(({item:l})=>[l.val2?(u(),D(U,{key:1})):(u(),D(z,{key:0}))]),detail_dates:v(({item:l})=>[(u(!0),b(vt,null,mt(l.details,r=>(u(),b("div",{class:ft(["btn p-1 rounded-sm text-white text-xs mr-1 relative",[r.attachment_1_type?"bg-green-600":"bg-red-500",r.be_paid?"":"unpaid"]])},[y("div",Ct,q(o(R)(r.tanggal).format("DD-MM")),1)],2))),256))]),standby_mst_name:v(({item:l})=>{var r;return[c(q((r=l.standby_mst_)==null?void 0:r.name),1)]}),standby_mst_type:v(({item:l})=>{var r;return[c(q((r=l.standby_mst_)==null?void 0:r.tipe),1)]}),salary_paid:v(({item:l})=>{var r,pe;return[c(q(l.salary_paid?o(R)((r=l.salary_paid)==null?void 0:r.period_end).format("MM-Y")+"["+((pe=l.salary_paid)==null?void 0:pe.period_part)+"]":""),1)]}),standby_mst_amount:v(({item:l})=>{var r;return[c(" Rp. "+q(o(le)(((r=l.standby_mst_)==null?void 0:r.amount)||0)),1)]}),sb_total:v(({item:l})=>{var r;return[c(" Rp. "+q(o(le)(((r=l.standby_mst_)==null?void 0:r.amount)*l.details_count||0)),1)]}),pvr_had_detail:v(({item:l})=>[l.pvr_had_detail?(u(),D(U,{key:1})):(u(),D(z,{key:0}))]),deleted_by_username:v(({item:l})=>{var r;return[c(q((r=l.deleted_by)==null?void 0:r.username),1)]}),req_deleted_by_username:v(({item:l})=>{var r;return[c(q((r=l.req_deleted_by)==null?void 0:r.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])]),f(W,{type:"delete",show:o(M),data:o(re),fnClose:he,fnConfirm:De,enabledOk:o(Z)},{footer:v(()=>[c(" Masukkan Alasan Penghapusan: "),y("div",Ot,[ee(y("textarea",{"onUpdate:modelValue":t[12]||(t[12]=l=>te(C)?C.value=l:null)},null,512),[[me,o(C)]])])]),_:1},8,["show","data","enabledOk"]),f(W,{type:"custome",show:o(N),data:o(de),fnClose:qe,fnConfirm:Te,enabledOk:o(Q)},{words:v(()=>[c(" Data akan diproses dan "),Tt,c(", yakin untuk melanjutkan ? ")]),footer:v(()=>[c(" Masukkan Alasan Permintaan Penghapusan: "),y("div",Pt,[ee(y("textarea",{"onUpdate:modelValue":t[13]||(t[13]=l=>te(O)?O.value=l:null)},null,512),[[me,o(O)]])])]),_:1},8,["show","data","enabledOk"]),f(W,{type:"custome",show:o(j),data:o(ie),fnClose:Ae,fnConfirm:Oe},{words:v(()=>[c(" Data akan diproses dan "),Mt,c(", apakah Anda menyetujui permintaan penghapusan data berikut? ")]),_:1},8,["show","data"]),f(Le,{show:o(I),fnClose:()=>{I.value=!1},id:o(K),p_data:o(n)},null,8,["show","fnClose","id","p_data"]),f(Je,{show:o(Y),fnClose:()=>{Y.value=!1},id:o(H),p_data:o(n),is_view:o(G),onSetID:t[14]||(t[14]=l=>H.value=l),onSetIndex:t[15]||(t[15]=l=>a.value=l)},null,8,["show","fnClose","id","p_data","is_view"])])}}},xa=xt(Nt,[["__scopeId","data-v-fcd5b6d4"]]);export{xa as default};