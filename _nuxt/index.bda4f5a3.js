import{_ as Ne}from"./Header.365c35ad.js";import{_ as he}from"./_plugin-vue_export-helper.c27b6911.js";import{o,c as r,a as e,f as _e,r as _,g as ke,h as H,v as je,b as D,i as De,j as ne,k as t,l as pe,m as me,F as G,n as re,q as z,t as u,p as Ce,e as Ae,x as F,y as te,L as de,G as I,d as ee,N as Y,s as qe,D as Re,B as Ve,H as Se,I as Fe,E as Be,O as ze}from"./entry.e59ceb3e.js";import{_ as Ie}from"./Plus.941d5336.js";import{_ as He}from"./Edit.a712fe0e.js";import{_ as Le}from"./Eyes.7b4f7075.js";import{_ as Me}from"./Delete.d9643c55.js";import{_ as Ee}from"./Signature.dbc142d0.js";import{_ as Pe,u as ce}from"./useUtils.910dbe00.js";import{a as Ue,_ as Oe}from"./Check.bcc17d4b.js";import{_ as Ke}from"./PopupMini.vue.21bcca35.js";import{_ as Te}from"./HeaderPopup.vue.1e8c661c.js";import{_ as Ye,a as Je}from"./ToolsPopup.58d62026.js";import{_ as Qe}from"./InputPointFormat.vue.0430ded0.js";import{_ as Ge}from"./Times.44df49f0.js";import{u as se}from"./useMyFetch.9760c0a5.js";const Xe={name:"MaterialSymbolsContentCopy"},Ze={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},We=e("path",{fill:"currentColor",d:"M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm-4 4q-.825 0-1.412-.587T3 20V6h2v14h11v2z"},null,-1),et=[We];function tt(v,m,L,N,d,n){return o(),r("svg",Ze,et)}const st=he(Xe,[["render",tt]]);const Z=v=>(Ce("data-v-99d23942"),v=v(),Ae(),v),lt={class:"box-fixed"},ot={action:"#",class:"w-full flex p-1"},at={class:"grow"},nt=Z(()=>e("div",{class:"font-bold"}," Keyword ",-1)),ct={class:"pl-1"},it=Z(()=>e("div",{class:"font-bold"}," Sort By ",-1)),ut=Z(()=>e("option",{value:"AccountID"},"ID",-1)),rt=Z(()=>e("option",{value:"AccountCode"},"Code",-1)),dt=Z(()=>e("option",{value:"AccountName"},"Nama",-1)),_t=[ut,rt,dt],pt={class:"pl-1"},ft=Z(()=>e("div",{class:"font-bold"}," Sort Order ",-1)),vt=Z(()=>e("option",{value:"asc"},"Asc",-1)),ht=Z(()=>e("option",{value:"desc"},"Desc",-1)),mt=[vt,ht],wt={class:"flex items-end pl-1"},xt={class:"w-full flex justify-center items-center grow h-0 p-1"},yt={key:0,class:""},bt={class:"tacky w-full"},gt=Z(()=>e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No."),e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"ID"),e("th",null,"Code"),e("th",null,"Name")])],-1)),$t=["onClick"],kt={class:"bold"},jt={class:"whitespace-normal break-words"},Ct={class:"flex",style:{"justify-content":"end",padding:"5px"}},At={__name:"ac_accs",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1}},setup(v){const m=v,{countClickListFn:L}=ce(),N=_e("token"),d=_([]),n=_(""),k=_({field:"AccountID",by:"desc"}),J=_(-1),a=_({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),i={};i._TimeZoneOffset=new Date().getTimezoneOffset();const M=()=>{i.like="",n.value!=""&&(i.like=`AccountID:%${n.value}%,AccountCode:%${n.value}%,AccountName:%${n.value}%`),i.sort="",k.value.field&&(i.sort=k.value.field+":"+k.value.by)},w=_(null),q=async()=>{F().loading_full=!0,a.value.may_get_data=!1,i.page=a.value.page,i.page==1&&(d.value=[]),i.first_row&&delete i.first_row,i.page>1&&(i.first_row=JSON.stringify(d.value[0]));const{data:x,error:f,status:g}=await se("/ujalan/ac_accounts",{method:"get",headers:{Authorization:`Bearer ${N.value}`,Accept:"application/json"},params:i,retry:0});if(F().loading_full=!1,a.value.may_get_data=!0,g.value==="error"){te().trigger(f);return}a.value.page==1?(d.value=x.value.data,w.value&&(w.value.scrollTop=0)):a.value.page>1&&(d.value=[...d.value,...x.value.data]),x.value.data.length==0&&(a.value.is_last_record=!0)},B=async()=>{if(!a.value.may_get_data)return;let x=w.value;if(x.scrollLeft!=a.value.scrollLeft){a.value.scrollLeft=x.scrollLeft;return}a.value.is_last_record||!(Math.round(x.scrollTop)+x.clientHeight>=x.scrollHeight-1)||(a.value.page++,await q())},$=()=>{a.value.page=1,a.value.is_last_record=!1,M(),q()},C=()=>{J.value>-1?m.fnSelect(d.value[J.value]):m.fnSelect({ac_account_id:"",ac_account_code:"",ac_account_name:""})},K=x=>{L(x,()=>{J.value=x},C)},p=_(null);let A=null;const Q=x=>{A&&clearTimeout(A),A=setTimeout(()=>{$()},500)};return ke(()=>m.show,(x,f)=>{x==!0&&($(),setTimeout(()=>{p.value.focus()},100))},{immediate:!0}),(x,f)=>{const g=Te,W=Pe;return H((o(),r("section",lt,[e("div",null,[D(g,{title:"Search And Select Ac Account",fn:v.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",ot,[e("div",at,[nt,H(e("input",{ref_key:"ref_keyword",ref:p,class:"",type:"text","onUpdate:modelValue":f[0]||(f[0]=V=>De(n)?n.value=V:null),name:"search",placeholder:"Keyword",onKeyup:f[1]||(f[1]=V=>Q())},null,544),[[ne,t(n)]])]),e("div",ct,[it,H(e("select",{class:"","onUpdate:modelValue":f[2]||(f[2]=V=>t(k).field=V)},_t,512),[[pe,t(k).field]])]),e("div",pt,[ft,H(e("select",{class:"","onUpdate:modelValue":f[3]||(f[3]=V=>t(k).by=V)},mt,512),[[pe,t(k).by]])]),e("div",wt,[e("button",{class:"",type:"submit",name:"button",onClick:f[4]||(f[4]=me(V=>$(),["prevent"]))},[D(W,{class:"text-2xl"})])])]),e("div",xt,[t(d).length==0?(o(),r("div",yt," Maaf Tidak Ada Record ")):(o(),r("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:w,onScroll:B},[e("table",bt,[gt,e("tbody",null,[(o(!0),r(G,null,re(t(d),(V,E)=>(o(),r("tr",{key:E,onClick:ie=>K(E),class:z(t(J)==E?"active":"")},[e("td",null,u(E+1)+".",1),e("td",kt,u(V.ac_account_id),1),e("td",null,u(V.ac_account_code),1),e("td",jt,u(V.ac_account_name),1)],10,$t))),128))])])],544))]),e("div",Ct,[e("button",{onClick:f[5]||(f[5]=V=>C()),class:"w-36 m-1 bg-blue-600 text-white rounded-sm"}," Select ")])])],512)),[[je,v.show]])}}},Tt=he(At,[["__scopeId","data-v-99d23942"]]);const j=v=>(Ce("data-v-8b150e5a"),v=v(),Ae(),v),St={class:"box-fixed"},Dt={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},qt={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},It={class:"w-full flex flex-row flex-wrap"},Pt={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},Ut=j(()=>e("label",{for:""},"To",-1)),Nt=["disabled"],Rt={class:"text-red-500"},Vt={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},Ft=j(()=>e("label",{for:""},"Tipe",-1)),Bt=["disabled"],zt={class:"text-red-500"},Ht={class:"w-full sm:w-4/12 md:w-2/12 lg:w-1/12 flex flex-col flex-wrap p-1"},Lt=j(()=>e("label",{for:""},"Jenis",-1)),Mt=["disabled"],Et=j(()=>e("option",{value:"PK"},"PK",-1)),Ot=j(()=>e("option",{value:"CPO"},"CPO",-1)),Kt=j(()=>e("option",{value:"TBS"},"TBS",-1)),Yt=[Et,Ot,Kt],Jt={class:"text-red-500"},Qt={class:"w-full sm:w-4/12 md:w-2/12 lg:w-1/12 flex flex-col flex-wrap p-1"},Gt=j(()=>e("label",{for:""},"Harga",-1)),Xt={class:"card-border disabled"},Zt={class:"text-red-500"},Wt={class:"w-full sm:w-4/12 md:w-2/12 lg:w-4/12 flex flex-col flex-wrap p-1"},es=j(()=>e("label",{for:""},"Ket. Untuk Remarks",-1)),ts=["disabled"],ss={class:"text-red-500"},ls={class:"w-full flex grow p-1 overflow-auto 2xl:overflow-hidden justify-between flex-wrap"},os={class:"w-full p-0 2xl:pr-1 2xl:w-1/2 2xl:h-full 2xl:overflow-auto"},as={class:"w-full",role:"sticky"},ns={class:"tacky w-full",style:{"white-space":"normal"}},cs={class:"sticky -top-1 !z-[2]"},is=["colspan"],us={class:"sticky top-7 !z-[2]"},rs={key:0,class:"min-w-[50px] !w-[50px] max-w-[50px]"},ds=j(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No",-1)),_s=j(()=>e("th",null,"Desc",-1)),ps=j(()=>e("th",{class:"min-w-[100px] !w-[100px] max-w-[100px]"},"Harga @",-1)),fs=j(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"Qty",-1)),vs={class:"min-w-[100px] !w-[100px] max-w-[100px]"},hs=j(()=>e("br",null,null,-1)),ms={class:"text-sm"},ws=j(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"For Remarks",-1)),xs={ref:"to_move"},ys=["data-index"],bs={key:0,class:"tools cell"},gs={class:"w-full h-full flex items-center justify-center"},$s=["onClick"],ks={class:"cell"},js={class:"w-full h-full flex items-center justify-center"},Cs=["disabled","onUpdate:modelValue"],As={class:"w-full h-full flex items-center justify-center"},Ts={class:"w-full h-full flex items-center justify-center"},Ss={class:"cell"},Ds={class:"w-full h-full flex items-center justify-center unselectable"},qs={class:"cell"},Is={class:"w-full h-full flex items-center justify-center"},Ps=["onClick"],Us={key:0},Ns={class:"tools cell"},Rs={class:"w-full px-0 py-2 2xl:pl-1 2xl:py-0 2xl:w-1/2 2xl:h-full 2xl:overflow-auto"},Vs={class:"w-full",role:"sticky"},Fs={class:"tacky w-full !table-auto",style:{"white-space":"normal"}},Bs={class:"sticky -top-1 !z-[2]"},zs=["colspan"],Hs={class:"sticky top-7 !z-[2]"},Ls={key:0,class:"min-w-[30px] !w-[30px] max-w-[30px]"},Ms=j(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No",-1)),Es={key:1,class:"min-w-[30px] !w-[30px] max-w-[30px]"},Os=j(()=>e("th",{class:"min-w-[40px] !w-[40px] max-w-[40px]"},"Acc ID",-1)),Ks=j(()=>e("th",{class:"!min-w-[100px] !w-[100px] !max-w-[100px]"},"Acc Code",-1)),Ys=j(()=>e("th",{class:"!min-w-[150px] !w-[150px] !max-w-[150px]"},"Acc Name",-1)),Js=j(()=>e("th",{class:"!min-w-[150px] !w-[150px] !max-w-[150px]"},"Desc",-1)),Qs=j(()=>e("th",{class:"min-w-[100px] !w-[100px] max-w-[100px]"},"Amount",-1)),Gs=j(()=>e("th",{class:"min-w-[40px] !w-[40px] max-w-[40px]"},"Qty",-1)),Xs={class:"min-w-[100px] !w-[100px] max-w-[100px]"},Zs=j(()=>e("br",null,null,-1)),Ws={class:"text-sm"},el={ref:"to_move"},tl=["data-index"],sl={key:0,class:"tools cell"},ll={class:"w-full h-full flex items-center justify-center"},ol=["onClick"],al={key:1,class:"cell"},nl={class:"w-full h-full flex items-center justify-center"},cl=["onClick"],il=["onClick","disabled"],ul={class:"w-full h-full flex items-center justify-center"},rl={class:"w-full h-full flex items-center justify-center"},dl={class:"w-full h-full flex items-center justify-center"},_l={class:"cell"},pl={class:"w-full h-full flex items-center justify-center"},fl=["disabled","onUpdate:modelValue"],vl={class:"w-full h-full flex items-center justify-center"},hl={class:"w-full h-full flex items-center justify-center"},ml={class:"cell"},wl={class:"w-full h-full flex items-center justify-center unselectable"},xl={key:0},yl={class:"tools cell"},bl={class:"w-full flex items-center justify-end"},gl={__name:"ujalan",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},excludes:{type:String,required:!1},exclude_lists:{type:Array,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]},is_copy:{type:[Boolean,Number],required:!0,default:!1}},setup(v){const m=v,{pointFormat:L}=ce(),N={id:-1,xto:"",tipe:"",jenis:"",harga:0,note_for_remarks:"",details:[],details2:[]},d=_({...N}),n=_e("token"),k=_({}),J=_([{xdesc:"Timbangan",qty:1,harga:55e3},{xdesc:"Retribusi TPR",qty:1,harga:23e3},{xdesc:"Parkir & Nginap",qty:1,harga:1e4},{xdesc:"Penitipan Alat (Dongkrak)",qty:1,harga:5e3},{xdesc:"Ikas Danau",qty:1,harga:1e4},{xdesc:"U.Bongkar + Ambil surat",qty:1,harga:35e3},{xdesc:"Perbaikan Jalan Pujut",qty:1,harga:1e4},{xdesc:"Gaji Supir",qty:1,harga:0},{xdesc:"Gaji Kernet",qty:1,harga:0},{xdesc:"U.Extrafooding",qty:1,harga:2e4}]);_([]);const a=_([]),i=_([]),M=_({ordinal:0,id:-1,xdesc:"",qty:1,harga:0,for_remarks:0,p_status:""}),w=_({ordinal:0,id:-1,ac_account_id:"",ac_account_name:"",ac_account_code:"",description:"",qty:1,amount:0,p_status:""}),q=()=>{J.value.forEach(c=>{a.value.filter(l=>l.xdesc==c.xdesc).length==0&&a.value.push({...c,ordinal:0,id:-1,p_status:"Add"})})},B=_(!1),$=()=>{B.value=!1},C=c=>{i.value[g.value].ac_account_id=c.ac_account_id,i.value[g.value].ac_account_code=c.ac_account_code,i.value[g.value].ac_account_name=c.ac_account_name,B.value=!1},K=(c,l)=>{g.value=l,B.value=!0},p=(c,l)=>{i.value[l].ac_account_id="",i.value[l].ac_account_code="",i.value[l].ac_account_name=""},A=async()=>{F().loading_full=!0,k.value={};const c=new FormData;c.append("xto",d.value.xto),c.append("tipe",d.value.tipe),c.append("jenis",d.value.jenis),c.append("harga",d.value.harga),c.append("note_for_remarks",d.value.note_for_remarks),c.append("details",JSON.stringify(a.value)),c.append("details2",JSON.stringify(i.value));let l="post",X=m.is_copy?0:m.id;X==0||(c.append("id",X),c.append("_method","PUT"));const{data:O,error:R,status:oe}=await se("/ujalan",{method:l,headers:{Authorization:`Bearer ${n.value}`,Accept:"application/json"},body:c,retry:0});if(F().loading_full=!1,oe.value==="error"){te().trigger(R,k);return}if(X<=0)d.value.id=O.value.id,d.value.created_at=O.value.created_at,d.value.updated_at=O.value.updated_at,m.p_data.unshift(d.value);else{d.value.updated_at=O.value.updated_at;let ae=m.p_data.map(ue=>ue.id).indexOf(X);ae>=-1&&m.p_data.splice(ae,1,{...d.value})}m.fnClose()},Q=de(()=>{let c=0;return a.value.forEach(l=>{l.p_status!="Remove"&&(c+=l.qty*l.harga)}),d.value.harga=c,c}),x=de(()=>{let c=0;return i.value.forEach(l=>{l.p_status!="Remove"&&(c+=l.qty*l.amount)}),c}),f=_(-1),g=_(-1),W=_(!1),V=_({left:0,top:0}),E=_(!1),ie=_({left:0,top:0}),we=(c,l)=>{f.value=l,W.value=!0,V.value={left:c.clientX,top:c.clientY}},fe=(c,l)=>{g.value=l,E.value=!0,ie.value={left:c.clientX,top:c.clientY}},le=()=>{a.value.push({...M.value,p_status:"Add"})},xe=()=>{i.value.push({...w.value,p_status:"Add"})},ye=()=>{W.value=!1},be=()=>{E.value=!1},y=(c="")=>{if(c=="insert")a.value.splice(f.value,0,{...M.value,p_status:"Add"});else if(c=="delete")a.value[f.value].p_status=="Edit"?a.value[f.value].p_status="Remove":a.value.splice(f.value,1);else if(c=="move_top"){let l=a.value[f.value];a.value.splice(f.value,1),a.value.splice(f.value-1,0,{...l})}else if(c=="move_bottom"){let l=a.value[f.value];a.value.splice(f.value,1),a.value.splice(f.value+1,0,{...l})}W.value=!1},b=(c="")=>{if(c=="insert")i.value.splice(g.value,0,{...w.value,p_status:"Add"});else if(c=="delete")i.value[g.value].p_status=="Edit"?i.value[g.value].p_status="Remove":i.value.splice(g.value,1);else if(c=="move_top"){let l=i.value[g.value];i.value.splice(g.value,1),i.value.splice(g.value-1,0,{...l})}else if(c=="move_bottom"){let l=i.value[g.value];i.value.splice(g.value,1),i.value.splice(g.value+1,0,{...l})}E.value=!1},T=_e("role"),h=de(()=>d.value.val&&d.value.val1||T.value=="Logistic"&&d.value.val||T.value=="PabrikTransport"&&d.value.val1),ge=async()=>{F().loading_full=!0;const{data:c,error:l,status:X}=await se("/ujalan_",{method:"get",headers:{Authorization:`Bearer ${n.value}`,Accept:"application/json"},params:{id:m.id},retry:0});if(F().loading_full=!1,X.value==="error"){te().trigger(l);return}d.value=c.value.data;let O="Edit";m.is_copy&&(O="Add"),a.value=c.value.data.details.map(R=>(R.p_status=O,R.key=R.ordinal,R)),i.value=c.value.data.details2.map(R=>(R.p_status=O,R.key=R.ordinal,R))};return ke(()=>m.show,(c,l)=>{c==!0&&(d.value={...N},a.value=[],i.value=[],m.id!=0&&ge())},{immediate:!0}),(c,l)=>{const X=Te,O=Ye,R=Qe,oe=Ge,ae=Ue,ue=Ie,ve=Je,$e=Tt;return o(),r(G,null,[H(e("section",St,[e("div",null,[D(X,{title:"Form Ujalan",fn:v.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",Dt,[e("div",qt,[e("div",It,[e("div",Pt,[Ut,H(e("input",{"onUpdate:modelValue":l[0]||(l[0]=s=>t(d).xto=s),disabled:t(T)=="PabrikTransport"||t(h)},null,8,Nt),[[ne,t(d).xto]]),e("p",Rt,u(t(k).xto),1)]),e("div",Vt,[Ft,H(e("textarea",{"onUpdate:modelValue":l[1]||(l[1]=s=>t(d).tipe=s),disabled:t(T)=="PabrikTransport"||t(h)},null,8,Bt),[[ne,t(d).tipe]]),e("p",zt,u(t(k).tipe),1)]),e("div",Ht,[Lt,H(e("select",{"onUpdate:modelValue":l[2]||(l[2]=s=>t(d).jenis=s),disabled:t(T)=="PabrikTransport"||t(h)},Yt,8,Mt),[[pe,t(d).jenis]]),e("p",Jt,u(t(k).jenis),1)]),e("div",Qt,[Gt,e("div",Xt,u(t(L)(t(Q))),1),e("p",Zt,u(t(k).harga),1)]),e("div",Wt,[es,H(e("textarea",{"onUpdate:modelValue":l[3]||(l[3]=s=>t(d).note_for_remarks=s),disabled:t(T)=="PabrikTransport"||t(h)},null,8,ts),[[ne,t(d).note_for_remarks]]),e("p",ss,u(t(k).note_for_remarks),1)])]),e("div",ls,[e("div",os,[e("div",as,[e("table",ns,[e("thead",null,[e("tr",cs,[e("td",{colspan:t(T)!="PabrikTransport"&&!t(h)?7:6,class:"!bg-slate-800 text-white font-bold"}," Detail Uang Jalan ",8,is)]),e("tr",us,[t(T)!="PabrikTransport"&&!t(h)?(o(),r("th",rs,[e("button",{type:"button",name:"button",class:"bg-yellow-600",onClick:l[4]||(l[4]=s=>q())}," Default In ")])):I("",!0),ds,_s,ps,fs,e("th",vs,[ee("Total "),hs,ee(),e("span",ms,"("+u(t(L)(t(Q)))+")",1)]),ws])]),e("tbody",xs,[(o(!0),r(G,null,re(t(a),(s,U)=>(o(),r(G,{key:U},[s.p_status!="Remove"?(o(),r("tr",{key:0,"data-index":U},[t(T)!="PabrikTransport"&&!t(h)?(o(),r("td",bs,[e("div",gs,[e("button",{type:"button",name:"button",onClick:S=>we(S,U)},[D(O)],8,$s)])])):I("",!0),e("td",null,u(U+1)+".",1),e("td",ks,[e("div",js,[H(e("textarea",{disabled:t(T)=="PabrikTransport"||t(h),class:"p-1 w-full","onUpdate:modelValue":S=>s.xdesc=S,cols:"7",rows:"2"},null,8,Cs),[[ne,s.xdesc]])])]),e("td",{class:z(["cell bold",t(T)=="PabrikTransport"||t(h)?"unselectable":""])},[e("div",As,[(o(),Y(R,{key:U,class:"w-full h-full p-1",type:"text",value:s.harga||0,onInput:S=>s.harga=S,show:v.show},null,8,["value","onInput","show"]))])],2),e("td",{class:z(["cell",t(T)=="PabrikTransport"||t(h)?"unselectable":""])},[e("div",Ts,[(o(),Y(R,{key:U,class:"w-full h-full p-1",type:"text",value:s.qty||0,onInput:S=>s.qty=S,show:v.show},null,8,["value","onInput","show"]))])],2),e("td",Ss,[e("div",Ds,u(t(L)(s.qty*s.harga||0)),1)]),e("td",qs,[e("div",Is,[e("button",{type:"button",onClick:S=>s.for_remarks=s.for_remarks?0:1,class:z(["text-white w-auto rounded text-xl",s.for_remarks?"bg-green-600":"bg-red-600"])},[s.for_remarks==0?(o(),Y(oe,{key:0})):(o(),Y(ae,{key:1}))],10,Ps)])])],8,ys)):I("",!0)],64))),128)),t(T)!="PabrikTransport"&&!t(h)?(o(),r("tr",Us,[e("td",Ns,[e("button",{type:"button",name:"button",onClick:l[5]||(l[5]=s=>le())},[D(ue)])])])):I("",!0)],512)])])]),e("div",Rs,[e("div",Vs,[e("table",Fs,[e("thead",null,[e("tr",Bs,[e("td",{colspan:t(h)?8:10,class:"!bg-slate-800 text-white font-bold"}," Detail PVR ",8,zs)]),e("tr",Hs,[t(h)?I("",!0):(o(),r("th",Ls)),Ms,t(h)?I("",!0):(o(),r("th",Es)),Os,Ks,Ys,Js,Qs,Gs,e("th",Xs,[ee("Total "),Zs,ee(),e("span",Ws,"("+u(t(L)(t(x)))+")",1)])])]),e("tbody",el,[(o(!0),r(G,null,re(t(i),(s,U)=>(o(),r(G,{key:U},[s.p_status!="Remove"?(o(),r("tr",{key:0,"data-index":U},[t(h)?I("",!0):(o(),r("td",sl,[e("div",ll,[e("button",{type:"button",name:"button",onClick:S=>fe(S,U)},[D(O)],8,ol)])])),e("td",null,u(U+1)+".",1),t(h)?I("",!0):(o(),r("td",al,[e("div",nl,[s.ac_account_id?(o(),r("button",{key:1,type:"button",onClick:S=>p(S,U),disabled:s.confirm_by},[D(oe,{class:"font-bold text-2xl"})],8,il)):(o(),r("button",{key:0,type:"button",name:"button",onClick:S=>K(S,U)}," ... ",8,cl))])])),e("td",{class:z(["cell bold",t(h)?"unselectable":""])},[e("div",ul,u(s.ac_account_id),1)],2),e("td",{class:z(["cell bold",t(h)?"unselectable":""])},[e("div",rl,u(s.ac_account_code),1)],2),e("td",{class:z(["cell bold",t(h)?"unselectable":""])},[e("div",dl,u(s.ac_account_name),1)],2),e("td",_l,[e("div",pl,[H(e("textarea",{disabled:t(h),class:"p-1 w-full","onUpdate:modelValue":S=>s.description=S,cols:"7",rows:"2"},null,8,fl),[[ne,s.description]])])]),e("td",{class:z(["cell bold",t(h)?"unselectable":""])},[e("div",vl,[(o(),Y(R,{key:U,class:"w-full h-full p-1",type:"text",value:s.amount||0,onInput:S=>s.amount=S,show:v.show},null,8,["value","onInput","show"]))])],2),e("td",{class:z(["cell",t(h)?"unselectable":""])},[e("div",hl,[(o(),Y(R,{key:U,class:"w-full h-full p-1",type:"text",value:s.qty||0,onInput:S=>s.qty=S,show:v.show},null,8,["value","onInput","show"]))])],2),e("td",ml,[e("div",wl,u(t(L)(s.qty*s.amount||0)),1)])],8,tl)):I("",!0)],64))),128)),t(h)?I("",!0):(o(),r("tr",xl,[e("td",yl,[e("button",{type:"button",name:"button",onClick:l[6]||(l[6]=s=>xe())},[D(ue)])])]))],512)])])])])]),e("div",bl,[e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:l[7]||(l[7]=s=>v.fnClose())}," Cancel "),t(h)?I("",!0):(o(),r("button",{key:0,type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:l[8]||(l[8]=me(s=>A(),["prevent"]))}," Save "))])])])],512),[[je,v.show]]),D(ve,{show:t(W),coor:t(V),fn:ye,data:t(a),data_index:t(f),onReplyAct:l[9]||(l[9]=s=>y(s))},null,8,["show","coor","data","data_index"]),D(ve,{show:t(E),coor:t(ie),fn:be,data:t(i),data_index:t(g),onReplyAct:l[10]||(l[10]=s=>b(s))},null,8,["show","coor","data","data_index"]),D($e,{show:t(B),fnClose:$,fnSelect:C},null,8,["show"])],64)}}},$l=he(gl,[["__scopeId","data-v-8b150e5a"]]);const P=v=>(Ce("data-v-cd69c5e0"),v=v(),Ae(),v),kl={class:"box-fixed"},jl={action:"#",class:"w-full flex grow flex-col h-0 overflow-auto bg-white"},Cl={class:"w-full flex flex-col items-center justify-center grow overflow-auto"},Al={class:"w-full flex flex-row flex-wrap"},Tl={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},Sl=P(()=>e("label",{for:""},"To",-1)),Dl={class:"card-border"},ql={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},Il=P(()=>e("label",{for:""},"Tipe",-1)),Pl={class:"card-border"},Ul={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},Nl=P(()=>e("label",{for:""},"Jenis",-1)),Rl={class:"card-border"},Vl={class:"w-full sm:w-4/12 md:w-3/12 lg:w-3/12 flex flex-col flex-wrap p-1"},Fl=P(()=>e("label",{for:""},"Harga",-1)),Bl={class:"card-border"},zl={class:"w-full flex grow p-1 overflow-auto 2xl:overflow-hidden justify-between flex-wrap"},Hl={class:"w-full p-0 2xl:pr-1 2xl:w-1/2 2xl:h-full 2xl:overflow-auto"},Ll={class:"w-full",role:"sticky"},Ml={class:"tacky w-full",style:{"white-space":"normal"}},El=P(()=>e("tr",{class:"sticky top-0 !z-[2]"},[e("td",{colspan:"5",class:"!bg-slate-800 text-white font-bold"}," Detail Uang Jalan ")],-1)),Ol={class:"sticky top-8 !z-[2]"},Kl=P(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No",-1)),Yl=P(()=>e("th",null,"Desc",-1)),Jl=P(()=>e("th",{class:"min-w-[100px] !w-[100px] max-w-[100px]"},"Harga @",-1)),Ql=P(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"Qty",-1)),Gl={class:"min-w-[100px] !w-[100px] max-w-[100px]"},Xl=P(()=>e("br",null,null,-1)),Zl={class:"text-sm"},Wl={ref:"to_move"},eo=["data-index"],to={class:"cell"},so={class:"w-full h-full flex items-center justify-center"},lo={class:"cell bold"},oo={class:"w-full h-full flex items-center justify-center"},ao={class:"cell"},no={class:"w-full h-full flex items-center justify-center"},co={class:"cell"},io={class:"w-full h-full flex items-center justify-center"},uo={class:"w-full px-0 py-2 2xl:pl-1 2xl:py-0 2xl:w-1/2 2xl:h-full 2xl:overflow-auto"},ro={class:"w-full",role:"sticky"},_o={class:"tacky w-full !table-auto",style:{"white-space":"normal"}},po=P(()=>e("tr",{class:"sticky top-0 !z-[2]"},[e("td",{colspan:"8",class:"!bg-slate-800 text-white font-bold"}," Detail PVR ")],-1)),fo={class:"sticky top-8 !z-[2]"},vo=P(()=>e("th",{class:"min-w-[50px] !w-[50px] max-w-[50px]"},"No",-1)),ho=P(()=>e("th",{class:"min-w-[40px] !w-[40px] max-w-[40px]"},"Acc ID",-1)),mo=P(()=>e("th",{class:"!min-w-[100px] !w-[100px] !max-w-[100px]"},"Acc Code",-1)),wo=P(()=>e("th",{class:"!min-w-[150px] !w-[150px] !max-w-[150px]"},"Acc Name",-1)),xo=P(()=>e("th",{class:"!min-w-[150px] !w-[150px] !max-w-[150px]"},"Desc",-1)),yo=P(()=>e("th",{class:"min-w-[100px] !w-[100px] max-w-[100px]"},"Amount",-1)),bo=P(()=>e("th",{class:"min-w-[40px] !w-[40px] max-w-[40px]"},"Qty",-1)),go={class:"min-w-[100px] !w-[100px] max-w-[100px]"},$o=P(()=>e("br",null,null,-1)),ko={class:"text-sm"},jo={ref:"to_move"},Co=["data-index"],Ao={class:"w-full h-full flex items-center justify-center"},To={class:"w-full h-full flex items-center justify-center"},So={class:"w-full h-full flex items-center justify-center"},Do={key:0,class:"cell"},qo={class:"w-full h-full flex items-center justify-center"},Io={class:"w-full h-full flex items-center justify-center"},Po={class:"cell"},Uo={class:"w-full h-full flex items-center justify-center"},No={class:"w-full flex items-center justify-end"},Ro={class:"w-full flex flex-wrap p-3 items-center"},Vo=P(()=>e("div",null," Di Validasi oleh : ",-1)),Fo={key:0,class:"border-solid border-2 w-fit p-1 bg-slate-700 text-white text-xs"},Bo={key:0},zo={key:1},Ho={__name:"ujalan_validasi",props:{show:{type:Boolean,required:!0},fnClose:{type:Function,required:!1},fnSelect:{type:Function,required:!1},id:{type:Number,required:!1,default:0},p_data:{type:Array,required:!0,default:[]}},setup(v){const m=v,{$moment:L}=qe(),{pointFormat:N}=ce(),n=_({...{id:-1,xto:"",tipe:"",jenis:"",harga:0,details:[],val:0,val_by:{username:""},val_at:"",val1:0,val1_by:{username:""},val1_at:""}}),k=_e("token"),J=_({}),a=_([]),i=_([]),M=async()=>{F().loading_full=!0,J.value={};const $=new FormData;let C="post",K=m.id;K==0||($.append("id",K),$.append("_method","PUT"));const{data:p,error:A,status:Q}=await se("/ujalan_validasi",{method:C,headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},body:$,retry:0});if(F().loading_full=!1,Q.value==="error"){te().trigger(A,J);return}n.value.val=p.value.val,n.value.val_user=p.value.val_user,n.value.val_by=p.value.val_by,n.value.val_at=p.value.val_at,n.value.val1=p.value.val1,n.value.val1_user=p.value.val1_user,n.value.val1_by=p.value.val1_by,n.value.val1_at=p.value.val1_at;let x=m.p_data.map(f=>f.id).indexOf(m.id);x>=-1&&m.p_data.splice(x,1,{...n.value}),m.fnClose()},w=async()=>{F().loading_full=!0;const{data:$,error:C,status:K}=await se("/ujalan_",{method:"get",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},params:{id:m.id},retry:0});if(F().loading_full=!1,K.value==="error"){te().trigger(C);return}n.value=$.value.data,a.value=$.value.data.details,i.value=$.value.data.details2},q=de(()=>{let $=0;return i.value.forEach(C=>{C.p_status!="Remove"&&($+=C.qty*C.amount)}),$}),B=de(()=>!1);return ke(()=>m.show,($,C)=>{$==!0&&w()},{immediate:!0}),($,C)=>{const K=Te;return H((o(),r("section",kl,[e("div",null,[D(K,{title:"Form Ujalan Validation",fn:v.fnClose,class:"w-100 flex align-items-center",style:{color:"white"}},null,8,["fn"]),e("form",jl,[e("div",Cl,[e("div",Al,[e("div",Tl,[Sl,e("div",Dl,u(t(n).xto),1)]),e("div",ql,[Il,e("div",Pl,u(t(n).tipe),1)]),e("div",Ul,[Nl,e("div",Rl,u(t(n).jenis),1)]),e("div",Vl,[Fl,e("div",Bl,u(t(N)(t(n).harga||0)),1)])]),e("div",zl,[e("div",Hl,[e("div",Ll,[e("table",Ml,[e("thead",null,[El,e("tr",Ol,[Kl,Yl,Jl,Ql,e("th",Gl,[ee("Total "),Xl,ee(),e("span",Zl,"("+u(t(N)(t(n).harga||0))+")",1)])])]),e("tbody",Wl,[(o(!0),r(G,null,re(t(a),(p,A)=>(o(),r(G,{key:A},[p.p_status!="Remove"?(o(),r("tr",{key:0,"data-index":A},[e("td",null,u(A+1)+".",1),e("td",to,[e("div",so,u(p.xdesc),1)]),e("td",lo,[e("div",oo,u(t(N)(p.harga||0)),1)]),e("td",ao,[e("div",no,u(t(N)(p.qty||0)),1)]),e("td",co,[e("div",io,u(t(N)(p.qty*p.harga||0)),1)])],8,eo)):I("",!0)],64))),128))],512)])])]),e("div",uo,[e("div",ro,[e("table",_o,[e("thead",null,[po,e("tr",fo,[vo,ho,mo,wo,xo,yo,bo,e("th",go,[ee("Total "),$o,ee(),e("span",ko,"("+u(t(N)(t(q)))+")",1)])])]),e("tbody",jo,[(o(!0),r(G,null,re(t(i),(p,A)=>(o(),r(G,{key:A},[p.p_status!="Remove"?(o(),r("tr",{key:0,"data-index":A},[e("td",null,u(A+1)+".",1),e("td",{class:z(["cell bold",t(B)?"unselectable":""])},[e("div",Ao,u(p.ac_account_id),1)],2),e("td",{class:z(["cell bold",t(B)?"unselectable":""])},[e("div",To,u(p.ac_account_code),1)],2),e("td",{class:z(["cell bold",t(B)?"unselectable":""])},[e("div",So,u(p.ac_account_name),1)],2),t(B)?I("",!0):(o(),r("td",Do,[e("div",qo,u(p.description),1)])),e("td",{class:z(["cell bold",t(B)?"unselectable":""])},[e("div",Io,u(t(N)(p.amount||0)),1)],2),e("td",{class:z(["cell",t(B)?"unselectable":""])},u(t(N)(p.qty||0)),3),e("td",Po,[e("div",Uo,u(t(N)(p.qty*p.amount||0)),1)])],8,Co)):I("",!0)],64))),128))],512)])])])])]),e("div",No,[e("div",Ro,[Vo,t(n).val||t(n).val1?(o(),r("div",Fo,[t(n).val?(o(),r("div",Bo," App 1 : "+u(t(n).val_by.username)+" ( "+u(t(n).val_at?t(L)(t(n).val_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):I("",!0),t(n).val1?(o(),r("div",zo," App 2 : "+u(t(n).val1_by.username)+" ( "+u(t(n).val1_at?t(L)(t(n).val1_at).format("DD-MM-YYYY HH:mm:ss"):"")+" ) ",1)):I("",!0)])):I("",!0)]),e("button",{type:"button",name:"button",class:"w-36 m-1",onClick:C[0]||(C[0]=p=>v.fnClose())}," Cancel "),e("button",{type:"submit",name:"button",class:"w-36 m-1 bg-blue-600 text-white rounded-sm",onClick:C[1]||(C[1]=me(p=>M(),["prevent"]))}," Validasi ")])])])],512)),[[je,v.show]])}}},Lo=he(Ho,[["__scopeId","data-v-cd69c5e0"]]),Mo={class:"w-full h-full flex flex-col"},Eo={class:"w-full flex grow flex-col overflow-auto h-0"},Oo={class:"w-full flex"},Ko={action:"#",class:"w-full flex p-1"},Yo={class:"grow"},Jo=e("div",{class:"font-bold"}," Keyword ",-1),Qo={class:"pl-1"},Go=e("div",{class:"font-bold"}," Sort By ",-1),Xo=ze('<option value=""></option><option value="id">ID</option><option value="xto">To</option><option value="jenis">Jenis</option><option value="tipe">Tipe</option>',5),Zo=[Xo],Wo={class:"pl-1"},ea=e("div",{class:"font-bold"}," Sort Order ",-1),ta=e("option",{value:"asc"},"Asc",-1),sa=e("option",{value:"desc"},"Desc",-1),la=[ta,sa],oa={class:"flex items-end pl-1"},aa={class:"w-full flex justify-center items-center grow h-0 p-1"},na={key:0,class:""},ca={class:"tacky"},ia=e("thead",null,[e("tr",{class:"sticky top-0 !z-[2]"},[e("th",null,"App 1"),e("th",null,"App 2"),e("th",null,"ID"),e("th",null,"To"),e("th",null,"Tipe"),e("th",null,"Jenis"),e("th",null,"Harga"),e("th",null,"Ket.U.Remarks"),e("th",null,"Created At"),e("th",null,"Updated At")])],-1),ua=["onClick"],ra={class:"flex items-center justify-center"},da={class:"flex items-center justify-center"},_a={class:"bold"},Sa={__name:"index",async setup(v){let m,L;const{$moment:N}=qe(),{pointFormat:d}=ce(),n={};n._TimeZoneOffset=new Date().getTimezoneOffset(),n.sort="created_at:desc";const k=_e("token"),{data:J}=([m,L]=Re(async()=>Be(async()=>{let y=[];F().loading_full=!0;const{data:b,error:T,status:h}=await se("/ujalan",{method:"get",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},params:n,retry:0});return F().loading_full=!1,h.value==="error"?(te().trigger(T),{ujalans:y}):(y=b.value.data,{ujalans:y})},"$SN3C927rLk")),m=await m,L(),m),a=_(J.value.ujalans),i=_(""),M=_({field:"created_at",by:"desc"}),w=_(-1),q=_({page:1,is_last_record:!1,scrollLeft:0,may_get_data:!0}),B=()=>{n.like="",i.value!=""&&(n.like=`id:%${i.value}%,xto:%${i.value}%,tipe:%${i.value}%,jenis:%${i.value}%,harga:%${i.value}%`),n.sort="",M.value.field&&(n.sort=M.value.field+":"+M.value.by)},$=_(null),C=async()=>{F().loading_full=!0,q.value.may_get_data=!1,n.page=q.value.page,n.page==1&&(a.value=[]),n.first_row&&delete n.first_row,n.page>1&&(n.first_row=JSON.stringify(a.value[0]));const{data:y,error:b,status:T}=await se("/ujalan",{method:"get",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},params:n,retry:0});if(F().loading_full=!1,q.value.may_get_data=!0,T.value==="error"){te().trigger(b);return}q.value.page==1?(a.value=y.value.data,$.value&&($.value.scrollTop=0)):q.value.page>1&&(a.value=[...a.value,...y.value.data]),y.value.data.length==0&&(q.value.is_last_record=!0)},K=async()=>{if(!q.value.may_get_data)return;let y=$.value;if(y.scrollLeft!=q.value.scrollLeft){q.value.scrollLeft=y.scrollLeft;return}q.value.is_last_record||!(Math.round(y.scrollTop)+y.clientHeight>=y.scrollHeight-1)||(q.value.page++,await C())},p=()=>{q.value.page=1,q.value.is_last_record=!1,B(),C()};Ve();const A=_(!1),Q=_(0),x=_(0),f=()=>{Q.value=0,A.value=!0,x.value=!1},{display:g}=Se();Fe(Se());const W=()=>{w.value==-1?g({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(Q.value=a.value[w.value].id,A.value=!0,x.value=!1)},V=()=>{w.value==-1?g({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(Q.value=a.value[w.value].id,A.value=!0,x.value=!0)},E=_(!1),ie=_(0),we=()=>{w.value==-1?g({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(ie.value=a.value[w.value].id,E.value=!0)},fe=_({}),le=_(!1),xe=async()=>{le.value&&(le.value=!1)},ye=()=>{w.value==-1?g({show:!0,status:"Failed",message:"Silahkan Pilih Data Terlebih Dahulu"}):(fe.value={id:a.value[w.value].id},le.value=!0)},be=async()=>{F().loading_full=!0;const y=new FormData;y.append("id",a.value[w.value].id),y.append("_method","DELETE");const{data:b,error:T,status:h}=await se("/ujalan",{method:"post",headers:{Authorization:`Bearer ${k.value}`,Accept:"application/json"},body:y,retry:0});if(F().loading_full=!1,h.value==="error"){te().trigger(T);return}a.value.splice(w.value,1),w.value=-1,le.value=!1};return(y,b)=>{const T=Ne,h=st,ge=Ie,c=He,l=Le,X=Me,O=Ee,R=Pe,oe=Oe,ae=Ue,ue=Ke,ve=$l,$e=Lo;return o(),r("div",Mo,[D(T,{title:"List Ujalan"}),e("div",Eo,[e("div",Oo,[("useUtils"in y?y.useUtils:t(ce))().checkRole(["PabrikTransport"])?I("",!0):(o(),r("button",{key:0,type:"button",name:"button",class:"m-1 text-2xl",onClick:b[0]||(b[0]=s=>V())},[D(h)])),("useUtils"in y?y.useUtils:t(ce))().checkRole(["PabrikTransport"])?I("",!0):(o(),r("button",{key:1,type:"button",name:"button",class:"m-1 text-2xl",onClick:b[1]||(b[1]=s=>f())},[D(ge)])),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:b[2]||(b[2]=s=>W())},[t(w)==-1||t(a)[t(w)].ref_id==null&&t(a)[t(w)].confirmed_by==null?(o(),Y(c,{key:0})):(o(),Y(l,{key:1}))]),("useUtils"in y?y.useUtils:t(ce))().checkRole(["PabrikTransport"])?I("",!0):(o(),r("button",{key:2,type:"button",name:"button",class:"m-1 text-2xl",onClick:b[3]||(b[3]=s=>ye())},[D(X)])),e("button",{type:"button",name:"button",class:"m-1 text-2xl",onClick:b[4]||(b[4]=s=>we())},[D(O)])]),e("form",Ko,[e("div",Yo,[Jo,H(e("input",{class:"",type:"text","onUpdate:modelValue":b[5]||(b[5]=s=>De(i)?i.value=s:null),name:"search",placeholder:"Keyword"},null,512),[[ne,t(i)]])]),e("div",Qo,[Go,H(e("select",{class:"","onUpdate:modelValue":b[6]||(b[6]=s=>t(M).field=s)},Zo,512),[[pe,t(M).field]])]),e("div",Wo,[ea,H(e("select",{class:"","onUpdate:modelValue":b[7]||(b[7]=s=>t(M).by=s)},la,512),[[pe,t(M).by]])]),e("div",oa,[e("button",{class:"",type:"submit",name:"button",onClick:b[8]||(b[8]=me(s=>p(),["prevent"]))},[D(R,{class:"text-2xl"})])])]),e("div",aa,[t(a).length==0?(o(),r("div",na," Maaf Tidak Ada Record ")):(o(),r("div",{key:1,class:"w-full h-full overflow-auto",role:"sticky",ref_key:"loadRef",ref:$,onScroll:K},[e("table",ca,[ia,e("tbody",null,[(o(!0),r(G,null,re(t(a),(s,U)=>(o(),r("tr",{key:U,onClick:S=>w.value=U,class:z(t(w)==U?"active":"")},[e("td",null,[e("div",ra,[s.val?(o(),Y(ae,{key:1})):(o(),Y(oe,{key:0}))])]),e("td",null,[e("div",da,[s.val1?(o(),Y(ae,{key:1})):(o(),Y(oe,{key:0}))])]),e("td",_a,u(s.id),1),e("td",null,u(s.xto),1),e("td",null,u(s.tipe),1),e("td",null,u(s.jenis),1),e("td",null,u(t(d)(s.harga)),1),e("td",null,u(s.note_for_remarks),1),e("td",null,u(s.created_at?t(N)(s.created_at).format("DD-MM-Y HH:mm:ss"):""),1),e("td",null,u(s.updated_at?t(N)(s.updated_at).format("DD-MM-Y HH:mm:ss"):""),1)],10,ua))),128))])])],544))])]),D(ue,{type:"delete",show:t(le),data:t(fe),fnClose:xe,fnConfirm:be},null,8,["show","data"]),D(ve,{show:t(A),fnClose:()=>{A.value=!1},id:t(Q),p_data:t(a),is_copy:t(x)},null,8,["show","fnClose","id","p_data","is_copy"]),D($e,{show:t(E),fnClose:()=>{E.value=!1},id:t(ie),p_data:t(a)},null,8,["show","fnClose","id","p_data"])])}}};export{Sa as default};