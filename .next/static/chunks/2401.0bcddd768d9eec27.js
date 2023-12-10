"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2401],{59859:function(e,a,r){var t=r(68421),o=r(98515),n=r(56168),s=(r(50862),r(35190)),l=r(95709),c=r(63753),d="table",i=n.forwardRef((function(e,a){var r=e.classes,l=e.className,i=e.component,u=void 0===i?d:i,m=e.padding,p=void 0===m?"default":m,f=e.size,v=void 0===f?"medium":f,h=e.stickyHeader,Z=void 0!==h&&h,y=(0,t.Z)(e,["classes","className","component","padding","size","stickyHeader"]),g=n.useMemo((function(){return{padding:p,size:v,stickyHeader:Z}}),[p,v,Z]);return n.createElement(c.Z.Provider,{value:g},n.createElement(u,(0,o.Z)({role:u===d?null:"table",ref:a,className:(0,s.Z)(r.root,l,Z&&r.stickyHeader)},y)))}));a.Z=(0,l.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(i)},89416:function(e,a,r){var t=r(98515),o=r(68421),n=r(56168),s=(r(50862),r(35190)),l=r(95709),c=r(53742),d={variant:"body"},i="tbody",u=n.forwardRef((function(e,a){var r=e.classes,l=e.className,u=e.component,m=void 0===u?i:u,p=(0,o.Z)(e,["classes","className","component"]);return n.createElement(c.Z.Provider,{value:d},n.createElement(m,(0,t.Z)({className:(0,s.Z)(r.root,l),ref:a,role:m===i?null:"rowgroup"},p)))}));a.Z=(0,l.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)},82570:function(e,a,r){var t=r(98515),o=r(68421),n=r(56168),s=(r(50862),r(35190)),l=r(95709),c=r(53742),d={variant:"head"},i="thead",u=n.forwardRef((function(e,a){var r=e.classes,l=e.className,u=e.component,m=void 0===u?i:u,p=(0,o.Z)(e,["classes","className","component"]);return n.createElement(c.Z.Provider,{value:d},n.createElement(m,(0,t.Z)({className:(0,s.Z)(r.root,l),ref:a,role:m===i?null:"rowgroup"},p)))}));a.Z=(0,l.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},28684:function(e,a,r){var t=r(98515),o=r(68421),n=r(56168),s=(r(50862),r(35190)),l=r(95709),c=r(53742),d=r(71545),i=n.forwardRef((function(e,a){var r=e.classes,l=e.className,d=e.component,i=void 0===d?"tr":d,u=e.hover,m=void 0!==u&&u,p=e.selected,f=void 0!==p&&p,v=(0,o.Z)(e,["classes","className","component","hover","selected"]),h=n.useContext(c.Z);return n.createElement(i,(0,t.Z)({ref:a,className:(0,s.Z)(r.root,l,h&&{head:r.head,footer:r.footer}[h.variant],m&&r.hover,f&&r.selected),role:"tr"===i?null:"row"},v))}));a.Z=(0,l.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,d.U1)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(i)},62401:function(e,a,r){r.r(a),r.d(a,{default:function(){return v}});r(56168);var t=r(50744),o=r.n(t),n=r(62044),s=r(59859),l=r(82570),c=r(28684),d=r(15475),i=r(89416),u=r(77956),m=r(42570),p=[{key:"address",width:50},{key:"amount",width:50,align:"right"}],f=r(8014),v=function(e){var a=e.className,r=e.items,t=(0,n.Z)("accounts").t,v=r.map((function(e){return{address:(0,f.jsx)(u.gj,{name:e.address.name,address:e.address.address,imageUrl:e.address.imageUrl}),amount:"".concat((0,m.uf)(e.amount.value,e.amount.exponent)," ").concat(e.amount.displayDenom.toUpperCase())}}));return(0,f.jsx)("div",{className:o()(a),children:(0,f.jsxs)(s.Z,{children:[(0,f.jsx)(l.Z,{children:(0,f.jsx)(c.Z,{children:p.map((function(e){return(0,f.jsx)(d.Z,{align:e.align,style:{width:"".concat(e.width,"%")},children:t(e.key)},e.key)}))})}),(0,f.jsx)(i.Z,{children:v.map((function(e,a){return(0,f.jsx)(c.Z,{children:p.map((function(r){return(0,f.jsx)(d.Z,{align:r.align,style:{width:"".concat(r.width,"%")},children:e[r.key]},"holders-row-".concat(a,"-").concat(r.key))}))},"holders-row-".concat(a))}))})]})})}}}]);