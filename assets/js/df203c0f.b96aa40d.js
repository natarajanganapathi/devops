"use strict";(self.webpackChunkfacebook=self.webpackChunkfacebook||[]).push([[9924],{9853:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var c=t(7294),l=t(2434),s=t(9960),r=t(9548),n=t(5999);function o(e){var a=e.doc;return c.createElement("article",{className:"margin-vert--lg"},c.createElement(s.Z,{to:a.permalink},c.createElement("h2",null,a.title)),a.description&&c.createElement("p",null,a.description))}function g(e){var a,t=e.tag,g=(a=(0,r.c2)().selectMessage,function(e){return a(e,(0,n.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),i=(0,n.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:g(t.docs.length),tagName:t.name});return c.createElement(l.Z,{title:i,wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsTagDocListPage,searchMetadata:{tag:"doc_tag_doc_list"}},c.createElement("div",{className:"container margin-vert--lg"},c.createElement("div",{className:"row"},c.createElement("main",{className:"col col--8 col--offset-2"},c.createElement("header",{className:"margin-bottom--xl"},c.createElement("h1",null,i),c.createElement(s.Z,{href:t.allTagsPath},c.createElement(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.createElement("section",{className:"margin-vert--lg"},t.docs.map((function(e){return c.createElement(o,{key:e.id,doc:e})})))))))}}}]);