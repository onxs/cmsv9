webpackJsonp([89],{Cizx:function(n,t,a){"use strict";function e(n){a("IE0f")}Object.defineProperty(t,"__esModule",{value:!0});var s=a("lcoF"),i=a("2sCs"),l=a.n(i),c={mixins:[s.a],data:function(){return{params:{channelId:"",startDate:""},parentId:[],num:0,int:"",channelList:[{hasChild:!0,id:"",name:"根栏目"}],channelParams:{parentId:"",https:"",all:""}}},methods:{sub:function(){var n=this;this.loading=!0;var t=this.parentId[this.parentId.length-1];this.params.channelId=t,console.log(this.params),l.a.post(this.$api.staticContent,this.params).then(function(t){"200"===t.code&&(n.loading=!1,n.successMessage("生成成功"))}).catch(function(t){n.loading=!1})}},created:function(){var n=this;this.$http.post(this.$api.fullTextSearchChannelList,{hasContentOnly:!1}).then(function(t){n.channelList=n.channelList.concat(t.body),n.loading=!1}).catch(function(t){n.loading=!1})},beforeRouteLeave:function(n,t,a){clearInterval(this.int),a()}},r=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"cms-body"},[a("el-form",{ref:"form",staticClass:"cms-form",attrs:{"label-width":"162px"}},[a("el-form-item",{staticClass:"flex-50",attrs:{label:"栏目"}},[a("el-cascader",{staticClass:"cms-width",attrs:{props:{value:"id",label:"name",children:"child"},options:n.channelList,"change-on-select":"",filterable:""},model:{value:n.parentId,callback:function(t){n.parentId=t},expression:"parentId"}})],1),n._v(" "),a("el-form-item",{staticClass:"flex-100",attrs:{label:"开始时间"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:n.params.startDate,callback:function(t){n.$set(n.params,"startDate",t)},expression:"params.startDate"}})],1)],1),n._v(" "),a("div",{staticClass:"cms-list-footer "},[a("div",{staticClass:"cms-left",staticStyle:{"margin-left":"185px"}},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/statically/contentStatic",expression:"'/statically/contentStatic'"}],attrs:{type:"primary"},on:{click:n.sub}},[n._v("生成内容页HTML")])],1)])],1)},o=[],d={render:r,staticRenderFns:o},p=d,h=a("8AGX"),f=e,m=h(c,p,!1,f,null,null);t.default=m.exports},IE0f:function(n,t,a){var e=a("N/fs");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("8bSs")("3366cdf0",e,!0)},"N/fs":function(n,t,a){t=n.exports=a("l95E")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});