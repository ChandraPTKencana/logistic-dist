import Be from"./Header.de1a6f48.js";import Ne from"./Edit.510772e4.js";import Pe from"./Eyes.74709e00.js";import Ye from"./Void.e721ce8c.js";import je from"./Signature.19e8d4e3.js";import He from"./Cog.67bc154a.js";import Oe from"./Image.638ac5b5.js";import Ie from"./Line.448984ac.js";import Ve from"./Check.bf2d1634.js";import Fe from"./TableView.c2411532.js";import{_ as Re}from"./PopupMini.vue.e306e4b1.js";import ze from"./trx_trp_ticket.37eb2284.js";import Ee from"./trx_trp_ticket_validasi.f1671cdc.js";import Ue from"./trx_absen.c4cb22bd.js";import Le from"./Times.67ba30c4.js";import{_ as Je}from"./client-only.3cffc608.js";import{r as n,j as Ke,f as Ge,g as Xe,G as C,h as Ze,i as ie,s as Qe,A as c,I as We,c as h,b as u,a as s,m as et,q as tt,k as o,n as lt,l as w,d as M,C as ot,t as K,w as y,z as at,B as Y,o as d,D as g,H as st,E as rt}from"./entry.1da81da6.js";import{u as j}from"./useMyFetch.bacdf18d.js";import{u as H}from"./useUtils.5bacb879.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.0e9d7088.js";import"./Adjust.e8e6f727.js";import"./TableHeaderEye.d3b6244c.js";import"./ClearAll.30f80bbb.js";import"./ClearEach.8891415a.js";import"./CaretLeftDoubleBold.ea85b8a5.js";import"./CaretLeftBold.e000d033.js";import"./CaretRightBold.097b83f8.js";import"./CaretRightDoubleBold.68dcd770.js";import"./Exclamation.ca0bc743.js";import"./HeaderPopup.vue.83dedf7d.js";import"./InputPointFormat.vue.a4095813.js";const nt={class:"w-full h-full flex flex-col"},it={class:"w-full flex grow flex-col overflow-auto h-0"},_t={class:"w-full flex justify-between flex-wrap"},ut={class:"grow flex"},dt={class:"m-1"},pt=st('<option value="ticket_not_done">Undone</option><option value="ticket_done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),ct=[pt],mt={class:"flex"},ft=s("span",{class:"text-xs"},"Mode",-1),vt=s("b",null,"tidak dapat dibatalkan lagi",-1),yt={key:0,class:"w-full h-full flex items-center justify-center fixed top-0 left-0 z-20 p-3",style:{"background-color":"rgba(255,255,255,0.9)"}},bt={class:"relative",style:{width:"95%",height:"90%"}},kt={class:"absolute -top-7 right-0 bg-white",style:{position:"absolute",padding:"5px 10px",border:"solid 1px #ccc","border-bottom":"none","border-top-right-radius":"5px","border-top-left-radius":"5px"}},gt={class:"w-full h-full flex flex-col items-center justify-content-center bg-white"},xt={class:"w-full p-1"},ht={class:"w-full p-1 bg-gray-200"},wt=s("div",{class:"w-full text-blue-600 font-bold"}," Set Date For Load Data ",-1),Dt={class:"w-full grid grid-cols-2 grid-rows-1 gap-1"},$t={class:"flex flex-col flex-wrap p-1"},Ct=s("label",{for:""},"From",-1),Mt={class:"grow"},Tt={class:"flex flex-col flex-wrap p-1"},At=s("label",{for:""},"To",-1),qt={class:"grow"},dl={__name:"ticket",async setup(St){let T,G;const{$moment:A}=rt(),X=e=>e.deleted==1?"!bg-red-400":e.req_deleted==1?"!bg-yellow-300":["CPO","PK"].indexOf(e.jenis)>-1&&e.ticket_a_id!=""&&e.ticket_b_bruto!=""&&e.ticket_b_tara!=""&&e.ticket_b_netto!=""&&e.ticket_b_in_at!=""&&e.ticket_b_out_at!=""||e.jenis=="TBS"&&e.ticket_a_id!=""&&e.ticket_b_id!=""||e.jenis=="TBSK"&&e.ticket_b_id!=""?"!bg-blue-300":"",O=e=>(e.map(t=>{t.class_h=X(t)}),e),b=n("ticket_not_done");Ke(()=>b.value,e=>{se.value.map(t=>{let m=["deleted_by_username","deleted_at","deleted_reason","req_deleted_by_username","req_deleted_at","req_deleted_reason"].indexOf(t.key)>-1;return["all","deleted","req_deleted"].indexOf(e)>-1?m&&(t.tbl_show=1):m&&(t.tbl_show=0),t}),ee()},{immediate:!1});const i={};i._TimeZoneOffset=new Date().getTimezoneOffset(),i.sort="tanggal:desc";const Z=n({}),q=n({from:"",to:""}),S=Ge("token"),{data:_e}=([T,G]=Xe(async()=>at(async()=>{c().loading_full=!0;let e=[];const[t,m]=await Promise.all([j("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:{filter_status:b},retry:0})]);return t.status.value!=="error"&&(e=O(t.data.value.data)),t.status.value==="error"?(Y().trigger(t.error),{trx_trps:e}):(c().loading_full=!1,{trx_trps:e})},"$X4xCu6yBOs")),T=await T,G(),T),r=n(_e.value.trx_trps||[]),Q=n([]),x=n(!1),ue=async(e,t="")=>{c().loading_full=!0;let m=_.value.from?A(_.value.from).format("Y-MM-DD"):"",$=_.value.to?A(_.value.to).format("Y-MM-DD"):"";const{data:p,error:E,status:U}=await j("/trx_load_for_trp",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:{jenis:e,online_status:x.value,from:m,to:$,transition_target:t},retry:0});if(c().loading_full=!1,U.value==="error"){Y().trigger(E);return}Q.value=p.value.list_ticket},I=n({field:"tanggal",by:"desc"}),a=n(-1),v=C(()=>r.value[a.value]),f=n({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),de=()=>{i.like="";let e=JSON.parse(JSON.stringify(c()._tv.global_keyword));e!=""&&(i.like=`id:%${e}%,xto:%${e}%,jenis:%${e}%,pv_no:%${e}%,ticket_a_no:%${e}%,ticket_b_no:%${e}%,no_pol:%${e}%,supir:%${e}%,kernet:%${e}%,cost_center_code:%${e}%,cost_center_desc:%${e}%,pvr_no:%${e}%,tanggal:%${e}%,transition_target:%${e}%`),i.sort="",I.value.field&&(i.sort=I.value.field+":"+I.value.by),i.date_from=q.value.from?A(q.value.from).format("YYYY-MM-DD"):"",i.date_to=q.value.to?A(q.value.to).format("YYYY-MM-DD"):"",i.filter_model=JSON.stringify(c()._tv.filter_model)},W=async()=>{c().loading_full=!0,Z.value={},f.value.may_get_data=!1,i.page=f.value.page,i.page==1&&(r.value=[]),i.first_row&&delete i.first_row,i.page>1&&(i.first_row=JSON.stringify(r.value[0])),i.filter_status=b.value;const{data:e,error:t,status:m}=await j("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:i,retry:0});if(c().loading_full=!1,f.value.may_get_data=!0,m.value==="error"){Y().trigger(t,Z);return}f.value.page==1?r.value=O(e.value.data):f.value.page>1&&(r.value=[...r.value,...O(e.value.data)]),e.value.data.length==0&&(f.value.is_last_record=!0),c()._tv.filter_box=!1},ee=()=>{a.value=-1,f.value.page=1,f.value.is_last_record=!1,de(),W()};Ze();const V=n(!1),te=n(0),{display:B}=ie();Qe(ie());const pe=()=>{a.value==-1?B({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(te.value=r.value[a.value].id,V.value=!0)},N=n(!1),F=n(0),R=n(!1),ce=()=>{a.value==-1?B({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(F.value=r.value[a.value].id,N.value=!0,R.value=!1)},me=()=>{a.value==-1?B({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(F.value=r.value[a.value].id,N.value=!0,R.value=!0)},z=n(!1),le=n(0),fe=e=>{le.value=e,z.value=!0},oe=n({}),D=n(!1),ve=n(""),ye=async()=>{D.value&&(D.value=!1)},be=()=>{var e;a.value==-1?B({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(ve.value="",oe.value={id:r.value[a.value].id,"no pol":r.value[a.value].no_pol,tujuan:r.value[a.value].xto,permintaan:(e=r.value[a.value].req_deleted_by)==null?void 0:e.username,alasan:r.value[a.value].req_deleted_reason},D.value=!0)},ke=async()=>{c().loading_full=!0;const e=new FormData;e.append("id",r.value[a.value].id),e.append("_method","DELETE");const{data:t,error:m,status:$}=await j("/trx_trp_approve_req_delete",{method:"post",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},body:e,retry:0});if(c().loading_full=!1,$.value==="error"){Y().trigger(m);return}let p={...r.value[a.value]};p.deleted=t.value.deleted,p.deleted_user=t.value.deleted_user,p.deleted_at=t.value.deleted_at,p.deleted_by=t.value.deleted_by,p.deleted_reason=t.value.deleted_reason,p.class_h=X(p),b.value!="all"?r.value.splice(a.value,1):r.value.splice(a.value,1,{...p}),a.value=-1,D.value=!1},P=n(!1),_=n({from:new Date().setDate(new Date().getDate()-3),to:new Date}),ae=e=>{e=="from"?_.value.from-_.value.to>0&&(_.value.from=_.value.to):_.value.to-_.value.from<0&&(_.value.to=_.value.from)},se=n([{key:"no",label:"No",isai:!0},{key:"val",label:"App 1",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val1",label:"App 2",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"App 3",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"tanggal",label:"U.Jalan Per",type:"date",dateformat:"DD-MM-Y",filter_on:1,sort:{priority:1,type:"desc"}},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"xto",label:"Tujuan",filter_on:1,type:"string"},{key:"tipe",label:"Tipe",filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK"]},{key:"amount",label:"Amount",class:" justify-end",filter_on:1,type:"number"},{key:"transition_target",label:"Peralihan",filter_on:1,type:"select",select_item:c().list_pabrik},{key:"ticket_a",label:"Ticket A",childs:[{key:"ticket_a_no",label:"No",filter_on:1,type:"string"},{key:"ticket_a_bruto",label:"Bruto",filter_on:1,type:"number"},{key:"ticket_a_tara",label:"Tara",filter_on:1,type:"number"},{key:"ticket_a_netto",label:"Netto",filter_on:1,type:"number"},{key:"ticket_a_supir",label:"Supir",filter_on:1,type:"string"},{key:"ticket_a_no_pol",label:"No Pol",filter_on:1,type:"string"},{key:"ticket_a_in_at",label:"In At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"ticket_a_out_at",label:"Out At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1}]},{key:"ticket_b",label:"Ticket B",childs:[{key:"ticket_b_no",label:"No",filter_on:1,type:"string"},{key:"ticket_b_bruto",label:"Bruto",filter_on:1,type:"number"},{key:"ticket_b_tara",label:"Tara",filter_on:1,type:"number"},{key:"ticket_b_netto",label:"Netto",filter_on:1,type:"number"},{key:"ticket_b_supir",label:"Supir",filter_on:1,type:"string"},{key:"ticket_b_no_pol",label:"No Pol",filter_on:1,type:"string"},{key:"ticket_b_in_at",label:"In At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"ticket_b_out_at",label:"Out At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1}]},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0,type:"string",filter_on:1}]),ge=C(()=>a.value>-1&&H().checkPermission("trp_trx.ticket.view")),xe=C(()=>a.value>-1&&v.value.deleted==0&&v.value.req_deleted==0&&v.value.val2==0&&H().checkPermission("trp_trx.ticket.modify")),he=C(()=>a.value>-1&&v.value.deleted==0&&v.value.req_deleted==0&&v.value.val2==0&&H().checkPermission("trp_trx.ticket.val2")),we=C(()=>a.value>-1&&v.value.deleted==0&&v.value.req_deleted==1&&v.value.val2==0&&H().checkPermission("trp_trx.approve_request_remove"));return(e,t)=>{const m=Be,$=Ne,p=Pe,E=Ye,U=je,De=He,$e=Oe,L=Ie,J=Ve,Ce=Fe,Me=Re,Te=ze,Ae=Ee,qe=Ue,Se=Le,re=We("vue-date-picker"),ne=Je;return d(),h("div",nt,[u(m,{title:"List Transaction"}),s("div",it,[s("div",_t,[s("div",ut,[s("div",dt,[et(s("select",{class:"","onUpdate:modelValue":t[0]||(t[0]=l=>lt(b)?b.value=l:null)},ct,512),[[tt,o(b)]])]),o(xe)?(d(),h("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=l=>pe())},[u($)])):w("",!0),o(ge)?(d(),h("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=l=>me())},[u(p)])):w("",!0),o(we)?(d(),h("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[3]||(t[3]=l=>be())},[u(E)])):w("",!0),o(he)?(d(),h("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[4]||(t[4]=l=>ce())},[u(U)])):w("",!0)]),s("div",mt,[s("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[5]||(t[5]=l=>P.value=!0)},[u(De)]),s("div",{class:"m-1 card-border cursor-pointer",onClick:t[6]||(t[6]=l=>x.value=!o(x))},[ft,M(" : "),s("span",{class:ot(["font-bold",o(x)?"text-green-600":"text-red-600"])},K(o(x)?"ONLINE":"OFFLINE"),3)])])]),u(Ce,{thead:o(se),selected:o(a),onSetSelected:t[7]||(t[7]=l=>a.value=l),tbody:o(r),fnCallData:W,scrolling:o(f),onSetScrollingPage:t[8]||(t[8]=l=>o(f).page=l),onDoFilter:t[9]||(t[9]=l=>ee())},{absen:y(({item:l,index:k})=>[l.trx_absens&&l.trx_absens.length>0?(d(),g($e,{key:0,class:"cursor-pointer",onClick:Bt=>fe(k)},null,8,["onClick"])):w("",!0)]),val:y(({item:l})=>[l.val?(d(),g(J,{key:1})):(d(),g(L,{key:0}))]),val1:y(({item:l})=>[l.val1?(d(),g(J,{key:1})):(d(),g(L,{key:0}))]),val2:y(({item:l})=>[l.val2?(d(),g(J,{key:1})):(d(),g(L,{key:0}))]),deleted_by_username:y(({item:l})=>{var k;return[M(K((k=l.deleted_by)==null?void 0:k.username),1)]}),req_deleted_by_username:y(({item:l})=>{var k;return[M(K((k=l.req_deleted_by)==null?void 0:k.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])]),u(Me,{type:"custome",show:o(D),data:o(oe),fnClose:ye,fnConfirm:ke},{words:y(()=>[M(" Data akan diproses dan "),vt,M(", apakah Anda menyetujui permintaan penghapusan data berikut? ")]),_:1},8,["show","data"]),u(Te,{show:o(V),fnClose:()=>{V.value=!1},fnLoadDBData:ue,id:o(te),p_data:o(r),list_ticket:o(Q),online_status:o(x)},null,8,["show","fnClose","id","p_data","list_ticket","online_status"]),u(Ae,{show:o(N),fnClose:()=>{N.value=!1},id:o(F),p_data:o(r),is_view:o(R)},null,8,["show","fnClose","id","p_data","is_view"]),u(qe,{show:o(z),fnClose:()=>{z.value=!1},index:o(le),p_data:o(r)},null,8,["show","fnClose","index","p_data"]),o(P)?(d(),h("div",yt,[s("div",bt,[s("div",kt,[u(Se,{style:{color:"black",cursor:"pointer"},onClick:t[10]||(t[10]=l=>P.value=!1)})]),s("div",gt,[s("div",xt,[s("div",ht,[wt,s("div",Dt,[s("div",$t,[Ct,s("div",Mt,[u(ne,null,{default:y(()=>[u(re,{modelValue:o(_).from,"onUpdate:modelValue":t[11]||(t[11]=l=>o(_).from=l),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,clearable:!1,"text-input":"","teleport-center":"",onClosed:t[12]||(t[12]=l=>ae("from"))},null,8,["modelValue"])]),_:1})])]),s("div",Tt,[At,s("div",qt,[u(ne,null,{default:y(()=>[u(re,{modelValue:o(_).to,"onUpdate:modelValue":t[13]||(t[13]=l=>o(_).to=l),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,clearable:!1,"text-input":"","teleport-center":"",onClosed:t[14]||(t[14]=l=>ae("to"))},null,8,["modelValue"])]),_:1})])])])])])]),s("div",{style:{position:"absolute",top:"12px",right:"98px","background-color":"rgba(255,255,255,0)",width:"37px",height:"36px","z-index":"1",cursor:"pointer"},onClick:t[15]||(t[15]=l=>P.value=!1)})])])):w("",!0)])}}};export{dl as default};