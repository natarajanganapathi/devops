"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[4013],{8665:function(e,t,a){a.d(t,{Z:function(){return f}});var r=a(3366),n=a(7294),l=a(6010),c=a(2434),i=a(9960),s="sidebar_a9qW",m="sidebarItemTitle_uKok",o="sidebarItemList_Kvuv",u="sidebarItem_CF0Q",g="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",b=a(5999);function v(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,b.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),n.createElement("ul",{className:o},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:d},e.title))}))))}var E=["sidebar","toc","children"];var f=function(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,r.Z)(e,E),m=t&&t.items.length>0;return n.createElement(c.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},m&&n.createElement("aside",{className:"col col--3"},n.createElement(v,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},94:function(e,t,a){a.r(t);var r=a(7294),n=a(8665),l=a(3306),c=a(9548);t.default=function(e){var t=e.tags,a=e.sidebar,i=(0,c.MA)();return r.createElement(n.Z,{title:i,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadata:{tag:"blog_tags_list"},sidebar:a},r.createElement("h1",null,i),r.createElement(l.Z,{tags:Object.values(t)}))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(6010),l=a(9960),c="tag_hD8n",i="tagRegular_D6E_",s="tagWithCount_i0QQ";var m=function(e){var t,a=e.permalink,m=e.name,o=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(c,(t={},t[i]=!o,t[s]=o,t))},m,o&&r.createElement("span",null,o))}},3306:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(7774),l=a(9548),c="tag_Shcx";function i(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(n.Z,e))}))),r.createElement("hr",null))}var s=function(e){var t=e.tags,a=(0,l.PZ)(t);return r.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return r.createElement(i,{key:e.letter,letterEntry:e})})))}}}]);