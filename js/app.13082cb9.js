(function(e){function t(t){for(var n,a,i=t[0],c=t[1],p=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,p||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"0491":function(e,t,r){"use strict";var n=r("b21b"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=r("bc3a"),s=r.n(o),a=r("a7fe"),i=r.n(a),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("headerComponent")],1)},p=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"header-component"},[r("div",{staticClass:"fixed-header"},[e._m(0),r("div",{staticClass:"loadingApiDiv"},[e._v("API STATUS "),e.waitingForResponse||e.waitingForResponseReported||e.waitingForResponseBest?r("span",[e._v(": HANDELING API REQUEST")]):e._e(),e.errorOccurred||e.errorOccurredReported||e.errorOccurredBest?r("span",[e._v(": AN ERROR OCCURED, PLEASE TRY AGAIN.")]):e._e()]),r("div",{staticClass:"navDiv"},[r("nav",[r("button",{class:{selected:"add"==e.sorteringsNyckel},on:{click:function(t){e.sorteringsNyckel="add",e.show="addShow"}}},[e._v("ADD SNIPPET")]),r("button",{class:{selected:"latest"==e.sorteringsNyckel},attrs:{disabled:e.waitingForResponse},on:{click:e.delayRequest}},[e._v(" LATEST SNIPPETS")]),r("button",{class:{selected:"best"==e.sorteringsNyckel},attrs:{disabled:e.waitingForResponseBest},on:{click:e.delayRequestBest}},[e._v(" BEST SNIPPET")]),r("button",{class:{selected:"reported"==e.sorteringsNyckel},attrs:{disabled:e.waitingForResponseReported},on:{click:e.delayRequestReported}},[e._v(" REPORTED SNIPPET")])])])]),r("div",{staticClass:"content"},[r("div",{staticClass:"middleContent"},[r("div",{staticClass:"modelPlace"},["addShow"==e.show?r("addsnippet"):e._e(),"latestShow"==e.show?r("latestsnippet",{attrs:{modelFromHeader:e.model},on:{increment:e.delayRequest,btnError:e.errorFromButton}}):e._e(),"reportedShow"==e.show?r("reportedsnippets",{attrs:{modelReportedFromHeader:e.modelReported},on:{triggerFromReport:e.delayRequestReported,btnErrorR:e.errorFromButton}}):e._e(),"bestShow"==e.show?r("bestsnippets",{attrs:{modelBestFromHeader:e.modelBest},on:{triggerFromBest:e.delayRequestBest,btnErrorB:e.errorFromButton}}):e._e()],1)])])])},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-header"},[n("img",{attrs:{src:r("5d70")}})])}],d=(r("96cf"),r("1da1")),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"addsnippet"},[r("div",{staticClass:"card"},[r("label",{attrs:{for:"title"}},[e._v("TITLE: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.snippetData.title,expression:"snippetData.title"}],class:e.titleClass,attrs:{type:"text",placeholder:"Add snippet-title here",maxlength:"50"},domProps:{value:e.snippetData.title},on:{blur:function(t){e.titleIsTouched=!0},input:function(t){t.target.composing||e.$set(e.snippetData,"title",t.target.value)}}}),e.titleIsTouched&&!e.titleIsValid?r("span",{staticClass:"error"},[e._v(" "+e._s(e.titleErrorMessage)+" ")]):e._e()]),r("div",{staticClass:"card"},[r("label",[e._v("CODESNIPPET: ")]),e._v(" "),e.snippetIsTouched&&!e.snippetIsValid?r("span",{staticClass:"error"},[e._v(" "+e._s(e.snippetErrorMessage)+" ")]):e._e(),r("div",{staticClass:"forms-row-textarea"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.snippetData.content,expression:"snippetData.content"}],class:e.snippetClass,attrs:{type:"text",rows:"8",placeholder:"Add your snippetcode here"},domProps:{value:e.snippetData.content},on:{blur:function(t){e.snippetIsTouched=!0},input:function(t){t.target.composing||e.$set(e.snippetData,"content",t.target.value)}}})]),r("p",[r("button",{attrs:{id:"addBtn",disabled:e.waitingForResponseAddData||!e.formIsValid},on:{click:e.delayaAddDataAxiosSec}},[e._v("Add snippet")]),e.errorOccurredAddData&&!e.waitingForResponseAddData?r("span",[e._v(" An error occured")]):e._e(),e._v(" "),e.waitingForResponseAddData?r("span",[e._v(" Handeling API Request")]):e._e(),e.snippetAddedBol&&!e.waitingForResponseAddData?r("span",[r("strong",{staticClass:"justGreen"},[e._v("✔")]),e._v(" SNIPPET SUCCESSFULLY ADDED")]):e._e()])])])},R=[],f="https://www.forverkliga.se/JavaScript/api/api-snippets.php?",m={name:"addsnippet",components:{},props:{},data:function(){return{waitingForResponseAddData:!1,errorOccurredAddData:!1,snippetData:{title:"",content:""},titleIsTouched:!1,snippetIsTouched:!1,snippetAddedBol:!1}},methods:{delayaAddDataAxiosSec:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.waitingForResponseAddData=!0,e.errorOccurredAddData=!1,t.t0=setTimeout,t.next=5,e.addDataAxiosSec;case 5:t.t1=t.sent,(0,t.t0)(t.t1);case 7:case"end":return t.stop()}}),t)})))()},addDataAxiosSec:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(f,{add:"add",title:e.snippetData.title,content:e.snippetData.content});case 3:r=t.sent,console.log(r),"success"!=r.data.status?e.errorOccurredAddData=!0:(e.snippetAddedBol=!0,e.snippetData.title="",e.snippetData.content=""),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),e.errorOccurredAddData=!0;case 12:return t.prev=12,e.waitingForResponseAddData=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})))()}},computed:{titleIsValid:function(){return this.snippetData.title.length>=1&&this.snippetData.title.length<=50},titleClass:function(){return this.titleIsTouched?this.titleIsValid?"valid":"invalid":""},titleErrorMessage:function(){return"Please enter at least one character and max fifthy"},snippetIsValid:function(){return this.snippetData.content.length>=1&&this.snippetData.content.length<=2e3},snippetClass:function(){return this.snippetIsTouched?this.snippetIsValid?"valid":"invalid":""},snippetErrorMessage:function(){return"Please enter at least one character"},formIsValid:function(){return this.titleIsValid&&this.snippetIsValid}}},w=m,g=(r("630a"),r("2877")),h=Object(g["a"])(w,v,R,!1,null,"1efa5e9c",null),b=h.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"latestsnippet"},[e.modelFromHeader?r("div",{staticClass:"modelPlace"},e._l(e.modelFromHeader.allContent,(function(t){return r("div",{key:t.id,staticClass:"card"},[r("div",{staticClass:"spaceBetweenInterface"},[r("span",[e._v("Title: "),r("span",{staticClass:"apiInfoColor"},[e._v(e._s(t.title))])]),r("span",[e._v("Upload date: "),r("span",{staticClass:"apiInfoColor"},[e._v(e._s(t.upload_dt))])]),r("span",[e._v("Rating: "),r("span",{staticClass:"apiInfoColor"},[e._v(e._s(t.score))])])]),r("div",{staticClass:"snippet"},[e._v(e._s(t.content))]),r("div",{staticClass:"spaceBetweenInterface"},[r("p",[r("button",{attrs:{id:"reportBtn",disabled:e.waitingForResponseReport},on:{click:function(r){return e.delayReportRequest(t.id)}}},[e._v("Report")]),r("button",{attrs:{id:"deleteBtn",disabled:e.waitingForDeleteResponse},on:{click:function(r){return e.delayDeleteRequest(t.id)}}},[e._v("Delete")])]),r("p",[r("button",{attrs:{id:"voteBtnUp",disabled:e.waitingForResponseUpvote},on:{click:function(r){return e.delayUpvoteRequest(t.id)}}},[r("i",{staticClass:"fa fa-thumbs-o-up"})]),r("button",{attrs:{id:"voteBtnDown",disabled:e.waitingForResponseDownVote},on:{click:function(r){return e.delayDownVoteRequest(t.id)}}},[r("i",{staticClass:"fa fa-thumbs-o-down"})])])])])})),0):e._e()])},O=[],F="https://www.forverkliga.se/JavaScript/api/api-snippets.php?",D={name:"latestsnippet",props:{modelFromHeader:Object()},data:function(){return{waitingForDeleteResponse:!1,errorOccurredDelete:!1,waitingForResponseUpvote:!1,errorOccurredUpvote:!1,waitingForResponseDownVote:!1,errorOccurredDownVote:!1,waitingForResponseReport:!1,errorOccurredReport:!1}},methods:{delayReportRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForResponseReport=!0,t.errorOccurredReport=!1,r.t0=setTimeout,r.next=5,t.reportSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},reportSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(F,{report:"report",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredReport=!0,t.$emit("btnError");case 12:return r.prev=12,t.waitingForResponseReport=!1,t.$emit("increment"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()},delayDeleteRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForDeleteResponse=!0,t.errorOccurredDelete=!1,r.t0=setTimeout,r.next=5,t.deleteSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},deleteSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(F,{delete:"delete",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredDelete=!0,t.$emit("btnError");case 12:return r.prev=12,t.waitingForDeleteResponse=!1,t.$emit("increment"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()},delayUpvoteRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForResponseUpvote=!0,t.errorOccurredUpvote=!1,r.t0=setTimeout,r.next=5,t.upvoteSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},upvoteSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(F,{upvote:"upvote",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredUpvote=!0,t.$emit("btnError");case 12:return r.prev=12,t.waitingForResponseUpvote=!1,t.$emit("increment"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()},delayDownVoteRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForResponseDownVote=!0,t.errorOccurredDownVote=!1,r.t0=setTimeout,r.next=5,t.downVoteSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},downVoteSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(F,{downvote:"downvote",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredDownVote=!0,t.$emit("btnError");case 12:return r.prev=12,t.waitingForResponseDownVote=!1,t.$emit("increment"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()}},computed:{}},A=D,y=(r("0491"),Object(g["a"])(A,x,O,!1,null,"21663c96",null)),S=y.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"reportedsnippets"},[e.modelReportedFromHeader?r("div",{staticClass:"modelPlace"},e._l(e.modelReportedFromHeader.allContent,(function(t){return r("div",{key:t.id,staticClass:"card"},[r("div",{staticClass:"spaceBetweenInterface"},[r("span",[e._v("Title: "),r("span",{staticClass:"apiInfoColor"},[e._v(e._s(t.title))])]),r("span",[e._v("Upload date: "),r("span",{staticClass:"apiInfoColor"},[e._v(e._s(t.upload_dt))])]),r("span",[e._v("Rating: "),r("span",{staticClass:"apiInfoColor"},[e._v(e._s(t.score))])])]),r("div",{staticClass:"snippet"},[e._v(e._s(t.content))]),r("div",{staticClass:"spaceBetweenInterface"},[r("p",[r("button",{attrs:{id:"unReportBtn",disabled:e.waitingForResponseUnReport},on:{click:function(r){return e.delayUnReportRequest(t.id)}}},[e._v("Unreport")]),r("button",{attrs:{id:"deleteBtn",disabled:e.waitingForDeleteResponse},on:{click:function(r){return e.delayDeleteRequest(t.id)}}},[e._v("Delete")])]),r("p",[r("button",{attrs:{id:"voteBtnUp",disabled:e.waitingForResponseUpvote},on:{click:function(r){return e.delayUpvoteRequest(t.id)}}},[r("i",{staticClass:"fa fa-thumbs-o-up"})]),r("button",{attrs:{id:"voteBtnDown",disabled:e.waitingForResponseDownVote},on:{click:function(r){return e.delayDownVoteRequest(t.id)}}},[r("i",{staticClass:"fa fa-thumbs-o-down"})])])])])})),0):e._e()])},C=[],U="https://www.forverkliga.se/JavaScript/api/api-snippets.php?",T={props:{modelReportedFromHeader:Object()},data:function(){return{waitingForDeleteResponse:!1,errorOccurredDelete:!1,waitingForResponseUpvote:!1,errorOccurredUpvote:!1,waitingForResponseDownVote:!1,errorOccurredDownVote:!1,waitingForResponseReport:!1,errorOccurredReport:!1,waitingForResponseUnReport:!1,errorOccurredUnReport:!1}},methods:{delayUnReportRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForResponseUnReport=!0,t.errorOccurredReport=!1,r.t0=setTimeout,r.next=5,t.UnReportSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},UnReportSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(U,{unreport:"unreport",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredUnReport=!0,t.$emit("btnErrorR");case 12:return r.prev=12,t.waitingForResponseUnReport=!1,t.$emit("triggerFromReport"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()},delayDeleteRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForDeleteResponse=!0,t.errorOccurredDelete=!1,r.t0=setTimeout,r.next=5,t.deleteSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},deleteSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(U,{delete:"delete",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredDelete=!0,t.$emit("btnErrorR");case 12:return r.prev=12,t.waitingForDeleteResponse=!1,t.$emit("triggerFromReport"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()},delayUpvoteRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForResponseUpvote=!0,t.errorOccurredUpvote=!1,r.t0=setTimeout,r.next=5,t.upvoteSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},upvoteSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(U,{upvote:"upvote",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredUpvote=!0,t.$emit("btnErrorR");case 12:return r.prev=12,t.waitingForResponseUpvote=!1,t.$emit("triggerFromReport"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()},delayDownVoteRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForResponseDownVote=!0,t.errorOccurredDownVote=!1,r.t0=setTimeout,r.next=5,t.downVoteSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},downVoteSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(U,{downvote:"downvote",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredDownVote=!0,t.$emit("btnErrorR");case 12:return r.prev=12,t.waitingForResponseDownVote=!1,t.$emit("triggerFromReport"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()}},computed:{}},E=T,B=(r("90e8"),Object(g["a"])(E,k,C,!1,null,"3f1c24dd",null)),j=B.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"reportedsnippets"},[e.modelBestFromHeader?r("div",{staticClass:"modelPlace"},e._l(e.modelBestFromHeader.allContent,(function(t){return r("div",{key:t.id,staticClass:"card"},[r("div",{staticClass:"spaceBetweenInterface"},[r("span",[e._v("Title: "),r("span",{staticClass:"apiInfoColor"},[e._v(e._s(t.title))])]),r("span",[e._v("Upload date: "),r("span",{staticClass:"apiInfoColor"},[e._v(e._s(t.upload_dt))])]),r("span",[e._v("Rating: "),r("span",{staticClass:"apiInfoColor"},[e._v(e._s(t.score))])])]),r("div",{staticClass:"snippet"},[e._v(e._s(t.content))]),r("div",{staticClass:"spaceBetweenInterface"},[r("p",[r("button",{attrs:{id:"reportBtn",disabled:e.waitingForResponseReport},on:{click:function(r){return e.delayReportRequest(t.id)}}},[e._v("Report")]),r("button",{attrs:{id:"deleteBtn",disabled:e.waitingForDeleteResponse},on:{click:function(r){return e.delayDeleteRequest(t.id)}}},[e._v("Delete")])]),r("p",[r("button",{attrs:{id:"voteBtnUp",disabled:e.waitingForResponseUpvote},on:{click:function(r){return e.delayUpvoteRequest(t.id)}}},[r("i",{staticClass:"fa fa-thumbs-o-up"})]),r("button",{attrs:{id:"voteBtnDown",disabled:e.waitingForResponseDownVote},on:{click:function(r){return e.delayDownVoteRequest(t.id)}}},[r("i",{staticClass:"fa fa-thumbs-o-down"})])])])])})),0):e._e()])},q=[],I="https://www.forverkliga.se/JavaScript/api/api-snippets.php?",P={props:{modelBestFromHeader:Object()},data:function(){return{waitingForDeleteResponse:!1,errorOccurredDelete:!1,waitingForResponseUpvote:!1,errorOccurredUpvote:!1,waitingForResponseDownVote:!1,errorOccurredDownVote:!1,waitingForResponseReport:!1,errorOccurredReport:!1}},methods:{delayReportRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForResponseReport=!0,t.errorOccurredReport=!1,r.t0=setTimeout,r.next=5,t.reportSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},reportSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(I,{report:"report",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredReport=!0,t.$emit("btnErrorB");case 12:return r.prev=12,t.waitingForResponseReport=!1,t.$emit("triggerFromBest"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()},delayDeleteRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForDeleteResponse=!0,t.errorOccurredDelete=!1,r.t0=setTimeout,r.next=5,t.deleteSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},deleteSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(I,{delete:"delete",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredDelete=!0,t.$emit("btnErrorB");case 12:return r.prev=12,t.waitingForDeleteResponse=!1,t.$emit("triggerFromBest"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()},delayUpvoteRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForResponseUpvote=!0,t.errorOccurredUpvote=!1,r.t0=setTimeout,r.next=5,t.upvoteSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},upvoteSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(I,{upvote:"upvote",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredUpvote=!0,t.$emit("btnErrorB");case 12:return r.prev=12,t.waitingForResponseUpvote=!1,t.$emit("triggerFromBest"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()},delayDownVoteRequest:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.waitingForResponseDownVote=!0,t.errorOccurredDownVote=!1,r.t0=setTimeout,r.next=5,t.downVoteSnippetAxios(e);case 5:r.t1=r.sent,(0,r.t0)(r.t1);case 7:case"end":return r.stop()}}),r)})))()},downVoteSnippetAxios:function(e){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.axios.post(I,{downvote:"downvote",id:e});case 3:n=r.sent,console.log(n),r.next=12;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0),t.errorOccurredDownVote=!0,t.$emit("btnErrorB");case 12:return r.prev=12,t.waitingForResponseDownVote=!1,t.$emit("triggerFromBest"),r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,7,12,16]])})))()}},computed:{}},_=P,z=(r("ed78"),Object(g["a"])(_,V,q,!1,null,"26f065f8",null)),K=z.exports,H="https://www.forverkliga.se/JavaScript/api/api-snippets.php?",N={name:"header-component",components:{addsnippet:b,latestsnippet:S,reportedsnippets:j,bestsnippets:K},props:{},data:function(){return{sorteringsNyckel:"namn",show:"",latest:"latest",reported:"reported",best:"best",model:null,modelReported:null,modelBest:null,waitingForResponse:!1,errorOccurred:!1,errorOccurredReported:!1,waitingForResponseReported:!1,errorOccurredBest:!1,waitingForResponseBest:!1}},methods:{errorFromButton:function(){this.errorOccurred=!0},noErrorFromButton:function(){this.errorOccurred=!1},delayRequest:function(){this.waitingForResponse=!0,this.errorOccurred=!1,this.show="latestShow",this.sorteringsNyckel="latest",setTimeout(this.sendLatestRequest)},sendLatestRequest:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get(H,{params:{latest:e.latest}});case 3:r=t.sent,console.log("sendRequestLatest",r.data),e.model={allContent:r.data},t.next=13;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("Something went wrong",t.t0),e.model=null,e.errorOccurred=!0;case 13:return t.prev=13,e.waitingForResponse=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,8,13,16]])})))()},delayRequestReported:function(){this.waitingForResponseReported=!0,this.errorOccurredReported=!1,this.show="reportedShow",this.sorteringsNyckel="reported",setTimeout(this.sendReportedRequest)},sendReportedRequest:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get(H,{params:{reported:e.reported}});case 3:r=t.sent,console.log("sendRequestReported",r.data),e.modelReported={allContent:r.data},t.next=13;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("Something went wrong",t.t0),e.modelReported=null,e.errorOccurredReported=!0;case 13:return t.prev=13,e.waitingForResponseReported=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,8,13,16]])})))()},delayRequestBest:function(){this.waitingForResponseBest=!0,this.errorOccurredBest=!1,this.show="bestShow",this.sorteringsNyckel="best",setTimeout(this.sendBestRequest)},sendBestRequest:function(){var e=this;return Object(d["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$http.get(H,{params:{best:e.best}});case 3:r=t.sent,console.log("sendRequestBest",r.data),e.modelBest={allContent:r.data},t.next=13;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log("Something went wrong",t.t0),e.modelBest=null,e.errorOccurredBest=!0;case 13:return t.prev=13,e.waitingForResponseBest=!1,t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,8,13,16]])})))()}},computed:{}},Q=N,M=(r("99ba"),Object(g["a"])(Q,u,l,!1,null,"1b7267a7",null)),Y=M.exports,Z={name:"App",components:{headerComponent:Y},data:function(){return{}},methods:{},computed:{}},J=Z,X=(r("034f"),Object(g["a"])(J,c,p,!1,null,null,null)),W=X.exports;n["a"].config.productionTip=!1,n["a"].use(i.a,s.a),new n["a"]({render:function(e){return e(W)}}).$mount("#app")},"5d70":function(e,t){e.exports="data:image/png;base64,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"},"630a":function(e,t,r){"use strict";var n=r("e1b4"),o=r.n(n);o.a},7712:function(e,t,r){},"7a52":function(e,t,r){},"85ec":function(e,t,r){},"90e8":function(e,t,r){"use strict";var n=r("7712"),o=r.n(n);o.a},"99ba":function(e,t,r){"use strict";var n=r("c97b"),o=r.n(n);o.a},b21b:function(e,t,r){},c97b:function(e,t,r){},e1b4:function(e,t,r){},ed78:function(e,t,r){"use strict";var n=r("7a52"),o=r.n(n);o.a}});
//# sourceMappingURL=app.13082cb9.js.map