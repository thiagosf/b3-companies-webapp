(this["webpackJsonpb3-companies-webapp"]=this["webpackJsonpb3-companies-webapp"]||[]).push([[0],{54:function(e,t,n){e.exports=n(84)},64:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n(24),c=n(19),s=n(16),l=n(51),u=(n(63),n(64),n(15)),d=n(44),p=n(45);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(n,!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b={list:[],sending:!1},h=Object(u.c)({company:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,n=m({},e);switch(t.type){case"BEFORE_SEND":"company"===t.identifier&&(n.sending=!0);break;case"AFTER_RESPONSE":"company"===t.identifier&&(n.sending=!1);break;case"SET_COMPANIES":n.list=t.data;break;default:n=e}return n}}),v=Object(u.e)(h,Object(u.d)(Object(u.a)(d.a))),g=n(21),O=n(22),y=n(25),E=n(23),j=n(26),w=n(53),k=n(52),P=function(e){function t(){return Object(g.a)(this,t),Object(y.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement(k.a,{responsive:!0,striped:!0,bordered:!0,small:!0,data:e})}}]),t}(a.Component),_=n(49),q=n.n(_),S={getURL:function(){return"https://api.b3-companies.thiagosf.net/"},buildURL:function(e){return this.getURL()+e},post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.request("post",e,t,n)},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.request("put",e,t,n)},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.request("get",e,t,n)},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this.request("delete",e,t,n)},buildHeaders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n={};return e.headers&&(n=Object.assign({},e.headers)),t&&(n.Authorization="Token ".concat(t)),n},request:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=this.buildHeaders(n,a),o=q.a.create({baseURL:this.getURL(),headers:r}),i={url:t,method:e};return"get"===e?i.params=n||{}:i.data=n||{},o.request(i).then((function(e){return e.data})).catch((function(e){if(e.response&&e.response.data)return e.response.data;throw e}))}},R={formatPercentage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=+(+e).toFixed(2);return t&&(n="".concat(n,"%")),n}},D=function(e){function t(){var e,n;Object(g.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(y.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(o))))._getData=function(){var e=n.props.company.list,t=[];return e.forEach((function(e){e.aggregate&&e.aggregate.forEach((function(n){var a=r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://bvmf.bmfbovespa.com.br/cias-listadas/empresas-listadas/ResumoEmpresaPrincipal.aspx?codigoCvm=".concat(e.code,"&idioma=pt-br")},"view"),o=r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.fundamentus.com.br/detalhes.php?papel=".concat(n.code)},"view"),i=r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://br.tradingview.com/chart/?symbol=BMFBOVESPA:".concat(n.code)},"view"),c=0,s=0,l=0,u=0;n.quote&&(n.quote.current&&(c=+n.quote.current,s=100*(+n.quote.current/+n.quote.open-1),s=R.formatPercentage(s,!1)),l=R.formatPercentage(n.quote.variation,!1)),n.fundamentus&&n.fundamentus.indicators&&(u=+n.fundamentus.indicators.p_l);var d=r.a.createElement("div",{className:"company-activity"},e.activity);t.push({company:e.name,activity:d,code:n.code,price:c,day_variation:s,variation:l,p_l:u,b3link:a,fundamentuslink:o,tradingview:i})}))})),{showEntries:1,columns:[{label:"Empresa",field:"company",sort:"asc"},{label:"Atividade",field:"activity",sort:"asc"},{label:"S\xedmbolo",field:"code",sort:"asc"},{label:"Pre\xe7o atual",field:"price",sort:"asc"},{label:"Varia\xe7\xe3o dia",field:"day_variation",sort:"asc"},{label:"Varia\xe7\xe3o fech. ant.",field:"variation",sort:"asc"},{label:"P/L",field:"p_l",sort:"asc"},{label:"B3",field:"b3link",sort:"asc"},{label:"Fundamentus",field:"fundamentuslink",sort:"asc"},{label:"TradingView",field:"tradingview",sort:"asc"}],rows:t}},n}return Object(j.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.loadCompanies()}},{key:"render",value:function(){var e=this._getData();return r.a.createElement(w.a,{fluid:!0},r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"Empresas B3"),r.a.createElement(P,{data:e})))}}]),t}(a.Component),A={routes:[{name:"home",path:"/",component:Object(i.b)((function(e){return{company:e.company}}),(function(e){return{loadCompanies:function(){return e((function(e){S.get("companies").then((function(t){var n=[];t.success&&(n=t.data),e({type:"SET_COMPANIES",data:n})}))}))}}}))(D)}]};Object(o.render)(r.a.createElement(i.a,{store:v},r.a.createElement(l.a,null,r.a.createElement(c.b,{basename:"/"},r.a.createElement(c.a,null,r.a.createElement(s.c,null,A.routes.map((function(e){return r.a.createElement(s.a,{exact:!0,key:e.name,path:e.path,component:e.component})}))))))),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.c0a0d87a.chunk.js.map