import{o as De,R as Qe,j as W,m as P}from"./index-jbT9fVgG.js";const le="-",Je=e=>{const t=Xe(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{const c=i.split(le);return c[0]===""&&c.length!==1&&c.shift(),Ae(c,t)||Ke(i)},getConflictingClassGroupIds:(i,c)=>{const l=n[i]||[];return c&&o[i]?[...l,...o[i]]:l}}},Ae=(e,t)=>{var i;if(e.length===0)return t.classGroupId;const n=e[0],o=t.nextPart.get(n),r=o?Ae(e.slice(1),o):void 0;if(r)return r;if(t.validators.length===0)return;const s=e.join(le);return(i=t.validators.find(({validator:c})=>c(s)))==null?void 0:i.classGroupId},me=/^\[(.+)\]$/,Ke=e=>{if(me.test(e)){const t=me.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Xe=e=>{const{theme:t,prefix:n}=e,o={nextPart:new Map,validators:[]};return Ye(Object.entries(e.classGroups),n).forEach(([s,i])=>{re(i,o,s,t)}),o},re=(e,t,n,o)=>{e.forEach(r=>{if(typeof r=="string"){const s=r===""?t:ye(t,r);s.classGroupId=n;return}if(typeof r=="function"){if(Ze(r)){re(r(o),t,n,o);return}t.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,i])=>{re(i,ye(t,s),n,o)})})},ye=(e,t)=>{let n=e;return t.split(le).forEach(o=>{n.nextPart.has(o)||n.nextPart.set(o,{nextPart:new Map,validators:[]}),n=n.nextPart.get(o)}),n},Ze=e=>e.isThemeGetter,Ye=(e,t)=>t?e.map(([n,o])=>{const r=o.map(s=>typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([i,c])=>[t+i,c])):s);return[n,r]}):e,et=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,o=new Map;const r=(s,i)=>{n.set(s,i),t++,t>e&&(t=0,o=n,n=new Map)};return{get(s){let i=n.get(s);if(i!==void 0)return i;if((i=o.get(s))!==void 0)return r(s,i),i},set(s,i){n.has(s)?n.set(s,i):r(s,i)}}},Ee="!",tt=e=>{const{separator:t,experimentalParseClassName:n}=e,o=t.length===1,r=t[0],s=t.length,i=c=>{const l=[];let a=0,u=0,p;for(let d=0;d<c.length;d++){let f=c[d];if(a===0){if(f===r&&(o||c.slice(d,d+s)===t)){l.push(c.slice(u,d)),u=d+s;continue}if(f==="/"){p=d;continue}}f==="["?a++:f==="]"&&a--}const h=l.length===0?c:c.substring(u),b=h.startsWith(Ee),y=b?h.substring(1):h,m=p&&p>u?p-u:void 0;return{modifiers:l,hasImportantModifier:b,baseClassName:y,maybePostfixModifierPosition:m}};return n?c=>n({className:c,parseClassName:i}):i},nt=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(o=>{o[0]==="["?(t.push(...n.sort(),o),n=[]):n.push(o)}),t.push(...n.sort()),t},rt=e=>({cache:et(e.cacheSize),parseClassName:tt(e),...Je(e)}),ot=/\s+/,st=(e,t)=>{const{parseClassName:n,getClassGroupId:o,getConflictingClassGroupIds:r}=t,s=[],i=e.trim().split(ot);let c="";for(let l=i.length-1;l>=0;l-=1){const a=i[l],{modifiers:u,hasImportantModifier:p,baseClassName:h,maybePostfixModifierPosition:b}=n(a);let y=!!b,m=o(y?h.substring(0,b):h);if(!m){if(!y){c=a+(c.length>0?" "+c:c);continue}if(m=o(h),!m){c=a+(c.length>0?" "+c:c);continue}y=!1}const d=nt(u).join(":"),f=p?d+Ee:d,k=f+m;if(s.includes(k))continue;s.push(k);const C=r(m,y);for(let I=0;I<C.length;++I){const E=C[I];s.push(f+E)}c=a+(c.length>0?" "+c:c)}return c};function it(){let e=0,t,n,o="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Me(t))&&(o&&(o+=" "),o+=n);return o}const Me=e=>{if(typeof e=="string")return e;let t,n="";for(let o=0;o<e.length;o++)e[o]&&(t=Me(e[o]))&&(n&&(n+=" "),n+=t);return n};function ct(e,...t){let n,o,r,s=i;function i(l){const a=t.reduce((u,p)=>p(u),e());return n=rt(a),o=n.cache.get,r=n.cache.set,s=c,c(l)}function c(l){const a=o(l);if(a)return a;const u=st(l,n);return r(l,u),u}return function(){return s(it.apply(null,arguments))}}const w=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},ze=/^\[(?:([a-z-]+):)?(.+)\]$/i,lt=/^\d+\/\d+$/,at=new Set(["px","full","screen"]),ut=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,dt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ft=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,pt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,gt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,A=e=>N(e)||at.has(e)||lt.test(e),R=e=>F(e,"length",kt),N=e=>!!e&&!Number.isNaN(Number(e)),ee=e=>F(e,"number",N),_=e=>!!e&&Number.isInteger(Number(e)),ht=e=>e.endsWith("%")&&N(e.slice(0,-1)),g=e=>ze.test(e),L=e=>ut.test(e),bt=new Set(["length","size","percentage"]),mt=e=>F(e,bt,Re),yt=e=>F(e,"position",Re),xt=new Set(["image","url"]),wt=e=>F(e,xt,It),vt=e=>F(e,"",Ct),V=()=>!0,F=(e,t,n)=>{const o=ze.exec(e);return o?o[1]?typeof t=="string"?o[1]===t:t.has(o[1]):n(o[2]):!1},kt=e=>dt.test(e)&&!ft.test(e),Re=()=>!1,Ct=e=>pt.test(e),It=e=>gt.test(e),St=()=>{const e=w("colors"),t=w("spacing"),n=w("blur"),o=w("brightness"),r=w("borderColor"),s=w("borderRadius"),i=w("borderSpacing"),c=w("borderWidth"),l=w("contrast"),a=w("grayscale"),u=w("hueRotate"),p=w("invert"),h=w("gap"),b=w("gradientColorStops"),y=w("gradientColorStopPositions"),m=w("inset"),d=w("margin"),f=w("opacity"),k=w("padding"),C=w("saturate"),I=w("scale"),E=w("sepia"),x=w("skew"),S=w("space"),M=w("translate"),z=()=>["auto","contain","none"],j=()=>["auto","hidden","clip","visible","scroll"],Z=()=>["auto",g,t],v=()=>[g,t],pe=()=>["",A,R],B=()=>["auto",N,g],ge=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],D=()=>["solid","dashed","dotted","double","none"],he=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Y=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",g],be=()=>["auto","avoid","all","avoid-page","page","left","right","column"],T=()=>[N,g];return{cacheSize:500,separator:":",theme:{colors:[V],spacing:[A,R],blur:["none","",L,g],brightness:T(),borderColor:[e],borderRadius:["none","","full",L,g],borderSpacing:v(),borderWidth:pe(),contrast:T(),grayscale:G(),hueRotate:T(),invert:G(),gap:v(),gradientColorStops:[e],gradientColorStopPositions:[ht,R],inset:Z(),margin:Z(),opacity:T(),padding:v(),saturate:T(),scale:T(),sepia:G(),skew:T(),space:v(),translate:v()},classGroups:{aspect:[{aspect:["auto","square","video",g]}],container:["container"],columns:[{columns:[L]}],"break-after":[{"break-after":be()}],"break-before":[{"break-before":be()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...ge(),g]}],overflow:[{overflow:j()}],"overflow-x":[{"overflow-x":j()}],"overflow-y":[{"overflow-y":j()}],overscroll:[{overscroll:z()}],"overscroll-x":[{"overscroll-x":z()}],"overscroll-y":[{"overscroll-y":z()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",_,g]}],basis:[{basis:Z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",g]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",_,g]}],"grid-cols":[{"grid-cols":[V]}],"col-start-end":[{col:["auto",{span:["full",_,g]},g]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[V]}],"row-start-end":[{row:["auto",{span:[_,g]},g]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",g]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",g]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...Y()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...Y(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...Y(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[k]}],px:[{px:[k]}],py:[{py:[k]}],ps:[{ps:[k]}],pe:[{pe:[k]}],pt:[{pt:[k]}],pr:[{pr:[k]}],pb:[{pb:[k]}],pl:[{pl:[k]}],m:[{m:[d]}],mx:[{mx:[d]}],my:[{my:[d]}],ms:[{ms:[d]}],me:[{me:[d]}],mt:[{mt:[d]}],mr:[{mr:[d]}],mb:[{mb:[d]}],ml:[{ml:[d]}],"space-x":[{"space-x":[S]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[S]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",g,t]}],"min-w":[{"min-w":[g,t,"min","max","fit"]}],"max-w":[{"max-w":[g,t,"none","full","min","max","fit","prose",{screen:[L]},L]}],h:[{h:[g,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[g,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[g,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[g,t,"auto","min","max","fit"]}],"font-size":[{text:["base",L,R]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ee]}],"font-family":[{font:[V]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",g]}],"line-clamp":[{"line-clamp":["none",N,ee]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",A,g]}],"list-image":[{"list-image":["none",g]}],"list-style-type":[{list:["none","disc","decimal",g]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...D(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",A,R]}],"underline-offset":[{"underline-offset":["auto",A,g]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:v()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",g]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",g]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...ge(),yt]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",mt]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},wt]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[y]}],"gradient-via-pos":[{via:[y]}],"gradient-to-pos":[{to:[y]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...D(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:D()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...D()]}],"outline-offset":[{"outline-offset":[A,g]}],"outline-w":[{outline:[A,R]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:pe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[A,R]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",L,vt]}],"shadow-color":[{shadow:[V]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...he(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":he()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[o]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",L,g]}],grayscale:[{grayscale:[a]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[C]}],sepia:[{sepia:[E]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[a]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[C]}],"backdrop-sepia":[{"backdrop-sepia":[E]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",g]}],duration:[{duration:T()}],ease:[{ease:["linear","in","out","in-out",g]}],delay:[{delay:T()}],animate:[{animate:["none","spin","ping","pulse","bounce",g]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[I]}],"scale-x":[{"scale-x":[I]}],"scale-y":[{"scale-y":[I]}],rotate:[{rotate:[_,g]}],"translate-x":[{"translate-x":[M]}],"translate-y":[{"translate-y":[M]}],"skew-x":[{"skew-x":[x]}],"skew-y":[{"skew-y":[x]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",g]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",g]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":v()}],"scroll-mx":[{"scroll-mx":v()}],"scroll-my":[{"scroll-my":v()}],"scroll-ms":[{"scroll-ms":v()}],"scroll-me":[{"scroll-me":v()}],"scroll-mt":[{"scroll-mt":v()}],"scroll-mr":[{"scroll-mr":v()}],"scroll-mb":[{"scroll-mb":v()}],"scroll-ml":[{"scroll-ml":v()}],"scroll-p":[{"scroll-p":v()}],"scroll-px":[{"scroll-px":v()}],"scroll-py":[{"scroll-py":v()}],"scroll-ps":[{"scroll-ps":v()}],"scroll-pe":[{"scroll-pe":v()}],"scroll-pt":[{"scroll-pt":v()}],"scroll-pr":[{"scroll-pr":v()}],"scroll-pb":[{"scroll-pb":v()}],"scroll-pl":[{"scroll-pl":v()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",g]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[A,R,ee]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Pt=ct(St);function jt(...e){return Pt(De(e))}const Tt=Qe.forwardRef(({children:e,className:t,...n},o)=>W.jsx("div",{ref:o,className:jt("hover:shadow-[0_12px_8px_0_rgba(0,0,0,0.5)] transition-all hover:scale-105 md:hover:scale-110",t),...n,children:e})),Le=Object.freeze({left:0,top:0,width:16,height:16}),K=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ae=Object.freeze({...Le,...K}),oe=Object.freeze({...ae,body:"",hidden:!1});function At(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const o=((e.rotate||0)+(t.rotate||0))%4;return o&&(n.rotate=o),n}function xe(e,t){const n=At(e,t);for(const o in oe)o in K?o in e&&!(o in n)&&(n[o]=K[o]):o in t?n[o]=t[o]:o in e&&(n[o]=e[o]);return n}function Et(e,t){const n=e.icons,o=e.aliases||Object.create(null),r=Object.create(null);function s(i){if(n[i])return r[i]=[];if(!(i in r)){r[i]=null;const c=o[i]&&o[i].parent,l=c&&s(c);l&&(r[i]=[c].concat(l))}return r[i]}return Object.keys(n).concat(Object.keys(o)).forEach(s),r}function Mt(e,t,n){const o=e.icons,r=e.aliases||Object.create(null);let s={};function i(c){s=xe(o[c]||r[c],s)}return i(t),n.forEach(i),xe(e,s)}function Ne(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(r=>{t(r,null),n.push(r)});const o=Et(e);for(const r in o){const s=o[r];s&&(t(r,Mt(e,r,s)),n.push(r))}return n}const zt={provider:"",aliases:{},not_found:{},...Le};function te(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function Oe(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!te(e,zt))return null;const n=t.icons;for(const r in n){const s=n[r];if(!r||typeof s.body!="string"||!te(s,oe))return null}const o=t.aliases||Object.create(null);for(const r in o){const s=o[r],i=s.parent;if(!r||typeof i!="string"||!n[i]&&!o[i]||!te(s,oe))return null}return t}const Fe=/^[a-z0-9]+(-[a-z0-9]+)*$/,X=(e,t,n,o="")=>{const r=e.split(":");if(e.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;o=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const c=r.pop(),l=r.pop(),a={provider:r.length>0?r[0]:o,prefix:l,name:c};return t&&!Q(a)?null:a}const s=r[0],i=s.split("-");if(i.length>1){const c={provider:o,prefix:i.shift(),name:i.join("-")};return t&&!Q(c)?null:c}if(n&&o===""){const c={provider:o,prefix:"",name:s};return t&&!Q(c,n)?null:c}return null},Q=(e,t)=>e?!!((t&&e.prefix===""||e.prefix)&&e.name):!1,we=Object.create(null);function Rt(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function O(e,t){const n=we[e]||(we[e]=Object.create(null));return n[t]||(n[t]=Rt(e,t))}function Ge(e,t){return Oe(t)?Ne(t,(n,o)=>{o?e.icons[n]=o:e.missing.add(n)}):[]}function Lt(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let H=!1;function _e(e){return typeof e=="boolean"&&(H=e),H}function ve(e){const t=typeof e=="string"?X(e,!0,H):e;if(t){const n=O(t.provider,t.prefix),o=t.name;return n.icons[o]||(n.missing.has(o)?null:void 0)}}function Nt(e,t){const n=X(e,!0,H);if(!n)return!1;const o=O(n.provider,n.prefix);return t?Lt(o,n.name,t):(o.missing.add(n.name),!0)}function Ot(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),H&&!t&&!e.prefix){let r=!1;return Oe(e)&&(e.prefix="",Ne(e,(s,i)=>{Nt(s,i)&&(r=!0)})),r}const n=e.prefix;if(!Q({provider:t,prefix:n,name:"a"}))return!1;const o=O(t,n);return!!Ge(o,e)}const Ve=Object.freeze({width:null,height:null}),$e=Object.freeze({...Ve,...K}),Ft=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Gt=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function ke(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const o=e.split(Ft);if(o===null||!o.length)return e;const r=[];let s=o.shift(),i=Gt.test(s);for(;;){if(i){const c=parseFloat(s);isNaN(c)?r.push(s):r.push(Math.ceil(c*t*n)/n)}else r.push(s);if(s=o.shift(),s===void 0)return r.join("");i=!i}}function _t(e,t="defs"){let n="";const o=e.indexOf("<"+t);for(;o>=0;){const r=e.indexOf(">",o),s=e.indexOf("</"+t);if(r===-1||s===-1)break;const i=e.indexOf(">",s);if(i===-1)break;n+=e.slice(r+1,s).trim(),e=e.slice(0,o).trim()+e.slice(i+1)}return{defs:n,content:e}}function Vt(e,t){return e?"<defs>"+e+"</defs>"+t:t}function $t(e,t,n){const o=_t(e);return Vt(o.defs,t+o.content+n)}const Ut=e=>e==="unset"||e==="undefined"||e==="none";function Wt(e,t){const n={...ae,...e},o={...$e,...t},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,o].forEach(m=>{const d=[],f=m.hFlip,k=m.vFlip;let C=m.rotate;f?k?C+=2:(d.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),d.push("scale(-1 1)"),r.top=r.left=0):k&&(d.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),d.push("scale(1 -1)"),r.top=r.left=0);let I;switch(C<0&&(C-=Math.floor(C/4)*4),C=C%4,C){case 1:I=r.height/2+r.top,d.unshift("rotate(90 "+I.toString()+" "+I.toString()+")");break;case 2:d.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:I=r.width/2+r.left,d.unshift("rotate(-90 "+I.toString()+" "+I.toString()+")");break}C%2===1&&(r.left!==r.top&&(I=r.left,r.left=r.top,r.top=I),r.width!==r.height&&(I=r.width,r.width=r.height,r.height=I)),d.length&&(s=$t(s,'<g transform="'+d.join(" ")+'">',"</g>"))});const i=o.width,c=o.height,l=r.width,a=r.height;let u,p;i===null?(p=c===null?"1em":c==="auto"?a:c,u=ke(p,l/a)):(u=i==="auto"?l:i,p=c===null?ke(u,a/l):c==="auto"?a:c);const h={},b=(m,d)=>{Ut(d)||(h[m]=d.toString())};b("width",u),b("height",p);const y=[r.left,r.top,l,a];return h.viewBox=y.join(" "),{attributes:h,viewBox:y,body:s}}const qt=/\sid="(\S+)"/g,Ht="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Bt=0;function Dt(e,t=Ht){const n=[];let o;for(;o=qt.exec(e);)n.push(o[1]);if(!n.length)return e;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const i=typeof t=="function"?t(s):t+(Bt++).toString(),c=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+i+r+"$3")}),e=e.replace(new RegExp(r,"g"),""),e}const se=Object.create(null);function Qt(e,t){se[e]=t}function ie(e){return se[e]||se[""]}function ue(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const de=Object.create(null),$=["https://api.simplesvg.com","https://api.unisvg.com"],J=[];for(;$.length>0;)$.length===1||Math.random()>.5?J.push($.shift()):J.push($.pop());de[""]=ue({resources:["https://api.iconify.design"].concat(J)});function Jt(e,t){const n=ue(t);return n===null?!1:(de[e]=n,!0)}function fe(e){return de[e]}const Kt=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Ce=Kt();function Xt(e,t){const n=fe(e);if(!n)return 0;let o;if(!n.maxURL)o=0;else{let r=0;n.resources.forEach(i=>{r=Math.max(r,i.length)});const s=t+".json?icons=";o=n.maxURL-r-n.path.length-s.length}return o}function Zt(e){return e===404}const Yt=(e,t,n)=>{const o=[],r=Xt(e,t),s="icons";let i={type:s,provider:e,prefix:t,icons:[]},c=0;return n.forEach((l,a)=>{c+=l.length+1,c>=r&&a>0&&(o.push(i),i={type:s,provider:e,prefix:t,icons:[]},c=l.length),i.icons.push(l)}),o.push(i),o};function en(e){if(typeof e=="string"){const t=fe(e);if(t)return t.path}return"/"}const tn=(e,t,n)=>{if(!Ce){n("abort",424);return}let o=en(t.provider);switch(t.type){case"icons":{const s=t.prefix,c=t.icons.join(","),l=new URLSearchParams({icons:c});o+=s+".json?"+l.toString();break}case"custom":{const s=t.uri;o+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;Ce(e+o).then(s=>{const i=s.status;if(i!==200){setTimeout(()=>{n(Zt(i)?"abort":"next",i)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},nn={prepare:Yt,send:tn};function rn(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let o={provider:"",prefix:"",name:""};return e.forEach(r=>{if(o.name===r.name&&o.prefix===r.prefix&&o.provider===r.provider)return;o=r;const s=r.provider,i=r.prefix,c=r.name,l=n[s]||(n[s]=Object.create(null)),a=l[i]||(l[i]=O(s,i));let u;c in a.icons?u=t.loaded:i===""||a.missing.has(c)?u=t.missing:u=t.pending;const p={provider:s,prefix:i,name:c};u.push(p)}),t}function Ue(e,t){e.forEach(n=>{const o=n.loaderCallbacks;o&&(n.loaderCallbacks=o.filter(r=>r.id!==t))})}function on(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const o=e.provider,r=e.prefix;t.forEach(s=>{const i=s.icons,c=i.pending.length;i.pending=i.pending.filter(l=>{if(l.prefix!==r)return!0;const a=l.name;if(e.icons[a])i.loaded.push({provider:o,prefix:r,name:a});else if(e.missing.has(a))i.missing.push({provider:o,prefix:r,name:a});else return n=!0,!0;return!1}),i.pending.length!==c&&(n||Ue([e],s.id),s.callback(i.loaded.slice(0),i.missing.slice(0),i.pending.slice(0),s.abort))})}))}let sn=0;function cn(e,t,n){const o=sn++,r=Ue.bind(null,n,o);if(!t.pending.length)return r;const s={id:o,icons:t,callback:e,abort:r};return n.forEach(i=>{(i.loaderCallbacks||(i.loaderCallbacks=[])).push(s)}),r}function ln(e,t=!0,n=!1){const o=[];return e.forEach(r=>{const s=typeof r=="string"?X(r,t,n):r;s&&o.push(s)}),o}var an={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function un(e,t,n,o){const r=e.resources.length,s=e.random?Math.floor(Math.random()*r):e.index;let i;if(e.random){let x=e.resources.slice(0);for(i=[];x.length>1;){const S=Math.floor(Math.random()*x.length);i.push(x[S]),x=x.slice(0,S).concat(x.slice(S+1))}i=i.concat(x)}else i=e.resources.slice(s).concat(e.resources.slice(0,s));const c=Date.now();let l="pending",a=0,u,p=null,h=[],b=[];typeof o=="function"&&b.push(o);function y(){p&&(clearTimeout(p),p=null)}function m(){l==="pending"&&(l="aborted"),y(),h.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),h=[]}function d(x,S){S&&(b=[]),typeof x=="function"&&b.push(x)}function f(){return{startTime:c,payload:t,status:l,queriesSent:a,queriesPending:h.length,subscribe:d,abort:m}}function k(){l="failed",b.forEach(x=>{x(void 0,u)})}function C(){h.forEach(x=>{x.status==="pending"&&(x.status="aborted")}),h=[]}function I(x,S,M){const z=S!=="success";switch(h=h.filter(j=>j!==x),l){case"pending":break;case"failed":if(z||!e.dataAfterTimeout)return;break;default:return}if(S==="abort"){u=M,k();return}if(z){u=M,h.length||(i.length?E():k());return}if(y(),C(),!e.random){const j=e.resources.indexOf(x.resource);j!==-1&&j!==e.index&&(e.index=j)}l="completed",b.forEach(j=>{j(M)})}function E(){if(l!=="pending")return;y();const x=i.shift();if(x===void 0){if(h.length){p=setTimeout(()=>{y(),l==="pending"&&(C(),k())},e.timeout);return}k();return}const S={status:"pending",resource:x,callback:(M,z)=>{I(S,M,z)}};h.push(S),a++,p=setTimeout(E,e.rotate),n(x,t,S.callback)}return setTimeout(E),f}function We(e){const t={...an,...e};let n=[];function o(){n=n.filter(c=>c().status==="pending")}function r(c,l,a){const u=un(t,c,l,(p,h)=>{o(),a&&a(p,h)});return n.push(u),u}function s(c){return n.find(l=>c(l))||null}return{query:r,find:s,setIndex:c=>{t.index=c},getIndex:()=>t.index,cleanup:o}}function Ie(){}const ne=Object.create(null);function dn(e){if(!ne[e]){const t=fe(e);if(!t)return;const n=We(t),o={config:t,redundancy:n};ne[e]=o}return ne[e]}function fn(e,t,n){let o,r;if(typeof e=="string"){const s=ie(e);if(!s)return n(void 0,424),Ie;r=s.send;const i=dn(e);i&&(o=i.redundancy)}else{const s=ue(e);if(s){o=We(s);const i=e.resources?e.resources[0]:"",c=ie(i);c&&(r=c.send)}}return!o||!r?(n(void 0,424),Ie):o.query(t,r,n)().abort}function pn(){}function gn(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,on(e)}))}function hn(e){const t=[],n=[];return e.forEach(o=>{(o.match(Fe)?t:n).push(o)}),{valid:t,invalid:n}}function U(e,t,n){function o(){const r=e.pendingIcons;t.forEach(s=>{r&&r.delete(s),e.icons[s]||e.missing.add(s)})}if(n&&typeof n=="object")try{if(!Ge(e,n).length){o();return}}catch(r){console.error(r)}o(),gn(e)}function Se(e,t){e instanceof Promise?e.then(n=>{t(n)}).catch(()=>{t(null)}):t(e)}function bn(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:o}=e,r=e.iconsToLoad;if(delete e.iconsToLoad,!r||!r.length)return;const s=e.loadIcon;if(e.loadIcons&&(r.length>1||!s)){Se(e.loadIcons(r,o,n),u=>{U(e,r,u)});return}if(s){r.forEach(u=>{const p=s(u,o,n);Se(p,h=>{const b=h?{prefix:o,icons:{[u]:h}}:null;U(e,[u],b)})});return}const{valid:i,invalid:c}=hn(r);if(c.length&&U(e,c,null),!i.length)return;const l=o.match(Fe)?ie(n):null;if(!l){U(e,i,null);return}l.prepare(n,o,i).forEach(u=>{fn(n,u,p=>{U(e,u.icons,p)})})}))}const mn=(e,t)=>{const n=ln(e,!0,_e()),o=rn(n);if(!o.pending.length){let l=!0;return setTimeout(()=>{l&&t(o.loaded,o.missing,o.pending,pn)}),()=>{l=!1}}const r=Object.create(null),s=[];let i,c;return o.pending.forEach(l=>{const{provider:a,prefix:u}=l;if(u===c&&a===i)return;i=a,c=u,s.push(O(a,u));const p=r[a]||(r[a]=Object.create(null));p[u]||(p[u]=[])}),o.pending.forEach(l=>{const{provider:a,prefix:u,name:p}=l,h=O(a,u),b=h.pendingIcons||(h.pendingIcons=new Set);b.has(p)||(b.add(p),r[a][u].push(p))}),s.forEach(l=>{const a=r[l.provider][l.prefix];a.length&&bn(l,a)}),cn(t,o,s)};function yn(e,t){const n={...e};for(const o in t){const r=t[o],s=typeof r;o in Ve?(r===null||r&&(s==="string"||s==="number"))&&(n[o]=r):s===typeof n[o]&&(n[o]=o==="rotate"?r%4:r)}return n}const xn=/[\s,]+/;function wn(e,t){t.split(xn).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function vn(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function o(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(e);return isNaN(r)?0:o(r)}else if(n!==e){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(e.slice(0,e.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?o(s):0)}}return t}function kn(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const o in t)n+=" "+o+'="'+t[o]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Cn(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function In(e){return"data:image/svg+xml,"+Cn(e)}function Sn(e){return'url("'+In(e)+'")'}let q;function Pn(){try{q=window.trustedTypes.createPolicy("iconify",{createHTML:e=>e})}catch{q=null}}function jn(e){return q===void 0&&Pn(),q?q.createHTML(e):e}const qe={...$e,inline:!1},Tn={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},An={display:"inline-block"},ce={backgroundColor:"currentColor"},He={backgroundColor:"transparent"},Pe={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},je={WebkitMask:ce,mask:ce,background:He};for(const e in je){const t=je[e];for(const n in Pe)t[e+n]=Pe[n]}const En={...qe,inline:!0};function Te(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}const Mn=(e,t,n)=>{const o=t.inline?En:qe,r=yn(o,t),s=t.mode||"svg",i={},c=t.style||{},l={...s==="svg"?Tn:{}};if(n){const d=X(n,!1,!0);if(d){const f=["iconify"],k=["provider","prefix"];for(const C of k)d[C]&&f.push("iconify--"+d[C]);l.className=f.join(" ")}}for(let d in t){const f=t[d];if(f!==void 0)switch(d){case"icon":case"style":case"children":case"onLoad":case"mode":case"ssr":break;case"_ref":l.ref=f;break;case"className":l[d]=(l[d]?l[d]+" ":"")+f;break;case"inline":case"hFlip":case"vFlip":r[d]=f===!0||f==="true"||f===1;break;case"flip":typeof f=="string"&&wn(r,f);break;case"color":i.color=f;break;case"rotate":typeof f=="string"?r[d]=vn(f):typeof f=="number"&&(r[d]=f);break;case"ariaHidden":case"aria-hidden":f!==!0&&f!=="true"&&delete l["aria-hidden"];break;default:o[d]===void 0&&(l[d]=f)}}const a=Wt(e,r),u=a.attributes;if(r.inline&&(i.verticalAlign="-0.125em"),s==="svg"){l.style={...i,...c},Object.assign(l,u);let d=0,f=t.id;return typeof f=="string"&&(f=f.replace(/-/g,"_")),l.dangerouslySetInnerHTML={__html:jn(Dt(a.body,f?()=>f+"ID"+d++:"iconifyReact"))},P.createElement("svg",l)}const{body:p,width:h,height:b}=e,y=s==="mask"||(s==="bg"?!1:p.indexOf("currentColor")!==-1),m=kn(p,{...u,width:h+"",height:b+""});return l.style={...i,"--svg":Sn(m),width:Te(u.width),height:Te(u.height),...An,...y?ce:He,...c},P.createElement("span",l)};_e(!0);Qt("",nn);if(typeof document<"u"&&typeof window<"u"){const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(o=>{try{(typeof o!="object"||o===null||o instanceof Array||typeof o.icons!="object"||typeof o.prefix!="string"||!Ot(o))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const o="IconifyProviders["+n+"] is invalid.";try{const r=t[n];if(typeof r!="object"||!r||r.resources===void 0)continue;Jt(n,r)||console.error(o)}catch{console.error(o)}}}}function Be(e){const[t,n]=P.useState(!!e.ssr),[o,r]=P.useState({});function s(b){if(b){const y=e.icon;if(typeof y=="object")return{name:"",data:y};const m=ve(y);if(m)return{name:y,data:m}}return{name:""}}const[i,c]=P.useState(s(!!e.ssr));function l(){const b=o.callback;b&&(b(),r({}))}function a(b){if(JSON.stringify(i)!==JSON.stringify(b))return l(),c(b),!0}function u(){var b;const y=e.icon;if(typeof y=="object"){a({name:"",data:y});return}const m=ve(y);if(a({name:y,data:m}))if(m===void 0){const d=mn([y],u);r({callback:d})}else m&&((b=e.onLoad)===null||b===void 0||b.call(e,y))}P.useEffect(()=>(n(!0),l),[]),P.useEffect(()=>{t&&u()},[e.icon,t]);const{name:p,data:h}=i;return h?Mn({...ae,...h},e,p):e.children?e.children:P.createElement("span",{})}P.forwardRef((e,t)=>Be({...e,_ref:t}));const zn=P.forwardRef((e,t)=>Be({inline:!0,...e,_ref:t}));function Ln({img:e,isFavorite:t,onFavoriteClick:n}){return W.jsxs(Tt,{className:"aspect-square relative col-span-3 md:col-span-1 group",children:[W.jsx("img",{className:"w-full h-full object-cover",src:e,alt:"Кот"}),W.jsx("button",{onClick:()=>n(),"data-active":t,className:"transition-all opacity-0 group-hover:opacity-100 absolute right-2 bottom-2 md:right-5 md:bottom-5 text-orange-600 text-3xl md:text-5xl group/favorite",type:"button",children:W.jsx(zn,{icon:"mdi-heart",strokeWidth:2,className:"[&>*]:transition-colors stroke-current group-data-[active=true]/favorite:[&>*]:fill-current [&>*]:fill-transparent group-hover/favorite:[&>*]:fill-current"})})]})}function Nn(e,t){const[n,o]=P.useState(()=>{const r=localStorage.getItem(e);return r?JSON.parse(r):t});return P.useEffect(()=>{localStorage.setItem(e,JSON.stringify(n))},[e,n]),[n,o]}export{Ln as C,Nn as u};
