"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[9666],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(f,s(s({ref:n},p),{},{components:t})):r.createElement(f,s({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8246:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),s=["components"],a={slug:"nginx",title:"NGINX",tags:["nginx"],sidebar_position:2},l="NGINX",c={unversionedId:"tools/nginx",id:"tools/nginx",title:"NGINX",description:"NGINX Instalation",source:"@site/docs/tools/nginx.md",sourceDirName:"tools",slug:"/tools/nginx",permalink:"/devops/docs/tools/nginx",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/tools/nginx.md",tags:[{label:"nginx",permalink:"/devops/docs/tags/nginx"}],version:"current",sidebarPosition:2,frontMatter:{slug:"nginx",title:"NGINX",tags:["nginx"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ansible",permalink:"/devops/docs/tools/ansible"},next:{title:"Kubernetes",permalink:"/devops/docs/tools/kubernetes"}},p=[{value:"NGINX Instalation",id:"nginx-instalation",children:[{value:"Windows",id:"windows",children:[],level:3},{value:"Ubuntu",id:"ubuntu",children:[],level:3}],level:2},{value:"HTTPS",id:"https",children:[{value:"HTTPS Web Server Sample Config",id:"https-web-server-sample-config",children:[],level:3},{value:"HTTPS Proxy Server Sample Configuration",id:"https-proxy-server-sample-configuration",children:[],level:3}],level:2},{value:"Sample nginx.config files",id:"sample-nginxconfig-files",children:[],level:2}],u={toc:p};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nginx"},"NGINX"),(0,o.kt)("h2",{id:"nginx-instalation"},"NGINX Instalation"),(0,o.kt)("h3",{id:"windows"},"Windows"),(0,o.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,o.kt)("h2",{id:"https"},"HTTPS"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please ensure that ",(0,o.kt)("inlineCode",{parentName:"p"},"443")," port is enabled in ",(0,o.kt)("inlineCode",{parentName:"p"},"VM's firewall")," and cloud provider's ",(0,o.kt)("inlineCode",{parentName:"p"},"security group / Networking"),". "))),(0,o.kt)("h3",{id:"https-web-server-sample-config"},"HTTPS Web Server Sample Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="nginx.conf"',title:'"nginx.conf"'},"worker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    #gzip  on;\n\n    # HTTPS server\n    #\n    server {\n       listen       443 ssl;\n       server_name  localhost {{SUBDOMAIN}}.mission.io;\n\n       ssl_certificate      cert.pem;\n       ssl_certificate_key  cert.key;\n\n       ssl_session_cache    shared:SSL:1m;\n       ssl_session_timeout  5m;\n\n       ssl_ciphers  HIGH:!aNULL:!MD5;\n       ssl_prefer_server_ciphers  on;\n\n       location / {\n           root   html;\n           index  index.html index.htm;\n       }\n    }\n\n    server {\n        listen 80;\n        server_name {{SUBDOMAIN}}.mission.io;\n        return 301 https://{{SUBDOMAIN}}.mission.io$request_uri;\n    }\n}\n")),(0,o.kt)("h3",{id:"https-proxy-server-sample-configuration"},"HTTPS Proxy Server Sample Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="nginx.conf"',title:'"nginx.conf"'},"worker_processes  1;\n\nevents {\n    worker_connections  1024;\n}\n\nhttp {\n    include       mime.types;\n    default_type  application/octet-stream;\n\n    sendfile        on;\n    #tcp_nopush     on;\n\n    #keepalive_timeout  0;\n    keepalive_timeout  65;\n\n    client_max_body_size 1000M;\n    #gzip  on;\n\n    # HTTPS server\n    #\n    server {\n       listen       443 ssl;\n       server_name  localhost {{SUBDOMAIN}}.mission.io;\n\n       ssl_certificate      cert.pem;\n       ssl_certificate_key  cert.key;\n\n       ssl_session_cache    shared:SSL:1m;\n       ssl_session_timeout  5m;\n\n       ssl_ciphers  HIGH:!aNULL:!MD5;\n       ssl_prefer_server_ciphers  on;\n\n       client_max_body_size 1000M;\n\n       location / {\n           root   html;\n           index  index.html index.htm;\n       }\n       \n       location /mission-api/ {\n            proxy_pass http://127.0.0.1:8081$request_uri;\n            client_max_body_size 1000M;\n       }\n    }\n}\n")),(0,o.kt)("h2",{id:"sample-nginxconfig-files"},"Sample nginx.config files"),(0,o.kt)("p",null,"TODO:"))}m.isMDXComponent=!0}}]);