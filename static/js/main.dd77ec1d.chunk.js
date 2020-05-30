(this["webpackJsonpb3-companies-webapp"]=this["webpackJsonpb3-companies-webapp"]||[]).push([[0],{59:function(e,t,a){e.exports=a(91)},69:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a(31),i=a(28),s=a(24),l=a(55),u=(a(68),a(69),a(23)),p=a(49),d=a(56),m=a(29);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var v={list:[],sending:!1,activities:[]},b=Object(u.c)({company:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=h({},e);switch(t.type){case"BEFORE_SEND":"company"===t.identifier&&(a.sending=!0);break;case"AFTER_RESPONSE":"company"===t.identifier&&(a.sending=!1);break;case"SET_COMPANIES":a.list=t.data,0===a.activities.length&&(a.activities=Object(d.a)(new Set(t.data.map((function(e){return e.activity})).filter((function(e){return e})))).sort((function(e,t){return e>t})));break;default:a=e}return a}}),g=Object(u.e)(b,Object(u.d)(Object(u.a)(p.a))),E=a(18),y=a(19),O=a(21),j=a(20),_=a(22),w=a(94),k=a(95),C=a(57),P=function(e){function t(){return Object(E.a)(this,t),Object(O.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(C.a,{searchLabel:"Buscar",entriesLabel:"Limitar",paginationLabel:["Anterior","Pr\xf3xima"],infoLabel:["Exibindo","at\xe9","de","registros"],responsive:!0,striped:!0,small:!0,data:e})}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={type:"positive"},a._getClasses=function(){var e=["candle"];return"positive"===a.state.type?e.push("candle--positive"):e.push("candle--negative"),e.join(" ")},a._getLabel=function(){return"positive"===a.state.type?"P":"N"},a._toggleDirection=function(){var e="positive"===a.state.type?"negative":"positive";a.setState({type:e},(function(){a.props.onChange(e)}))},a}return Object(_.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this._getClasses(),t=this._getLabel();return r.a.createElement("div",{className:e,onClick:this._toggleDirection},t)}}]),t}(n.Component),D=a(96),S=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={candles:[]},a._onChange=function(e,t){var n=a.state.candles.map((function(a,n){return+e===+n&&(a=t),a}));a.setState({candles:n}),a.props.onChange(n)},a._add=function(){var e=[].concat(a.state.candles);e.push("positive"),a.setState({candles:e}),a.props.onChange(e)},a._pop=function(){var e=[].concat(a.state.candles);e.pop(),a.setState({candles:e}),a.props.onChange(e)},a}return Object(_.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"filter-candles"},r.a.createElement("div",{className:"filter-candles--label"},r.a.createElement("strong",null,"Filtrar candles")),r.a.createElement("div",{className:"filter-candles--label"},"As velas ser\xe3o filtradas da data mais recente para mais antiga, ou seja, a primeira vela \xe9 referente a ontem, depois a de ante-ontem, e assim por diante. Clique na vela para alternar entre ",r.a.createElement("code",null,"positiva")," e ",r.a.createElement("code",null,"negativa"),"."),r.a.createElement("div",{className:"filter-candles--actions"},r.a.createElement(D.a,{size:"sm",variant:"success",onClick:this._add},"+"),r.a.createElement(D.a,{size:"sm",variant:"warning",onClick:this._pop},"-")),r.a.createElement("div",{className:"filter-candles--list"},this.state.candles.map((function(t,a){return r.a.createElement(N,{key:a,onChange:function(t){return e._onChange(a,t)}})}))))}}]),t}(n.Component),L=a(54),A=a.n(L),F={getURL:function(){return"https://api.b3-companies.thiagosf.net"},buildURL:function(e){return this.getURL()+e},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.request("post",e,t,a)},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.request("put",e,t,a)},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.request("get",e,t,a)},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.request("delete",e,t,a)},buildHeaders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a={};return e.headers&&(a=Object.assign({},e.headers)),t&&(a.Authorization="Token ".concat(t)),a},request:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=this.buildHeaders(a,n),c=A.a.create({baseURL:this.getURL(),headers:r}),o={url:t,method:e};return"get"===e?o.params=a||{}:o.data=a||{},c.request(o).then((function(e){return e.data})).catch((function(e){if(e.response&&e.response.data)return e.response.data;throw e}))}},R={formatPercentage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=+(+e).toFixed(2);return t&&(a="".concat(a,"%")),a}};function T(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?T(a,!0).forEach((function(t){Object(m.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var U=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(O.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(c)))).state={filters:{evenEmpty:!1,justThreeFour:!0,candles:[],activity:""}},a._getData=function(){var e=a.state.filters,t=e.evenEmpty,n=e.justThreeFour,c=e.activity,o=a.props.company.list,i=[];return o.forEach((function(e){var t=r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://bvmf.bmfbovespa.com.br/cias-listadas/empresas-listadas/BuscaEmpresaListada.aspx?Nome=".concat(e.code,"&idioma=pt-br")},"b3"),a=r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.fundamentus.com.br/detalhes.php?papel=".concat(e.code)},"fundamentus"),n=r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://br.tradingview.com/chart/?symbol=BMFBOVESPA:".concat(e.code)},"tradingView"),c=null,o=0,s=0,l=+e.p_l,u=+e.p_vp,p=+e.price,d=+e.open;e.price&&(o=100*(p/d-1),o=R.formatPercentage(o,!1),e.last_candle&&(s=100*(p/+e.last_candle.close-1),s=R.formatPercentage(s,!1),c=(c=new Date(e.updated_at)).toLocaleString()));var m=r.a.createElement("div",{className:"company-links"},t,r.a.createElement("br",null),a,r.a.createElement("br",null),n),f=null,h=null,v=null;if(e.screenshot&&e.screenshot.url){var b="".concat(F.getURL()).concat(e.screenshot.url),g="".concat(F.getURL()).concat(e.screenshot.url_weekly),E="".concat(F.getURL()).concat(e.screenshot.url_monthly),y=new Date(+e.screenshot.date);y=y.toLocaleString(),f=r.a.createElement("div",{className:"company-chart"},r.a.createElement("img",{src:b,alt:"Data do screenshot: ".concat(y),title:"Data do screenshot: ".concat(y)})),h=r.a.createElement("div",{className:"company-chart"},r.a.createElement("img",{src:g,alt:"Data do screenshot: ".concat(y),title:"Data do screenshot: ".concat(y)})),v=r.a.createElement("div",{className:"company-chart"},r.a.createElement("img",{src:E,alt:"Data do screenshot: ".concat(y),title:"Data do screenshot: ".concat(y)}))}i.push({company:e.name,code:e.code,price:p,day_variation:o,variation:s,p_l:l,p_vp:u,updated:c,chart:f,chartWeekly:h,chartMonthly:v,links:m,activity:e.activity})})),t||(i=i.filter((function(e){return e.price>0}))),n&&(i=i.filter((function(e){return e.code.endsWith("3")||e.code.endsWith("4")}))),c&&(i=i.filter((function(e){return e.activity===c}))),{showEntries:1,columns:[{label:"Empresa",field:"company",sort:"asc"},{label:"S\xedmbolo",field:"code",sort:"asc"},{label:"Pre\xe7o atual",field:"price",sort:"asc"},{label:"Varia\xe7\xe3o dia",field:"day_variation",sort:"asc"},{label:"Varia\xe7\xe3o fech. ant.",field:"variation",sort:"asc"},{label:"P/L",field:"p_l",sort:"asc"},{label:"P/VP",field:"p_vp",sort:"asc"},{label:"Atualiza\xe7\xe3o",field:"updated",sort:"asc"},{label:"Gr\xe1fico di\xe1rio",field:"chart",sort:"asc"},{label:"Gr\xe1fico semanal",field:"chart_weekly",sort:"asc"},{label:"Gr\xe1fico mensal",field:"chart_monthly",sort:"asc"},{label:"Links",field:"links",sort:"asc"}],rows:i=i.map((function(e){var t=B({},e);return delete t.activity,t}))}},a._getPositiveNegativeClass=function(e){return+e>0?"positive":+e<0?"negative":void 0},a._toggleFilter=function(e){var t=a.state.filters,n=B({},t,Object(m.a)({},e,!t[e]));a.setState({filters:n})},a._onChangeCandles=function(e){var t=B({},a.state.filters,{candles:e});a.setState({filters:t},a._loadData)},a._loadData=function(){var e={candles:a.state.filters.candles.map((function(e){return e[0]})).join(",")};a.props.loadCompanies(e)},a._onChangeActivity=function(e){var t=e.target.value,n=B({},a.state.filters,{activity:t});a.setState({filters:n})},a}return Object(_.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this._loadData()}},{key:"render",value:function(){var e=this,t=this.state.filters,a=this.props.company,n=a.sending,c=a.activities,o=this._getData();return r.a.createElement(w.a,{fluid:!0},r.a.createElement("div",{className:"home"},r.a.createElement("h1",{className:"home__title"},"Empresas B3"),r.a.createElement("div",{className:"home-filters"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6"},r.a.createElement("label",{className:"form-check"},r.a.createElement(k.a.Input,{checked:t.evenEmpty,onChange:function(){return e._toggleFilter("evenEmpty")}}),r.a.createElement("span",null,"Exibir a\xe7\xf5es com pre\xe7o em branco"))),r.a.createElement("div",{className:"col-6"},r.a.createElement("label",{className:"form-check"},r.a.createElement(k.a.Input,{checked:t.justThreeFour,onChange:function(){return e._toggleFilter("justThreeFour")}}),r.a.createElement("span",null,"Apenas com final 3 e 4"))),r.a.createElement("div",{className:"col-sm-12 col-md-8"},r.a.createElement(S,{onChange:this._onChangeCandles})),r.a.createElement("div",{className:"col-sm-12 col-md-4"},r.a.createElement("label",null,"Filtre pela atividade"),r.a.createElement("select",{className:"form-control",onChange:this._onChangeActivity},r.a.createElement("option",{value:""},"Todas"),c.map((function(e,t){return r.a.createElement("option",{key:t},e)})))))),n&&r.a.createElement("p",null,"Carregando..."),!n&&r.a.createElement(P,{data:o})))}}]),t}(n.Component),q={routes:[{name:"home",path:"/",component:Object(o.b)((function(e){return{company:e.company}}),(function(e){return{loadCompanies:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){t({type:"BEFORE_SEND",identifier:"company"}),F.get("/companies",e).then((function(e){var a=[];e.success&&(a=e.data),t({type:"SET_COMPANIES",data:a}),t({type:"AFTER_RESPONSE",identifier:"company"})}))}}(t))}}}))(U)}]};Object(c.render)(r.a.createElement(o.a,{store:g},r.a.createElement(l.a,null,r.a.createElement(i.b,{basename:"/b3-companies-webapp"},r.a.createElement(i.a,{basename:"/b3-companies-webapp"},r.a.createElement(s.c,null,q.routes.map((function(e){return r.a.createElement(s.a,{exact:!0,key:e.name,path:e.path,component:e.component})}))))))),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.dd77ec1d.chunk.js.map