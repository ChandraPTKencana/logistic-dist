import ie from"./Header.c1b17b6c.js";import ce from"./Plus.0745f5f3.js";import de from"./Edit.c3f2666e.js";import _e from"./Eyes.97c81736.js";import me from"./Delete.99dea7c2.js";import fe from"./Signature.94a2dfb3.js";import pe from"./Line.31a286ec.js";import ve from"./Check.124d4ca6.js";import{_ as he}from"./PopupMini.vue.39e3e679.js";import ye from"./salary_bonus.afe045b3.js";import ge from"./salary_bonus_validasi.c5422f51.js";import{f as ke,g as we,r,h as be,i as V,s as xe,j as De,c,b as m,a as e,k as t,l as v,F as Ce,y as Ae,w as Te,z as Se,A as h,B as N,o as u,C as $e,D as A,t as _,d as Me,m as Pe,v as Ue,n as Be,E as Fe}from"./entry.ee76e376.js";import{u as y}from"./useUtils.56dadbdf.js";import{u as L}from"./useMyFetch.ece246bd.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.fd762f40.js";import"./Exclamation.930b4073.js";import"./HeaderPopup.vue.6354cbe7.js";import"./client-only.3a70806c.js";import"./WidthMiniList.vue.089219ee.js";import"./WidthMiniPart.vue.efce8626.js";import"./InputPointFormat.vue.14ffbec2.js";import"./AttachmentSingle.250ddaf9.js";import"./PDFJsView.ffc1cc45.js";const Ne={class:"w-full h-full flex flex-col"},Le={class:"w-full flex grow flex-col overflow-auto h-0"},Ie={class:"w-full flex"},Oe={class:"w-full flex justify-center items-center grow h-0 p-1"},Ee={key:0,class:""},je={class:"tacky"},ze=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"App 1"),e("th",null,"App 2"),e("th",null,"ID"),e("th",null,"Tanggal"),e("th",null,"Tipe"),e("th",null,"Nama Karyawan"),e("th",null,"No KTP"),e("th",null,"No SIM"),e("th",null,"Nominal"),e("th",null,"Note"),e("th",null,"Lampiran"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1),He=["onClick"],Re={class:"flex items-center justify-center"},Ve={class:"flex items-center justify-center"},Ye={class:"bold"},Ke=["src"],Je={class:"grow mb-5"},kt={__name:"index",async setup(Ze){let w,I;const{$moment:T}=Fe(),{pointFormat:Y}=y(),d={};d._TimeZoneOffset=new Date().getTimezoneOffset(),d.sort="created_at:desc";const S=ke("token"),{data:K}=([w,I]=we(async()=>Se(async()=>{let a=[];h().loading_full=!0;const{data:o,error:f,status:k}=await L("/salary_bonuses",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:d,retry:0});return h().loading_full=!1,k.value==="error"?(N().trigger(f),{salary_bonuses:a}):(a=o.value.data,{salary_bonuses:a})},"$tya7A7egnO")),w=await w,I(),w),n=r(K.value.salary_bonuses);r(""),r({field:"created_at",by:"desc"});const s=r(-1),i=r({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),b=r(null),J=async()=>{h().loading_full=!0,i.value.may_get_data=!1,d.page=i.value.page,d.page==1&&(n.value=[]),d.first_row&&delete d.first_row,d.page>1&&(d.first_row=JSON.stringify(n.value[0]));const{data:a,error:o,status:f}=await L("/salary_bonuses",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:d,retry:0});if(h().loading_full=!1,i.value.may_get_data=!0,f.value==="error"){N().trigger(o);return}i.value.page==1?(n.value=a.value.data,b.value&&(b.value.scrollTop=0)):i.value.page>1&&(n.value=[...n.value,...a.value.data]),a.value.data.length==0&&(i.value.is_last_record=!0)},Z=async()=>{if(!i.value.may_get_data)return;let a=b.value;if(a.scrollLeft!=i.value.scrollLeft){i.value.scrollLeft=a.scrollLeft;return}i.value.is_last_record||!(Math.round(a.scrollTop)+a.clientHeight>=a.scrollHeight-1)||(i.value.page++,await J())};be();const x=r(!1),$=r(0),M=r(0),q=()=>{$.value=0,x.value=!0,M.value=!1},{display:D}=V();xe(V());const G=()=>{s.value==-1?D({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):($.value=n.value[s.value].id,x.value=!0,M.value=!1)},C=r(!1),P=r(0),U=r(!1),Q=()=>{s.value==-1?D({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(P.value=n.value[s.value].id,C.value=!0,U.value=!1)},W=()=>{s.value==-1?D({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(P.value=n.value[s.value].id,C.value=!0,U.value=!0)},B=r(!1),O=r({}),g=r(!1),p=r(""),X=async()=>{g.value&&(g.value=!1)},ee=()=>{s.value==-1?D({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(p.value="",O.value={id:n.value[s.value].id},g.value=!0)};De(()=>p.value,a=>{a.trim().length>0?B.value=!0:B.value=!1},{immediate:!1});const te=async()=>{h().loading_full=!0;const a=new FormData;a.append("id",n.value[s.value].id),a.append("deleted_reason",p.value),a.append("_method","DELETE");const{data:o,error:f,status:k}=await L("/salary_bonus",{method:"post",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},body:a,retry:0});if(h().loading_full=!1,k.value==="error"){N().trigger(f);return}n.value.splice(s.value,1),s.value=-1,g.value=!1};return(a,o)=>{const f=ie,k=ce,ae=de,le=_e,se=me,oe=fe,E=pe,j=ve,ne=he,re=ye,ue=ge;return u(),c("div",Ne,[m(f,{title:"List Salary Bonus"}),e("div",Le,[e("div",Ie,[("useUtils"in a?a.useUtils:t(y))().checkPermission("salary_bonus.create")?(u(),c("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:o[0]||(o[0]=l=>q())},[m(k)])):v("",!0),("useUtils"in a?a.useUtils:t(y))().checkPermissions(["salary_bonus.modify"])&&t(s)>-1&&[void 0,0].indexOf(t(n)[t(s)].val1)>-1?(u(),c("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:o[1]||(o[1]=l=>G())},[m(ae)])):v("",!0),("useUtils"in a?a.useUtils:t(y))().checkPermissions(["salary_bonus.view"])&&t(s)>-1&&[void 0,0].indexOf(t(n)[t(s)].val1)>-1?(u(),c("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:o[2]||(o[2]=l=>W())},[m(le)])):v("",!0),("useUtils"in a?a.useUtils:t(y))().checkPermission("salary_bonus.remove")&&t(s)>-1?(u(),c("button",{key:3,type:"button",name:"button",class:"m-1 text-2xl",onClick:o[3]||(o[3]=l=>ee())},[m(se)])):v("",!0),("useUtils"in a?a.useUtils:t(y))().checkPermissions(["salary_bonus.val1","salary_bonus.val2","salary_bonus.val3"])&&t(s)>-1?(u(),c("button",{key:4,type:"button",name:"button",class:"m-1 text-2xl",onClick:o[4]||(o[4]=l=>Q())},[m(oe)])):v("",!0)]),e("div",Oe,[t(n).length==0?(u(),c("div",Ee," Maaf Tidak Ada Record ")):(u(),c("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:b,onScroll:Z},[e("table",je,[ze,e("tbody",null,[(u(!0),c(Ce,null,Ae(t(n),(l,F)=>{var z,H,R;return u(),c("tr",{key:F,onClick:qe=>s.value=F,class:$e(t(s)==F?"active":"")},[e("td",null,[e("div",Re,[l.val1?(u(),A(j,{key:1})):(u(),A(E,{key:0}))])]),e("td",null,[e("div",Ve,[l.val2?(u(),A(j,{key:1})):(u(),A(E,{key:0}))])]),e("td",Ye,_(l.id),1),e("td",null,_(l.tanggal?t(T)(l.tanggal).format("DD-MM-Y"):""),1),e("td",null,_(l.type),1),e("td",null,_((z=l.employee)==null?void 0:z.name),1),e("td",null,_((H=l.employee)==null?void 0:H.ktp_no),1),e("td",null,_((R=l.employee)==null?void 0:R.sim_no),1),e("td",null,_(t(Y)(l.nominal||0)),1),e("td",null,_(l.note),1),e("td",null,[l.attachment_1_preview?(u(),c("img",{key:0,src:l.attachment_1_preview},null,8,Ke)):v("",!0)]),e("td",null,_(l.created_at?t(T)(l.created_at).format("DD-MM-Y HH:mm:ss"):""),1),e("td",null,_(l.updated_at?t(T)(l.updated_at).format("DD-MM-Y HH:mm:ss"):""),1)],10,He)}),128))])])],544))])]),m(ne,{type:"delete",show:t(g),data:t(O),fnClose:X,fnConfirm:te,enabledOk:t(B)},{footer:Te(()=>[Me(" Masukkan Alasan Penghapusan: "),e("div",Je,[Pe(e("textarea",{"onUpdate:modelValue":o[5]||(o[5]=l=>Be(p)?p.value=l:null)},null,512),[[Ue,t(p)]])])]),_:1},8,["show","data","enabledOk"]),m(re,{show:t(x),fnClose:()=>{x.value=!1},id:t($),p_data:t(n),is_copy:t(M)},null,8,["show","fnClose","id","p_data","is_copy"]),m(ue,{show:t(C),fnClose:()=>{C.value=!1},id:t(P),p_data:t(n),is_view:t(U)},null,8,["show","fnClose","id","p_data","is_view"])])}}};export{kt as default};