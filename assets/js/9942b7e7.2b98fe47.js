"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[7975],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(b,a(a({ref:n},u),{},{components:t})):r.createElement(b,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4747:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={slug:"kubernetes",title:"Kubernetes",tags:["kubernetes","container"],sidebar_position:4},l=void 0,c={unversionedId:"tools/kubernetes",id:"tools/kubernetes",title:"Kubernetes",description:"1. Deployment Strategies In Kubernetes",source:"@site/docs/tools/kubernetes.md",sourceDirName:"tools",slug:"/tools/kubernetes",permalink:"/devops/docs/tools/kubernetes",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/tools/kubernetes.md",tags:[{label:"kubernetes",permalink:"/devops/docs/tags/kubernetes"},{label:"container",permalink:"/devops/docs/tags/container"}],version:"current",sidebarPosition:4,frontMatter:{slug:"kubernetes",title:"Kubernetes",tags:["kubernetes","container"],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Container",permalink:"/devops/docs/tools/container"},next:{title:"Terraform",permalink:"/devops/docs/tools/terraform"}},u=[{value:"Kubernetes Commands",id:"kubernetes-commands",children:[],level:2},{value:"Kubernetes Ingress",id:"kubernetes-ingress",children:[{value:"NGINX Ingress Controller",id:"nginx-ingress-controller",children:[],level:3}],level:2},{value:"Minikube",id:"minikube",children:[{value:"Start Minikube",id:"start-minikube",children:[],level:3},{value:"Access minikube docker environment",id:"access-minikube-docker-environment",children:[],level:3}],level:2}],p={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Reference")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://auth0.com/blog/deployment-strategies-in-kubernetes/"},"Deployment Strategies In Kubernetes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://learnk8s.io/troubleshooting-deployments"},"A visual guide on troubleshooting Kubernetes deployments")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/hackernoon/today-i-learned-pull-docker-image-from-gcr-google-container-registry-in-any-non-gcp-kubernetes-5f8298f28969"},"How to a pull Docker Image from GCR in any non-GCP Kubernetes cluster"))))),(0,i.kt)("h2",{id:"kubernetes-commands"},"Kubernetes Commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -it <pod-name> -- [sh | bin/sh | bin/bash] # Execute a container\n\n")),(0,i.kt)("h2",{id:"kubernetes-ingress"},"Kubernetes Ingress"),(0,i.kt)("h3",{id:"nginx-ingress-controller"},"NGINX Ingress Controller"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get ingress\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/"},"NGINX Ingress Controller Annotations")),(0,i.kt)("h2",{id:"minikube"},"Minikube"),(0,i.kt)("h3",{id:"start-minikube"},"Start Minikube"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"minikube start --cpus=4 --memory=8g --disk-size=25g --container-runtime=[docker | crio]\n")),(0,i.kt)("h3",{id:"access-minikube-docker-environment"},"Access minikube docker environment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"eval $(minikube docker-env)\n")))}m.isMDXComponent=!0}}]);