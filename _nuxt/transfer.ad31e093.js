import R from"./Header.1a17209c.js";import G from"./Calendar.d56ab1ea.js";import W from"./CarTag.2429bfe5.js";import Q from"./TruckDriver.e3e73ffa.js";import X from"./TruckDriverOutline.ef29f6be.js";import Z from"./LocationOn.28c174f9.js";import{_ as tt}from"./HeaderPopup.vue.113bc2ea.js";import et from"./GAPIN.95b61289.js";import{f as st,g as ot,r as u,i as at,G as lt,j as nt,c as i,b as m,a as t,m as b,v as it,k as e,n as rt,F as $,y as N,J as M,t as o,l as f,z as ct,A as g,B as j,o as r,d as S,E as dt}from"./entry.2faa2bd2.js";import{u as _t}from"./useUtils.a6cbe8a8.js";import{u as A}from"./useMyFetch.61af063b.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.6f0f5a4c.js";const ut={class:"w-full h-full flex flex-col relative"},ft={class:"grow flex flex-col"},xt={class:"w-full flex items-center p-1"},pt={class:"grow"},mt={class:"grow overflow-auto h-0"},ht={class:"p-1 grow"},vt={class:"bg-white flex py-2 justify-between"},gt={class:"flex flex-wrap"},yt={class:"flex items-center justify-center m-2 text-xs"},wt={class:"bg-blue-400 p-2 font-bold text-white"},bt={class:"flex flex-col m-2"},kt=t("span",{class:"text-xs"}," Tgl Terima U.Jalan ",-1),Yt={class:"flex items-center justify-center"},Dt={class:"flex flex-col m-2"},Tt=t("span",{class:"text-xs"}," Nomor Kendaraan ",-1),Mt={class:"flex items-center justify-center"},jt=["data-real"],At={class:"flex flex-col m-2"},Ct=t("span",{class:"text-xs"}," Nama Supir ",-1),Ht={class:"flex items-center justify-center"},Lt=["data-real"],$t={key:0,class:"flex flex-col m-2"},Nt=t("span",{class:"text-xs"}," Nama Kernet ",-1),St={class:"flex items-center justify-center"},It=["data-real"],Bt={class:"flex flex-col m-2"},Vt=t("span",{class:"text-xs"}," Tujuan ",-1),Kt={class:"flex items-center justify-center"},Ut=["onClick"],zt={class:"w-full h-full fixed top-0 left-0 bg-gray-100 bg-opacity-80 flex items-center justify-center z-10"},Ft={class:"w-full sm:w-10/12 md:w-10/12 lg:w-6/12 bg-white flex flex-col border-solid border-gray-200 max-w-full max-h-full",style:{"border-width":"1px"}},Pt={class:"p-1 flex flex-wrap overflow-auto items-start"},Jt={class:"w-full sm:w-1/2 flex flex-wrap"},qt={class:"flex flex-col m-2"},Et=t("span",{class:"text-xs font-bold"}," ID ",-1),Ot={class:""},Rt={class:"flex flex-col m-2"},Gt=t("span",{class:"text-xs font-bold"}," Tgl Terima U.Jalan ",-1),Wt={class:""},Qt={class:"flex flex-col m-2"},Xt=t("span",{class:"text-xs font-bold"}," Nomor Kendaraan ",-1),Zt={class:""},te={class:"flex flex-col m-2"},ee=t("span",{class:"text-xs font-bold"}," Nama Supir ",-1),se={class:""},oe={key:0,class:"flex flex-col m-2"},ae=t("span",{class:"text-xs font-bold"}," Nama Kernet ",-1),le={class:""},ne={class:"flex flex-col m-2"},ie=t("span",{class:"text-xs font-bold"}," Tujuan ",-1),re={class:""},ce={class:"flex flex-col m-2"},de=t("span",{class:"text-xs font-bold"}," Tipe ",-1),_e={class:""},ue={class:"flex flex-col m-2"},fe=t("span",{class:"text-xs font-bold"}," Jenis ",-1),xe={class:""},pe={key:1,class:"flex flex-col m-2"},me=t("span",{class:"text-xs font-bold"}," Pengalihan ",-1),he={class:""},ve={class:"w-full flex flex-wrap"},ge={key:0,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},ye=t("span",{class:"text-xs font-bold"}," App Kasir ",-1),we={class:"text-xs"},be={key:1,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},ke=t("span",{class:"text-xs font-bold"}," App Mandor ",-1),Ye={class:"text-xs"},De={key:2,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},Te=t("span",{class:"text-xs font-bold"}," App KTU/W ",-1),Me={class:"text-xs"},je={key:3,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},Ae=t("span",{class:"text-xs font-bold"}," App Marketing ",-1),Ce={class:"text-xs"},He={key:4,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},Le=t("span",{class:"text-xs font-bold"}," App Logistik ",-1),$e={class:"text-xs"},Ne={key:5,class:"flex flex-col m-2 ring-1 ring-gray-400 p-1 text-center justify-center items-center rounded text-xs"},Se=t("span",{class:"text-xs font-bold"}," App SPV Logistik ",-1),Ie={class:"text-xs"},Be={class:"w-full sm:w-1/2 text-sm flex justify-center"},Ve={class:"border border-collapse border-black"},Ke=t("tr",null,[t("th",{colspan:"4",class:"bg-blue-400"}," List Uang Jalan ")],-1),Ue={class:"p-1"},ze={class:"p-1"},Fe=t("td",{class:"p-1"},"= Rp.",-1),Pe={class:"text-right p-1"},Je={class:"border-t-black border-dashed",style:{"border-top-width":"1px"}},qe=t("th",{colspan:"2",class:"text-right"},"Total",-1),Ee=t("th",{class:"p-1 text-right"},"Rp.",-1),Oe={class:"p-1 text-right"},Re={class:"flex p-1 justify-end flex-wrap"},Ge={class:"flex p-1 justify-center flex-wrap bg-yellow-100"},We=t("div",{class:"w-full text-center"}," Akan dilakukan Transfer dengan data diatas. Apakah Informasi Diatas Sudah Benar Dan Tepat? ",-1),us={__name:"transfer",async setup(Qe){let y,C;const{$moment:x}=dt(),{pointFormat:w}=_t(),k=st("token");new Date().getTimezoneOffset();const{data:I}=([y,C]=ot(async()=>ct(async()=>{g().loading_full=!0;let n=[];const[a,c]=await Promise.all([A("/trx_trp/transfers",{method:"get",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},retry:0})]);return a.status.value==="error"?(j().trigger(a.error),{trx_trps:n}):(g().loading_full=!1,n=a.data.value.data,{trx_trps:n})},"$pIgiM26TjW")),y=await y,C(),y),Y=u(I.value.trx_trps||[]),D=u({}),s=u({id:-1,tanggal:new Date,xto:"",tipe:"",jenis:"",amount:0,supir:"",kernet:"",no_pol:"",details_uj:[]}),T=u(-1),p=u(""),B=async n=>{g().loading_full=!0;const{data:a,error:c,status:d}=await A("/trx_trp/transfer/detail",{method:"get",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},params:{id:n.id},retry:0});if(g().loading_full=!1,d.value==="error"){j().trigger(c,D);return}s.value=a.value.data},V=async()=>{g().loading_full=!0,D.value={};const n=new FormData;n.append("id",s.value.id),n.append("_method","PUT");let a="post";const{data:c,error:d,status:_}=await A("/trx_trp/transfer",{method:a,headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},body:n,retry:0});if(g().loading_full=!1,_.value==="error"){j().trigger(d,D);return}Y.value.splice(T.value,1),T.value=-1,v.value=!1,h.value=!1},h=u(!1),K=u(0),v=u(!1);at();const U=(n,a)=>{T.value=n,K.value=a,h.value=!0,B(a)},H=lt(()=>p.value!=""?Y.value.filter(n=>n.no_pol.toLowerCase().includes(p.value.toLowerCase())||n.supir.toLowerCase().includes(p.value.toLowerCase())||n.kernet.toLowerCase().includes(p.value.toLowerCase())):Y.value),z=()=>{let n=p.value;document.querySelectorAll(".to_hl").forEach(a=>{let c=a.dataset.real;var d=a.innerHTML,_=c.toLowerCase().indexOf(n.toLowerCase());_>-1&&n!=""?(d=c.substring(0,_)+"<span class='highlight'>"+c.substring(_,_+n.length)+"</span>"+c.substring(_+n.length),a.innerHTML=d):a.innerHTML=d=c})};nt(()=>H,(n,a)=>{setTimeout(()=>{z()},0)},{deep:!0,immediate:!0});const L=u(0);return(n,a)=>{const c=R,d=G,_=W,F=Q,P=X,J=Z,q=tt,E=et;return r(),i("div",ut,[m(c,{title:"List Transaction"}),t("section",ft,[t("div",xt,[t("div",pt,[b(t("input",{class:"flex-grow",type:"text","onUpdate:modelValue":a[0]||(a[0]=l=>rt(p)?p.value=l:null),name:"search",placeholder:"Keyword"},null,512),[[it,e(p)]])])]),t("div",mt,[(r(!0),i($,null,N(e(H),(l,O)=>(r(),i("div",ht,[t("div",vt,[t("div",gt,[t("div",yt,[t("div",wt,o(l.id),1)]),t("div",bt,[kt,t("div",Yt,[m(d,{class:"mr-1"}),S(" "+o(e(x)(l.tanggal).format("DD-MM-YYYY")),1)])]),t("div",Dt,[Tt,t("div",Mt,[m(_,{class:"mr-1"}),t("span",{class:"to_hl","data-real":l.no_pol},o(l.no_pol),9,jt)])]),t("div",At,[Ct,t("div",Ht,[m(F,{class:"mr-1"}),t("span",{class:"to_hl","data-real":l.supir},o(l.supir),9,Lt)])]),l.kernet?(r(),i("div",$t,[Nt,t("div",St,[m(P,{class:"mr-1"}),t("span",{class:"to_hl","data-real":l.kernet},o(l.kernet),9,It)])])):f("",!0),t("div",Bt,[Vt,t("div",Kt,[m(J,{class:"mr-1"}),S(" "+o(l.xto),1)])])]),t("button",{class:"bg-blue-500 text-white rounded",onClick:Xe=>U(O,l)}," Detail ",8,Ut)])]))),256))])]),b(t("div",zt,[t("div",Ft,[m(q,{title:"Detail Information",fn:()=>{h.value=!1,v.value=!1},class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),t("div",Pt,[t("div",Jt,[t("div",qt,[Et,t("div",Ot,o(e(s).id),1)]),t("div",Rt,[Gt,t("div",Wt,o(e(x)(e(s).tanggal).format("DD-MM-YYYY")),1)]),t("div",Qt,[Xt,t("div",Zt,o(e(s).no_pol),1)]),t("div",te,[ee,t("div",se,o(e(s).supir),1)]),e(s).kernet?(r(),i("div",oe,[ae,t("div",le,o(e(s).kernet),1)])):f("",!0),t("div",ne,[ie,t("div",re,o(e(s).xto),1)]),t("div",ce,[de,t("div",_e,o(e(s).tipe),1)]),t("div",ue,[fe,t("div",xe,o(e(s).jenis),1)]),e(s).transition_type=="From"?(r(),i("div",pe,[me,t("div",he,o(e(s).transition_target),1)])):f("",!0),t("div",ve,[e(s).val?(r(),i("div",ge,[ye,t("div",null," ( "+o(e(s).val_by.username)+" ) ",1),t("div",we,o(e(x)(e(s).val_at).format("DD-MM-YYYY HH:mm:ss")),1)])):f("",!0),e(s).val1?(r(),i("div",be,[ke,t("div",null," ( "+o(e(s).val1_by.username)+" ) ",1),t("div",Ye,o(e(x)(e(s).val1_at).format("DD-MM-YYYY HH:mm:ss")),1)])):f("",!0),e(s).val2?(r(),i("div",De,[Te,t("div",null," ( "+o(e(s).val2_by.username)+" ) ",1),t("div",Me,o(e(x)(e(s).val2_at).format("DD-MM-YYYY HH:mm:ss")),1)])):f("",!0),e(s).val3?(r(),i("div",je,[Ae,t("div",null," ( "+o(e(s).val3_by.username)+" ) ",1),t("div",Ce,o(e(x)(e(s).val3_at).format("DD-MM-YYYY HH:mm:ss")),1)])):f("",!0),e(s).val4?(r(),i("div",He,[Le,t("div",null," ( "+o(e(s).val4_by.username)+" ) ",1),t("div",$e,o(e(x)(e(s).val4_at).format("DD-MM-YYYY HH:mm:ss")),1)])):f("",!0),e(s).val5?(r(),i("div",Ne,[Se,t("div",null," ( "+o(e(s).val5_by.username)+" ) ",1),t("div",Ie,o(e(x)(e(s).val5_at).format("DD-MM-YYYY HH:mm:ss")),1)])):f("",!0)])]),t("div",Be,[t("table",Ve,[Ke,(r(!0),i($,null,N(e(s).details_uj,l=>(r(),i("tr",null,[t("td",Ue,o(l.ordinal)+". ",1),t("td",ze,o(l.xdesc)+" "+o(l.qty<=1?"":e(w)(l.qty||0)+" x Rp."+e(w)(l.harga||0)),1),Fe,t("td",Pe,o(e(w)(l.qty*l.harga)),1)]))),256)),t("tr",Je,[qe,Ee,t("th",Oe,o(e(w)(e(s).amount)),1)])])])]),b(t("div",Re,[t("button",{class:"rounded m-1",onClick:a[1]||(a[1]=l=>h.value=!1)}," Cancel "),t("button",{class:"rounded m-1 text-white bg-blue-500",onClick:a[2]||(a[2]=l=>v.value=!0)}," Transfer ")],512),[[M,!e(v)]]),b(t("div",Ge,[We,t("button",{class:"rounded m-1 bg-white",onClick:a[3]||(a[3]=l=>(v.value=!1,h.value=!1))}," Tidak "),t("button",{class:"rounded m-1 text-white bg-blue-500",onClick:a[4]||(a[4]=l=>V())}," Ya ")],512),[[M,e(v)]])])],512),[[M,e(h)]]),m(E,{show:e(L),onSetTimeout:a[5]||(a[5]=l=>L.value=l)},null,8,["show"])])}}};export{us as default};