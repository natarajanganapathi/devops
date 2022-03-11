"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[6513],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(f,a(a({ref:n},d),{},{components:t})):o.createElement(f,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5231:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],s={slug:"windows",title:"Windows",tags:["windows"],sidebar_position:4},l=void 0,c={unversionedId:"operating-system/windows",id:"operating-system/windows",title:"Windows",description:"Domain Controller Creation",source:"@site/docs/operating-system/windows.md",sourceDirName:"operating-system",slug:"/operating-system/windows",permalink:"/devops/docs/operating-system/windows",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/operating-system/windows.md",tags:[{label:"windows",permalink:"/devops/docs/tags/windows"}],version:"current",sidebarPosition:4,frontMatter:{slug:"windows",title:"Windows",tags:["windows"],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Ubuntu",permalink:"/devops/docs/operating-system/ubuntu"}},d=[{value:"Domain Controller Creation",id:"domain-controller-creation",children:[],level:2},{value:"Active Directory Domain Controller Configuration",id:"active-directory-domain-controller-configuration",children:[],level:2},{value:"Enable Multiple RDP Sessions in Windows Server OS",id:"enable-multiple-rdp-sessions-in-windows-server-os",children:[],level:2},{value:"Windows Commands",id:"windows-commands",children:[],level:2}],u={toc:d};function p(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"domain-controller-creation"},"Domain Controller Creation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Server Manager -> Add Roles and Features -> Instalation Type -> Role based or feature based Instalation -> Server Roles -> Active Directory Domain Services -> Add Features -> Restart the detination server if required -> Install")),(0,i.kt)("h2",{id:"active-directory-domain-controller-configuration"},"Active Directory Domain Controller Configuration"),(0,i.kt)("h2",{id:"enable-multiple-rdp-sessions-in-windows-server-os"},"Enable Multiple RDP Sessions in Windows Server OS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Windows Run -> ",(0,i.kt)("inlineCode",{parentName:"li"},"gpedit.msc")),(0,i.kt)("li",{parentName:"ol"},"Go to Computer Configuration > Administrative Templates > Windows Components > Remote Desktop Services > Remote Desktop Session Host > Connections."),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Restrict Remote Desktop Services user to a single Remote Desktop Services session")," to Disabled."),(0,i.kt)("li",{parentName:"ol"},"Double click ",(0,i.kt)("inlineCode",{parentName:"li"},"Limit number of connections")," and set the RD Maximum Connections allowed to 999999.")),(0,i.kt)("h2",{id:"windows-commands"},"Windows Commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nping google.com         # lookup domain name\nnslookup google.com     # Reverse lookup domain name\n\n")))}p.isMDXComponent=!0}}]);