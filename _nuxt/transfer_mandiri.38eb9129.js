import tt from"./Header.71b106e3.js";import et from"./Calendar.8995e3ea.js";import st from"./CarTag.66d34628.js";import ot from"./TruckDriver.f17d77ac.js";import nt from"./TruckDriverOutline.37943ea1.js";import lt from"./LocationOn.0f9a414a.js";import{_ as at}from"./HeaderPopup.vue.20ed993f.js";import rt from"./Image.cdcab9a9.js";import it from"./GAPIN.253722a8.js";import{f as ct,g as dt,r as p,i as _t,G as ut,j as pt,c,b as f,a as t,m as D,v as ft,k as e,n as xt,F as V,y as P,J as M,t as l,l as u,d as H,z as ht,A as g,B as T,o as d,E as mt}from"./entry.c835651e.js";import{u as gt}from"./useUtils.6134f5ed.js";import{u as j}from"./useMyFetch.871ad94f.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.d582463a.js";const vt={class:"w-full h-full flex flex-col relative"},bt={class:"grow flex flex-col"},yt={class:"w-full flex items-center p-1"},wt={class:"grow"},kt={class:"grow overflow-auto h-0"},Yt={class:"p-1 grow"},Dt={class:"bg-white flex py-2 justify-between"},Tt={class:"flex flex-wrap"},jt={class:"flex items-center justify-center m-2 text-xs"},At={class:"bg-blue-400 p-2 font-bold text-white"},Ct={class:"flex flex-col m-2"},Mt=t("span",{class:"text-xs"}," Tgl Terima U.Jalan ",-1),Ht={class:"flex items-center justify-center"},Lt={class:"flex flex-col m-2"},$t=t("span",{class:"text-xs"}," Nomor Kendaraan ",-1),It={class:"flex items-center justify-center"},Nt=["data-real"],St={class:"flex flex-col m-2"},Bt=t("span",{class:"text-xs"}," Nama Supir ",-1),Vt={class:"flex items-center justify-center"},Pt=["data-real"],zt={key:0,class:"flex flex-col m-2"},Ft=t("span",{class:"text-xs"}," Nama Kernet ",-1),Kt={class:"flex items-center justify-center"},Rt=["data-real"],Ut={class:"flex flex-col m-2"},Et=t("span",{class:"text-xs"}," Tujuan ",-1),Jt={class:"flex items-center justify-center"},qt=["onClick"],Ot={class:"w-full h-full fixed top-0 left-0 bg-gray-100 bg-opacity-80 flex items-center justify-center z-10"},Gt={class:"w-full sm:w-10/12 md:w-10/12 lg:w-8/12 bg-white flex flex-col border-solid border-gray-200 max-w-full max-h-full overflow-auto",style:{"border-width":"1px"}},Wt={class:"p-1 flex flex-wrap overflow-auto items-start"},Qt={class:"w-full flex flex-wrap"},Xt={class:"w-full flex flex-wrap"},Zt={class:"flex flex-col m-2 border-solid border-l-4 border-blue-400 px-2 bg-gray-200"},te=t("span",{class:"text-xs font-bold"}," ID ",-1),ee={class:""},se={class:"flex flex-col m-1 border-solid border-l-4 border-blue-400 px-2 py-1 bg-gray-200"},oe=t("span",{class:"text-xs font-bold"}," Tgl Terima U.Jalan ",-1),ne={class:""},le={class:"flex flex-col m-1 border-solid border-l-4 border-blue-400 px-2 py-1 bg-gray-200"},ae=t("span",{class:"text-xs font-bold"}," Nomor Kendaraan ",-1),re={class:""},ie={class:"flex flex-row flex-wrap m-1 border-solid border-l-4 border-blue-400 px-2 py-1 bg-gray-200"},ce={class:"flex flex-col"},de=t("span",{class:"text-xs font-bold"}," Nama Supir ",-1),_e={class:""},ue={class:"flex flex-col pl-2"},pe=t("span",{class:"text-xs font-bold"}," No rek ",-1),fe={class:""},xe={key:0,class:"flex flex-row flex-wrap m-1 border-solid border-l-4 border-blue-400 px-2 py-1 bg-gray-200"},he={class:"flex flex-col"},me=t("span",{class:"text-xs font-bold"}," Nama Kernet ",-1),ge={class:""},ve={class:"flex flex-col pl-2"},be=t("span",{class:"text-xs font-bold"}," No rek ",-1),ye={class:""},we={class:"flex flex-col m-1 border-solid border-l-4 border-blue-400 px-2 py-1 bg-gray-200"},ke=t("span",{class:"text-xs font-bold"}," Tujuan ",-1),Ye={class:""},De={class:"flex flex-col m-1 border-solid border-l-4 border-blue-400 px-2 py-1 bg-gray-200"},Te=t("span",{class:"text-xs font-bold"}," Tipe ",-1),je={class:""},Ae={class:"flex flex-col m-1 border-solid border-l-4 border-blue-400 px-2 py-1 bg-gray-200"},Ce=t("span",{class:"text-xs font-bold"}," Jenis ",-1),Me={class:""},He={key:1,class:"flex flex-col m-1 border-solid border-l-4 border-blue-400 px-2 py-1 bg-gray-200"},Le=t("span",{class:"text-xs font-bold"}," Pengalihan ",-1),$e={class:""},Ie={class:"w-full flex flex-wrap justify-center"},Ne={key:0,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},Se=t("span",{class:"text-xs font-bold"}," App Kasir ",-1),Be={class:"text-xs"},Ve={key:1,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},Pe=t("span",{class:"text-xs font-bold"}," App Mandor ",-1),ze={class:"text-xs"},Fe={key:2,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},Ke=t("span",{class:"text-xs font-bold"}," App KTU/W ",-1),Re={class:"text-xs"},Ue={key:3,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},Ee=t("span",{class:"text-xs font-bold"}," App Marketing ",-1),Je={class:"text-xs"},qe={key:4,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},Oe=t("span",{class:"text-xs font-bold"}," App Logistik ",-1),Ge={class:"text-xs"},We={key:5,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},Qe=t("span",{class:"text-xs font-bold"}," App SPV Logistik ",-1),Xe={class:"text-xs"},Ze={class:"w-full sm:w-1/2 text-sm flex justify-center"},ts={class:"border border-collapse border-black"},es=t("tr",null,[t("th",{colspan:"4",class:"bg-blue-400"}," List Uang Jalan ")],-1),ss={class:"p-1"},os={class:"p-1"},ns=t("td",{class:"p-1"},"= Rp.",-1),ls={class:"text-right p-1"},as={class:"border-t-black border-dashed",style:{"border-top-width":"1px"}},rs=t("th",{colspan:"2",class:"text-right"},"Total",-1),is=t("th",{class:"p-1 text-right"},"Rp.",-1),cs={class:"p-1 text-right"},ds={key:0,class:"text-red-500 font-bold"},_s=t("td",{colspan:"2",class:"text-right"},"Potongan Supir",-1),us=t("td",{class:"p-1 text-right"},"Rp.",-1),ps={class:"p-1 text-right"},fs={key:1,class:"text-red-500 font-bold"},xs=t("td",{colspan:"2",class:"text-right"},"Potongan Kernet",-1),hs=t("td",{class:"p-1 text-right"},"Rp.",-1),ms={class:"p-1 text-right"},gs={key:2,class:"text-red-500 font-bold"},vs=t("td",{colspan:"2",class:"text-right"},"Total Potongan",-1),bs=t("td",{class:"p-1 text-right"},"Rp.",-1),ys={class:"p-1 text-right"},ws={key:3,class:"font-bold"},ks=t("td",{colspan:"2",class:"text-right"},"Total Diterima",-1),Ys=t("td",{class:"p-1 text-right"},"Rp.",-1),Ds={class:"p-1 text-right"},Ts={class:"w-full sm:w-1/2 h-full"},js=["src"],As={key:1,class:"flex flex-col justify-center items-center px-2 py-8 border border-gray-700 bg-gray-300"},Cs={class:"flex p-1 justify-end flex-wrap"},Ms={class:"flex p-1 justify-center flex-wrap bg-yellow-100"},Hs=t("div",{class:"w-full text-center"}," Akan dilakukan Transfer dengan data diatas. Apakah Informasi Diatas Sudah Benar Dan Tepat? ",-1),Os={__name:"transfer_mandiri",async setup(Ls){let w,L;const{$moment:x}=mt(),{pointFormat:h}=gt(),k=ct("token");new Date().getTimezoneOffset();const{data:z}=([w,L]=dt(async()=>ht(async()=>{g().loading_full=!0;let n=[];const[o,i]=await Promise.all([j("/trx_trp/transfers_mandiri",{method:"get",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},retry:0})]);return o.status.value==="error"?(T().trigger(o.error),{trx_trps:n}):(g().loading_full=!1,n=o.data.value.data,{trx_trps:n})},"$5YEzmjB1Vh")),w=await w,L(),w),A=p(z.value.trx_trps||[]),y=p({}),s=p({id:-1,tanggal:new Date,xto:"",tipe:"",jenis:"",amount:0,supir:"",kernet:"",no_pol:"",details_uj:[]}),C=p(-1),m=p(""),F=async n=>{g().loading_full=!0;const{data:o,error:i,status:r}=await j("/trx_trp/transfer/detail",{method:"get",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},params:{id:n.id},retry:0});if(g().loading_full=!1,r.value==="error"){T().trigger(i,y);return}s.value=o.value.data},K=async()=>{g().loading_full=!0,y.value={};const n=new FormData;n.append("id",s.value.id),n.append("_method","PUT");let o="post";const{data:i,error:r,status:_}=await j("/trx_trp/transfer_mandiri",{method:o,headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},body:n,retry:0});if(g().loading_full=!1,_.value==="error"){T().trigger(r,y);return}A.value.splice(C.value,1),C.value=-1,v.value=!1,b.value=!1},b=p(!1),R=p(0),v=p(!1);_t();const U=(n,o)=>{C.value=n,R.value=o,b.value=!0,F(o)},$=ut(()=>m.value!=""?A.value.filter(n=>n.no_pol.toLowerCase().includes(m.value.toLowerCase())||n.supir.toLowerCase().includes(m.value.toLowerCase())||n.kernet.toLowerCase().includes(m.value.toLowerCase())):A.value),Y=n=>n.potongan&&n.potongan.length>0?n.potongan.map(o=>parseInt(o.nominal_cut)).reduce((o,i)=>(o+=i,o)):0,I=n=>{if(n.potongan&&n.potongan.length>0){let o=n.potongan.filter(r=>r.potongan_mst.employee_id==n.supir_id);if(o.length==0)return 0;let i=o.map(r=>parseInt(r.nominal_cut));return i.length==0?0:i.reduce((r,_)=>(r+=_,r))}return 0},N=n=>{if(n.potongan&&n.potongan.length>0){let o=n.potongan.filter(r=>r.potongan_mst.employee_id==n.kernet_id);if(o.length==0)return 0;let i=o.map(r=>parseInt(r.nominal_cut));return i.length==0?0:i.reduce((r,_)=>(r+=_,r))}return 0},E=()=>{let n=m.value;document.querySelectorAll(".to_hl").forEach(o=>{let i=o.dataset.real;var r=o.innerHTML,_=i.toLowerCase().indexOf(n.toLowerCase());_>-1&&n!=""?(r=i.substring(0,_)+"<span class='highlight'>"+i.substring(_,_+n.length)+"</span>"+i.substring(_+n.length),o.innerHTML=r):o.innerHTML=r=i})};pt(()=>$,(n,o)=>{setTimeout(()=>{E()},0)},{deep:!0,immediate:!0});const S=p(0),J=async()=>{g().loading_full=!0,y.value={};const n=new FormData;n.append("id",s.value.id),n.append("_method","PUT");let o="post";const{data:i,error:r,status:_}=await j("/trx_trp/gen_csv_mandiri",{method:o,headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},body:n,retry:0});if(g().loading_full=!1,_.value==="error"){T().trigger(r,y);return}v.value=!1};return(n,o)=>{var B;const i=tt,r=et,_=st,q=ot,O=nt,G=lt,W=at,Q=rt,X=it;return d(),c("div",vt,[f(i,{title:"List Transaction"}),t("section",bt,[t("div",yt,[t("div",wt,[D(t("input",{class:"flex-grow",type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>xt(m)?m.value=a:null),name:"search",placeholder:"Keyword"},null,512),[[ft,e(m)]])]),t("div",null,[t("button",{onClick:o[1]||(o[1]=a=>J())},"CSV")])]),t("div",kt,[(d(!0),c(V,null,P(e($),(a,Z)=>(d(),c("div",Yt,[t("div",Dt,[t("div",Tt,[t("div",jt,[t("div",At,l(a.id),1)]),t("div",Ct,[Mt,t("div",Ht,[f(r,{class:"mr-1"}),H(" "+l(e(x)(a.tanggal).format("DD-MM-YYYY")),1)])]),t("div",Lt,[$t,t("div",It,[f(_,{class:"mr-1"}),t("span",{class:"to_hl","data-real":a.no_pol},l(a.no_pol),9,Nt)])]),t("div",St,[Bt,t("div",Vt,[f(q,{class:"mr-1"}),t("span",{class:"to_hl","data-real":a.supir},l(a.supir),9,Pt)])]),a.kernet?(d(),c("div",zt,[Ft,t("div",Kt,[f(O,{class:"mr-1"}),t("span",{class:"to_hl","data-real":a.kernet},l(a.kernet),9,Rt)])])):u("",!0),t("div",Ut,[Et,t("div",Jt,[f(G,{class:"mr-1"}),H(" "+l(a.xto),1)])])]),t("button",{class:"bg-blue-500 text-white rounded",onClick:$s=>U(Z,a)}," Detail ",8,qt)])]))),256))])]),D(t("div",Ot,[t("div",Gt,[f(W,{title:"Detail Information",fn:()=>{b.value=!1,v.value=!1},class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),t("div",Wt,[t("div",Qt,[t("div",Xt,[t("div",Zt,[te,t("div",ee,l(e(s).id),1)]),t("div",se,[oe,t("div",ne,l(e(x)(e(s).tanggal).format("DD-MM-YYYY")),1)]),t("div",le,[ae,t("div",re,l(e(s).no_pol),1)]),t("div",ie,[t("div",ce,[de,t("div",_e,l(e(s).supir),1)]),t("div",ue,[pe,t("div",fe,l(e(s).supir_rek_no),1)])]),e(s).kernet?(d(),c("div",xe,[t("div",he,[me,t("div",ge,l(e(s).kernet),1)]),t("div",ve,[be,t("div",ye,l(e(s).kernet_rek_no),1)])])):u("",!0),t("div",we,[ke,t("div",Ye,l(e(s).xto),1)]),t("div",De,[Te,t("div",je,l(e(s).tipe),1)]),t("div",Ae,[Ce,t("div",Me,l(e(s).jenis),1)]),e(s).transition_type=="From"?(d(),c("div",He,[Le,t("div",$e,l(e(s).transition_target),1)])):u("",!0)]),t("div",Ie,[e(s).val?(d(),c("div",Ne,[Se,t("div",null," ( "+l(e(s).val_by.username)+" ) ",1),t("div",Be,l(e(x)(e(s).val_at).format("DD-MM-YYYY HH:mm:ss")),1)])):u("",!0),e(s).val1?(d(),c("div",Ve,[Pe,t("div",null," ( "+l(e(s).val1_by.username)+" ) ",1),t("div",ze,l(e(x)(e(s).val1_at).format("DD-MM-YYYY HH:mm:ss")),1)])):u("",!0),e(s).val2?(d(),c("div",Fe,[Ke,t("div",null," ( "+l(e(s).val2_by.username)+" ) ",1),t("div",Re,l(e(x)(e(s).val2_at).format("DD-MM-YYYY HH:mm:ss")),1)])):u("",!0),e(s).val3?(d(),c("div",Ue,[Ee,t("div",null," ( "+l(e(s).val3_by.username)+" ) ",1),t("div",Je,l(e(x)(e(s).val3_at).format("DD-MM-YYYY HH:mm:ss")),1)])):u("",!0),e(s).val4?(d(),c("div",qe,[Oe,t("div",null," ( "+l(e(s).val4_by.username)+" ) ",1),t("div",Ge,l(e(x)(e(s).val4_at).format("DD-MM-YYYY HH:mm:ss")),1)])):u("",!0),e(s).val5?(d(),c("div",We,[Qe,t("div",null," ( "+l(e(s).val5_by.username)+" ) ",1),t("div",Xe,l(e(x)(e(s).val5_at).format("DD-MM-YYYY HH:mm:ss")),1)])):u("",!0)])]),t("div",Ze,[t("table",ts,[es,(d(!0),c(V,null,P(e(s).details_uj,a=>(d(),c("tr",null,[t("td",ss,l(a.ordinal)+". ",1),t("td",os,l(a.xdesc)+" "+l(a.qty<=1?"":e(h)(a.qty||0)+" x Rp."+e(h)(a.harga||0)),1),ns,t("td",ls,l(e(h)(a.qty*a.harga)),1)]))),256)),t("tr",as,[rs,is,t("th",cs,l(e(h)(e(s).amount)),1)]),I(e(s))>0?(d(),c("tr",ds,[_s,us,t("td",ps,l(e(h)(I(e(s)))),1)])):u("",!0),N(e(s))>0?(d(),c("tr",fs,[xs,hs,t("td",ms,l(e(h)(N(e(s)))),1)])):u("",!0),Y(e(s))>0?(d(),c("tr",gs,[vs,bs,t("td",ys,l(e(h)(Y(e(s)))),1)])):u("",!0),Y(e(s))>0?(d(),c("tr",ws,[ks,Ys,t("td",Ds,l(e(h)(e(s).amount-Y(e(s)))),1)])):u("",!0)])]),t("div",Ts,[((B=e(s).trx_absens)==null?void 0:B.length)>0?(d(),c("img",{key:0,class:"w-full",src:e(s).trx_absens[0].gambar},null,8,js)):(d(),c("div",As,[f(Q),H(" Tidak Ada Foto Berangkat ")]))])]),D(t("div",Cs,[t("button",{class:"rounded m-1",onClick:o[2]||(o[2]=a=>b.value=!1)}," Cancel "),t("button",{class:"rounded m-1 text-white bg-blue-500",onClick:o[3]||(o[3]=a=>v.value=!0)}," Transfer ")],512),[[M,!e(v)]]),D(t("div",Ms,[Hs,t("button",{class:"rounded m-1 bg-white",onClick:o[4]||(o[4]=a=>(v.value=!1,b.value=!1))}," Tidak "),t("button",{class:"rounded m-1 text-white bg-blue-500",onClick:o[5]||(o[5]=a=>K())}," Ya ")],512),[[M,e(v)]])])],512),[[M,e(b)]]),f(X,{show:e(S),onSetTimeout:o[6]||(o[6]=a=>S.value=a)},null,8,["show"])])}}};export{Os as default};