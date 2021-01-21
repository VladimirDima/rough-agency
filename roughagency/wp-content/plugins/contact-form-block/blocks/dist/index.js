!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=u(e);if(t){var r=u(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return i(this,a)}}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.r(t);var s=wp.i18n.__,m=wp.element,f=m.Component,d=m.Fragment,p=wp.components,_=p.IconButton,b=p.PanelBody,g=p.RangeControl,h=p.Button,y=p.CheckboxControl,v=p.Toolbar,R=p.TextControl,w=p.SelectControl,E=p.withNotices,x=wp.editor,C=x.BlockControls,N=x.PanelColorSettings,S=x.MediaUpload,k=x.InspectorControls,O=window.wp.blockEditor.RichText,A=E(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(u,e);var t,a,n,i=c(u);function u(){return r(this,u),i.apply(this,arguments)}return t=u,(a=[{key:"onSelectMedia",value:function(e){this.props.setAttributes({header_image_id:e.id,header_image_url:e.url})}},{key:"render",value:function(){var e=this,t=this.props.attributes,a=t.name_label,n=t.email_label,r=t.message_label,o=t.header,l=t.header_image_id,c=t.header_image_url,i=t.header_image_size,u=t.header_image_align,m=t.header_title,f=t.header_text,p=t.button_text,E=t.button_color,x=t.button_text_color,A=t.theme,M=t.message_rows,P="meow-contact-form",j=A?" meow-contact-form--"+A:"",B="".concat(P,"__group"),T="".concat(B,"-label"),H="".concat(B,"-input"),L="".concat(B,"-textarea"),D=React.createElement(C,null,o&&React.createElement(v,null,"right"===u?React.createElement(_,{className:"components-toolbar__control",label:s("Show media on left"),icon:"align-pull-left",onClick:function(){return e.props.setAttributes({header_image_align:"left"})}}):React.createElement(_,{className:"components-toolbar__control",label:s("Show media on right"),icon:"align-pull-right",onClick:function(){return e.props.setAttributes({header_image_align:"right"})}}),React.createElement(S,{onSelect:function(t){return e.onSelectMedia(t)},allowedTypes:"image",render:function(e){var t=e.open;return React.createElement(_,{className:"components-toolbar__control",label:s("Edit media"),icon:"format-image",onClick:t})}})));return React.createElement(d,null,React.createElement("form",{className:P+" "+P+"--editor"+j},o&&React.createElement("div",{className:P+"__header"},c&&"left"===u&&React.createElement("img",{className:P+"__header--image "+P+"__header--image--left",style:{height:i,width:i},src:c}),React.createElement("div",{className:P+"__header__content"},React.createElement(O,{className:P+"__header__content--title",tagName:"div",value:m,onChange:function(t){return e.props.setAttributes({header_title:t})}}),React.createElement(O,{className:P+"__header__content--text",tagName:"div",value:f,onChange:function(t){return e.props.setAttributes({header_text:t})}})),c&&"right"===u&&React.createElement("img",{className:P+"__header--image "+P+"__header--image--right",style:{height:i,width:i},src:c})),React.createElement("div",{className:B},React.createElement(O,{className:T,tagName:"label",value:a,forHtml:"name",onChange:function(t){return e.props.setAttributes({name_label:t})}}),React.createElement("input",{className:H,id:"name",name:"name",required:!0,disabled:!0})),React.createElement("div",{className:B},React.createElement(O,{className:T,tagName:"label",value:n,forHtml:"email",onChange:function(t){return e.props.setAttributes({email_label:t})}}),React.createElement("input",{className:H,id:"email",name:"email",required:!0,disabled:!0})),React.createElement("div",{className:B},React.createElement(O,{className:T,tagName:"label",value:r,forHtml:"message",onChange:function(t){return e.props.setAttributes({message_label:t})}}),React.createElement("textarea",{className:L,id:"message",name:"message",rows:M,required:!0,disabled:!0})),React.createElement("input",{className:H,style:{background:E,color:x},type:"submit",value:p,required:!0,disabled:!0})),D,React.createElement(k,null,React.createElement(b,{title:s("Settings"),initialOpen:!1},React.createElement(w,{label:s("Theme"),value:A,onChange:function(t){return e.props.setAttributes({theme:t})},options:[{label:"Default",value:"default"},{label:"Meow Apps",value:"meowapps"},{label:"None",value:"none"}]}),React.createElement(R,{label:"Button Text",value:p,onChange:function(t){return e.props.setAttributes({button_text:t})}}),React.createElement(y,{label:"Show header",checked:o,onChange:function(t){return e.props.setAttributes({header:t})}}),React.createElement(g,{label:"Message Size",value:M,min:1,max:50,onChange:function(t){return e.props.setAttributes({message_rows:t})}})),React.createElement(N,{title:s("Color Settings"),initialOpen:!1,colorSettings:[{value:E,onChange:function(t){return e.props.setAttributes({button_color:t||"#3d84f6"})},label:s("Button Color")},{value:x,onChange:function(t){return e.props.setAttributes({button_text_color:t||"white"})},label:s("Button Text Color")}]}),o&&l&&React.createElement(b,{title:s("Media Image"),initialOpen:!1},l&&React.createElement(g,{label:"Size",value:i,min:40,max:400,onChange:function(t){return e.props.setAttributes({header_image_size:t})}}),l&&React.createElement(h,{isPrimary:!0,onClick:function(t){return e.props.setAttributes({header_image_id:null,header_image_url:null})}},"Remove"))))}}])&&o(t.prototype,a),n&&o(t,n),u}(f)),M=wp.i18n.__,P=wp.element.Fragment,j=wp.blocks,B=j.registerBlockType,T=(j.createBlock,React.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("rect",{width:"20",height:"20",fill:"white"}),React.createElement("path",{d:"M16.6667 3.33334V13.3333H6.66667V3.33334H16.6667ZM16.6667 1.66667H6.66667L5 3.33334V13.3333L6.66667 15H16.6667L18.3333 13.3333V3.33334L16.6667 1.66667Z",fill:"#2D4B6D"}),React.createElement("path",{d:"M10 10L10.8333 11.6667L13.3333 9.16667L15.8333 12.5H7.5L10 10Z",fill:"#1ABC9C"}),React.createElement("path",{d:"M1.66667 5V16.6667L3.33333 18.3333H15V16.6667H3.33333V5H1.66667Z",fill:"#2D4B6D"}))),H={theme:{type:"string",default:"default"},header:{type:"boolean",default:!1},header_image_id:{type:"number",default:null},header_image_align:{type:"string",default:"left"},header_image_size:{type:"integer",default:50},header_image_url:{type:"string",default:null},header_title:{type:"string",default:"Get in Touch"},header_text:{type:"string",default:"Leave your message and we'll get back to you shortly."},name_label:{type:"string",default:"Name"},email_label:{type:"string",default:"E-mail"},message_label:{type:"string",default:"Message"},message_rows:{type:"integer",default:5},button_text:{type:"string",default:"Send"},button_color:{type:"string",default:"#3d84f6"},button_text_color:{type:"string",default:"white"}},L=function(e){var t=function(e){var t=e.name_label,a=e.email_label,n=e.message_label,r=e.header,o=e.header_image_id,l=e.header_image_size,c=e.header_image_align,i=e.header_title,u=e.header_text,s=e.button_text,m=e.button_color,f=e.button_text_color,d=e.align,p=e.theme,_=e.message_rows;return'\n\t\tname_label="'.concat(t,'" \n\t\temail_label="').concat(a,'" \n\t\tmessage_label="').concat(n,'" \n\t\theader="').concat(r,'" \n\t\theader_image_id="').concat(o,'" \n\t\theader_image_size="').concat(l,'" \n\t\theader_image_align="').concat(c,'" \n\t\theader_title="').concat(i,'" \n\t\theader_text="').concat(u,'" \n\t\tbutton_text="').concat(s,'" \n\t\tbutton_color="').concat(m,'" \n\t\tbutton_text_color="').concat(f,'" \n\t\talign="').concat(d,'" \n\t\ttheme="').concat(p,'" \n\t\tmessage_rows="').concat(_,'" \n\t').trim()}(e);return"[contact-form-block ".concat(t,"][/contact-form-block]")};B("contact-form-block/contact-form-block",{title:M("Contact Form Block"),description:M("Display a contact form."),icon:T,category:"layout",keywords:[M("contact"),M("form")],attributes:H,supports:{align:["full","wide"]},edit:A,save:function(e){var t=e.attributes,a=L(t);return React.createElement(P,null,a)},deprecated:[{attributes:H,save:function(e){var t=e.attributes,a=L(t).replace("message_label=",'phone_label="Phone" message_label=');return React.createElement(P,null,a)}}]})}]);
//# sourceMappingURL=index.js.map