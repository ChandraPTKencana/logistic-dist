import{_ as L}from"./HeaderPopup.vue.08540e42.js";import q from"./Search.8acc9d3d.js";import{h as E,r as f,I,n as g,v as R,o as m,c as v,a as e,b as D,B as V,q as N,m as n,C as M,s as j,F as z,D as O,E as U,t as _,H as K,p as Y,e as J,x as A,y as P}from"./entry.e204f976.js";import{u as Z}from"./useUtils.8fe8bb8e.js";import{u as G}from"./useMyFetch.6be3d84a.js";import{_ as Q}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.3b7905e2.js";const r=c=>(Y("data-v-543f1ffa"),c=c(),J(),c),W={class:"box-fixed"},X={action:"#",class:"w-full flex p-1"},ee={class:"grow"},te=r(()=>e("div",{class:"font-bold"}," Keyword ",-1)),se={class:"pl-1"},le=r(()=>e("div",{class:"font-bold"}," Sort By ",-1)),ae=r(()=>e("option",{value:"created_at"},"Created At",-1)),oe=r(()=>e("option",{value:"email"},"Email",-1)),ne=r(()=>e("option",{value:"fullname"},"Fullname",-1)),re=[ae,oe,ne],ie={class:"pl-1"},ce=r(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),ue=r(()=>e("option",{value:"asc"},"Asc",-1)),de=r(()=>e("option",{value:"desc"},"Desc",-1)),fe=[ue,de],_e={class:"flex items-end pl-1"},pe={class:"w-full flex justify-center items-center grow h-0 p-1"},me={key:0,class:""},ve={class:"tacky"},he=r(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"No."),e("th",null,"Email"),e("th",null,"Fullname"),e("th",null,"Role"),e("th",null,"Tanggal Dibuat"),e("th",null,"Tanggal Diubah")])],-1)),ye=["onClick"],ge={class:"bold"},we={class:"flex",style:{"justify-content":"end",padding:"5px"}},ke={__name:"users",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1}},setup(c){const w=c,{$moment:b}=K(),{countClickListFn:F}=Z(),H=E("token"),i=f([]),d=f(""),u=f({field:"created_at",by:"desc"}),h=f(-1),s=f({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),a={};a._TimeZoneOffset=new Date().getTimezoneOffset();const T=()=>{a.like="",d.value!=""&&(a.like=`email:%${d.value}%,fullname:%${d.value}%`),a.sort="",u.value.field&&(a.sort=u.value.field+":"+u.value.by)},y=f(null),S=async()=>{A().loading_full=!0,s.value.may_get_data=!1,a.page=s.value.page,a.page==1&&(i.value=[]),a.first_row&&delete a.first_row,a.page>1&&(a.first_row=JSON.stringify(i.value[0]));const{data:o,error:t,status:k}=await G("/users",{method:"get",headers:{Authorization:`Bearer ${H.value}`,Accept:"application/json"},params:a,retry:0});if(A().loading_full=!1,s.value.may_get_data=!0,k.value==="error"){P().trigger(t);return}s.value.page==1?(i.value=o.value.data,y.value&&(y.value.scrollTop=0)):s.value.page>1&&(i.value=[...i.value,...o.value.data]),o.value.data.length==0&&(s.value.is_last_record=!0)},$=async()=>{if(!s.value.may_get_data)return;let o=y.value;if(o.scrollLeft!=s.value.scrollLeft){s.value.scrollLeft=o.scrollLeft;return}s.value.is_last_record||!(Math.round(o.scrollTop)+o.clientHeight>=o.scrollHeight-1)||(s.value.page++,await S())},x=()=>{s.value.page=1,s.value.is_last_record=!1,T(),S()},C=()=>{h.value>-1?w.fnSelect(i.value[h.value]):w.fnSelect({id:"",email:"",fullname:""})};return I(()=>w.show,(o,t)=>{o==!0&&x()},{immediate:!0}),(o,t)=>{const k=L,B=q;return g((m(),v("section",W,[e("div",null,[D(k,{title:"Search And Select Employees",fn:c.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",X,[e("div",ee,[te,g(e("input",{class:"",type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>V(d)?d.value=l:null),name:"search",placeholder:"Keyword"},null,512),[[N,n(d)]])]),e("div",se,[le,g(e("select",{class:"","onUpdate:modelValue":t[1]||(t[1]=l=>n(u).field=l)},re,512),[[M,n(u).field]])]),e("div",ie,[ce,g(e("select",{class:"","onUpdate:modelValue":t[2]||(t[2]=l=>n(u).by=l)},fe,512),[[M,n(u).by]])]),e("div",_e,[e("button",{class:"",type:"submit",name:"button",onClick:t[3]||(t[3]=j(l=>x(),["prevent"]))},[D(B,{class:"text-2xl"})])])]),e("div",pe,[n(i).length==0?(m(),v("div",me," Maaf Tidak Ada Record ")):(m(),v("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:y,onScroll:$},[e("table",ve,[he,e("tbody",null,[(m(!0),v(z,null,O(n(i),(l,p)=>(m(),v("tr",{key:p,onClick:be=>n(F)(p,()=>{h.value=p},C),class:U(n(h)==p?"active":"")},[e("td",null,_(p+1)+".",1),e("td",ge,_(l.email),1),e("td",null,_(l.fullname),1),e("td",null,_(l.role),1),e("td",null,_(n(b)(l.created_at).format("DD-MM-Y HH:mm:ss")),1),e("td",null,_(n(b)(l.updated_at).format("DD-MM-Y HH:mm:ss")),1)],10,ye))),128))])])],544))]),e("div",we,[e("button",{onClick:t[4]||(t[4]=l=>C()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[R,c.show]])}}},He=Q(ke,[["__scopeId","data-v-543f1ffa"]]);export{He as default};