(window.webpackJsonp=window.webpackJsonp||[]).push([[59,92],{1352:function(e,n,t){var o=t(1353);"string"==typeof o&&(o=[[e.i,o,""]]);t(27)(o,{});o.locals&&(e.exports=o.locals)},1353:function(e,n,t){(e.exports=t(26)(!1)).push([e.i,".selection-filter .title {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  float: left; }\n\n.selection-filter .title > label {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  white-space: nowrap;\n  font-weight: normal;\n  user-select: none;\n  margin-left: 27px;\n  margin-top: 10px;\n  select: none;\n  width: 144px;\n  float: left; }\n\n.selection-filter .content {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 100%; }\n\n.selection-filter-controls {\n  margin: auto 0 auto calc(100% - 152px);\n  position: relative;\n  float: left; }\n\n.selection-filter-controls > button {\n  border: 1px solid #c6c6c6;\n  background-color: #e1e1e1;\n  border-radius: 6px;\n  position: relative;\n  overflow: hidden;\n  outline: none;\n  height: 24px;\n  width: 26px; }\n\n.selection-filter-controls > button:hover {\n  border: 1px solid #878787;\n  background-color: #f5f5f5; }\n\n.selection-filter-controls > button > label {\n  position: relative;\n  font-size: 20px;\n  color: #f0fcff;\n  top: -8px; }\n\n.selection-filter-controls > button > span {\n  pointer-events: none;\n  color: #9b9b9b; }\n",""])},1418:function(e,n,t){"use strict";t.r(n);t(1352);var o=t(30),i=t.n(o),a=t(120),r=t.n(a),s=t(43),d=t.n(s),l=t(2),c=t.n(l),u=t(3),h=t.n(u),p=t(5),f=t.n(p),v=t(50),m=t.n(v),k=t(4),g=t.n(k),b=t(460),y=t.n(b),w=t(6),x=t.n(w),E=t(458),N=t(461),C=t(901),T=t(502),M=t(466),_=t(122),L=(t(29),t(0)),O=t.n(L),A=function(e){function n(e,t){var o;return c()(this,n),(o=f()(this,g()(n).call(this,e,t))).onNodeChecked=o.onNodeChecked.bind(m()(o)),o.renderTitle=o.renderTitle.bind(m()(o)),o.eventTool=new T.a(o.viewer),o.react=t.react,o.leafNodesMap={},o}var t,o;return x()(n,e),h()(n,[{key:"load",value:function(){var e=this;return this.react.setState({models:[]}).then(function(){e.react.pushRenderExtension(e),e.models.forEach(function(n){n.getData().instanceTree&&e.addModel(n)})}),this.eventTool.on("buttondown",function(){return e.mouseDown=!0,!1}),this.eventTool.on("buttonup",function(n){return e.mouseDown=!1,!1}),this.eventTool.on("mousemove",function(n){if(!e.mouseDown){var t=e.viewer.clientToWorld(n.canvasX,n.canvasY,!0);if(t){var o=t.model.guid;return!e.leafNodesMap[o][t.dbId]}}return!1}),this.viewer.loadDynamicExtension("Viewing.Extension.ContextMenu").then(function(n){n.on("buildMenu",function(n){var t=n.model?n.model.guid:"",o=n.dbId;return!o||e.leafNodesMap[t][o]?n.menu:[]})}),console.log("Viewing.Extension.SelectionFilter loaded"),!0}},{key:"unload",value:function(){return console.log("Viewing.Extension.SelectionFilter unloaded"),this.eventTool.deactivate(),y()(g()(n.prototype),"unload",this).call(this),!0}},{key:"addModel",value:(o=d()(i.a.mark(function e(n){var t,o,a=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.react.getState(),o=t.models,!o.map(function(e){return e.guid}).includes(n.guid)){e.next=4;break}return e.abrupt("return");case 4:this.react.setState({models:[].concat(r()(o),[n])}),this.leafNodesMap[n.guid]={},M.a.getLeafNodes(n).then(function(e){e.forEach(function(e){a.leafNodesMap[n.guid][e]=!0})}),this.eventTool.activate();case 8:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})},{key:"onObjectTreeCreated",value:function(e){this.addModel(e.model)}},{key:"onSelection",value:function(e){var n=this;if(e.selections.length){var t=e.selections[0],o=t.dbIdArray[0],i=t.model;this.leafNodesMap[i.guid]&&(this.leafNodesMap[i.guid][o]||(setTimeout(function(){n.viewer.clearSelection()},300),this.viewer.clearSelection()))}}},{key:"onModelUnloaded",value:function(e){var n=this.react.getState().models,t=e.model;this.react.setState({models:n.filter(function(e){return e.guid!==t.guid})}),delete this.leafNodesMap[t.guid]}},{key:"onNodeChecked",value:function(e){var n=this,t=e.model,o=e.node;M.a.getLeafNodes(t,o.id).then(function(i){i.forEach(function(i){if(o.checked){var a=e.tree.getNodeById(i),r=a?a.checked:o.checked;n.leafNodesMap[t.guid][i]=r}else n.leafNodesMap[t.guid][i]=!1})})}},{key:"setDocking",value:(t=d()(i.a.mark(function e(t){var o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.ExtensionId,!t){e.next=7;break}return e.next=4,this.react.popRenderExtension(o);case 4:this.react.pushViewerPanel(this,{height:250,width:350}),e.next=10;break;case 7:return e.next=9,this.react.popViewerPanel(o);case 9:this.react.pushRenderExtension(this);case 10:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"renderTitle",value:function(e){var n=this,t=e?"fa fa-chain-broken":"fa fa-chain";return O.a.createElement("div",{className:"title"},O.a.createElement("label",null,"Selection Filter"),O.a.createElement("div",{className:"selection-filter-controls"},O.a.createElement("button",{onClick:function(){return n.setDocking(e)},title:"Toggle docking mode"},O.a.createElement("span",{className:t}))))}},{key:"renderContent",value:function(){var e=this,n=this.react.getState().models,t=n.map(function(n){return O.a.createElement(C.default,{onNodeChecked:e.onNodeChecked,viewer:e.viewer,key:n.guid,model:n})});return O.a.createElement("div",{className:"content"},O.a.createElement(_.b,{show:!n.length}),t)}},{key:"render",value:function(e){var n=this;return O.a.createElement(N.a,{renderTitle:function(){return n.renderTitle(e.docked)},showTitle:e.showTitle,className:this.className},this.renderContent())}},{key:"className",get:function(){return"selection-filter"}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.SelectionFilter"}}]),n}(E.a);Autodesk.Viewing.theExtensionManager.registerExtension(A.ExtensionId,A);n.default="Viewing.Extension.SelectionFilter"},458:function(e,n,t){"use strict";var o=t(459);n.a=o.a},459:function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return k});var o=t(120),i=t.n(o),a=t(2),r=t.n(a),s=t(3),d=t.n(s),l=t(5),c=t.n(l),u=t(4),h=t.n(u),p=t(50),f=t.n(p),v=t(6),m=t.n(v),k=function(n){function t(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r()(this,t),n=c()(this,h()(t).call(this,e)),Object.assign(f()(n),o.serviceContext),n.onModelCompletedLoad=n.onModelCompletedLoad.bind(f()(n)),n.onObjectTreeCreated=n.onObjectTreeCreated.bind(f()(n)),n.onModelRootLoaded=n.onModelRootLoaded.bind(f()(n)),n.onExtensionLoaded=n.onExtensionLoaded.bind(f()(n)),n.onModelActivated=n.onModelActivated.bind(f()(n)),n.onGeometryLoaded=n.onGeometryLoaded.bind(f()(n)),n.onToolbarCreated=n.onToolbarCreated.bind(f()(n)),n.onModelBeginLoad=n.onModelBeginLoad.bind(f()(n)),n.onModelUnloaded=n.onModelUnloaded.bind(f()(n)),n.onSelection=n.onSelection.bind(f()(n)),n.__onModelRootLoaded=n.__onModelRootLoaded.bind(f()(n)),n.__onModelActivated=n.__onModelActivated.bind(f()(n)),n.__onModelUnloaded=n.__onModelUnloaded.bind(f()(n)),n.__onModelLoaded=n.__onModelLoaded.bind(f()(n)),n.defaultOptions=i,n.options=Object.assign({},i,o),n.viewer=e;var a=e.impl.modelQueue().getModels();return n.models=a.map(function(e){return e.guid=e.guid||n.guid(),e}),n.initializeEvents(),n}return m()(t,n),d()(t,[{key:"load",value:function(){return!0}},{key:"unload",value:function(){var e=this;return this.viewerEvents.forEach(function(n){e.viewer.removeEventListener(n.id,e[n.handler])}),this.eventSink&&(this.eventSink.off("model.activated",this.__onModelActivated),this.eventSink.off("model.unloaded",this.__onModelUnloaded),this.eventSink.off("model.loaded",this.__onModelLoaded)),this.off(),!0}},{key:"reload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.options=Object.assign({},this.defaultOptions,this.options,e),!0}},{key:"onExtensionLoaded",value:function(e){}},{key:"onModelBeginLoad",value:function(e){}},{key:"onModelActivated",value:function(e){}},{key:"__onModelRootLoaded",value:function(e){var n=this;this.viewerEvent([Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,Autodesk.Viewing.GEOMETRY_LOADED_EVENT]).then(function(e){n.onModelCompletedLoad(e[0])})}},{key:"onModelRootLoaded",value:function(e){}},{key:"onObjectTreeCreated",value:function(e){}},{key:"onGeometryLoaded",value:function(e){}},{key:"onModelCompletedLoad",value:function(e){}},{key:"onToolbarCreated",value:function(e){}},{key:"onModelUnloaded",value:function(e){}},{key:"onSelection",value:function(e){}},{key:"__onModelLoaded",value:function(e){this.models=[].concat(i()(this.models),[e.model]),this.onModelBeginLoad(e)}},{key:"__onModelActivated",value:function(e){this.onModelActivated(e)}},{key:"__onModelUnloaded",value:function(e){this.models=this.models.filter(function(n){return n.guid!==e.model.guid}),this.onModelUnloaded(e)}},{key:"initializeEvents",value:function(){var e=this;this.options.eventSink&&(this.eventSink=this.options.eventSink,this.eventSink.on("model.loaded",this.__onModelLoaded),this.eventSink.on("model.activated",this.__onModelActivated),this.eventSink.on("model.unloaded",this.__onModelUnloaded)),this.viewerEvents=[{id:Autodesk.Viewing.EXTENSION_LOADED_EVENT,handler:"onExtensionLoaded"},{id:Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,handler:"onObjectTreeCreated"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"__onModelRootLoaded"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"onModelRootLoaded"},{id:Autodesk.Viewing.GEOMETRY_LOADED_EVENT,handler:"onGeometryLoaded"},{id:Autodesk.Viewing.TOOLBAR_CREATED_EVENT,handler:"onToolbarCreated"},{id:Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,handler:"onSelection"}],this.viewerEvents.forEach(function(n){e.viewerEvent(n.id,e[n.handler])})}},{key:"viewerEvent",value:function(n,t){var o=this;if(!t){var i=(Array.isArray(n)?n:[n]).map(function(n){return new e(function(e){o.viewer.addEventListener(n,function t(i){o.viewer.removeEventListener(n,t),e(i)})})});return e.all(i)}this.viewer.addEventListener(n,t)}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.MultiModelExtensionBase"}}]),t}(t(121).a.Composer(Autodesk.Viewing.Extension))}).call(this,t(31))},460:function(e,n,t){var o=t(465);function i(n,t,a){return"undefined"!=typeof Reflect&&Reflect.get?e.exports=i=Reflect.get:e.exports=i=function(e,n,t){var i=o(e,n);if(i){var a=Object.getOwnPropertyDescriptor(i,n);return a.get?a.get.call(t):a.value}},i(n,t,a||n)}e.exports=i},461:function(e,n,t){"use strict";var o=t(120),i=t.n(o),a=t(2),r=t.n(a),s=t(3),d=t.n(s),l=t(5),c=t.n(l),u=t(4),h=t.n(u),p=t(6),f=t.n(p),v=t(17),m=t.n(v),k=t(1),g=t.n(k),b=(t(29),t(462),t(0)),y=t.n(b),w=function(e){function n(){return r()(this,n),c()(this,h()(n).apply(this,arguments))}return f()(n,e),d()(n,[{key:"renderTitle",value:function(){return this.props.showTitle?this.props.renderTitle?this.props.renderTitle():y.a.createElement("div",{className:"title"},y.a.createElement("label",null,this.props.title)):y.a.createElement("div",null)}},{key:"renderChildren",value:function(){var e=this;return this.props.dimensions?y.a.Children.map(this.props.children,function(n){var t=Object.assign({},n.props,{dimensions:e.props.dimensions});return y.a.cloneElement(n,t)}):this.props.children}},{key:"render",value:function(){var e=["widget-container"].concat(i()(this.props.className.split(" "))),n=this.props.showTitle?"calc(100% - 40px)":"100%";return y.a.createElement("div",{className:e.join(" "),style:this.props.style},this.renderTitle(),y.a.createElement("div",{className:"content",style:{height:n}},this.renderChildren()))}}]),n}(y.a.Component);m()(w,"propTypes",{className:g.a.string,showTitle:g.a.bool}),m()(w,"defaultProps",{showTitle:!0,className:""});var x=w;n.a=x},462:function(e,n,t){var o=t(463);"string"==typeof o&&(o=[[e.i,o,""]]);t(27)(o,{});o.locals&&(e.exports=o.locals)},463:function(e,n,t){(e.exports=t(26)(!1)).push([e.i,".widget-container {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n.widget-container > .title {\n  border-bottom: 1px solid #cdcdcd;\n  background-color: #f5f5f5;\n  padding-right: 10px;\n  color: black;\n  position: relative;\n  overflow: hidden;\n  text-align: left;\n  height: 40px;\n  width: 100%; }\n\n.widget-container > .title > label {\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 27px;\n  margin-top: 10px; }\n\n.widget-container > .content {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n",""])},465:function(e,n,t){var o=t(4);e.exports=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=o(e)););return e}},475:function(e,n,t){"use strict";var o,i,a,r=t(120),s=t.n(r),d=t(2),l=t.n(d),c=t(3),u=t.n(c),h=t(5),p=t.n(h),f=t(4),v=t.n(f),m=t(6),k=t.n(m),g=t(17),b=t.n(g),y=t(38),w=t.n(y),x=t(39),E=t(1),N=t.n(E),C=t(0),T=t.n(C),M=(a=i=function(e){function n(){var e;return l()(this,n),(e=p()(this,v()(n).call(this))).state={checked:!0},e}return k()(n,e),u()(n,[{key:"componentWillMount",value:function(){this.setState({checked:this.props.checked})}},{key:"toggle",value:function(){if(!this.props.disabled){var e=!this.state.checked;this.setState({checked:e}),this.props.onChange&&this.props.onChange(e)}}},{key:"render",value:function(){var e=["switch-container",this.props.disabled?"disabled":""].concat(s()(this.props.className.split(" ")));return T.a.createElement("div",{className:e.join(" "),onClick:this.toggle},T.a.createElement("input",{ref:"switch",className:"switch",checked:this.state.checked,value:this.state.checked,onChange:function(){},type:"checkbox"}),T.a.createElement("div",null,T.a.createElement("span",null,T.a.createElement("g",{className:"icon icon-toolbar grid-view"})),T.a.createElement("span",null,T.a.createElement("g",{className:"icon icon-toolbar ticket-view"})),T.a.createElement("div",null)))}}]),n}(T.a.Component),b()(i,"propTypes",{className:N.a.string,checked:N.a.bool}),b()(i,"defaultProps",{checked:!0,className:""}),o=a,w()(o.prototype,"toggle",[x.a],Object.getOwnPropertyDescriptor(o.prototype,"toggle"),o.prototype),o);t(476),n.a=M},476:function(e,n,t){var o=t(477);"string"==typeof o&&(o=[[e.i,o,""]]);t(27)(o,{});o.locals&&(e.exports=o.locals)},477:function(e,n,t){(e.exports=t(26)(!1)).push([e.i,'.switch-container {\n  position: relative; }\n\n.switch-container *:hover {\n  cursor: pointer; }\n\n.switch-container.disabled *:hover {\n  cursor: not-allowed; }\n\ninput[type="checkbox"].switch {\n  pointer-events: none;\n  position: absolute;\n  cursor: pointer;\n  opacity: 0; }\n\ninput[type="checkbox"].switch + div {\n  vertical-align: middle;\n  width: 40px;\n  height: 20px;\n  border-radius: 999px;\n  background-color: #9d9d9d;\n  transition-duration: .4s;\n  transition-property: background-color, box-shadow;\n  cursor: pointer; }\n\ninput[type="checkbox"].switch + div span {\n  position: absolute;\n  font-size: 1.6rem;\n  color: #f5f5f5;\n  margin-top: 12px; }\n\ninput[type="checkbox"].switch + div span:nth-child(1) {\n  margin-left: 15px; }\n\ninput[type="checkbox"].switch + div span:nth-child(2) {\n  margin-left: 55px; }\n\ninput[type="checkbox"].switch:checked + div {\n  width: 60px;\n  background-position: 0 0;\n  background-color: #57BB00; }\n\n.switch-container.disabled input[type="checkbox"].switch + div {\n  background-color: rgba(157, 157, 157, 0.5); }\n\ninput[type="checkbox"].switch + div {\n  width: 60px;\n  height: 26px; }\n\ninput[type="checkbox"].switch + div > div {\n  float: left;\n  width: 24px;\n  height: 24px;\n  border-radius: inherit;\n  background: #f5f5f5;\n  transition-timing-function: cubic-bezier(1, 0, 0, 1);\n  transition-duration: 0.4s;\n  transition-property: transform, background-color;\n  pointer-events: none;\n  margin-top: 1px;\n  margin-left: 1px; }\n\ninput[type="checkbox"].switch:checked + div > div {\n  transform: translate3d(20px, 0, 0);\n  background-color: #f5f5f5; }\n\ninput[type="checkbox"].bigswitch.switch + div > div {\n  width: 44px;\n  height: 44px;\n  margin-top: 1px; }\n\ninput[type="checkbox"].switch:checked + div > div {\n  transform: translate3d(34px, 0, 0); }\n',""])},502:function(e,n,t){"use strict";var o=t(2),i=t.n(o),a=t(3),r=t.n(a),s=t(5),d=t.n(s),l=t(4),c=t.n(l),u=t(50),h=t.n(u),p=t(6),f=t.n(p),v=function(e){function n(e){var t;return i()(this,n),(t=d()(this,c()(n).call(this))).viewer=e,t.toolName=t.guid(),e.toolController.registerTool(h()(t)),t}return f()(n,e),r()(n,[{key:"getNames",value:function(){return[this.getName()]}},{key:"getName",value:function(){return this.toolName}},{key:"getPriority",value:function(){return 1e3}},{key:"activate",value:function(){this.active||(this.active=!0,this.viewer.toolController.activateTool(this.toolName),this.emit("activate",this))}},{key:"deactivate",value:function(){this.active&&(this.active=!1,this.viewer.toolController.deactivateTool(this.toolName),this.emit("deactivate",this))}},{key:"handleSingleClick",value:function(e,n){return this.emit("singleclick",e,n)}},{key:"handleDoubleClick",value:function(e,n){return this.emit("doubleclick",e,n)}},{key:"handleMouseMove",value:function(e){return this.emit("mousemove",e)}},{key:"handleWheelInput",value:function(e){return this.emit("mousewheel",e)}},{key:"handleGesture",value:function(e){return this.emit("gesture",e)}},{key:"handleKeyDown",value:function(e,n){return this.emit("keydown",e,n)}},{key:"handleButtonDown",value:function(e,n){return this.emit("buttondown",e,n)}},{key:"handleButtonUp",value:function(e,n){return this.emit("buttonup",e,n)}}]),n}(t(121).a);n.a=v},630:function(e,n,t){var o=t(891);"string"==typeof o&&(o=[[e.i,o,""]]);t(27)(o,{});o.locals&&(e.exports=o.locals)},891:function(e,n,t){(e.exports=t(26)(!1)).push([e.i,'.filter-tree-container .treeview-base lmvheader {\n  transition-property: background, border;\n  transition-timing-function: ease;\n  transition-duration: 1.5s;\n  transition-delay: 0.0s;\n  background: rgba(245, 245, 245, 0.5);\n  margin-bottom: -4px;\n  border: none;\n  height: 30px; }\n\n.filter-tree-container .treeview-base lmvheader:hover {\n  background: rgba(0, 105, 245, 0.35); }\n\n.filter-tree-container .treeview-base group > lmvheader > icon {\n  height: 20px;\n  float: left; }\n\n.filter-tree-container .treenode .switch-container {\n  border: 1px solid #9c9c9c;\n  border-radius: 12px;\n  margin: 0 8px 0 2px;\n  float: left; }\n\n.filter-tree-container .treenode .label-container {\n  pointer-events: none; }\n\n.filter-tree-container .treenode {\n  float: left; }\n\n.filter-tree-container input[type="checkbox"].switch + div {\n  width: 34px;\n  height: 16px; }\n\n.filter-tree-container input[type="checkbox"].switch:checked + div {\n  width: 34px; }\n\n.filter-tree-container input[type="checkbox"].switch:checked + div > div {\n  transform: translate3d(18px, 0, 0); }\n\n.filter-tree-container input[type="checkbox"].switch + div > div {\n  height: 16px;\n  width: 16px;\n  margin: 0; }\n',""])},901:function(e,n,t){"use strict";t.r(n);var o=t(2),i=t.n(o),a=t(3),r=t.n(a),s=t(5),d=t.n(s),l=t(4),c=t.n(l),u=t(6),h=t.n(u),p=t(120),f=t.n(p),v=t(17),m=t.n(v),k=t(50),g=t.n(k),b=t(121),y=t(1),w=t.n(y),x=t(29),E=t.n(x),N=t(475),C=t(464),T=t(0),M=t.n(T),_=function(e){function n(e){var t;return i()(this,n),(t=d()(this,c()(n).call(this))).setChecked=t.setChecked.bind(g()(t)),t.onExpand=t.onExpand.bind(g()(t)),t.on("expand",t.onExpand),t.instanceTree=e.instanceTree,t.delegate=e.delegate,t.disabled=e.disabled,t.checked=e.checked,t.parent=e.parent,t.group=e.group,t.name=e.name,t.type=e.type,t.id=e.id,t.children=[],t}return h()(n,e),r()(n,[{key:"onExpand",value:function(){this.off("expand",this.onExpand),this.loadChildren()}},{key:"setDisabled",value:function(e){this.disabled=e,this.reactNode=E.a.render(M.a.createElement(L,{onChecked:this.setChecked,disabled:this.disabled,checked:this.checked,name:this.name}),this.domContainer),(e||this.checked)&&this.children.forEach(function(n){n.setDisabled(e,!0)})}},{key:"setChecked",value:function(e){this.checked=e,this.delegate.emit("node.checked",this),this.children.forEach(function(n){n.setDisabled(!e)})}},{key:"mount",value:function(e){this.domContainer=e,this.collapse(),this.reactNode=E.a.render(M.a.createElement(L,{onChecked:this.setChecked,disabled:this.disabled,checked:this.checked,name:this.name}),this.domContainer)}},{key:"expand",value:function(){var e=this.domContainer.parentElement.parentElement;e.classList.remove("collapsed"),e.classList.add("expanded"),this.emit("expand")}},{key:"collapse",value:function(){var e=this.domContainer.parentElement.parentElement;e.classList.remove("expanded"),e.classList.add("collapsed")}},{key:"loadChildren",value:function(){var e=this,t=this.getChildIds(this.id);this.children=t.map(function(t){var o=new n({disabled:e.disabled||!e.checked,name:e.instanceTree.getNodeName(t),group:e.getChildIds(t).length,instanceTree:e.instanceTree,delegate:e.delegate,checked:!0,parent:e,type:"",id:t});return e.addChild(o),o})}},{key:"destroy",value:function(){this.children.forEach(function(e){e.destroy()}),E.a.unmountComponentAtNode(this.domContainer),this.delegate.emit("node.destroy",this)}},{key:"getChildIds",value:function(e){var n=[];return this.instanceTree.enumNodeChildren(e,function(e){n.push(e)}),n}}]),n}(b.a),L=function(e){function n(){return i()(this,n),d()(this,c()(n).apply(this,arguments))}return h()(n,e),r()(n,[{key:"render",value:function(){var e=this,n=["treenode"].concat(f()(this.props.className.split(" ")));return M.a.createElement("div",{className:n.join(" ")},M.a.createElement(N.a,{onChange:function(n){return e.props.onChecked(n)},disabled:this.props.disabled,checked:this.props.checked,className:"handle-click"}),M.a.createElement(C.a,{text:this.props.name}))}}]),n}(M.a.Component);m()(L,"propTypes",{className:w.a.string}),m()(L,"defaultProps",{className:""});var O=t(473),A=function(e){function n(e){var t;return i()(this,n),(t=d()(this,c()(n).call(this))).instanceTree=e.getData().instanceTree,t}return h()(n,e),r()(n,[{key:"createRootNode",value:function(){var e=this.instanceTree.getRootId();return this.rootNode=new _({name:this.instanceTree.getNodeName(e),group:this.getChildIds(e).length,instanceTree:this.instanceTree,delegate:this,checked:!0,parent:null,type:"root",id:e}),this.rootNode}},{key:"destroy",value:function(){this.rootNode.destroy(),this.off()}},{key:"createTreeNode",value:function(e,n){arguments.length>2&&void 0!==arguments[2]&&arguments[2];var t=document.createElement("div");n.appendChild(t),e.mount(t)}},{key:"nodeClickSelector",value:function(e){var n=e.target.parentNode.className;return!(e.target.className.indexOf("handle-click")>-1||n.indexOf("handle-click")>-1)}},{key:"forEachChild",value:function(e,n){e.addChild=n}},{key:"getChildIds",value:function(e){var n=[];return this.instanceTree.enumNodeChildren(e,function(e){n.push(e)}),n}}]),n}(O.a),S=(t(630),function(e){function n(e){var t;return i()(this,n),(t=d()(this,c()(n).call(this,e))).delegate=new A(e.model),t.delegate.on("node.dblClick",function(n){t.props.viewer.isolate(n.id,e.model)}),t.delegate.on("node.checked",function(n){t.props.onNodeChecked({model:e.model,tree:t.tree,node:n})}),t.delegate.on("node.destroy",function(e){t.tree.destroyNode(e.id)}),t}return h()(n,e),r()(n,[{key:"componentDidMount",value:function(){this.rootNode=this.delegate.createRootNode(),this.tree=new O.b(this.delegate,this.rootNode,this.treeContainer,{excludeRoot:!1}),this.rootNode.expand(),this.rootNode.setChecked(!0)}},{key:"componentWillUnmount",value:function(){this.delegate.destroy(),this.tree.destroy()}},{key:"render",value:function(){var e=this;return M.a.createElement("div",{className:"filter-tree-container",ref:function(n){return e.treeContainer=n}})}}]),n}(M.a.Component));n.default=S}}]);
//# sourceMappingURL=59.js.map