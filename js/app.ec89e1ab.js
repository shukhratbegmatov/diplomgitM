(function(t){function e(e){for(var a,n,r=e[0],l=e[1],p=e[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(u.length)u.shift()();return s.push.apply(s,p||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,n=1;n<o.length;n++){var l=o[n];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=o[0]))}return t}var a={},i={app:0},s=[];function n(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b2f9a6d9"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(t){var e=[],o=i[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,a){o=i[t]=[e,a]}));e.push(o[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=n(t);var p=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var o=i[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",p.name="ChunkLoadError",p.type=a,p.request=s,o[1](p)}i[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var c=p;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);var a=o("2b0e"),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],n=o("2877"),r={},l=Object(n["a"])(r,i,s,!1,null,null,null),p=l.exports,d=o("9483");Object(d["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var c=o("8c4f"),u=function(){var t=this,e=t._self._c;return e("div",[t.options?e("div",{staticClass:"qur_diploma"},[e("div",{staticClass:"download"},[t._m(0),e("div",{staticClass:"download_btn"},[e("div",{staticClass:"text_diploma"},[t._v(" Diplomni yuklab oling ")]),e("div",{staticClass:"text_diploma"},[t._v(" "+t._s(t.options.owner_first_name)+" "+t._s(t.options.owner_last_name)+" ")]),e("div",{staticClass:"button_diploma"},[e("button",{on:{click:function(e){return t.generateReport()}}},[t._v(" Yuklash "),e("svg",{attrs:{width:"14",height:"18",viewBox:"0 0 14 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.12493 16.75H12.8749C13.0348 16.7505 13.1884 16.8123 13.3041 16.9226C13.4198 17.0329 13.4889 17.1833 13.4971 17.3429C13.5053 17.5026 13.452 17.6593 13.3482 17.7809C13.2444 17.9025 13.0979 17.9796 12.9389 17.9965L12.8749 18H1.12493C0.965071 17.9995 0.811484 17.9377 0.69576 17.8274C0.580036 17.7171 0.510973 17.5667 0.502776 17.4071C0.494579 17.2474 0.547871 17.0907 0.65169 16.9691C0.75551 16.8475 0.901965 16.7704 1.06093 16.7535L1.12493 16.75H12.8749H1.12493ZM6.81093 0.00300002L6.87493 0C7.19843 0 7.46493 0.246 7.49693 0.561L7.49993 0.625V12.77L10.3234 9.947C10.3811 9.88732 10.4501 9.83973 10.5263 9.80699C10.6026 9.77426 10.6846 9.75704 10.7676 9.75634C10.8506 9.75565 10.9329 9.77148 11.0097 9.80293C11.0865 9.83438 11.1563 9.88081 11.2149 9.93951C11.2736 9.99821 11.32 10.068 11.3514 10.1448C11.3828 10.2216 11.3986 10.3039 11.3978 10.3869C11.3971 10.4699 11.3798 10.5519 11.3471 10.6282C11.3143 10.7044 11.2666 10.7734 11.2069 10.831L7.31793 14.72C7.20074 14.8371 7.04185 14.9029 6.87618 14.9029C6.71052 14.9029 6.55163 14.8371 6.43443 14.72L2.54493 10.831C2.42771 10.7138 2.36185 10.5548 2.36185 10.389C2.36185 10.2232 2.42771 10.0642 2.54493 9.947C2.66216 9.82977 2.82115 9.76392 2.98693 9.76392C3.15272 9.76392 3.31171 9.82977 3.42893 9.947L6.24993 12.768V0.625C6.24993 0.3015 6.49593 0.035 6.81093 0.00300002L6.87493 0L6.81093 0.00300002Z",fill:"white"}})])])])])]),e("div",{staticClass:"diploma"},[e("vue-html2pdf",{ref:"html2Pdf",attrs:{htmlToPdfOptions:t.htmlToPdfOptions,"preview-modal":!1,filename:"pdf","pdf-content-width":"100%","pdf-quality":2,"pdf-format":"a4","pdf-orientation":"portrait","manual-pagination":!0}},[e("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[e("div",{ref:"printMe"},[t.options.diploma_category?e("div",{staticClass:"main_diplom",style:{backgroundImage:`url(${t.options.diploma_category[0].file_url})`},attrs:{id:"imagesave"}},[e("div",{staticClass:"or_logo"},[t.options.organizations[0]?e("img",{attrs:{src:t.options.organizations[0].logo_url,alt:""}}):t._e()]),e("div",{staticClass:"or_logo2"},[t.options.organizations[1]?e("img",{attrs:{src:t.options.organizations[1].logo_url,alt:""}}):t._e()]),e("div",{staticClass:"or_logo3"},[t.options.organizations[2]?e("img",{attrs:{src:t.options.organizations[2].logo_url,alt:""}}):t._e()]),e("div",{staticClass:"cub"},[e("img",{attrs:{src:t.options.championship[0].icon_url,alt:""}})]),e("div",{staticClass:"logo_person"},[e("img",{attrs:{src:o("6ecf"),alt:""}})]),e("div",{staticClass:"text_main"},[t._v(" "+t._s(t.options.championship[0].title)+" "),e("br"),e("span",[t._v(t._s(t.options.date))])]),e("div",{staticClass:"text_main_one"},[t._v(" "+t._s(t.options.first_text)+" "),e("span",{staticClass:"sports_name"},[t._v(t._s(t.options.sport_type[0].title))]),t._v(" "+t._s(t.options.last_text)),e("span",{staticClass:"sport_type"},[t._v("“"+t._s(t.options.championship[0].title)+"”")]),e("br"),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.options.middle_text)}}),t._v(" o'rtasida g'olib ")]),e("div",{staticClass:"main_names"},[e("div",{staticClass:"class_full_name"},[t._v(" "+t._s(t.options.full_name)+" ")]),e("div",{staticClass:"awarded"},[t._v("taqdirlanadi")])]),e("div",{staticClass:"main_name_fider"},[e("div",{staticClass:"name_fider"},[t._v(t._s(t.orga_nization1.leader))]),e("div",{staticClass:"description_fider"},[t._v(t._s(t.orga_nization1.leader_position))])]),e("div",{staticClass:"main_name_fider1"},[e("div",{staticClass:"name_fider"},[t._v(t._s(t.orga_nization2.leader))]),e("div",{staticClass:"description_fider"},[t._v(t._s(t.orga_nization2.leader_position))])]),e("div",{staticClass:"main_name_fider2"},[e("div",{staticClass:"name_fider"},[t._v(t._s(t.orga_nization3.leader))]),e("div",{staticClass:"description_fider"},[t._v(t._s(t.orga_nization3.leader_position))])]),e("div",{staticClass:"main_number"},[e("div",{staticClass:"m_number"},[t._v("srv"+t._s(t.items_main_id))]),e("div",{staticClass:"m_title"},[t._v("Diplom kodi")]),e("div",{staticClass:"m_description"},[t._v("erp.sport.uz tizimi orqali ERI bilan tasdiqlangan")])]),e("div",{staticClass:"positon_absolit"},[e("qr-code",{attrs:{text:t.value,id:"qrblock",size:t.size,level:"H"}})],1)]):t._e()])])])],1)]):e("h1",[t._v(" Ma'lumot topilmadi ")])])},m=[function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{src:o("6822"),alt:""}})])}],h={data(){return{value:"https://diplom.minsport.uz?id=SRVF",htmlToPdfOptions:{margin:0,filename:"diploma.pdf",image:{type:"jpeg",quality:.98},enableLinks:!1,html2canvas:{scale:1,useCORS:!0},jsPDF:{unit:"px",format:[1570,1100],orientation:"landscape"}},options:[],diploma_danger:{},text_alert:"",first_name:"",last_name:"",championships:"",orga_nization1:"",orga_nization2:"",orga_nization3:"",isLoading:!1,isActive:!0,count:1,vaues:407,vaues1:79,vaues3:600,vaues4:460,style:{left:"407px"},aler_diploma:!1,style1:{},text12:"Sportning",text13:"turi bo'yicha yoshlar o'rtasida",items_main_id:"",objectItem3:{},size:118,start_date:"",end_date:"",pdfOptions:{margin:0,image:{type:"jpeg",quality:.8},html2canvas:{scale:1},jsPDF:{unit:"mm",format:"a4"}},output:null,full_name:"",wight:"",events:"",sport_type:"",imageUrl:""}},components:{},mounted(){this.value="https://verify-diploma.sport.uz/?code=SRVF"+this.$route.query.code,this.items_main_id=this.$route.query.code,this.base_url.get("diplomas/?code="+this.$route.query.code).then(t=>{this.options=t.data.results[0]})},methods:{generateReport(){this.$refs.html2Pdf.generatePdf()}}},g=h,_=Object(n["a"])(g,u,m,!1,null,null,null),f=_.exports;a["default"].use(c["a"]);const v=[{path:"/",name:"Home",component:f},{path:"/about",name:"About",component:()=>o.e("about").then(o.bind(null,"f820"))},{path:"/login",name:"Login",component:()=>o.e("about").then(o.bind(null,"a55b"))}],C=new c["a"]({mode:"history",base:"/",routes:v});var b=C,y=o("2f62"),w=o("bc3a"),z=o.n(w);a["default"].use(y["a"]);var k=new y["a"].Store({state:{darkMode:!1,organisations:[],championship:[],diplomcat:[],sporttype:[]},mutations:{},actions:{postLogin(t,e){z.a.post("/login/",e).then(t=>{localStorage.setItem("token",t.data.access),b.push("/")})},getChempoionship({state:t}){z.a.get("championships").then(e=>{t.organisations=e.data})},postChampionship(t,e){z.a.post("/championships/",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(t=>{console.log(t),this.id=t,b.push("/championship")}).catch(t=>{console.log(t.response.data)})},putChampionship(t,e){z.a.put("/championships/"+e.id,e.id,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(t=>{console.log(t),this.id=t,b.push("/championship")}).catch(t=>{console.log(t.response.data)})},diplomCatGet({state:t}){z.a.get("/diploma-categories/").then(e=>{t.diplomcat=e.data})},diplomCatPosts(t,e){z.a.post("/diploma-categories/",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(t=>{console.log(t),this.id=t,b.push("/diplomcategory")}).catch(t=>{console.log(t.response.data)})},diplomCat(t,e){z.a.put(`/diploma-categories/${e.id}/`,e.data,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(t=>{console.log(t),this.id=t,b.push("/diplomcategory")}).catch(t=>{console.log(t.response.data)})},getorganizations({state:t}){z.a.get("organizations").then(e=>{t.championship=e.data})},postorganizations(t,e){z.a.post("/organizations/",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(t=>{console.log(t),this.id=t,b.push("/organizsation")}).catch(t=>{console.log(t.response.data)})},putorganizations(t,e){z.a.put(`/organizations/${e.id}/`,e.data,{headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Content-Type":"application/json"}}).then(t=>{console.log(t),this.id=t,b.push("/organizsation")}).catch(t=>{console.log(t.response.data)})},getsporttype({state:t}){z.a.get("sport-types").then(e=>{t.sporttype=e.data})},postsporttype(t,e){z.a.post("/sport-types/",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(t=>{console.log(t),this.id=t,b.push("/sport_type")}).catch(t=>{console.log(t.response.data)})},putsporttype(t,e){z.a.put(`/sport-types/${e.id}/`,e.data,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then(t=>{console.log(t),this.id=t,b.push("/sport_type")}).catch(t=>{console.log(t.response.data)})}},modules:{}}),j=(o("6672"),o("5f5b")),x=o("b1e0"),P=(o("f9e3"),o("2dd8"),o("6480")),S=o("dfcf");z.a.defaults.baseURL="https://backend-diploma.sport.uz/api/v1/",a["default"].prototype.base_url=z.a,a["default"].component("qr-code",S["a"]),a["default"].use(P["a"]),a["default"].use(j["a"]),a["default"].use(x["a"]),a["default"].config.productionTip=!1,new a["default"]({router:b,store:k,render:t=>t(p)}).$mount("#app")},6672:function(t,e,o){},6822:function(t,e,o){t.exports=o.p+"img/logoor4.c1521708.png"},"6ecf":function(t,e,o){t.exports=o.p+"img/logoPerson.f7d1f1be.png"}});
//# sourceMappingURL=app.ec89e1ab.js.map