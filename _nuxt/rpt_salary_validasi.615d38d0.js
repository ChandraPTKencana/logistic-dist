import{_ as J}from"./HeaderPopup.vue.fc7d586d.js";import{r as g,f as H,G as c,j as K,m as L,J as R,o as m,c as h,a as t,b as O,t as l,k as a,d as u,F as Y,y as Q,l as b,x as W,E as X,A as j,B as $,p as Z,e as tt}from"./entry.77b63dd4.js";import{u as at}from"./useUtils.6cd565c1.js";import{u as q}from"./useMyFetch.5783af15.js";import{_ as st}from"./_plugin-vue_export-helper.c27b6911.js";import"./Times.9cabedb1.js";const i=p=>(Z("data-v-f39cdef0"),p=p(),tt(),p),et={class:"box-fixed"},lt={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},ot={class:"w-full flex flex-col items-center grow overflow-auto"},nt={class:"w-full flex flex-row flex-wrap"},_t={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},rt=i(()=>t("label",{for:""},"Period End",-1)),ut={class:"card-border"},it={key:0,class:"w-full flex p-1 justify-between flex-wrap"},ct={class:"w-full",role:"sticky"},pt={class:"tacky w-full !table-auto",style:{"white-space":"normal"}},dt=i(()=>t("tr",{class:"sticky -top-1 !z-[2]"},[t("td",{colspan:"25",class:"!bg-slate-800 text-white font-bold"}," Detail ")],-1)),mt={class:"sticky top-7 !z-[2]"},ht=i(()=>t("th",{rowspan:"2"},"No",-1)),vt=i(()=>t("th",{rowspan:"2"},"ID",-1)),ft=i(()=>t("th",{rowspan:"2"},"Nama Pekerja",-1)),bt=i(()=>t("th",{rowspan:"2"},"Jabatan",-1)),yt=i(()=>t("th",{rowspan:"2"},"Tmpt Lahir",-1)),wt=i(()=>t("th",{rowspan:"2"},"Tgl Lahir",-1)),xt=i(()=>t("th",{rowspan:"2"},"TMK",-1)),kt=i(()=>t("th",{rowspan:"2"},"No KTP",-1)),gt=i(()=>t("th",{rowspan:"2"},"Alamat",-1)),jt=i(()=>t("th",{rowspan:"2"},"Status",-1)),Ft=i(()=>t("th",{rowspan:"2"},"No Rek",-1)),St=i(()=>t("th",{rowspan:"2"},"Nama Bank",-1)),Et={colspan:"3"},Dt={class:"text-sm"},Bt={colspan:"3"},Mt={class:"text-sm"},Nt={colspan:"3"},Ct={class:"text-sm"},Tt={rowspan:"2"},At={class:"text-sm"},Vt={rowspan:"2"},Pt={class:"text-sm"},Yt={rowspan:"2"},$t={class:"text-sm"},qt={rowspan:"2"},It={class:"text-sm"},Ut={class:"sticky top-[60px] !z-[2]"},zt={class:"text-sm"},Gt={class:"text-sm"},Jt={class:"text-sm"},Ht={class:"text-sm"},Kt={class:"text-sm"},Lt={class:"text-sm"},Rt={class:"text-sm"},Ot={class:"text-sm"},Qt={class:"text-sm"},Wt={ref:"to_move"},Xt=["data-index"],Zt={class:"w-full flex items-center justify-end"},ta={class:"w-full flex flex-wrap p-3 items-center"},aa=i(()=>t("div",null," Di Validasi oleh : ",-1)),sa={key:0,class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white text-xs"},ea={key:0},la={__name:"rpt_salary_validasi",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},is_view:{type:Boolean,required:!1,default:!1}},setup(p){const d=p,{$moment:y}=X(),{pointFormat:n}=at(),_=g({...{id:-1,name:"",tipe:"",is_transition:!1,amount:0,details:[],val1:0,val1_by:{username:""},val1_at:"",val2:0,val2_by:{username:""},val2_at:"",val3:0,val3_by:{username:""},val3_at:""}}),C=H("token"),T=g({}),A=g(null),r=g([]),I=async()=>{j().loading_full=!0,T.value={};const e=new FormData;let o="post",v=d.id;v==0||(e.append("id",v),e.append("_method","PUT"));const{data:s,error:f,status:z}=await q("/rpt_salary_validasi",{method:o,headers:{Authorization:`Bearer ${C.value}`,Accept:"application/json"},body:e,retry:0});if(j().loading_full=!1,z.value==="error"){$().trigger(f,T);return}_.value.val1=s.value.val1,_.value.val1_user=s.value.val1_user,_.value.val1_by=s.value.val1_by,_.value.val1_at=s.value.val1_at,_.value.val2=s.value.val2,_.value.val2_user=s.value.val2_user,_.value.val2_by=s.value.val2_by,_.value.val2_at=s.value.val2_at,_.value.val3=s.value.val3,_.value.val3_user=s.value.val3_user,_.value.val3_by=s.value.val3_by,_.value.val3_at=s.value.val3_at;let P=d.p_data.map(G=>G.id).indexOf(d.id);P>=-1&&d.p_data.splice(P,1,{..._.value}),d.fnClose()};c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.standby_nominal)}),e});const F=c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.sb_gaji)}),e}),S=c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.sb_makan)}),e}),E=c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.sb_dinas)}),e}),w=c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.sb_gaji_2)}),e}),x=c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.sb_makan_2)}),e}),k=c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.sb_dinas_2)}),e}),D=c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.uj_gaji)}),e}),B=c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.uj_makan)}),e}),M=c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.uj_dinas)}),e}),V=c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.nominal_cut)}),e}),N=c(()=>{let e=0;return r.value.forEach(o=>{e+=parseFloat(o.salary_bonus_nominal)}),e}),U=async()=>{j().loading_full=!0;const{data:e,error:o,status:v}=await q("/rpt_salary",{method:"get",headers:{Authorization:`Bearer ${C.value}`,Accept:"application/json"},params:{id:d.id},retry:0});if(j().loading_full=!1,v.value==="error"){$().trigger(o);return}_.value=e.value.data,r.value=e.value.data.details};return c(()=>{let e=0;return r.value.forEach(o=>{o.p_status!="Remove"&&(e+=parseInt(o.amount))}),e}),c(()=>!1),K(()=>d.show,(e,o)=>{e==!0&&(d.is_view==!1&&setTimeout(()=>{A.value.focus()},1),U())},{immediate:!0}),(e,o)=>{const v=J;return L((m(),h("section",et,[t("div",null,[O(v,{title:"Form Master Standby Validation",fn:p.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),t("form",lt,[t("div",ot,[t("div",nt,[t("div",_t,[rt,t("div",ut,l(a(y)(a(_).period_end).format("MM-Y")),1)])]),a(r).length?(m(),h("div",it,[t("div",ct,[t("table",pt,[t("thead",null,[dt,t("tr",mt,[ht,vt,ft,bt,yt,wt,xt,kt,gt,jt,Ft,St,t("th",Et,[u("Standby 1 "),t("span",Dt,"("+l(a(n)(a(F)+a(S)+a(E)||0))+")",1)]),t("th",Bt,[u("Standby 2 "),t("span",Mt,"("+l(a(n)(a(w)+a(x)+a(k)||0))+")",1)]),t("th",Nt,[u("Trip "),t("span",Ct,"("+l(a(n)(a(D)+a(B)+a(M)||0))+")",1)]),t("th",Tt,[u("Potongan "),t("span",At,"("+l(a(n)(a(V)||0))+")",1)]),t("th",Vt,[u("U.Kerajinan "),t("span",Pt,"("+l(a(n)(a(N)||0))+")",1)]),t("th",Yt,[u("Grand Total "),t("span",$t,"("+l(a(n)(a(F)+a(S)+a(E)+a(w)+a(x)+a(k)+a(D)+a(B)+a(M)-a(V)+a(N)||0))+")",1)]),t("th",qt,[u("Total Periode 2 "),t("span",It,"("+l(a(n)(a(w)+a(x)+a(k)+a(N)||0))+")",1)])]),t("tr",Ut,[t("th",null,[u("SB.Gaji "),t("span",zt,"("+l(a(n)(a(F)||0))+")",1)]),t("th",null,[u("SB.Makan "),t("span",Gt,"("+l(a(n)(a(S)||0))+")",1)]),t("th",null,[u("SB.Dinas "),t("span",Jt,"("+l(a(n)(a(E)||0))+")",1)]),t("th",null,[u("SB.Gaji "),t("span",Ht,"("+l(a(n)(a(w)||0))+")",1)]),t("th",null,[u("SB.Makan "),t("span",Kt,"("+l(a(n)(a(x)||0))+")",1)]),t("th",null,[u("SB.Dinas "),t("span",Lt,"("+l(a(n)(a(k)||0))+")",1)]),t("th",null,[u("UJ.Gaji "),t("span",Rt,"("+l(a(n)(a(D)||0))+")",1)]),t("th",null,[u("UJ.Makan "),t("span",Ot,"("+l(a(n)(a(B)||0))+")",1)]),t("th",null,[u("UJ.Dinas "),t("span",Qt,"("+l(a(n)(a(M)||0))+")",1)])])]),t("tbody",Wt,[(m(!0),h(Y,null,Q(a(r),(s,f)=>(m(),h(Y,{key:f},[s.p_status!="Remove"?(m(),h("tr",{key:0,"data-index":f},[t("td",null,l(f+1)+".",1),t("td",null,l(s.employee_id),1),t("td",null,l(s.employee_name),1),t("td",null,l(s.employee_role),1),t("td",null,l(s.employee_birth_place),1),t("td",null,l(s.employee_birth_date?a(y)(s.employee_birth_date).format("DD-MM-Y"):""),1),t("td",null,l(s.employee_tmk?a(y)(s.employee_tmk).format("DD-MM-Y"):""),1),t("td",null,l(s.employee_ktp_no),1),t("td",null,l(s.employee_address),1),t("td",null,l(s.employee_status),1),t("td",null,l(s.employee_rek_no),1),t("td",null,l(s.employee_bank_name),1),t("td",null,l(a(n)(s.sb_gaji)),1),t("td",null,l(a(n)(s.sb_makan)),1),t("td",null,l(a(n)(s.sb_dinas)),1),t("td",null,l(a(n)(s.sb_gaji_2)),1),t("td",null,l(a(n)(s.sb_makan_2)),1),t("td",null,l(a(n)(s.sb_dinas_2)),1),t("td",null,l(a(n)(s.uj_gaji)),1),t("td",null,l(a(n)(s.uj_makan)),1),t("td",null,l(a(n)(s.uj_dinas)),1),t("td",null,l(a(n)(s.nominal_cut)),1),t("td",null,l(a(n)(s.salary_bonus_nominal)),1),t("td",null,l(a(n)(parseFloat(s.sb_gaji)+parseFloat(s.sb_makan)+parseFloat(s.sb_dinas)+parseFloat(s.sb_gaji_2)+parseFloat(s.sb_makan_2)+parseFloat(s.sb_dinas_2)+parseFloat(s.uj_gaji)+parseFloat(s.uj_makan)+parseFloat(s.uj_dinas)-parseFloat(s.nominal_cut)+parseFloat(s.salary_bonus_nominal))),1),t("td",null,l(a(n)(parseFloat(s.sb_gaji_2)+parseFloat(s.sb_makan_2)+parseFloat(s.sb_dinas_2)+parseFloat(s.salary_bonus_nominal))),1)],8,Xt)):b("",!0)],64))),128))],512)])])])):b("",!0)]),t("div",Zt,[t("div",ta,[aa,a(_).val1||a(_).val2||a(_).val3?(m(),h("div",sa,[a(_).val1?(m(),h("div",ea," App 1 : "+l(a(_).val1_by.username)+" ( "+l(a(_).val1_at?a(y)(a(_).val1_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):b("",!0)])):b("",!0)]),t("button",{type:"button",name:"button",class:"w-36 m-1",onClick:o[0]||(o[0]=s=>p.fnClose())}," Cancel "),p.is_view==0?(m(),h("button",{key:0,ref_key:"it_val",ref:A,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:o[1]||(o[1]=W(s=>I(),["prevent"]))}," Validasi ",512)):b("",!0)])])])],512)),[[R,p.show]])}}},pa=st(la,[["__scopeId","data-v-f39cdef0"]]);export{pa as default};