import{_ as V}from"./HeaderPopup.vue.d6f31a0e.js";import{r as v,f as N,j as C,m as i,M as U,o as B,c as A,a as e,b as M,k as l,v as p,t as d,q as $,x as q,A as f,B as w}from"./entry.5e60e084.js";import{u as h}from"./useMyFetch.6c881b2f.js";import"./Times.042464b5.js";import"./_plugin-vue_export-helper.c27b6911.js";const j={class:"box-fixed"},D={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},F={class:"w-full flex flex-col items-center grow overflow-auto"},P={class:"w-full flex flex-row flex-wrap"},E={class:"w-full flex flex-col flex-wrap p-1"},K=e("label",{for:""},"Nama",-1),T={class:"text-red-500"},z={class:"w-full flex flex-col flex-wrap p-1"},R=e("label",{for:""},"Jabatan",-1),H=e("option",{value:"Supir"},"Supir",-1),I=e("option",{value:"Kernet"},"Kernet",-1),J=[H,I],O={class:"text-red-500"},G={class:"w-full flex flex-col flex-wrap p-1"},L=e("label",{for:""},"No KTP",-1),Q={class:"text-red-500"},W={class:"w-full flex flex-col flex-wrap p-1"},X=e("label",{for:""},"No SIM",-1),Y={class:"text-red-500"},Z={class:"w-full flex flex-col flex-wrap p-1"},ee=e("label",{for:""},"Nama Bank",-1),te={class:"text-red-500"},oe={class:"w-full flex flex-col flex-wrap p-1"},le=e("label",{for:""},"No Rek",-1),ae={class:"text-red-500"},ne={class:"w-full flex flex-col flex-wrap p-1"},se=e("label",{for:""},"Nama Rek",-1),re={class:"text-red-500"},ie={class:"w-full flex flex-col flex-wrap p-1"},de=e("label",{for:""},"Phone Number",-1),pe={class:"text-red-500"},ue={class:"w-full flex items-center justify-end"},ve={__name:"employee",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]}},setup(_){const r=_,m={id:-1,name:"",role:"Supir",ktp_no:"",sim_no:"",bank_name:"",rek_no:"",rek_name:"",phone_number:""},t=v({...m}),c=N("token"),s=v({}),b=async()=>{f().loading_full=!0,s.value={};const n=new FormData;n.append("name",t.value.name),n.append("role",t.value.role),n.append("ktp_no",t.value.ktp_no),n.append("sim_no",t.value.sim_no),n.append("bank_name",t.value.bank_name),n.append("rek_no",t.value.rek_no),n.append("rek_name",t.value.rek_name),n.append("phone_number",t.value.phone_number);let o="post",u=r.id;u==0||(n.append("id",u),n.append("_method","PUT"));const{data:a,error:y,status:g}=await h("/employee",{method:o,headers:{Authorization:`Bearer ${c.value}`,Accept:"application/json"},body:n,retry:0});if(f().loading_full=!1,g.value==="error"){w().trigger(y,s);return}if(t.value.updated_at=a.value.updated_at,r.id<=0)t.value.id=a.value.id,t.value.created_at=a.value.created_at,r.p_data.unshift(t.value);else{let x=r.p_data.map(S=>S.id).indexOf(r.id);x>=-1&&r.p_data.splice(x,1,{...t.value})}r.fnClose()},k=async()=>{f().loading_full=!0;const{data:n,error:o,status:u}=await h("/employee",{method:"get",headers:{Authorization:`Bearer ${c.value}`,Accept:"application/json"},params:{id:r.id},retry:0});if(f().loading_full=!1,u.value==="error"){w().trigger(o);return}t.value=n.value.data};return C(()=>r.show,(n,o)=>{n==!0&&(t.value={...m},s.value={},r.id!=0&&k())},{immediate:!0}),(n,o)=>{const u=V;return i((B(),A("section",j,[e("div",null,[M(u,{title:"Form Employee",fn:_.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",D,[e("div",F,[e("div",P,[e("div",E,[K,i(e("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>l(t).name=a)},null,512),[[p,l(t).name]]),e("p",T,d(l(s).name),1)]),e("div",z,[R,i(e("select",{"onUpdate:modelValue":o[1]||(o[1]=a=>l(t).role=a)},J,512),[[$,l(t).role]]),e("p",O,d(l(s).role),1)]),e("div",G,[L,i(e("input",{type:"text","onUpdate:modelValue":o[2]||(o[2]=a=>l(t).ktp_no=a)},null,512),[[p,l(t).ktp_no]]),e("p",Q,d(l(s).ktp_no),1)]),e("div",W,[X,i(e("input",{type:"text","onUpdate:modelValue":o[3]||(o[3]=a=>l(t).sim_no=a)},null,512),[[p,l(t).sim_no]]),e("p",Y,d(l(s).sim_no),1)]),e("div",Z,[ee,i(e("input",{type:"text","onUpdate:modelValue":o[4]||(o[4]=a=>l(t).bank_name=a)},null,512),[[p,l(t).bank_name]]),e("p",te,d(l(s).bank_name),1)]),e("div",oe,[le,i(e("input",{type:"text","onUpdate:modelValue":o[5]||(o[5]=a=>l(t).rek_no=a)},null,512),[[p,l(t).rek_no]]),e("p",ae,d(l(s).rek_no),1)]),e("div",ne,[se,i(e("input",{type:"text","onUpdate:modelValue":o[6]||(o[6]=a=>l(t).rek_name=a)},null,512),[[p,l(t).rek_name]]),e("p",re,d(l(s).rek_name),1)]),e("div",ie,[de,i(e("input",{type:"text","onUpdate:modelValue":o[7]||(o[7]=a=>l(t).phone_number=a)},null,512),[[p,l(t).phone_number]]),e("p",pe,d(l(s).phone_number),1)])])]),e("div",ue,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:o[8]||(o[8]=a=>_.fnClose())}," Cancel "),e("button",{type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:o[9]||(o[9]=q(a=>b(),["prevent"]))}," Save ")])])])],512)),[[U,_.show]])}}};export{ve as default};