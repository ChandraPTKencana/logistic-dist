import{_ as oe}from"./Header.71ed6a7a.js";import{u as re,_ as se}from"./useDownload.35afcaaa.js";import{_ as ne}from"./Table2Column.610fa355.js";import{_ as _e,a as ie}from"./Check.35d029cf.js";import{_ as ue}from"./TableView.8cb0d023.js";import{_ as ce}from"./PopupMini.vue.47efb420.js";import{_ as pe}from"./Times.74e0f3d2.js";import{r as n,f as de,D as fe,B as be,H as V,I as ye,c as R,b as m,a as d,w as s,k as _,G as ke,E as me,x as u,y as w,o as y,q as ve,t as i,K as v,d as c,s as ge}from"./entry.d239d820.js";import{u as J}from"./useUtils.807de404.js";import{u as D}from"./useMyFetch.75d43dc0.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Search.547d4f6a.js";import"./client-only.5c3a87a2.js";const he={class:"w-full h-full flex flex-col"},xe={class:"w-full flex grow flex-col overflow-auto h-0"},we={class:"w-full flex"},De={key:0,class:"w-full h-full flex items-center justify-center fixed top-0 left-0 z-20 p-3",style:{"background-color":"rgba(255,255,255,0.9)"}},Ae={class:"relative",style:{width:"95%",height:"90%"}},$e={class:"absolute -top-7 right-0 bg-white",style:{position:"absolute",padding:"5px 10px",border:"solid 1px #ccc","border-bottom":"none","border-top-right-radius":"5px","border-top-left-radius":"5px"}},Se=["src"],Ue={__name:"index",async setup(Me){let A,H;const{$moment:K}=ge(),{pointFormat:f}=J(),l={};l._TimeZoneOffset=new Date().getTimezoneOffset(),l.sort="tanggal:desc";const F=n({}),g=de("token"),$=n({from:"",to:""}),{data:L}=([A,H]=fe(async()=>me(async()=>{u().loading_full=!0;let t=[];const[a,o]=await Promise.all([D("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},retry:0})]);return a.status.value!=="error"&&(t=a.data.value.data),a.status.value==="error"?(w().trigger(a.error),{trx_trps:t}):(u().loading_full=!1,{trx_trps:t})},"$8KmJHfPiB5")),A=await A,H(),A),b=n(L.value.trx_trps||[]),r=n(""),T=n({field:"tanggal",by:"desc"}),h=n(-1),p=n({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),B=()=>{l.like="",r.value!=""&&(l.like=`id:%${r.value}%,xto:%${r.value}%,jenis:%${r.value}%,pv_no:%${r.value}%,ticket_a_no:%${r.value}%,ticket_b_no:%${r.value}%,no_pol:%${r.value}%,supir:%${r.value}%,kernet:%${r.value}%,cost_center_code:%${r.value}%,cost_center_desc:%${r.value}%,pvr_id:%${r.value}%,pvr_no:%${r.value}%,tanggal:%${r.value}%,transition_to:%${r.value}%`),l.sort="",T.value.field&&(l.sort=T.value.field+":"+T.value.by),l._TimeZoneOffset=new Date().getTimezoneOffset(),l.date_from=$.value.from?K($.value.from).format("YYYY-MM-DD"):"",l.date_to=$.value.to?K($.value.to).format("YYYY-MM-DD"):"",l.filter_model=JSON.stringify(u()._tv.filter_model)},O=n(null),z=async()=>{u().loading_full=!0,F.value={},p.value.may_get_data=!1,l.page=p.value.page,l.page==1&&(b.value=[]),l.first_row&&delete l.first_row,l.page>1&&(l.first_row=JSON.stringify(b.value[0]));const{data:t,error:a,status:o}=await D("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},params:l,retry:0});if(u().loading_full=!1,p.value.may_get_data=!0,o.value==="error"){w().trigger(a,F);return}p.value.page==1?(b.value=t.value.data,O.value&&(O.value.scrollTop=0)):p.value.page>1&&(b.value=[...b.value,...t.value.data]),t.value.data.length==0&&(p.value.is_last_record=!0),u()._tv.filter_box=!1},Z=()=>{p.value.page=1,p.value.is_last_record=!1,B(),z()};be(),n(!1),n(0),V(),ye(V());const q=n({}),S=n(!1),G=async()=>{S.value&&(S.value=!1)},Q=async()=>{u().loading_full=!0;const t=new FormData;t.append("id",b.value[h.value].id),t.append("_method","DELETE");const{data:a,error:o,status:k}=await D("/trx_trp",{method:"post",headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},body:t,retry:0});if(u().loading_full=!1,k.value==="error"){w().trigger(o);return}b.value.splice(h.value,1),h.value=-1,S.value=!1},{downloadFile:I,viewFile:Te}=re(),M=n(!1),C=n(""),E=async()=>{if(M.value==!0){M.value=!1;return}B(),u().loading_full=!0;const{data:t,error:a,status:o}=await D("/trx_trps_preview_file",{method:"get",headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},params:l,retry:0});if(u().loading_full=!1,o.value==="error"){w().trigger(a);return}C.value=t.value,M.value=!0},W=async()=>{B(),u().loading_full=!0;const{data:t,error:a,status:o}=await D("/trx_trps_download_excel",{method:"get",headers:{Authorization:`Bearer ${g.value}`,Accept:"application/json"},params:l,retry:0});if(u().loading_full=!1,o.value==="error"){w().trigger(a);return}I(t.value)},X=()=>{I(C.value)},U=t=>t.pv_id<=0||["CPO","PK"].indexOf(t.jenis)>-1&&(t.ticket_a_id<=0||t.ticket_b_bruto<=0||t.ticket_b_tara<=0||t.ticket_b_netto<=0||t.ticket_b_in_at==""||t.ticket_b_out_at=="")||t.jenis=="TBS"&&(t.ticket_a_id<=0||t.ticket_b_id<=0)||t.jenis=="TBSK"&&t.ticket_b_id<=0?0:1,ee=n([{key:"status",label:"Status",filter_on:1,sort_off:1,type:"select",select_item:["Undone","Done"]},{key:"val",label:"App 1",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"val1",label:"App 2",filter_on:1,type:"select",select_item:[{k:"1",v:"Approve"},{k:"0",v:"Unapprove"}]},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"tanggal",label:"U.Jalan Per",type:"date",dateformat:"DD-MM-Y",filter_on:1,sort:{priority:1,type:"desc"}},{key:"no_pol",label:"No Pol",filter_on:1,type:"string"},{key:"xto",label:"Tujuan",filter_on:1,type:"string"},{key:"tipe",label:"Tipe",filter_on:1,type:"string"},{key:"jenis",label:"Jenis",filter_on:1,type:"select",select_item:["TBS","TBSK","CPO","PK"]},{key:"amount",label:"Amount",class:" justify-end",filter_on:1,type:"number"},{key:"cost_center",label:"Cost Center",childs:[{key:"cost_center_code",label:"Code",class:" justify-start",filter_on:1,type:"string"},{key:"cost_center_desc",label:"Desc",filter_on:1,type:"string"}]},{key:"pvr",label:"PVR",childs:[{key:"pvr_no",label:"No",filter_on:1,type:"string"},{key:"pvr_total",label:"Total",filter_on:1,type:"number"},{key:"pvr_had_detail",label:"Completed",filter_on:1,type:"select",select_item:[{k:"1",v:"Completed"},{k:"0",v:"Uncompleted"}]}]},{key:"pv",label:"PV",childs:[{key:"pv_datetime",label:"Date",type:"date",dateformat:"DD-MM-Y",filter_on:1},{key:"pv_no",label:"No",filter_on:1,type:"string"},{key:"pv_total",label:"Total",filter_on:1,type:"number"}]},{key:"transition_to",label:"Peralihan",filter_on:1,type:"select",select_item:["KPN","KAS","KUS","ARP","KAP","SMP"]},{key:"ticket_a",label:"Ticket A",childs:[{key:"ticket_a_no",label:"No",filter_on:1,type:"string"},{key:"ticket_a_bruto",label:"Bruto",filter_on:1,type:"number"},{key:"ticket_a_tara",label:"Tara",filter_on:1,type:"number"},{key:"ticket_a_netto",label:"Netto",filter_on:1,type:"number"},{key:"ticket_a_supir",label:"Supir",filter_on:1,type:"string"},{key:"ticket_a_no_pol",label:"No Pol",filter_on:1,type:"string"},{key:"ticket_a_in_at",label:"In At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"ticket_a_out_at",label:"Out At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1}]},{key:"ticket_b",label:"Ticket B",childs:[{key:"ticket_b_no",label:"No",filter_on:1,type:"string"},{key:"ticket_b_bruto",label:"Bruto",filter_on:1,type:"number"},{key:"ticket_b_tara",label:"Tara",filter_on:1,type:"number"},{key:"ticket_b_netto",label:"Netto",filter_on:1,type:"number"},{key:"ticket_b_supir",label:"Supir",filter_on:1,type:"string"},{key:"ticket_b_no_pol",label:"No Pol",filter_on:1,type:"string"},{key:"ticket_b_in_at",label:"In At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"ticket_b_out_at",label:"Out At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1}]},{key:"susut",label:"Susut",childs:[{key:"susut_bruto",label:"Bruto",childs:[{key:"susut_bruto_a",label:"Berangkat"},{key:"susut_bruto_b",label:"Kembali"},{key:"susut_bruto_b_a",label:"Selisih"},{key:"susut_bruto_b_a_persen",label:"%"}]},{key:"susut_tara",label:"Tara",childs:[{key:"susut_tara_a",label:"Berangkat"},{key:"susut_tara_b",label:"Kembali"},{key:"susut_tara_b_a",label:"Selisih"},{key:"susut_tara_b_a_persen",label:"%"}]},{key:"susut_netto",label:"Netto",childs:[{key:"susut_netto_a",label:"Berangkat"},{key:"susut_netto_b",label:"Kembali"},{key:"susut_netto_b_a",label:"Selisih"},{key:"susut_netto_b_a_persen",label:"%"}]}]},{key:"supir",label:"Supir",filter_on:1,type:"string"},{key:"kernet",label:"Kernet",filter_on:1,type:"string"},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1}]),P=(t,a)=>{t=parseFloat(t)||0,a=parseFloat(a)||0;let o=parseFloat(a-t),k=o>0?a:t;if(k==0)return 0;let x=J().round(o/k*100,2);return x<0?"("+Math.abs(x*100)/100+")":x},N=(t,a)=>{t=parseFloat(t)||0,a=parseFloat(a)||0;let o=parseFloat(a-t);return o<0?"("+f(Math.abs(o))+")":f(o)};return(t,a)=>{const o=oe,k=se,x=ne,Y=_e,j=ie,te=ue,ae=ce,le=pe;return y(),R("div",he,[m(o,{title:"Report Transaction"}),d("div",xe,[d("div",we,[d("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:a[0]||(a[0]=e=>E())},[m(k)]),d("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:a[1]||(a[1]=e=>W())},[m(x)])]),m(te,{thead:_(ee),selected:_(h),onSetSelected:a[2]||(a[2]=e=>h.value=e),tbody:_(b),fnCallData:z,scrolling:_(p),onSetScrollingPage:a[3]||(a[3]=e=>_(p).page=e),onDoFilter:a[4]||(a[4]=e=>Z())},{status:s(({item:e})=>[d("div",{class:ve(["text-white text-xs px-2 py-1 rounded-lg",U(e)?"bg-green-600":"bg-red-600"])},i(U(e)?"Done":"Not Done"),3)]),val:s(({item:e})=>[e.val?(y(),v(j,{key:1})):(y(),v(Y,{key:0}))]),val1:s(({item:e})=>[e.val1?(y(),v(j,{key:1})):(y(),v(Y,{key:0}))]),pvr_had_detail:s(({item:e})=>[e.pvr_had_detail?(y(),v(j,{key:1})):(y(),v(Y,{key:0}))]),susut_bruto_a:s(({item:e})=>[c(i(_(f)(e.ticket_a_bruto)),1)]),susut_tara_a:s(({item:e})=>[c(i(_(f)(e.ticket_a_tara)),1)]),susut_netto_a:s(({item:e})=>[c(i(_(f)(e.ticket_a_netto)),1)]),susut_bruto_b:s(({item:e})=>[c(i(_(f)(e.ticket_b_bruto)),1)]),susut_tara_b:s(({item:e})=>[c(i(_(f)(e.ticket_b_tara)),1)]),susut_netto_b:s(({item:e})=>[c(i(_(f)(e.ticket_b_netto)),1)]),susut_bruto_b_a:s(({item:e})=>[c(i(N(e.ticket_a_bruto,e.ticket_b_bruto)),1)]),susut_tara_b_a:s(({item:e})=>[c(i(N(e.ticket_a_tara,e.ticket_b_tara)),1)]),susut_netto_b_a:s(({item:e})=>[c(i(N(e.ticket_a_netto,e.ticket_b_netto)),1)]),susut_bruto_b_a_persen:s(({item:e})=>[c(i(P(e.ticket_a_bruto,e.ticket_b_bruto)),1)]),susut_tara_b_a_persen:s(({item:e})=>[c(i(P(e.ticket_a_tara,e.ticket_b_tara)),1)]),susut_netto_b_a_persen:s(({item:e})=>[c(i(P(e.ticket_a_netto,e.ticket_b_netto)),1)]),_:2},1032,["thead","selected","tbody","scrolling"])]),m(ae,{type:"delete",show:_(S),data:_(q),fnClose:G,fnConfirm:Q},null,8,["show","data"]),_(M)?(y(),R("div",De,[d("div",Ae,[d("div",$e,[m(le,{style:{color:"black",cursor:"pointer"},onClick:a[5]||(a[5]=e=>E())})]),d("iframe",{ref:"iframe",width:"100%",height:"100%",src:_(C).dataBase64},null,8,Se),d("div",{style:{position:"absolute",top:"12px",right:"88px","background-color":"rgba(255,255,255,0)",width:"37px",height:"36px","z-index":"1",cursor:"pointer"},onClick:a[6]||(a[6]=e=>X())})])])):ke("",!0)])}}};export{Ue as default};