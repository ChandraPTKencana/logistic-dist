import{_ as Z}from"./HeaderPopup.vue.70032f31.js";import{_ as ee}from"./client-only.be881f7d.js";import{_ as te}from"./WidthMiniList.vue.097394ee.js";import{r as h,f as ae,i as le,G as B,j as C,I as oe,m as k,J as se,o as c,c as v,a as s,b as y,k as o,w as ne,C as ie,t as p,q as O,v as re,F as $,y as A,l as K,x as de,E as _e,A as x,B as F}from"./entry.a289b04e.js";import{u as D}from"./useUtils.4534ad1e.js";import{u as V}from"./useMyFetch.d7b7cecf.js";import"./Times.c09bbbe0.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./WidthMiniPart.vue.33dab359.js";const ue={class:"box-fixed"},pe={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},ce={class:"w-full flex flex-col items-center grow overflow-auto"},ve={class:"w-full flex flex-row flex-wrap"},me={class:"w-6/12 sm:w-3/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},fe=s("label",{for:""},"U.Jalan Per",-1),we={key:0,class:"grow"},he={key:1,class:"grow"},ge={class:"text-red-500"},xe={class:"w-6/12 sm:w-3/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},ke=s("label",{for:""},"Jenis",-1),ye=["disabled"],be=s("option",{value:"TBS"},"TBS",-1),Se=s("option",{value:"TBSK"},"TBSK",-1),je=s("option",{value:"CPO"},"CPO",-1),Ne=s("option",{value:"PK"},"PK",-1),Be=[be,Se,je,Ne],Ce={class:"text-red-500"},De={class:"w-6/12 sm:w-3/12 md:w-2/12 lg:w-2/12 flex flex-col flex-wrap p-1"},Te=s("label",{for:""},"No Pol",-1),Je=["disabled"],Oe={id:"vehicle"},$e=["value"],Ae={class:"text-red-500"},Fe={class:"w-full flex flex-wrap"},Ve={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},Me=s("label",{for:""},"Supir",-1),Pe={class:"text-red-500"},Ue={class:"w-full sm:w-6/12 md:w-6/12 lg:w-6/12 flex flex-col flex-wrap p-1"},qe=s("label",{for:""},"Kernet",-1),Ie={class:"text-red-500"},Ke={key:0,class:"w-full flex flex-wrap"},Le={class:"w-6/12 sm:w-4/12 md:w-4/12 lg:w-4/12 flex flex-col flex-wrap p-1"},Ee=s("label",{for:""},"Tujuan",-1),Ye=["disabled"],ze={class:"text-red-500"},Re={class:"w-6/12 sm:w-4/12 md:w-4/12 lg:w-4/12 flex flex-col flex-wrap p-1"},Ge=s("label",{for:""},"Tipe",-1),He=["disabled"],We=["value","selected"],Qe={class:"text-red-500"},Xe={class:"w-6/12 sm:w-4/12 md:w-4/12 lg:w-4/12 flex flex-col flex-wrap p-1"},Ze=s("label",{for:""},"Total Dari U.Jalan",-1),et={class:"card-border disabled"},tt={class:"w-full flex items-center justify-end"},ut={__name:"trx_trp",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnLoadDBData:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},list_cost_center:{type:Array,required:!0,default:[]},online_status:{type:Boolean,required:!0,default:!1}},setup(b){const r=b,{$moment:M}=_e(),{pointFormat:L}=D(),S={id:-1,tanggal:new Date,id_uj:-1,xto:"",tipe:"",jenis:"",amount:0,pv_id:-1,pv_no:"",pv_total:0,supir_id:"",supir:"",kernet_id:"",kernet:"",no_pol:"",cost_center_code:"",cost_center_desc:"",pvr_id:"",pvr_no:"",pvr_total:0,pvr_had_detail:"",transition_target:"",payment_method_id:1,payment_method:{id:0,name:""}};let w={...S};const e=h({...S}),T=ae("token"),m=h({}),E=a=>{e.value.transition_target=a.target.value=="TBS"?e.value.transition_target:""};le();const Y=async()=>{x().loading_full=!0,m.value={};const a=new FormData;a.append("tanggal",M(e.value.tanggal).format("Y-MM-DD")),a.append("jenis",e.value.jenis),a.append("id_uj",e.value.id_uj),a.append("xto",e.value.xto),a.append("cost_center_code",e.value.cost_center_code),a.append("online_status",r.online_status),a.append("transition_target",e.value.transition_target),a.append("payment_method_id",e.value.payment_method_id),a.append("no_pol",e.value.no_pol),a.append("supir_id",d.value.id),a.append("kernet_id",_.value.id);let t="post",i=r.id;i==0||(a.append("id",i),a.append("_method","PUT"));const{data:l,error:u,status:f}=await V("/trx_trp",{method:t,headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},body:a,retry:0});if(x().loading_full=!1,f.value==="error"){F().trigger(u,m);return}e.value.supir=d.value.name,e.value.supir_rek_no=d.value._.rek_no.val,e.value.supir_rek_name=d.value._.rek_name.val,e.value.kernet=_.value.name,e.value.kernet_rek_no=_.value._.rek_no.val,e.value.kernet_rek_name=_.value._.rek_name.val;let n=J.value.map(N=>N.id).indexOf(e.value.payment_method_id);if(e.value.payment_method={...J.value[n]},e.value.updated_at=l.value.updated_at,r.id<=0)e.value.id=l.value.id,e.value.created_at=l.value.created_at,r.p_data.unshift(e.value);else{let N=r.p_data.map(X=>X.id).indexOf(r.id);N>=-1&&r.p_data.splice(N,1,{...e.value})}r.fnClose()},z=B(()=>{let a=e.value.jenis=="TBSK"?"TBS":e.value.jenis;return[...new Set(j.value.filter(t=>t.jenis==a).map(t=>t.xto))]}),R=B(()=>{let a=e.value.jenis=="TBSK"?"TBS":e.value.jenis;return j.value.filter(t=>t.xto==e.value.xto&&t.jenis==a)}),g={_raw:{},_:{id:{tcon:"IconsBaselineNumbers",text:"ID",val:""},name:{tcon:"IconsPerson",text:"Nama",val:""},rek_no:{tcon:"IconsNumber",text:"No Rek",val:""},rek_name:{tcon:"IconsCreditCard",text:"Nama Rek",val:""}},id:"",name:"",title:"",note:""},d=h(JSON.parse(JSON.stringify(g))),_=h(JSON.parse(JSON.stringify(g))),P=B(()=>{let a=[];return q.value.forEach((t,i)=>{let l=JSON.parse(JSON.stringify(g));l._.id.val=t.id,l._.name.val=t.name,l._.rek_no.val=t.rek_no,l._.rek_name.val=t.rek_name,l.id=t.id,l.name=t.name,l.title=(t.rek_no||"")+" "+(t.rek_name||""),l.note=G(t),l._raw=t,a.push(JSON.parse(JSON.stringify(l)))}),a}),G=a=>a.potongan?"Akan ada potong sebesar :"+D().pointFormat(a.potongan.nominal_cut):"",H=B(()=>!1),W=async()=>{x().loading_full=!0;const{data:a,error:t,status:i}=await V("/trx_trp",{method:"get",headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},params:{id:r.id},retry:0});if(x().loading_full=!1,i.value==="error"){F().trigger(t);return}let l=a.value.data;e.value=l,w={...l},d.value._.id.val=l.supir_id,d.value._.name.val=l.supir,d.value._.rek_no.val=l.supir_rek_no,d.value._.rek_name.val=l.supir_rek_name,d.value.id=l.supir_id,d.value.name=l.supir,d.value.rek_no=(l.supir_rek_no||"")+" "+(l.supir_rek_name||""),_.value._.id.val=l.kernet_id,_.value._.name.val=l.kernet,_.value._.rek_no.val=l.kernet_rek_no,_.value._.rek_name.val=l.kernet_rek_name,_.value.id=l.kernet_id,_.value.name=l.kernet,_.value.rek_no=(l.kernet_rek_no||"")+" "+(l.kernet_rek_name||"");let u=0,f=0;l.potongan.forEach(n=>{n.potongan_mst.employee_id==l.supir_id&&(u+=parseInt(n.nominal_cut)),n.potongan_mst.employee_id==l.kernet_id&&(f+=parseInt(n.nominal_cut))}),u>0&&(d.value.note="Telah di potong sebesar :"+D().pointFormat(u)),f>0&&(_.value.note="Telah di potong sebesar :"+D().pointFormat(f)),r.fnLoadDBData()},j=h([]),U=h([]),q=h([]),J=h([]),Q=async()=>{x().loading_full=!0;const{data:a,error:t,status:i}=await V("/trx_load_for_local",{method:"get",headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},retry:0});if(x().loading_full=!1,i.value==="error"){F().trigger(t);return}j.value=a.value.list_ujalan,U.value=a.value.list_vehicle,q.value=a.value.list_employee,J.value=a.value.list_payment_methods};C(()=>r.show,async(a,t)=>{a==!0&&(await Q(),await r.fnLoadDBData(),e.value={...S},w={...S},d.value=JSON.parse(JSON.stringify(g)),_.value=JSON.parse(JSON.stringify(g)),m.value={},r.id!=0&&W())},{immediate:!0}),C(()=>e.value.cost_center_code,(a,t)=>{let i="";if(a==""||a){let l=r.list_cost_center.filter(u=>u.CostCenter==e.value.cost_center_code);l.length>0?i=l[0].Description:e.value.cost_center_code==w.cost_center_code&&(i=w.cost_center_desc),e.value.cost_center_desc=i}},{deep:!0,immediate:!0});const I=(a,t)=>{let i=0,l="";if(a==""||a){let u=j.value.filter(f=>f.id==e.value.id_uj);u.length>0?(i=u[0].harga,l=u[0].tipe):e.value.id_uj==w.id_uj&&(i=w.amount,l=w.tipe),e.value.tipe=l,e.value.amount=i}};return C(()=>e.value.xto,(a,t)=>{r.show&&I(a)},{deep:!0,immediate:!0}),C(()=>e.value.id_uj,(a,t)=>{r.show&&I(a)},{deep:!0,immediate:!0}),(a,t)=>{const i=Z,l=oe("vue-date-picker"),u=ee,f=te;return k((c(),v("section",ue,[s("div",null,[y(i,{title:"Form Transaction",fn:b.fnClose,class:"w-full flex align-items-center",style:{color:"white"}},null,8,["fn"]),s("form",pe,[s("div",ce,[s("div",ve,[s("div",me,[fe,o(e).val!==1?(c(),v("div",we,[y(u,null,{default:ne(()=>[y(l,{modelValue:o(e).tanggal,"onUpdate:modelValue":t[0]||(t[0]=n=>o(e).tanggal=n),type:"datetime",format:"dd-MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":""},null,8,["modelValue"])]),_:1})])):(c(),v("div",he,[s("div",{class:ie(["card-border disabled",o(e).pvr_no!=""?"unselectable":""])},p(o(e).tanggal?o(M)(o(e).tanggal).format("DD-MM-YYYY"):""),3)])),s("p",ge,p(o(m).tanggal),1)]),s("div",xe,[ke,k(s("select",{"onUpdate:modelValue":t[1]||(t[1]=n=>o(e).jenis=n),onChange:t[2]||(t[2]=n=>E(n)),disabled:o(e).val==1},Be,40,ye),[[O,o(e).jenis]]),s("p",Ce,p(o(m).jenis),1)]),s("div",De,[Te,k(s("input",{type:"text",list:"vehicle","onUpdate:modelValue":t[3]||(t[3]=n=>o(e).no_pol=n),disabled:o(e).val==1},null,8,Je),[[re,o(e).no_pol]]),s("datalist",Oe,[(c(!0),v($,null,A(o(U),n=>(c(),v("option",{value:n.no_pol},p(n.no_pol),9,$e))),256))]),s("p",Ae,p(o(m).no_pol),1)]),s("div",Fe,[s("div",Ve,[Me,y(f,{arr:o(P),selected:o(d),pure:g,onSetSelected:t[4]||(t[4]=n=>d.value=n),disabled:o(w).supir_id>1||o(e).val1==1},null,8,["arr","selected","disabled"]),s("p",Pe,p(o(m).supir_id),1)]),s("div",Ue,[qe,y(f,{arr:o(P),selected:o(_),pure:g,onSetSelected:t[5]||(t[5]=n=>_.value=n),disabled:o(w).kernet_id>1||o(e).val1==1},null,8,["arr","selected","disabled"]),s("p",Ie,p(o(m).kernet_id),1)])]),o(e).jenis!=""?(c(),v("div",Ke,[s("div",Le,[Ee,k(s("select",{"onUpdate:modelValue":t[6]||(t[6]=n=>o(e).xto=n),disabled:o(e).val==1},[(c(!0),v($,null,A(o(z),n=>(c(),v("option",null,p(n),1))),256))],8,Ye),[[O,o(e).xto]]),s("p",ze,p(o(m).xto),1)]),s("div",Re,[Ge,k(s("select",{"onUpdate:modelValue":t[7]||(t[7]=n=>o(e).id_uj=n),disabled:o(e).val==1},[(c(!0),v($,null,A(o(R),n=>(c(),v("option",{value:n.id,selected:n.id==o(e).id_uj},p(n.tipe),9,We))),256))],8,He),[[O,o(e).id_uj]]),s("p",Qe,p(o(m).id_uj),1)]),s("div",Xe,[Ze,s("div",et,p(o(L)(o(e).amount)),1)])])):K("",!0)])]),s("div",tt,[s("button",{type:"button",name:"button",class:"w-36 m-1",onClick:t[8]||(t[8]=n=>b.fnClose())}," Cancel "),o(H)?K("",!0):(c(),v("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:t[9]||(t[9]=de(n=>Y(),["prevent"]))}," Save "))])])])],512)),[[se,b.show]])}}};export{ut as default};