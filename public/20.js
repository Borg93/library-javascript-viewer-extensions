(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1140:function(t,e,n){"use strict";(function(t){var a=n(2),o=n.n(a),i=n(3),l=n.n(i),r=n(5),d=n.n(r),s=n(4),c=n.n(s),f=n(6),u=n.n(f),b=(n(1),n(1141),n(637)),h=n.n(b),p=(n(1143),n(0)),g=n.n(p),v=(n(1144),n(1145),n(1147),function(e){function n(){var t;return o()(this,n),(t=d()(this,c()(n).call(this))).scroll=0,t}return u()(n,e),l()(n,[{key:"componentDidMount",value:function(){var e=this;t(".footable").footable({breakpoints:{phone:400,tablet:400}}),this.ftEditable=t().ftEditable(),this.ftEditable.setUpdateHandler(function(t){var n=h()(e.props.items,{_id:t.id});switch(t.fieldName){case"price":var a=parseFloat(t.fieldValue);isNaN(a)||(n[t.fieldName]=a);break;case"currency":return;default:n[t.fieldName]=t.fieldValue}e.props.onUpdateItem(n)})}},{key:"shouldComponentUpdate",value:function(t){return t.guid!==this.props.guid}},{key:"componentDidUpdate",value:function(){this.refresh()}},{key:"componentWillUnmount",value:function(){t(".footable").remove()}},{key:"onRowClicked",value:function(t){var e=h()(this.props.items,{_id:t});e&&this.props.onSelectItem(e,!0)}},{key:"onHeaderClicked",value:function(t){}},{key:"refresh",value:function(){var e=this;this.ftEditable&&(this.ftEditable.deleteAllRows(".footable"),this.ftEditable.addRows(".footable",this.props.items.map(function(t){return{name:t.name,supplier:t.supplier,price:t.price,currency:t.currency,id:t._id}}),{select:{currency:[{value:"ARS",label:"ARS"},{value:"BRL",label:"BRL"},{value:"CAD",label:"CAD"},{value:"CHF",label:"CHF"},{value:"CNY",label:"CNY"},{value:"DKK",label:"DKK"},{value:"EUR",label:"EUR"},{value:"GBP",label:"CAD"},{value:"INR",label:"INR"},{value:"JPY",label:"JPY"},{value:"MXN",label:"MXN"},{value:"PLN",label:"PLN"},{value:"RUB",label:"RUB"},{value:"USD",label:"USD"},{value:"ZAR",label:"ZAR"}]}}),this.select=t("select",".db-table").niceSelect(),this.select.on("change",function(n,a){var o=t(a).parents("tr")[0].id,i=h()(e.props.items,{_id:o});i.currency=t(a).attr("data-value"),e.props.onUpdateItem(i)}),t(".footable > tbody > tr > td:first-child").off("click"),t(".footable > tbody > tr > td:first-child").on("click",function(n){var a=t(n.target).parent()[0].id;e.onRowClicked(a)}),t(".footable > tbody > tr > td:first-child label").on("click",function(n){var a=t(n.target).parent().parent()[0].id;e.onRowClicked(a)}),t(".footable > thead > tr > th").on("click",function(t){return e.onHeaderClicked(t)}),t("td[contenteditable='true']",".footable").on("keydown keypress",function(n){if(2===t(n.target).index()){if([8,37,39,46,188,190].indexOf(n.keyCode)>-1||n.keyCode>47&&n.keyCode<58);else if(13===n.keyCode){var a=e.getValue(n.target),o=parseFloat(a);if(!isNaN(o)){var i=e.getDbItem(n.target);i.price=o,e.props.onUpdateItem(i)}n.preventDefault()}else n.preventDefault()}else if(13===n.keyCode){var l=e.getField(n.target),r=e.getValue(n.target),d=e.getDbItem(n.target);d[l]=r,e.props.onUpdateItem(d),n.preventDefault()}}),t(".scroll tbody").scroll(function(){e.scroll=t(".scroll tbody").scrollTop()}),t(".scroll tbody").scrollTop(this.scroll))}},{key:"getDbItem",value:function(e){var n=t(e).parent()[0].id;return h()(this.props.items,{_id:n})}},{key:"getValue",value:function(e){var n=t(e).find("label");return n.length?n.text():t(e).text()}},{key:"getField",value:function(e){var n=t(e).index(),a=t(".footable > thead > tr > th")[n];return t(a).attr("data-field")}},{key:"render",value:function(){return g.a.createElement("div",{className:"db-table"},g.a.createElement("table",{className:"footable scroll"},g.a.createElement("thead",null,g.a.createElement("tr",null,g.a.createElement("th",{className:"db-column fooId","data-field":"material"},g.a.createElement("label",null,"Material")),g.a.createElement("th",{className:"db-column fooEditable","data-hide":"phone,tablet","data-field":"supplier"},"Supplier"),g.a.createElement("th",{className:"db-column fooEditable","data-field":"price"},"Price (/kg)"),g.a.createElement("th",{className:"db-column","data-field":"currency","data-hide":"phone","data-ft-control":"select"},"Currency"),g.a.createElement("th",{className:"db-column hidden"},"_id"))),g.a.createElement("tbody",null)))}}]),n}(g.a.Component));e.a=v}).call(this,n(21))},1141:function(t,e,n){var a=n(1142);"string"==typeof a&&(a=[[t.i,a,""]]);n(27)(a,{});a.locals&&(t.exports=a.locals)},1142:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,".db-table .nice-select {\n  -webkit-tap-highlight-color: transparent;\n  background-color: #ffffff;\n  border-radius: 0px;\n  border: solid 1px #e8e8e8;\n  box-sizing: border-box;\n  clear: both;\n  cursor: pointer;\n  display: block;\n  float: left;\n  font-family: inherit;\n  font-size: 14px;\n  font-weight: normal;\n  height: 24px;\n  line-height: 22px;\n  outline: none;\n  padding-left: 18px;\n  padding-right: 30px;\n  position: relative;\n  text-align: left !important;\n  transition: all 0.2s ease-in-out;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  white-space: nowrap;\n  width: auto;\n  color: #000;\n}\n\n.db-table .nice-select:hover {\n  border-color: #dbdbdb;\n}\n\n.db-table .nice-select:active, .db-table .nice-select.open, .db-table .nice-select:focus {\n  border-color: #999;\n}\n\n.db-table .nice-select:after {\n  border-bottom: 2px solid #999;\n  border-right: 2px solid #999;\n  content: '';\n  display: block;\n  height: 5px;\n  margin-top: -4px;\n  pointer-events: none;\n  position: absolute;\n  right: 12px;\n  top: 50%;\n  transform-origin: 66% 66%;\n  transform: rotate(45deg);\n  transition: all 0.15s ease-in-out;\n  width: 5px;\n}\n\n.db-table .nice-select.open:after {\n  transform: rotate(-135deg);\n}\n\n.db-table .nice-select.open .list {\n  opacity: 1;\n  pointer-events: auto;\n  transform: scale(1) translateY(0);\n}\n\n.db-table .nice-select.disabled {\n  border-color: #ededed;\n  color: #999;\n  pointer-events: none;\n}\n\n.db-table .nice-select.disabled:after {\n  border-color: #cccccc;\n}\n\n.db-table .nice-select.wide {\n  width: 100%;\n}\n\n.db-table .nice-select.wide .list {\n  left: 0 !important;\n  right: 0 !important;\n}\n.db-table .nice-select.right {\n  float: right;\n}\n.db-table .nice-select.right .list {\n  left: auto;\n  right: 0;\n}\n\n.db-table .nice-select.small {\n  font-size: 12px;\n  height: 36px;\n  line-height: 34px;\n}\n\n.db-table .nice-select.small:after {\n  height: 4px;\n  width: 4px;\n}\n\n.db-table .nice-select.small .option {\n  line-height: 34px;\n  min-height: 34px;\n}\n\n.db-table .nice-select .list {\n  background-color: #FFFFFF;\n  border-radius: 0px;\n  box-shadow: 0 0 0 0px rgba(68, 68, 68, 0.11);\n  box-sizing: border-box;\n  margin-top: 4px;\n  opacity: 0;\n  overflow: hidden;\n  padding: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  transform-origin: 50% 0;\n  transform: scale(0.75) translateY(-21px);\n  transition: all 0.2s cubic-bezier(0.5, 0, 0, 1.25), opacity 0.15s ease-out;\n  z-index: 1000;\n  max-height: 125px;\n  overflow: auto;\n  border: 1px solid #cccccc;\n}\n\n.db-table .nice-select .list:hover .option:not(:hover) {\n  background-color: transparent !important;\n}\n\n.db-table .nice-select .option {\n  cursor: pointer;\n  font-weight: 400;\n  line-height: 40px;\n  list-style: none;\n  min-height: 40px;\n  outline: none;\n  padding-left: 18px;\n  padding-right: 29px;\n  text-align: left;\n  transition: all 0.2s;\n  color: #000;\n}\n\n.db-table .nice-select .option:hover, .db-table .nice-select .option.focus, .db-table .nice-select .option.selected.focus {\n  background-color: #f6f6f6;\n}\n\n.db-table .nice-select .option.selected {\n  font-weight: bold;\n}\n\n.db-table .nice-select .option.disabled {\n  background-color: transparent;\n  color: #999;\n  cursor: default;\n}\n\n.no-csspointerevents .db-table .nice-select .list {\n  display: none;\n}\n\n.no-csspointerevents .db-table .nice-select.open .list {\n  display: block;\n}\n",""])},1143:function(t,e,n){(function(t){var e;(e=t).fn.niceSelect=function(t){if("string"==typeof t)return"update"==t?this.each(function(){var t=e(this),a=e(this).next(".nice-select"),o=a.hasClass("open");a.length&&(a.remove(),n(t),o&&t.next().trigger("click"))}):"destroy"==t?(this.each(function(){var t=e(this),n=e(this).next(".nice-select");n.length&&(n.remove(),t.css("display",""))}),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;function n(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var n=t.next(),a=t.find("option"),o=t.find("option:selected");n.find(".current").html(o.data("display")||o.text()),a.each(function(t){var a=e(this),o=a.data("display");n.find("ul").append(e("<li></li>").attr("data-value",a.val()).attr("data-display",o||null).addClass("option"+(a.is(":selected")?" selected":"")+(a.is(":disabled")?" disabled":"")).html(a.text()))})}this.hide(),this.each(function(){var t=e(this);t.next().hasClass("nice-select")||n(t)}),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",function(t){var n=e(this);e(".nice-select").not(n).removeClass("open"),n.toggleClass("open"),n.hasClass("open")?(n.find(".option"),n.find(".focus").removeClass("focus"),n.find(".selected").addClass("focus")):n.focus()}),e(document).on("click.nice_select",function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")}),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",function(t){var n=e(this),a=n.closest(".nice-select");a.find(".selected").removeClass("selected"),n.addClass("selected");var o=n.data("display")||n.text();a.find(".current").text(o),a.prev("select").val(n.data("value")).trigger("change",n)}),e(document).on("keydown.nice_select",".nice-select",function(t){var n=e(this),a=e(n.find(".focus")||n.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return n.hasClass("open")?a.trigger("click"):n.trigger("click"),!1;if(40==t.keyCode){if(n.hasClass("open")){var o=a.nextAll(".option:not(.disabled)").first();o.length>0&&(n.find(".focus").removeClass("focus"),o.addClass("focus"))}else n.trigger("click");return!1}if(38==t.keyCode){if(n.hasClass("open")){var i=a.prevAll(".option:not(.disabled)").first();i.length>0&&(n.find(".focus").removeClass("focus"),i.addClass("focus"))}else n.trigger("click");return!1}if(27==t.keyCode)n.hasClass("open")&&n.trigger("click");else if(9==t.keyCode&&n.hasClass("open"))return!1});var a=document.createElement("a").style;return a.cssText="pointer-events:auto","auto"!==a.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}).call(this,n(21))},1144:function(t,e,n){"use strict";(function(t){var e=n(93),a=n.n(e);
/*!
 * FooTable - Awesome Responsive Tables
 * Version : 0.5
 * http://themergency.com/footable
 *
 * Requires jQuery - http://jquery.com/
 *
 * Copyright 2012 Steven Usher & Brad Vincent
 * Released under the MIT license
 * You are free to use FooTable in commercial projects as long as this copyright header is left intact.
 *
 * Date: 22 Apr 2013
 */
!function(e,n,o){n.footable={options:{delay:100,breakpoints:{phone:480,tablet:1024},parsers:{alpha:function(t){return e(t).data("value")||e.trim(e(t).text())}},calculateWidthAndHeightOverride:null,toggleSelector:" > tbody > tr:not(.footable-row-detail)",columnDataSelector:"> thead > tr:last-child > th, > thead > tr:last-child > td",createDetail:function(t,e){for(var n={_none:{name:null,data:[]}},a=0;a<e.length;a++){var o=e[a].group;null!=o?(o in n||(n[o]={name:e[a].groupName,data:[]}),n[o].data.push(e[a])):n._none.data.push(e[a])}for(var i in n)if(0!=n[i].data.length){"_none"!=i&&t.append("<h4>"+n[i].name+"</h4>");for(var l=0;l<n[i].data.length;l++){var r=n[i].data[l].name?":":"";t.append("<div><strong>"+n[i].data[l].name+"</strong> "+r+" "+n[i].data[l].display+"</div>")}}},classes:{loading:"footable-loading",loaded:"footable-loaded",sorted:"footable-sorted",descending:"footable-sorted-desc",indicator:"footable-sort-indicator"},debug:!1},version:{major:0,minor:5,toString:function(){return n.footable.version.major+"."+n.footable.version.minor},parse:function(t){return version=/(\d+)\.?(\d+)?\.?(\d+)?/.exec(t),{major:parseInt(version[1])||0,minor:parseInt(version[2])||0,patch:parseInt(version[3])||0}}},plugins:{_validate:function(t){return"string"!=typeof t.name?(1==n.footable.options.debug&&console.error('Validation failed, plugin does not implement a string property called "name".',t),!1):e.isFunction(t.init)?(1==n.footable.options.debug&&console.log('Validation succeeded for plugin "'+t.name+'".',t),!0):(1==n.footable.options.debug&&console.error('Validation failed, plugin "'+t.name+'" does not implement a function called "init".',t),!1)},registered:[],register:function(t,o){n.footable.plugins._validate(t)&&(n.footable.plugins.registered.push(t),null!=o&&"object"===a()(o)&&e.extend(!0,n.footable.options,o),1==n.footable.options.debug&&console.log('Plugin "'+t.name+'" has been registered with the Foobox.',t))},init:function(t){for(var e=0;e<n.footable.plugins.registered.length;e++)try{n.footable.plugins.registered[e].init(t)}catch(t){1==n.footable.options.debug&&console.error(t)}}}};var i=0;function l(){var t=this;t.id=null,t.busy=!1,t.start=function(e,n){t.busy||(t.stop(),t.id=setTimeout(function(){e(),t.id=null,t.busy=!1},n),t.busy=!0)},t.stop=function(){null!=t.id&&(clearTimeout(t.id),t.id=null,t.busy=!1)}}function r(a,o,i){var r=this;r.id=i,r.table=a,r.options=o,r.breakpoints=[],r.breakpointNames="",r.columns={};var d=r.options,s=d.classes,c=0;return r.timers={resize:new l,register:function(t){return r.timers[t]=new l,r.timers[t]}},n.footable.plugins.init(r),r.init=function(){var t=e(n),a=e(r.table);if(a.hasClass(s.loaded))r.raise("footable_already_initialized");else{for(var o in a.addClass(s.loading),a.find(d.columnDataSelector).each(function(){var t=r.getColumnData(this);if(r.columns[t.index]=t,null!=t.className){var n="",o=!0;e.each(t.matches,function(t,e){o||(n+=", "),n+="> tbody > tr:not(.footable-row-detail) > td:nth-child("+(parseInt(e)+1)+")",o=!1}),a.find(n).not(".footable-cell-detail").addClass(t.className)}}),d.breakpoints)r.breakpoints.push({name:o,width:d.breakpoints[o]}),r.breakpointNames+=o+" ";r.breakpoints.sort(function(t,e){return t.width-e.width}),r.bindToggleSelectors(),r.raise("footable_initializing"),a.bind("footable_initialized",function(){r.resize(),a.removeClass(s.loading),a.find('[data-init="hide"]').hide(),a.find('[data-init="show"]').show(),a.addClass(s.loaded)}),a.bind("footable_resize",function(){r.resize()}),t.bind("resize.footable",function(){r.timers.resize.stop(),r.timers.resize.start(function(){r.resize()},d.delay)}),r.raise("footable_initialized")}},r.bindToggleSelectors=function(){var t=e(r.table);t.find(d.toggleSelector).unbind("click.footable").bind("click.footable",function(n){if(t.is(".breakpoint")&&e(n.target).is("td")){var a=e(this).is("tr")?e(this):e(this).parents("tr:first");r.toggleDetail(a.get(0))}})},r.parse=function(t,e){return(d.parsers[e.type]||d.parsers.alpha)(t)},r.getColumnData=function(t){var n=e(t),a=n.data("hide"),o=n.index();a=(a=a||"").split(",");var i={index:o,hide:{},type:n.data("type")||"alpha",name:e.trim(n.data("name")||n.text()),ignore:n.data("ignore")||!1,className:n.data("class")||null,matches:[],names:{},group:n.data("group")||null,groupName:null};if(null!=i.group){var l=e(r.table).find('> thead > tr.footable-group-row > th[data-group="'+i.group+'"], > thead > tr.footable-group-row > td[data-group="'+i.group+'"]').first();i.groupName=r.parse(l,{type:"alpha"})}var s=parseInt(n.prev().attr("colspan")||0);c+=s>1?s-1:0;var f=parseInt(n.attr("colspan")||0),u=i.index+c;if(f>1){var b=n.data("names");b=(b=b||"").split(",");for(var h=0;h<f;h++)i.matches.push(h+u),h<b.length&&(i.names[h+u]=b[h])}else i.matches.push(u);for(var p in i.hide.default="all"===n.data("hide")||e.inArray("default",a)>=0,d.breakpoints)i.hide[p]="all"===n.data("hide")||e.inArray(p,a)>=0;return r.raise("footable_column_data",{column:{data:i,th:t}}).column.data},r.getViewportWidth=function(){return window.innerWidth||(document.body?document.body.offsetWidth:0)},r.getViewportHeight=function(){return window.innerHeight||(document.body?document.body.offsetHeight:0)},r.calculateWidthAndHeight=function(e,n){return t.isFunction(d.calculateWidthAndHeightOverride)?d.calculateWidthAndHeightOverride(e,n):(n.viewportWidth<n.width&&(n.width=n.viewportWidth),n.viewportHeight<n.height&&(n.height=n.viewportHeight),n)},r.hasBreakpointColumn=function(t){for(var e in r.columns)if(r.columns[e].hide[t])return!0;return!1},r.resize=function(){var t=e(r.table),n={width:t.width(),height:t.height(),viewportWidth:r.getViewportWidth(),viewportHeight:r.getViewportHeight(),orientation:null};n.orientation=n.viewportWidth>n.viewportHeight?"landscape":"portrait",n=r.calculateWidthAndHeight(t,n);var a=t.data("footable_info");if(t.data("footable_info",n),r.raise("footable_resizing",{old:a,info:n}),!a||a&&a.width&&a.width!=n.width||a&&a.height&&a.height!=n.height){for(var o,i=null,l=0;l<r.breakpoints.length;l++)if((o=r.breakpoints[l])&&o.width&&n.width<=o.width){i=o;break}var d=null==i?"default":i.name,s=r.hasBreakpointColumn(d);t.removeClass("default breakpoint").removeClass(r.breakpointNames).addClass(d+(s?" breakpoint":"")).find("> thead > tr:last-child > th").each(function(){var n=r.columns[e(this).index()],a="",o=!0;e.each(n.matches,function(t,e){o||(a+=", ");var n=e+1;a+="> tbody > tr:not(.footable-row-detail) > td:nth-child("+n+")",a+=", > tfoot > tr:not(.footable-row-detail) > td:nth-child("+n+")",a+=", > colgroup > col:nth-child("+n+")",o=!1}),a+=', > thead > tr[data-group-row="true"] > th[data-group="'+n.group+'"]';var i=t.find(a).add(this);if(0==n.hide[d]?i.show():i.hide(),1==t.find("> thead > tr.footable-group-row").length){var l=t.find('> thead > tr:last-child > th[data-group="'+n.group+'"]:visible, > thead > tr:last-child > th[data-group="'+n.group+'"]:visible'),s=t.find('> thead > tr.footable-group-row > th[data-group="'+n.group+'"], > thead > tr.footable-group-row > td[data-group="'+n.group+'"]'),c=0;e.each(l,function(){c+=parseInt(e(this).attr("colspan")||1)}),c>0?s.attr("colspan",c).show():s.hide()}}).end().find("> tbody > tr.footable-detail-show").each(function(){r.createOrUpdateDetailRow(this)}),t.find("> tbody > tr.footable-detail-show:visible").each(function(){var t=e(this).next();t.hasClass("footable-row-detail")&&(s?t.show():t.hide())}),t.find("> thead > tr > th.footable-last-column, > tbody > tr > td.footable-last-column").removeClass("footable-last-column"),t.find("> thead > tr > th.footable-first-column, > tbody > tr > td.footable-first-column").removeClass("footable-first-column"),t.find("> thead > tr, > tbody > tr").find("> th:visible:last, > td:visible:last").addClass("footable-last-column").end().find("> th:visible:first, > td:visible:first").addClass("footable-first-column"),r.raise("footable_breakpoint_"+d,{info:n})}r.raise("footable_resized",{old:a,info:n})},r.toggleDetail=function(t){var n=e(t),a=r.createOrUpdateDetailRow(n.get(0)),o=n.next();!a&&o.is(":visible")?(n.removeClass("footable-detail-show"),o.hasClass("footable-row-detail")&&o.hide()):(n.addClass("footable-detail-show"),o.show())},r.getColumnFromTdIndex=function(t){var n=null;for(var a in r.columns)if(e.inArray(t,r.columns[a].matches)>=0){n=r.columns[a];break}return n},r.createOrUpdateDetailRow=function(t){var n,a=e(t),o=a.next(),i=[];if(a.is(":hidden"))return!1;if(r.raise("footable_rowdetailupdated",{row:a,detail:o}),a.find("> td:hidden").each(function(){var t=e(this).index(),n=r.getColumnFromTdIndex(t),a=n.name;return 1==n.ignore||(t in n.names&&(a=n.names[t]),i.push({name:a,value:r.parse(this,n),display:e.trim(e(this).html()),group:n.group,groupName:n.groupName}),!0)}),0==i.length)return!1;var l=a.find("> td:visible").length,s=o.hasClass("footable-row-detail");return s||(o=e('<tr class="footable-row-detail"><td class="footable-cell-detail"><div class="footable-row-detail-inner"></div></td></tr>'),a.after(o)),o.find("> td:first").attr("colspan",l),n=o.find(".footable-row-detail-inner").empty(),d.createDetail(n,i),!s},r.raise=function(t,n){n=n||{};var a={ft:r};e.extend(!0,a,n);var o=e.Event(t,a);return o.ft||e.extend(!0,o,a),e(r.table).trigger(o),o},r.init(),r}e.fn.footable=function(t){t=t||{};var a=e.extend(!0,{},n.footable.options,t);return this.each(function(){i++,this.footable=new r(this,a,i)})}}(t,window)}).call(this,n(21))},1145:function(t,e,n){var a=n(1146);"string"==typeof a&&(a=[[t.i,a,""]]);n(27)(a,{});a.locals&&(t.exports=a.locals)},1146:function(t,e,n){(t.exports=n(26)(!1)).push([t.i,'.footable {\n  border-collapse: separate;\n  border-radius: 6px;\n  border-spacing: 0;\n  overflow: hidden;\n  font-size: 13px;\n  display: block;\n  border: none;\n  height: 100%;\n  width: 100%;\n  color: #444; }\n\n.footable > thead {\n  display: block;\n  width: 100%; }\n\n.footable > tbody > tr > td:first-child {\n  margin-left: 0;\n  cursor: pointer; }\n\n.breakpoint > tbody > tr > td:first-child:not(.footable-cell-detail) {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAaJJREFUSEvllUFuglAQhl1115WrtzJGAUVQoIrgEy3V2gWr3mHuoqXtXdqkp2oXvULnx0KKoYlNZleTL0NgmH9m3oy0Wv/i1zf6bdM0M2tgVRimkYkVH85DtdALWq1XtL5eFzaKIxIT0Eut0jSl3d2uAiJiApy9Qubb221FskrkBOJFrJDxZrup4KrkBObRXC2TJaU3aQWLygmEYai01sUBl/z5kDudTrvb7aomJt7EQcboO1oFy1URj26jP2JwvMvaEGCuh/aQbNsuKK9hPd8jCKBNOtEFqMB13cr3p/9gOCDDMIKagOd5GbJqAsEgUKBjwk7gGveb/GfhjDjeiYDvZXhBAl5MVF0XGE/GGR5IMJ1NiePVBRzXyfBAguAqII5XF/j4fI+YrInXt5d7HDReLOEe02/+3/fNs/9K7JGt3LFLfuCT7zNsOUO5ReOxUwjI+1DBonICpmUqzDmqKOFvg5wAL6HC8ozcETmOU1jLEhTgL5pCxmhLCVclV0Gv31MIiDaVsKicwD7fq4fHA+VP+ZHnnA75Xk6A5/qCUaecM+dfpb4QKE1wJiAAAAAASUVORK5CYII=") no-repeat 5px center;\n  background-size: 18px 18px;\n  padding-left: 40px; }\n\n.breakpoint > tbody > tr.footable-detail-show > td:first-child:not(.footable-cell-detail) {\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABp0RVh0U29mdHdhcmUAUGFpbnQuTkVUIHYzLjUuMTAw9HKhAAAAmElEQVRIS2NgGAWjITAaAvQLAXl5eWFFRUVJamGgebworldVU/XW1NJM0dLSAmMYG0STytbQ1EhRVVU1QrHAwMDA29zCPIUa2NTMNAVoHpoFhgbeFpYWKdTAZuZmKQaGaBbo6et5gySogU1MTVKA5qH6QEdXxxskQQ1sZGyUAjQP1YLX719ZALE3FbEa/fLAqE2jITC4QwAAaXKwpLW9uNwAAAAASUVORK5CYII=") no-repeat 5px center;\n  background-size: 18px 18px; }\n\n.footable.breakpoint > tbody > tr.footable-row-detail {\n  background: #eee;\n  color: #000; }\n\n.footable > thead > tr {\n  transition-property: background;\n  transition-timing-function: ease;\n  transition-duration: 0.5s;\n  transition-delay: 0.0s;\n  background: white; }\n\n.footable > tbody > tr:hover {\n  background: #f8f8f8;\n  color: #000; }\n\n.footable.breakpoint > tbody > tr:hover:not(.footable-row-detail) {\n  cursor: pointer; }\n\n.footable > thead > tr > th {\n  text-align: left;\n  padding: 10px;\n  border: none;\n  border-bottom: 1px solid #b4b4b4;\n  cursor: pointer;\n  overflow: hidden; }\n\n.footable > tbody > tr {\n  border-bottom: 1px solid #d7d7d7; }\n\n.footable > tbody > tr > td {\n  text-align: left;\n  padding: 10px;\n  border: none;\n  overflow: hidden; }\n\n.footable > tbody > tr > td:last-child {\n  overflow: visible; }\n\n.footable > tbody > tr > td label {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 0;\n  font-weight: normal; }\n\n.footable > thead > tr > th:first-child label {\n  margin-left: 18px; }\n\n.footable > tbody > tr > td:first-child label {\n  margin-left: 18px;\n  cursor: pointer; }\n\n.footable > tbody > tr > td.footable-cell-detail {\n  border-left: none; }\n\n.footable > thead > tr > th, .footable > thead > tr > td {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  border-top: none;\n  cursor: default; }\n\n.footable > thead > tr:first-child > th:first-child, .footable > thead > tr:first-child > td:first-child {\n  border-radius: 0 0 0 0; }\n\n.footable > thead > tr:first-child > th.footable-last-column, .footable > thead > tr:first-child > td.footable-last-column {\n  border-radius: 0 0 0 0; }\n\n.footable > thead > tr:first-child > th:first-child.footable-last-column, .footable > thead > tr:first-child > td:first-child.footable-last-column {\n  border-radius: 6px 6px 0 0; }\n\n.footable > tbody > tr:last-child > td:first-child {\n  border-radius: 0 0 0 6px; }\n\n.footable > tbody > tr:last-child > td.footable-last-column {\n  border-radius: 0 0 6px 0; }\n\n.footable > tbody > tr:last-child > td:first-child.footable-last-column {\n  border-radius: 0 0 6px 6px; }\n\n.footable > thead > tr > th:first-child, .footable > thead > tr > td:first-child, .footable > tbody > tr > td:first-child {\n  border-left: none; }\n\n.footable > tbody img {\n  vertical-align: middle; }\n\n.footable > tfoot > tr > th, .footable > tfoot > tr > td {\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset;\n  border-top: 1px solid #ccc;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  padding: 10px; }\n\n.footable input[type="text"] {\n  background-color: transparent;\n  border-style: none; }\n\n.footable input[type="text"]:focus {\n  border-style: inset;\n  border-color: rgba(82, 168, 236, 0.8);\n  outline: 0;\n  outline: thin dotted \\9; }\n\n.footable input[readonly]:focus {\n  background-color: transparent;\n  border-color: black;\n  border-width: thin;\n  box-shadow: none; }\n\n.fooId {\n  /* used for identifying each field as a key field in the th tag */ }\n\n.fooEditable {\n  /* used for identifying each field as an editable field in the th tag */ }\n\n.fooNewRecord {\n  /* used for identifying the new record layout in the tr tag */ }\n\n.db-table {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  height: calc(100%);\n  width: 100%; }\n\n.db-table .db-column {\n  width: 20%; }\n\n.scroll tr {\n  color: #5a5a5a;\n  display: -ms-flexbox;\n  display: flex; }\n\n.scroll td {\n  padding: 3px;\n  -ms-flex: 1 auto;\n      flex: 1 auto;\n  border: 1px solid #aaa;\n  width: 1px;\n  word-wrap: break;\n  color: #727272; }\n\n.scroll thead tr:after {\n  overflow-y: scroll;\n  visibility: hidden;\n  content: \'\';\n  height: 0; }\n\n.scroll thead th {\n  border: 1px solid #000;\n  display: block;\n  -ms-flex: 1 auto;\n      flex: 1 auto; }\n\n.scroll tbody {\n  height: calc(100% + 28px);\n  overflow: scroll;\n  display: block;\n  width: 100%; }\n\n.db-table .select-container {\n  float: left; }\n\n.db-table .select-name {\n  margin-right: 14px;\n  margin-top: 8px;\n  float: left; }\n\n.db-table .row-detail:nth-child(2) {\n  margin-top: 8px; }\n\n.db-table .row-detail .select-container {\n  margin-left: 14px;\n  margin-top: -3px; }\n',""])},1147:function(t,e,n){(function(t){
/*!
 * FooTable Editable Plugin - Awesome Responsive FooTables That Are Editable
 * Version : 0.1
 * Author: Jake Drew - http://www.jakemdrew.com
 *
 * Requires jQuery - http://jquery.com/
 * Requires FooTable http://themergency.com/footable
 *
 * FooTable Editable Copyright 2013 Jake Drew
 *
 * Released under the MIT license
 * You are free to use FooTable Editable in commercial projects as long as this copyright header is left intact.
 *
 * Date: 2 Jul 2013
 */
!function(t,e,n){if(e.footable==n||null==e.footable)throw new Error("Please check and make sure footable.js is included in the page and is loaded prior to this script.");var a={serverTableName:n,dataHandlerURL:"demo",autoLoad:!1,createDetail:function(n,a){for(var o={_none:{name:null,data:[]}},i=0;i<a.length;i++){var l=a[i].group;null!=l?(l in o||(o[l]={name:a[i].groupName,data:[]}),o[l].data.push(a[i])):o._none.data.push(a[i])}var r=t(n).closest("table");for(var d in o)if(0!=o[d].data.length){"_none"!=d&&n.append("<h4>"+o[d].name+"</h4>");for(var s=0;s<o[d].data.length;s++){var c=o[d].data[s].name?":":"",f="<td>"+o[d].data[s].display+"</td>",u='style="float:left;"';t(f).children().length>0?n.append('<div class="row-detail"><strong '.concat(u,' class="">')+o[d].data[s].name+c+"</strong> "+o[d].data[s].display+"</div>"):t.data(e.footable,t(r).attr("id")+"_fooEditableCols").indexOf(o[d].data[s].name)>=0?n.append("<div><strong ".concat(u,">")+o[d].data[s].name+"</strong>"+c+' <input type="text" value="'+o[d].data[s].display+'"/></div>'):n.append("<div><strong ".concat(u,">")+o[d].data[s].name+"</strong>"+c+' <input type="text" readonly value="'+o[d].data[s].display+'"/></div>')}}""==t(n).text()&&(t(n).closest("tr").prev().removeClass("footable-detail-show"),t(n).closest("tr").remove())},parsers:{numeric:function(e){var n=t(e).data("value")||t(e).text().replace(/[^0-9.-]/g,"");return n=parseFloat(n),isNaN(n)&&(n=0),n},JSONDate:function(t){return"/Date("==String(t).substring(0,6)&&(dt=new Date(parseInt(String(t).substring(6))),d=dt.getDate(),m=dt.getMonth()+1,yy=dt.getFullYear(),t=m+"/"+d+"/"+yy),t},prettyDate:function(t){var e=Date.parse(t);return 0==isNaN(e)&&(e=new Date(e),d=e.getDate(),m=e.getMonth(),yy=e.getFullYear(),t=m+"/"+d+"/"+yy),t}}};function o(e){t(e).find("th").each(function(e){t(this).hasClass("fooEditable")&&t("td:nth-child("+(e+=1)+")").attr("contentEditable",!0)})}function i(a){var o=t.data(e.footable,t(a).attr("id")+"_buttonIndexes");return o===n&&((o={}).addCols=new Array,o.deleteCols=new Array,o.buttonCols=new Array,o.buttonColCt=0,t(a).find("th").each(function(e){var a=t(this).attr("data-ft-buttons");a!=n&&(o.buttonCols.push(e),a.indexOf("Add")>=0&&o.addCols.push(e),a.indexOf("Delete")>=0&&o.deleteCols.push(e),o.buttonColCt++)}),t.data(e.footable,t(a).attr("id")+"_buttonIndexes",o)),o}var l=null;function r(t){l=t}function s(a,o){var i=t(a).closest("table").attr("id"),r=function(e){var n=t(e).closest("tr");t(n).hasClass("footable-row-detail")&&(n=t(n).prev());return n}(a);if(!t(r).hasClass("fooNewRecord")||"button"==t(a).attr("type")){var d={};if(d.command=o,d.table=t.data(e.footable,i+"_serverTableName"),"Load"!=o){if(t(r).find("td").each(function(){var a=t.data(e.footable,i+"_colNames")[t(this).index()],l=(t(this).is(":visible"),t.data(e.footable,i+"_colControlType")[t(this).index()]),r=t.data(e.footable,i+"_idColIndexes").indexOf(t(this).index())>=0;if("Add"==o||r)if(l===n)d[a]=t(this).text().trim();else{var s=t(this).find("input").val().trim();"true"!=s&&(s="false"),d[a]=s}}),"Update"==o){var s,c=t.data(e.footable,i+"_colNames")[t(a).index()],f=t.data(a,"oldValue");if(t(a).is("input[type='text']"))c=t(a).closest("div").text().trim().slice(0,-1),s=t(a).val();else if(t.data(e.footable,i+"_colControlType")[t(a).index()]!==n){var u=t(a).find("input").val();"true"!=u&&(u="false"),s=u,f=!u}else s=t(a).text();d.fieldName=c.split(" ")[0].toLowerCase(),d.fieldOldValue=f,d.fieldValue=s,d.id=t(a).parent()[0].id}l&&l(d)}else!function(a,o){var i=t(a).closest("table").attr("id"),l=t.data(e.footable,i+"_dataHandlerURL");if(""==l)return;if("demo"==l||o===n){alert("Demo Mode:\r\nThe following JSON data would be sent to the server: \r\n"+JSON.stringify(o));var r={response:"Success",message:"Your message here"};return r.data=n,alert("Demo Mode:\r\nThe server responded: \r\n"+JSON.stringify(r)),void processServerResponse(a,JSON.stringify(r),o)}t.ajax({type:"POST",url:t.data(e.footable,i+"_dataHandlerURL"),contentType:"application/json; charset=uft-8",data:JSON.stringify(o)}).done(function(t){processServerResponse(a,t,o)}).fail(function(t){alert("error: "+JSON.stringify(t.responseText))})}(a,d)}}function c(n,a){var o=t(n).closest("table"),i=t(n).find("td");t.each(a,function(n,a){var l=t.data(e.footable,t(o).attr("id")+"_colNames").indexOf(n);-1!=l&&t(i).eq(l).text(a)})}function f(e){t(e).next().hasClass("footable-row-detail")&&t(e).next().remove(),t(e).prev().hasClass("footable-detail-show")&&t(e).prev().remove(),t(e).remove()}function u(e){t(e).find("tbody > tr").not(".fooNewRecord").remove()}function b(n){if(!(t(n).find(".fooNewRecord").length>0||t.data(e.footable,t(n).attr("id")+"_fooNewRecord").length<=0)){var a=t.data(e.footable,t(n).attr("id")+"_fooNewRecord").clone(!0,!0),o=t(n).find("th");t(a).find("td").each(function(e){t(o[e]).is(":visible")||t(this).hide()}),t(n).find("tbody").append(a)}}function h(a,l,r){if(l!==n){var d=t(a).find("th"),s="",c=i(a),f=t(a).data("ft");t(l).each(function(){var o='<tr id="'.concat(this.id,'">'),i=0;t.each(this,function(l,s){if("id"!==l){var c=d.eq(i).attr("data-return-type");if(c!=n){var u=f.options.parsers[c];s=u(s)}var b=t.data(e.footable,t(a).attr("id")+"_colControlType")[i];if(b!=n)switch(b){case"checkbox":s="true"==s||1==s?'<input type="checkbox" checked="checked" />':'<input type="checkbox" />';break;case"select":var h=r.select[l].map(function(t){var e=s===t.value?"selected":"";return'\n                  <option value="'.concat(t.value,'" ').concat(e,">\n                    ").concat(t.label,"\n                  </option>\n                  ")});s='\n                <div class="select-container">\n                  <select>\n                    '.concat(h.join(""),"\n                  </select>\n                </div>\n                ")}else s="<label>".concat(s,"</label>");var p="",g=t(d).eq(i).attr("data-class");g!==n&&(p=' class="'+g+'" ');var v="";t(d).eq(i).is(":visible")||(v=' style="display:none;" '),o+="<td"+p+v+">"+s+"</td>",i++}}),t(c.buttonColCt).each(function(){o+="<td></td>"}),s+=o+="</tr>"}),t(a).find("tbody").prepend(s),o(a),(f=t(a).data("ft"))&&(f.bindToggleSelectors(),t(a).data("ft").resize())}}t.fn.ftEditable=function(t){return{checkNewEmptyRecord:b,setUpdateHandler:r,deleteAllRows:u,updateRow:c,deleteRow:f,addRows:h}},e.footable.plugins.register(new function(){this.name="Footable Editable",this.init=function(n){t(n.table).data("ft",n);var a=t(n.table).attr("id");t.data(e.footable,a+"_dataHandlerURL",n.options.dataHandlerURL),t.data(e.footable,a+"_serverTableName",n.options.serverTableName),t.data(e.footable,a+"_autoLoad",n.options.autoLoad),t(n.table).bind({footable_initialized:function(o){var l=new Array,r=new Array,d=new Array,c=new Array;t(n.table).find("th").each(function(e){var n=t(this).text().trim();r.push(n),t(this).hasClass("fooEditable")&&d.push(n),t(this).hasClass("fooId")&&l.push(e),c.push(t(this).attr("data-ft-control"))}),t.data(e.footable,a+"_colNames",r),t.data(e.footable,a+"_idColIndexes",l),t.data(e.footable,a+"_fooEditableCols",d),t.data(e.footable,a+"_fooNewRecord",t(n.table).find(".fooNewRecord").clone(!0,!0)),t.data(e.footable,a+"_colControlType",c),t(n.table).on("change",'input[type="checkbox"]',function(e){var n=t(this).is(":checked");t(this).val(n),n?this.setAttribute("checked","checked"):this.removeAttribute("checked"),t(this).parent().trigger("td-cell-changed")}),t(n.table).on("focus","td",function(){t.data(this,"oldValue",t(this).text())}),t(n.table).on("blur","td",function(e){t(this).text()!=t.data(this,"oldValue")&&t(this).trigger("td-cell-changed")}),t(n.table).bind("td-cell-changed",function(e){i(this).buttonCols.indexOf(t(e.target).index())<0&&s(e.target,"Update")}),t(n.table).on("focus","input",function(e){t.data(this,"oldValue",t(this).val())}),t(n.table).on("change","input",function(a){if(t(a.target).closest("tr").hasClass("footable-row-detail")){var o=t(a.target).closest("div").text().trim().slice(0,-1),i=t.data(e.footable,t(n.table).attr("id")+"_colNames").indexOf(o);t(a.target).closest("tr").prev().find("td").eq(i).text(t.data(a.target,"oldValue")).text(t(a.target).val()),s(a.target,"Update")}})}}),o(n.table),t.data(e.footable,t(n.table).attr("id")+"_autoLoad")&&s(n.table,"Load"),t(n.table).on("click","tr",function(e){t(this).hasClass("footable-row-detail")||t(this).trigger("fooDetail-Populated")})}},a)}(t,window)}).call(this,n(21))},946:function(t,e,n){"use strict";n.r(e);var a=n(1140);e.default=a.a}}]);
//# sourceMappingURL=20.js.map