import He from"./Header.10161cb9.js";import Ke from"./Plus.edef8342.js";import Je from"./Eyes.52ca6953.js";import Ge from"./Delete.2fc758f5.js";import We from"./Void.007f8425.js";import Ze from"./Signature.26ed836c.js";import Qe from"./PrinterEye.4a875ac4.js";import Xe from"./Image.cda0d81d.js";import et from"./Line.034bf4e8.js";import tt from"./Check.efc6cff4.js";import at from"./TableView.31d54721.js";import{_ as lt}from"./PopupMini.vue.92e15439.js";import nt from"./trx_trp.f884aa7f.js";import ot from"./trx_trp_validasi.d9d5d8b6.js";import rt from"./trx_absen.4a04def5.js";import{r as i,j as Q,f as st,g as it,G as O,i as dt,A as u,c as f,b as g,a as h,m as X,q as ut,k as l,n as ee,l as y,d as x,C as _t,t as j,w as v,z as pt,B as T,o as r,D as c,v as me,H as vt,E as ct}from"./entry.0c87e920.js";import{u as S}from"./useMyFetch.3ae8d196.js";import{u as mt}from"./useDownload.174f4da2.js";import{u as k}from"./useUtils.e6bf8d11.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.ba6d34f4.js";import"./Adjust.a227107a.js";import"./TableHeaderEye.afe1b578.js";import"./Times.5a73ce15.js";import"./ClearAll.af715c68.js";import"./client-only.58fcc1dc.js";import"./ClearEach.7488c503.js";import"./CaretLeftDoubleBold.98ab1f96.js";import"./CaretLeftBold.55836158.js";import"./CaretRightBold.34fc8ddc.js";import"./CaretRightDoubleBold.b9369ac2.js";import"./Exclamation.6e924c5e.js";import"./HeaderPopup.vue.0516f5d4.js";import"./WidthMiniList.vue.625d0b97.js";import"./WidthMiniPart.vue.cace8665.js";const ft={class:"w-full h-full flex flex-col"},yt={class:"w-full flex grow flex-col overflow-auto h-0"},kt={class:"w-full flex justify-between flex-wrap"},bt={class:"grow flex"},gt={class:"m-1"},ht=vt('<option value="pv_not_done">Undone</option><option value="pv_done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),xt=[ht],wt={class:"flex"},Dt=h("span",{class:"text-xs"},"Mode",-1),Pt={key:0},$t={class:"w-full flex flex-col items-center justify-center"},At={key:2,class:"text-xs"},Ct={key:0},qt={key:0},Ot={class:"grow mb-5"},Tt=h("b",null,"tidak dapat dibatalkan lagi",-1),St={class:"grow mb-5"},fa={__name:"index",async setup(Mt){let R,te;const{$moment:ae}=ct(),z=e=>e.deleted==1?"!bg-red-400":e.pvr_id>0&&e.req_deleted==1?"!bg-yellow-300":e.absen_not_done&&e.absen_not_done.length>0?"!bg-gray-300":e.pv_id>0?"!bg-blue-300":"",I=e=>(e.map(t=>{t.class_h=z(t)}),e),D=i("pv_not_done");Q(()=>D.value,e=>{pe.value.map(t=>{let _=["deleted_by_username","deleted_at","deleted_reason","req_deleted_by_username","req_deleted_at","req_deleted_reason"].indexOf(t.key)>-1;return["all","deleted","req_deleted"].indexOf(e)>-1?_&&(t.tbl_show=1):_&&(t.tbl_show=0),t}),re()},{immediate:!1});const m={};m._TimeZoneOffset=new Date().getTimezoneOffset(),m.sort="tanggal:desc";const le=i({}),E=i({from:"",to:""}),P=st("token"),{data:fe}=([R,te]=it(async()=>pt(async()=>{u().loading_full=!0;let e=[];const[t,_]=await Promise.all([S("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${P.value}`,Accept:"application/json"},params:{filter_status:D},retry:0})]);return t.status.value!=="error"&&(e=I(t.data.value.data)),t.status.value==="error"?(T().trigger(t.error),{trx_trps:e}):(u().loading_full=!1,{trx_trps:e})},"$pFLmKcrKj9")),R=await R,te(),R),o=i(fe.value.trx_trps||[]),ne=i([]),M=i(!1),ye=async()=>{u().loading_full=!0;const{data:e,error:t,status:_}=await S("/trx_load_cost_center",{method:"get",headers:{Authorization:`Bearer ${P.value}`,Accept:"application/json"},params:{online_status:M.value},retry:0});if(u().loading_full=!1,_.value==="error"){T().trigger(t);return}ne.value=e.value.list_cost_center},L=i({field:"tanggal",by:"desc"}),n=i(-1),d=O(()=>o.value[n.value]),w=i({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),ke=()=>{m.like="";let e=JSON.parse(JSON.stringify(u()._tv.global_keyword));e!=""&&(m.like=`id:%${e}%,xto:%${e}%,jenis:%${e}%,pv_no:%${e}%,ticket_a_no:%${e}%,ticket_b_no:%${e}%,no_pol:%${e}%,supir:%${e}%,kernet:%${e}%,cost_center_code:%${e}%,cost_center_desc:%${e}%,pvr_no:%${e}%,tanggal:%${e}%,transition_target:%${e}%`),m.sort="",L.value.field&&(m.sort=L.value.field+":"+L.value.by),m.date_from=E.value.from?ae(E.value.from).format("YYYY-MM-DD"):"",m.date_to=E.value.to?ae(E.value.to).format("YYYY-MM-DD"):"",m.filter_model=JSON.stringify(u()._tv.filter_model)},oe=async()=>{u().loading_full=!0,le.value={},w.value.may_get_data=!1,m.page=w.value.page,m.page==1&&(o.value=[]),m.first_row&&delete m.first_row,m.page>1&&(m.first_row=JSON.stringify(o.value[0])),m.filter_status=D.value;const{data:e,error:t,status:_}=await S("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${P.value}`,Accept:"application/json"},params:m,retry:0});if(u().loading_full=!1,w.value.may_get_data=!0,_.value==="error"){T().trigger(t,le);return}w.value.page==1?o.value=I(e.value.data):w.value.page>1&&(o.value=[...o.value,...I(e.value.data)]),e.value.data.length==0&&(w.value.is_last_record=!0),u()._tv.filter_box=!1},re=()=>{n.value=-1,w.value.page=1,w.value.is_last_record=!1,ke(),oe()},H=i(!1),se=i(0),be=()=>{se.value=0,H.value=!0},{display:U}=dt(),Y=i(!1),K=i(0),J=i(!1),ge=()=>{n.value==-1?U({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(K.value=o.value[n.value].id,Y.value=!0,J.value=!1)},he=()=>{n.value==-1?U({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(K.value=o.value[n.value].id,Y.value=!0,J.value=!0)},G=i(!1),ie=i(0),xe=e=>{ie.value=e,G.value=!0},W=i(!1),de=i({}),V=i(!1),B=i(""),we=async()=>{V.value&&(V.value=!1)},De=()=>{n.value==-1?U({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(B.value="",de.value={id:o.value[n.value].id,"no pol":o.value[n.value].no_pol,tujuan:o.value[n.value].xto},V.value=!0)};Q(()=>B.value,e=>{e.trim().length>0?W.value=!0:W.value=!1},{immediate:!1});const Pe=async()=>{u().loading_full=!0;const e=new FormData;e.append("id",o.value[n.value].id),e.append("deleted_reason",B.value),e.append("_method","DELETE");const{data:t,error:_,status:$}=await S("/trx_trp",{method:"post",headers:{Authorization:`Bearer ${P.value}`,Accept:"application/json"},body:e,retry:0});if(u().loading_full=!1,$.value==="error"){T().trigger(_);return}let s={...o.value[n.value]};s.deleted=t.value.deleted,s.deleted_user=t.value.deleted_user,s.deleted_at=t.value.deleted_at,s.deleted_by=t.value.deleted_by,s.deleted_reason=t.value.deleted_reason,s.class_h=z(s),D.value!="all"?o.value.splice(n.value,1):o.value.splice(n.value,1,{...s}),n.value=-1,V.value=!1},Z=i(!1),ue=i({}),F=i(!1),N=i(""),$e=async()=>{F.value&&(F.value=!1)},Ae=()=>{n.value==-1?U({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(N.value="",ue.value={id:o.value[n.value].id,"no pol":o.value[n.value].no_pol,tujuan:o.value[n.value].xto},F.value=!0)};Q(()=>N.value,e=>{e.trim().length>0?Z.value=!0:Z.value=!1},{immediate:!1});const Ce=async()=>{u().loading_full=!0;const e=new FormData;e.append("id",o.value[n.value].id),e.append("req_deleted_reason",N.value),e.append("_method","DELETE");const{data:t,error:_,status:$}=await S("/trx_trp_req_delete",{method:"post",headers:{Authorization:`Bearer ${P.value}`,Accept:"application/json"},body:e,retry:0});if(u().loading_full=!1,$.value==="error"){T().trigger(_);return}let s={...o.value[n.value]};s.req_deleted=t.value.req_deleted,s.req_deleted_user=t.value.req_deleted_user,s.req_deleted_by=t.value.req_deleted_by,s.req_deleted_at=t.value.req_deleted_at,s.req_deleted_reason=t.value.req_deleted_reason,s.class_h=z(s),D.value!="all"?o.value.splice(n.value,1):o.value.splice(n.value,1,{...s}),n.value=-1,F.value=!1},{printHtml:_e}=mt(),qe=async()=>{if(n.value==-1){U({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"});return}u().loading_full=!0;const{data:e,error:t,status:_}=await S("/trx_trp_preview_file",{method:"get",headers:{Authorization:`Bearer ${P.value}`,Accept:"application/json"},params:{id:o.value[n.value].id},retry:0});if(u().loading_full=!1,_.value==="error"){T().trigger(t);return}_e(e.value.html,318)},Oe=async()=>{if(n.value==-1){U({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"});return}u().loading_full=!0;const{data:e,error:t,status:_}=await S("/trx_trp_preview_file_bt",{method:"get",headers:{Authorization:`Bearer ${P.value}`,Accept:"application/json"},params:{id:o.value[n.value].id},retry:0});if(u().loading_full=!1,_.value==="error"){T().trigger(t);return}_e(e.value.html,318)},Te=async()=>{u().loading_full=!0;const e=new FormData;e.append("online_status",M.value);const{data:t,error:_,status:$}=await S("/trx_trp_do_gen_pvr",{method:"post",headers:{Authorization:`Bearer ${P.value}`,Accept:"application/json"},body:e,retry:0});if(u().loading_full=!1,$.value==="error"){T().trigger(_);return}t.value.forEach(s=>{let A=o.value.map(p=>p.id).indexOf(s.id);if(A!==-1){let p=o.value[A];p.pvr_id=s.pvr_id,p.pvr_no=s.pvr_no,p.pvr_total=s.pvr_total,p.pvr_had_detail=s.pvr_had_detail,p.updated_at=s.updated_at,o.value.splice(A,1,{...p})}}),U({show:!0,status:"Success",message:"Generate Or Update PVR Done"})},Se=async()=>{u().loading_full=!0;const e=new FormData;e.append("online_status",M.value);const{data:t,error:_,status:$}=await S("/trx_trp_do_update_pv",{method:"post",headers:{Authorization:`Bearer ${P.value}`,Accept:"application/json"},body:e,retry:0});if(u().loading_full=!1,$.value==="error"){T().trigger(_);return}t.value.data.forEach(s=>{let A=o.value.map(p=>p.id).indexOf(s.id);if(A!==-1){let p=o.value[A];p.pv_id=s.pv_id,p.pv_no=s.pv_no,p.pv_total=s.pv_total,p.pv_datetime=s.pv_datetime,p.updated_at=s.updated_at,o.value.splice(A,1,{...p})}}),U({show:!0,status:"Success",message:"Update PV Done"})},pe=i([{key:"no",label:"No",isai:!0},{key:"val",label:"APP",childs:[{key:"val",label:"Kasir",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val1",label:"Mandor",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"KTU/W",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val3",label:"Marketing",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val4",label:"Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val5",label:"SPV Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val6",label:"MGR Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]}]},{key:"id",label:"ID",filter_on:1,type:"number",sort:{priority:2,type:"desc"}},{key:"absen",label:"Absen"},{key:"tanggal",label:"U.Jalan Per",type:"date",dateformat:"DD-MM-Y",filter_on:1,sort:{priority:1,type:"desc"}},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"xto",label:"Tujuan",filter_on:1,type:"string"},{key:"tipe",label:"Tipe",filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK"]},{key:"amount",label:"Amount",class:" justify-end",filter_on:1,type:"number"},{key:"transition",label:"Peralihan",childs:[{key:"transition_type",label:"Type",type:"select",filter_on:1,select_item:["To","From"]},{key:"transition_target",label:"Target",type:"select",filter_on:1,select_item:u().list_pabrik}]},{key:"cost_center",label:"Cost Center",childs:[{key:"cost_center_code",label:"Code",type:"string",class:" justify-start",filter_on:1},{key:"cost_center_desc",label:"Desc",filter_on:1,type:"string"}]},{key:"pvr",label:"PVR",childs:[{key:"pvr_no",label:"No",filter_on:1,type:"string"},{key:"pvr_total",label:"Total",filter_on:1,type:"number"},{key:"pvr_had_detail",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"pv",label:"PV",childs:[{key:"pv_datetime",label:"Date",type:"date",dateformat:"DD-MM-Y",filter_on:1},{key:"pv_no",label:"No",filter_on:1,type:"string"},{key:"pv_total",label:"Total",filter_on:1,type:"number"},{key:"pv_complete",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"supir_rek_no",label:"No Rek Supir",filter_on:1,type:"string"},{key:"supir_rek_name",label:"Nama Rek Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"kernet_rek_no",label:"No Rek Kernet",filter_on:1,type:"string"},{key:"kernet_rek_name",label:"Nama Rek Kernet",filter_on:1,type:"string"},{key:"payment_method_name",label:"Payment Method Name",type:"string"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0,type:"string",filter_on:1}]),Me=O(()=>["pv_not_done","all"].indexOf(D.value)>-1&&k().checkPermission("trp_trx.create")),Ue=O(()=>n.value>-1&&k().checkPermission("trp_trx.view"));O(()=>n.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&[void 0,0].indexOf(d.value.val4)>-1&&[void 0,""].indexOf(d.value.pvr_id)>-1&&k().checkPermission("trp_trx.modify"));const je=O(()=>n.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&([void 0,""].indexOf(d.value.pvr_id)>-1&&k().checkPermissions(["trp_trx.val","trp_trx.val1","trp_trx.val2"])||d.value.val3==0&&k().checkPermissions(["trp_trx.val3"])||d.value.val4==0&&k().checkPermissions(["trp_trx.val4"])||d.value.val5==0&&k().checkPermissions(["trp_trx.val5"])||d.value.val6==0&&k().checkPermissions(["trp_trx.val6"]))),Be=O(()=>n.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&[void 0,""].indexOf(d.value.pvr_id)>-1&&k().checkPermission("trp_trx.remove")),Ne=O(()=>n.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&d.value.pvr_id!=""&&k().checkPermission("trp_trx.request_remove")),Ve=O(()=>n.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&d.value.val==1&&k().checkPermission("trp_trx.preview_file")),Fe=O(()=>n.value>-1&&[void 0,0].indexOf(d.value.deleted)>-1&&[void 0,0].indexOf(d.value.req_deleted)>-1&&d.value.payment_method_id==2&&d.value.received_payment==1&&k().checkPermission("trp_trx.preview_file"));return(e,t)=>{const _=He,$=Ke,s=Je,A=Ge,p=We,Re=Ze,ve=Qe,Ee=Xe,C=et,q=tt,Ye=at,ce=lt,ze=nt,Ie=ot,Le=rt;return r(),f("div",ft,[g(_,{title:"List Transaction"}),h("div",yt,[h("div",kt,[h("div",bt,[h("div",gt,[X(h("select",{class:"","onUpdate:modelValue":t[0]||(t[0]=a=>ee(D)?D.value=a:null)},xt,512),[[ut,l(D)]])]),l(Me)?(r(),f("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=a=>be())},[g($)])):y("",!0),l(Ue)?(r(),f("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=a=>he())},[g(s)])):y("",!0),l(Be)?(r(),f("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[3]||(t[3]=a=>De())},[g(A)])):y("",!0),l(Ne)?(r(),f("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[4]||(t[4]=a=>Ae())},[g(p)])):y("",!0),l(je)?(r(),f("button",{key:4,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[5]||(t[5]=a=>ge())},[g(Re)])):y("",!0),l(Ve)?(r(),f("button",{key:5,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[6]||(t[6]=a=>qe())},[g(ve)])):y("",!0),l(Fe)?(r(),f("button",{key:6,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[7]||(t[7]=a=>Oe())},[g(ve)])):y("",!0)]),h("div",wt,[("useUtils"in e?e.useUtils:l(k))().checkPermission("trp_trx.generate_pvr")?(r(),f("button",{key:0,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:t[8]||(t[8]=a=>Te())}," Gen/Update PVR ")):y("",!0),("useUtils"in e?e.useUtils:l(k))().checkPermission("trp_trx.get_pv")?(r(),f("button",{key:1,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:t[9]||(t[9]=a=>Se())}," Update PV ")):y("",!0),("useUtils"in e?e.useUtils:l(k))().checkPermissions(["trp_trx.generate_pvr","trp_trx.generate_pv","trp_trx.get_pv"])?(r(),f("div",{key:2,class:"m-1 card-border cursor-pointer",onClick:t[10]||(t[10]=a=>M.value=!l(M))},[Dt,x(" : "),h("span",{class:_t(["font-bold",l(M)?"text-green-600":"text-red-600"])},j(l(M)?"ONLINE":"OFFLINE"),3)])):y("",!0)])]),g(Ye,{thead:l(pe),selected:l(n),onSetSelected:t[11]||(t[11]=a=>n.value=a),tbody:l(o),fnCallData:oe,scrolling:l(w),onSetScrollingPage:t[12]||(t[12]=a=>l(w).page=a),onDoFilter:t[13]||(t[13]=a=>re())},{id:v(({item:a})=>[x(j(a.id),1),a.potongan&&a.potongan.length>0?(r(),f("span",Pt,"*")):y("",!0)]),absen:v(({item:a,index:b})=>[a.trx_absens&&a.trx_absens.length>0?(r(),c(Ee,{key:0,class:"cursor-pointer",onClick:Ut=>xe(b)},null,8,["onClick"])):y("",!0)]),val:v(({item:a})=>[a.val?(r(),c(q,{key:1})):(r(),c(C,{key:0}))]),val1:v(({item:a})=>[h("div",$t,[a.val1?(r(),c(q,{key:1})):(r(),c(C,{key:0})),a.absen_not_done&&a.absen_not_done.length>0?(r(),f("div",At,j(a.absen_not_done.join(",")),1)):y("",!0)])]),val2:v(({item:a})=>[a.val2?(r(),c(q,{key:1})):(r(),c(C,{key:0}))]),val3:v(({item:a})=>[a.val3?(r(),c(q,{key:1})):(r(),c(C,{key:0}))]),val4:v(({item:a})=>[a.val4?(r(),c(q,{key:1})):(r(),c(C,{key:0}))]),val5:v(({item:a})=>[a.val5?(r(),c(q,{key:1})):(r(),c(C,{key:0}))]),val6:v(({item:a})=>[a.val6?(r(),c(q,{key:1})):(r(),c(C,{key:0}))]),payment_method_name:v(({item:a})=>{var b;return[x(j((b=a.payment_method)==null?void 0:b.name),1)]}),pvr_had_detail:v(({item:a})=>[a.pvr_had_detail?(r(),c(q,{key:1})):(r(),c(C,{key:0}))]),pv_complete:v(({item:a})=>[a.pv_complete?(r(),c(q,{key:1})):(r(),c(C,{key:0}))]),deleted_by_username:v(({item:a})=>{var b;return[x(j((b=a.deleted_by)==null?void 0:b.username),1)]}),req_deleted_by_username:v(({item:a})=>{var b;return[x(j((b=a.req_deleted_by)==null?void 0:b.username),1)]}),supir:v(({item:a})=>[x(j(a.supir)+" ",1),a.potongan&&a.potongan.length>0&&a.potongan.map(b=>b.potongan_mst.employee_id).indexOf(a.supir_id)>-1?(r(),f("span",Ct," * ")):y("",!0)]),kernet:v(({item:a})=>[x(j(a.kernet)+" ",1),a.potongan&&a.potongan.length>0&&a.potongan.map(b=>b.potongan_mst.employee_id).indexOf(a.kernet_id)>-1?(r(),f("span",qt," * ")):y("",!0)]),_:2},1032,["thead","selected","tbody","scrolling"])]),g(ce,{type:"delete",show:l(V),data:l(de),fnClose:we,fnConfirm:Pe,enabledOk:l(W)},{footer:v(()=>[x(" Masukkan Alasan Penghapusan: "),h("div",Ot,[X(h("textarea",{"onUpdate:modelValue":t[14]||(t[14]=a=>ee(B)?B.value=a:null)},null,512),[[me,l(B)]])])]),_:1},8,["show","data","enabledOk"]),g(ce,{type:"custome",show:l(F),data:l(ue),fnClose:$e,fnConfirm:Ce,enabledOk:l(Z)},{words:v(()=>[x(" Data akan diproses dan "),Tt,x(", yakin untuk melanjutkan ? ")]),footer:v(()=>[x(" Masukkan Alasan Permintaan Penghapusan: "),h("div",St,[X(h("textarea",{"onUpdate:modelValue":t[15]||(t[15]=a=>ee(N)?N.value=a:null)},null,512),[[me,l(N)]])])]),_:1},8,["show","data","enabledOk"]),g(ze,{show:l(H),fnClose:()=>{H.value=!1},fnLoadDBData:ye,id:l(se),p_data:l(o),list_cost_center:l(ne),online_status:l(M)},null,8,["show","fnClose","id","p_data","list_cost_center","online_status"]),g(Ie,{show:l(Y),fnClose:()=>{Y.value=!1},id:l(K),p_data:l(o),is_view:l(J)},null,8,["show","fnClose","id","p_data","is_view"]),g(Le,{show:l(G),fnClose:()=>{G.value=!1},index:l(ie),p_data:l(o)},null,8,["show","fnClose","index","p_data"])])}}};export{fa as default};