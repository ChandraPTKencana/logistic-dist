import{_ as G}from"./HeaderPopup.vue.eef7144c.js";import{_ as H}from"./client-only.d142bf24.js";import{_ as W}from"./WidthMiniList.vue.c36155f2.js";import{r as u,f as Y,G as C,j as K,I as Q,m as b,J as X,o as c,c as v,a,b as y,w as Z,k as n,t as p,F as $,y as F,q as ee,v as T,x as te,l as ae,A as f,B as D,E as oe}from"./entry.e2a8d927.js";import{u as le}from"./useUtils.a689ea1e.js";import{u as B}from"./useMyFetch.7ab7b454.js";import"./Times.23971e09.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./WidthMiniPart.vue.58c6571c.js";const ne={class:"box-fixed"},se={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},re={class:"w-full flex flex-col items-center grow overflow-auto"},ie={class:"w-full flex flex-row flex-wrap"},de={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},_e=a("label",{for:""},"Tanggal",-1),me={class:"grow"},ue={class:"text-red-500"},pe={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},ce=a("label",{for:""},"Payment Method",-1),ve=["disabled"],fe=["value"],ye={class:"text-red-500"},xe={class:"w-6/12 sm:w-3/12 md:w-3/12 lg:w-2/12 flex flex-col flex-wrap p-1"},we=a("label",{for:""},"No Pol",-1),he=["disabled"],ge={id:"vehicle"},ke=["value"],Ne={class:"text-red-500"},Se={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},be=a("label",{for:""},"Pekerja",-1),Oe={class:"text-red-500"},Je={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},Ce=a("label",{for:""},"Uang Tambahan",-1),De={class:"text-red-500"},Be={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},Me=a("label",{for:""},"Note For Remarks",-1),Ve={class:"text-red-500"},Ae={class:"w-full flex items-center justify-end"},Le={__name:"extra_money_trx",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]}},setup(x){const d=x,{$moment:j}=oe(),{pointFormat:w}=le(),M={id:-1,tanggal:new Date,employee:{id:0},extra_money:{id:0},pv_id:-1,pv_no:"",pv_total:0,no_pol:"",note_for_remarks:"",cost_center_code:"",cost_center_desc:"",pvr_id:"",pvr_no:"",pvr_total:0,pvr_complete:"",payment_method_id:2,payment_method:{id:0,name:""}},l=u({...M}),h=u([]),O=Y("token"),m=u({}),U=async()=>{f().loading_full=!0,m.value={};const o=new FormData;o.append("tanggal",j(l.value.tanggal).format("Y-MM-DD")),o.append("no_pol",l.value.no_pol),o.append("note_for_remarks",l.value.note_for_remarks),o.append("employee_id",r.value.id),o.append("extra_money_id",i.value.id),o.append("payment_method_id",trx_trp.value.payment_method_id);let t="post",_=d.id;_==0||(o.append("id",_),o.append("_method","PUT"));const{data:e,error:J,status:N}=await B("/extra_money_trx",{method:t,headers:{Authorization:`Bearer ${O.value}`,Accept:"application/json"},body:o,retry:0});if(f().loading_full=!1,N.value==="error"){D().trigger(J,m);return}l.value.employee=JSON.parse(JSON.stringify(r.value._raw)),l.value.extra_money=JSON.parse(JSON.stringify(i.value._raw));let s=h.value.map(S=>S.id).indexOf(l.value.payment_method_id);if(l.value.payment_method={...h.value[s]},l.value.updated_at=e.value.updated_at,d.id<=0)l.value.id=e.value.id,l.value.created_at=e.value.created_at,d.p_data.unshift(l.value);else{let S=d.p_data.map(R=>R.id).indexOf(d.id);S>=-1&&d.p_data.splice(S,1,{...l.value})}d.fnClose()},g={_raw:{},_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},xto:{tcon:"IconsLocationOn",text:"Tujuan",val:""},description:{tcon:"",text:"Deskripsi",val:""},total:{tcon:"",text:"Total",val:""}},id:"",name:"",title:"",note:""},k={_raw:{},_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},name:{tcon:"IconsPerson",text:"Nama",val:""},rek_no:{tcon:"IconsNumber",text:"No Rek",val:""},rek_name:{tcon:"IconsCreditCard",text:"Nama Rek",val:""}},id:"",name:"",title:"",note:""},r=u(JSON.parse(JSON.stringify(k))),i=u(JSON.parse(JSON.stringify(g))),P=C(()=>{let o=[];return A.value.forEach((t,_)=>{let e=JSON.parse(JSON.stringify(k));e._.id.val=t.id,e._.name.val=t.name,e._.rek_no.val=t.rek_no,e._.rek_name.val=t.rek_name,e.id=t.id,e.name=t.name,e.title=(t.rek_no||"")+" "+(t.rek_name||""),e._raw=t,o.push(JSON.parse(JSON.stringify(e)))}),o}),q=C(()=>{let o=[];return I.value.forEach((t,_)=>{let e=JSON.parse(JSON.stringify(g));e._.id.val=t.id,e._.xto.val=t.xto,e._.description.val=t.description,e._.total.val=w(t.total),e.id=t.id,e.name=t.xto,e.title=(w(t.total)||"")+" "+(t.description||""),e._raw=t,o.push(JSON.parse(JSON.stringify(e)))}),o}),E=C(()=>!1),L=async()=>{f().loading_full=!0;const{data:o,error:t,status:_}=await B("/extra_money_trx",{method:"get",headers:{Authorization:`Bearer ${O.value}`,Accept:"application/json"},params:{id:d.id},retry:0});if(f().loading_full=!1,_.value==="error"){D().trigger(t);return}let e=o.value.data;l.value=e,{...e},r.value._raw=e.employee,r.value._.id.val=e.employee.id,r.value._.name.val=e.employee.name,r.value._.rek_no.val=e.employee_rek_no,r.value._.rek_name.val=e.employee_rek_name,r.value.id=e.employee.id,r.value.name=e.employee.name,r.value.rek_no=(e.employee_rek_no||"")+" "+(e.employee_rek_name||""),i.value._raw=e.extra_money,i.value._.id.val=e.extra_money.id,i.value._.xto.val=e.extra_money.xto,i.value._.description.val=e.extra_money.description,i.value._.total.val=w(e.extra_money.total),i.value.id=e.extra_money.id,i.value.name=e.extra_money.xto,i.value.title=(w(e.extra_money.total)||"")+" "+(e.extra_money.description||"")},V=u([]),A=u([]),I=u([]),z=async()=>{f().loading_full=!0;const{data:o,error:t,status:_}=await B("/extra_money_trx_load_local",{method:"get",headers:{Authorization:`Bearer ${O.value}`,Accept:"application/json"},retry:0});if(f().loading_full=!1,_.value==="error"){D().trigger(t);return}V.value=o.value.list_vehicle,A.value=o.value.list_employee,I.value=o.value.list_extra_money,h.value=o.value.list_payment_methods};return K(()=>d.show,async(o,t)=>{o==!0&&(await z(),l.value={...M},r.value=JSON.parse(JSON.stringify(k)),i.value=JSON.parse(JSON.stringify(g)),m.value={},d.id!=0&&L())},{immediate:!0}),(o,t)=>{const _=G,e=Q("vue-date-picker"),J=H,N=W;return b((c(),v("section",ne,[a("div",null,[y(_,{title:"Form Transaction",fn:x.fnClose,class:"w-full flex align-items-center",style:{color:"white"}},null,8,["fn"]),a("form",se,[a("div",re,[a("div",ie,[a("div",de,[_e,a("div",me,[y(J,null,{default:Z(()=>[y(e,{modelValue:n(l).tanggal,"onUpdate:modelValue":t[0]||(t[0]=s=>n(l).tanggal=s),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1})]),a("p",ue,p(n(m).tanggal),1)]),a("div",pe,[ce,b(a("select",{"onUpdate:modelValue":t[1]||(t[1]=s=>n(l).payment_method_id=s),disabled:n(l).val==1},[(c(!0),v($,null,F(n(h),s=>(c(),v("option",{value:s.id},p(s.name),9,fe))),256))],8,ve),[[ee,n(l).payment_method_id]]),a("p",ye,p(n(m).payment_method_id),1)]),a("div",xe,[we,b(a("input",{type:"text",list:"vehicle","onUpdate:modelValue":t[2]||(t[2]=s=>n(l).no_pol=s),disabled:n(l).val==1},null,8,he),[[T,n(l).no_pol]]),a("datalist",ge,[(c(!0),v($,null,F(n(V),s=>(c(),v("option",{value:s.no_pol},p(s.no_pol),9,ke))),256))]),a("p",Ne,p(n(m).no_pol),1)]),a("div",Se,[be,y(N,{arr:n(P),selected:n(r),pure:k,onSetSelected:t[3]||(t[3]=s=>r.value=s)},null,8,["arr","selected"]),a("p",Oe,p(n(m).employee_id),1)]),a("div",Je,[Ce,y(N,{arr:n(q),selected:n(i),pure:g,onSetSelected:t[4]||(t[4]=s=>i.value=s)},null,8,["arr","selected"]),a("p",De,p(n(m).extra_money_id),1)]),a("div",Be,[Me,b(a("textarea",{"onUpdate:modelValue":t[5]||(t[5]=s=>n(l).note_for_remarks=s)},null,512),[[T,n(l).note_for_remarks]]),a("p",Ve,p(n(m).note_for_remarks),1)])])]),a("div",Ae,[a("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[6]||(t[6]=s=>x.fnClose())}," Cancel "),n(E)?ae("",!0):(c(),v("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:t[7]||(t[7]=te(s=>U(),["prevent"]))}," Save "))])])])],512)),[[X,x.show]])}}};export{Le as default};