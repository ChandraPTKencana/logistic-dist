import{_ as Y}from"./HeaderPopup.vue.4f1a1fcf.js";import{_ as G}from"./client-only.adaa231c.js";import{_ as H}from"./WidthMiniList.vue.74ed6b9f.js";import W from"./AttachmentSingle.4f6e3e44.js";import{r as c,g as K,i as D,f as Q,I as X,k as x,J as Z,o as v,c as f,a as o,b as y,l as a,A,t as p,w as ee,F as P,D as U,v as te,C as ae,G as le,x as w,y as M}from"./entry.3657485b.js";import{u as oe}from"./useUtils.0416416b.js";import{u as F}from"./useMyFetch.e99ae6ea.js";import"./Times.6f682a31.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./WidthMiniPart.vue.b16a161e.js";import"./PDFJsView.94763be6.js";const ne={class:"box-fixed"},se={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},re={class:"w-full flex flex-col items-center grow overflow-auto"},ie={class:"w-full flex flex-row flex-wrap"},de={class:"w-full sm:w-3/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},_e=o("label",{for:""},"Trx Trp #ID",-1),me=["disabled"],pe={class:"text-red-500"},ue={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},ce=o("label",{for:""},"Tanggal",-1),ve={class:"grow"},fe={key:0,class:"card-border"},ye={key:1},we={class:"text-red-500"},xe={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},he=o("label",{for:""},"Payment Method",-1),ge=["disabled"],be=["value"],ke={class:"text-red-500"},Se={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Ne=o("label",{for:""},"No Pol",-1),Oe=["disabled"],Je={id:"vehicle"},Ce=["value"],De={class:"text-red-500"},Ae={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},Me=o("label",{for:""},"Pekerja",-1),Fe={class:"text-red-500"},Ie={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},Te=o("label",{for:""},"Uang Tambahan",-1),Ve={class:"text-red-500"},$e={class:"w-full flex flex-col flex-wrap p-1"},Be=o("label",{for:""},"Note For Remarks",-1),Pe=["disabled"],Ue={class:"text-red-500"},je={class:"p-1 w-full sm:w-full md:w-1/2 md:overflow-auto max-h-full"},qe={class:"p-1 w-full sm:w-full md:w-1/2 md:overflow-auto max-h-full"},Ee={class:"w-full flex items-center justify-end"},et={__name:"extra_money_trx",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]}},setup(h){const d=h,{$moment:I}=le(),{pointFormat:g}=oe(),T={id:-1,tanggal:new Date,employee:{id:0},extra_money:{id:0},pv_id:-1,pv_no:"",pv_total:0,no_pol:"",note_for_remarks:"",cost_center_code:"",cost_center_desc:"",pvr_id:"",pvr_no:"",pvr_total:0,pvr_complete:"",payment_method_id:2,payment_method:{id:0,name:""},prev_trx_trp_id:"",attachment_1:"",attachment_1_preview:"",attachment_2:"",attachment_2_preview:""},l=c({...T}),b=c([]),J=K("token"),_=c({}),j=async()=>{w().loading_full=!0,_.value={};const s=new FormData;s.append("tanggal",I(l.value.tanggal).format("Y-MM-DD")),s.append("no_pol",l.value.no_pol),s.append("prev_trx_trp_id",l.value.prev_trx_trp_id),s.append("note_for_remarks",l.value.note_for_remarks),s.append("employee_id",r.value.id),s.append("extra_money_id",i.value.id),s.append("payment_method_id",l.value.payment_method_id),s.append("attachment_1",l.value.attachment_1),s.append("attachment_1_preview",l.value.attachment_1_preview),s.append("attachment_2",l.value.attachment_2),s.append("attachment_2_preview",l.value.attachment_2_preview);let e="post",m=d.id;m==0||(s.append("id",m),s.append("_method","PUT"));const{data:t,error:C,status:N}=await F("/extra_money_trx",{method:e,headers:{Authorization:`Bearer ${J.value}`,Accept:"application/json"},body:s,retry:0});if(w().loading_full=!1,N.value==="error"){M().trigger(C,_);return}l.value.employee=JSON.parse(JSON.stringify(r.value._raw)),l.value.extra_money=JSON.parse(JSON.stringify(i.value._raw));let O=b.value.map(n=>n.id).indexOf(l.value.payment_method_id);if(l.value.payment_method={...b.value[O]},l.value.updated_at=t.value.updated_at,d.id<=0)l.value.id=t.value.id,l.value.created_at=t.value.created_at,d.p_data.unshift(l.value);else{let n=d.p_data.map(R=>R.id).indexOf(d.id);n>=-1&&d.p_data.splice(n,1,{...l.value})}d.fnClose()},k={_raw:{},_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},xto:{tcon:"IconsLocationOn",text:"Tujuan",val:""},description:{tcon:"",text:"Deskripsi",val:""},total:{tcon:"",text:"Total",val:""}},id:"",name:"",title:"",note:""},S={_raw:{},_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},name:{tcon:"IconsPerson",text:"Nama",val:""},rek_no:{tcon:"IconsNumber",text:"No Rek",val:""},rek_name:{tcon:"IconsCreditCard",text:"Nama Rek",val:""}},id:"",name:"",title:"",note:""},r=c(JSON.parse(JSON.stringify(S))),i=c(JSON.parse(JSON.stringify(k))),q=D(()=>{let s=[];return $.value.forEach((e,m)=>{let t=JSON.parse(JSON.stringify(S));t._.id.val=e.id,t._.name.val=e.name,t._.rek_no.val=e.rek_no,t._.rek_name.val=e.rek_name,t.id=e.id,t.name=e.name,t.title=(e.rek_no||"")+" "+(e.rek_name||""),t._raw=e,s.push(JSON.parse(JSON.stringify(t)))}),s}),E=D(()=>{let s=[];return B.value.forEach((e,m)=>{let t=JSON.parse(JSON.stringify(k));t._.id.val=e.id,t._.xto.val=e.xto,t._.description.val=e.description,t._.total.val=g(e.total),t.id=e.id,t.name=e.xto,t.title=(g(e.total)||"")+" "+(e.description||""),t._raw=e,s.push(JSON.parse(JSON.stringify(t)))}),s}),u=D(()=>!!l.value.val1),L=async()=>{w().loading_full=!0;const{data:s,error:e,status:m}=await F("/extra_money_trx",{method:"get",headers:{Authorization:`Bearer ${J.value}`,Accept:"application/json"},params:{id:d.id},retry:0});if(w().loading_full=!1,m.value==="error"){M().trigger(e);return}let t=s.value.data;l.value=t,{...t},r.value._raw=t.employee,r.value._.id.val=t.employee.id,r.value._.name.val=t.employee.name,r.value._.rek_no.val=t.employee_rek_no,r.value._.rek_name.val=t.employee_rek_name,r.value.id=t.employee.id,r.value.name=t.employee.name,r.value.rek_no=(t.employee_rek_no||"")+" "+(t.employee_rek_name||""),i.value._raw=t.extra_money,i.value._.id.val=t.extra_money.id,i.value._.xto.val=t.extra_money.xto,i.value._.description.val=t.extra_money.description,i.value._.total.val=g(t.extra_money.total),i.value.id=t.extra_money.id,i.value.name=t.extra_money.xto,i.value.title=(g(t.extra_money.total)||"")+" "+(t.extra_money.description||"")},V=c([]),$=c([]),B=c([]),z=async()=>{w().loading_full=!0;const{data:s,error:e,status:m}=await F("/extra_money_trx_load_local",{method:"get",headers:{Authorization:`Bearer ${J.value}`,Accept:"application/json"},retry:0});if(w().loading_full=!1,m.value==="error"){M().trigger(e);return}V.value=s.value.list_vehicle,$.value=s.value.list_employee,B.value=s.value.list_extra_money,b.value=s.value.list_payment_methods};return Q(()=>d.show,async(s,e)=>{s==!0&&(await z(),l.value={...T},r.value=JSON.parse(JSON.stringify(S)),i.value=JSON.parse(JSON.stringify(k)),_.value={},d.id!=0&&L())},{immediate:!0}),(s,e)=>{const m=Y,t=X("vue-date-picker"),C=G,N=H,O=W;return x((v(),f("section",ne,[o("div",null,[y(m,{title:"Form Transaction",fn:h.fnClose,class:"w-full flex align-items-center",style:{color:"white"}},null,8,["fn"]),o("form",se,[o("div",re,[o("div",ie,[o("div",de,[_e,x(o("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>a(l).prev_trx_trp_id=n),disabled:a(u)},null,8,me),[[A,a(l).prev_trx_trp_id]]),o("p",pe,p(a(_).prev_trx_trp_id),1)]),o("div",ue,[ce,o("div",ve,[a(u)?(v(),f("div",fe,p(a(I)(a(l).tanggal).format("DD-MM-Y")),1)):(v(),f("div",ye,[y(C,null,{default:ee(()=>[y(t,{modelValue:a(l).tanggal,"onUpdate:modelValue":e[1]||(e[1]=n=>a(l).tanggal=n),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1})]))]),o("p",we,p(a(_).tanggal),1)]),o("div",xe,[he,x(o("select",{"onUpdate:modelValue":e[2]||(e[2]=n=>a(l).payment_method_id=n),disabled:a(u)},[(v(!0),f(P,null,U(a(b),n=>(v(),f("option",{value:n.id},p(n.name),9,be))),256))],8,ge),[[te,a(l).payment_method_id]]),o("p",ke,p(a(_).payment_method_id),1)]),o("div",Se,[Ne,x(o("input",{type:"text",list:"vehicle","onUpdate:modelValue":e[3]||(e[3]=n=>a(l).no_pol=n),disabled:a(u)},null,8,Oe),[[A,a(l).no_pol]]),o("datalist",Je,[(v(!0),f(P,null,U(a(V),n=>(v(),f("option",{value:n.no_pol},p(n.no_pol),9,Ce))),256))]),o("p",De,p(a(_).no_pol),1)]),o("div",Ae,[Me,y(N,{arr:a(q),selected:a(r),pure:S,onSetSelected:e[4]||(e[4]=n=>r.value=n),disabled:a(u)},null,8,["arr","selected","disabled"]),o("p",Fe,p(a(_).employee_id),1)]),o("div",Ie,[Te,y(N,{arr:a(E),selected:a(i),pure:k,onSetSelected:e[5]||(e[5]=n=>i.value=n),disabled:a(u)},null,8,["arr","selected","disabled"]),o("p",Ve,p(a(_).extra_money_id),1)]),o("div",$e,[Be,x(o("textarea",{"onUpdate:modelValue":e[6]||(e[6]=n=>a(l).note_for_remarks=n),disabled:a(u)},null,8,Pe),[[A,a(l).note_for_remarks]]),o("p",Ue,p(a(_).note_for_remarks),1)]),o("div",je,[y(O,{label:"Attachment",value:a(l).attachment_1_preview,onSetFile:e[7]||(e[7]=n=>a(l).attachment_1=n),onSetPreview:e[8]||(e[8]=n=>a(l).attachment_1_preview=n),can_remove:!a(u),disabled:a(u)},null,8,["value","can_remove","disabled"])]),o("div",qe,[y(O,{label:"Attachment",value:a(l).attachment_2_preview,onSetFile:e[9]||(e[9]=n=>a(l).attachment_2=n),onSetPreview:e[10]||(e[10]=n=>a(l).attachment_2_preview=n),can_remove:!0},null,8,["value"])])])]),o("div",Ee,[o("button",{type:"button",name:"button",class:"w-36 m-1",onClick:e[11]||(e[11]=n=>h.fnClose())}," Cancel "),o("button",{type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:e[12]||(e[12]=ae(n=>j(),["prevent"]))}," Save ")])])])],512)),[[Z,h.show]])}}};export{et as default};