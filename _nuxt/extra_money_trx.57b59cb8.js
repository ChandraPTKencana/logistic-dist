import{_ as G}from"./HeaderPopup.vue.6f95255f.js";import{_ as H}from"./client-only.3743e9d4.js";import{_ as W}from"./WidthMiniList.vue.e88195f3.js";import Y from"./AttachmentSingle.2192c367.js";import{r as u,f as K,G as C,j as Q,I as X,m as x,J as Z,o as c,c as v,a,b as f,k as n,v as D,t as p,w as ee,F as $,y as F,q as te,x as ae,l as oe,A as y,B as A,E as le}from"./entry.ec864cca.js";import{u as ne}from"./useUtils.19b1f0ba.js";import{u as V}from"./useMyFetch.5948619c.js";import"./Times.42d1398d.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./WidthMiniPart.vue.1b1adf8f.js";import"./PDFJsView.36b27175.js";const re={class:"box-fixed"},se={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},ie={class:"w-full flex flex-col items-center grow overflow-auto"},_e={class:"w-full flex flex-row flex-wrap"},de={class:"w-full sm:w-3/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},me=a("label",{for:""},"Trx Trp #ID",-1),pe={class:"text-red-500"},ue={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},ce=a("label",{for:""},"Tanggal",-1),ve={class:"grow"},fe={class:"text-red-500"},ye={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},xe=a("label",{for:""},"Payment Method",-1),we=["disabled"],he=["value"],ge={class:"text-red-500"},ke={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Se=a("label",{for:""},"No Pol",-1),Ne=["disabled"],be={id:"vehicle"},Oe=["value"],Je={class:"text-red-500"},Ce={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},De=a("label",{for:""},"Pekerja",-1),Ae={class:"text-red-500"},Ve={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},Be=a("label",{for:""},"Uang Tambahan",-1),Ie={class:"text-red-500"},Me={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},Te=a("label",{for:""},"Note For Remarks",-1),$e={class:"text-red-500"},Fe={class:"p-1 w-full sm:w-full md:w-2/3 md:overflow-auto max-h-full"},Ue={class:"w-full flex items-center justify-end"},Ke={__name:"extra_money_trx",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]}},setup(w){const _=w,{$moment:U}=le(),{pointFormat:h}=ne(),B={id:-1,tanggal:new Date,employee:{id:0},extra_money:{id:0},pv_id:-1,pv_no:"",pv_total:0,no_pol:"",note_for_remarks:"",cost_center_code:"",cost_center_desc:"",pvr_id:"",pvr_no:"",pvr_total:0,pvr_complete:"",payment_method_id:2,payment_method:{id:0,name:""},prev_trx_trp_id:"",attachment_1:"",attachment_1_preview:""},o=u({...B}),g=u([]),b=K("token"),d=u({}),j=async()=>{y().loading_full=!0,d.value={};const r=new FormData;r.append("tanggal",U(o.value.tanggal).format("Y-MM-DD")),r.append("no_pol",o.value.no_pol),r.append("prev_trx_trp_id",o.value.prev_trx_trp_id),r.append("note_for_remarks",o.value.note_for_remarks),r.append("employee_id",s.value.id),r.append("extra_money_id",i.value.id),r.append("payment_method_id",o.value.payment_method_id),r.append("attachment_1",o.value.attachment_1),r.append("attachment_1_preview",o.value.attachment_1_preview);let e="post",m=_.id;m==0||(r.append("id",m),r.append("_method","PUT"));const{data:t,error:O,status:N}=await V("/extra_money_trx",{method:e,headers:{Authorization:`Bearer ${b.value}`,Accept:"application/json"},body:r,retry:0});if(y().loading_full=!1,N.value==="error"){A().trigger(O,d);return}o.value.employee=JSON.parse(JSON.stringify(s.value._raw)),o.value.extra_money=JSON.parse(JSON.stringify(i.value._raw));let J=g.value.map(l=>l.id).indexOf(o.value.payment_method_id);if(o.value.payment_method={...g.value[J]},o.value.updated_at=t.value.updated_at,_.id<=0)o.value.id=t.value.id,o.value.created_at=t.value.created_at,_.p_data.unshift(o.value);else{let l=_.p_data.map(R=>R.id).indexOf(_.id);l>=-1&&_.p_data.splice(l,1,{...o.value})}_.fnClose()},k={_raw:{},_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},xto:{tcon:"IconsLocationOn",text:"Tujuan",val:""},description:{tcon:"",text:"Deskripsi",val:""},total:{tcon:"",text:"Total",val:""}},id:"",name:"",title:"",note:""},S={_raw:{},_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},name:{tcon:"IconsPerson",text:"Nama",val:""},rek_no:{tcon:"IconsNumber",text:"No Rek",val:""},rek_name:{tcon:"IconsCreditCard",text:"Nama Rek",val:""}},id:"",name:"",title:"",note:""},s=u(JSON.parse(JSON.stringify(S))),i=u(JSON.parse(JSON.stringify(k))),P=C(()=>{let r=[];return M.value.forEach((e,m)=>{let t=JSON.parse(JSON.stringify(S));t._.id.val=e.id,t._.name.val=e.name,t._.rek_no.val=e.rek_no,t._.rek_name.val=e.rek_name,t.id=e.id,t.name=e.name,t.title=(e.rek_no||"")+" "+(e.rek_name||""),t._raw=e,r.push(JSON.parse(JSON.stringify(t)))}),r}),q=C(()=>{let r=[];return T.value.forEach((e,m)=>{let t=JSON.parse(JSON.stringify(k));t._.id.val=e.id,t._.xto.val=e.xto,t._.description.val=e.description,t._.total.val=h(e.total),t.id=e.id,t.name=e.xto,t.title=(h(e.total)||"")+" "+(e.description||""),t._raw=e,r.push(JSON.parse(JSON.stringify(t)))}),r}),E=C(()=>!1),L=async()=>{y().loading_full=!0;const{data:r,error:e,status:m}=await V("/extra_money_trx",{method:"get",headers:{Authorization:`Bearer ${b.value}`,Accept:"application/json"},params:{id:_.id},retry:0});if(y().loading_full=!1,m.value==="error"){A().trigger(e);return}let t=r.value.data;o.value=t,{...t},s.value._raw=t.employee,s.value._.id.val=t.employee.id,s.value._.name.val=t.employee.name,s.value._.rek_no.val=t.employee_rek_no,s.value._.rek_name.val=t.employee_rek_name,s.value.id=t.employee.id,s.value.name=t.employee.name,s.value.rek_no=(t.employee_rek_no||"")+" "+(t.employee_rek_name||""),i.value._raw=t.extra_money,i.value._.id.val=t.extra_money.id,i.value._.xto.val=t.extra_money.xto,i.value._.description.val=t.extra_money.description,i.value._.total.val=h(t.extra_money.total),i.value.id=t.extra_money.id,i.value.name=t.extra_money.xto,i.value.title=(h(t.extra_money.total)||"")+" "+(t.extra_money.description||"")},I=u([]),M=u([]),T=u([]),z=async()=>{y().loading_full=!0;const{data:r,error:e,status:m}=await V("/extra_money_trx_load_local",{method:"get",headers:{Authorization:`Bearer ${b.value}`,Accept:"application/json"},retry:0});if(y().loading_full=!1,m.value==="error"){A().trigger(e);return}I.value=r.value.list_vehicle,M.value=r.value.list_employee,T.value=r.value.list_extra_money,g.value=r.value.list_payment_methods};return Q(()=>_.show,async(r,e)=>{r==!0&&(await z(),o.value={...B},s.value=JSON.parse(JSON.stringify(S)),i.value=JSON.parse(JSON.stringify(k)),d.value={},_.id!=0&&L())},{immediate:!0}),(r,e)=>{const m=G,t=X("vue-date-picker"),O=H,N=W,J=Y;return x((c(),v("section",re,[a("div",null,[f(m,{title:"Form Transaction",fn:w.fnClose,class:"w-full flex align-items-center",style:{color:"white"}},null,8,["fn"]),a("form",se,[a("div",ie,[a("div",_e,[a("div",de,[me,x(a("input",{"onUpdate:modelValue":e[0]||(e[0]=l=>n(o).prev_trx_trp_id=l)},null,512),[[D,n(o).prev_trx_trp_id]]),a("p",pe,p(n(d).prev_trx_trp_id),1)]),a("div",ue,[ce,a("div",ve,[f(O,null,{default:ee(()=>[f(t,{modelValue:n(o).tanggal,"onUpdate:modelValue":e[1]||(e[1]=l=>n(o).tanggal=l),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1})]),a("p",fe,p(n(d).tanggal),1)]),a("div",ye,[xe,x(a("select",{"onUpdate:modelValue":e[2]||(e[2]=l=>n(o).payment_method_id=l),disabled:n(o).val==1},[(c(!0),v($,null,F(n(g),l=>(c(),v("option",{value:l.id},p(l.name),9,he))),256))],8,we),[[te,n(o).payment_method_id]]),a("p",ge,p(n(d).payment_method_id),1)]),a("div",ke,[Se,x(a("input",{type:"text",list:"vehicle","onUpdate:modelValue":e[3]||(e[3]=l=>n(o).no_pol=l),disabled:n(o).val==1},null,8,Ne),[[D,n(o).no_pol]]),a("datalist",be,[(c(!0),v($,null,F(n(I),l=>(c(),v("option",{value:l.no_pol},p(l.no_pol),9,Oe))),256))]),a("p",Je,p(n(d).no_pol),1)]),a("div",Ce,[De,f(N,{arr:n(P),selected:n(s),pure:S,onSetSelected:e[4]||(e[4]=l=>s.value=l)},null,8,["arr","selected"]),a("p",Ae,p(n(d).employee_id),1)]),a("div",Ve,[Be,f(N,{arr:n(q),selected:n(i),pure:k,onSetSelected:e[5]||(e[5]=l=>i.value=l)},null,8,["arr","selected"]),a("p",Ie,p(n(d).extra_money_id),1)]),a("div",Me,[Te,x(a("textarea",{"onUpdate:modelValue":e[6]||(e[6]=l=>n(o).note_for_remarks=l)},null,512),[[D,n(o).note_for_remarks]]),a("p",$e,p(n(d).note_for_remarks),1)]),a("div",Fe,[f(J,{label:"Attachment",value:n(o).attachment_1_preview,onSetFile:e[7]||(e[7]=l=>n(o).attachment_1=l),onSetPreview:e[8]||(e[8]=l=>n(o).attachment_1_preview=l),can_remove:!0},null,8,["value"])])])]),a("div",Ue,[a("button",{type:"button",name:"button",class:"w-36 m-1",onClick:e[9]||(e[9]=l=>w.fnClose())}," Cancel "),n(E)?oe("",!0):(c(),v("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:e[10]||(e[10]=ae(l=>j(),["prevent"]))}," Save "))])])])],512)),[[Z,w.show]])}}};export{Ke as default};