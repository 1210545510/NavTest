/**
 * Created by shipeng on 5/14/2017.
 */
KISSY.add("tb-mod/world-fp-nav/0.3.2/dynamic-xtpl",function(e,a,t,n){var o=n.exports=function(e){function a(e,a,t){var o=e.data,r=e.affix;a.data+=' \n  <div class="content" style=" top:-',l.line=9;var i=(n=r.imgHeight)!==t?n:(n=o.imgHeight)!==t?n:e.resolveLooseUp(["imgHeight"]);a=a.writeEscaped(i),a.data+='px;">\n    <a class="topBanner topBanner-lm" href="',l.line=10;var s=(n=r.href)!==t?n:(n=o.href)!==t?n:e.resolveLooseUp(["href"]);a=a.writeEscaped(s),a.data+='" target="_blank" alt="';var d=(n=r.text)!==t?n:(n=o.text)!==t?n:e.resolveLooseUp(["text"]);a=a.writeEscaped(d),a.data+='" style=\'background:url("';var g=(n=r.imgBig)!==t?n:(n=o.imgBig)!==t?n:e.resolveLooseUp(["imgBig"]);a=a.writeEscaped(g),a.data+='") top center no-repeat; height:';var p=(n=r.imgBigHeight)!==t?n:(n=o.imgBigHeight)!==t?n:e.resolveLooseUp(["imgBigHeight"]);a=a.writeEscaped(p),a.data+="px;' data-duration=\"";var c=(n=r.duration)!==t?n:(n=o.duration)!==t?n:e.resolveLooseUp(["duration"]);return a=a.writeEscaped(c),a.data+='">\n    </a>\n    <div class="close-btn">x</div>\n  </div>\n  ',a}function t(e,t,r){var i=e.data,s=e.affix;t.data+='\n<div style="background-color:',l.line=5;var d=(n=s.bgColor)!==r?n:(n=i.bgColor)!==r?n:e.resolveLooseUp(["bgColor"]);t=t.writeEscaped(d),t.data+=';" data-area="';var g=(n=s.hng)!==r?n:(n=i.hng)!==r?n:e.resolveLooseUp(["hng"]);t=t.writeEscaped(g),t.data+='" data-spm="topbanner_';var p=(n=s.hng)!==r?n:(n=i.hng)!==r?n:e.resolveLooseUp(["hng"]);t=t.writeEscaped(p),t.data+='"> \n  <a class="topBanner topBanner-ori" href="',l.line=6;var c=(n=s.href)!==r?n:(n=i.href)!==r?n:e.resolveLooseUp(["href"]);t=t.writeEscaped(c),t.data+='" target="_blank" alt="';var m=(n=s.text)!==r?n:(n=i.text)!==r?n:e.resolveLooseUp(["text"]);t=t.writeEscaped(m),t.data+='" style=\'background:url("';var f=(n=s.img)!==r?n:(n=i.img)!==r?n:e.resolveLooseUp(["img"]);t=t.writeEscaped(f),t.data+='") top center no-repeat; height:';var v=(n=s.imgHeight)!==r?n:(n=i.imgHeight)!==r?n:e.resolveLooseUp(["imgHeight"]);t=t.writeEscaped(v),t.data+="px;'>\n  </a>\n  ",l.line=8,l.line=8;var u=(n=s.isNeedAnim)!==r?n:(n=i.isNeedAnim)!==r?n:e.resolveLooseUp(["isNeedAnim"]);return t=h.call(o,e,{params:[u],fn:a},t),t.data+="\n</div>\n",t}{var n,o=this,r=o.root,i=o.buffer,s=o.scope,l=(o.runtime,o.name,o.pos),d=s.data,g=s.affix,p=r.nativeCommands,c=r.utils,m=(c.callFn,c.callDataFn,c.callCommand,p.range,p["void"],p.foreach,p.forin,p.each),h=(p["with"],p["if"]);p.set,p.include,p.parse,p.extend,p.block,p.macro,p["debugger"]}i.data+="\n\n\n",l.line=4,l.line=4;var f=(n=g.topbanner)!==e?n:(n=d.topbanner)!==e?n:s.resolveLooseUp(["topbanner"]);return i=m.call(o,s,{params:[f],fn:t},i),i.data+="\n\n\n\n",i};o.TPL_NAME=n.id||n.name}),KISSY.add("tb-mod/world-fp-nav/0.3.2/index",["node","json","tms/xtemplate","cookie","./dynamic-xtpl"],function(e,a){function t(){return g&&3==g.split("|").length?g.split("|")[0]:"XX"}function n(){this.init.apply(this,arguments)}var o=a("node"),r=a("json"),i=a("tms/xtemplate"),s=a("cookie"),l=(o.all,a("./dynamic-xtpl")),d=new i(l),g=s.get("hng"),p=t();return p="CN"===p?"XX":p,n.prototype={init:function(a,t){function n(e,a,t){var n=null;if(!a||"[object Array]"!==Object.prototype.toString.call(t)||!t.length)return!1;if(e){for(var o=0;o<t.length;o++)if((t[o].isShow===!0||"true"===t[o].isShow)&&"XX"===t[o].hng){n=t[o];break}}else for(var o=0;o<t.length;o++)if((t[o].isShow===!0||"true"===t[o].isShow)&&a===t[o].hng){n=t[o];break}return n}var o=this,i=a,s=r.parse(i.one(".topBanner_schema").html()),l=s.config[0].isShow===!0||"true"===s.config[0].isShow,g=s.config[0].useXX===!0||"true"===s.config[0].useXX,c=s.config[0].isAnim===!0||"true"===s.config[0].isAnim,m=s.config[0].animID,h="true"===localStorage.getItem("topBanner-lm-hasAnimed-"+p+m),f=c&&!h,v=[];if(v[0]=n(g,p,s.topBanner),v[0]&&v[0].headImage){var u='<div data-spm="headerlogo_'+v[0].hng+'"><a class="doodle-logo" href="'+v[0].headImageHref+'" target="_blank"><img src="'+v[0].headImage+'"/></a></div> ';i.one(".sea-header-logo").html(u)}else{var u='<a class="sea-header-logo-lnk" href="//world.taobao.com" target="_blank">&#xe60e;</a>';i.one(".sea-header-logo").html(u),o.setSiteName()}if(l&&v[0]){i.one(".topBanner-outer-wrap").html(d.render(e.mix({topbanner:v},{isNeedAnim:f})));var b=i.one(".topBanner-lm"),w=i.one(".topBanner-ori"),x=i.one(".close-btn"),S=v[0].imgBig;if(f&&S){localStorage.setItem("topBanner-lm-hasAnimed-"+p+m,"true");var B=b.attr("data-duration");setTimeout(function(){o.anim(b,w,x)},1e3*parseInt(B)||5e3),x.on("click",function(e){o.anim(b,w,x),e.stopPropagation()})}else x&&x.hide(),w.css({opacity:1})}},anim:function(e,a,t){e.animate({opacity:0,height:0},{duration:.3,complete:function(){t.hide(),a.animate({opacity:1},{duration:.3})}})},setSiteName:function(){var a={CN:"World",TW:"Taiwan",HK:"Hongkong",MO:"Macao",SG:"Singapore",MY:"Malaysia",US:"USA",CA:"Canada",AU:"Australia",NZ:"New Zealand",JP:"Japan",KR:"Korea",XX:"World"},t=a[p];if(t&&e.one("#J_SeaHeader .sea-header-logo")){var n=e.one("<span>").html(t).addClass("nation-str");e.one("#J_SeaHeader .sea-header-logo").append(n)}},loadData:function(e){},bindEvent:function(){}},n});