import Re from"./Header.05eb6989.js";import Je from"./Edit.e73e0c70.js";import Le from"./Eyes.444fcd7a.js";import Ke from"./Void.b24d2dce.js";import Ge from"./Signature.353260ec.js";import Xe from"./Cog.10d323ac.js";import Ze from"./Image.8e2f6ee6.js";import Qe from"./Line.8f9f2edb.js";import We from"./Check.2d42d4cf.js";import et from"./TableView.376a53af.js";import{_ as tt}from"./PopupMini.vue.01d27fb1.js";import at from"./trx_trp_ticket.5b8897cd.js";import lt from"./trx_trp_ticket_validasi.d304a751.js";import ot from"./trx_absen.042e596d.js";import st from"./trx_trp_ticket_over.01fc17e4.js";import rt from"./Times.55715afb.js";import{_ as it}from"./client-only.8501d3fb.js";import{_ as nt}from"./SelectMulti.vue.cbefccf3.js";import{r as n,f as _t,g as ut,h as ct,i as q,B as dt,j as ve,s as pt,x as f,I as ft,c as D,b as d,a as r,k as mt,v as vt,l as s,m as kt,n as T,w as k,q as bt,y as A,o as b,z as M,d as y,t as C,H as yt,G as ht}from"./entry.d93bf7b2.js";import{u as B}from"./useUtils.c9e9d636.js";import{u as $}from"./useMyFetch.443aecc9.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.e8fb6a80.js";import"./Adjust.449c88a3.js";import"./TableHeaderEye.75025c37.js";import"./ClearAll.93037d48.js";import"./ClearEach.1bcdc6a2.js";import"./CaretLeftDoubleBold.001723a5.js";import"./CaretLeftBold.df79a12c.js";import"./CaretRightBold.47e3cfa0.js";import"./CaretRightDoubleBold.87a9381c.js";import"./Exclamation.cb47dc47.js";import"./HeaderPopup.vue.36eb726c.js";import"./InputPointFormat.vue.fa749320.js";import"./Refresh.a0a98430.js";const gt={class:"w-full h-full flex flex-col"},xt={class:"w-full flex grow flex-col overflow-auto h-0"},wt={class:"w-full flex justify-between flex-wrap"},Dt={class:"grow flex"},Tt={class:"m-1"},Ct=yt('<option value="ticket_not_done">Undone</option><option value="ticket_done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),$t=[Ct],St={class:"flex"},At=r("b",null,"tidak dapat dibatalkan lagi",-1),Mt={key:0,class:"w-full h-full flex items-center justify-center fixed top-0 left-0 z-20 p-3",style:{"background-color":"rgba(255,255,255,0.9)"}},Bt={class:"relative",style:{width:"95%",height:"90%"}},jt={class:"absolute -top-7 right-0 bg-white",style:{position:"absolute",padding:"5px 10px",border:"solid 1px #ccc","border-bottom":"none","border-top-right-radius":"5px","border-top-left-radius":"5px"}},Nt={class:"w-full h-full flex flex-col items-center justify-content-center bg-white"},Pt={class:"w-full p-1"},qt={class:"w-full p-1 bg-gray-200"},Ft=r("div",{class:"w-full text-blue-600 font-bold"}," Set Date For Load Data ",-1),Ot={class:"w-full grid grid-cols-2 grid-rows-1 gap-1"},Vt={class:"flex flex-col flex-wrap p-1"},Yt=r("label",{for:""},"From",-1),Ht={class:"grow"},zt={class:"flex flex-col flex-wrap p-1"},Et=r("label",{for:""},"To",-1),It={class:"grow"},Ut={key:1,class:"w-full h-full flex items-center justify-center fixed top-0 left-0 z-10 p-3",style:{"background-color":"rgba(255,255,255,0.9)"}},Rt={class:"relative",style:{border:"solid 1px #ccc"}},Jt={class:"absolute -top-7 right-0 bg-white",style:{position:"absolute",padding:"5px 10px",border:"solid 1px #ccc","border-bottom":"none","border-top-right-radius":"5px","border-top-left-radius":"5px"}},Lt={class:"w-full h-full flex flex-col items-center justify-content-center bg-white"},Kt={class:"w-full p-1"},Gt={class:"w-full p-1"},Xt=r("div",{class:"w-full text-gray-600 font-bold text-center"}," Set Mobil Yang Tidak Di Izinkan Untuk Di Update Tiketnya ",-1),Zt={class:"w-full"},Qt={class:"w-full grid grid-cols-2 gap-1 p-1 mt-5"},Fa={__name:"ticket",async setup(Wt){let F,ae;const{$moment:O}=ht(),{pointFormat:le}=B(),oe=e=>e.deleted==1?"!bg-red-400":e.req_deleted==1?"!bg-yellow-300":e.val_ticket==1&&(["CPO","PK"].indexOf(e.jenis)>-1&&e.ticket_a_id!=""&&e.ticket_b_bruto!=""&&e.ticket_b_tara!=""&&e.ticket_b_netto!=""&&e.ticket_b_in_at!=""&&e.ticket_b_out_at!=""||e.jenis=="TBS"&&e.ticket_a_id!=""&&e.ticket_b_id!=""||e.jenis=="TBSK"&&e.ticket_b_id!=""||e.ticket_note!="")?"!bg-blue-300":"",E=e=>(e.map(t=>{t.class_h=oe(t)}),e);let I=n({clearCheckBox:!1});const S=n("ticket_not_done");_t(()=>S.value,e=>{ne()},{immediate:!1});const m={};m._TimeZoneOffset=new Date().getTimezoneOffset(),m.sort="tanggal:desc";const se=n({}),V=n({from:"",to:""}),x=ut("token"),{data:U}=([F,ae]=ct(async()=>bt(async()=>{f().loading_full=!0;let e=[],t=[],u=[];const[c,l,p]=await Promise.all([$("/trx_trp_tickets",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:{filter_status:S},retry:0}),$("/vehicles_available",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},retry:0}),$("/temp_data/vehiclesAllowedUpdateTicket",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},retry:0})]);return c.status.value!=="error"&&(e=E(c.data.value.data)),c.status.value==="error"?(A().trigger(c.error),{trx_trps:e}):(l.status.value!=="error"&&(t=l.data.value.data),p.status.value!=="error"&&(u=p.data.value.data),f().loading_full=!1,{trx_trps:e,list_vehicle:t,vehicles_allowed:u})},"$X4xCu6yBOs")),F=await F,ae(),F),i=n(U.value.trx_trps||[]),R=n([]);U.value.list_vehicle.forEach(e=>{R.value.push({id:e.id,name:e.no_pol,title:"",checked:U.value.vehicles_allowed.indexOf(e.id)>-1})});const re=n([]),ke=async(e,t="")=>{f().loading_full=!0;let u=v.value.from?O(v.value.from).format("Y-MM-DD"):"",c=v.value.to?O(v.value.to).format("Y-MM-DD"):"";const{data:l,error:p,status:o}=await $("/trx_load_for_trp",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:{jenis:e,from:u,to:c,transition_target:t},retry:0});if(f().loading_full=!1,o.value==="error"){A().trigger(p);return}re.value=l.value.list_ticket},J=n({field:"tanggal",by:"desc"}),_=n(-1),w=q(()=>i.value[_.value]),h=n({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),be=()=>{m.like="";let e=JSON.parse(JSON.stringify(f()._tv.global_keyword));e!=""&&(m.like=`id:%${e}%,xto:%${e}%,jenis:%${e}%,pv_no:%${e}%,ticket_a_no:%${e}%,ticket_b_no:%${e}%,no_pol:%${e}%,supir:%${e}%,kernet:%${e}%,cost_center_code:%${e}%,cost_center_desc:%${e}%,pvr_no:%${e}%,tanggal:%${e}%,transition_target:%${e}%,uj_asst_opt:%${e}%`),m.sort="",J.value.field&&(m.sort=J.value.field+":"+J.value.by),m.date_from=V.value.from?O(V.value.from).format("YYYY-MM-DD"):"",m.date_to=V.value.to?O(V.value.to).format("YYYY-MM-DD"):"",m.filter_model=JSON.stringify(f()._tv.filter_model)},ie=async()=>{f().loading_full=!0,se.value={},h.value.may_get_data=!1,m.page=h.value.page,m.page==1&&(i.value=[]),m.first_row&&delete m.first_row,m.page>1&&(m.first_row=JSON.stringify(i.value[0])),m.filter_status=S.value;const{data:e,error:t,status:u}=await $("/trx_trp_tickets",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:m,retry:0});if(f().loading_full=!1,h.value.may_get_data=!0,u.value==="error"){A().trigger(t,se);return}h.value.page==1?i.value=E(e.value.data):h.value.page>1&&(i.value=[...i.value,...E(e.value.data)]),e.value.data.length==0&&(h.value.is_last_record=!0),f()._tv.filter_box=!1},ne=()=>{_.value=-1,h.value.page=1,h.value.is_last_record=!1,be(),ie()};dt();const L=n(!1),_e=n(0),{display:j}=ve();pt(ve());const ye=()=>{_.value==-1?j({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(_e.value=i.value[_.value].id,L.value=!0)},Y=n(!1),K=n(0),G=n(!1),he=()=>{_.value==-1?j({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(K.value=i.value[_.value].id,Y.value=!0,G.value=!1)},ge=()=>{_.value==-1?j({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(K.value=i.value[_.value].id,Y.value=!0,G.value=!0)},X=n(!1),ue=n(0),xe=e=>{ue.value=e,X.value=!0},ce=n({}),N=n(!1),we=n(""),De=async()=>{N.value&&(N.value=!1)},Te=()=>{var e;_.value==-1?j({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(we.value="",ce.value={id:i.value[_.value].id,"no pol":i.value[_.value].no_pol,tujuan:i.value[_.value].xto,permintaan:(e=i.value[_.value].req_deleted_by)==null?void 0:e.username,alasan:i.value[_.value].req_deleted_reason},N.value=!0)},Ce=async()=>{f().loading_full=!0;const e=new FormData;e.append("id",i.value[_.value].id),e.append("_method","DELETE");const{data:t,error:u,status:c}=await $("/trx_trp_approve_req_delete",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:e,retry:0});if(f().loading_full=!1,c.value==="error"){A().trigger(u);return}let l={...i.value[_.value]};l.deleted=t.value.deleted,l.deleted_user=t.value.deleted_user,l.deleted_at=t.value.deleted_at,l.deleted_by=t.value.deleted_by,l.deleted_reason=t.value.deleted_reason,l.class_h=oe(l),S.value!="all"?i.value.splice(_.value,1):i.value.splice(_.value,1,{...l}),_.value=-1,N.value=!1},$e=async()=>{f().loading_full=!0;const e=new FormData;e.append("ids",JSON.stringify(P.value)),e.append("_method","PUT");const{data:t,error:u,status:c}=await $("/trx_trp_val_tickets",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:e,retry:0});if(f().loading_full=!1,c.value==="error"){A().trigger(u);return}t.value.val_lists.forEach(l=>{let p=i.value.map(o=>o.id).indexOf(l.id);if(p>-1){let o=i.value[p];o.val_ticket=l.val_ticket,o.val_ticket_by=l.val_ticket_by,o.val_ticket_at=l.val_ticket_at,o.updated_at=l.updated_at,i.value.splice(p,1,{...o})}}),I.value.clearCheckBox=!0},Se=async()=>{f().loading_full=!0;const e=new FormData;e.append("ids",JSON.stringify(P.value)),e.append("_method","PUT");const{data:t,error:u,status:c}=await $("/trx_trp_clear_tickets",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:e,retry:0});if(f().loading_full=!1,c.value==="error"){A().trigger(u);return}t.value.clear_lists.forEach(l=>{let p=i.value.map(o=>o.id).indexOf(l.id);if(p>-1){let o=i.value[p];o.ticket_a_id=l.ticket_a_id,o.ticket_a_no=l.ticket_a_no,o.ticket_b_id=l.ticket_b_id,o.ticket_b_no=l.ticket_b_no,o.updated_at=l.updated_at,i.value.splice(p,1,{...o})}}),I.value.clearCheckBox=!0},Z=n(!1),Ae=e=>{Z.value=!0},H=n(!1),v=n({from:new Date().setDate(new Date().getDate()-3),to:new Date}),de=e=>{e=="from"?v.value.from-v.value.to>0&&(v.value.from=v.value.to):v.value.to-v.value.from<0&&(v.value.to=v.value.from)},Me=async()=>{f().loading_full=!0;const e=new FormData;e.append("vehicles",JSON.stringify(R.value.filter(l=>l.checked).map(l=>l.id)));const{data:t,error:u,status:c}=await $("/trx_trp_do_update_ticket",{method:"post",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:e,retry:0});if(f().loading_full=!1,c.value==="error"){A().trigger(u);return}t.value.data.forEach(l=>{let p=i.value.map(o=>o.id).indexOf(l.id);if(p!==-1){let o=i.value[p];o.ticket_a_id=l.ticket_a_id,o.ticket_a_no=l.ticket_a_no,o.ticket_a_bruto=l.ticket_a_bruto,o.ticket_a_tara=l.ticket_a_tara,o.ticket_a_netto=l.ticket_a_netto,o.ticket_a_supir=l.ticket_a_supir,o.ticket_a_no_pol=l.ticket_a_no_pol,o.ticket_a_in_at=l.ticket_a_in_at,o.ticket_a_out_at=l.ticket_a_out_at,o.ticket_b_id=l.ticket_b_id,o.ticket_b_no=l.ticket_b_no,o.ticket_b_bruto=l.ticket_b_bruto,o.ticket_b_tara=l.ticket_b_tara,o.ticket_b_netto=l.ticket_b_netto,o.ticket_b_supir=l.ticket_b_supir,o.ticket_b_no_pol=l.ticket_b_no_pol,o.ticket_b_in_at=l.ticket_b_in_at,o.ticket_b_out_at=l.ticket_b_out_at,o.updated_at=l.updated_at,i.value.splice(p,1,{...o})}}),j({show:!0,status:"Success",message:"Update PV Done"})},P=n([]),Be=n([{key:"cb",label:"",checkbox:"id"},{key:"no",label:"No",isai:!0},{key:"val_ticket",label:"Logistik",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"tanggal",label:"U.Jalan Per",type:"date",dateformat:"DD-MM-Y",filter_on:1,sort:{priority:1,type:"desc"}},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"xto",label:"Tujuan",filter_on:1,type:"string"},{key:"uj_asst_opt",label:"Info",filter_on:1,type:"select",select_item:["DENGAN KERNET","TANPA KERNET"]},{key:"tipe",label:"Tipe",filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK"]},{key:"amount",label:"Amount",class:" justify-end",filter_on:1,type:"number"},{key:"transition",label:"Peralihan",childs:[{key:"transition_type",label:"Type",type:"select",filter_on:1,select_item:["To","From"]},{key:"transition_target",label:"Target",type:"select",filter_on:1,select_item:f().list_pabrik}]},{key:"ticket_a",label:"Ticket A",childs:[{key:"ticket_a_no",label:"No",filter_on:1,type:"string"},{key:"ticket_a_bruto",label:"Bruto",filter_on:1,type:"number"},{key:"ticket_a_tara",label:"Tara",filter_on:1,type:"number"},{key:"ticket_a_netto",label:"Netto",filter_on:1,type:"number"},{key:"ticket_a_supir",label:"Supir",filter_on:1,type:"string"},{key:"ticket_a_no_pol",label:"No Pol",filter_on:1,type:"string"},{key:"ticket_a_in_at",label:"In At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"ticket_a_out_at",label:"Out At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1}]},{key:"ticket_b",label:"Ticket B",childs:[{key:"ticket_b_no",label:"No",filter_on:1,type:"string"},{key:"ticket_b_bruto",label:"Bruto",filter_on:1,type:"number"},{key:"ticket_b_tara",label:"Tara",filter_on:1,type:"number"},{key:"ticket_b_netto",label:"Netto",filter_on:1,type:"number"},{key:"ticket_b_supir",label:"Supir",filter_on:1,type:"string"},{key:"ticket_b_no_pol",label:"No Pol",filter_on:1,type:"string"},{key:"ticket_b_in_at",label:"In At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"ticket_b_out_at",label:"Out At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1}]},{key:"susut",label:"Susut",childs:[{key:"susut_bruto",label:"Bruto",childs:[{key:"susut_bruto_b_a",label:"Selisih"},{key:"susut_bruto_b_a_persen",label:"%"}]},{key:"susut_tara",label:"Tara",childs:[{key:"susut_tara_b_a",label:"Selisih"},{key:"susut_tara_b_a_persen",label:"%"}]},{key:"susut_netto",label:"Netto",childs:[{key:"susut_netto_b_a",label:"Selisih"},{key:"susut_netto_b_a_persen",label:"%"}]}]},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"pv_no",label:"PV No",type:"string"},{key:"deleted_by_username",label:"Deleted By",tbl_show:1},{key:"deleted_at",label:"Deleted At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:1,type:"datetime",filter_on:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:1,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:1},{key:"req_deleted_at",label:"Req Delete At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:1,type:"datetime",filter_on:1},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:1,type:"string",filter_on:1}]),je=q(()=>_.value>-1&&B().checkPermission("trp_trx.ticket.view")),Ne=q(()=>_.value>-1&&w.value.deleted==0&&w.value.req_deleted==0&&w.value.val_ticket==0&&B().checkPermission("trp_trx.ticket.modify")),Pe=q(()=>_.value>-1&&w.value.deleted==0&&w.value.req_deleted==0&&w.value.val_ticket==0&&B().checkPermission("trp_trx.ticket.val_ticket")),qe=q(()=>_.value>-1&&w.value.deleted==0&&w.value.req_deleted==1&&w.value.val_ticket==0&&B().checkPermission("trp_trx.approve_request_remove")),z=n(!1),Q=(e,t)=>{e=parseFloat(e)||0,t=parseFloat(t)||0;let u=parseFloat(t-e),c=u>0?t:e;if(c==0)return 0;let l=B().round(u/c*100,2);return l<0?"("+Math.abs(l*100)/100+")":l},W=(e,t)=>{e=parseFloat(e)||0,t=parseFloat(t)||0;let u=parseFloat(t-e);return u<0?"("+le(Math.abs(u))+")":le(u)};return(e,t)=>{const u=Re,c=Je,l=Le,p=Ke,o=Ge,Fe=Xe,Oe=Ze,ee=Qe,te=We,Ve=et,Ye=tt,He=at,ze=lt,Ee=ot,Ie=st,pe=rt,fe=ft("vue-date-picker"),me=it,Ue=nt;return b(),D("div",gt,[d(u,{title:"List Transaction"}),r("div",xt,[r("div",wt,[r("div",Dt,[r("div",Tt,[mt(r("select",{class:"","onUpdate:modelValue":t[0]||(t[0]=a=>kt(S)?S.value=a:null)},$t,512),[[vt,s(S)]])]),s(Ne)?(b(),D("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=a=>ye())},[d(c)])):T("",!0),s(je)?(b(),D("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=a=>ge())},[d(l)])):T("",!0),s(qe)?(b(),D("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[3]||(t[3]=a=>Te())},[d(p)])):T("",!0),s(Pe)?(b(),D("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[4]||(t[4]=a=>he())},[d(o)])):T("",!0)]),r("div",St,[s(P).length>0?(b(),D("button",{key:0,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:t[5]||(t[5]=a=>Se())}," Multi Clear Ticket ")):T("",!0),s(P).length>0?(b(),D("button",{key:1,type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:t[6]||(t[6]=a=>$e())}," Multi Val ")):T("",!0),r("button",{type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:t[7]||(t[7]=a=>Ae())}," Check Tickets "),r("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[8]||(t[8]=a=>H.value=!0)},[d(Fe)]),r("button",{type:"button",name:"button",class:"m-1 text-xs whitespace-nowrap",onClick:t[9]||(t[9]=a=>z.value=!0)}," Update Ticket ")])]),d(Ve,{thead:s(Be),selected:s(_),onSetSelected:t[10]||(t[10]=a=>_.value=a),tbody:s(i),fnCallData:ie,scrolling:s(h),onSetScrollingPage:t[11]||(t[11]=a=>s(h).page=a),onDoFilter:t[12]||(t[12]=a=>ne()),onSetCheckbox:t[13]||(t[13]=a=>P.value=a),deep_state:s(I)},{absen:k(({item:a,index:g})=>[a.trx_absens&&a.trx_absens.length>0?(b(),M(Oe,{key:0,class:"cursor-pointer",onClick:ea=>xe(g)},null,8,["onClick"])):T("",!0)]),val:k(({item:a})=>[a.val?(b(),M(te,{key:1})):(b(),M(ee,{key:0}))]),val1:k(({item:a})=>[a.val1?(b(),M(te,{key:1})):(b(),M(ee,{key:0}))]),val_ticket:k(({item:a})=>[a.val_ticket?(b(),M(te,{key:1})):(b(),M(ee,{key:0}))]),uj_asst_opt:k(({item:a})=>{var g;return[y(C((g=a.uj)==null?void 0:g.asst_opt),1)]}),susut_bruto_b_a:k(({item:a})=>[y(C(W(a.ticket_a_bruto,a.ticket_b_bruto)),1)]),susut_tara_b_a:k(({item:a})=>[y(C(W(a.ticket_a_tara,a.ticket_b_tara)),1)]),susut_netto_b_a:k(({item:a})=>[y(C(W(a.ticket_a_netto,a.ticket_b_netto)),1)]),susut_bruto_b_a_persen:k(({item:a})=>[y(C(Q(a.ticket_a_bruto,a.ticket_b_bruto)),1)]),susut_tara_b_a_persen:k(({item:a})=>[y(C(Q(a.ticket_a_tara,a.ticket_b_tara)),1)]),susut_netto_b_a_persen:k(({item:a})=>[y(C(Q(a.ticket_a_netto,a.ticket_b_netto)),1)]),deleted_by_username:k(({item:a})=>{var g;return[y(C((g=a.deleted_by)==null?void 0:g.username),1)]}),req_deleted_by_username:k(({item:a})=>{var g;return[y(C((g=a.req_deleted_by)==null?void 0:g.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling","deep_state"])]),d(Ye,{type:"custome",show:s(N),data:s(ce),fnClose:De,fnConfirm:Ce},{words:k(()=>[y(" Data akan diproses dan "),At,y(", apakah Anda menyetujui permintaan penghapusan data berikut? ")]),_:1},8,["show","data"]),d(He,{show:s(L),fnClose:()=>{L.value=!1},fnLoadDBData:ke,id:s(_e),p_data:s(i),list_ticket:s(re)},null,8,["show","fnClose","id","p_data","list_ticket"]),d(ze,{show:s(Y),fnClose:()=>{Y.value=!1},id:s(K),p_data:s(i),is_view:s(G)},null,8,["show","fnClose","id","p_data","is_view"]),d(Ee,{show:s(X),fnClose:()=>{X.value=!1},index:s(ue),p_data:s(i)},null,8,["show","fnClose","index","p_data"]),d(Ie,{show:s(Z),fnClose:()=>{Z.value=!1}},null,8,["show","fnClose"]),s(H)?(b(),D("div",Mt,[r("div",Bt,[r("div",jt,[d(pe,{style:{color:"black",cursor:"pointer"},onClick:t[14]||(t[14]=a=>H.value=!1)})]),r("div",Nt,[r("div",Pt,[r("div",qt,[Ft,r("div",Ot,[r("div",Vt,[Yt,r("div",Ht,[d(me,null,{default:k(()=>[d(fe,{modelValue:s(v).from,"onUpdate:modelValue":t[15]||(t[15]=a=>s(v).from=a),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,clearable:!1,"text-input":"","teleport-center":"",onClosed:t[16]||(t[16]=a=>de("from"))},null,8,["modelValue"])]),_:1})])]),r("div",zt,[Et,r("div",It,[d(me,null,{default:k(()=>[d(fe,{modelValue:s(v).to,"onUpdate:modelValue":t[17]||(t[17]=a=>s(v).to=a),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,clearable:!1,"text-input":"","teleport-center":"",onClosed:t[18]||(t[18]=a=>de("to"))},null,8,["modelValue"])]),_:1})])])])])])]),r("div",{style:{position:"absolute",top:"12px",right:"98px","background-color":"rgba(255,255,255,0)",width:"37px",height:"36px","z-index":"1",cursor:"pointer"},onClick:t[19]||(t[19]=a=>H.value=!1)})])])):T("",!0),s(z)?(b(),D("div",Ut,[r("div",Rt,[r("div",Jt,[d(pe,{style:{color:"black",cursor:"pointer"},onClick:t[20]||(t[20]=a=>z.value=!1)})]),r("div",Lt,[r("div",Kt,[r("div",Gt,[Xt,r("div",Zt,[d(Ue,{arr:s(R)},null,8,["arr"]),r("div",Qt,[r("button",{type:"button",name:"button",class:"bg-blue-500 text-white",onClick:t[21]||(t[21]=a=>Me())}," Set & Update "),r("button",{type:"button",name:"button",class:"bg-white",onClick:t[22]||(t[22]=a=>z.value=!1)}," Close ")])])])])])])])):T("",!0)])}}};export{Fa as default};