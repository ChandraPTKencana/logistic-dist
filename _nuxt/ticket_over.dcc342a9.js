import T from"./Header.54c82aef.js";import O from"./Refresh.65cc85fa.js";import{r as o,g as z,h as B,c as i,b as D,a,l as h,F as J,D as H,q as R,o as c,E,t as p,x as n,y as Y,G as F}from"./entry.b6e16180.js";import{u as A}from"./useMyFetch.ce7be1f1.js";import"./_plugin-vue_export-helper.c27b6911.js";const V={class:"w-full h-full flex flex-col"},q={class:"w-full flex grow flex-col overflow-auto h-0"},G={class:"w-full flex justify-between flex-wrap"},I={class:"grow flex"},P={class:"w-full flex justify-center items-center grow h-0 p-1"},Q={key:0,class:""},Z={class:"tacky"},K=a("thead",null,[a("tr",{class:"sticky top-0 !z-[2]"},[a("th",null,"No."),a("th",null,"Jenis Tiket"),a("th",null,"No Ticket"),a("th",null,"Lebih")])],-1),U=["onClick"],oe={__name:"ticket_over",async setup(W){let u,y;const{$moment:k}=F(),w=o("ticket_not_done"),t={};t._TimeZoneOffset=new Date().getTimezoneOffset(),t.sort="tanggal:desc";const $=o({}),_=o({from:"",to:""}),x=z("token"),{data:L}=([u,y]=B(async()=>R(async()=>{n().loading_full=!0;let e=[];const[s,f]=await Promise.all([A("/trx_trps/ticket_over",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:{filter_status:w},retry:0})]);return s.status.value==="error"?(Y().trigger(s.error),{trx_trps:e}):(n().loading_full=!1,e=s.data.value.data,{trx_trps:e})},"$YfrrHQNie6")),u=await u,y(),u),r=o(L.value.trx_trps||[]),g=o({field:"tanggal",by:"desc"}),m=o(-1),l=o({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),M=()=>{t.like="";let e=JSON.parse(JSON.stringify(n()._tv.global_keyword));e!=""&&(t.like=`id:%${e}%,xto:%${e}%,jenis:%${e}%,pv_no:%${e}%,ticket_a_no:%${e}%,ticket_b_no:%${e}%,no_pol:%${e}%,supir:%${e}%,kernet:%${e}%,cost_center_code:%${e}%,cost_center_desc:%${e}%,pvr_no:%${e}%,tanggal:%${e}%,transition_target:%${e}%`),t.sort="",g.value.field&&(t.sort=g.value.field+":"+g.value.by),t.date_from=_.value.from?k(_.value.from).format("YYYY-MM-DD"):"",t.date_to=_.value.to?k(_.value.to).format("YYYY-MM-DD"):"",t.filter_model=JSON.stringify(n()._tv.filter_model)},b=async()=>{n().loading_full=!0,$.value={},l.value.may_get_data=!1,t.page=l.value.page,t.page==1&&(r.value=[]),t.first_row&&delete t.first_row,t.page>1&&(t.first_row=JSON.stringify(r.value[0])),t.filter_status=w.value;const{data:e,error:s,status:f}=await A("/trx_trps/ticket_over",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:t,retry:0});if(n().loading_full=!1,l.value.may_get_data=!0,f.value==="error"){Y().trigger(s,$);return}l.value.page==1?r.value=e.value.data:l.value.page>1&&(r.value=[...r.value,...e.value.data]),e.value.data.length==0&&(l.value.is_last_record=!0),n()._tv.filter_box=!1},S=()=>{m.value=-1,l.value.page=1,l.value.is_last_record=!1,M(),b()},N=o(null),j=async()=>{if(!l.value.may_get_data)return;let e=N.value;if(e.scrollLeft!=l.value.scrollLeft){l.value.scrollLeft=e.scrollLeft;return}l.value.is_last_record||!(Math.round(e.scrollTop)+e.clientHeight>=e.scrollHeight-1)||(l.value.page++,await b())};return(e,s)=>{const f=T,C=O;return c(),i("div",V,[D(f,{title:"List Transaction"}),a("div",q,[a("div",G,[a("div",I,[a("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:s[0]||(s[0]=d=>S())},[D(C)])])]),a("div",P,[h(r).length==0?(c(),i("div",Q," Maaf Tidak Ada Record ")):(c(),i("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:N,onScroll:j},[a("table",Z,[K,a("tbody",null,[(c(!0),i(J,null,H(h(r),(d,v)=>(c(),i("tr",{key:v,onClick:X=>m.value=v,class:E(h(m)==v?"active":"")},[a("td",null,p(v+1)+".",1),a("td",null,p(d.jenis),1),a("td",null,p(d.ticket_no),1),a("td",null,p(d.lebih),1)],10,U))),128))])])],544))])])])}}};export{oe as default};