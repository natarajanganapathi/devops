"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[1783],{3905:function(e,a,n){n.d(a,{Zo:function(){return p},kt:function(){return u}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),c=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return n?t.createElement(h,s(s({ref:a},p),{},{components:n})):t.createElement(h,s({ref:a},p))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},360:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var t=n(7462),r=n(3366),l=(n(7294),n(3905)),s=["components"],i={slug:"bash",title:"Bash",tags:["bash"],sidebar_position:10},o=void 0,c={unversionedId:"tools/bash",id:"tools/bash",title:"Bash",description:"Docs",source:"@site/docs/tools/bash.md",sourceDirName:"tools",slug:"/tools/bash",permalink:"/devops/docs/tools/bash",editUrl:"https://github.com/natarajanmca11/devops/blob/main/docs/tools/bash.md",tags:[{label:"bash",permalink:"/devops/docs/tags/bash"}],version:"current",sidebarPosition:10,frontMatter:{slug:"bash",title:"Bash",tags:["bash"],sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Helm Charts",permalink:"/devops/docs/tools/helm"}},p=[{value:"Docs",id:"docs",children:[],level:2},{value:"Bash Script file",id:"bash-script-file",children:[],level:2},{value:"Execute",id:"execute",children:[],level:2},{value:"Variables",id:"variables",children:[{value:"Declare variable",id:"declare-variable",children:[],level:3},{value:"Access the variable",id:"access-the-variable",children:[],level:3}],level:2},{value:"Grouping",id:"grouping",children:[],level:2},{value:"Bash Startup",id:"bash-startup",children:[],level:2},{value:"Typeset",id:"typeset",children:[],level:2},{value:"Declare",id:"declare",children:[],level:2},{value:"While Loop",id:"while-loop",children:[],level:2},{value:"FOr Loops",id:"for-loops",children:[],level:2},{value:"Case Statement",id:"case-statement",children:[],level:2},{value:"If Statement",id:"if-statement",children:[],level:2},{value:"Bash Commands",id:"bash-commands",children:[],level:2}],d={toc:p};function m(e){var a=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"docs"},"Docs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"man bash\ninfo bash\n")),(0,l.kt)("h2",{id:"bash-script-file"},"Bash Script file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Common usage"',title:'"Common','usage"':!0},"#!/bin/bash\n")),(0,l.kt)("p",null,"(or)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"#!/usr/bin/env bash\n")),(0,l.kt)("h2",{id:"execute"},"Execute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"chmod +x script.sh\n./script.sh\n")),(0,l.kt)("h2",{id:"variables"},"Variables"),(0,l.kt)("h3",{id:"declare-variable"},"Declare variable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'variableName="value"\nexport variableName2="value2"\ndeclare -x variableName3="value3"\n')),(0,l.kt)("h3",{id:"access-the-variable"},"Access the variable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"echo $variableName\necho $variableName2\necho $variableName3\n")),(0,l.kt)("h2",{id:"grouping"},"Grouping"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"() -> scope clear\n{} -> scope extend\n")),(0,l.kt)("h2",{id:"bash-startup"},"Bash Startup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},".bash_profile # read when bash is invoked as login shell\n.bashrc # executed when new shell is started\n\n")),(0,l.kt)("h2",{id:"typeset"},"Typeset"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"typeset -i x # x must be an integer\n\n# Types\n-i -> Integer\n\n")),(0,l.kt)("h2",{id:"declare"},"Declare"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"declare -a ArrayVariable\n\n# Options\n-l -> To lowercase\n-u -> To uppercase\n-r -> Read only\n-a -> To indexed array\n\n")),(0,l.kt)("h2",{id:"while-loop"},"While Loop"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"while \n    command list 1\ndo\n    command list\ndone\n# loops while command list 1 succeeds\n\n\nwhile \n    read a b\ndo\n    echo a is $a b is $b\ndone <data_file\n")),(0,l.kt)("h2",{id:"for-loops"},"FOr Loops"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"for <var> in <list>\ndo\necho i is $i\ndone\n\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"for num in `seq 1 5`\ndo\necho num is $num\ndone\n")))),(0,l.kt)("h2",{id:"case-statement"},"Case Statement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"case expression in\npattern 1| pattern 3)\n    command list;;\npattern 2)\n    command list;;\nesac\n")),(0,l.kt)("h2",{id:"if-statement"},"If Statement"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"if \ncommand list\nthen\ncommand list\nelse\ncommand list\nfi\n")),(0,l.kt)("h2",{id:"bash-commands"},"Bash Commands"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'time find / -name core\nsource script.sh \n#(or) \n. script.sh\nalias ll="ls -l"\nunalias ll\nread a b <data_file\n(or)\nread a b c d\nseq 1 5\nfind . -name *.c\ngrep txt    # Find text in result\nlsof        # List all port and process names\nsed         # Find and replace\nwc -l <filename> # get line count of the file\ntest        # Evoluate the epxression. ex. test -f myfile (or) test $x -gt 10\n            # Alternatives of test is  [[-gt, -lt]] or ((>, <))\nstrings \nps -ly\n\n\n\n\n\n')),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"echo $?  # Last process exit status\nfile\n")))))}m.isMDXComponent=!0}}]);