webpackJsonp([1],{"/9Co":function(t,e){},"4ArT":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("83B7"),c=i("4YfN"),r=i.n(c),n=i("R4Sj"),s={methods:r()({},Object(n.c)(["addArticle","changeFavorite","removeNotes"])),computed:r()({},Object(n.d)(["activeArticle"]))},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tools"},[e("i",{staticClass:"glyphicon glyphicon-plus",on:{click:this.addArticle}}),this._v(" "),e("i",{staticClass:"glyphicon glyphicon-star",class:{like:this.activeArticle&&this.activeArticle.isF},on:{click:this.changeFavorite}}),this._v(" "),e("i",{staticClass:"glyphicon glyphicon-remove",on:{click:this.removeNotes}})])},staticRenderFns:[]};var o=i("C7Lr")(s,l,!1,function(t){i("anPa")},"data-v-fa660638",null).exports,v={data:function(){return{flag:!0}},computed:r()({},Object(n.d)(["articleList","activeArticle"]),Object(n.b)(["favoriteNotes"])),methods:r()({},Object(n.c)(["changeActive"]))},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notelist"},[i("div",{staticClass:"header"},[i("h2",[t._v("Note-app")]),t._v(" "),i("div",{staticClass:"btn-group btn-group-justified",attrs:{role:"group","aria-label":"..."}},[i("div",{staticClass:"btn-group",attrs:{role:"group"}},[i("button",{staticClass:"btn btn-default",class:{active:t.flag},attrs:{type:"button"},on:{click:function(e){t.flag=!0}}},[t._v("All Notes")])]),t._v(" "),i("div",{staticClass:"btn-group",attrs:{role:"group"}},[i("button",{staticClass:"btn btn-default",class:{active:!t.flag},attrs:{type:"button"},on:{click:function(e){t.flag=!1}}},[t._v("Favorites")])])])]),t._v(" "),i("div",{staticClass:"list"},t._l(t.flag?t.articleList:t.favoriteNotes,function(e,a){return i("div",{key:a,class:{now:e.time===t.activeArticle.time},on:{click:function(i){return t.changeActive(e)}}},[t._v(t._s(e.title))])}),0)])},staticRenderFns:[]};var d=i("C7Lr")(v,u,!1,function(t){i("x5Lu")},"data-v-4ce3c1f4",null).exports,f={computed:r()({},Object(n.d)(["activeArticle"]))},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.activeArticle?i("div",{staticClass:"editor"},[i("div",{staticClass:"form-group title"},[i("label",{attrs:{for:"title"}},[t._v("Title")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.activeArticle.title,expression:"activeArticle.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"input a title"},domProps:{value:t.activeArticle.title},on:{input:function(e){e.target.composing||t.$set(t.activeArticle,"title",e.target.value)}}})]),t._v(" "),i("div",{staticClass:"form-group content"},[i("label",{attrs:{for:"article"}},[t._v("Article")]),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.activeArticle.content,expression:"activeArticle.content"}],staticClass:"form-control",attrs:{id:"article",rows:"28"},domProps:{value:t.activeArticle.content},on:{input:function(e){e.target.composing||t.$set(t.activeArticle,"content",e.target.value)}}})])]):t._e()},staticRenderFns:[]};var m={components:{tools:o,nodelist:d,editor:i("C7Lr")(f,p,!1,function(t){i("4ArT")},"data-v-1da6d014",null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("tools"),this._v(" "),e("nodelist"),this._v(" "),e("editor")],1)},staticRenderFns:[]};var h=i("C7Lr")(m,g,!1,function(t){i("/9Co")},null,null).exports;a.a.use(n.a);var A=new n.a.Store({state:{articleList:[],activeArticle:null},mutations:{addArticle:function(t){var e={title:"None",content:"",isF:!1,time:(new Date).getTime()};t.articleList.push(e),t.activeArticle=e},changeActive:function(t,e){t.activeArticle=e},changeFavorite:function(t){t.activeArticle.isF=!t.activeArticle.isF},removeNotes:function(t){0!==t.articleList.length&&(t.articleList=t.articleList.filter(function(e){return e!==t.activeArticle}),t.activeArticle=t.articleList[0])}},getters:{favoriteNotes:function(t){return t.articleList.filter(function(t){return t.isF})}}});new a.a({el:"#app",store:A,components:{App:h},template:"<App/>"})},anPa:function(t,e){},x5Lu:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b63483fe70f34e65a3ef.js.map