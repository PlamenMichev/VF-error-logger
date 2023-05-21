"use strict";(self.webpackChunk_minimal_material_kit_react=self.webpackChunk_minimal_material_kit_react||[]).push([[402],{2227:function(e,n,r){var i=r(1413),t=r(5987),o=r(5964),s=r(7313),l=r(7829),c=r(6417),a=["children","title","meta"],d=(0,s.forwardRef)((function(e,n){var r=e.children,s=e.title,d=void 0===s?"":s,h=e.meta,u=(0,t.Z)(e,a);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.ql,{children:[(0,c.jsx)("title",{children:"".concat(d," | Minimal-UI")}),h]}),(0,c.jsx)(l.Z,(0,i.Z)((0,i.Z)({ref:n},u),{},{children:r}))]})}));n.Z=d},4402:function(e,n,r){r.r(n),r.d(n,{default:function(){return A}});var i=r(5861),t=r(9439),o=r(4687),s=r.n(o),l=r(3428),c=r(4641),a=r(1629),d=r(6835),h=r(7829),u=r(5281),x=r(3467),Z=r(4076),f=r(7478),j=r(1405),g=r(9536),p=r(2227),m=r(641),v=r(7592),w=(r(5937),r(6417));(0,v.ZP)(h.Z)((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));var b=r(7131),C=r(6767),k=r(6202);function S(e){var n=e.actions,r=e.open,i=e.onClose,t=e.onOpen;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(b.Z,{onClick:t,children:(0,w.jsx)(C.Z,{icon:"eva:more-vertical-fill",width:20,height:20})}),(0,w.jsx)(k.Z,{open:Boolean(r),anchorEl:r,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},arrow:"right-top",sx:{mt:-1,width:160,"& .MuiMenuItem-root":{px:1,typography:"body2",borderRadius:.75,"& svg":{mr:2,width:20,height:20}}},children:n})]})}var y=r(1413);function D(e){var n=e.emptyRows,r=e.height;return n?(0,w.jsx)(Z.Z,{sx:(0,y.Z)({},r&&{height:r*n}),children:(0,w.jsx)(f.Z,{colSpan:9})}):null}var L=r(3477),T=r(7860),_=r(2558),E={border:0,margin:-1,padding:0,width:"1px",height:"1px",overflow:"hidden",position:"absolute",whiteSpace:"nowrap",clip:"rect(0 0 0 0)"};function R(e){var n=e.order,r=e.orderBy,i=e.rowCount,t=void 0===i?0:i,o=e.headLabel,s=e.numSelected,l=void 0===s?0:s,c=e.onSort,a=e.onSelectAllRows,d=e.sx;return(0,w.jsx)(L.Z,{sx:d,children:(0,w.jsxs)(Z.Z,{children:[a&&(0,w.jsx)(f.Z,{padding:"checkbox",children:(0,w.jsx)(T.Z,{indeterminate:l>0&&l<t,checked:t>0&&l===t,onChange:function(e){return a(e.target.checked)}})}),o.map((function(e){return(0,w.jsx)(f.Z,{align:e.align||"left",sortDirection:r===e.id&&n,sx:{width:e.width,minWidth:e.minWidth},children:c?(0,w.jsxs)(_.Z,{hideSortIcon:!0,active:r===e.id,direction:r===e.id?n:"asc",onClick:function(){return c(e.id)},sx:{textTransform:"capitalize"},children:[e.label,r===e.id?(0,w.jsx)(h.Z,{sx:(0,y.Z)({},E),children:"desc"===n?"sorted descending":"sorted ascending"}):null]}):e.label},e.id)}))]})})}var I=r(7313),O=r(2335);function A(){var e=(0,m.Z)().translate,n=(0,I.useState)([]),r=(0,t.Z)(n,2),o=r[0],Z=r[1],f=(0,I.useState)(!0),j=(0,t.Z)(f,2),g=j[0],v=j[1];return(0,I.useEffect)((function(){var e=function(){var e=(0,i.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O.E0+"logger?page=".concat(0,"&searchTerm=''"));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,console.log(r),v(!1),Z(r);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,w.jsx)(p.Z,{title:e("errorsListTitle"),children:(0,w.jsxs)(l.Z,{children:[(0,w.jsx)(c.Z,{title:e("errorsListTitle"),sx:{mb:3}}),(0,w.jsxs)(a.Z,{sx:{overflow:"hidden"},children:[g&&(0,w.jsx)(d.Z,{children:(0,w.jsx)(h.Z,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",m:5,children:(0,w.jsx)(u.Z,{})})}),!g&&o.length>0&&(0,w.jsxs)(d.Z,{children:[(0,w.jsx)(R,{headLabel:[{id:"errorCode",label:e("errorsList.errorCode")},{id:"description",label:e("errorsList.description")},{id:"user",label:e("errorsList.user")},{id:"date",label:e("errorsList.date")},{id:""}]}),(0,w.jsx)(x.Z,{children:o.map((function(e){return(0,w.jsx)(z,{row:e},e.id)}))})]}),!g&&0===o.length&&(0,w.jsx)(d.Z,{children:(0,w.jsx)(D,{emptyRows:0})})]})]})})}function z(e){var n=e.row,r=(0,I.useState)(null),i=(0,t.Z)(r,2),o=i[0],s=i[1],l=function(){s(null)};return(0,w.jsxs)(Z.Z,{children:[(0,w.jsx)(f.Z,{children:n.status}),(0,w.jsxs)(f.Z,{children:[n.description,"..."]}),(0,w.jsx)(f.Z,{children:n.user}),(0,w.jsx)(f.Z,{children:new Date(n.date).toLocaleDateString("da-DK")+" "+new Date(n.date).toLocaleTimeString("da-DK")}),(0,w.jsx)(f.Z,{align:"right",children:(0,w.jsx)(S,{open:o,onOpen:function(e){s(e.currentTarget)},onClose:l,actions:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(j.Z,{onClick:function(){l(),console.log("DOWNLOAD",n.id)},children:[(0,w.jsx)(C.Z,{icon:"eva:download-fill"}),"Download"]}),(0,w.jsxs)(j.Z,{onClick:function(){l(),console.log("PRINT",n.id)},children:[(0,w.jsx)(C.Z,{icon:"eva:printer-fill"}),"Print"]}),(0,w.jsxs)(j.Z,{onClick:function(){l(),console.log("SHARE",n.id)},children:[(0,w.jsx)(C.Z,{icon:"eva:share-fill"}),"Share"]}),(0,w.jsx)(g.Z,{sx:{borderStyle:"dashed"}}),(0,w.jsxs)(j.Z,{onClick:function(){l(),console.log("DELETE",n.id)},sx:{color:"error.main"},children:[(0,w.jsx)(C.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})})})]},n.id)}}}]);