(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{NYTa:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return d}));var l=t("Fcif"),n=t("dV/x"),c=(t("mXGw"),t("/FXl")),i=t("TjRS");t("aD51");const r=["components"],b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/forms/textarea.mdx"}});const s={_frontmatter:b},o=i.a;function d(e){let{components:a}=e,t=Object(n.a)(e,r);return Object(c.b)(o,Object(l.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"textarea"},"Textarea"),Object(c.b)("p",null,"Textarea and its variations."),Object(c.b)("p",null,"Same as input component, basically it's a HTML ",Object(c.b)("inlineCode",{parentName:"p"},"textarea")," element with ",Object(c.b)("inlineCode",{parentName:"p"},"textarea")," class. So all attributes it's comming for a regular HTML element."),Object(c.b)("h2",{id:"basic-example"},"Basic Example"),Object(c.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(c.b)("label",{className:"display-block",htmlFor:"textarea-text"},"Label"),Object(c.b)("div",{className:"wrapper-input mb-3"},Object(c.b)("textarea",{className:"display-block textarea",type:"text",name:"textarea-text",id:"textarea-text",placeholder:"Placeholder"}))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='textarea-text'>\n      Label\n    </label>\n    <div class='wrapper-input mb-3'>\n      <textarea\n        class='display-block textarea'\n        type='text'\n        name='textarea-text'\n        id='textarea-text'\n        placeholder='Placeholder'\n      ></textarea>\n    </div>\n  </div>\n")),Object(c.b)("h2",{id:"labeled"},"Labeled"),Object(c.b)("p",null,"Place a label or button in any side of a textarea. You may also place on both sides. Inside ",Object(c.b)("inlineCode",{parentName:"p"},"wrapper-input")," just add a label or button with ",Object(c.b)("inlineCode",{parentName:"p"},"input-group-text"),"."),Object(c.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(c.b)("label",{className:"display-block",htmlFor:"textarea-text-icon-3"},"Label"),Object(c.b)("div",{className:"wrapper-input mb-3"},Object(c.b)("span",{className:"input-group-text"},"@"),Object(c.b)("textarea",{className:"display-block textarea",type:"number",name:"textarea-text-icon-3",id:"textarea-text-icon-3",placeholder:"Placeholder"}),Object(c.b)("span",{className:"input-group-text"},"$"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='textarea-text-icon-3'>\n      Label\n    </label>\n    <div class='wrapper-input mb-3'>\n      <span\n        class='input-group-text'\n      >\n        @\n      </span>\n      <textarea\n        class='display-block textarea'\n        type='number'\n        name='textarea-text-icon-3'\n        id='textarea-text-icon-3'\n        placeholder='Placeholder'\n      ></textarea>\n      <span\n        class='input-group-text'\n      >\n        $\n      </span>\n    </div>\n  </div>\n")),Object(c.b)("h2",{id:"error"},"Error"),Object(c.b)("p",null,"Textarea field can show the data contains errors. Add ",Object(c.b)("inlineCode",{parentName:"p"},"error")," class on input and a element with ",Object(c.b)("inlineCode",{parentName:"p"},"box-validation box-invalid")," below ",Object(c.b)("inlineCode",{parentName:"p"},"wrapper-input")," in case of error message is need it."),Object(c.b)("div",{className:"col-24"},Object(c.b)("label",{className:"display-block",htmlFor:"input-text-error"},"Label"),Object(c.b)("div",{className:"wrapper-input"},Object(c.b)("textarea",{className:"display-block textarea error",type:"number",name:"textarea-text-icon-3",id:"textarea-text-icon-3",placeholder:"Placeholder"})),Object(c.b)("div",{className:"box-validation box-invalid show mb-3"},Object(c.b)("i",{className:"fas fa-exclamation-triangle"}),"Error")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='input-text-error'>\n      Label\n    </label>\n    <div class='wrapper-input'>\n      <textarea\n        class='display-block textarea error'\n        type='number'\n        name='textarea-text-icon-3'\n        id='textarea-text-icon-3'\n        placeholder='Placeholder'\n      ></textarea>\n    </div>\n    <div class='box-validation box-invalid show mb-3'>\n      <i class=\"fas fa-exclamation-triangle\"></i>Error\n    </div>\n  </div>\n")),Object(c.b)("h2",{id:"valid"},"Valid"),Object(c.b)("p",null,"Textarea field can show that it is valid. Add ",Object(c.b)("inlineCode",{parentName:"p"},"valid")," class on input and a element with ",Object(c.b)("inlineCode",{parentName:"p"},"box-validation box-valid")," below ",Object(c.b)("inlineCode",{parentName:"p"},"wrapper-input")," in case of a valid message is need it."),Object(c.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(c.b)("label",{className:"display-block",htmlFor:"input-text-valid"},"Label"),Object(c.b)("div",{className:"wrapper-input"},Object(c.b)("textarea",{className:"display-block textarea valid",type:"number",name:"textarea-text-icon-3",id:"textarea-text-icon-3",placeholder:"Placeholder"})),Object(c.b)("div",{className:"box-validation box-valid show mb-3"},Object(c.b)("i",{className:"fas fa-check-circle"}),"Valid")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='input-text-valid'>\n      Label\n    </label>\n    <div class='wrapper-input'>\n      <textarea\n        class='display-block textarea valid'\n        type='number'\n        name='textarea-text-icon-3'\n        id='textarea-text-icon-3'\n        placeholder='Placeholder'\n      ></textarea>\n    </div>\n    <div class='box-validation box-valid show mb-3'>\n      <i class=\"fas fa-check-circle\"></i>Valid\n    </div>\n  </div>\n")),Object(c.b)("h2",{id:"readonly"},"Readonly"),Object(c.b)("p",null,"Textarea field can show that it is readonly. Add ",Object(c.b)("inlineCode",{parentName:"p"},"readonly")," attribute/class on textarea."),Object(c.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(c.b)("label",{className:"display-block",htmlFor:"textarea-text-readonly"},"Label"),Object(c.b)("div",{className:"wrapper-input mb-3"},Object(c.b)("textarea",{className:"display-block textarea",type:"text",name:"textarea-text-readonly",id:"textarea-text-readonly",value:"Readonly field",placeholder:"Placeholder",readOnly:!0}))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='textarea-text-readonly'>\n      Label\n    </label>\n    <div class='wrapper-input mb-3'>\n      <textarea\n        class='display-block textarea'\n        type='text'\n        name='textarea-text-readonly'\n        id='textarea-text-readonly'\n        value='Readonly field'\n        placeholder='Placeholder'\n        readonly\n      ></textarea>\n    </div>\n  </div>\n")),Object(c.b)("h2",{id:"disabled"},"Disabled"),Object(c.b)("p",null,"Textarea field can show that it is disabled. Add ",Object(c.b)("inlineCode",{parentName:"p"},"disabled")," attribute/class on textarea."),Object(c.b)("div",{className:"col-sm-24 col-md-12 col-lg-8"},Object(c.b)("label",{className:"display-block",htmlFor:"input-text"},"Label"),Object(c.b)("div",{className:"wrapper-input"},Object(c.b)("textarea",{className:"display-block textarea",type:"number",name:"textarea-text-icon-3",id:"textarea-text-icon-3",placeholder:"Placeholder",disabled:!0}))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-html"},"  <div class='col-24'>\n    <label class='display-block' for='input-text'>\n      Label\n    </label>\n    <div class='wrapper-input'>\n      <textarea\n        class='display-block textarea'\n        type='number'\n        name='textarea-text-icon-3'\n        id='textarea-text-icon-3'\n        placeholder='Placeholder'\n        disabled\n      ></textarea>\n    </div>\n  </div>\n")))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/forms/textarea.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-forms-textarea-mdx-3c2326973bebacdf8780.js.map