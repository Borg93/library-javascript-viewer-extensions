(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1356:function(e,n,t){e.exports=t.p+"a91f7a1f684a8cae1c93a3e15fda6826.png"},1357:function(e,n,t){var o=t(1358);"string"==typeof o&&(o=[[e.i,o,""]]);t(27)(o,{});o.locals&&(e.exports=o.locals)},1358:function(e,n,t){(e.exports=t(26)(!1)).push([e.i,"",""])},1421:function(e,n,t){"use strict";t.r(n);var o=t(30),i=t.n(o),a=t(43),d=t.n(a),r=t(2),l=t.n(r),s=t(3),u=t.n(s),c=t(5),v=t.n(c),h=t(50),E=t.n(h),f=t(4),p=t.n(f),M=t(460),g=t.n(M),m=t(6),_=t.n(m),y=t(458),w=t(466),x=(t(1356),t(528)),k=function(e){function n(e,t){var o;return l()(this,n),(o=v()(this,p()(n).call(this,e,t))).update=o.update.bind(E()(o)),o.stopwatch=new x.a,o}var t;return _()(n,e),u()(n,[{key:"load",value:function(){var e={side:THREE.DoubleSide,fragmentShader:"\n      uniform sampler2D texture;\n      //uniform float param;\n      varying vec2 vUv;\n      void main() {\n        vec4 tex = texture2D(texture, vUv);\n        //float r = cos(param);\n        //float g = sin(param);\n        //float b = cos(param) * sin(param);\n        //gl_FragColor = vec4(vUv.x, 0, 0, 1.0);\n        //gl_FragColor = vec4(1.0, 0.0, 0.0 , 1.0);\n        gl_FragColor = tex;\n      }\n    ",vertexShader:"\n      varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      }\n    ",attributes:{},uniforms:{texture:{value:this.generateTexture(12),type:"t"}}};return this.material=this.createShaderMaterial(Object.assign({},e,{name:"shader-material"})),this.updateActive=!0,console.log("Viewing.Extension.ShaderMaterial loaded"),!0}},{key:"unload",value:function(){return console.log("Viewing.Extension.ShaderMaterial unloaded"),this.updateActive=!1,g()(p()(n.prototype),"unload",this).call(this),!0}},{key:"createShaderMaterial",value:function(e){var n=new THREE.ShaderMaterial(e);return this.viewer.impl.getMaterials().addMaterial(e.name,n,!0),n}},{key:"generateTexture",value:function(e){for(var n=[],t=0;t<e;++t)for(var o=0;o<e;++o){var i=Math.random(),a=parseInt(255*i);n.push(a,255-a,0,255)}var d=new THREE.DataTexture(Uint8Array.from(n),e,e,THREE.RGBAFormat,THREE.UnsignedByteType,THREE.UVMapping);return d.minFilter=THREE.LinearMipMapLinearFilter,d.magFilter=THREE.LinearFilter,d.needsUpdate=!0,d}},{key:"calculateUVsGeo",value:function(e,n){e.computeBoundingBox();var t=e.boundingBox,o=t.min,i=t.max,a=new THREE.Vector2(i.x-o.x,i.y-o.y),d=new THREE.Vector2(0-o.x,0-o.y),r=e.faceVertexUvs[0],l=a.x/(2*n),s=a.y/(2*n),u=a.x/n,c=a.y/n;r.splice(0,r.length),e.faces.forEach(function(n){var t=e.vertices[n.a],o=e.vertices[n.b],i=e.vertices[n.c];r.push([new THREE.Vector2(Math.abs((l+t.x+d.x-u)/a.x),Math.abs((s+t.y+d.y-c)/a.y)),new THREE.Vector2(Math.abs((l+o.x+d.x-u)/a.x),Math.abs((s+o.y+d.y-c)/a.y)),new THREE.Vector2(Math.abs((l+i.x+d.x-u)/a.x),Math.abs((s+i.y+d.y-c)/a.y))])}),e.uvsNeedUpdate=!0}},{key:"onSelection",value:(t=d()(i.a.mark(function e(n){var t,o,a,d;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.selections&&n.selections.length&&(t=n.selections[0],o=t.dbIdArray[0],a=this.viewer.model,d=w.a.buildComponentMesh(this.viewer,a,o,null,this.material),this.calculateUVsGeo(d.geometry,12),w.a.hide(this.viewer,o,a),this.viewer.impl.scene.add(d),this.viewer.impl.sceneUpdated(!0),this.viewer.clearSelection());case 1:case"end":return e.stop()}},e,this)})),function(e){return t.apply(this,arguments)})},{key:"setMaterial",value:function(e,n,t){var o=e.getFragmentList();n.forEach(function(e){o.setMaterial(e,t)})}},{key:"update",value:function(){if(this.updateActive){requestAnimationFrame(this.update);var e=.001*this.stopwatch.getElapsedMs(),n=this.material.uniforms.param;n.value=(n.value+e)%(2*Math.PI),n.needsUpdate=!0,this.viewer.impl.invalidate(!0)}}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.ShaderMaterial"}}]),n}(y.a);Autodesk.Viewing.theExtensionManager.registerExtension(k.ExtensionId,k);t(1357),n.default="Viewing.Extension.ShaderMaterial"},458:function(e,n,t){"use strict";var o=t(459);n.a=o.a},459:function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return M});var o=t(120),i=t.n(o),a=t(2),d=t.n(a),r=t(3),l=t.n(r),s=t(5),u=t.n(s),c=t(4),v=t.n(c),h=t(50),E=t.n(h),f=t(6),p=t.n(f),M=function(n){function t(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};d()(this,t),n=u()(this,v()(t).call(this,e)),Object.assign(E()(n),o.serviceContext),n.onModelCompletedLoad=n.onModelCompletedLoad.bind(E()(n)),n.onObjectTreeCreated=n.onObjectTreeCreated.bind(E()(n)),n.onModelRootLoaded=n.onModelRootLoaded.bind(E()(n)),n.onExtensionLoaded=n.onExtensionLoaded.bind(E()(n)),n.onModelActivated=n.onModelActivated.bind(E()(n)),n.onGeometryLoaded=n.onGeometryLoaded.bind(E()(n)),n.onToolbarCreated=n.onToolbarCreated.bind(E()(n)),n.onModelBeginLoad=n.onModelBeginLoad.bind(E()(n)),n.onModelUnloaded=n.onModelUnloaded.bind(E()(n)),n.onSelection=n.onSelection.bind(E()(n)),n.__onModelRootLoaded=n.__onModelRootLoaded.bind(E()(n)),n.__onModelActivated=n.__onModelActivated.bind(E()(n)),n.__onModelUnloaded=n.__onModelUnloaded.bind(E()(n)),n.__onModelLoaded=n.__onModelLoaded.bind(E()(n)),n.defaultOptions=i,n.options=Object.assign({},i,o),n.viewer=e;var a=e.impl.modelQueue().getModels();return n.models=a.map(function(e){return e.guid=e.guid||n.guid(),e}),n.initializeEvents(),n}return p()(t,n),l()(t,[{key:"load",value:function(){return!0}},{key:"unload",value:function(){var e=this;return this.viewerEvents.forEach(function(n){e.viewer.removeEventListener(n.id,e[n.handler])}),this.eventSink&&(this.eventSink.off("model.activated",this.__onModelActivated),this.eventSink.off("model.unloaded",this.__onModelUnloaded),this.eventSink.off("model.loaded",this.__onModelLoaded)),this.off(),!0}},{key:"reload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.options=Object.assign({},this.defaultOptions,this.options,e),!0}},{key:"onExtensionLoaded",value:function(e){}},{key:"onModelBeginLoad",value:function(e){}},{key:"onModelActivated",value:function(e){}},{key:"__onModelRootLoaded",value:function(e){var n=this;this.viewerEvent([Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,Autodesk.Viewing.GEOMETRY_LOADED_EVENT]).then(function(e){n.onModelCompletedLoad(e[0])})}},{key:"onModelRootLoaded",value:function(e){}},{key:"onObjectTreeCreated",value:function(e){}},{key:"onGeometryLoaded",value:function(e){}},{key:"onModelCompletedLoad",value:function(e){}},{key:"onToolbarCreated",value:function(e){}},{key:"onModelUnloaded",value:function(e){}},{key:"onSelection",value:function(e){}},{key:"__onModelLoaded",value:function(e){this.models=[].concat(i()(this.models),[e.model]),this.onModelBeginLoad(e)}},{key:"__onModelActivated",value:function(e){this.onModelActivated(e)}},{key:"__onModelUnloaded",value:function(e){this.models=this.models.filter(function(n){return n.guid!==e.model.guid}),this.onModelUnloaded(e)}},{key:"initializeEvents",value:function(){var e=this;this.options.eventSink&&(this.eventSink=this.options.eventSink,this.eventSink.on("model.loaded",this.__onModelLoaded),this.eventSink.on("model.activated",this.__onModelActivated),this.eventSink.on("model.unloaded",this.__onModelUnloaded)),this.viewerEvents=[{id:Autodesk.Viewing.EXTENSION_LOADED_EVENT,handler:"onExtensionLoaded"},{id:Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,handler:"onObjectTreeCreated"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"__onModelRootLoaded"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"onModelRootLoaded"},{id:Autodesk.Viewing.GEOMETRY_LOADED_EVENT,handler:"onGeometryLoaded"},{id:Autodesk.Viewing.TOOLBAR_CREATED_EVENT,handler:"onToolbarCreated"},{id:Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,handler:"onSelection"}],this.viewerEvents.forEach(function(n){e.viewerEvent(n.id,e[n.handler])})}},{key:"viewerEvent",value:function(n,t){var o=this;if(!t){var i=(Array.isArray(n)?n:[n]).map(function(n){return new e(function(e){o.viewer.addEventListener(n,function t(i){o.viewer.removeEventListener(n,t),e(i)})})});return e.all(i)}this.viewer.addEventListener(n,t)}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.MultiModelExtensionBase"}}]),t}(t(121).a.Composer(Autodesk.Viewing.Extension))}).call(this,t(31))},460:function(e,n,t){var o=t(465);function i(n,t,a){return"undefined"!=typeof Reflect&&Reflect.get?e.exports=i=Reflect.get:e.exports=i=function(e,n,t){var i=o(e,n);if(i){var a=Object.getOwnPropertyDescriptor(i,n);return a.get?a.get.call(t):a.value}},i(n,t,a||n)}e.exports=i},465:function(e,n,t){var o=t(4);e.exports=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=o(e)););return e}}}]);
//# sourceMappingURL=83.js.map