import{_ as F}from"./HeaderPopup.vue.794dd8e3.js";import P from"./AttachmentSingle.b4c2510b.js";import{r as u,g as V,i as Y,f as j,k as q,J as I,o as m,c as p,a as e,b as D,t as l,l as t,n as h,C as T,G as J,x as v,y as M,p as R,e as E}from"./entry.b6e16180.js";import{u as H}from"./useUtils.ec700263.js";import{u as N}from"./useMyFetch.ce7be1f1.js";import{_ as K}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.1d45301c.js";import"./PDFJsView.99362033.js";const a=r=>(R("data-v-3d39210b"),r=r(),E(),r),z={class:"box-fixed"},L={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},U={class:"w-full flex flex-wrap flex-row grow overflow-auto items-start"},G={class:"w-full sm:w-full md:w-1/3 flex flex-row flex-wrap"},O={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},Q=a(()=>e("label",{for:""},"Name",-1)),W={class:"card-border"},X={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},Z=a(()=>e("label",{for:""},"Role",-1)),ee={class:"card-border"},se={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},te=a(()=>e("label",{for:""},"No KTP",-1)),le={class:"card-border"},oe={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},ae=a(()=>e("label",{for:""},"No SIM",-1)),de={class:"card-border"},re={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},ie=a(()=>e("label",{for:""},"Bank Code",-1)),ne={class:"card-border"},ce={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},_e=a(()=>e("label",{for:""},"No Rek",-1)),fe={class:"card-border"},ue={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},me=a(()=>e("label",{for:""},"Nama Rek",-1)),pe={class:"card-border"},ve={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},we=a(()=>e("label",{for:""},"Phone Number",-1)),he={class:"card-border"},xe={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},be=a(()=>e("label",{for:""},"Tanggal Lahir",-1)),ye={class:"card-border"},ge={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},ke=a(()=>e("label",{for:""},"Tempat Lahir",-1)),Se={class:"card-border"},Ce={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},Ye=a(()=>e("label",{for:""},"TMK",-1)),De={class:"card-border"},Me={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},Ne=a(()=>e("label",{for:""},"Alamat",-1)),Ae={class:"card-border"},Be={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},$e=a(()=>e("label",{for:""},"Status",-1)),Fe={class:"card-border"},Pe={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},Ve=a(()=>e("label",{for:""},"BPJS Kesehatan",-1)),je={class:"card-border"},qe={class:"w-1/2 sm:w-1/2 md:w-full flex flex-col flex-wrap p-1"},Ie=a(()=>e("label",{for:""},"BPJS Jamsos",-1)),Te={class:"card-border"},Je={class:"p-1 w-full sm:w-full md:w-2/3 md:overflow-auto max-h-full"},Re={class:"w-full flex items-center justify-end"},Ee={class:"w-full flex flex-wrap p-3 items-center"},He=a(()=>e("div",null," Di Validasi oleh : ",-1)),Ke={key:0,class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white text-xs"},ze={key:0},Le={__name:"employee_validasi",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},is_view:{type:Boolean,required:!1,default:!1}},setup(r){const i=r,{$moment:w}=J(),{pointFormat:x}=H(),b={id:-1,name:"",tipe:"",is_transition:!1,amount:0,details:[],val:0,val_by:{username:""},val_at:"",val1:0,val1_by:{username:""},val1_at:"",attachment_1:"",attachment_1_preview:""},s=u({...b}),y=V("token"),g=u({}),k=u(null),S=u([]),A=async()=>{v().loading_full=!0,g.value={};const d=new FormData;let o="post",c=i.id;c==0||(d.append("id",c),d.append("_method","PUT"));const{data:_,error:f,status:n}=await N("/employee_validasi",{method:o,headers:{Authorization:`Bearer ${y.value}`,Accept:"application/json"},body:d,retry:0});if(v().loading_full=!1,n.value==="error"){M().trigger(f,g);return}s.value.val=_.value.val,s.value.val_user=_.value.val_user,s.value.val_by=_.value.val_by,s.value.val_at=_.value.val_at;let C=i.p_data.map($=>$.id).indexOf(i.id);C>=-1&&i.p_data.splice(C,1,{...s.value}),i.fnClose()},B=async()=>{v().loading_full=!0;const{data:d,error:o,status:c}=await N("/employee",{method:"get",headers:{Authorization:`Bearer ${y.value}`,Accept:"application/json"},params:{id:i.id},retry:0});if(v().loading_full=!1,c.value==="error"){M().trigger(o);return}s.value=d.value.data,S.value=d.value.data.details};return Y(()=>{let d=0;return S.value.forEach(o=>{o.p_status!="Remove"&&(d+=parseInt(o.amount))}),d}),Y(()=>!1),j(()=>i.show,(d,o)=>{d==!0&&(s.value={...b},i.is_view==!1&&setTimeout(()=>{k.value.focus()},1),B())},{immediate:!0}),(d,o)=>{var f;const c=F,_=P;return q((m(),p("section",z,[e("div",null,[D(c,{title:"Form Master Standby Validation",fn:r.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",L,[e("div",U,[e("div",G,[e("div",O,[Q,e("div",W,l(t(s).name),1)]),e("div",X,[Z,e("div",ee,l(t(s).role),1)]),e("div",se,[te,e("div",le,l(t(s).ktp_no),1)]),e("div",oe,[ae,e("div",de,l(t(s).sim_no),1)]),e("div",re,[ie,e("div",ne,l((f=t(s).bank)==null?void 0:f.code),1)]),e("div",ce,[_e,e("div",fe,l(t(s).rek_no),1)]),e("div",ue,[me,e("div",pe,l(t(s).rek_name),1)]),e("div",ve,[we,e("div",he,l(t(s).phone_number),1)]),e("div",xe,[be,e("div",ye,l(t(w)(t(s).birth_date).format("DD-MM-YYYY")),1)]),e("div",ge,[ke,e("div",Se,l(t(s).birth_place),1)]),e("div",Ce,[Ye,e("div",De,l(t(w)(t(s).tmk).format("DD-MM-YYYY")),1)]),e("div",Me,[Ne,e("div",Ae,l(t(s).address),1)]),e("div",Be,[$e,e("div",Fe,l(t(s).status),1)]),e("div",Pe,[Ve,e("div",je,l(t(x)(t(s).bpjs_kesehatan)),1)]),e("div",qe,[Ie,e("div",Te,l(t(x)(t(s).bpjs_jamsos)),1)])]),e("div",Je,[D(_,{label:"Attachment",value:t(s).attachment_1_preview,onSetFile:o[0]||(o[0]=n=>t(s).attachment_1=n),onSetPreview:o[1]||(o[1]=n=>t(s).attachment_1_preview=n)},null,8,["value"])])]),e("div",Re,[e("div",Ee,[He,t(s).val?(m(),p("div",Ke,[t(s).val?(m(),p("div",ze," App 1 : "+l(t(s).val_by.username)+" ( "+l(t(s).val_at?t(w)(t(s).val_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):h("",!0)])):h("",!0)]),e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:o[2]||(o[2]=n=>r.fnClose())}," Cancel "),r.is_view==0?(m(),p("button",{key:0,ref_key:"it_val",ref:k,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:o[3]||(o[3]=T(n=>A(),["prevent"]))}," Validasi ",512)):h("",!0)])])])],512)),[[I,r.show]])}}},ss=K(Le,[["__scopeId","data-v-3d39210b"]]);export{ss as default};