"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7749],{59859:function(e,a,t){var o=t(68421),r=t(98515),n=t(56168),s=(t(50862),t(35190)),c=t(95709),l=t(63753),i="table",d=n.forwardRef((function(e,a){var t=e.classes,c=e.className,d=e.component,u=void 0===d?i:d,m=e.padding,p=void 0===m?"default":m,v=e.size,f=void 0===v?"medium":v,h=e.stickyHeader,Z=void 0!==h&&h,y=(0,o.Z)(e,["classes","className","component","padding","size","stickyHeader"]),g=n.useMemo((function(){return{padding:p,size:f,stickyHeader:Z}}),[p,f,Z]);return n.createElement(l.Z.Provider,{value:g},n.createElement(u,(0,r.Z)({role:u===i?null:"table",ref:a,className:(0,s.Z)(t.root,c,Z&&t.stickyHeader)},y)))}));a.Z=(0,c.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,r.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},89416:function(e,a,t){var o=t(98515),r=t(68421),n=t(56168),s=(t(50862),t(35190)),c=t(95709),l=t(53742),i={variant:"body"},d="tbody",u=n.forwardRef((function(e,a){var t=e.classes,c=e.className,u=e.component,m=void 0===u?d:u,p=(0,r.Z)(e,["classes","className","component"]);return n.createElement(l.Z.Provider,{value:i},n.createElement(m,(0,o.Z)({className:(0,s.Z)(t.root,c),ref:a,role:m===d?null:"rowgroup"},p)))}));a.Z=(0,c.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)},82570:function(e,a,t){var o=t(98515),r=t(68421),n=t(56168),s=(t(50862),t(35190)),c=t(95709),l=t(53742),i={variant:"head"},d="thead",u=n.forwardRef((function(e,a){var t=e.classes,c=e.className,u=e.component,m=void 0===u?d:u,p=(0,r.Z)(e,["classes","className","component"]);return n.createElement(l.Z.Provider,{value:i},n.createElement(m,(0,o.Z)({className:(0,s.Z)(t.root,c),ref:a,role:m===d?null:"rowgroup"},p)))}));a.Z=(0,c.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},28684:function(e,a,t){var o=t(98515),r=t(68421),n=t(56168),s=(t(50862),t(35190)),c=t(95709),l=t(53742),i=t(71545),d=n.forwardRef((function(e,a){var t=e.classes,c=e.className,i=e.component,d=void 0===i?"tr":i,u=e.hover,m=void 0!==u&&u,p=e.selected,v=void 0!==p&&p,f=(0,r.Z)(e,["classes","className","component","hover","selected"]),h=n.useContext(l.Z);return n.createElement(d,(0,o.Z)({ref:a,className:(0,s.Z)(t.root,c,h&&{head:t.head,footer:t.footer}[h.variant],m&&t.hover,v&&t.selected),role:"tr"===d?null:"row"},f))}));a.Z=(0,c.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,i.U1)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},7749:function(e,a,t){t.r(a),t.d(a,{default:function(){return y}});t(56168);var o=t(50744),r=t.n(o),n=t(62044),s=t(93620),c=t(59859),l=t(82570),i=t(28684),d=t(15475),u=t(89416),m=t(77956),p=t(21667),v=t(80201),f=t(42570),h=[{key:"address",width:40},{key:"amount",align:"right",width:30},{key:"completionTime",align:"right",width:30}],Z=t(8014),y=function(e){var a=e.className,t=e.items,o=(0,n.Z)("accounts").t,y=(0,p.sJ)(v.cK),g=t.map((function(e){return{address:(0,Z.jsx)(m.gj,{address:e.address.address,imageUrl:e.address.imageUrl,name:e.address.name}),amount:"".concat((0,f.uf)(e.amount.value,e.amount.exponent)," ").concat(e.amount.displayDenom.toUpperCase()),completionTime:(0,s.z)(s.Z.utc(e.completionTime),y)}}));return(0,Z.jsx)("div",{className:r()(a),children:(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(l.Z,{children:(0,Z.jsx)(i.Z,{children:h.map((function(e){return(0,Z.jsx)(d.Z,{align:e.align,style:{width:"".concat(e.width,"%")},children:o(e.key)},e.key)}))})}),(0,Z.jsx)(u.Z,{children:g.map((function(e,a){return(0,Z.jsx)(i.Z,{children:h.map((function(t){var o=e[t.key];return(0,Z.jsx)(d.Z,{align:t.align,style:{width:"".concat(t.width,"%")},children:o},"holders-row-".concat(a,"-").concat(t.key))}))},"holders-row-".concat(a))}))})]})})}}}]);