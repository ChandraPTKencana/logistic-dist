import{_ as Y}from"./HeaderPopup.vue.c8c39cb8.js";import{_ as K}from"./client-only.efc0c010.js";import{r as D,f as L,G as i,j as I,I as O,m as R,J as H,o as c,c as p,a as t,b as E,k as e,t as o,w as Q,d as u,F as T,y as W,l as B,x as X,E as Z,A as b,B as V}from"./entry.d4b0a35b.js";import{u as C}from"./useUtils.f3863b3f.js";import{u as U}from"./useMyFetch.2c8e3aa4.js";import"./Times.820d93a5.js";import"./_plugin-vue_export-helper.c27b6911.js";const tt={class:"box-fixed"},et={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},at={class:"w-full flex flex-col items-center grow overflow-auto"},st={class:"w-full flex flex-row flex-wrap"},ot={class:"w-1/2 sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},lt=t("label",{for:""},"Period End",-1),nt={key:0,class:"card-border"},rt={key:1},_t={class:"text-red-500"},ut={key:0,class:"w-full flex p-1 justify-between flex-wrap"},it={class:"w-full",role:"sticky"},dt={class:"tacky w-full !table-auto",style:{"white-space":"normal"}},ct=t("tr",{class:"sticky -top-1 !z-[2]"},[t("td",{colspan:"21",class:"!bg-slate-800 text-white font-bold"}," Detail ")],-1),pt={class:"sticky top-7 !z-[2]"},mt=t("th",{rowspan:"2"},"No",-1),ht=t("th",{rowspan:"2"},"ID",-1),ft=t("th",{rowspan:"2"},"Nama Pekerja",-1),vt=t("th",{rowspan:"2"},"Jabatan",-1),yt=t("th",{rowspan:"2"},"Tmpt Lahir",-1),wt=t("th",{rowspan:"2"},"Tgl Lahir",-1),bt=t("th",{rowspan:"2"},"TMK",-1),kt=t("th",{rowspan:"2"},"No KTP",-1),xt=t("th",{rowspan:"2"},"Alamat",-1),gt=t("th",{rowspan:"2"},"Status",-1),jt=t("th",{rowspan:"2"},"No Rek",-1),Ft=t("th",{rowspan:"2"},"Nama Bank",-1),Mt={colspan:"3"},St={class:"text-sm"},Dt={colspan:"3"},Et={class:"text-sm"},Bt={rowspan:"2"},Ct={class:"text-sm"},Nt={rowspan:"2"},At={class:"text-sm"},Pt={rowspan:"2"},qt={class:"text-sm"},Tt={class:"sticky top-[60px] !z-[2]"},Vt={class:"text-sm"},Ut={class:"text-sm"},$t={class:"text-sm"},zt={class:"text-sm"},Gt={class:"text-sm"},Jt={class:"text-sm"},Yt={ref:"to_move"},Kt=["data-index"],Lt={class:"w-full flex items-center justify-end"},Zt={__name:"rpt_salary",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},is_copy:{type:[Boolean,Number],required:!0,default:!1}},setup(v){const m=v,{$moment:y}=Z(),{pointFormat:r}=C(),N={id:"",period_end:new Date},n=D({...N}),A=L("token"),w=D({}),_=D([]),$=async()=>{b().loading_full=!0,w.value={};const a=new FormData;a.append("period_end",n.value.period_end?y(n.value.period_end).format("Y-MM"):"");let l="post",d=n.value.id;d==""||(a.append("id",d),a.append("_method","PUT"));const{data:h,error:S,status:s}=await U("/rpt_salary",{method:l,headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},body:a,retry:0});if(b().loading_full=!1,s.value==="error"){V().trigger(S,w);return}if(_.value=h.value.details,d<=0)n.value.id=h.value.id,n.value.created_at=h.value.created_at,n.value.updated_at=h.value.updated_at,m.p_data.unshift(n.value);else{n.value.updated_at=h.value.updated_at;let f=m.p_data.map(J=>J.id).indexOf(d);f>=-1&&m.p_data.splice(f,1,{...n.value})}};i(()=>{let a=0;return _.value.forEach(l=>{a+=parseFloat(l.standby_nominal)}),a});const k=i(()=>{let a=0;return _.value.forEach(l=>{a+=parseFloat(l.sb_gaji)}),a}),x=i(()=>{let a=0;return _.value.forEach(l=>{a+=parseFloat(l.sb_makan)}),a}),g=i(()=>{let a=0;return _.value.forEach(l=>{a+=parseFloat(l.sb_dinas)}),a}),j=i(()=>{let a=0;return _.value.forEach(l=>{a+=parseFloat(l.uj_gaji)}),a}),F=i(()=>{let a=0;return _.value.forEach(l=>{a+=parseFloat(l.uj_makan)}),a}),M=i(()=>{let a=0;return _.value.forEach(l=>{a+=parseFloat(l.uj_dinas)}),a}),P=i(()=>{let a=0;return _.value.forEach(l=>{a+=parseFloat(l.nominal_cut)}),a}),q=i(()=>{let a=0;return _.value.forEach(l=>{a+=parseFloat(l.salary_bonus_nominal)}),a}),z=i(()=>n.value.val&&n.value.val1||C().checkPermission("rpt_salary.val")&&n.value.val||C().checkPermission("rpt_salary.val1")&&n.value.val1),G=async()=>{b().loading_full=!0;const{data:a,error:l,status:d}=await U("/rpt_salary",{method:"get",headers:{Authorization:`Bearer ${A.value}`,Accept:"application/json"},params:{id:m.id},retry:0});if(b().loading_full=!1,d.value==="error"){V().trigger(l);return}n.value=a.value.data,m.is_copy&&(n.value.val=0,n.value.val1=0),_.value=a.value.data.details};return I(()=>m.show,(a,l)=>{a==!0&&(n.value={...N},_.value=[],w.value={},m.id!=0&&G())},{immediate:!0}),(a,l)=>{const d=Y,h=O("vue-date-picker"),S=K;return R((c(),p("section",tt,[t("div",null,[E(d,{title:"Form Salary Paid",fn:v.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),t("form",et,[t("div",at,[t("div",st,[t("div",ot,[lt,e(n).id?(c(),p("div",nt,o(e(y)(e(n).period_end).format("MM-Y")),1)):(c(),p("div",rt,[E(S,null,{default:Q(()=>[E(h,{modelValue:e(n).period_end,"onUpdate:modelValue":l[0]||(l[0]=s=>e(n).period_end=s),format:"MM-yyyy","enable-time-picker":!1,"text-input":"","teleport-center":"","month-picker":""},null,8,["modelValue"])]),_:1})])),t("p",_t,o(e(w).period_end),1)])]),e(_).length?(c(),p("div",ut,[t("div",it,[t("table",dt,[t("thead",null,[ct,t("tr",pt,[mt,ht,ft,vt,yt,wt,bt,kt,xt,gt,jt,Ft,t("th",Mt,[u("Standby "),t("span",St,"("+o(e(r)(e(k)+e(x)+e(g)||0))+")",1)]),t("th",Dt,[u("Trip "),t("span",Et,"("+o(e(r)(e(j)+e(F)+e(M)||0))+")",1)]),t("th",Bt,[u("Potongan "),t("span",Ct,"("+o(e(r)(e(P)||0))+")",1)]),t("th",Nt,[u("U.Kerajinan "),t("span",At,"("+o(e(r)(e(q)||0))+")",1)]),t("th",Pt,[u("Grand Total "),t("span",qt,"("+o(e(r)(e(k)+e(x)+e(g)+e(j)+e(F)+e(M)-e(P)+e(q)||0))+")",1)])]),t("tr",Tt,[t("th",null,[u("SB.Gaji "),t("span",Vt,"("+o(e(r)(e(k)||0))+")",1)]),t("th",null,[u("SB.Makan "),t("span",Ut,"("+o(e(r)(e(x)||0))+")",1)]),t("th",null,[u("SB.Dinas "),t("span",$t,"("+o(e(r)(e(g)||0))+")",1)]),t("th",null,[u("UJ.Gaji "),t("span",zt,"("+o(e(r)(e(j)||0))+")",1)]),t("th",null,[u("UJ.Makan "),t("span",Gt,"("+o(e(r)(e(F)||0))+")",1)]),t("th",null,[u("UJ.Dinas "),t("span",Jt,"("+o(e(r)(e(M)||0))+")",1)])])]),t("tbody",Yt,[(c(!0),p(T,null,W(e(_),(s,f)=>(c(),p(T,{key:f},[s.p_status!="Remove"?(c(),p("tr",{key:0,"data-index":f},[t("td",null,o(f+1)+".",1),t("td",null,o(s.employee_id),1),t("td",null,o(s.employee_name),1),t("td",null,o(s.employee_role),1),t("td",null,o(s.employee_birth_place),1),t("td",null,o(s.employee_birth_date?e(y)(s.employee_birth_date).format("DD-MM-Y"):""),1),t("td",null,o(s.employee_tmk?e(y)(s.employee_tmk).format("DD-MM-Y"):""),1),t("td",null,o(s.employee_ktp_no),1),t("td",null,o(s.employee_address),1),t("td",null,o(s.employee_status),1),t("td",null,o(s.employee_rek_no),1),t("td",null,o(s.employee_bank_name),1),t("td",null,o(e(r)(s.sb_gaji)),1),t("td",null,o(e(r)(s.sb_makan)),1),t("td",null,o(e(r)(s.sb_dinas)),1),t("td",null,o(e(r)(s.uj_gaji)),1),t("td",null,o(e(r)(s.uj_makan)),1),t("td",null,o(e(r)(s.uj_dinas)),1),t("td",null,o(e(r)(s.nominal_cut)),1),t("td",null,o(e(r)(s.salary_bonus_nominal)),1),t("td",null,o(e(r)(parseFloat(s.sb_gaji)+parseFloat(s.sb_makan)+parseFloat(s.sb_dinas)+parseFloat(s.uj_gaji)+parseFloat(s.uj_makan)+parseFloat(s.uj_dinas)-parseFloat(s.nominal_cut)+parseFloat(s.salary_bonus_nominal))),1)],8,Kt)):B("",!0)],64))),128))],512)])])])):B("",!0)]),t("div",Lt,[t("button",{type:"button",name:"button",class:"w-36 m-1",onClick:l[1]||(l[1]=s=>v.fnClose())}," Cancel "),e(z)?B("",!0):(c(),p("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:l[2]||(l[2]=X(s=>$(),["prevent"]))}," Generate "+o(e(n).id==""?"& Save":""),1))])])])],512)),[[H,v.show]])}}};export{Zt as default};