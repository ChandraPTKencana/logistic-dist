import{_ as q}from"./HeaderPopup.vue.7d6675e4.js";import F from"./AttachmentSingle.1eed3c45.js";import{r as u,f as I,G as S,j as M,m as P,J as j,o as m,c as p,a as e,b as C,t as o,k as l,l as w,x as E,E as R,A as v,B as N,p as Y,e as H}from"./entry.4e0470ce.js";import"./useUtils.0aec33fe.js";import{u as A}from"./useMyFetch.27e207cb.js";import{_ as T}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.d6c51406.js";import"./PDFJsView.d932fe01.js";const r=i=>(Y("data-v-a33e4fb0"),i=i(),H(),i),z={class:"box-fixed"},G={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},J={class:"w-full flex flex-wrap flex-row grow overflow-auto items-start"},K={class:"w-full sm:w-full md:w-1/2 flex flex-row flex-wrap"},O={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},U=r(()=>e("label",{for:""},"Name",-1)),L={class:"card-border"},Q={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},W=r(()=>e("label",{for:""},"Role",-1)),X={class:"card-border"},Z={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},ee=r(()=>e("label",{for:""},"No KTP",-1)),te={class:"card-border"},le={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},ae=r(()=>e("label",{for:""},"No SIM",-1)),se={class:"card-border"},oe={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},ie=r(()=>e("label",{for:""},"Bank Code",-1)),re={class:"card-border"},ne={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},de=r(()=>e("label",{for:""},"No Rek",-1)),ce={class:"card-border"},_e={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},fe=r(()=>e("label",{for:""},"Nama Rek",-1)),ue={class:"card-border"},me={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},pe=r(()=>e("label",{for:""},"Phone Number",-1)),ve={class:"card-border"},we={class:"p-1 w-full sm:w-full md:w-1/2 md:overflow-auto max-h-full"},he={class:"w-full flex items-center justify-end"},xe={class:"w-full flex flex-wrap p-3 items-center"},be=r(()=>e("div",null," Di Validasi oleh : ",-1)),ye={key:0,class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white text-xs"},ge={key:0},ke={__name:"employee_validasi",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},is_view:{type:Boolean,required:!1,default:!1}},setup(i){const n=i,{$moment:B}=R(),h={id:-1,name:"",tipe:"",is_transition:!1,amount:0,details:[],val:0,val_by:{username:""},val_at:"",val1:0,val1_by:{username:""},val1_at:"",attachment_1:"",attachment_1_preview:""},t=u({...h}),x=I("token"),b=u({}),y=u(null),g=u([]),$=async()=>{v().loading_full=!0,b.value={};const s=new FormData;let a="post",c=n.id;c==0||(s.append("id",c),s.append("_method","PUT"));const{data:_,error:f,status:d}=await A("/employee_validasi",{method:a,headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},body:s,retry:0});if(v().loading_full=!1,d.value==="error"){N().trigger(f,b);return}t.value.val=_.value.val,t.value.val_user=_.value.val_user,t.value.val_by=_.value.val_by,t.value.val_at=_.value.val_at;let k=n.p_data.map(V=>V.id).indexOf(n.id);k>=-1&&n.p_data.splice(k,1,{...t.value}),n.fnClose()},D=async()=>{v().loading_full=!0;const{data:s,error:a,status:c}=await A("/employee",{method:"get",headers:{Authorization:`Bearer ${x.value}`,Accept:"application/json"},params:{id:n.id},retry:0});if(v().loading_full=!1,c.value==="error"){N().trigger(a);return}t.value=s.value.data,g.value=s.value.data.details};return S(()=>{let s=0;return g.value.forEach(a=>{a.p_status!="Remove"&&(s+=parseInt(a.amount))}),s}),S(()=>!1),M(()=>n.show,(s,a)=>{s==!0&&(t.value={...h},n.is_view==!1&&setTimeout(()=>{y.value.focus()},1),D())},{immediate:!0}),(s,a)=>{var f;const c=q,_=F;return P((m(),p("section",z,[e("div",null,[C(c,{title:"Form Master Standby Validation",fn:i.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",G,[e("div",J,[e("div",K,[e("div",O,[U,e("div",L,o(l(t).name),1)]),e("div",Q,[W,e("div",X,o(l(t).role),1)]),e("div",Z,[ee,e("div",te,o(l(t).ktp_no),1)]),e("div",le,[ae,e("div",se,o(l(t).sim_no),1)]),e("div",oe,[ie,e("div",re,o((f=l(t).bank)==null?void 0:f.code),1)]),e("div",ne,[de,e("div",ce,o(l(t).rek_no),1)]),e("div",_e,[fe,e("div",ue,o(l(t).rek_name),1)]),e("div",me,[pe,e("div",ve,o(l(t).phone_number),1)])]),e("div",we,[C(_,{label:"Attachment",value:l(t).attachment_1_preview,onSetFile:a[0]||(a[0]=d=>l(t).attachment_1=d),onSetPreview:a[1]||(a[1]=d=>l(t).attachment_1_preview=d)},null,8,["value"])])]),e("div",he,[e("div",xe,[be,l(t).val?(m(),p("div",ye,[l(t).val?(m(),p("div",ge," App 1 : "+o(l(t).val_by.username)+" ( "+o(l(t).val_at?l(B)(l(t).val_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):w("",!0)])):w("",!0)]),e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:a[2]||(a[2]=d=>i.fnClose())}," Cancel "),i.is_view==0?(m(),p("button",{key:0,ref_key:"it_val",ref:y,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:a[3]||(a[3]=E(d=>$(),["prevent"]))}," Validasi ",512)):w("",!0)])])])],512)),[[j,i.show]])}}},qe=T(ke,[["__scopeId","data-v-a33e4fb0"]]);export{qe as default};