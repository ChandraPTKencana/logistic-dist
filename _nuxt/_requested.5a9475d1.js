import{_ as G}from"./HeaderPopup.vue.a0078f0a.js";import Q from"./Search.914e4a0e.js";import{_ as W}from"./PopupMini.vue.c7e795ad.js";import{r as d,h as X,I as ee,z as te,o as _,c as v,n as C,v as ae,a as e,b as S,B as I,q as le,m as n,F as D,D as R,t as u,C as se,E as oe,w as re,d as z,H as ne,x as w,y as L,p as ue,e as ie}from"./entry.f2e433ad.js";import"./useUtils.7a797e50.js";import{u as N}from"./useMyFetch.04b8e4b6.js";import{_ as de}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.ab10e003.js";import"./Exclamation.d5d43ff9.js";const k=c=>(ue("data-v-f17731dd"),c=c(),ie(),c),ce={class:"box-fixed"},fe={class:"w-full flex p-1"},_e={class:"grow"},ve=k(()=>e("div",{class:"font-bold"}," Keyword ",-1)),me={class:"flex flex-col ml-1"},pe=k(()=>e("div",{class:"font-bold"}," Filter ",-1)),he=["value"],ge={class:"flex items-end pl-1"},ye={class:"w-full flex justify-center items-center grow h-0 p-1"},we={key:0,class:""},ke={class:"tacky"},xe=k(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Created At"),e("th",null,"Updated At"),e("th",null,"Id"),e("th",null,"Source"),e("th",null,"Target"),e("th",null,"Status"),e("th",null,"Requested At"),e("th",null,"Requested By")])],-1)),be=["onClick"],qe={class:"flex",style:{"justify-content":"end",padding:"5px"}},Ce=k(()=>e("b",null,"tidak dapat dikembalikan lagi",-1)),Se={__name:"_requested",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},emits:["update_request_notif"],setup(c,{emit:V}){const O=c,{$moment:x}=ne(),M=[{var:"all",val:"All"},{var:"warehouse_target_name",val:"Target"},{var:"warehouse_source_name",val:"Source"}],m=d("all"),$=X("token"),s=d([]),f=d(""),b=d({field:"created_at",by:"asc"}),i=d(-1),r=d({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),o={};o._TimeZoneOffset=new Date().getTimezoneOffset();const P=()=>{o.like="",f.value!=""&&(o.like="",m.value=="all"?o.like=M.filter(t=>t.var!="all").map(t=>`${t.var}:%${f.value}%`).join(","):o.like=`${m.value}:%${f.value}%`),o.sort="",b.value.field&&(o.sort=b.value.field+":"+b.value.by)},g=d(null),A=async()=>{w().loading_full=!0,r.value.may_get_data=!1,o.page=r.value.page,o.page==1&&(s.value=[]),o.first_row&&delete o.first_row,o.page>1&&(o.first_row=JSON.stringify(s.value[0]));const{data:t,error:l,status:h}=await N("/request_transactions",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:o,retry:0});if(w().loading_full=!1,r.value.may_get_data=!0,h.value==="error"){L().trigger(l);return}r.value.page==1?(s.value=t.value.data,g.value&&(g.value.scrollTop=0)):r.value.page>1&&(s.value=[...s.value,...t.value.data]),t.value.data.length==0&&(r.value.is_last_record=!0)},E=async()=>{if(!r.value.may_get_data)return;let t=g.value;if(t.scrollLeft!=r.value.scrollLeft){r.value.scrollLeft=t.scrollLeft;return}r.value.is_last_record||!(Math.round(t.scrollTop)+t.clientHeight>=t.scrollHeight-1)||(r.value.page++,await A())},T=()=>{r.value.page=1,r.value.is_last_record=!1,P(),A()};ee(()=>O.show,(t,l)=>{t==!0&&T()},{immediate:!0});const{display:U}=te(),H=d({}),p=d(!1),Y=()=>{i.value==-1?U({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(H.value={id:s.value[i.value].id,source:s.value[i.value].warehouse_source.name,target:s.value[i.value].warehouse_target.name,"qty in":s.value[i.value].qty_in},p.value=!0)},K=async()=>{p.value&&(p.value=!1)},J=async()=>{w().loading_full=!0;const t=new FormData;t.append("id",s.value[i.value].id);const{data:l,error:h,status:q}=await N("/request_transaction_confirm",{method:"post",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},body:t,retry:0});if(w().loading_full=!1,q.value==="error"){L().trigger(h);return}s.value.splice(i.value,1),V("update_request_notif",s.value.length),p.value=!1};return(t,l)=>{const h=G,q=Q,Z=W;return _(),v(D,null,[C(e("section",ce,[e("div",null,[S(h,{title:"Request Transaction",fn:c.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",fe,[e("div",_e,[ve,C(e("input",{class:"",type:"text","onUpdate:modelValue":l[0]||(l[0]=a=>I(f)?f.value=a:null),name:"search",placeholder:"Keyword"},null,512),[[le,n(f)]])]),e("div",me,[pe,C(e("select",{class:"grow","onUpdate:modelValue":l[1]||(l[1]=a=>I(m)?m.value=a:null)},[(_(),v(D,null,R(M,a=>e("option",{value:a.var},u(a.val),9,he)),64))],512),[[se,n(m)]])]),e("div",ge,[e("button",{class:"",type:"button",name:"button",onClick:l[2]||(l[2]=a=>T())},[S(q,{class:"text-2xl"})])])]),e("div",ye,[n(s).length==0?(_(),v("div",we," Maaf Tidak Ada Record ")):(_(),v("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:g,onScroll:E},[e("table",ke,[xe,e("tbody",null,[(_(!0),v(D,null,R(n(s),(a,y)=>{var B,F,j;return _(),v("tr",{key:y,onClick:De=>i.value=y,class:oe(n(i)==y?"active":"")},[e("td",null,u(y+1)+".",1),e("td",null,u(n(x)(a.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,u(n(x)(a.updated_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,u(a.id),1),e("td",null,u((B=a.warehouse_source)==null?void 0:B.name),1),e("td",null,u((F=a.warehouse_target)==null?void 0:F.name),1),e("td",null,u(a.status),1),e("td",null,u(n(x)(a.requested_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,u((j=a.requester)==null?void 0:j.username),1)],10,be)}),128))])])],544))]),e("div",qe,[e("button",{onClick:l[3]||(l[3]=a=>c.fnClose()),class:"w-36 m-1 text-black rounded-sm"}," Cancel "),e("button",{onClick:l[4]||(l[4]=a=>Y()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Confirm ")])])],512),[[ae,c.show]]),S(Z,{type:"custome",show:n(p),data:n(H),fnClose:K,fnConfirm:J},{words:re(()=>[z(" Data akan diproses dan "),Ce,z(", yakin untuk melanjutkan ? ")]),_:1},8,["show","data"])],64)}}},Re=de(Se,[["__scopeId","data-v-f17731dd"]]);export{Re as default};