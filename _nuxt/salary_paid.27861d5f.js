import{_ as I}from"./HeaderPopup.vue.e8f8ba03.js";import{_ as O}from"./client-only.af2e1d10.js";import{r as b,f as Y,G as x,j as H,I as J,m as K,J as L,o as i,c as d,a as e,b as k,k as a,t as s,w as Q,d as g,F as E,y as W,l as N,x as X,E as Z,A as h,B as z}from"./entry.1af0e639.js";import{u as C}from"./useUtils.06e9219f.js";import{u as T}from"./useMyFetch.6a27c764.js";import"./Times.7c581167.js";import"./_plugin-vue_export-helper.c27b6911.js";const ee={class:"box-fixed"},te={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},ae={class:"w-full flex flex-col items-center grow overflow-auto"},le={class:"w-full flex flex-row flex-wrap"},oe={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},se=e("label",{for:""},"Period End",-1),ne={key:0,class:"card-border"},re={key:1},ie={class:"text-red-500"},de={key:0,class:"w-full flex p-1 justify-between flex-wrap"},ue={class:"w-full",role:"sticky"},ce={class:"tacky w-full !table-auto",style:{"white-space":"normal"}},_e=e("tr",{class:"sticky -top-1 !z-[2]"},[e("td",{colspan:"10",class:"!bg-slate-800 text-white font-bold"}," Detail ")],-1),pe={class:"sticky top-7 !z-[2]"},me=e("th",null,"No",-1),fe=e("th",null,"Nama Pekerja",-1),ve=e("th",null,"No KTP",-1),ye=e("th",null,"No SIM",-1),he=e("th",null,"Rek No",-1),we=e("th",null,"Rek Nama",-1),be=e("th",null,"Bank Name",-1),xe={class:"text-sm"},ke={class:"text-sm"},ge={class:"text-sm"},Ne={ref:"to_move"},Ce=["data-index"],Fe={class:"w-full flex items-center justify-end"},$e={__name:"salary_paid",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},is_copy:{type:[Boolean,Number],required:!0,default:!1}},setup(f){const u=f,{$moment:F}=Z(),{pointFormat:p}=C(),S={id:"",period_end:new Date},t=b({...S}),B=Y("token"),v=b({}),c=b([]),R=async()=>{h().loading_full=!0,v.value={};const o=new FormData;o.append("period_end",t.value.period_end?F(t.value.period_end).format("Y-MM"):"");let n="post",r=t.value.id;r==""||(o.append("id",r),o.append("_method","PUT"));const{data:_,error:w,status:l}=await T("/salary_paid",{method:n,headers:{Authorization:`Bearer ${B.value}`,Accept:"application/json"},body:o,retry:0});if(h().loading_full=!1,l.value==="error"){z().trigger(w,v);return}if(c.value=_.value.details,r<=0)t.value.id=_.value.id,t.value.created_at=_.value.created_at,t.value.updated_at=_.value.updated_at,u.p_data.unshift(t.value);else{t.value.updated_at=_.value.updated_at;let m=u.p_data.map(y=>y.id).indexOf(r);m>=-1&&u.p_data.splice(m,1,{...t.value})}},M=x(()=>{let o=0;return c.value.forEach(n=>{o+=parseFloat(n.standby_nominal)}),o}),q=x(()=>{let o=0;return c.value.forEach(n=>{o+=parseFloat(n.salary_bonus_nominal)}),o}),U=x(()=>t.value.val&&t.value.val1||C().checkPermission("salary_paid.val")&&t.value.val||C().checkPermission("salary_paid.val1")&&t.value.val1),G=async()=>{h().loading_full=!0;const{data:o,error:n,status:r}=await T("/salary_paid",{method:"get",headers:{Authorization:`Bearer ${B.value}`,Accept:"application/json"},params:{id:u.id},retry:0});if(h().loading_full=!1,r.value==="error"){z().trigger(n);return}t.value=o.value.data,u.is_copy&&(t.value.val=0,t.value.val1=0),c.value=o.value.data.details};return H(()=>u.show,(o,n)=>{o==!0&&(t.value={...S},c.value=[],v.value={},u.id!=0&&G())},{immediate:!0}),(o,n)=>{const r=I,_=J("vue-date-picker"),w=O;return K((i(),d("section",ee,[e("div",null,[k(r,{title:"Form Salary Paid",fn:f.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",te,[e("div",ae,[e("div",le,[e("div",oe,[se,a(t).id?(i(),d("div",ne,s(a(F)(a(t).period_end).format("MM-Y")),1)):(i(),d("div",re,[k(w,null,{default:Q(()=>[k(_,{modelValue:a(t).period_end,"onUpdate:modelValue":n[0]||(n[0]=l=>a(t).period_end=l),format:"MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":"","month-picker":""},null,8,["modelValue"])]),_:1})])),e("p",ie,s(a(v).period_end),1)])]),a(c).length?(i(),d("div",de,[e("div",ue,[e("table",ce,[e("thead",null,[_e,e("tr",pe,[me,fe,ve,ye,he,we,be,e("th",null,[g("Nominal Standby "),e("span",xe,"("+s(a(p)(a(M)||0))+")",1)]),e("th",null,[g("Nominal Bonus "),e("span",ke,"("+s(a(p)(a(q)||0))+")",1)]),e("th",null,[g("Total "),e("span",ge,"("+s(a(p)(a(M)+a(q)||0))+")",1)])])]),e("tbody",Ne,[(i(!0),d(E,null,W(a(c),(l,m)=>{var y,A,P,V,$,j,D;return i(),d(E,{key:m},[l.p_status!="Remove"?(i(),d("tr",{key:0,"data-index":m},[e("td",null,s(m+1)+".",1),e("td",null,s((y=l.employee)==null?void 0:y.name),1),e("td",null,s((A=l.employee)==null?void 0:A.ktp_no),1),e("td",null,s((P=l.employee)==null?void 0:P.sim_no),1),e("td",null,s((V=l.employee)==null?void 0:V.rek_no),1),e("td",null,s(($=l.employee)==null?void 0:$.rek_name),1),e("td",null,s((D=(j=l.employee)==null?void 0:j.bank)==null?void 0:D.code),1),e("td",null,s(a(p)(l.standby_nominal)),1),e("td",null,s(a(p)(l.salary_bonus_nominal)),1),e("td",null,s(a(p)(parseFloat(l.standby_nominal)+parseFloat(l.salary_bonus_nominal))),1)],8,Ce)):N("",!0)],64)}),128))],512)])])])):N("",!0)]),e("div",Fe,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:n[1]||(n[1]=l=>f.fnClose())}," Cancel "),a(U)?N("",!0):(i(),d("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:n[2]||(n[2]=X(l=>R(),["prevent"]))}," Generate "+s(a(t).id==""?"& Save":""),1))])])])],512)),[[L,f.show]])}}};export{$e as default};