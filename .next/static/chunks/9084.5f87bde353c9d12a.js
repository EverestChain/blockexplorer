"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9084],{59859:function(e,a,t){var r=t(68421),o=t(98515),n=t(56168),s=(t(50862),t(35190)),l=t(95709),c=t(63753),i="table",d=n.forwardRef((function(e,a){var t=e.classes,l=e.className,d=e.component,u=void 0===d?i:d,h=e.padding,m=void 0===h?"default":h,f=e.size,p=void 0===f?"medium":f,v=e.stickyHeader,Z=void 0!==v&&v,b=(0,r.Z)(e,["classes","className","component","padding","size","stickyHeader"]),g=n.useMemo((function(){return{padding:m,size:p,stickyHeader:Z}}),[m,p,Z]);return n.createElement(c.Z.Provider,{value:g},n.createElement(u,(0,o.Z)({role:u===i?null:"table",ref:a,className:(0,s.Z)(t.root,l,Z&&t.stickyHeader)},b)))}));a.Z=(0,l.Z)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},89416:function(e,a,t){var r=t(98515),o=t(68421),n=t(56168),s=(t(50862),t(35190)),l=t(95709),c=t(53742),i={variant:"body"},d="tbody",u=n.forwardRef((function(e,a){var t=e.classes,l=e.className,u=e.component,h=void 0===u?d:u,m=(0,o.Z)(e,["classes","className","component"]);return n.createElement(c.Z.Provider,{value:i},n.createElement(h,(0,r.Z)({className:(0,s.Z)(t.root,l),ref:a,role:h===d?null:"rowgroup"},m)))}));a.Z=(0,l.Z)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)},82570:function(e,a,t){var r=t(98515),o=t(68421),n=t(56168),s=(t(50862),t(35190)),l=t(95709),c=t(53742),i={variant:"head"},d="thead",u=n.forwardRef((function(e,a){var t=e.classes,l=e.className,u=e.component,h=void 0===u?d:u,m=(0,o.Z)(e,["classes","className","component"]);return n.createElement(c.Z.Provider,{value:i},n.createElement(h,(0,r.Z)({className:(0,s.Z)(t.root,l),ref:a,role:h===d?null:"rowgroup"},m)))}));a.Z=(0,l.Z)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},28684:function(e,a,t){var r=t(98515),o=t(68421),n=t(56168),s=(t(50862),t(35190)),l=t(95709),c=t(53742),i=t(71545),d=n.forwardRef((function(e,a){var t=e.classes,l=e.className,i=e.component,d=void 0===i?"tr":i,u=e.hover,h=void 0!==u&&u,m=e.selected,f=void 0!==m&&m,p=(0,o.Z)(e,["classes","className","component","hover","selected"]),v=n.useContext(c.Z);return n.createElement(d,(0,r.Z)({ref:a,className:(0,s.Z)(t.root,l,v&&{head:t.head,footer:t.footer}[v.variant],h&&t.hover,f&&t.selected),role:"tr"===d?null:"row"},p))}));a.Z=(0,l.Z)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:(0,i.U1)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},49084:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});t(56168);var r=t(50744),o=t.n(r),n=t(51621),s=t.n(n),l=t(93620),c=t(62044),i=t(75657),d=t(17385),u=t(59859),h=t(82570),m=t(28684),f=t(15475),p=t(89416),v=t(57875),Z=t(48625),b=t(77956),g=t(32376),y=[{key:"block",width:25},{key:"hash",width:25},{key:"result",align:"right",width:25},{key:"time",align:"right",width:25}],w=t(8014),k=function(e){var a=e.className,t=e.items,r=(0,g.Z)((function(){return{root:{overflow:"auto"},table:{"& .MuiTableBody-root":{"& .MuiTableCell-root":{whiteSpace:"nowrap"}}}}}))(),n=(0,c.Z)("transactions").t,k=t.map((function(e){return{block:(0,w.jsx)(i.default,{href:(0,Z.b5)(e.height),passHref:!0,children:(0,w.jsx)(d.Z,{variant:"body1",component:"a",children:s()(e.height).format("0,0")})}),hash:(0,w.jsx)(i.default,{href:(0,Z.$J)(e.hash),passHref:!0,children:(0,w.jsx)(d.Z,{variant:"body1",component:"a",children:(0,v.I)(e.hash,{beginning:15,ending:5})})}),result:(0,w.jsx)(b.x4,{success:e.success}),time:l.Z.utc(e.timestamp).fromNow(),messages:s()(e.messages).format("0,0")}}));return(0,w.jsx)("div",{className:o()(a,r.root),children:(0,w.jsxs)(u.Z,{className:r.table,children:[(0,w.jsx)(h.Z,{children:(0,w.jsx)(m.Z,{children:y.map((function(e){return(0,w.jsx)(f.Z,{align:e.align,style:{width:"".concat(e.width,"%")},children:n(e.key)},e.key)}))})}),(0,w.jsx)(p.Z,{children:k.map((function(e,a){return(0,w.jsx)(m.Z,{children:y.map((function(a,t){var r=a.key,o=a.align,n=e[r];return(0,w.jsx)(f.Z,{style:{width:"".concat(a.width,"%")},align:o,children:n},"".concat(r,"-").concat(t))}))},"row-".concat(a))}))})]})})}}}]);