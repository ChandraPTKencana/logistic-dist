import Ge from"./Header.e1bd6a4d.js";import We from"./Plus.38b8db72.js";import Ze from"./Edit.cf7eb676.js";import Qe from"./Eyes.81e70b45.js";import Xe from"./Delete.ecd67be6.js";import et from"./Void.3e32aa67.js";import tt from"./Signature.f0ce7681.js";import at from"./PrinterEye.7e61cbd1.js";import lt from"./Image.833d51ce.js";import ot from"./Line.3c0f249b.js";import nt from"./Check.b99b15bf.js";import rt from"./TableView.e0c01942.js";import{_ as st}from"./PopupMini.vue.ce83be3b.js";import it from"./trx_trp.ea558019.js";import dt from"./trx_trp_validasi.ab8a091c.js";import ut from"./trx_absen.cecdb19f.js";import{r as i,j as X,f as _t,g as pt,G as q,i as vt,A as u,c as x,b as f,a as m,m as ee,q as ct,k as o,n as te,l as h,d as j,C as mt,t as V,w as y,z as ft,B as C,o as s,D as c,v as me,H as yt,E as kt}from"./entry.c23774bf.js";import{u as O}from"./useMyFetch.f406b52d.js";import{u as bt}from"./useDownload.174f4da2.js";import{u as k}from"./useUtils.fc8ffcf7.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.1260b777.js";import"./Adjust.35120316.js";import"./TableHeaderEye.e86db6d1.js";import"./Times.f61f7a80.js";import"./ClearAll.053f941f.js";import"./client-only.87fb71e7.js";import"./ClearEach.11557c22.js";import"./CaretLeftDoubleBold.0978ef73.js";import"./CaretLeftBold.1bd340d6.js";import"./CaretRightBold.2bfce699.js";import"./CaretRightDoubleBold.a7fd1771.js";import"./Exclamation.7365b4d6.js";import"./HeaderPopup.vue.9b4798a3.js";import"./WidthMiniList.vue.3f418a1d.js";import"./WidthMiniPart.vue.419e91ff.js";const gt={class:"w-full h-full flex flex-col"},xt={class:"w-full flex grow flex-col overflow-auto h-0"},ht={class:"w-full flex justify-between flex-wrap"},wt={class:"grow flex"},Dt={class:"m-1"},Pt=yt('<option value="pv_not_done">Undone</option><option value="pv_done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),$t=[Pt],At={class:"flex"},qt=m("span",{class:"text-xs"},"Mode",-1),Ct={class:"w-full flex flex-col items-center justify-center"},Ot={key:2,class:"text-xs"},Tt={class:"grow mb-5"},St=m("b",null,"tidak dapat dibatalkan lagi",-1),Mt={class:"grow mb-5"},ka={__name:"index",async setup(jt){let R,ae;const{$moment:le}=kt(),z=e=>e.deleted==1?"!bg-red-400":e.pvr_id>0&&e.req_deleted==1?"!bg-yellow-300":e.absen_not_done&&e.absen_not_done.length>0?"!bg-gray-300":e.pv_id>0?"!bg-blue-300":"",L=e=>(e.map(t=>{t.class_h=z(t)}),e),w=i("pv_not_done");X(()=>w.value,e=>{pe.value.map(t=>{let _=["deleted_by_username","deleted_at","deleted_reason","req_deleted_by_username","req_deleted_at","req_deleted_reason"].indexOf(t.key)>-1;return["all","deleted","req_deleted"].indexOf(e)>-1?_&&(t.tbl_show=1):_&&(t.tbl_show=0),t}),se()},{immediate:!1});const v={};v._TimeZoneOffset=new Date().getTimezoneOffset(),v.sort="tanggal:desc";const oe=i({}),E=i({from:"",to:""}),D=_t("token"),{data:fe}=([R,ae]=pt(async()=>ft(async()=>{u().loading_full=!0;let e=[];const[t,_]=await Promise.all([O("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{filter_status:w},retry:0})]);return t.status.value!=="error"&&(e=L(t.data.value.data)),t.status.value==="error"?(C().trigger(t.error),{trx_trps:e}):(u().loading_full=!1,{trx_trps:e})},"$pFLmKcrKj9")),R=await R,ae(),R),n=i(fe.value.trx_trps||[]),ne=i([]),T=i(!1),ye=async()=>{u().loading_full=!0;const{data:e,error:t,status:_}=await O("/trx_load_cost_center",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{online_status:T.value},retry:0});if(u().loading_full=!1,_.value==="error"){C().trigger(t);return}ne.value=e.value.list_cost_center},H=i({field:"tanggal",by:"desc"}),l=i(-1),d=q(()=>n.value[l.value]),b=i({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),ke=()=>{v.like="";let e=JSON.parse(JSON.stringify(u()._tv.global_keyword));e!=""&&(v.like=`id:%${e}%,xto:%${e}%,jenis:%${e}%,pv_no:%${e}%,ticket_a_no:%${e}%,ticket_b_no:%${e}%,no_pol:%${e}%,supir:%${e}%,kernet:%${e}%,cost_center_code:%${e}%,cost_center_desc:%${e}%,pvr_no:%${e}%,tanggal:%${e}%,transition_target:%${e}%`),v.sort="",H.value.field&&(v.sort=H.value.field+":"+H.value.by),v.date_from=E.value.from?le(E.value.from).format("YYYY-MM-DD"):"",v.date_to=E.value.to?le(E.value.to).format("YYYY-MM-DD"):"",v.filter_model=JSON.stringify(u()._tv.filter_model)},re=async()=>{u().loading_full=!0,oe.value={},b.value.may_get_data=!1,v.page=b.value.page,v.page==1&&(n.value=[]),v.first_row&&delete v.first_row,v.page>1&&(v.first_row=JSON.stringify(n.value[0])),v.filter_status=w.value;const{data:e,error:t,status:_}=await O("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:v,retry:0});if(u().loading_full=!1,b.value.may_get_data=!0,_.value==="error"){C().trigger(t,oe);return}b.value.page==1?n.value=L(e.value.data):b.value.page>1&&(n.value=[...n.value,...L(e.value.data)]),e.value.data.length==0&&(b.value.is_last_record=!0),u()._tv.filter_box=!1},se=()=>{l.value=-1,b.value.page=1,b.value.is_last_record=!1,ke(),re()},I=i(!1),K=i(0),be=()=>{K.value=0,I.value=!0},{display:P}=vt(),ge=()=>{l.value==-1?P({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(K.value=n.value[l.value].id,I.value=!0)},Y=i(!1),J=i(0),G=i(!1),xe=()=>{l.value==-1?P({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(J.value=n.value[l.value].id,Y.value=!0,G.value=!1)},he=()=>{l.value==-1?P({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(J.value=n.value[l.value].id,Y.value=!0,G.value=!0)},W=i(!1),ie=i(0),we=e=>{ie.value=e,W.value=!0},Z=i(!1),de=i({}),F=i(!1),B=i(""),De=async()=>{F.value&&(F.value=!1)},Pe=()=>{l.value==-1?P({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(B.value="",de.value={id:n.value[l.value].id,"no pol":n.value[l.value].no_pol,tujuan:n.value[l.value].xto},F.value=!0)};X(()=>B.value,e=>{e.trim().length>0?Z.value=!0:Z.value=!1},{immediate:!1});const $e=async()=>{u().loading_full=!0;const e=new FormData;e.append("id",n.value[l.value].id),e.append("deleted_reason",B.value),e.append("_method","DELETE");const{data:t,error:_,status:$}=await O("/trx_trp",{method:"post",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},body:e,retry:0});if(u().loading_full=!1,$.value==="error"){C().trigger(_);return}let r={...n.value[l.value]};r.deleted=t.value.deleted,r.deleted_user=t.value.deleted_user,r.deleted_at=t.value.deleted_at,r.deleted_by=t.value.deleted_by,r.deleted_reason=t.value.deleted_reason,r.class_h=z(r),w.value!="all"?n.value.splice(l.value,1):n.value.splice(l.value,1,{...r}),l.value=-1,F.value=!1},Q=i(!1),ue=i({}),U=i(!1),N=i(""),Ae=async()=>{U.value&&(U.value=!1)},qe=()=>{l.value==-1?P({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(N.value="",ue.value={id:n.value[l.value].id,"no pol":n.value[l.value].no_pol,tujuan:n.value[l.value].xto},U.value=!0)};X(()=>N.value,e=>{e.trim().length>0?Q.value=!0:Q.value=!1},{immediate:!1});const Ce=async()=>{u().loading_full=!0;const e=new FormData;e.append("id",n.value[l.value].id),e.append("req_deleted_reason",N.value),e.append("_method","DELETE");const{data:t,error:_,status:$}=await O("/trx_trp_req_delete",{method:"post",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},body:e,retry:0});if(u().loading_full=!1,$.value==="error"){C().trigger(_);return}let r={...n.value[l.value]};r.req_deleted=t.value.req_deleted,r.req_deleted_user=t.value.req_deleted_user,r.req_deleted_by=t.value.req_deleted_by,r.req_deleted_at=t.value.req_deleted_at,r.req_deleted_reason=t.value.req_deleted_reason,r.class_h=z(r),w.value!="all"?n.value.splice(l.value,1):n.value.splice(l.value,1,{...r}),l.value=-1,U.value=!1},{printHtml:_e}=bt(),Oe=async()=>{if(l.value==-1){P({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"});return}u().loading_full=!0;const{data:e,error:t,status:_}=await O("/trx_trp_preview_file",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{id:n.value[l.value].id},retry:0});if(u().loading_full=!1,_.value==="error"){C().trigger(t);return}_e(e.value.html,318)},Te=async()=>{if(l.value==-1){P({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"});return}u().loading_full=!0;const{data:e,error:t,status:_}=await O("/trx_trp_preview_file_bt",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{id:n.value[l.value].id},retry:0});if(u().loading_full=!1,_.value==="error"){C().trigger(t);return}_e(e.value.html,318)},Se=async()=>{u().loading_full=!0;const e=new FormData;e.append("online_status",T.value);const{data:t,error:_,status:$}=await O("/trx_trp_do_gen_pvr",{method:"post",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},body:e,retry:0});if(u().loading_full=!1,$.value==="error"){C().trigger(_);return}t.value.forEach(r=>{let A=n.value.map(p=>p.id).indexOf(r.id);if(A!==-1){let p=n.value[A];p.pvr_id=r.pvr_id,p.pvr_no=r.pvr_no,p.pvr_total=r.pvr_total,p.pvr_had_detail=r.pvr_had_detail,p.updated_at=r.updated_at,n.value.splice(A,1,{...p})}}),P({show:!0,status:"Success",message:"Generate Or Update PVR Done"})},Me=async()=>{u().loading_full=!0;const e=new FormData;e.append("online_status",T.value);const{data:t,error:_,status:$}=await O("/trx_trp_do_update_pv",{method:"post",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},body:e,retry:0});if(u().loading_full=!1,$.value==="error"){C().trigger(_);return}t.value.data.forEach(r=>{let A=n.value.map(p=>p.id).indexOf(r.id);if(A!==-1){let p=n.value[A];p.pv_id=r.pv_id,p.pv_no=r.pv_no,p.pv_total=r.pv_total,p.pv_datetime=r.pv_datetime,p.updated_at=r.updated_at,n.value.splice(A,1,{...p})}}),P({show:!0,status:"Success",message:"Update PV Done"})},pe=i([{key:"no",label:"No",isai:!0},{key:"val",label:"APP",childs:[{key:"val",label:"Kasir",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val1",label:"Mandor",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"KTU/W",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val3",label:"Marketing",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val4",label:"Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val5",label:"SPV Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val6",label:"MGR Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]}]},{key:"id",label:"ID",filter_on:1,type:"number",sort:{priority:2,type:"desc"}},{key:"absen",label:"Absen"},{key:"tanggal",label:"U.Jalan Per",type:"date",dateformat:"DD-MM-Y",filter_on:1,sort:{priority:1,type:"desc"}},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"xto",label:"Tujuan",filter_on:1,type:"string"},{key:"tipe",label:"Tipe",filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK"]},{key:"amount",label:"Amount",class:" justify-end",filter_on:1,type:"number"},{key:"transition",label:"Peralihan",childs:[{key:"transition_type",label:"Type",type:"select",filter_on:1,select_item:["To","From"]},{key:"transition_target",label:"Target",type:"select",filter_on:1,select_item:u().list_pabrik}]},{key:"cost_center",label:"Cost Center",childs:[{key:"cost_center_code",label:"Code",type:"string",class:" justify-start",filter_on:1},{key:"cost_center_desc",label:"Desc",filter_on:1,type:"string"}]},{key:"pvr",label:"PVR",childs:[{key:"pvr_no",label:"No",filter_on:1,type:"string"},{key:"pvr_total",label:"Total",filter_on:1,type:"number"},{key:"pvr_had_detail",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"pv",label:"PV",childs:[{key:"pv_datetime",label:"Date",type:"date",dateformat:"DD-MM-Y",filter_on:1},{key:"pv_no",label:"No",filter_on:1,type:"string"},{key:"pv_total",label:"Total",filter_on:1,type:"number"}]},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"supir_rek_no",label:"No Rek Supir",filter_on:1,type:"string"},{key:"supir_rek_name",label:"Nama Rek Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"kernet_rek_no",label:"No Rek Kernet",filter_on:1,type:"string"},{key:"kernet_rek_name",label:"Nama Rek Kernet",filter_on:1,type:"string"},{key:"payment_method_name",label:"Payment Method Name",type:"string"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0,type:"string",filter_on:1}]),je=q(()=>["pv_not_done","all"].indexOf(w.value)>-1&&k().checkPermission("trp_trx.create")),Be=q(()=>l.value>-1&&k().checkPermission("trp_trx.view")),Ne=q(()=>l.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&[void 0,0].indexOf(d.value.val4)>-1&&[void 0,""].indexOf(d.value.pvr_id)>-1&&k().checkPermission("trp_trx.modify")),Fe=q(()=>l.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&([void 0,""].indexOf(d.value.pvr_id)>-1&&k().checkPermissions(["trp_trx.val","trp_trx.val1","trp_trx.val2"])||d.value.val3==0&&k().checkPermissions(["trp_trx.val3"])||d.value.val4==0&&k().checkPermissions(["trp_trx.val4"])||(d.value.val5==0&&k().checkPermissions(["trp_trx.val5"]))(d.value.val6==0&&k().checkPermissions(["trp_trx.val6"])))),Ue=q(()=>l.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&[void 0,""].indexOf(d.value.pvr_id)>-1&&k().checkPermission("trp_trx.remove")),Ve=q(()=>l.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&d.value.pvr_id!=""&&k().checkPermission("trp_trx.request_remove")),Re=q(()=>l.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&d.value.val==1&&k().checkPermission("trp_trx.preview_file")),Ee=q(()=>l.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&d.value.payment_method_id==2&&d.value.received_payment==1&&k().checkPermission("trp_trx.preview_file"));return(e,t)=>{const _=Ge,$=We,r=Ze,A=Qe,p=Xe,Ie=et,Ye=tt,ve=at,ze=lt,S=ot,M=nt,Le=rt,ce=st,He=it,Ke=dt,Je=ut;return s(),x("div",gt,[f(_,{title:"List Transaction"}),m("div",xt,[m("div",ht,[m("div",wt,[m("div",Dt,[ee(m("select",{class:"","onUpdate:modelValue":t[0]||(t[0]=a=>te(w)?w.value=a:null)},$t,512),[[ct,o(w)]])]),o(je)?(s(),x("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=a=>be())},[f($)])):h("",!0),o(Ne)?(s(),x("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=a=>ge())},[f(r)])):h("",!0),o(Be)?(s(),x("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[3]||(t[3]=a=>he())},[f(A)])):h("",!0),o(Ue)?(s(),x("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[4]||(t[4]=a=>Pe())},[f(p)])):h("",!0),o(Ve)?(s(),x("button",{key:4,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[5]||(t[5]=a=>qe())},[f(Ie)])):h("",!0),o(Fe)?(s(),x("button",{key:5,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[6]||(t[6]=a=>xe())},[f(Ye)])):h("",!0),o(Re)?(s(),x("button",{key:6,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[7]||(t[7]=a=>Oe())},[f(ve)])):h("",!0),o(Ee)?(s(),x("button",{key:7,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[8]||(t[8]=a=>Te())},[f(ve)])):h("",!0)]),m("div",At,[m("button",{type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:t[9]||(t[9]=a=>Se())}," Gen/Update PVR "),m("button",{type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:t[10]||(t[10]=a=>Me())}," Update PV "),m("div",{class:"m-1 card-border cursor-pointer",onClick:t[11]||(t[11]=a=>T.value=!o(T))},[qt,j(" : "),m("span",{class:mt(["font-bold",o(T)?"text-green-600":"text-red-600"])},V(o(T)?"ONLINE":"OFFLINE"),3)])])]),f(Le,{thead:o(pe),selected:o(l),onSetSelected:t[12]||(t[12]=a=>l.value=a),tbody:o(n),fnCallData:re,scrolling:o(b),onSetScrollingPage:t[13]||(t[13]=a=>o(b).page=a),onDoFilter:t[14]||(t[14]=a=>se())},{absen:y(({item:a,index:g})=>[a.trx_absens&&a.trx_absens.length>0?(s(),c(ze,{key:0,class:"cursor-pointer",onClick:Bt=>we(g)},null,8,["onClick"])):h("",!0)]),val:y(({item:a})=>[a.val?(s(),c(M,{key:1})):(s(),c(S,{key:0}))]),val1:y(({item:a})=>[m("div",Ct,[a.val1?(s(),c(M,{key:1})):(s(),c(S,{key:0})),a.absen_not_done&&a.absen_not_done.length>0?(s(),x("div",Ot,V(a.absen_not_done.join(",")),1)):h("",!0)])]),val2:y(({item:a})=>[a.val2?(s(),c(M,{key:1})):(s(),c(S,{key:0}))]),val3:y(({item:a})=>[a.val3?(s(),c(M,{key:1})):(s(),c(S,{key:0}))]),val4:y(({item:a})=>[a.val4?(s(),c(M,{key:1})):(s(),c(S,{key:0}))]),val5:y(({item:a})=>[a.val5?(s(),c(M,{key:1})):(s(),c(S,{key:0}))]),val6:y(({item:a})=>[a.val6?(s(),c(M,{key:1})):(s(),c(S,{key:0}))]),payment_method_name:y(({item:a})=>{var g;return[j(V((g=a.payment_method)==null?void 0:g.name),1)]}),pvr_had_detail:y(({item:a})=>[a.pvr_had_detail?(s(),c(M,{key:1})):(s(),c(S,{key:0}))]),deleted_by_username:y(({item:a})=>{var g;return[j(V((g=a.deleted_by)==null?void 0:g.username),1)]}),req_deleted_by_username:y(({item:a})=>{var g;return[j(V((g=a.req_deleted_by)==null?void 0:g.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])]),f(ce,{type:"delete",show:o(F),data:o(de),fnClose:De,fnConfirm:$e,enabledOk:o(Z)},{footer:y(()=>[j(" Masukkan Alasan Penghapusan: "),m("div",Tt,[ee(m("textarea",{"onUpdate:modelValue":t[15]||(t[15]=a=>te(B)?B.value=a:null)},null,512),[[me,o(B)]])])]),_:1},8,["show","data","enabledOk"]),f(ce,{type:"custome",show:o(U),data:o(ue),fnClose:Ae,fnConfirm:Ce,enabledOk:o(Q)},{words:y(()=>[j(" Data akan diproses dan "),St,j(", yakin untuk melanjutkan ? ")]),footer:y(()=>[j(" Masukkan Alasan Permintaan Penghapusan: "),m("div",Mt,[ee(m("textarea",{"onUpdate:modelValue":t[16]||(t[16]=a=>te(N)?N.value=a:null)},null,512),[[me,o(N)]])])]),_:1},8,["show","data","enabledOk"]),f(He,{show:o(I),fnClose:()=>{I.value=!1},fnLoadDBData:ye,id:o(K),p_data:o(n),list_cost_center:o(ne),online_status:o(T)},null,8,["show","fnClose","id","p_data","list_cost_center","online_status"]),f(Ke,{show:o(Y),fnClose:()=>{Y.value=!1},id:o(J),p_data:o(n),is_view:o(G)},null,8,["show","fnClose","id","p_data","is_view"]),f(Je,{show:o(W),fnClose:()=>{W.value=!1},index:o(ie),p_data:o(n)},null,8,["show","fnClose","index","p_data"])])}}};export{ka as default};