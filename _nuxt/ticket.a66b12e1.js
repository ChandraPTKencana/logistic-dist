import Ne from"./Header.76f0bae4.js";import Ye from"./Edit.8a97a15f.js";import He from"./Eyes.7cfa11ba.js";import Pe from"./Void.d592bb08.js";import je from"./Signature.b4b20504.js";import Oe from"./Cog.59f44170.js";import Ie from"./Image.9675320f.js";import Ve from"./Line.0c8a7f66.js";import Fe from"./Check.e45edaad.js";import Re from"./TableView.93907357.js";import{_ as ze}from"./PopupMini.vue.a6e2da23.js";import Ee from"./trx_trp_ticket.9bde1151.js";import Le from"./trx_trp_ticket_validasi.37e96100.js";import Ue from"./trx_absen.b553d415.js";import Je from"./Times.068b4b36.js";import{_ as Ke}from"./client-only.82d925c7.js";import{r,I as Ge,h as ie,k as Xe,K as Y,i as Ze,z as _e,A as Qe,x as c,M as We,c as h,b as u,a as s,n as et,C as tt,m as o,B as lt,G as w,d as C,E as ot,t as J,w as y,l as at,y as H,o as d,J as g,L as st,H as nt}from"./entry.1cedbe8d.js";import{u as P}from"./useMyFetch.82b8d51f.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.ae8ae8d4.js";import"./Adjust.5fa952b5.js";import"./TableHeaderEye.fec6e48b.js";import"./ClearAll.f5bb5a3b.js";import"./ClearEach.2caccf42.js";import"./CaretLeftDoubleBold.1f0f254b.js";import"./CaretLeftBold.4b235733.js";import"./CaretRightBold.b436ba31.js";import"./CaretRightDoubleBold.ede50174.js";import"./useUtils.11657bdd.js";import"./Exclamation.deae79d2.js";import"./HeaderPopup.vue.48611918.js";import"./InputPointFormat.vue.5dca44f8.js";const rt={class:"w-full h-full flex flex-col"},it={class:"w-full flex grow flex-col overflow-auto h-0"},_t={class:"w-full flex justify-between flex-wrap"},ut={class:"grow flex"},dt={class:"m-1"},pt=st('<option value="ticket_not_done">Undone</option><option value="ticket_done">Done</option><option value="deleted">Trash</option><option value="all">All</option><option value="req_deleted">Req Delete</option>',5),ct=[pt],mt={class:"flex"},ft=s("span",{class:"text-xs"},"Mode",-1),vt=s("b",null,"tidak dapat dibatalkan lagi",-1),yt={key:0,class:"w-full h-full flex items-center justify-center fixed top-0 left-0 z-20 p-3",style:{"background-color":"rgba(255,255,255,0.9)"}},bt={class:"relative",style:{width:"95%",height:"90%"}},kt={class:"absolute -top-7 right-0 bg-white",style:{position:"absolute",padding:"5px 10px",border:"solid 1px #ccc","border-bottom":"none","border-top-right-radius":"5px","border-top-left-radius":"5px"}},gt={class:"w-full h-full flex flex-col items-center justify-content-center bg-white"},xt={class:"w-full p-1"},ht={class:"w-full p-1 bg-gray-200"},wt=s("div",{class:"w-full text-blue-600 font-bold"}," Set Date For Load Data ",-1),Dt={class:"w-full grid grid-cols-2 grid-rows-1 gap-1"},$t={class:"flex flex-col flex-wrap p-1"},Ct=s("label",{for:""},"From",-1),Mt={class:"grow"},Tt={class:"flex flex-col flex-wrap p-1"},At=s("label",{for:""},"To",-1),St={class:"grow"},dl={__name:"ticket",async setup(qt){let M,K;const{$moment:T}=nt(),G=e=>e.deleted==1?"!bg-red-400":e.req_deleted==1?"!bg-yellow-300":["CPO","PK"].indexOf(e.jenis)>-1&&e.ticket_a_id!=""&&e.ticket_b_bruto!=""&&e.ticket_b_tara!=""&&e.ticket_b_netto!=""&&e.ticket_b_in_at!=""&&e.ticket_b_out_at!=""||e.jenis=="TBS"&&e.ticket_a_id!=""&&e.ticket_b_id!=""||e.jenis=="TBSK"&&e.ticket_b_id!=""?"!bg-blue-300":"",j=e=>(e.map(t=>{t.class_h=G(t)}),e),b=r("ticket_not_done");Ge(()=>b.value,e=>{se.value.map(t=>{let m=["deleted_by_username","deleted_at","deleted_reason","req_deleted_by_username","req_deleted_at","req_deleted_reason"].indexOf(t.key)>-1;return["all","deleted","req_deleted"].indexOf(e)>-1?m&&(t.tbl_show=1):m&&(t.tbl_show=0),t}),ee()},{immediate:!1});const i={};i._TimeZoneOffset=new Date().getTimezoneOffset(),i.sort="tanggal:desc";const X=r({}),A=r({from:"",to:""}),S=ie("token"),ue=ie("role"),Z=e=>e.includes(ue.value),{data:de}=([M,K]=Xe(async()=>at(async()=>{c().loading_full=!0;let e=[];const[t,m]=await Promise.all([P("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:{filter_status:b},retry:0})]);return t.status.value!=="error"&&(e=j(t.data.value.data)),t.status.value==="error"?(H().trigger(t.error),{trx_trps:e}):(c().loading_full=!1,{trx_trps:e})},"$X4xCu6yBOs")),M=await M,K(),M),n=r(de.value.trx_trps||[]),Q=r([]),x=r(!1),pe=async(e,t="")=>{c().loading_full=!0;let m=_.value.from?T(_.value.from).format("Y-MM-DD"):"",$=_.value.to?T(_.value.to).format("Y-MM-DD"):"";const{data:p,error:z,status:E}=await P("/trx_load_for_trp",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:{jenis:e,online_status:x.value,from:m,to:$,transition_target:t},retry:0});if(c().loading_full=!1,E.value==="error"){H().trigger(z);return}Q.value=p.value.list_ticket},O=r({field:"tanggal",by:"desc"}),a=r(-1),v=Y(()=>n.value[a.value]),f=r({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),ce=()=>{i.like="";let e=JSON.parse(JSON.stringify(c()._tv.global_keyword));e!=""&&(i.like=`id:%${e}%,xto:%${e}%,jenis:%${e}%,pv_no:%${e}%,ticket_a_no:%${e}%,ticket_b_no:%${e}%,no_pol:%${e}%,supir:%${e}%,kernet:%${e}%,cost_center_code:%${e}%,cost_center_desc:%${e}%,pvr_no:%${e}%,tanggal:%${e}%,transition_target:%${e}%`),i.sort="",O.value.field&&(i.sort=O.value.field+":"+O.value.by),i.date_from=A.value.from?T(A.value.from).format("YYYY-MM-DD"):"",i.date_to=A.value.to?T(A.value.to).format("YYYY-MM-DD"):"",i.filter_model=JSON.stringify(c()._tv.filter_model)},W=async()=>{c().loading_full=!0,X.value={},f.value.may_get_data=!1,i.page=f.value.page,i.page==1&&(n.value=[]),i.first_row&&delete i.first_row,i.page>1&&(i.first_row=JSON.stringify(n.value[0])),i.filter_status=b.value;const{data:e,error:t,status:m}=await P("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:i,retry:0});if(c().loading_full=!1,f.value.may_get_data=!0,m.value==="error"){H().trigger(t,X);return}f.value.page==1?n.value=j(e.value.data):f.value.page>1&&(n.value=[...n.value,...j(e.value.data)]),e.value.data.length==0&&(f.value.is_last_record=!0),c()._tv.filter_box=!1},ee=()=>{a.value=-1,f.value.page=1,f.value.is_last_record=!1,ce(),W()};Ze();const I=r(!1),te=r(0),{display:q}=_e();Qe(_e());const me=()=>{a.value==-1?q({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(te.value=n.value[a.value].id,I.value=!0)},B=r(!1),V=r(0),F=r(!1),fe=()=>{a.value==-1?q({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(V.value=n.value[a.value].id,B.value=!0,F.value=!1)},ve=()=>{a.value==-1?q({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(V.value=n.value[a.value].id,B.value=!0,F.value=!0)},R=r(!1),le=r(0),ye=e=>{le.value=e,R.value=!0},oe=r({}),D=r(!1),be=r(""),ke=async()=>{D.value&&(D.value=!1)},ge=()=>{var e;a.value==-1?q({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(be.value="",oe.value={id:n.value[a.value].id,"no pol":n.value[a.value].no_pol,tujuan:n.value[a.value].xto,permintaan:(e=n.value[a.value].req_deleted_by)==null?void 0:e.username,alasan:n.value[a.value].req_deleted_reason},D.value=!0)},xe=async()=>{c().loading_full=!0;const e=new FormData;e.append("id",n.value[a.value].id),e.append("_method","DELETE");const{data:t,error:m,status:$}=await P("/trx_trp_approve_req_delete",{method:"post",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},body:e,retry:0});if(c().loading_full=!1,$.value==="error"){H().trigger(m);return}let p={...n.value[a.value]};p.deleted=t.value.deleted,p.deleted_user=t.value.deleted_user,p.deleted_at=t.value.deleted_at,p.deleted_by=t.value.deleted_by,p.deleted_reason=t.value.deleted_reason,p.class_h=G(p),b.value!="all"?n.value.splice(a.value,1):n.value.splice(a.value,1,{...p}),a.value=-1,D.value=!1},N=r(!1),_=r({from:new Date().setDate(new Date().getDate()-3),to:new Date}),ae=e=>{e=="from"?_.value.from-_.value.to>0&&(_.value.from=_.value.to):_.value.to-_.value.from<0&&(_.value.to=_.value.from)},se=r([{key:"no",label:"No",isai:!0},{key:"val",label:"App 1",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val1",label:"App 2",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val2",label:"App 3",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"tanggal",label:"U.Jalan Per",type:"date",dateformat:"DD-MM-Y",filter_on:1,sort:{priority:1,type:"desc"}},{key:"no_pol",label:"No Pol",freeze:1,filter_on:1,type:"string"},{key:"xto",label:"Tujuan",filter_on:1,type:"string"},{key:"tipe",label:"Tipe",filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK"]},{key:"amount",label:"Amount",class:" justify-end",filter_on:1,type:"number"},{key:"transition_target",label:"Peralihan",filter_on:1,type:"select",select_item:c().list_pabrik},{key:"ticket_a",label:"Ticket A",childs:[{key:"ticket_a_no",label:"No",filter_on:1,type:"string"},{key:"ticket_a_bruto",label:"Bruto",filter_on:1,type:"number"},{key:"ticket_a_tara",label:"Tara",filter_on:1,type:"number"},{key:"ticket_a_netto",label:"Netto",filter_on:1,type:"number"},{key:"ticket_a_supir",label:"Supir",filter_on:1,type:"string"},{key:"ticket_a_no_pol",label:"No Pol",filter_on:1,type:"string"},{key:"ticket_a_in_at",label:"In At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"ticket_a_out_at",label:"Out At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1}]},{key:"ticket_b",label:"Ticket B",childs:[{key:"ticket_b_no",label:"No",filter_on:1,type:"string"},{key:"ticket_b_bruto",label:"Bruto",filter_on:1,type:"number"},{key:"ticket_b_tara",label:"Tara",filter_on:1,type:"number"},{key:"ticket_b_netto",label:"Netto",filter_on:1,type:"number"},{key:"ticket_b_supir",label:"Supir",filter_on:1,type:"string"},{key:"ticket_b_no_pol",label:"No Pol",filter_on:1,type:"string"},{key:"ticket_b_in_at",label:"In At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"ticket_b_out_at",label:"Out At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1}]},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:0},{key:"deleted_at",label:"Deleted At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:0,type:"string",filter_on:1},{key:"req_deleted_by_username",label:"Req Deleted By",tbl_show:0},{key:"req_deleted_at",label:"Req Delete At",dateformat:"DD-MM-Y HH:mm:ss",tbl_show:0,type:"datetime",filter_on:1},{key:"req_deleted_reason",label:"Req Delete Reason",tbl_show:0,type:"string",filter_on:1}]),he=Y(()=>a.value>-1&&v.value.deleted==0&&v.value.req_deleted==0&&v.value.val2==0),we=Y(()=>!Z(["PabrikTransport"])&&a.value>-1&&v.value.deleted==0&&v.value.req_deleted==0&&v.value.val2==0),De=Y(()=>!Z(["PabrikTransport"])&&a.value>-1&&v.value.deleted==0&&v.value.req_deleted==1&&v.value.val2==0);return(e,t)=>{const m=Ne,$=Ye,p=He,z=Pe,E=je,$e=Oe,Ce=Ie,L=Ve,U=Fe,Me=Re,Te=ze,Ae=Ee,Se=Le,qe=Ue,Be=Je,ne=We("vue-date-picker"),re=Ke;return d(),h("div",rt,[u(m,{title:"List Transaction"}),s("div",it,[s("div",_t,[s("div",ut,[s("div",dt,[et(s("select",{class:"","onUpdate:modelValue":t[0]||(t[0]=l=>lt(b)?b.value=l:null)},ct,512),[[tt,o(b)]])]),o(he)?(d(),h("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[1]||(t[1]=l=>me())},[u($)])):w("",!0),o(a)>-1?(d(),h("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[2]||(t[2]=l=>ve())},[u(p)])):w("",!0),o(De)?(d(),h("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[3]||(t[3]=l=>ge())},[u(z)])):w("",!0),o(we)?(d(),h("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:t[4]||(t[4]=l=>fe())},[u(E)])):w("",!0)]),s("div",mt,[s("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:t[5]||(t[5]=l=>N.value=!0)},[u($e)]),s("div",{class:"m-1 card-border cursor-pointer",onClick:t[6]||(t[6]=l=>x.value=!o(x))},[ft,C(" : "),s("span",{class:ot(["font-bold",o(x)?"text-green-600":"text-red-600"])},J(o(x)?"ONLINE":"OFFLINE"),3)])])]),u(Me,{thead:o(se),selected:o(a),onSetSelected:t[7]||(t[7]=l=>a.value=l),tbody:o(n),fnCallData:W,scrolling:o(f),onSetScrollingPage:t[8]||(t[8]=l=>o(f).page=l),onDoFilter:t[9]||(t[9]=l=>ee())},{absen:y(({item:l,index:k})=>[l.trx_absens&&l.trx_absens.length>0?(d(),g(Ce,{key:0,class:"cursor-pointer",onClick:Bt=>ye(k)},null,8,["onClick"])):w("",!0)]),val:y(({item:l})=>[l.val?(d(),g(U,{key:1})):(d(),g(L,{key:0}))]),val1:y(({item:l})=>[l.val1?(d(),g(U,{key:1})):(d(),g(L,{key:0}))]),val2:y(({item:l})=>[l.val2?(d(),g(U,{key:1})):(d(),g(L,{key:0}))]),deleted_by_username:y(({item:l})=>{var k;return[C(J((k=l.deleted_by)==null?void 0:k.username),1)]}),req_deleted_by_username:y(({item:l})=>{var k;return[C(J((k=l.req_deleted_by)==null?void 0:k.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])]),u(Te,{type:"custome",show:o(D),data:o(oe),fnClose:ke,fnConfirm:xe},{words:y(()=>[C(" Data akan diproses dan "),vt,C(", apakah Anda menyetujui permintaan penghapusan data berikut? ")]),_:1},8,["show","data"]),u(Ae,{show:o(I),fnClose:()=>{I.value=!1},fnLoadDBData:pe,id:o(te),p_data:o(n),list_ticket:o(Q),online_status:o(x)},null,8,["show","fnClose","id","p_data","list_ticket","online_status"]),u(Se,{show:o(B),fnClose:()=>{B.value=!1},id:o(V),p_data:o(n),is_view:o(F)},null,8,["show","fnClose","id","p_data","is_view"]),u(qe,{show:o(R),fnClose:()=>{R.value=!1},index:o(le),p_data:o(n)},null,8,["show","fnClose","index","p_data"]),o(N)?(d(),h("div",yt,[s("div",bt,[s("div",kt,[u(Be,{style:{color:"black",cursor:"pointer"},onClick:t[10]||(t[10]=l=>N.value=!1)})]),s("div",gt,[s("div",xt,[s("div",ht,[wt,s("div",Dt,[s("div",$t,[Ct,s("div",Mt,[u(re,null,{default:y(()=>[u(ne,{modelValue:o(_).from,"onUpdate:modelValue":t[11]||(t[11]=l=>o(_).from=l),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,clearable:!1,"text-input":"","teleport-center":"",onClosed:t[12]||(t[12]=l=>ae("from"))},null,8,["modelValue"])]),_:1})])]),s("div",Tt,[At,s("div",St,[u(re,null,{default:y(()=>[u(ne,{modelValue:o(_).to,"onUpdate:modelValue":t[13]||(t[13]=l=>o(_).to=l),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,clearable:!1,"text-input":"","teleport-center":"",onClosed:t[14]||(t[14]=l=>ae("to"))},null,8,["modelValue"])]),_:1})])])])])])]),s("div",{style:{position:"absolute",top:"12px",right:"98px","background-color":"rgba(255,255,255,0)",width:"37px",height:"36px","z-index":"1",cursor:"pointer"},onClick:t[15]||(t[15]=l=>N.value=!1)})])])):w("",!0)])}}};export{dl as default};