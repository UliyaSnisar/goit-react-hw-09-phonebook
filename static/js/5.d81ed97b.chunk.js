(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[5],{165:function(e,t,n){"use strict";var a=n(86),r=n(87);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),o=(0,a(n(88)).default)(i.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");t.default=o},181:function(e,t,n){"use strict";var a=n(1),r=n(0),i=(n(9),n(11)),o={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},c=function(e){return Object(a.a)({color:e.palette.text.primary},e.typography.body2,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}})};t.a=Object(i.a)((function(e){return{"@global":{html:o,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:Object(a.a)({margin:0},c(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(e){var t=e.children,n=void 0===t?null:t;return e.classes,r.createElement(r.Fragment,null,n)}))},182:function(e,t,n){"use strict";var a=n(5),r=n(1),i=n(0),o=(n(9),n(7)),c=n(11),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=i.forwardRef((function(e,t){var n=e.alignContent,c=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,d=e.classes,u=e.className,f=e.component,m=void 0===f?"div":f,g=e.container,p=void 0!==g&&g,x=e.direction,b=void 0===x?"row":x,h=e.item,j=void 0!==h&&h,v=e.justify,y=e.justifyContent,O=void 0===y?"flex-start":y,w=e.lg,S=void 0!==w&&w,C=e.md,k=void 0!==C&&C,z=e.sm,W=void 0!==z&&z,M=e.spacing,N=void 0===M?0:M,E=e.wrap,I=void 0===E?"wrap":E,F=e.xl,D=void 0!==F&&F,R=e.xs,T=void 0!==R&&R,B=e.zeroMinWidth,V=void 0!==B&&B,q=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),G=Object(o.a)(d.root,u,p&&[d.container,0!==N&&d["spacing-xs-".concat(String(N))]],j&&d.item,V&&d.zeroMinWidth,"row"!==b&&d["direction-xs-".concat(String(b))],"wrap"!==I&&d["wrap-xs-".concat(String(I))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==c&&d["align-content-xs-".concat(String(c))],"flex-start"!==(v||O)&&d["justify-content-xs-".concat(String(v||O))],!1!==T&&d["grid-xs-".concat(String(T))],!1!==W&&d["grid-sm-".concat(String(W))],!1!==k&&d["grid-md-".concat(String(k))],!1!==S&&d["grid-lg-".concat(String(S))],!1!==D&&d["grid-xl-".concat(String(D))]);return i.createElement(m,Object(r.a)({className:G,ref:t},q))})),f=Object(c.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var r=e.spacing(a);0!==r&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(r,2)),width:"calc(100% + ".concat(d(r),")"),"& > $item":{padding:d(r,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(r.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=f},183:function(e,t,n){"use strict";var a=n(1),r=n(5),i=n(0),o=(n(9),n(7)),c=n(11),s=n(55),l=Object(s.a)(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=i.forwardRef((function(e,t){var n=e.alt,c=e.children,s=e.classes,d=e.className,u=e.component,f=void 0===u?"div":u,m=e.imgProps,g=e.sizes,p=e.src,x=e.srcSet,b=e.variant,h=void 0===b?"circular":b,j=Object(r.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),v=null,y=function(e){var t=e.src,n=e.srcSet,a=i.useState(!1),r=a[0],o=a[1];return i.useEffect((function(){if(t||n){o(!1);var e=!0,a=new Image;return a.src=t,a.srcSet=n,a.onload=function(){e&&o("loaded")},a.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,n]),r}({src:p,srcSet:x}),O=p||x,w=O&&"error"!==y;return v=w?i.createElement("img",Object(a.a)({alt:n,src:p,srcSet:x,sizes:g,className:s.img},m)):null!=c?c:O&&n?n[0]:i.createElement(l,{className:s.fallback}),i.createElement(f,Object(a.a)({className:Object(o.a)(s.root,s.system,s[h],d,!w&&s.colorDefault),ref:t},j),v)}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)},205:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n(166),r=n(0),i=n(17),o=n(24),c=n(20),s=n(183),l=n(151),d=n(181),u=n(202),f=n(182),m=n(165),g=n.n(m),p=n(178),x=n(155),b=n(148),h=n(2),j=Object(b.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function v(){var e=Object(i.c)(),t=Object(r.useState)(""),n=Object(a.a)(t,2),m=n[0],b=n[1],v=Object(r.useState)(""),y=Object(a.a)(v,2),O=y[0],w=y[1],S=Object(r.useState)(""),C=Object(a.a)(S,2),k=C[0],z=C[1],W=Object(r.useCallback)((function(t){t.preventDefault(),e(c.a.register({name:m,email:O,password:k})),b(""),w(""),z("")}),[e,m,O,k]),M=j();return Object(h.jsxs)(x.a,{component:"main",maxWidth:"xs",children:[Object(h.jsx)(d.a,{}),Object(h.jsxs)("div",{className:M.paper,children:[Object(h.jsx)(s.a,{className:M.avatar,children:Object(h.jsx)(g.a,{})}),Object(h.jsx)(p.a,{component:"h1",variant:"h5",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(h.jsxs)("form",{className:M.form,onSubmit:W,noValidate:!0,children:[Object(h.jsxs)(f.a,{container:!0,spacing:2,children:[Object(h.jsx)(f.a,{item:!0,xs:12,children:Object(h.jsx)(u.a,{value:m,onChange:function(e){return b(e.currentTarget.value)},autoComplete:"on",name:"name",variant:"outlined",required:!0,fullWidth:!0,id:"Name",label:"\u0418\u043c\u044f",autoFocus:!0})}),Object(h.jsx)(f.a,{item:!0,xs:12,children:Object(h.jsx)(u.a,{name:"email",value:O,onChange:function(e){return w(e.currentTarget.value)},autoComplete:"on",variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"\u041f\u043e\u0447\u0442\u0430"})}),Object(h.jsx)(f.a,{item:!0,xs:12,children:Object(h.jsx)(u.a,{name:"password",value:k,onChange:function(e){return z(e.currentTarget.value)},autoComplete:"off",variant:"outlined",required:!0,fullWidth:!0,label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",id:"password"})})]}),Object(h.jsx)(l.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:M.submit,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(h.jsx)(f.a,{container:!0,justifyContent:"flex-end",children:Object(h.jsx)(f.a,{item:!0,children:Object(h.jsx)(o.b,{to:"/login",variant:"body2",children:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? \u0412\u043e\u0439\u0442\u0438"})})})]})]})]})}}}]);
//# sourceMappingURL=5.d81ed97b.chunk.js.map