/**
 * Created by shipeng on 5/14/2017.
 */
define("kg/container/6.0.4/index",["util","kg/component/6.2.3/control","node"],function(e,n,t){var r,i=e("util"),d=e("kg/component/6.2.3/control"),l=e("node");r=function(e){function n(e){var n=this,t=e.component,r=n.get("children"),i=e.index;r.splice(i,0,t),r=n.get("children"),t=r[i],t.setInternal&&t.setInternal("parent",n),n.get("rendered")&&n.renderChild(i),n.fire("afterAddChild",{component:t,index:i})}function t(e){var n=this,t=e.component,r=e.destroy,i=n.get("children"),d=e.index;-1!==d&&i.splice(d,1),t.setInternal&&t.setInternal("parent",null),t.destroy?t.destroy(r):t.isNode&&r&&t.remove(),n.fire("afterRemoveChild",{component:t,index:d})}var r=i,o=d,h=o.Manager,a=l;return e=o.extend({isContainer:!0,initializer:function(){var e=this,r=e.get("prefixCls"),i=e.get("defaultChildCfg");e.publish("beforeAddChild",{defaultFn:n,defaultTargetOnly:!0}),e.publish("beforeRemoveChild",{defaultFn:t,defaultTargetOnly:!0}),i.prefixCls=i.prefixCls||r},decorateDom:function(){var e=this,n=e.getChildrenContainerEl(),t=e.get("defaultChildCfg"),i=t.prefixCls,d=t.xclass,l=[],o=n.children();o.each(function(n){n=a(n);var o=e.getComponentConstructorByNode(i,n)||d&&h.getConstructorByXClass(d);o?l.push(new o(r.merge(t,{srcNode:n}))):l.push(n)}),e.set("children",l)},createDom:function(){this.createChildren()},renderUI:function(){this.renderChildren()},renderChildren:function(){var e,n=this,t=n.get("children");for(e=0;e<t.length;e++)n.renderChild(e)},createChildren:function(){var e,n=this,t=n.get("children");for(e=0;e<t.length;e++)n.createChild(e)},addChild:function(e,n){var t=this,r=t.get("children");return void 0===n&&(n=r.length),t.fire("beforeAddChild",{component:e,index:n}),r[n]},renderChild:function(e){var n=this,t=n.get("children"),r=n.createChild(e);r.isNode||r.render(),n.fire("afterRenderChild",{component:t[e],index:e})},createChild:function(e){var n,t,r,i,d,l=this,o=l.get("children");return n=o[e],d=l.getChildrenContainerEl(),r=d[0],t=r.children[e]||null,n.isNode?(i=n.isNode?n[0]:n.el,i.parentNode!==r&&r.insertBefore(i,t)):n.get("rendered")?(i=n.isNode?n[0]:n.el,i.parentNode!==r&&r.insertBefore(i,t)):(t?n.set("elBefore",t):n.set("render",d),n.create()),l.fire("afterCreateChild",{component:n,index:e}),n},addChildren:function(e){var n,t=e.length;for(n=0;t>n;n++)this.addChild(e[n])},removeChild:function(e,n){void 0===n&&(n=!0),this.fire("beforeRemoveChild",{component:e,index:r.indexOf(e,this.get("children")),destroy:n})},removeChildren:function(e){var n,t=this,r=[].concat(t.get("children"));for(n=0;n<r.length;n++)t.removeChild(r[n],!1);return e!==!1&&t.$el&&(t.getChildrenContainerEl()[0].innerHTML=""),t},getChildAt:function(e){var n=this.get("children");return n[e]||null},getChildrenContainerEl:function(){return this.$el},destructor:function(e){this.removeChildren(e)}},{ATTRS:{children:{valueFn:function(){return[]},getter:function(e){var n,t,i=null,d=this;for(n=0;n<e.length;n++)t=e[n],t.isControl||t.isNode||(i=i||d.get("defaultChildCfg"),r.mix(t,i,!1),e[n]=this.createComponent(t));return e},setter:function(e){var n,t;for(n=0;n<e.length;n++)t=e[n],t.isControl&&t.setInternal("parent",this)}},defaultChildCfg:{valueFn:function(){return{}}}},name:"container"})}(),t.exports=r});define("kg/component/6.2.3/extension/delegate-children",["kg/component/6.2.3/control","event"],function(e,n,t){function a(e){if(e.target===this){var n=e.component,t=n.$el;t.addClass(this.__childClsTag)}}function o(e){if(e.target===this){var n=e.component,t=n.$el;t&&t.removeClass(this.__childClsTag)}}function r(){var e=this;e.__childClsTag="ks-component-child"+c++,e.on("afterRenderChild",a,e).on("afterRemoveChild",o,e)}var s=e("kg/component/6.2.3/control").Manager,i=(e("event"),"ksGestureStart"),l="ksGestureEnd",d="tap";KISSY&&parseFloat(KISSY.version)<6&&(i="KSPointerDown",l="KSPointerUp");var c=1;r.prototype={handleChildrenEvents:function(e){if(!this.get("disabled")){var n=this.getOwnerControl(e);if(n&&!n.get("disabled"))switch(e.type){case i:n.handleMouseDown(e);break;case l:n.handleMouseUp(e);break;case d:n.handleClick(e);break;case"mouseenter":n.handleMouseEnter(e);break;case"mouseleave":n.handleMouseLeave(e);break;case"contextmenu":n.handleContextMenu(e);break;default:throw new Error(e.type+" unhandled!")}}},__bindUI:function(){var e=this,n=i+" "+l+" "+d;n+=" mouseenter mouseleave contextmenu",e.$el.delegate(n,"."+e.__childClsTag,e.handleChildrenEvents,e)},getOwnerControl:function(e){return s.getComponent(e.currentTarget.id)}},t.exports=r});define("kg/component/6.2.3/extension/content-box/xtpl/view-render",["kg/component/6.2.3/extension/content-box/xtpl/view.xtpl"],function(n,e,t){t.exports=n("kg/component/6.2.3/extension/content-box/xtpl/view.xtpl")});