import{_ as Me}from"./Header.f3bca4a7.js";import{_ as Se}from"./Plus.ac60accc.js";import{_ as Te}from"./Edit.e515dbb4.js";import{_ as Ae}from"./Eyes.ab176ef9.js";import{_ as Ie}from"./Delete.38a975d6.js";import{_ as Ne}from"./Signature.ff217a9a.js";import{_ as J}from"./_plugin-vue_export-helper.c27b6911.js";import{o as r,c as d,a as e,f as X,r as m,g as ie,h as Q,v as de,b as x,t as s,k as t,F as L,n as E,q as W,d as ae,s as ce,x as M,y as U,p as _e,e as me,L as ne,J as Be,w as He,m as fe,i as pe,j as he,D as Re,B as ze,H as re,I as Ve,N as ue,G as Le,E as Oe}from"./entry.ba93168e.js";import{_ as ve}from"./Search.a4f5f920.js";import{_ as je}from"./PopupMini.vue.cf26ede3.js";import{_ as ye}from"./HeaderPopup.vue.0f3d52f5.js";import{_ as Fe}from"./client-only.7a8c325b.js";import{u as Ee}from"./useUtils.100f5b4a.js";import{u as Y}from"./useMyFetch.49a15a68.js";import"./Times.cce242e6.js";const Pe={name:"MaterialSymbolsChecklist"},Ue={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ye=e("path",{fill:"currentColor",d:"M5.55 19L2 15.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zm0-8L2 7.45l1.4-1.4l2.125 2.125l4.25-4.25l1.4 1.425zM13 17v-2h9v2zm0-8V7h9v2z"},null,-1),Ze=[Ye];function Qe(w,h,D,k,v,$){return r(),d("svg",Ue,Ze)}const We=J(Pe,[["render",Qe]]),Je={name:"IconoirTable2Columns"},Ke={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},Ge=e("path",{fill:"none",stroke:"currentColor","stroke-width":"1.5",d:"M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Zm0-3.9h18M3 12h18m0-4.5H3M12 21V3"},null,-1),Xe=[Ge];function et(w,h,D,k,v,$){return r(),d("svg",Ke,Xe)}const tt=J(Je,[["render",et]]);const Z=w=>(_e("data-v-e926be44"),w=w(),me(),w),st={class:"box-fixed"},lt={class:"w-full flex p-1 flex-wrap flex-row"},ot={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},at=Z(()=>e("div",{class:"font-bold"}," Warehouse Name ",-1)),nt={class:"w-full p-1"},rt={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},ut=Z(()=>e("div",{class:"font-bold"}," Item Name ",-1)),it={class:"w-full p-1"},dt={class:"w-full sm:w-1/3 md:w-1/3 lg:w-1/4 p-1"},ct=Z(()=>e("div",{class:"font-bold"}," Last Stock ",-1)),_t={class:"w-full p-1"},mt={class:"w-full flex justify-center items-center grow h-0 p-1"},ft={key:0,class:""},pt={class:"tacky"},ht=Z(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Input At"),e("th",null,"Type"),e("th",null,"Qty In"),e("th",null,"Qty Out"),e("th",null,"Qty Reminder"),e("th",null,"Note"),e("th",null,"Confirm At"),e("th",null,"Updated At")])],-1)),vt=["onClick"],yt=Z(()=>e("br",null,null,-1)),wt={__name:"summary_detail",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},warehouse_id:{type:Number,required:!1},item_id:{type:Number,required:!1},data:{type:Object,required:!0}},setup(w){const h=w,{$moment:D}=ce(),{pointFormat:k}=Ee(),v=X("token");m({from:"",to:""});const $=m([]),S=m(-1),i={};i._TimeZoneOffset=new Date().getTimezoneOffset();const O=async()=>{M().loading_full=!0,i.page=1,i.item_id=h.data.item.id,i.warehouse_id=h.data.rest.id,$.value=[];const{data:f,error:b,status:u}=await Y("/summary_detail_transactions",{method:"get",headers:{Authorization:`Bearer ${v.value}`,Accept:"application/json"},params:i,retry:0});if(M().loading_full=!1,u.value==="error"){U().trigger(b);return}$.value=f.value.data};return ie(()=>h.show,(f,b)=>{f==!0&&O()},{immediate:!0}),(f,b)=>{var y,j,T,V,A,q,I,F;const u=ye;return Q((r(),d("section",st,[e("div",null,[x(u,{title:"Summary Detail",fn:w.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",lt,[e("div",ot,[at,e("div",nt,s((j=(y=h.data)==null?void 0:y.rest)==null?void 0:j.lokasi),1)]),e("div",rt,[ut,e("div",it,s((V=(T=h.data)==null?void 0:T.item)==null?void 0:V.name),1)]),e("div",dt,[ct,e("div",_t,s((q=(A=h.data)==null?void 0:A.item)==null?void 0:q.qty_reminder)+" "+s((F=(I=h.data)==null?void 0:I.item)==null?void 0:F.unit_name),1)])]),e("div",mt,[t($).length==0?(r(),d("div",ft," Maaf Tidak Ada Record ")):(r(),d("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref:"loadRef",onScroll:b[0]||(b[0]=(...c)=>f.loadMore&&f.loadMore(...c))},[e("table",pt,[ht,e("tbody",null,[(r(!0),d(L,null,E(t($),(c,N)=>{var o,l,a,C,B,H;return r(),d("tr",{key:N,onClick:R=>S.value=N,class:W(t(S)==N?"active":"")},[e("td",null,s(N+1)+".",1),e("td",null,s(t(D)(c.input_at).format("DD-MM-Y")),1),e("td",null,[ae(s(c.type)+" ",1),yt,ae(" "+s(c.type=="transfer"?"To : "+c.lokasi:""),1)]),e("td",null,s(c.qty_in?t(k)(c.qty_in)+` ${(l=(o=h.data)==null?void 0:o.item)==null?void 0:l.unit_name}`:""),1),e("td",null,s(c.qty_out?t(k)(c.qty_out)+` ${(C=(a=h.data)==null?void 0:a.item)==null?void 0:C.unit_name}`:""),1),e("td",null,s(c.qty_reminder?t(k)(c.qty_reminder)+` ${(H=(B=h.data)==null?void 0:B.item)==null?void 0:H.unit_name}`:""),1),e("td",null,s(c.note),1),e("td",null,s(c.confirmed_at?t(D)(c.confirmed_at).format("DD-MM-Y HH:mm:ss"):""),1),e("td",null,s(t(D)(c.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,vt)}),128))])])],544))])])],512)),[[de,w.show]])}}},gt=J(wt,[["__scopeId","data-v-e926be44"]]);const we=w=>(_e("data-v-2afb09db"),w=w(),me(),w),$t={class:"box-fixed"},xt={action:"#",class:"w-full flex p-1"},kt={class:"w-full flex flex-row flex-wrap p-1 items-center"},bt=we(()=>e("label",{for:"",class:"pr-1"},"To",-1)),Ct={class:"grow"},Dt={class:"text-red-500"},qt={class:"flex items-end p-1"},Mt={class:"w-full flex"},St={class:"p-1"},Tt={class:"grow flex flex-row flex-wrap"},At={class:"p-1"},It=["onClick"],Nt={class:"w-full flex justify-center items-center grow h-0 p-1"},Bt={key:0,class:""},Ht={key:1,class:"w-full h-full overflow-auto",role:"sticky",ref:"loadRef"},Rt={class:"tacky"},zt={class:"sticky top-0 !z-[2]"},Vt=we(()=>e("th",null,null,-1)),Lt=["onClick"],Ot={class:"font-bold !text-left"},jt=["onClick"],Ft={__name:"summary",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(w){const h=w,D=X("token"),k=m({from:"",to:new Date}),v=m({}),$=m([]),S=m([]),i=m([]),O=m(-1),f=m(!1),b=m({}),u={};u._TimeZoneOffset=new Date().getTimezoneOffset();const y=async()=>{M().loading_full=!0,u.page=1,u.to=k.value.to,$.value=[];const{data:o,error:l,status:a}=await Y("/summary_transactions",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:u,retry:0});if(M().loading_full=!1,a.value==="error"){U().trigger(l);return}$.value=o.value.all,S.value=o.value.column_header,i.value=o.value.row_header};ie(()=>h.show,(o,l)=>{o==!0&&y()},{immediate:!0});const j=(o,l)=>{let a=$.value.filter(R=>R.id==o)[0];const{items:C,...B}=a;let H=a.items.filter(R=>R.id==l)[0];return{rest:B,item:H}},T=(o,l)=>$.value.filter(a=>a.id==o)[0].items.filter(a=>a.id==l)[0].qty_reminder,V=(o,l,a)=>{b.value=o,f.value=!0},A=m(""),q=m([]),I=o=>{let l=q.value.map(a=>a.id).indexOf(o.id);l==-1?q.value.push(o):q.value.splice(l,1)},F=o=>q.value.some(l=>l.id===o.id),c=ne(()=>{let o=[],l=q.value.map(a=>a.id);return S.value.forEach(a=>{l.indexOf(a.id)==-1&&o.push(a)}),o}),N=ne(()=>{let o=A.value;const l=new RegExp("("+o+")","i");return i.value.filter(a=>a.name.match(l))});return(o,l)=>{const a=ye,C=Be("vue-date-picker"),B=Fe,H=ve,R=gt;return r(),d(L,null,[Q(e("section",$t,[e("div",null,[x(a,{title:"Summary",fn:w.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",xt,[e("div",kt,[bt,e("div",Ct,[x(B,null,{default:He(()=>[x(C,{modelValue:t(k).to,"onUpdate:modelValue":l[0]||(l[0]=g=>t(k).to=g),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1})]),e("p",Dt,s(t(v).to),1)]),e("div",qt,[e("button",{style:{width:"38px",height:"38px"},type:"submit",name:"button",onClick:l[1]||(l[1]=fe(g=>y(),["prevent"]))},[x(H,{class:"text-2xl"})])])]),e("div",Mt,[e("div",St,[Q(e("input",{type:"text","onUpdate:modelValue":l[2]||(l[2]=g=>pe(A)?A.value=g:null),placeholder:"Item Name"},null,512),[[he,t(A)]])]),e("div",Tt,[(r(!0),d(L,null,E(t(S),g=>(r(),d("div",At,[e("div",{class:W(["p-1 rounded ring-1 ring-slate-500 cursor-pointer",F(g)?"bg-white text-black":"bg-slate-600 text-white"]),onClick:p=>I(g)},s(g.lokasi),11,It)]))),256))])]),e("div",Nt,[t($).length==0?(r(),d("div",Bt," Maaf Tidak Ada Record ")):(r(),d("div",Ht,[e("table",Rt,[e("thead",null,[e("tr",zt,[Vt,(r(!0),d(L,null,E(t(c),g=>(r(),d("th",null,s(g.lokasi),1))),256))])]),e("tbody",null,[(r(!0),d(L,null,E(t(N),(g,p)=>(r(),d("tr",{key:p,onClick:n=>O.value=p,class:W(t(O)==p?"active":"")},[e("th",Ot,s(g.name),1),(r(!0),d(L,null,E(t(c),n=>(r(),d("td",null,[e("a",{class:"text-blue-500 font-bold underline cursor-pointer",onClick:z=>V(j(n.id,g.id))},s(T(n.id,g.id)),9,jt)]))),256))],10,Lt))),128))])])],512))])])],512),[[de,w.show]]),x(R,{show:t(f),data:t(b),fnClose:()=>{f.value=!1}},null,8,["show","data","fnClose"])],64)}}},Et=J(Ft,[["__scopeId","data-v-2afb09db"]]),Pt={class:"w-full h-full flex flex-col"},Ut={class:"w-full flex grow flex-col overflow-auto h-0"},Yt={class:"w-full flex"},Zt=["disabled"],Qt={class:"text-sm absolute top-0 right-0 flex justify-end"},Wt={key:0,class:"w-2 h-2 rounded-full bg-red-700 border-2 border-solid border-red-950"},Jt={action:"#",class:"w-full flex p-1"},Kt={class:"grow"},Gt=e("div",{class:"font-bold"}," Keyword ",-1),Xt={class:"flex items-end pl-1"},es={class:"w-full flex justify-center items-center grow h-0 p-1"},ts={key:0,class:""},ss={class:"tacky"},ls=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"ID"),e("th",null,"Input At"),e("th",null,"Warehouse Name"),e("th",null,"Note"),e("th",null,"Status"),e("th",null,"Type"),e("th",null,"Warehouse Source Name"),e("th",null,"Warehouse Target Name"),e("th",null,"Confirmed At"),e("th",null,"Confirmed By"),e("th",null,"Requested At"),e("th",null,"Requested By")])],-1),os=["onClick"],as={class:"bold"},xs={__name:"index",async setup(w){let h,D;const{$moment:k}=ce(),v={};v._TimeZoneOffset=new Date().getTimezoneOffset();const $=X("token"),{data:S}=([h,D]=Re(async()=>Oe(async()=>{M().loading_full=!0;const{data:p,error:n,status:z}=await Y("/transactions",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:v,retry:0});if(M().loading_full=!1,z.value==="error")return U().trigger(n),[];let P=p.value.data,K=p.value.request_notif;return{transactions:P,request_notif:K}},"$45iBZgNANe")),h=await h,D(),h),i=m(S.value.transactions),O=m(S.value.request_notif),f=m(""),b=m({field:"updated_at",by:"desc"}),u=m(-1),y=m({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),j=()=>{v.like="",f.value!=""&&(v.like=`id:%${f.value}%,warehouse_name:%${f.value}%,warehouse_source_name:%${f.value}%,warehouse_target_name:%${f.value}%,item_name:%${f.value}%,status:%${f.value}%,type:%${f.value}%`),v.sort="",b.value.field&&(v.sort=b.value.field+":"+b.value.by)},T=m(null),V=async()=>{M().loading_full=!0,y.value.may_get_data=!1,v.page=y.value.page,v.page==1&&(i.value=[]),v.first_row&&delete v.first_row,v.page>1&&(v.first_row=JSON.stringify(i.value[0]));const{data:p,error:n,status:z}=await Y("/transactions",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:v,retry:0});if(M().loading_full=!1,y.value.may_get_data=!0,z.value==="error"){U().trigger(n);return}y.value.page==1?(i.value=p.value.data,T.value&&(T.value.scrollTop=0)):y.value.page>1&&(i.value=[...i.value,...p.value.data]),p.value.data.length==0&&(y.value.is_last_record=!0)},A=async()=>{if(!y.value.may_get_data)return;let p=T.value;if(p.scrollLeft!=y.value.scrollLeft){y.value.scrollLeft=p.scrollLeft;return}y.value.is_last_record||!(Math.round(p.scrollTop)+p.clientHeight>=p.scrollHeight-1)||(y.value.page++,await V())},q=()=>{y.value.page=1,y.value.is_last_record=!1,j(),V()},I=ze(),F=()=>{I.push({name:"data_transaksi-form",query:{id:""}})},{display:c}=re();Ve(re());const N=()=>{u.value==-1?c({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):I.push({name:"data_transaksi-form",query:{id:i.value[u.value].id}})},o=()=>{u.value==-1?c({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):I.push({name:"data_transaksi-confirm",query:{id:i.value[u.value].id}})},l=()=>{I.push({name:"data_transaksi-request"})},a=m({}),C=m(!1),B=async()=>{C.value&&(C.value=!1)},H=()=>{u.value==-1?c({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(a.value={id:i.value[u.value].id},C.value=!0)},R=async()=>{M().loading_full=!0;const p=new FormData;p.append("id",i.value[u.value].id),p.append("_method","DELETE");const{data:n,error:z,status:P}=await Y("/transaction",{method:"post",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},body:p,retry:0});if(M().loading_full=!1,P.value==="error"){U().trigger(z);return}i.value.splice(u.value,1),u.value=-1,C.value=!1},g=m(!1);return(p,n)=>{const z=Me,P=Se,K=Te,ge=Ae,$e=Ie,xe=Ne,ke=We,be=tt,Ce=ve,De=je,qe=Et;return r(),d("div",Pt,[x(z,{title:"List Transaction"}),e("div",Ut,[e("div",Yt,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:n[0]||(n[0]=_=>F())},[x(P)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:n[1]||(n[1]=_=>N())},[t(u)==-1||t(i)[t(u)].ref_id==null&&t(i)[t(u)].confirmed_by==null?(r(),ue(K,{key:0})):(r(),ue(ge,{key:1}))]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:n[2]||(n[2]=_=>H())},[x($e)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",disabled:t(u)==-1||t(i)[t(u)].confirmed_by,onClick:n[3]||(n[3]=_=>o())},[x(xe)],8,Zt),e("button",{type:"button",name:"button",class:"m-1 text-2xl relative",onClick:n[4]||(n[4]=_=>l())},[x(ke),e("div",Qt,[t(O)>0?(r(),d("div",Wt)):Le("",!0)])]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:n[5]||(n[5]=_=>g.value=!0)},[x(be)])]),e("form",Jt,[e("div",Kt,[Gt,Q(e("input",{class:"",type:"text","onUpdate:modelValue":n[6]||(n[6]=_=>pe(f)?f.value=_:null),name:"search",placeholder:"Keyword"},null,512),[[he,t(f)]])]),e("div",Xt,[e("button",{class:"",type:"submit",name:"button",onClick:n[7]||(n[7]=fe(_=>q(),["prevent"]))},[x(Ce,{class:"text-2xl"})])])]),e("div",es,[t(i).length==0?(r(),d("div",ts," Maaf Tidak Ada Record ")):(r(),d("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:T,onScroll:A},[e("table",ss,[ls,e("tbody",null,[(r(!0),d(L,null,E(t(i),(_,G)=>{var ee,te,se,le,oe;return r(),d("tr",{key:G,onClick:ns=>u.value=G,class:W(t(u)==G?"active":"")},[e("td",as,s(_.id),1),e("td",null,s(_.input_at?t(k)(_.input_at).format("DD-MM-Y"):""),1),e("td",null,s((ee=_.warehouse)==null?void 0:ee.name),1),e("td",null,s(_.note),1),e("td",null,s(_.status),1),e("td",null,s(_.type),1),e("td",null,s((te=_.warehouse_source)==null?void 0:te.name),1),e("td",null,s((se=_.warehouse_target)==null?void 0:se.name),1),e("td",null,s(_.confirmed_at?t(k)(_.confirmed_at).format("DD-MM-Y HH:mm:ss"):""),1),e("td",null,s((le=_.confirmer)==null?void 0:le.username),1),e("td",null,s(t(k)(_.requested_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,s((oe=_.requester)==null?void 0:oe.username),1)],10,os)}),128))])])],544))])]),x(De,{type:"delete",show:t(C),data:t(a),fnClose:B,fnConfirm:R},null,8,["show","data"]),x(qe,{show:t(g),fnClose:()=>{g.value=!1}},null,8,["show","fnClose"])])}}};export{xs as default};