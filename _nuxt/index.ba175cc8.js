import me from"./Header.e53b1dc3.js";import pe from"./Plus.b386af3b.js";import ve from"./Edit.3402b750.js";import fe from"./Delete.8b450b4e.js";import ye from"./Line.87bbcbc0.js";import he from"./Check.148f6562.js";import ge from"./TypeIcon.99860c3f.js";import be from"./TableView.82ab8f83.js";import{_ as ke}from"./PopupMini.vue.305afe4f.js";import xe from"./vehicle.d3226835.js";import{r as n,f as Y,g as we,h as De,i as w,j as q,s as Ce,c as D,a as r,b as m,k as G,v as Se,l,m as Z,n as I,w as y,F as Ae,q as Oe,x as u,y as M,o as p,z as C,d as T,t as K,A as $e,p as Be,e as Ie}from"./entry.5f1e31b4.js";import{u as P}from"./useMyFetch.b9ad3f63.js";import{u as N}from"./useUtils.0094ecfc.js";import{_ as Me}from"./_plugin-vue_export-helper.c27b6911.js";import"./DocJPEG.34f6de68.js";import"./DocJPG.be93e437.js";import"./DocPNG.8945018c.js";import"./DocPDF.88cdc4a8.js";import"./Search.a4808153.js";import"./Adjust.5c765884.js";import"./TableHeaderEye.ea079a36.js";import"./Times.3628b580.js";import"./ClearAll.bf09bc70.js";import"./client-only.4a858fe2.js";import"./ClearEach.a8f39f12.js";import"./CaretLeftDoubleBold.fb6ec6b5.js";import"./CaretLeftBold.18bf2f15.js";import"./CaretRightBold.7db4352a.js";import"./CaretRightDoubleBold.c58e9111.js";import"./Exclamation.6411168e.js";import"./HeaderPopup.vue.d6794154.js";const V=b=>(Be("data-v-a4a936d5"),b=b(),Ie(),b),Te={class:"w-full h-full flex flex-col"},Pe={class:"w-full flex grow flex-col overflow-auto h-0"},Ne={class:"w-full flex justify-between flex-wrap"},Ve={class:"grow flex"},Fe={class:"m-1"},Ee=V(()=>r("option",{value:"available"},"Available",-1)),He=V(()=>r("option",{value:"deleted"},"Trash",-1)),je=V(()=>r("option",{value:"all"},"All",-1)),ze=[Ee,He,je],Le={class:"grow mb-5"},Ue={__name:"index",async setup(b){let k,F;const Q=t=>t.deleted==1?"!bg-red-400":t.val==0?"!bg-gray-300":"",_=n("available");Y(()=>_.value,t=>{j()},{immediate:!1});const i={};i._TimeZoneOffset=new Date().getTimezoneOffset();const S=we("token"),{data:s}=([k,F]=De(async()=>Oe(async()=>{u().loading_full=!0;const{data:t,error:e,status:v}=await P("/vehicles",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:{filter_status:_},retry:0});return u().loading_full=!1,v.value==="error"?(M().trigger(e),[]):t.value.data},"$OEvmawoGm4")),k=await k,F(),k);n("");const A=n({field:"",by:"desc"}),o=n(-1),d=n({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),E=w(()=>s.value[o.value]),W=()=>{i.like="";let t=JSON.parse(JSON.stringify(u()._tv.global_keyword));t!=""&&(i.like=`id:%${t}%,no_pol:%${t}%`),i.sort="",A.value.field&&(i.sort=A.value.field+":"+A.value.by),i.filter_model=JSON.stringify(u()._tv.filter_model)},H=async()=>{u().loading_full=!0,d.value.may_get_data=!1,i.page=d.value.page,i.page==1&&(s.value=[]),i.filter_status=_.value;const{data:t,error:e,status:v}=await P("/vehicles",{method:"get",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},params:i,retry:0});if(u().loading_full=!1,d.value.may_get_data=!0,v.value==="error"){M().trigger(e);return}d.value.page==1?s.value=t.value.data:d.value.page>1&&(s.value=[...s.value,...t.value.data]),t.value.data.length==0&&(d.value.is_last_record=!0),u()._tv.filter_box=!1},j=()=>{o.value=-1,d.value.page=1,d.value.is_last_record=!1,W(),H()},x=n(!1),O=n(0),z=n(!1),X=()=>{O.value=0,z.value=!1,x.value=!0},{display:L}=q();Ce(q());const ee=()=>{o.value==-1?L({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(O.value=s.value[o.value].id,z.value=!1,x.value=!0)},$=n(!1),U=n({}),h=n(!1),f=n(""),te=async()=>{h.value&&(h.value=!1)},ae=()=>{o.value==-1?L({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(f.value="",U.value={id:s.value[o.value].id},h.value=!0)};Y(()=>f.value,t=>{t.trim().length>0?$.value=!0:$.value=!1},{immediate:!1});const le=async()=>{u().loading_full=!0;const t=new FormData;t.append("id",s.value[o.value].id),t.append("deleted_reason",f.value),t.append("_method","DELETE");const{data:e,error:v,status:B}=await P("/vehicle",{method:"post",headers:{Authorization:`Bearer ${S.value}`,Accept:"application/json"},body:t,retry:0});if(u().loading_full=!1,B.value==="error"){M().trigger(v);return}let c={...s.value[o.value]};c.deleted=e.value.deleted,c.deleted_user=e.value.deleted_user,c.deleted_at=e.value.deleted_at,c.deleted_by=e.value.deleted_by,c.deleted_reason=e.value.deleted_reason,_.value!="all"?s.value.splice(o.value,1):s.value.splice(o.value,1,{...c}),o.value=-1,h.value=!1},oe=n([{key:"no",label:"No",isai:!0},{key:"id",label:"ID",filter_on:1,type:"number"},{key:"no_pol",label:"No Pol",filter_on:1,type:"string",sort:{priority:1,type:"asc"}},{key:"created_at",label:"Created At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"updated_at",label:"Updated At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1},{key:"deleted_by_username",label:"Deleted By",tbl_show:1},{key:"deleted_at",label:"Deleted At",type:"datetime",dateformat:"DD-MM-Y HH:mm:ss",filter_on:1,tbl_show:1},{key:"deleted_reason",label:"Deleted Reason",tbl_show:1,type:"string",filter_on:1}]),se=w(()=>["available","all","unapprove"].indexOf(_.value)>-1&&N().checkPermission("vehicle.create")),ne=w(()=>o.value>-1&&[void 0,0].indexOf(E.value.deleted)>-1&&N().checkPermissions(["vehicle.modify"])),re=w(()=>o.value>-1&&N().checkPermission("vehicle.remove")&&[void 0,0].indexOf(E.value.deleted)>-1);return(t,e)=>{const v=me,B=pe,c=ve,ie=fe,J=ye,R=he,de=ge,ue=be,_e=ke,ce=xe;return p(),D(Ae,null,[r("div",Te,[m(v,{title:"List Vehicle"}),r("div",Pe,[r("div",Ne,[r("div",Ve,[r("div",Fe,[G(r("select",{class:"","onUpdate:modelValue":e[0]||(e[0]=a=>Z(_)?_.value=a:null)},ze,512),[[Se,l(_)]])]),l(se)?(p(),D("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[1]||(e[1]=a=>X())},[m(B)])):I("",!0),l(ne)?(p(),D("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[2]||(e[2]=a=>ee())},[m(c)])):I("",!0),l(re)?(p(),D("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:e[3]||(e[3]=a=>ae())},[m(ie)])):I("",!0)])]),m(ue,{thead:l(oe),selected:l(o),onSetSelected:e[4]||(e[4]=a=>o.value=a),tbody:l(s),fnCallData:H,scrolling:l(d),onSetScrollingPage:e[5]||(e[5]=a=>l(d).page=a),onDoFilter:e[6]||(e[6]=a=>j()),rowBgColor:Q},{val:y(({item:a})=>[a.val?(p(),C(R,{key:1})):(p(),C(J,{key:0}))]),val1:y(({item:a})=>[a.val1?(p(),C(R,{key:1})):(p(),C(J,{key:0}))]),bank_code:y(({item:a})=>{var g;return[T(K((g=a.bank)==null?void 0:g.code),1)]}),attachment_1_type:y(({item:a})=>[m(de,{value:a.attachment_1_type},null,8,["value"])]),deleted_by_username:y(({item:a})=>{var g;return[T(K((g=a.deleted_by)==null?void 0:g.username),1)]}),_:2},1032,["thead","selected","tbody","scrolling"])])]),m(_e,{type:"delete",show:l(h),data:l(U),fnClose:te,fnConfirm:le,enabledOk:l($)},{footer:y(()=>[T(" Masukkan Alasan Penghapusan: "),r("div",Le,[G(r("textarea",{"onUpdate:modelValue":e[7]||(e[7]=a=>Z(f)?f.value=a:null)},null,512),[[$e,l(f)]])])]),_:1},8,["show","data","enabledOk"]),m(ce,{show:l(x),fnClose:()=>{x.value=!1},id:l(O),p_data:l(s)},null,8,["show","fnClose","id","p_data"])],64)}}},kt=Me(Ue,[["__scopeId","data-v-a4a936d5"]]);export{kt as default};