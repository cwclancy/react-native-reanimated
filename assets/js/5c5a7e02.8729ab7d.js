"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[8254],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5263:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o={id:"withRepeat",title:"withRepeat",sidebar_label:"withRepeat"},l=void 0,p={unversionedId:"api/withRepeat",id:"version-2.2.x/api/withRepeat",isDocsHomePage:!1,title:"withRepeat",description:"Repeats the provided animation several times.",source:"@site/versioned_docs/version-2.2.x/api/withRepeat.md",sourceDirName:"api",slug:"/api/withRepeat",permalink:"/react-native-reanimated/docs/2.2.x/api/withRepeat",version:"2.2.x",frontMatter:{id:"withRepeat",title:"withRepeat",sidebar_label:"withRepeat"},sidebar:"version-2.2.x/docs",previous:{title:"withSequence",permalink:"/react-native-reanimated/docs/2.2.x/api/withSequence"},next:{title:"measure",permalink:"/react-native-reanimated/docs/2.2.x/api/nativeMethods/measure"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],s={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Repeats the provided animation several times."),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"animation-animation"},(0,r.kt)("inlineCode",{parentName:"h4"},"animation")," ","[animation]"),(0,r.kt)("p",null,"The animation that will be repeated."),(0,r.kt)("h4",{id:"numberofreps-number-default-2"},(0,r.kt)("inlineCode",{parentName:"h4"},"numberOfReps")," ","[number]"," (default: ",(0,r.kt)("inlineCode",{parentName:"h4"},"2"),")"),(0,r.kt)("p",null,"Number of repetations that the animation is going to be run for.\nWhen negative, the animation will be repeated forever (until the shared value is torn down or the animation is cancelled)."),(0,r.kt)("h4",{id:"reverse-bool-default-false"},(0,r.kt)("inlineCode",{parentName:"h4"},"reverse")," ","[bool]"," (default: ",(0,r.kt)("inlineCode",{parentName:"h4"},"false"),")"),(0,r.kt)("p",null,"Specify whether we should attempt to reverse the animation every other repetition.\nWhen ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", this will cause the animation to run from the current value to the destination, after that the same animation will run in the reverse direction.\nNote that this option will only work when the provided animation is a plain, non-modified animation like ",(0,r.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/2.2.x/api/withTiming"},(0,r.kt)("inlineCode",{parentName:"a"},"withTiming"))," or ",(0,r.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/2.2.x/api/withSpring"},(0,r.kt)("inlineCode",{parentName:"a"},"withSpring")),".\nThe option is not supported for animation wrapped using other animation modifiers like ",(0,r.kt)("inlineCode",{parentName:"p"},"withDelay")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"withSequence"),"."),(0,r.kt)("h4",{id:"callback-functionoptional"},(0,r.kt)("inlineCode",{parentName:"h4"},"callback")," ","[function]","(","optional",")"),(0,r.kt)("p",null,"This function will be called when all repetitions of provided animation are complete or when ",(0,r.kt)("inlineCode",{parentName:"p"},"withRepeat")," is cancelled.\nIn case the animation is cancelled, the callback will receive ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," as the argument, otherwise it will receive ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,r.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/2.2.x/api/useAnimatedStyle"},(0,r.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"The provided shared value will animate from its current value to 70 using timing animation, and then back to the original value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sharedValue.value = withRepeat(withTiming(70), 2, true);\n")),(0,r.kt)("p",null,"One more example with the callbacks"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"sharedValue.value = withRepeat(\n  withTiming(70, undefined, (finished, currentValue) => {\n    if (finished) {\n      console.log('current withRepeat value is ' + currentValue);\n    } else {\n      console.log('inner animation cancelled');\n    }\n  }),\n  10,\n  true,\n  (finished) => {\n    const resultStr = finished\n      ? 'All repeats are completed'\n      : 'withRepeat cancelled';\n    console.log(resultStr);\n  }\n);\n")),(0,r.kt)("p",null,"The callback passed to the inner animation(here ",(0,r.kt)("inlineCode",{parentName:"p"},"withTiming"),") will be called on every repeat. The first argument tells us whether the animation finished or was cancelled. The second one hold animation's current value(when the animation has been cancelled it is ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),").\nThe callback passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"withRepeat")," is called in the end when animation is finished or cancelled with ",(0,r.kt)("inlineCode",{parentName:"p"},"finished")," set accordingly."))}u.isMDXComponent=!0}}]);