(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["qxmap"],{1580:function(t,s,e){},"2e0c":function(t,s,e){"use strict";var i=e("ceab"),n=e.n(i);n.a},"4f97":function(t,s,e){},ce96:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"qxmapBox"},[e("h1",[t._v("全国迁徙热门城市")]),e("pre",[e("div",{staticClass:"timeBox"},[t._v(t._s(t.time)+"更新  来自百度地图")])]),e("sw",{attrs:{list:["热门迁入地","热门迁出地"]},on:{change:t.change}}),e("mylist",{attrs:{data:t.list}})],1)},n=[],a=(e("ac1f"),e("5319"),e("365c")),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"switchBox",on:{click:t.move}},[t._m(0),e("div",{staticClass:"tabBar",style:{transform:"translateX("+t.x+"px)"}},[t._v(t._s(t.list[t.index]))])])},l=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("热门迁入地")]),e("li",[t._v("热门迁出地")])])}],o={name:"XXX",props:["list"],data:function(){return{x:0,index:0}},methods:{move:function(){this.x?(this.x=0,this.index=0):(this.x=324,this.index=1),this.$emit("change",this.index)}},components:{}},r=o,u=(e("e49a"),e("2877")),m=Object(u["a"])(r,c,l,!1,null,null,null),v=m.exports,d=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"list_box"},[e("ul",{staticClass:"til"},[e("li",{staticClass:"srot"},[t._v("排名")]),e("li",{staticClass:"name"},[t._v("城市名称")]),e("li",{staticClass:"percent"},[t._v(t._s(t.data.myIndex?"迁入":"迁出")+"比例")])]),e("ul",{staticClass:"body"},t._l(t.data,(function(s,i){return e("li",{key:i},[e("div",{staticClass:"srot"},[t._v(t._s(i+1))]),e("div",{staticClass:"name"},[t._v(t._s(s.city_name)+" "),e("span",[t._v("("+t._s(s.province_name)+")")])]),e("div",{staticClass:"percent"},[t._v(t._s(s.value)+"%")])])})),0)])},_=[],f={name:"mylist",props:["data"],data:function(){return{}},components:{}},h=f,p=(e("e22a"),Object(u["a"])(h,d,_,!1,null,"01bf4c26",null)),x=p.exports,C={name:"qxmap",data:function(){return{moveInList:[],moveOutList:[],list:[],time:""}},created:function(){var t=this;Object(a["d"])().then((function(s){console.log(s),t.list=t.moveInList=s.result.moveInList||[],t.moveOutList=s.result.moveOutList,t.time=s.result.time.replace(/(\d{4})(\d{2})(\d{2})/,"$1年$2月$3日")}))},methods:{change:function(t){this.list=t?this.moveOutList:this.moveInList,this.list.myIndex=t}},components:{sw:v,mylist:x}},b=C,w=(e("2e0c"),Object(u["a"])(b,i,n,!1,null,null,null));s["default"]=w.exports},ceab:function(t,s,e){},e22a:function(t,s,e){"use strict";var i=e("1580"),n=e.n(i);n.a},e49a:function(t,s,e){"use strict";var i=e("4f97"),n=e.n(i);n.a}}]);
//# sourceMappingURL=qxmap.91c0014d.js.map