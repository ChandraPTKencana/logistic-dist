import T from"./Header.64eb7973.js";import z from"./Refresh.8af4e9dd.js";import{r as o,f as B,g as O,c as i,b as A,a,k as h,F as J,y as H,z as R,o as c,C as E,t as p,A as n,B as Y,E as F}from"./entry.92b11eb7.js";import{u as C}from"./useMyFetch.dbdd839c.js";import"./_plugin-vue_export-helper.c27b6911.js";const V={class:"w-full h-full flex flex-col"},I={class:"w-full flex grow flex-col overflow-auto h-0"},P={class:"w-full flex justify-between flex-wrap"},Q={class:"grow flex"},Z={class:"w-full flex justify-center items-center grow h-0 p-1"},q={key:0,class:""},G={class:"tacky"},K=a("thead",null,[a("tr",{class:"sticky top-0 !z-[2]"},[a("th",null,"No."),a("th",null,"Jenis Tiket"),a("th",null,"No Ticket"),a("th",null,"Lebih")])],-1),U=["onClick"],oe={__name:"ticket_over",async setup(W){let u,y;const{$moment:k}=F(),w=o("ticket_not_done"),t={};t._TimeZoneOffset=new Date().getTimezoneOffset(),t.sort="tanggal:desc";const $=o({}),_=o({from:"",to:""}),x=B("token"),{data:D}=([u,y]=O(async()=>R(async()=>{n().loading_full=!0;let e=[];const[s,f]=await Promise.all([C("/trx_trps/ticket_over",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:{filter_status:w},retry:0})]);return s.status.value==="error"?(Y().trigger(s.error),{trx_trps:e}):(n().loading_full=!1,e=s.data.value.data,{trx_trps:e})},"$YfrrHQNie6")),u=await u,y(),u),r=o(D.value.trx_trps||[]),g=o({field:"tanggal",by:"desc"}),m=o(-1),l=o({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),L=()=>{t.like="";let e=JSON.parse(JSON.stringify(n()._tv.global_keyword));e!=""&&(t.like=`id:%${e}%,xto:%${e}%,jenis:%${e}%,pv_no:%${e}%,ticket_a_no:%${e}%,ticket_b_no:%${e}%,no_pol:%${e}%,supir:%${e}%,kernet:%${e}%,cost_center_code:%${e}%,cost_center_desc:%${e}%,pvr_no:%${e}%,tanggal:%${e}%,transition_target:%${e}%`),t.sort="",g.value.field&&(t.sort=g.value.field+":"+g.value.by),t.date_from=_.value.from?k(_.value.from).format("YYYY-MM-DD"):"",t.date_to=_.value.to?k(_.value.to).format("YYYY-MM-DD"):"",t.filter_model=JSON.stringify(n()._tv.filter_model)},b=async()=>{n().loading_full=!0,$.value={},l.value.may_get_data=!1,t.page=l.value.page,t.page==1&&(r.value=[]),t.first_row&&delete t.first_row,t.page>1&&(t.first_row=JSON.stringify(r.value[0])),t.filter_status=w.value;const{data:e,error:s,status:f}=await C("/trx_trps/ticket_over",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:t,retry:0});if(n().loading_full=!1,l.value.may_get_data=!0,f.value==="error"){Y().trigger(s,$);return}l.value.page==1?r.value=e.value.data:l.value.page>1&&(r.value=[...r.value,...e.value.data]),e.value.data.length==0&&(l.value.is_last_record=!0),n()._tv.filter_box=!1},M=()=>{m.value=-1,l.value.page=1,l.value.is_last_record=!1,L(),b()},N=o(null),S=async()=>{if(!l.value.may_get_data)return;let e=N.value;if(e.scrollLeft!=l.value.scrollLeft){l.value.scrollLeft=e.scrollLeft;return}l.value.is_last_record||!(Math.round(e.scrollTop)+e.clientHeight>=e.scrollHeight-1)||(l.value.page++,await b())};return(e,s)=>{const f=T,j=z;return c(),i("div",V,[A(f,{title:"List Transaction"}),a("div",I,[a("div",P,[a("div",Q,[a("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:s[0]||(s[0]=d=>M())},[A(j)])])]),a("div",Z,[h(r).length==0?(c(),i("div",q," Maaf Tidak Ada Record ")):(c(),i("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:N,onScroll:S},[a("table",G,[K,a("tbody",null,[(c(!0),i(J,null,H(h(r),(d,v)=>(c(),i("tr",{key:v,onClick:X=>m.value=v,class:E(h(m)==v?"active":"")},[a("td",null,p(v+1)+".",1),a("td",null,p(d.jenis),1),a("td",null,p(d.ticket_no),1),a("td",null,p(d.lebih),1)],10,U))),128))])])],544))])])])}}};export{oe as default};