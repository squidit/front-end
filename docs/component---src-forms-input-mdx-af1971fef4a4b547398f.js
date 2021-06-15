(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{stQj:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return o}));var l=a("Fcif"),n=a("dV/x"),i=(a("mXGw"),a("/FXl")),c=a("TjRS");a("aD51");const b=["components"],s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/forms/input.mdx"}});const p={_frontmatter:s},d=c.a;function o(e){let{components:t}=e,a=Object(n.a)(e,b);return Object(i.b)(d,Object(l.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"input"},"Input"),Object(i.b)("p",null,"The text input and its variations."),Object(i.b)("p",null,"Basically it's a HTML ",Object(i.b)("inlineCode",{parentName:"p"},"input")," element with ",Object(i.b)("inlineCode",{parentName:"p"},"input")," class. So all attributes it's comming for a regular HTML element."),Object(i.b)("h2",{id:"basic-example"},"Basic Example"),Object(i.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(i.b)("label",{className:"display-block",htmlFor:"input-text-1"},"Label"),Object(i.b)("div",{className:"wrapper-input mb-3"},Object(i.b)("input",{className:"display-block input",type:"text",name:"input-text",id:"input-text-1",placeholder:"Placeholder"}))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='input-text'>\n      Label\n    </label>\n    <div class='wrapper-input mb-3'>\n      <input\n        class='display-block input'\n        type='text'\n        name='input-text'\n        id='input-text'\n        placeholder='Placeholder'\n      />\n    </div>\n  </div>\n")),Object(i.b)("h2",{id:"labeled"},"Labeled"),Object(i.b)("p",null,"Place a label or button in any side of an input. You may also place on both sides. Inside ",Object(i.b)("inlineCode",{parentName:"p"},"wrapper-input")," just add a label or button with ",Object(i.b)("inlineCode",{parentName:"p"},"input-group-text"),"."),Object(i.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(i.b)("label",{className:"display-block",htmlFor:"input-text-icon-3"},"Label"),Object(i.b)("div",{className:"wrapper-input mb-3"},Object(i.b)("span",{className:"input-group-text"},"R$"),Object(i.b)("input",{className:"display-block input",type:"number",name:"input-text-icon-3",id:"input-text-icon-3",placeholder:"XX"}),Object(i.b)("button",{className:"button button-pink input-group-text"},Object(i.b)("i",{className:"fas fa-check"})))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-sm-24 col-md-12 col-lg-8'>\n    <label class='display-block' for='input-text-icon-4'>\n      Label\n    </label>\n    <div class='wrapper-input mb-3'>\n      <span\n        class='input-group-text'\n      >\n        R$\n      </span>\n      <input\n        class='display-block input'\n        type='number'\n        name='input-text-icon-4'\n        id='input-text-icon-4'\n        placeholder='XX'\n      />\n      <button\n        class='button button-pink input-group-text'\n      >\n        <i class=\"fas fa-check\"></i>\n      </button>\n    </div>\n  </div>\n")),Object(i.b)("h2",{id:"error"},"Error"),Object(i.b)("p",null,"An input field can show the data contains errors. Add ",Object(i.b)("inlineCode",{parentName:"p"},"error")," class on input and a element with ",Object(i.b)("inlineCode",{parentName:"p"},"box-validation box-invalid")," below ",Object(i.b)("inlineCode",{parentName:"p"},"wrapper-input")," in case of error message is need it."),Object(i.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(i.b)("label",{className:"display-block",htmlFor:"input-text-error"},"Label"),Object(i.b)("div",{className:"wrapper-input"},Object(i.b)("input",{className:"display-block input error",type:"text",name:"input-text-error",id:"input-text-error",placeholder:"Placeholder",required:!0})),Object(i.b)("div",{className:"box-validation box-invalid show mb-3"},Object(i.b)("i",{className:"fas fa-exclamation-triangle"}),"Error")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='input-text-error'>\n      Label\n    </label>\n    <div class='wrapper-input'>\n      <input\n        class='display-block input error'\n        type='text'\n        name='input-text-error'\n        id='input-text-error'\n        placeholder='Placeholder'\n        required\n      />\n    </div>\n    <div class='box-validation box-invalid show mb-3'>\n      <i class=\"fas fa-exclamation-triangle\"></i>Error\n    </div>\n  </div>\n")),Object(i.b)("h2",{id:"valid"},"Valid"),Object(i.b)("p",null,"An input field can show that it is valid. Add ",Object(i.b)("inlineCode",{parentName:"p"},"valid")," class on input and a element with ",Object(i.b)("inlineCode",{parentName:"p"},"box-validation box-valid")," below ",Object(i.b)("inlineCode",{parentName:"p"},"wrapper-input")," in case of a valid message is need it."),Object(i.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(i.b)("label",{className:"display-block",htmlFor:"input-text-valid"},"Label"),Object(i.b)("div",{className:"wrapper-input"},Object(i.b)("input",{className:"display-block input valid",type:"text",name:"input-text-valid",id:"input-text-valid",placeholder:"Placeholder"})),Object(i.b)("div",{className:"box-validation box-valid show mb-3"},Object(i.b)("i",{className:"fas fa-check-circle"}),"Valid")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='input-text-valid'>\n      Label\n    </label>\n    <div class='wrapper-input'>\n      <input\n        class='display-block input valid'\n        type='text'\n        name='input-text-valid'\n        id='input-text-valid'\n        placeholder='Placeholder'\n      />\n    </div>\n    <div class='box-validation box-valid show mb-3'>\n      <i class=\"fas fa-check-circle\"></i>Valid\n    </div>\n  </div>\n")),Object(i.b)("h2",{id:"readonly"},"Readonly"),Object(i.b)("p",null,"An input field can show that it is readonly. Add ",Object(i.b)("inlineCode",{parentName:"p"},"readonly")," attribute/class on input."),Object(i.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(i.b)("label",{className:"display-block",htmlFor:"input-text-readonly"},"Label"),Object(i.b)("div",{className:"wrapper-input"},Object(i.b)("input",{type:"text",className:"display-block input",name:"input-text-readonly",id:"input-text-readonly",value:"Readonly field",placeholder:"Placeholder",readOnly:!0}))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'  <div class=\'col-24\'>\n    <label class=\'display-block\' for=\'input-text\'>\n      Label\n    </label>\n    <div class=\'wrapper-input\'>\n      <input\n        type="text"\n        class="display-block input"\n        name="input-text-readonly"\n        id="input-text-readonly"\n        value="Readonly field"\n        placeholder="Placeholder"\n        readonly\n      />\n    </div>\n  </div>\n')),Object(i.b)("h2",{id:"disabled"},"Disabled"),Object(i.b)("p",null,"An input field can show that it is disabled. Add ",Object(i.b)("inlineCode",{parentName:"p"},"disabled")," attribute/class on input."),Object(i.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(i.b)("label",{className:"display-block",htmlFor:"input-text-disabled"},"Label"),Object(i.b)("div",{className:"wrapper-input"},Object(i.b)("input",{className:"display-block input",type:"text",name:"input-text-disabled",id:"input-text-disabled",placeholder:"Placeholder",disabled:!0}))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='input-text'>\n      Label\n    </label>\n    <div class='wrapper-input'>\n      <input\n        class='display-block input'\n        type='text'\n        name='input-text'\n        id='input-text'\n        placeholder='Placeholder'\n        disabled\n      />\n    </div>\n  </div>\n")))}void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/forms/input.mdx"}}),o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-forms-input-mdx-af1971fef4a4b547398f.js.map