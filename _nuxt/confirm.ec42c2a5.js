import{_ as W}from"./HeaderCustom.vue.641a07ab.js";import{_ as G}from"./client-only.3b668053.js";import{_ as H}from"./PopupMini.vue.bbc7ce6b.js";import{z as J,A as K,f as L,r as i,B as U,C as X,D as Y,E as Z,J as ee,o as d,c as u,a as e,b as w,k as t,t as l,G as x,F as q,n as te,q as g,m as se,w as k,d as C,x as v,y as I}from"./entry.1c7a5935.js";import{u as z}from"./useMyFetch.1c7a7187.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.19987452.js";const oe={class:"w-full h-full flex flex-col"},le={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},ae={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},ne={class:"w-full flex flex-row flex-wrap"},ie={key:0,class:"w-full flex flex-col flex-wrap p-1"},re=e("label",{for:""},"Input At",-1),ce={class:"card-border"},de={class:"w-full flex flex-col flex-wrap p-1"},ue=e("label",{for:""},"Type",-1),_e={class:"card-border"},fe={class:"text-red-500"},me={class:"w-full flex flex-col flex-wrap p-1"},pe=e("label",{for:""},"From Warehouse",-1),he={class:"card-border flex flex-row flex-wrap"},we={class:"w-full flex",style:{}},xe={class:"flex flex-row flex-wrap grow"},ve={class:"p-1"},ye=e("div",{class:"text-sm text-gray-600"},"ID",-1),be={class:"bold"},ge={class:"p-1"},ke=e("div",{class:"text-sm text-gray-600"},"Name",-1),Ce={class:"bold"},$e={class:"text-red-500"},De={key:1,class:"w-full flex flex-col flex-wrap p-1"},je=e("label",{for:""},"To Warehouse",-1),Ne={class:"card-border flex flex-row flex-wrap"},Ae={class:"w-full flex",style:{}},Be={class:"flex flex-row flex-wrap grow"},Me={class:"p-1"},Oe=e("div",{class:"text-sm text-gray-600"},"ID",-1),Ve={class:"bold"},qe={class:"p-1"},Ie=e("div",{class:"text-sm text-gray-600"},"Name",-1),ze={class:"bold"},Fe={class:"text-red-500"},Te={key:2,class:"w-full flex flex-col flex-wrap p-1"},Se=e("label",{for:""},"Note",-1),Ee={class:"card-border"},Pe={class:"text-red-500"},Qe={class:"w-full flex grow p-1 overflow-auto"},Re={role:"sticky",ref:"loadRef"},We={class:"tacky w-full",style:{"white-space":"normal"}},Ge=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No"),e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID Item"),e("th",null,"Nama Item"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty In"),e("th",{class:"min-w-[80px] !w-[80px] max-w-[80px]"},"Qty Out"),e("th",null,"Keterangan")])],-1),He={class:"w-full h-full flex items-center justify-center"},Je={class:"w-full h-full flex items-center justify-center"},Ke={class:"w-full h-full flex items-center justify-center"},Le={class:"cell"},Ue={class:"w-full h-full flex items-center justify-center"},Xe={class:"cell"},Ye={class:"w-full h-full flex items-center justify-center"},Ze={class:"w-full flex items-center justify-end"},et=e("b",null,"tidak dapat dikembalikan lagi",-1),tt={class:"grow mb-5"},dt=J({__name:"confirm",async setup(st){var M,O;let p,$;K();const D=L("token"),r=i({}),F=U(),j=X();let N={id:"",name:""};const{data:A}=([p,$]=Y(async()=>Z(async()=>{const n=j.query.id;let a=null,c=null;if(n!==void 0&&n!==""){v().loading_full=!0;const{data:_,error:f,status:m}=await z("/transaction",{method:"get",headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},params:{id:n},retry:0});v().loading_full=!1,m.value==="error"?I().trigger(f,r):(a=_.value.data,c=_.value.data.details.map(s=>(s.status="View",s.key=s.ordinal,s)))}return{transaction:a,details:c}},"$41NQB02kXD")),p=await p,$(),p),y=i(!0),T=()=>{y.value=!1},S=()=>{y.value=!0},o=i(((M=A.value)==null?void 0:M.transaction)||{id:-1,type:"used",note:"",warehouse:{...N},warehouse_target:{...N},details:[]}),E=i(((O=A.value)==null?void 0:O.details)||[]);i({ordinal:0,item:{id:"",name:"",unit:{id:"",name:""}},item_id:"",qty_in:0,qty_out:0,note:"",status:""});const b=i({from:"",to:new Date}),B=i({}),h=i(!1),P=()=>{B.value={id:o.value.id,type:o.value.type,target:o.value.warehouse_target.name},h.value=!0},Q=async()=>{h.value&&(h.value=!1)},R=async()=>{v().loading_full=!0,r.value={};let n={};n.to=b.value.to;let a="post",c=j.query.id;c===""||(a="put",n.id=c);const{data:_,error:f,status:m}=await z("/confirm_transaction",{method:a,headers:{Authorization:`Bearer ${D.value}`,Accept:"application/json"},body:n,retry:0});if(v().loading_full=!1,m.value==="error"){I().trigger(f,r);return}F.go(-1)};return(n,a)=>{const c=W,_=ee("vue-date-picker"),f=G,m=H;return d(),u(q,null,[e("div",oe,[w(c,{title:"Form Confirmation",back:!0}),e("form",le,[e("div",ae,[e("div",ne,[t(o).confirmed_by?(d(),u("div",ie,[re,e("div",ce,l(n.$moment(t(o).input_at).format("DD-MM-Y")),1)])):x("",!0),e("div",de,[ue,e("div",_e,l(t(o).type),1),e("p",fe,l(t(r).type),1)]),e("div",me,[pe,e("div",he,[e("div",we,[e("div",xe,[e("div",ve,[ye,e("div",be,l(t(o).ref_id?t(o).warehouse_source.id:t(o).warehouse.id),1)]),e("div",ge,[ke,e("div",Ce,l(t(o).ref_id?t(o).warehouse_source.name:t(o).warehouse.name),1)])])])]),e("p",$e,l(t(r).warehouse_id),1)]),t(o).type=="transfer"?(d(),u("div",De,[je,e("div",Ne,[e("div",Ae,[e("div",Be,[e("div",Me,[Oe,e("div",Ve,l(t(o).warehouse_target.id),1)]),e("div",qe,[Ie,e("div",ze,l(t(o).warehouse_target.name),1)])])])]),e("p",Fe,l(t(r).warehouse_target_id),1)])):x("",!0),t(o).note?(d(),u("div",Te,[Se,e("div",Ee,l(t(o).note),1),e("p",Pe,l(t(r).note),1)])):x("",!0)]),e("div",Qe,[e("div",Re,[e("table",We,[Ge,e("tbody",null,[(d(!0),u(q,null,te(t(E),(s,V)=>(d(),u("tr",{key:V},[e("td",null,l(V+1)+".",1),e("td",{class:g(["cell bold",s.confirm_by?"unselectable":""])},[e("div",He,l(s.item.id),1)],2),e("td",{class:g(["cell",s.confirm_by?"unselectable":""])},[e("div",Je,l(s.item.name),1)],2),e("td",{class:g(["cell",s.confirm_by?"unselectable":""])},[e("div",Ke,l(s.qty_in),1)],2),e("td",Le,[e("div",Ue,l(s.qty_out),1)]),e("td",Xe,[e("div",Ye,l(s.note),1)])]))),128))])])],512)])]),e("div",Ze,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:a[0]||(a[0]=s=>n.$router.go(-1))}," Cancel "),t(o).confirmed_by==null?(d(),u("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:a[1]||(a[1]=se(s=>P(),["prevent"]))}," Confirm ")):x("",!0)])])]),w(m,{type:"custome",show:t(h),data:t(B),fnClose:Q,fnConfirm:R,enabledOk:t(y)},{words:k(()=>[C(" Data akan diproses dan "),et,C(", yakin untuk melanjutkan ? ")]),footer:k(()=>[C(" Pilih Tanggal Transaksi: "),e("div",tt,[w(f,null,{default:k(()=>[w(_,{modelValue:t(b).to,"onUpdate:modelValue":a[2]||(a[2]=s=>t(b).to=s),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":"",onOpen:a[3]||(a[3]=s=>T()),onClosed:a[4]||(a[4]=s=>S())},null,8,["modelValue"])]),_:1})])]),_:1},8,["show","data","enabledOk"])],64)}}});export{dt as default};