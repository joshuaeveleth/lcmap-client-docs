!function(){if("ontouchstart"in window){var e,t,i,n,s,o,r={};e=function(e,t){return Math.abs(e[0]-t[0])>5||Math.abs(e[1]-t[1])>5},t=function(e){this.startXY=[e.touches[0].clientX,e.touches[0].clientY],this.threshold=!1},i=function(t){return this.threshold?!1:void(this.threshold=e(this.startXY,[t.touches[0].clientX,t.touches[0].clientY]))},n=function(t){if(!this.threshold&&!e(this.startXY,[t.changedTouches[0].clientX,t.changedTouches[0].clientY])){var i=t.changedTouches[0],n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.simulated=!0,t.target.dispatchEvent(n)}},s=function(e){var t=Date.now(),i=t-r.time,n=e.clientX,s=e.clientY,a=[Math.abs(r.x-n),Math.abs(r.y-s)],c=o(e.target,"A")||e.target,h=c.nodeName,l="A"===h,u=window.navigator.standalone&&l&&e.target.getAttribute("href");return r.time=t,r.x=n,r.y=s,(!e.simulated&&(500>i||1500>i&&a[0]<50&&a[1]<50)||u)&&(e.preventDefault(),e.stopPropagation(),!u)?!1:(u&&(window.location=c.getAttribute("href")),void(c&&c.classList&&(c.classList.add("energize-focus"),window.setTimeout(function(){c.classList.remove("energize-focus")},150))))},o=function(e,t){for(var i=e;i!==document.body;){if(!i||i.nodeName===t)return i;i=i.parentNode}return null},document.addEventListener("touchstart",t,!1),document.addEventListener("touchmove",i,!1),document.addEventListener("touchend",n,!1),document.addEventListener("click",s,!0)}}(),/*
Copyright 2008-2013 Concur Technologies, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may
not use this file except in compliance with the License. You may obtain
a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations
under the License.
*/
function(e){"use strict";function t(t){if(t&&""!==t){$(".lang-selector a").removeClass("active"),$(".lang-selector a[data-language-name='"+t+"']").addClass("active");for(var i=0;i<c.length;i++)$(".highlight."+c[i]).hide();$(".highlight."+t).show(),e.toc.calculateHeights(),$(window.location.hash).get(0)&&$(window.location.hash).get(0).scrollIntoView(!0)}}function i(e){return"string"!=typeof e?{}:(e=e.trim().replace(/^(\?|#|&)/,""),e?e.split("&").reduce(function(e,t){var i=t.replace(/\+/g," ").split("="),n=i[0],s=i[1];return n=decodeURIComponent(n),s=void 0===s?null:decodeURIComponent(s),e.hasOwnProperty(n)?Array.isArray(e[n])?e[n].push(s):e[n]=[e[n],s]:e[n]=s,e},{}):{})}function n(e){return e?Object.keys(e).sort().map(function(t){var i=e[t];return Array.isArray(i)?i.sort().map(function(e){return encodeURIComponent(t)+"="+encodeURIComponent(e)}).join("&"):encodeURIComponent(t)+"="+encodeURIComponent(i)}).join("&"):""}function s(){if(location.search.length>=1){var e=i(location.search).language;if(e)return e;if(-1!=jQuery.inArray(location.search.substr(1),c))return location.search.substr(1)}return!1}function o(e){var t=i(location.search);return t.language?(t.language=e,n(t)):e}function r(e){if(history){var t=window.location.hash;t&&(t=t.replace(/^#+/,"")),history.pushState({},"","?"+o(e)+"#"+t),localStorage.setItem("language",e)}}function a(e){var i=localStorage.getItem("language");c=e;var n=s();n?(t(n),localStorage.setItem("language",n)):t(null!==i&&-1!=jQuery.inArray(i,c)?i:c[0])}var c=[];e.setupLanguages=a,e.activateLanguage=t,$(function(){$(".lang-selector a").on("click",function(){var e=$(this).data("language-name");return r(e),t(e),!1}),window.onpopstate=function(){t(s())}})}(window),/*! jQuery UI - v1.11.3 - 2015-02-12
 * http://jqueryui.com
 * Includes: widget.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){/*!
   * jQuery UI Widget 1.11.3
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/jQuery.widget/
   */
var t=0,i=Array.prototype.slice;e.cleanData=function(t){return function(i){var n,s,o;for(o=0;null!=(s=i[o]);o++)try{n=e._data(s,"events"),n&&n.remove&&e(s).triggerHandler("remove")}catch(r){}t(i)}}(e.cleanData),e.widget=function(t,i,n){var s,o,r,a,c={},h=t.split(".")[0];return t=t.split(".")[1],s=h+"-"+t,n||(n=i,i=e.Widget),e.expr[":"][s.toLowerCase()]=function(t){return!!e.data(t,s)},e[h]=e[h]||{},o=e[h][t],r=e[h][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new r(e,t)},e.extend(r,o,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),a=new i,a.options=e.widget.extend({},a.options),e.each(n,function(t,n){return e.isFunction(n)?void(c[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},s=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,o=this._superApply;return this._super=e,this._superApply=s,t=n.apply(this,arguments),this._super=i,this._superApply=o,t}}()):void(c[t]=n)}),r.prototype=e.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix||t:t},c,{constructor:r,namespace:h,widgetName:t,widgetFullName:s}),o?(e.each(o._childConstructors,function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,r,i._proto)}),delete o._childConstructors):i._childConstructors.push(r),e.widget.bridge(t,r),r},e.widget.extend=function(t){for(var n,s,o=i.call(arguments,1),r=0,a=o.length;a>r;r++)for(n in o[r])s=o[r][n],o[r].hasOwnProperty(n)&&void 0!==s&&(e.isPlainObject(s)?t[n]=e.isPlainObject(t[n])?e.widget.extend({},t[n],s):e.widget.extend({},s):t[n]=s);return t},e.widget.bridge=function(t,n){var s=n.prototype.widgetFullName||t;e.fn[t]=function(o){var r="string"==typeof o,a=i.call(arguments,1),c=this;return r?this.each(function(){var i,n=e.data(this,s);return"instance"===o?(c=n,!1):n?e.isFunction(n[o])&&"_"!==o.charAt(0)?(i=n[o].apply(n,a),i!==n&&void 0!==i?(c=i&&i.jquery?c.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+o+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+o+"'")}):(a.length&&(o=e.widget.extend.apply(null,[o].concat(a))),this.each(function(){var t=e.data(this,s);t?(t.option(o||{}),t._init&&t._init()):e.data(this,s,new n(o,this))})),c}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var n,s,o,r=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(r={},n=t.split("."),t=n.shift(),n.length){for(s=r[t]=e.widget.extend({},this.options[t]),o=0;o<n.length-1;o++)s[n[o]]=s[n[o]]||{},s=s[n[o]];if(t=n.pop(),1===arguments.length)return void 0===s[t]?null:s[t];s[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];r[t]=i}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,n){var s,o=this;"boolean"!=typeof t&&(n=i,i=t,t=!1),n?(i=s=e(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,s=this.widget()),e.each(n,function(n,r){function a(){return t||o.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof r?o[r]:r).apply(o,arguments):void 0}"string"!=typeof r&&(a.guid=r.guid=r.guid||a.guid||e.guid++);var c=n.match(/^([\w:-]*)\s*(.*)$/),h=c[1]+o.eventNamespace,l=c[2];l?s.delegate(l,h,a):i.bind(h,a)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?n[e]:e).apply(n,arguments)}var n=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var s,o,r=this.options[t];if(n=n||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(s in o)s in i||(i[s]=o[s]);return this.element.trigger(i,n),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(n,s,o){"string"==typeof s&&(s={effect:s});var r,a=s?s===!0||"number"==typeof s?i:s.effect||i:t;s=s||{},"number"==typeof s&&(s={duration:s}),r=!e.isEmptyObject(s),s.complete=o,s.delay&&n.delay(s.delay),r&&e.effects&&e.effects.effect[a]?n[t](s):a!==t&&n[a]?n[a](s.duration,s.easing,o):n.queue(function(i){e(this)[t](),o&&o.call(n[0]),i()})}});e.widget}),/* jquery Tocify - v1.8.0 - 2013-09-16
* http://www.gregfranko.com/jquery.tocify.js/
* Copyright (c) 2013 Greg Franko; Licensed MIT
* Modified lightly by Robert Lord to fix a bug I found,
* and also so it adds ids to headers
* also because I want height caching, since the
* height lookup for h1s and h2s was causing serious
* lag spikes below 30 fps */
function(e){"use strict";e(window.jQuery,window,document)}(function(e,t,i,n){"use strict";var s="tocify",o="tocify-focus",r="tocify-hover",a="tocify-hide",c="tocify-header",h="."+c,l="tocify-subheader",u="."+l,d="tocify-item",f="."+d,p="tocify-extend-page",g="."+p;e.widget("toc.tocify",{version:"1.8.0",options:{context:"body",ignoreSelector:null,selectors:"h1, h2, h3",showAndHide:!0,showEffect:"slideDown",showEffectSpeed:"medium",hideEffect:"slideUp",hideEffectSpeed:"medium",smoothScroll:!0,smoothScrollSpeed:"medium",scrollTo:0,showAndHideOnScroll:!0,highlightOnScroll:!0,highlightOffset:40,theme:"bootstrap",extendPage:!0,extendPageOffset:100,history:!0,scrollHistory:!1,hashGenerator:"compact",highlightDefault:!0},_create:function(){var i=this;i.tocifyWrapper=e(".tocify-wrapper"),i.extendPageScroll=!0,i.items=[],i._generateToc(),i.cachedHeights=[],i.cachedAnchors=[],i._addCSSClasses(),i.webkit=function(){for(var e in t)if(e&&-1!==e.toLowerCase().indexOf("webkit"))return!0;return!1}(),i._setEventHandlers(),e(t).load(function(){i._setActiveElement(!0),e("html, body").promise().done(function(){setTimeout(function(){i.extendPageScroll=!1},0)})})},_generateToc:function(){var t,i,n=this,o=n.options.ignoreSelector;return t=-1!==this.options.selectors.indexOf(",")?e(this.options.context).find(this.options.selectors.replace(/ /g,"").substr(0,this.options.selectors.indexOf(","))):e(this.options.context).find(this.options.selectors.replace(/ /g,"")),t.length?(n.element.addClass(s),void t.each(function(t){e(this).is(o)||(i=e("<ul/>",{id:c+t,"class":c}).append(n._nestElements(e(this),t)),n.element.append(i),e(this).nextUntil(this.nodeName.toLowerCase()).each(function(){0===e(this).find(n.options.selectors).length?e(this).filter(n.options.selectors).each(function(){e(this).is(o)||n._appendSubheaders.call(this,n,i)}):e(this).find(n.options.selectors).each(function(){e(this).is(o)||n._appendSubheaders.call(this,n,i)})}))})):void n.element.addClass(a)},_setActiveElement:function(e){var i=this,n=t.location.hash.substring(1),s=i.element.find("li[data-unique='"+n+"']");return n.length?(i.element.find("."+i.focusClass).removeClass(i.focusClass),s.addClass(i.focusClass),i.options.showAndHide&&s.click()):(i.element.find("."+i.focusClass).removeClass(i.focusClass),!n.length&&e&&i.options.highlightDefault&&i.element.find(f).first().addClass(i.focusClass)),i},_nestElements:function(t,i){var n,s,o;return n=e.grep(this.items,function(e){return e===t.text()}),n.length?this.items.push(t.text()+i):this.items.push(t.text()),o=this._generateHashValue(n,t,i),s=e("<li/>",{"class":d,"data-unique":o}).append(e("<a/>",{text:t.text()})),t.before(e("<div/>",{name:o,"data-unique":o})),s},_generateHashValue:function(e,t,i){var n="",s=this.options.hashGenerator;if("pretty"===s){for(n=t.text().toLowerCase().replace(/\s/g,"-"),n=n.replace(/[^\x00-\x7F]/g,"");n.indexOf("--")>-1;)n=n.replace(/--/g,"-");for(;n.indexOf(":-")>-1;)n=n.replace(/:-/g,"-")}else n="function"==typeof s?s(t.text(),t):t.text().replace(/\s/g,"");return e.length&&(n+=""+i),n},_appendSubheaders:function(t,i){var n=e(this).index(t.options.selectors),s=e(t.options.selectors).eq(n-1),o=+e(this).prop("tagName").charAt(1),r=+s.prop("tagName").charAt(1);r>o?t.element.find(u+"[data-tag="+o+"]").last().append(t._nestElements(e(this),n)):o===r?i.find(f).last().after(t._nestElements(e(this),n)):i.find(f).last().after(e("<ul/>",{"class":l,"data-tag":o})).next(u).append(t._nestElements(e(this),n))},_setEventHandlers:function(){var s=this;this.element.on("click.tocify","li",function(i){if(s.options.history&&(t.location.hash=e(this).attr("data-unique")),s.element.find("."+s.focusClass).removeClass(s.focusClass),e(this).addClass(s.focusClass),s.options.showAndHide){var n=e('li[data-unique="'+e(this).attr("data-unique")+'"]');s._triggerShow(n)}s._scrollTo(e(this))}),this.element.find("li").on({"mouseenter.tocify":function(){e(this).addClass(s.hoverClass),e(this).css("cursor","pointer")},"mouseleave.tocify":function(){"bootstrap"!==s.options.theme&&e(this).removeClass(s.hoverClass)}}),e(t).on("resize",function(){s.calculateHeights()}),e(t).on("scroll.tocify",function(){e("html, body").promise().done(function(){var o,r,a,c,h=e(t).scrollTop(),l=e(t).height(),u=e(i).height(),d=e("body")[0].scrollHeight;if(s.options.extendPage&&(s.webkit&&h>=d-l-s.options.extendPageOffset||!s.webkit&&l+h>u-s.options.extendPageOffset)&&!e(g).length){if(r=e('div[data-unique="'+e(f).last().attr("data-unique")+'"]'),!r.length)return;a=r.offset().top,e(s.options.context).append(e("<div />",{"class":p,height:Math.abs(a-h)+"px","data-unique":p})),s.extendPageScroll&&(c=s.element.find("li.active"),s._scrollTo(e("div[data-unique="+c.attr("data-unique")+"]")))}setTimeout(function(){var r,a=null;0==s.cachedHeights.length&&s.calculateHeights();var c=e(t).scrollTop();if(s.cachedAnchors.each(function(e){return s.cachedHeights[e]-c<0?void(a=e):!1}),r=e(s.cachedAnchors[a]).attr("data-unique"),o=e('li[data-unique="'+r+'"]'),s.options.highlightOnScroll&&o.length&&!o.hasClass(s.focusClass)){s.element.find("."+s.focusClass).removeClass(s.focusClass),o.addClass(s.focusClass);var h=s.tocifyWrapper,l=e(o).closest(".tocify-header"),u=l.offset().top,d=h.offset().top,f=u-d;if(f>=e(t).height()){var p=f+h.scrollTop();h.scrollTop(p)}else 0>f&&h.scrollTop(0)}s.options.scrollHistory&&t.location.hash!=="#"+r&&r!==n&&(history.replaceState?history.replaceState({},"","#"+r):(scrollV=i.body.scrollTop,scrollH=i.body.scrollLeft,location.hash="#"+r,i.body.scrollTop=scrollV,i.body.scrollLeft=scrollH)),s.options.showAndHideOnScroll&&s.options.showAndHide&&s._triggerShow(o,!0)},0)})})},calculateHeights:function(){var t=this;t.cachedHeights=[],t.cachedAnchors=[];var i=e(t.options.context).find("div[data-unique]");i.each(function(i){var n=(e(this).next().length?e(this).next():e(this)).offset().top-t.options.highlightOffset;t.cachedHeights[i]=n}),t.cachedAnchors=i},show:function(t,i){var n=this;if(!t.is(":visible"))switch(t.find(u).length||t.parent().is(h)||t.parent().is(":visible")?t.children(u).length||t.parent().is(h)||(t=t.closest(u)):t=t.parents(u).add(t),n.options.showEffect){case"none":t.show();break;case"show":t.show(n.options.showEffectSpeed);break;case"slideDown":t.slideDown(n.options.showEffectSpeed);break;case"fadeIn":t.fadeIn(n.options.showEffectSpeed);break;default:t.show()}return t.parent().is(h)?n.hide(e(u).not(t)):n.hide(e(u).not(t.closest(h).find(u).not(t.siblings()))),n},hide:function(e){var t=this;switch(t.options.hideEffect){case"none":e.hide();break;case"hide":e.hide(t.options.hideEffectSpeed);break;case"slideUp":e.slideUp(t.options.hideEffectSpeed);break;case"fadeOut":e.fadeOut(t.options.hideEffectSpeed);break;default:e.hide()}return t},_triggerShow:function(e,t){var i=this;return e.parent().is(h)||e.next().is(u)?i.show(e.next(u),t):e.parent().is(u)&&i.show(e.parent(),t),i},_addCSSClasses:function(){return"jqueryui"===this.options.theme?(this.focusClass="ui-state-default",this.hoverClass="ui-state-hover",this.element.addClass("ui-widget").find(".toc-title").addClass("ui-widget-header").end().find("li").addClass("ui-widget-content")):"bootstrap"===this.options.theme?(this.element.find(h+","+u).addClass("nav nav-list"),this.focusClass="active"):(this.focusClass=o,this.hoverClass=r),this},setOption:function(){e.Widget.prototype._setOption.apply(this,arguments)},setOptions:function(){e.Widget.prototype._setOptions.apply(this,arguments)},_scrollTo:function(t){var i=this,n=i.options.smoothScroll||0,s=i.options.scrollTo;return e("html, body").promise().done(function(){e("html, body").animate({scrollTop:e('div[data-unique="'+t.attr("data-unique")+'"]').next().offset().top-(e.isFunction(s)?s.call():s)+"px"},{duration:n})}),i}})}),/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(){function e(){}function t(e,t){for(var i=e.length;i--;)if(e[i].listener===t)return i;return-1}function i(e){return function(){return this[e].apply(this,arguments)}}var n=e.prototype,s=this,o=s.EventEmitter;n.getListeners=function(e){var t,i,n=this._getEvents();if("object"==typeof e){t={};for(i in n)n.hasOwnProperty(i)&&e.test(i)&&(t[i]=n[i])}else t=n[e]||(n[e]=[]);return t},n.flattenListeners=function(e){var t,i=[];for(t=0;e.length>t;t+=1)i.push(e[t].listener);return i},n.getListenersAsObject=function(e){var t,i=this.getListeners(e);return i instanceof Array&&(t={},t[e]=i),t||i},n.addListener=function(e,i){var n,s=this.getListenersAsObject(e),o="object"==typeof i;for(n in s)s.hasOwnProperty(n)&&-1===t(s[n],i)&&s[n].push(o?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(e){return this.getListeners(e),this},n.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},n.removeListener=function(e,i){var n,s,o=this.getListenersAsObject(e);for(s in o)o.hasOwnProperty(s)&&(n=t(o[s],i),-1!==n&&o[s].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},n.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},n.manipulateListeners=function(e,t,i){var n,s,o=e?this.removeListener:this.addListener,r=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(n=i.length;n--;)o.call(this,t,i[n]);else for(n in t)t.hasOwnProperty(n)&&(s=t[n])&&("function"==typeof s?o.call(this,n,s):r.call(this,n,s));return this},n.removeEvent=function(e){var t,i=typeof e,n=this._getEvents();if("string"===i)delete n[e];else if("object"===i)for(t in n)n.hasOwnProperty(t)&&e.test(t)&&delete n[t];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(e,t){var i,n,s,o,r=this.getListenersAsObject(e);for(s in r)if(r.hasOwnProperty(s))for(n=r[s].length;n--;)i=r[s][n],i.once===!0&&this.removeListener(e,i.listener),o=i.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},n.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return s.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}.call(this),function(e){function t(t){var i=e.event;return i.target=i.target||i.srcElement||t,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(e,t,i){e.addEventListener(t,i,!1)}:i.attachEvent&&(n=function(e,i,n){e[i+n]=n.handleEvent?function(){var i=t(e);n.handleEvent.call(n,i)}:function(){var i=t(e);n.call(e,i)},e.attachEvent("on"+i,e[i+n])});var s=function(){};i.removeEventListener?s=function(e,t,i){e.removeEventListener(t,i,!1)}:i.detachEvent&&(s=function(e,t,i){e.detachEvent("on"+t,e[t+i]);try{delete e[t+i]}catch(n){e[t+i]=void 0}});var o={bind:n,unbind:s};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(i,n){return t(e,i,n)}):"object"==typeof exports?module.exports=t(e,require("wolfy87-eventemitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,i){function n(e,t){for(var i in t)e[i]=t[i];return e}function s(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(s(e))t=e;else if("number"==typeof e.length)for(var i=0,n=e.length;n>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,t,i){if(!(this instanceof r))return new r(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=n({},this.options),"function"==typeof t?i=t:n(this.options,t),i&&this.on("always",i),this.getImages(),h&&(this.jqDeferred=new h.Deferred);var s=this;setTimeout(function(){s.check()})}function a(e){this.img=e}function c(e){this.src=e,f[e]=this}var h=e.jQuery,l=e.console,u=void 0!==l,d=Object.prototype.toString;r.prototype=new t,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var i=this.elements[e];"IMG"===i.nodeName&&this.addImage(i);var n=i.nodeType;if(n&&(1===n||9===n||11===n))for(var s=i.querySelectorAll("img"),o=0,r=s.length;r>o;o++){var a=s[o];this.addImage(a)}}},r.prototype.addImage=function(e){var t=new a(e);this.images.push(t)},r.prototype.check=function(){function e(e,s){return t.options.debug&&u&&l.log("confirm",e,s),t.progress(e),i++,i===n&&t.complete(),!0}var t=this,i=0,n=this.images.length;if(this.hasAnyBroken=!1,!n)return void this.complete();for(var s=0;n>s;s++){var o=this.images[s];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var i=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[i](t)}})},h&&(h.fn.imagesLoaded=function(e,t){var i=new r(this,e,t);return i.jqDeferred.promise(h(this))}),a.prototype=new t,a.prototype.check=function(){var e=f[this.img.src]||new c(this.img.src);if(e.isConfirmed)return void this.confirm(e.isLoaded,"cached was confirmed");if(this.img.complete&&void 0!==this.img.naturalWidth)return void this.confirm(0!==this.img.naturalWidth,"naturalWidth");var t=this;e.on("confirm",function(e,i){return t.confirm(e.isLoaded,i),!0}),e.check()},a.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var f={};return c.prototype=new t,c.prototype.check=function(){if(!this.isChecked){var e=new Image;i.bind(e,"load",this),i.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},c.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.unbindProxyEvents=function(e){i.unbind(e.target,"load",this),i.unbind(e.target,"error",this)},r}),function(e){"use strict";function t(){setTimeout(function(){toc.setOption("showEffectSpeed",180)},50)}var i=function(){$(".tocify-wrapper").removeClass("open"),$("#nav-button").removeClass("open")},n=function(){e.toc=$("#toc").tocify({selectors:"h1, h2",extendPage:!1,theme:"none",smoothScroll:!1,showEffectSpeed:0,hideEffectSpeed:180,ignoreSelector:".toc-ignore",highlightOffset:60,scrollTo:-1,scrollHistory:!0,hashGenerator:function(e,t){return t.prop("id")}}).data("toc-tocify"),$("#nav-button").click(function(){return $(".tocify-wrapper").toggleClass("open"),$("#nav-button").toggleClass("open"),!1}),$(".page-wrapper").click(i),$(".tocify-item").click(i)};$(function(){n(),t(),$(".content").imagesLoaded(function(){e.toc.calculateHeights()})})}(window);