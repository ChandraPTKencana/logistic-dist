import R from"./Calendar.a6760f3f.js";import P from"./CarTag.8f922642.js";import G from"./TruckDriver.f2146944.js";import Z from"./TruckDriverOutline.956c0d14.js";import Q from"./LocationOn.0956e310.js";import{_ as W}from"./HeaderPopup.vue.3d8bcfe2.js";import{r as u,f as X,i as ee,G as te,j as M,o as f,c as p,m as y,J as k,a as e,n as se,v as oe,k as a,F as D,y as S,t as l,b as v,d as V,l as B,E as ae,A as g,B as j}from"./entry.4273a65e.js";import{u as le}from"./useUtils.3f57b7da.js";import{u as L}from"./useMyFetch.b4feca9d.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Times.26f0f135.js";const ne={class:"grow flex flex-col"},re={class:"w-full flex items-center p-1"},ie={class:"grow"},ce={class:"grow overflow-auto h-0"},de={class:"p-1 grow"},_e={class:"bg-white flex py-2 justify-between"},ue={class:"flex flex-wrap"},fe={class:"flex items-center justify-center m-2 text-xs"},pe={class:"bg-blue-400 p-2 font-bold text-white"},me={class:"flex flex-col m-2"},he=e("span",{class:"text-xs"}," Tgl Terima U.Jalan ",-1),xe={class:"flex items-center justify-center"},ve={class:"flex flex-col m-2"},ge=e("span",{class:"text-xs"}," Nomor Kendaraan ",-1),we={class:"flex items-center justify-center"},ye=["data-real"],be={class:"flex flex-col m-2"},ke=e("span",{class:"text-xs"}," Nama Supir ",-1),Te={class:"flex items-center justify-center"},Ce=["data-real"],De={key:0,class:"flex flex-col m-2"},je=e("span",{class:"text-xs"}," Nama Kernet ",-1),Le={class:"flex items-center justify-center"},Ne=["data-real"],$e={class:"flex flex-col m-2"},Ae=e("span",{class:"text-xs"}," Tujuan ",-1),Me={class:"flex items-center justify-center"},Se=["onClick"],Ve={class:"w-full h-full fixed top-0 left-0 bg-gray-100 bg-opacity-80 flex items-center justify-center z-10"},Be={class:"w-full sm:w-10/12 md:w-8/12 lg:w-6/12 bg-white flex flex-col border-solid border-gray-200 max-w-full max-h-full",style:{"border-width":"1px"}},Ye={class:"p-1 flex flex-wrap overflow-auto items-start"},Ie={class:"w-full sm:w-1/2 flex flex-wrap"},Je={class:"flex flex-col m-2"},Oe=e("span",{class:"text-xs"}," Tgl Terima U.Jalan ",-1),Ue={class:""},qe={class:"flex flex-col m-2"},ze=e("span",{class:"text-xs"}," Nomor Kendaraan ",-1),Fe={class:""},He={class:"flex flex-col m-2"},Ke=e("span",{class:"text-xs"}," Nama Supir ",-1),Ee={class:""},Re={key:0,class:"flex flex-col m-2"},Pe=e("span",{class:"text-xs"}," Nama Kernet ",-1),Ge={class:""},Ze={class:"flex flex-col m-2"},Qe=e("span",{class:"text-xs"}," Tujuan ",-1),We={class:""},Xe={class:"flex flex-col m-2"},et=e("span",{class:"text-xs"}," Tipe ",-1),tt={class:""},st={class:"flex flex-col m-2"},ot=e("span",{class:"text-xs"}," Jenis ",-1),at={class:""},lt={class:"w-full sm:w-1/2 text-sm flex justify-center"},nt={class:"border border-collapse border-black"},rt=e("tr",null,[e("th",{colspan:"4",class:"bg-blue-400"}," List Uang Jalan ")],-1),it={class:"p-1"},ct={class:"p-1"},dt=e("td",{class:"p-1"},"= Rp.",-1),_t={class:"text-right p-1"},ut={class:"border-t-black border-dashed",style:{"border-top-width":"1px"}},ft=e("th",{colspan:"2",class:"text-right"},"Total",-1),pt=e("th",{class:"p-1 text-right"},"Rp.",-1),mt={class:"p-1 text-right"},ht={class:"flex p-1 justify-end flex-wrap"},xt={class:"flex p-1 justify-center flex-wrap bg-yellow-100"},vt=e("div",{class:"w-full text-center"}," Data Diatas akan diverifikasi. Apakah Informasi Diatas Sudah Benar Dan Tepat? ",-1),At={__name:"unverified",props:{show:{type:Boolean,required:!0}},setup(N){const Y=N,{$moment:$}=ae(),{pointFormat:b}=le(),i={};i._TimeZoneOffset=new Date().getTimezoneOffset(),i.sort="tanggal:desc";const w=u({}),T=X("token"),m=u([]),n=u({id:-1,tanggal:new Date,xto:"",tipe:"",jenis:"",amount:0,supir:"",kernet:"",no_pol:"",details_uj:[]}),C=u(-1),_=u(""),I=async o=>{g().loading_full=!0;const{data:t,error:r,status:c}=await L("/trx_trp/mandor_verify_trx",{method:"get",headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},params:{id:o.id},retry:0});if(g().loading_full=!1,c.value==="error"){j().trigger(r,w);return}n.value=t.value.data},J=async()=>{g().loading_full=!0,w.value={},i.page==1&&(m.value=[]),i.first_row&&delete i.first_row,i.page>1&&(i.first_row=JSON.stringify(m.value[0])),i.filter_status="mandor_trx_unverified";const{data:o,error:t,status:r}=await L("/trx_trps",{method:"get",headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},params:i,retry:0});if(g().loading_full=!1,r.value==="error"){j().trigger(t,w);return}m.value=o.value.data},O=async()=>{g().loading_full=!0,w.value={};const o=new FormData;o.append("id",n.value.id),o.append("_method","PUT");let t="post";const{data:r,error:c,status:d}=await L("/trx_trp/mandor_verify_trx",{method:t,headers:{Authorization:`Bearer ${T.value}`,Accept:"application/json"},body:o,retry:0});if(g().loading_full=!1,d.value==="error"){j().trigger(c,w);return}m.value.splice(C.value,1),C.value=-1,x.value=!1,h.value=!1},h=u(!1),U=u(0),x=u(!1);ee();const q=(o,t)=>{C.value=o,U.value=t,h.value=!0,I(t)},A=te(()=>_.value!=""?m.value.filter(o=>o.no_pol.toLowerCase().includes(_.value.toLowerCase())||o.supir.toLowerCase().includes(_.value.toLowerCase())||o.kernet.toLowerCase().includes(_.value.toLowerCase())):m.value),z=()=>{let o=_.value;document.querySelectorAll(".to_hl").forEach(t=>{let r=t.dataset.real;var c=t.innerHTML,d=r.toLowerCase().indexOf(o.toLowerCase());d>-1&&o!=""?(c=r.substring(0,d)+"<span class='highlight'>"+r.substring(d,d+o.length)+"</span>"+r.substring(d+o.length),t.innerHTML=c):t.innerHTML=c=r})};return M(()=>A,(o,t)=>{setTimeout(()=>{z()},0)},{deep:!0,immediate:!0}),M(()=>Y.show,(o,t)=>{o==!0&&J()},{immediate:!0}),(o,t)=>{const r=R,c=P,d=G,F=Z,H=Q,K=W;return f(),p(D,null,[y(e("section",ne,[e("div",re,[e("div",ie,[y(e("input",{class:"flex-grow",type:"text","onUpdate:modelValue":t[0]||(t[0]=s=>se(_)?_.value=s:null),name:"search",placeholder:"Keyword"},null,512),[[oe,a(_)]])])]),e("div",ce,[(f(!0),p(D,null,S(a(A),(s,E)=>(f(),p("div",de,[e("div",_e,[e("div",ue,[e("div",fe,[e("div",pe,l(s.id),1)]),e("div",me,[he,e("div",xe,[v(r,{class:"mr-1"}),V(" "+l(a($)(s.tanggal).format("DD-MM-YYYY")),1)])]),e("div",ve,[ge,e("div",we,[v(c,{class:"mr-1"}),e("span",{class:"to_hl","data-real":s.no_pol},l(s.no_pol),9,ye)])]),e("div",be,[ke,e("div",Te,[v(d,{class:"mr-1"}),e("span",{class:"to_hl","data-real":s.supir},l(s.supir),9,Ce)])]),s.kernet?(f(),p("div",De,[je,e("div",Le,[v(F,{class:"mr-1"}),e("span",{class:"to_hl","data-real":s.kernet},l(s.kernet),9,Ne)])])):B("",!0),e("div",$e,[Ae,e("div",Me,[v(H,{class:"mr-1"}),V(" "+l(s.xto),1)])])]),e("button",{class:"bg-blue-500 text-white rounded",onClick:gt=>q(E,s)}," Detail ",8,Se)])]))),256))])],512),[[k,N.show]]),y(e("div",Ve,[e("div",Be,[v(K,{title:"Detail Information",fn:()=>{h.value=!1,x.value=!1},class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("div",Ye,[e("div",Ie,[e("div",Je,[Oe,e("div",Ue,l(a($)(a(n).tanggal).format("DD-MM-YYYY")),1)]),e("div",qe,[ze,e("div",Fe,l(a(n).no_pol),1)]),e("div",He,[Ke,e("div",Ee,l(a(n).supir),1)]),a(n).kernet?(f(),p("div",Re,[Pe,e("div",Ge,l(a(n).kernet),1)])):B("",!0),e("div",Ze,[Qe,e("div",We,l(a(n).xto),1)]),e("div",Xe,[et,e("div",tt,l(a(n).tipe),1)]),e("div",st,[ot,e("div",at,l(a(n).jenis),1)])]),e("div",lt,[e("table",nt,[rt,(f(!0),p(D,null,S(a(n).details_uj,s=>(f(),p("tr",null,[e("td",it,l(s.ordinal)+". ",1),e("td",ct,l(s.xdesc)+" "+l(s.qty<=1?"":a(b)(s.qty||0)+" x Rp."+a(b)(s.harga||0)),1),dt,e("td",_t,l(a(b)(s.qty*s.harga)),1)]))),256)),e("tr",ut,[ft,pt,e("th",mt,l(a(b)(a(n).amount)),1)])])])]),y(e("div",ht,[e("button",{class:"rounded m-1",onClick:t[1]||(t[1]=s=>h.value=!1)}," Cancel "),e("button",{class:"rounded m-1 text-white bg-blue-500",onClick:t[2]||(t[2]=s=>x.value=!0)}," Verify ")],512),[[k,!a(x)]]),y(e("div",xt,[vt,e("button",{class:"rounded m-1 bg-white",onClick:t[3]||(t[3]=s=>(x.value=!1,h.value=!1))}," Tidak "),e("button",{class:"rounded m-1 text-white bg-blue-500",onClick:t[4]||(t[4]=s=>O())}," Ya ")],512),[[k,a(x)]])])],512),[[k,a(h)]])],64)}}};export{At as default};