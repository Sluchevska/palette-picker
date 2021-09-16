(this["webpackJsonppalette-picker-hooks"]=this["webpackJsonppalette-picker-hooks"]||[]).push([[0],{19:function(e,n,r){},27:function(e,n,r){},28:function(e,n,r){"use strict";r.r(n);var t,c,o=r(0),i=r.n(o),s=r(11),a=r.n(s),d=(r(19),r(7)),b=r(8),j=b.a.div(t||(t=Object(d.a)(["\n  padding: 24px;\n"]))),h=Object.freeze({sm:16}),l=r(1),u=b.a.button(c||(c=Object(d.a)(["\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n  margin-right:5px;\n  border-radius:5px;  \n  padding: 16px 24px;\n  border: 1px solid black;\n  box-shadow: 6px 7px 8px rgb(85, 42, 85);\n  border-radius: 5px;\n  color: ",";\n  background-color: ",";\n  text-transform: uppercase;\n  cursor: pointer;\n  :hover {\n    background-color: ",";\n  }\n  > svg {\n    margin-right: 8px;\n  }\n"])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.success})),x=function(e){var n=e.icon,r=e.children;return Object(l.jsxs)(u,{children:[n&&Object(l.jsx)(n,{size:h.sm}),r]})},f=r(2),O=r(6),p=(r(24),r(29)),m=r(13),g=r.n(m),v=Object.freeze({colors:{primary:"#1976d2",secondary:"#ffffff",error:"#f44336",warning:"#ff9800",info:"#2196f3",success:"#4caf50",common:{white:"#ffffff",black:"#000000"},text:{primary:"#212121",secondary:"#757575"}}}),k=Object(o.createContext)(void 0),y=function(e){var n=e.children,r=Object(o.useState)(v),t=Object(f.a)(r,2),c=t[0],i=t[1],s=Object(o.useCallback)((function(e){i((function(n){return g()({},n,e)}))}),[]),a=Object(o.useCallback)((function(){return i(v)}),[]),d=Object(o.useMemo)((function(){return{theme:c,updateTheme:s,resetTheme:a}}),[a,c,s]);return Object(l.jsx)(k.Provider,{value:d,children:Object(l.jsx)(p.b,{theme:c,children:n})})},T=function(){var e=function(){var e=Object(o.useContext)(k);if(void 0===e)throw new Error("useTheme was called outside ThemeContext.Provider");return e}(),n=e.theme,r=e.updateTheme,t=e.resetTheme,c=Object(O.b)("hex",n.colors.primary),i=Object(f.a)(c,2),s=i[0],a=i[1],d=Object(O.b)("hex",n.colors.secondary),b=Object(f.a)(d,2),j=b[0],h=b[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{onClick:t,children:"Reset theme"}),Object(l.jsxs)("div",{style:{display:"flex",gap:20},children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Select ",Object(l.jsx)("b",{children:"BUTTON BACKGROUND"})," color"]}),Object(l.jsx)(O.a,{width:300,height:200,color:s,onChange:function(e){a(e),r({colors:{primary:e.hex}})},hideHSV:!0,dark:!0})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Select ",Object(l.jsx)("b",{children:"BUTTON TEXT"})," color"]}),Object(l.jsx)(O.a,{width:300,height:200,color:j,onChange:function(e){h(e),r({colors:{secondary:e.hex}})},hideHSV:!0,dark:!0})]})]})]})},w=r(14);r(27);var C=function(){return Object(l.jsx)(y,{children:Object(l.jsxs)(j,{children:[Object(l.jsx)(x,{icon:w.a,children:"Super button"}),Object(l.jsx)(T,{})]})})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.44700c1c.chunk.js.map