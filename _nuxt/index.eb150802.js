import _e from"./Header.637f4676.js";import me from"./Plus.bceec68a.js";import pe from"./Edit.a592dc6c.js";import fe from"./Delete.55818aca.js";import ve from"./Signature.8684a870.js";import he from"./Search.f54c8c7d.js";import ge from"./Line.2431786d.js";import ye from"./Check.f62029d0.js";import ke from"./TypeIcon.9396034f.js";import{_ as be}from"./PopupMini.vue.bf0f543b.js";import xe from"./employee.35de97b8.js";import we from"./employee_validasi.ff5ed29e.js";import{f as De,g as Ce,r,h as Se,i as z,s as $e,j as Ae,c as k,a as e,b as c,m as S,v as H,k as o,n as O,q as U,x as Te,F as K,y as Me,w as Ie,z as Ne,A as g,B,o as f,C as Be,D as J,t as i,d as Ee,p as Fe,e as je,E as Le}from"./entry.e0b2ce62.js";import{u as E}from"./useMyFetch.7c8e1e1f.js";import{_ as Pe}from"./_plugin-vue_export-helper.c27b6911.js";import"./DocJPEG.a4b835ee.js";import"./DocJPG.17364789.js";import"./DocPNG.b8c309a5.js";import"./DocPDF.16dc763d.js";import"./Times.95294586.js";import"./Exclamation.8afe936b.js";import"./HeaderPopup.vue.e7ad54cc.js";import"./AttachmentSingle.fa91082c.js";import"./PDFJsView.9ca63cd5.js";import"./useUtils.f8f0bb33.js";const _=b=>(Fe("data-v-e72a147a"),b=b(),je(),b),Re={class:"w-full h-full flex flex-col"},Ve={class:"w-full flex grow flex-col overflow-auto h-0"},ze={class:"w-full flex"},He={action:"#",class:"w-full flex p-1"},Oe={class:"grow"},Ue=_(()=>e("div",{class:"font-bold"}," Keyword ",-1)),Ke={class:"pl-1"},Je=_(()=>e("div",{class:"font-bold"}," Sort By ",-1)),Ye=_(()=>e("option",{value:""},null,-1)),qe=_(()=>e("option",{value:"name"},"Nama",-1)),Ze=_(()=>e("option",{value:"role"},"Jabatan",-1)),Ge=[Ye,qe,Ze],Qe={class:"pl-1"},We=_(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),Xe=_(()=>e("option",{value:"asc"},"Asc",-1)),et=_(()=>e("option",{value:"desc"},"Desc",-1)),tt=[Xe,et],at={class:"flex items-end pl-1"},ot={class:"w-full flex justify-center items-center grow h-0 p-1"},lt={key:0,class:""},st={class:"tacky"},nt=_(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"App"),e("th",null,"No."),e("th",null,"Nama"),e("th",null,"Jabatan"),e("th",null,"No KTP"),e("th",null,"No SIM"),e("th",null,"Nama Bank"),e("th",null,"No Rek"),e("th",null,"Nama Rek"),e("th",null,"Phone Number"),e("th",null,"File"),e("th",null,"Tanggal Dibuat"),e("th",null,"Tanggal Diubah")])],-1)),rt=["onClick"],ut={class:"w-full h-full flex items-center justify-center"},it={class:"bold"},ct={class:"grow mb-5"},dt={__name:"index",async setup(b){let x,F;const{$moment:j}=Le(),d={};d._TimeZoneOffset=new Date().getTimezoneOffset();const $=De("token"),{data:s}=([x,F]=Ce(async()=>Ne(async()=>{g().loading_full=!0;const{data:l,error:a,status:p}=await E("/employees",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:d,retry:0});return g().loading_full=!1,p.value==="error"?(B().trigger(a),[]):l.value.data},"$p5jj5crAgd")),x=await x,F(),x),v=r(""),m=r({field:"",by:"desc"}),u=r(-1),n=r({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),Y=()=>{d.like="",v.value!=""&&(d.like=`id:%${v.value}%,name:%${v.value}%`),d.sort="",m.value.field&&(d.sort=m.value.field+":"+m.value.by)},w=r(null),L=async()=>{g().loading_full=!0,n.value.may_get_data=!1,d.page=n.value.page,d.page==1&&(s.value=[]);const{data:l,error:a,status:p}=await E("/employees",{method:"get",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},params:d,retry:0});if(g().loading_full=!1,n.value.may_get_data=!0,p.value==="error"){B().trigger(a);return}n.value.page==1?(s.value=l.value.data,w.value&&(w.value.scrollTop=0)):n.value.page>1&&(s.value=[...s.value,...l.value.data]),l.value.data.length==0&&(n.value.is_last_record=!0)},q=async()=>{if(!n.value.may_get_data)return;let l=w.value;if(l.scrollLeft!=n.value.scrollLeft){n.value.scrollLeft=l.scrollLeft;return}n.value.is_last_record||!(Math.round(l.scrollTop)+l.clientHeight>=l.scrollHeight-1)||(n.value.page++,await L())},Z=()=>{n.value.page=1,n.value.is_last_record=!1,Y(),L()};Se();const D=r(!1),A=r(0),G=()=>{A.value=0,D.value=!0},{display:T}=z();$e(z());const Q=()=>{u.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(A.value=s.value[u.value].id,D.value=!0)},M=r(!1),P=r(0),W=()=>{u.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(P.value=s.value[u.value].id,M.value=!0)},I=r(!1),R=r({}),y=r(!1),h=r(""),X=async()=>{y.value&&(y.value=!1)},ee=()=>{u.value==-1?T({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(h.value="",R.value={id:s.value[u.value].id},y.value=!0)};Ae(()=>h.value,l=>{l.trim().length>0?I.value=!0:I.value=!1},{immediate:!1});const te=async()=>{g().loading_full=!0;const l=new FormData;l.append("id",s.value[u.value].id),l.append("deleted_reason",h.value),l.append("_method","DELETE");const{data:a,error:p,status:N}=await E("/employee",{method:"post",headers:{Authorization:`Bearer ${$.value}`,Accept:"application/json"},body:l,retry:0});if(g().loading_full=!1,N.value==="error"){B().trigger(p);return}s.value.splice(u.value,1),u.value=-1,y.value=!1};return(l,a)=>{const p=_e,N=me,ae=pe,oe=fe,le=ve,se=he,ne=ge,re=ye,ue=ke,ie=be,ce=xe,de=we;return f(),k(K,null,[e("div",Re,[c(p,{title:"List Employee"}),e("div",Ve,[e("div",ze,[e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:a[0]||(a[0]=t=>G())},[c(N)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:a[1]||(a[1]=t=>Q())},[c(ae)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:a[2]||(a[2]=t=>ee())},[c(oe)]),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:a[3]||(a[3]=t=>W())},[c(le)])]),e("form",He,[e("div",Oe,[Ue,S(e("input",{class:"",type:"text","onUpdate:modelValue":a[4]||(a[4]=t=>O(v)?v.value=t:null),name:"search",placeholder:"Keyword"},null,512),[[H,o(v)]])]),e("div",Ke,[Je,S(e("select",{class:"","onUpdate:modelValue":a[5]||(a[5]=t=>o(m).field=t)},Ge,512),[[U,o(m).field]])]),e("div",Qe,[We,S(e("select",{class:"","onUpdate:modelValue":a[6]||(a[6]=t=>o(m).by=t)},tt,512),[[U,o(m).by]])]),e("div",at,[e("button",{class:"",type:"submit",name:"button",onClick:a[7]||(a[7]=Te(t=>Z(),["prevent"]))},[c(se,{class:"text-2xl"})])])]),e("div",ot,[o(s).length==0?(f(),k("div",lt," Maaf Tidak Ada Record ")):(f(),k("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:w,onScroll:q},[e("table",st,[nt,e("tbody",null,[(f(!0),k(K,null,Me(o(s),(t,C)=>{var V;return f(),k("tr",{key:C,onClick:_t=>u.value=C,class:Be(o(u)==C?"active":"")},[e("td",null,[e("div",ut,[t.val?(f(),J(re,{key:1})):(f(),J(ne,{key:0}))])]),e("td",null,i(C+1)+".",1),e("td",it,i(t.name),1),e("td",null,i(t.role),1),e("td",null,i(t.ktp_no),1),e("td",null,i(t.sim_no),1),e("td",null,i((V=t.bank)==null?void 0:V.code),1),e("td",null,i(t.rek_no),1),e("td",null,i(t.rek_name),1),e("td",null,i(t.phone_number),1),e("td",null,[c(ue,{value:t.attachment_1_preview},null,8,["value"])]),e("td",null,i(o(j)(t.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,i(o(j)(t.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,rt)}),128))])])],544))])])]),c(ie,{type:"delete",show:o(y),data:o(R),fnClose:X,fnConfirm:te,enabledOk:o(I)},{footer:Ie(()=>[Ee(" Masukkan Alasan Penghapusan: "),e("div",ct,[S(e("textarea",{"onUpdate:modelValue":a[8]||(a[8]=t=>O(h)?h.value=t:null)},null,512),[[H,o(h)]])])]),_:1},8,["show","data","enabledOk"]),c(ce,{show:o(D),fnClose:()=>{D.value=!1},id:o(A),p_data:o(s)},null,8,["show","fnClose","id","p_data"]),c(de,{show:o(M),fnClose:()=>{M.value=!1},id:o(P),p_data:o(s)},null,8,["show","fnClose","id","p_data"])],64)}}},Pt=Pe(dt,[["__scopeId","data-v-e72a147a"]]);export{Pt as default};