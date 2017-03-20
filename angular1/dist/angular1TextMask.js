!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.angular1TextMask=r():e.angular1TextMask=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){"ngInject";return{restrict:"A",require:"ngModel",scope:{textMask:"="},link:function(e,r,t,n){function o(){s=(0,l.default)(a({inputElement:u},e.textMask))}function i(e){return u.value=e,s.update(e),u.value}var u,s;u="INPUT"===r[0].tagName?r[0]:r[0].getElementsByTagName("INPUT")[0],r.on("blur keyup change input",function(){s.update(u.value),n.$setViewValue(u.value)}),e.$watch("textMask",function(){o(),s.update()},!0),o(),n.$formatters.unshift(i)}}}Object.defineProperty(r,"__esModule",{value:!0}),r.conformToMask=void 0;var a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i=t(2);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(i).default}});var u=t(5),l=n(u),s=angular.module("text-mask",[]).directive("textMask",o).name;r.default=s},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.placeholderChar="_"},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.guide,u=void 0===n||n,l=t.previousConformedValue,s=void 0===l?i:l,f=t.placeholderChar,d=void 0===f?a.placeholderChar:f,c=t.placeholder,p=void 0===c?(0,o.convertMaskToPlaceholder)(r,d):c,v=t.currentCaretPosition,h=t.keepCharPositions,m=u===!1&&void 0!==s,g=e.length,y=s.length,b=p.length,C=r.length,k=g-y,x=k>0,P=v+(x?-k:0),O=P+Math.abs(k);if(h===!0&&!x){for(var M=i,T=P;T<O;T++)p[T]===d&&(M+=d);e=e.slice(0,P)+M+e.slice(P,g)}for(var j=e.split(i).map(function(e,r){return{char:e,isNew:r>=P&&r<O}}),w=g-1;w>=0;w--){var V=j[w].char;if(V!==d){var _=w>=P&&y===C;V===p[_?w-k:w]&&j.splice(w,1)}}var S=i,N=!1;e:for(var E=0;E<b;E++){var A=p[E];if(A===d){if(j.length>0)for(;j.length>0;){var I=j.shift(),R=I.char,q=I.isNew;if(R===d&&m!==!0){S+=d;continue e}if(r[E].test(R)){if(h===!0&&q!==!1&&s!==i&&u!==!1&&x){for(var J=j.length,$=null,F=0;F<J;F++){var L=j[F];if(L.char!==d&&L.isNew===!1)break;if(L.char===d){$=F;break}}null!==$?(S+=R,j.splice($,1)):E--}else S+=R;continue e}N=!0}m===!1&&(S+=p.substr(E,b));break}S+=A}if(m&&x===!1){for(var U=null,W=0;W<S.length;W++)p[W]===d&&(U=W);S=null!==U?S.substr(0,U+1):i}return{conformedValue:S,meta:{someCharsRejected:N}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var o=t(3),a=t(1),i=""},function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.placeholderChar;if(e.indexOf(r)!==-1)throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n"+("The placeholder character that was received is: "+JSON.stringify(r)+"\n\n")+("The mask that was received is: "+JSON.stringify(e)));return e.map(function(e){return e instanceof RegExp?r:e}).join("")}function o(e){return"string"==typeof e||e instanceof String}function a(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)}function i(e){for(var r=[],t=void 0;t=e.indexOf(s),t!==-1;)r.push(t),e.splice(t,1);return{maskWithoutCaretTraps:e,indexes:r}}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.isString=o,r.isNumber=a,r.processCaretTraps=i;var u=t(1),l=[],s="[]"},function(e,r){"use strict";function t(e){var r=e.previousConformedValue,t=void 0===r?o:r,a=e.currentCaretPosition,i=void 0===a?0:a,u=e.conformedValue,l=e.rawValue,s=e.placeholderChar,f=e.placeholder,d=e.indexesOfPipedChars,c=void 0===d?n:d,p=e.caretTrapIndexes,v=void 0===p?n:p;if(0===i)return 0;var h=l.length,m=t.length,g=f.length,y=u.length,b=h-m,C=b>0,k=0===m,x=b>1&&!C&&!k;if(x)return i;var P=C&&(t===u||u===f),O=0;if(P)O=i-b;else for(var M=u.toLowerCase(),T=l.toLowerCase(),j=T.substr(0,i).split(o),w=j.filter(function(e){return M.indexOf(e)!==-1}),V=w[w.length-1],_=c.map(function(e){return M[e]}),S=_.filter(function(e){return e===V}).length,N=w.filter(function(e){return e===V}).length,E=f.substr(0,f.indexOf(s)).split(o).filter(function(e,r){return e===V&&l[r]!==e}).length,A=E+N+S,I=0,R=0;R<y;R++){var q=M[R];if(O=R+1,q===V&&I++,I>=A)break}if(C){for(var J=O,$=O;$<=g;$++)if(f[$]===s&&(J=$),f[$]===s||v.indexOf($)!==-1||$===g)return J}else for(var F=O;F>=0;F--)if(f[F-1]===s||v.indexOf(F)!==-1||0===F)return F}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t;var n=[],o=""},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){var r={previousConformedValue:void 0};return{state:r,update:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,o=n.inputElement,s=n.mask,d=n.guide,g=n.pipe,b=n.placeholderChar,C=void 0===b?v.placeholderChar:b,k=n.keepCharPositions,x=void 0!==k&&k;if("undefined"==typeof t&&(t=o.value),t!==r.previousConformedValue){("undefined"==typeof s?"undefined":l(s))===y&&void 0!==s.pipe&&void 0!==s.mask&&(g=s.pipe,s=s.mask);var P=void 0,O=void 0;if(s instanceof Array&&(P=(0,p.convertMaskToPlaceholder)(s,C)),s!==!1){var M=i(t),T=o.selectionStart,j=r.previousConformedValue,w=void 0;if(("undefined"==typeof s?"undefined":l(s))===h){if(O=s(M,{currentCaretPosition:T,previousConformedValue:j,placeholderChar:C}),O===!1)return;var V=(0,p.processCaretTraps)(O),_=V.maskWithoutCaretTraps,S=V.indexes;O=_,w=S,P=(0,p.convertMaskToPlaceholder)(O,C)}else O=s;var N={previousConformedValue:j,guide:d,placeholderChar:C,pipe:g,placeholder:P,currentCaretPosition:T,keepCharPositions:x},E=(0,c.default)(M,O,N),A=E.conformedValue,I=("undefined"==typeof g?"undefined":l(g))===h,R={};I&&(R=g(A,u({rawValue:M},N)),R===!1?R={value:j,rejected:!0}:(0,p.isString)(R)&&(R={value:R}));var q=I?R.value:A,J=(0,f.default)({previousConformedValue:j,conformedValue:q,placeholder:P,rawValue:M,currentCaretPosition:T,placeholderChar:C,indexesOfPipedChars:R.indexesOfPipedChars,caretTrapIndexes:w}),$=q===P&&0===J,F=$?m:q;r.previousConformedValue=F,o.value!==F&&(o.value=F,a(o,J))}}}}}function a(e,r){document.activeElement===e&&(b?C(function(){return e.setSelectionRange(r,r,g)},0):e.setSelectionRange(r,r,g))}function i(e){if((0,p.isString)(e))return e;if((0,p.isNumber)(e))return String(e);if(void 0===e||null===e)return m;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(r,"__esModule",{value:!0});var u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r.default=o;var s=t(4),f=n(s),d=t(2),c=n(d),p=t(3),v=t(1),h="function",m="",g="none",y="object",b="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent),C="undefined"!=typeof requestAnimationFrame?requestAnimationFrame:setTimeout}])});