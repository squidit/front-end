(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{GhrZ:function(e,l,t){"use strict";t.r(l),t.d(l,"_frontmatter",(function(){return s})),t.d(l,"default",(function(){return d}));var a=t("Fcif"),n=t("dV/x"),o=(t("mXGw"),t("/FXl")),c=t("TjRS");t("aD51");const i=["components"],s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/forms/select.mdx"}});const b={_frontmatter:s},p=c.a;function d(e){let{components:l}=e,t=Object(n.a)(e,i);return Object(o.b)(p,Object(a.a)({},b,t,{components:l,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"select"},"Select"),Object(o.b)("p",null,"To start using it just add ",Object(o.b)("inlineCode",{parentName:"p"},"select")," class on select HTML element."),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(o.b)("label",{className:"display-block",htmlFor:"select"},"Label"),Object(o.b)("div",{className:"wrapper-input mb-3"},Object(o.b)("select",{className:"select display-block",name:"select",id:"select",defaultValue:""},Object(o.b)("option",{value:"",disabled:!0,placeholder:!0},"Select something"),Object(o.b)("option",{value:"1"},"Option 1"),Object(o.b)("option",{value:"2"},"Option 2"),Object(o.b)("option",{value:"3"},"Option 3")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='select'>\n      Label\n    </label>\n    <div class='wrapper-input mb-3'>\n      <select\n        class='select display-block'\n        name='select'\n        id='select'\n      >\n        <option value=\"\" disabled selected placeholder>Select something</option>\n        <option value=\"1\">Option 1</option>\n        <option value=\"2\">Option 2</option>\n        <option value=\"3\">Option 3</option>\n      </select>\n    </div>\n  </div>\n")),Object(o.b)("h2",{id:"labeled"},"Labeled"),Object(o.b)("p",null,"Place a label or button in any side of a select. You may also place on both sides. Inside ",Object(o.b)("inlineCode",{parentName:"p"},"wrapper-input")," just add a label or button with ",Object(o.b)("inlineCode",{parentName:"p"},"input-group-text"),"."),Object(o.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(o.b)("label",{className:"display-block",htmlFor:"select"},"Label"),Object(o.b)("div",{className:"wrapper-input mb-3"},Object(o.b)("span",{className:"input-group-text"},"@"),Object(o.b)("select",{className:"select display-block",name:"select",id:"select",defaultValue:""},Object(o.b)("option",{value:"",disabled:!0,placeholder:!0},"Select something"),Object(o.b)("option",{value:"1"},"Option 1"),Object(o.b)("option",{value:"2"},"Option 2"),Object(o.b)("option",{value:"3"},"Option 3")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='select'>\n      Label\n    </label>\n    <div class='wrapper-input mb-3'>\n      <span\n        class='input-group-text'\n      >\n        @\n      </span>\n      <select\n        class='select display-block'\n        name='select'\n        id='select'\n      >\n        <option value=\"\" disabled selected placeholder>Select something</option>\n        <option value=\"1\">Option 1</option>\n        <option value=\"2\">Option 2</option>\n        <option value=\"3\">Option 3</option>\n      </select>\n    </div>\n  </div>\n")),Object(o.b)("h2",{id:"error"},"Error"),Object(o.b)("p",null,"Select field can show the data contains errors. Add ",Object(o.b)("inlineCode",{parentName:"p"},"error")," class on input and a element with ",Object(o.b)("inlineCode",{parentName:"p"},"box-validation box-invalid")," below `",Object(o.b)("inlineCode",{parentName:"p"},"wrapper-input")," in case of error message is need it."),Object(o.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(o.b)("label",{className:"display-block",htmlFor:"select"},"Label"),Object(o.b)("div",{className:"wrapper-input"},Object(o.b)("select",{className:"select display-block error",name:"select-error",id:"select-error",defaultValue:""},Object(o.b)("option",{value:"",disabled:!0,placeholder:!0},"Select something"),Object(o.b)("option",{value:"1"},"Option 1"),Object(o.b)("option",{value:"2"},"Option 2"),Object(o.b)("option",{value:"3"},"Option 3"))),Object(o.b)("div",{className:"box-validation box-invalid show mb-3"},Object(o.b)("i",{className:"fas fa-exclamation-triangle"}),"Error")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='select'>\n      Label\n    </label>\n    <div class='wrapper-input'>\n      <select\n        class='select display-block error'\n        name='select-error'\n        id='select-error'\n      >\n        <option value=\"\" disabled selected placeholder>Select something</option>\n        <option value=\"1\">Option 1</option>\n        <option value=\"2\">Option 2</option>\n        <option value=\"3\">Option 3</option>\n      </select>\n    </div>\n    <div class='box-validation box-invalid show mb-3'>\n      <i class=\"fas fa-exclamation-triangle\"></i>Error\n    </div>\n  </div>\n")),Object(o.b)("h2",{id:"disabled"},"Disabled"),Object(o.b)("p",null,"Select field can show that it is disabled. Add ",Object(o.b)("inlineCode",{parentName:"p"},"disabled")," attribute/class on it."),Object(o.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(o.b)("label",{className:"display-block",htmlFor:"select"},"Label"),Object(o.b)("div",{className:"wrapper-input mb-3"},Object(o.b)("select",{className:"select display-block",name:"select-disabled",id:"select-disabled",defaultValue:"",disabled:!0},Object(o.b)("option",{value:"",disabled:!0,placeholder:!0},"Select something"),Object(o.b)("option",{value:"1"},"Option 1"),Object(o.b)("option",{value:"2"},"Option 2"),Object(o.b)("option",{value:"3"},"Option 3")))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='select'>\n      Label\n    </label>\n    <div class='wrapper-input mb-3'>\n      <select\n        class='select display-block'\n        name='select-disabled'\n        id='select-disabled'\n        disabled\n      >\n        <option value=\"\" disabled selected placeholder>Select something</option>\n        <option value=\"1\">Option 1</option>\n        <option value=\"2\">Option 2</option>\n        <option value=\"3\">Option 3</option>\n      </select>\n    </div>\n  </div>\n")))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/forms/select.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-forms-select-mdx-91abe14d61c7e641c03c.js.map