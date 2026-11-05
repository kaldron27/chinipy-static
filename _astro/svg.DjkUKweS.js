var e={night:`#1A1030`,night2:`#261A42`,wall:`#4B2179`,wallDot:`#5A2B8C`,crown:`#5A3A28`,wain:`#5A3A28`,wainPanel:`#4C3022`,rail:`#A87447`,floor:`#9A6640`,floorAlt:`#A16B45`,seam:`#76492B`,board:`#3A2418`,cream:`#F3E9D2`,moon:`#FFF1B8`,yellow:`#FED73C`,candle:`#F7B24A`,cloth:`#690CA5`,lilac:`#8E4BC8`,leaf:`#3E8E4E`,leafDark:`#2C6B3A`},t=(e,t,n=``)=>`<svg class="${n}" xmlns="http://www.w3.org/2000/svg" viewBox="${e.join(` `)}" width="${e[2]}" height="${e[3]}" aria-hidden="true" focusable="false">${t}</svg>`,n=e=>()=>(e=e*16807%2147483647,e/2147483647),r=(e,t,n,r)=>`M${e-r} ${n} V${t+r} A${r} ${r} 0 0 1 ${e+r} ${t+r} V${n} Z`;function i(n){let i=n.window,o=n.wallBase,s=n.room,c=s.x0-80,l=s.x1-s.x0+160,u=s.top-80,d=o+40-u,f=r(i.cx,i.top+i.frame,i.bottom-i.frame,i.r-i.frame),p=r(i.cx,i.top,i.bottom,i.r),m=n.wainscot,h=n.crown,g=``;for(let t=s.top+58,n=0;t<o-m-8;t+=44,n++)for(let r=s.x0+n%2*30-20;r<s.x1+40;r+=60)g+=`<path d="M${r} ${t-4}L${r+1.2} ${t-1.2}L${r+4} ${t}L${r+1.2} ${t+1.2}L${r} ${t+4}L${r-1.2} ${t+1.2}L${r-4} ${t}L${r-1.2} ${t-1.2}Z" fill="${e.wallDot}"/>`;let _=``;for(let t=s.x0+30;t<s.x1;t+=78)_+=`<rect x="${t}" y="${o-m+12}" width="64" height="${m-24}" rx="3" fill="${e.wainPanel}"/>`;let v=``;for(let[t,r]of[...n.lamps,...n.sideLamps])v+=`<circle cx="${t}" cy="${r+34}" r="78" fill="url(#hallLampG)"/>
      <path d="M${t-16} ${r-18} H${t+2} V${r-2}" fill="none" stroke="${e.board}" stroke-width="4"/>
      <rect x="${t-13}" y="${r}" width="26" height="8" rx="2" fill="${e.crown}"/>
      <rect x="${t-11}" y="${r+8}" width="22" height="34" rx="3" fill="${e.yellow}"/>
      <rect x="${t-4}" y="${r+12}" width="8" height="24" rx="4" fill="#FFF6C8"/>
      <rect x="${t-13}" y="${r+42}" width="26" height="7" rx="2" fill="${e.crown}"/>`;let y=`
    <defs>
      <clipPath id="hallWallOnly"><path d="M${c} ${u} H${c+l} V${o+40} H${c} Z ${p}" clip-rule="evenodd"/></clipPath>
      <radialGradient id="hallLampG"><stop offset="0" stop-color="${e.yellow}" stop-opacity=".34"/><stop offset=".5" stop-color="${e.yellow}" stop-opacity=".12"/><stop offset="1" stop-color="${e.yellow}" stop-opacity="0"/></radialGradient>
      <radialGradient id="hallMoonWall" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="${e.moon}" stop-opacity=".16"/><stop offset="1" stop-color="${e.moon}" stop-opacity="0"/></radialGradient>
    </defs>
    <path d="M${c} ${u} H${c+l} V${o+40} H${c} Z ${f}" fill="${e.wall}" fill-rule="evenodd"/>
    <g clip-path="url(#hallWallOnly)">${g}</g>
    <ellipse cx="${i.cx}" cy="${i.top+110}" rx="${i.r+90}" ry="${i.r+40}" fill="url(#hallMoonWall)"/>
    <rect x="${c}" y="${u}" width="${l}" height="${s.top-u+h}" fill="${e.crown}"/><rect x="${c}" y="${s.top+h}" width="${l}" height="5" fill="${e.rail}" opacity=".6"/>
    <rect x="${c}" y="-6" width="${l}" height="6" fill="${e.rail}" opacity=".55"/>
    ${a(s.x0+20,s.x1-20,s.top+48,46)}
    <rect x="${c}" y="${o-m}" width="${l}" height="${d-o+m}" fill="${e.wain}"/>
    ${_}
    <rect x="${c}" y="${o-m-2}" width="${l}" height="9" fill="${e.rail}"/>
    ${v}`;return{svg:t([c,u,l,d],y,`art-wall`),box:[c,u,l,d]}}function a(t,n,r,i){let a=[e.yellow,`#F28BA8`,`#5FC7C2`,`#B48BE8`,`#F2995B`],o=Math.max(1,Math.round((n-t)/300)),s=(n-t)/o,c=``,l=0;for(let n=0;n<o;n++){let o=t+n*s,u=o+s,d=(o+u)/2;c+=`<path d="M${o.toFixed(1)} ${r} Q${d.toFixed(1)} ${r+i*2} ${u.toFixed(1)} ${r}" fill="none" stroke="${e.cream}" stroke-width="2" opacity=".75"/>`;for(let e=.08;e<.95;e+=.12){let t=(1-e)**2*o+2*(1-e)*e*d+e*e*u,n=(1-e)**2*r+2*(1-e)*e*(r+i*2)+e*e*r;c+=`<path d="M${(t-9).toFixed(1)} ${n.toFixed(1)} H${(t+9).toFixed(1)} L${t.toFixed(1)} ${(n+20).toFixed(1)} Z" fill="${a[l++%a.length]}"/>`}}return c}function o(r){let i=r.wallBase,a=r.H,o=r.outside,s=r.room,c=s.x0,l=s.x1-s.x0,u=s.x1,d=r.door,f=n(23),p=``;for(let t=i,n=0;t<a;t+=34,n++){n%2&&(p+=`<rect x="${c}" y="${t}" width="${l}" height="34" fill="${e.floorAlt}"/>`),p+=`<rect x="${c}" y="${t+32}" width="${l}" height="2" fill="${e.seam}"/>`;for(let n=c+f()*160;n<u;n+=150+f()*120)p+=`<rect x="${n.toFixed(0)}" y="${t}" width="2" height="32" fill="${e.seam}"/>`}let m=r.tableRug,h=r.lounge,[g,_,v,y]=d.mat,b=(e,t,n,r,i,a)=>{let o=``;for(let s=0;s<i;s++){let c=s/i*Math.PI*2;o+=`<circle cx="${(e+Math.cos(c)*n).toFixed(1)}" cy="${(t+Math.sin(c)*r).toFixed(1)}" r="3" fill="${a}"/>`}return o},x=r.playRug,S=[[1,`#E7A155`],[.97,`#E6B8C3`],[.77,`#C2D3CD`],[.53,`#EFE2B4`],[.26,`#DDB8CB`]].map(([e,t])=>`<ellipse cx="${x.x}" cy="${x.y}" rx="${(x.rx*e).toFixed(1)}" ry="${(x.ry*e).toFixed(1)}" fill="${t}"/>`).join(``),C=``;for(let[e,t]of[[420,1206],[470,1232],[700,1214],[760,1236],[330,1228],[850,1212]])C+=`<path d="M${e} ${t} l-6 -12 l9 8 l2 -14 l5 14 l8 -9 l-5 13 Z" fill="#2D4A3C"/>`;let w=`
    <defs>
      <radialGradient id="hallWarm"><stop offset="0" stop-color="${e.candle}" stop-opacity=".30"/><stop offset="1" stop-color="${e.candle}" stop-opacity="0"/></radialGradient>
      <radialGradient id="hallLampFloor"><stop offset="0" stop-color="${e.yellow}" stop-opacity=".18"/><stop offset="1" stop-color="${e.yellow}" stop-opacity="0"/></radialGradient>
      <radialGradient id="hallMoonFloor"><stop offset="0" stop-color="${e.moon}" stop-opacity=".12"/><stop offset="1" stop-color="${e.moon}" stop-opacity="0"/></radialGradient>
      <radialGradient id="hallDoorG"><stop offset="0" stop-color="${e.yellow}" stop-opacity=".42"/><stop offset="1" stop-color="${e.yellow}" stop-opacity="0"/></radialGradient>
      <radialGradient id="hallVig" cx=".5" cy=".55" r=".75"><stop offset=".55" stop-color="${e.night}" stop-opacity="0"/><stop offset="1" stop-color="${e.night}" stop-opacity=".42"/></radialGradient>
      <linearGradient id="hallPathFade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B1B4A"/><stop offset="1" stop-color="#140C26"/></linearGradient>
    </defs>
    <rect x="${c}" y="${i}" width="${l}" height="${a-i}" fill="${e.floor}"/>
    ${p}
    <rect x="${c}" y="${i}" width="${l}" height="8" fill="${e.board}" opacity=".45"/>
    <ellipse cx="${m.x}" cy="${m.y}" rx="${m.rx}" ry="${m.ry}" fill="${e.wall}"/>
    <ellipse cx="${m.x}" cy="${m.y}" rx="${m.rx-14}" ry="${m.ry-8}" fill="none" stroke="${e.yellow}" stroke-width="3" stroke-dasharray="2 9" stroke-linecap="round"/>
    ${b(m.x,m.y,m.rx+3,m.ry+2,46,e.cream)}
    <ellipse cx="${h.x}" cy="${h.y}" rx="${h.rx}" ry="${h.ry}" fill="${e.cloth}"/>
    <ellipse cx="${h.x}" cy="${h.y}" rx="${h.rx-18}" ry="${h.ry-10}" fill="${e.wall}"/>
    <ellipse cx="${h.x}" cy="${h.y}" rx="${h.rx-56}" ry="${h.ry-28}" fill="none" stroke="${e.cream}" stroke-width="3" opacity=".7"/>
    ${b(h.x,h.y,h.rx+3,h.ry+2,60,e.cream)}
    ${S}
    <rect x="${g-v/2}" y="${_-y/2}" width="${v}" height="${y}" rx="8" fill="${e.cream}"/>
    <rect x="${g-v/2+7}" y="${_-y/2+6}" width="${v-14}" height="${y-12}" rx="5" fill="${e.crown}"/>
    <ellipse cx="${m.x}" cy="${m.y-10}" rx="230" ry="110" fill="url(#hallWarm)"/>
    <ellipse cx="${h.x}" cy="${h.y}" rx="320" ry="170" fill="url(#hallLampFloor)"/>
    <ellipse cx="${r.window.cx-70}" cy="${i+130}" rx="190" ry="120" fill="url(#hallMoonFloor)"/>
    ${[...r.lamps,...r.sideLamps].map(([e])=>`<ellipse cx="${e}" cy="${i+26}" rx="150" ry="46" fill="url(#hallLampFloor)"/>`).join(``)}
    <ellipse cx="${d.x}" cy="${a-20}" rx="150" ry="90" fill="url(#hallDoorG)"/>
    <rect x="${c}" y="${i}" width="${l}" height="${a-i}" fill="url(#hallVig)"/>
    <rect x="${c}" y="${a}" width="${l}" height="${o+200}" fill="#140C26"/>
    <path d="M${d.x-90} ${a+o+4} L${d.x-112} ${a+o+200} H${d.x+112} L${d.x+90} ${a+o+4} Z" fill="url(#hallPathFade)"/>
    <path d="M${d.x-d.gap/2+8} ${a} L${d.x-90} ${a+o+4} H${d.x+90} L${d.x+d.gap/2-8} ${a} Z" fill="#2B1B4A"/>
    <path d="M${d.x-d.gap/2+8} ${a} L${d.x-90} ${a+o+4} H${d.x+90} L${d.x+d.gap/2-8} ${a} Z" fill="url(#hallDoorG)"/>
    ${C}
    <rect x="${c}" y="${a-30}" width="${d.x-d.gap/2-c}" height="30" fill="${e.night2}"/>
    <rect x="${d.x+d.gap/2}" y="${a-30}" width="${u-d.x-d.gap/2}" height="30" fill="${e.night2}"/>
    <rect x="${c}" y="${a-34}" width="${d.x-d.gap/2-c}" height="6" fill="${e.crown}"/>
    <rect x="${d.x+d.gap/2}" y="${a-34}" width="${u-d.x-d.gap/2}" height="6" fill="${e.crown}"/>
    <rect x="${d.x-d.gap/2-16}" y="${a-44}" width="16" height="50" rx="3" fill="${e.crown}"/>
    <rect x="${d.x+d.gap/2}" y="${a-44}" width="16" height="50" rx="3" fill="${e.crown}"/>
    <rect x="${c-80}" y="${s.top-80}" width="104" height="${a-s.top+80}" fill="${e.night2}"/><rect x="${c+20}" y="${s.top}" width="5" height="${a-s.top}" fill="${e.crown}"/>
    <rect x="${u-24}" y="${s.top-80}" width="104" height="${a-s.top+80}" fill="${e.night2}"/><rect x="${u-25}" y="${s.top}" width="5" height="${a-s.top}" fill="${e.crown}"/>
    <rect x="${c-80}" y="${a}" width="80" height="${o+200}" fill="#140C26"/><rect x="${u}" y="${a}" width="80" height="${o+200}" fill="#140C26"/>`;return{svg:t([c-80,s.top-80,l+160,a-s.top+80+o+200],w,`art-floor`),box:[c-80,s.top-80,l+160,a-s.top+80+o+200]}}function s(n){let r=n.chair,i=r.w,a=r.bottom-r.top,o=`
    <path d="M8 ${a} V34 Q8 4 ${i/2} 4 Q${i-8} 4 ${i-8} 34 V${a} H${i-22} V40 Q${i-22} 18 ${i/2} 18 Q22 18 22 40 V${a} Z" fill="${e.crown}"/>
    <path d="M14 34 Q14 10 ${i/2} 10" fill="none" stroke="${e.rail}" stroke-width="3" opacity=".7"/>
    ${[.3,.5,.7].map(e=>`<rect x="${(i*e-4).toFixed(1)}" y="22" width="8" height="${a-22}" rx="3" fill="#6B4428"/>`).join(``)}`;return{svg:t([0,0,i,a],o,`art-chair`),box:[r.x-i/2,r.top,i,a],y:r.sortY}}function c(n){let[r,i]=n.lounge.tea;return{svg:t([0,-6,120,76],`
    <ellipse cx="60" cy="58" rx="54" ry="12" fill="${e.board}" opacity=".35"/>
    <rect x="20" y="30" width="7" height="26" rx="3" fill="${e.crown}"/><rect x="93" y="30" width="7" height="26" rx="3" fill="${e.crown}"/>
    <ellipse cx="60" cy="30" rx="56" ry="20" fill="${e.rail}"/><path d="M4 30 a56 20 0 0 0 112 0 v6 a56 20 0 0 1 -112 0 Z" fill="${e.crown}"/>
    <ellipse cx="60" cy="18" rx="18" ry="15" fill="${e.cream}"/><rect x="51" y="0" width="18" height="7" rx="3" fill="${e.cloth}"/>
    <path d="M76 14 q14 -2 16 -10" fill="none" stroke="${e.cream}" stroke-width="5" stroke-linecap="round"/>
    <path d="M43 18 q-10 0 -10 8" fill="none" stroke="${e.cream}" stroke-width="5"/>
    <rect x="18" y="24" width="14" height="10" rx="3" fill="${e.cream}"/><rect x="88" y="27" width="14" height="10" rx="3" fill="${e.cream}"/>`,`art-tea`),box:[r-60,i-52,120,76],y:i+4}}function l(n,r,i){let a={y:e.yellow,c:e.cream,p:e.lilac}[i],o={y:`#D9B32A`,c:`#D8C9A6`,p:`#6B33A0`}[i];return{svg:t([0,0,68,42],`<ellipse cx="34" cy="30" rx="34" ry="12" fill="${e.board}" opacity=".3"/><rect x="2" y="12" width="64" height="18" rx="9" fill="${o}"/><ellipse cx="34" cy="14" rx="32" ry="12" fill="${a}"/><circle cx="34" cy="14" r="3" fill="${o}"/>`,`art-cushion`),box:[n-34,r-26,68,42],y:r}}function u(n,r,i){if(n===`orchid`){let n=[`M36 74 C30 50 18 34 4 26`,`M36 74 C34 46 30 22 22 6`,`M37 74 C40 48 48 30 62 22`,`M37 74 C44 54 58 46 70 46`,`M36 74 C28 58 16 54 6 56`,`M37 74 C38 52 40 36 44 18`].map((t,n)=>`<path d="${t}" fill="none" stroke="${n%2?e.leafDark:e.leaf}" stroke-width="${n%2?3:3.6}" stroke-linecap="round"/>`).join(``),a=(t,n)=>`<g transform="translate(${t} ${n})"><ellipse cx="-4" cy="0" rx="4.6" ry="2.6" fill="#EBDDF6"/><ellipse cx="4" cy="0" rx="4.6" ry="2.6" fill="#EBDDF6"/><ellipse cx="0" cy="-4" rx="2.6" ry="4.6" fill="#F6EEFB"/><circle r="1.8" fill="${e.yellow}"/></g>`;return{svg:t([0,0,72,112],`<ellipse cx="36" cy="104" rx="28" ry="7" fill="${e.board}" opacity=".35"/>${n}
      <path d="M40 70 C50 52 60 46 66 34" fill="none" stroke="${e.leafDark}" stroke-width="1.6"/>${a(66,32)}${a(58,44)}${a(52,56)}
      <path d="M14 76 H58 L52 104 H20 Z" fill="${d.celadon}"/><path d="M14 76 H24 L28 104 H20 Z" fill="${d.celadonHi}" opacity=".7"/>
      <rect x="11" y="72" width="50" height="8" rx="3" fill="${d.celadonHi}"/><path d="M18 88 H54" stroke="${d.celadonLo}" stroke-width="2"/>`,`art-orchid`),box:[r-36,i-106,72,112],y:i}}return n===`plant`?{svg:t([0,0,68,104],`<ellipse cx="34" cy="94" rx="30" ry="9" fill="${e.board}" opacity=".35"/>
      <path d="M14 62 H54 L48 94 H20 Z" fill="#B8613A"/><rect x="11" y="56" width="46" height="10" rx="4" fill="#C9744A"/>
      <ellipse cx="34" cy="38" rx="14" ry="26" fill="${e.leaf}"/><ellipse cx="16" cy="44" rx="10" ry="20" fill="${e.leafDark}" transform="rotate(-28 16 44)"/>
      <ellipse cx="52" cy="44" rx="10" ry="20" fill="${e.leafDark}" transform="rotate(28 52 44)"/><ellipse cx="34" cy="30" rx="6" ry="16" fill="#5BAA62"/>`,`art-plant`),box:[r-34,i-96,68,104],y:i}:{svg:t([-4,0,64,94],`<ellipse cx="26" cy="86" rx="24" ry="7" fill="${e.board}" opacity=".35"/>
    <path d="M30 50 L44 6 Q50 0 54 8" fill="none" stroke="${e.cloth}" stroke-width="5" stroke-linecap="round"/><path d="M38 24 L58 30 L46 50 Z" fill="${e.lilac}"/>
    <path d="M20 50 L12 10 Q8 2 2 8" fill="none" stroke="${e.board}" stroke-width="5" stroke-linecap="round"/><path d="M14 28 L-2 36 L14 50 Z" fill="${e.yellow}"/>
    <rect x="8" y="46" width="36" height="40" rx="6" fill="${e.crown}"/><rect x="8" y="54" width="36" height="5" fill="${e.rail}"/>`,`art-umbrella`),box:[r-30,i-88,64,94],y:i}}var d={indigo:`#3A4E96`,indigoSide:`#283970`,hong:`#C9452F`,hongSide:`#97321F`,yeondu:`#9CC75A`,blue:`#2F57A6`,amber:`#E9A23B`,hanji:`#EEE1C2`,hanjiShade:`#E0CFA8`,silk:`#3B3477`,bind:`#4A3A6A`,celadon:`#8DBDAA`,celadonHi:`#A9D2C1`,celadonLo:`#6E9E8B`,brass:`#B08A4A`,brassLo:`#7E6233`,straw:`#CFB273`,strawLo:`#B8995A`,strawHi:`#D9BF84`,slate:`#3A3346`,branch:`#5A3A28`,plum:`#F4A9BE`,hill:`#9C8BC4`,hillNear:`#7E6DAE`,cloud:`#CBB8E6`},f=(t,n,r,i)=>{let a=``;for(let e=0;e<5;e++){let o=(e*72-90)*Math.PI/180;a+=`<circle cx="${(t+Math.cos(o)*r).toFixed(1)}" cy="${(n+Math.sin(o)*r).toFixed(1)}" r="${(r*.75).toFixed(1)}" fill="${i}"/>`}return`${a}<circle cx="${t}" cy="${n}" r="${(r*.5).toFixed(1)}" fill="${e.yellow}"/>`};function p(n){let[r,i]=n.east.screen,a=213/6,o=``,s=``;for(let t=0;t<6;t++){let n=6+t*38.5;o+=`<rect x="${n}" y="8" width="${a}" height="150" fill="${d.silk}"/><rect x="${n}" y="11" width="${a}" height="2" fill="${e.yellow}" opacity=".55"/><rect x="${n}" y="152" width="${a}" height="2" fill="${e.yellow}" opacity=".55"/><rect x="${n+3}" y="21" width="29.5" height="120" fill="${t%2?d.hanjiShade:d.hanji}"/>`,s+=`<rect x="${n+3}" y="21" width="29.5" height="120"/>`}let c=`<circle cx="50" cy="51" r="24" fill="${e.moon}" opacity=".6"/><circle cx="50" cy="51" r="18" fill="#FFE58A"/>
    <path d="M10 79 q14 -11 30 -3 q12 -10 27 -1 q11 -6 23 2 v8 h-80 Z" fill="${d.cloud}"/><path d="M108 55 q12 -9 26 -1 q10 -7 22 1 v7 h-48 Z" fill="${d.cloud}" opacity=".85"/>
    <path d="M6 141 V115 q22 -26 46 -10 q18 -22 44 -6 q22 -18 48 -2 q24 -16 50 0 q20 -10 40 4 V141 Z" fill="${d.hill}" opacity=".75"/>
    <path d="M6 141 V129 q30 -14 60 -2 q34 -12 66 0 q36 -12 70 2 q20 -6 34 0 V141 Z" fill="${d.hillNear}" opacity=".8"/>
    <path d="M236 123 C206 107 190 91 180 77 C172 65 162 61 146 57 M192 99 C202 85 212 77 224 75 M174 71 C168 55 172 41 182 33 M150 58 C138 51 128 51 118 54" fill="none" stroke="${d.branch}" stroke-width="5" stroke-linecap="round"/>
    ${f(182,33,5,d.plum)}${f(118,54,4.6,`#FFFFFF`)}${f(224,75,5,d.plum)}${f(164,63,4,`#FFFFFF`)}${f(204,91,4.2,d.plum)}${f(140,55,3.8,d.plum)}${f(196,61,3.6,`#FFFFFF`)}`,l=``;for(let t=0;t<6;t++)l+=`<rect x="${(6+t*38.5+4).toFixed(1)}" y="160" width="${27.5.toFixed(1)}" height="8" rx="2" fill="${e.crown}"/>`;return{svg:t([0,0,240,172],`<defs><clipPath id="hallEastScreen">${s}</clipPath></defs>
    <ellipse cx="120" cy="167" rx="116" ry="7" fill="${e.board}" opacity=".4"/>
    <rect x="2" y="4" width="236" height="158" rx="3" fill="${e.crown}"/>
    ${o}<g clip-path="url(#hallEastScreen)">${c}</g>${l}`,`art-screen`),box:[r-120,i-172+6,240,172],y:i}}function m(n){let[r,i]=n.east.lantern;return{svg:t([0,0,84,176],`<circle cx="30" cy="64" r="42" fill="${e.candle}" opacity=".14"/><circle cx="30" cy="64" r="26" fill="${e.candle}" opacity=".18"/>
    <ellipse cx="64" cy="171" rx="16" ry="4.5" fill="${e.board}" opacity=".4"/>
    <rect x="61" y="12" width="6" height="158" rx="3" fill="${e.crown}"/><path d="M50 170 h28 l-4 -8 h-20 Z" fill="${e.crown}"/>
    <rect x="28" y="10" width="40" height="5" rx="2.5" fill="${e.crown}"/><rect x="29" y="14" width="2" height="16" fill="${e.board}"/>
    <path d="M18 30 H42 L46 36 H14 Z" fill="${e.crown}"/>
    <rect x="13" y="36" width="34" height="27" rx="6" fill="${d.blue}"/><rect x="13" y="60" width="34" height="27" rx="6" fill="${d.hong}"/>
    <rect x="13" y="58" width="34" height="5" fill="${d.amber}"/>
    <g class="glow"><ellipse cx="30" cy="61" rx="10" ry="17" fill="#FFD98A" opacity=".5"/></g>
    <rect x="21" y="36" width="2" height="51" fill="#000" opacity=".12"/><rect x="37" y="36" width="2" height="51" fill="#000" opacity=".12"/>
    <path d="M14 87 H46 L42 93 H18 Z" fill="${e.crown}"/><rect x="29" y="93" width="2" height="8" fill="${d.hong}"/>
    <path d="M25 101 H35 L37 116 H23 Z" fill="${d.hong}"/><rect x="25" y="99" width="10" height="4" rx="2" fill="${e.yellow}"/>`,`art-lantern`),box:[r-64,i-176+4,84,176],y:i}}function h(n){let[r,i]=n.east.mat,a=``;for(let e=8;e<120;e+=5)a+=`<rect x="8" y="${e}" width="264" height="1.6" fill="${d.strawLo}" opacity=".45"/>`;let o=``,s=(e,t,n,r,i)=>{for(let a=0,s=0;a<n;a+=r,s++){let n=i?e:e+a,r=i?t+a:t;o+=`<path d="M${n} ${r-3.6} L${n+5} ${r} L${n} ${r+3.6} L${n-5} ${r} Z" fill="${s%2?d.indigo:d.hong}"/>`}};s(24,14,242,18,!1),s(24,118,242,18,!1),s(14,26,86,14,!0),s(270,26,86,14,!0);let c=``;for(let e=0;e<8;e++)c+=`<ellipse cx="0" cy="-22" rx="9" ry="18" fill="${d.hong}" transform="rotate(${e*45})"/>`;let l=[30,150,210,330].map(t=>`<ellipse cx="0" cy="-40" rx="7" ry="15" fill="${e.leaf}" transform="rotate(${t})"/>`).join(``),u=(t,n)=>{let r=``;for(let e=0;e<4;e++)r+=`<ellipse cx="0" cy="-7" rx="4" ry="7" fill="${d.indigo}" transform="rotate(${e*90+45})"/>`;return`<g transform="translate(${t} ${n}) scale(1 .5)">${r}<circle r="3" fill="${e.yellow}"/></g>`};return{svg:t([0,0,284,134],`<rect x="4" y="8" width="280" height="128" rx="8" fill="${e.board}" opacity=".3"/>
    <rect x="0" y="0" width="280" height="126" rx="8" fill="${d.bind}"/><rect x="5" y="4" width="270" height="118" rx="5" fill="${d.straw}"/>
    ${a}<rect x="22" y="22" width="236" height="82" rx="4" fill="${d.strawHi}" opacity=".55"/>${o}
    <g transform="translate(140 63) scale(1 .5)">${l}${c}<circle r="11" fill="${d.indigo}"/><circle r="5" fill="${e.yellow}"/></g>
    ${u(54,40)}${u(226,40)}${u(54,86)}${u(226,86)}`,`art-mat`),box:[r-142,i,284,134]}}function g(n,r,i,a=80){let[o,s,c]=i===`friend`?[d.indigo,d.indigoSide,d.hong]:[d.hong,d.hongSide,d.yeondu],l=a/2,u=`<ellipse cx="${l}" cy="40" rx="${l}" ry="8" fill="${e.board}" opacity=".3"/>
    <rect x="2" y="16" width="${a-4}" height="22" rx="8" fill="${s}"/><rect x="0" y="2" width="${a}" height="30" rx="9" fill="${c}"/>
    <rect x="4" y="5" width="${a-8}" height="24" rx="7" fill="${o}"/>
    <path d="M${l} 17 L14 8 M${l} 17 L${a-14} 8 M${l} 17 L14 27 M${l} 17 L${a-14} 27" stroke="${s}" stroke-width="1.6" opacity=".55"/>
    <ellipse cx="${l}" cy="17" rx="5" ry="3.2" fill="${e.yellow}"/>`;return{svg:t([0,0,a,48],u,`art-floor-cushion`),box:[n-l,r-40,a,48],y:r}}function _(n){let[r,i]=n.east.soban,a=(t,n)=>`<ellipse cx="${t}" cy="${n}" rx="5.4" ry="2.8" fill="${e.yellow}"/><rect x="${t-1.4}" y="${n-.9}" width="2.8" height="1.8" fill="${d.brassLo}"/>`,o=(t,n,r)=>`<path d="M${t} 70 q${-4*n} 20 ${-14*n} 30 q${-2*n} 5 ${4*n} 5 h${7*n} q${4*n} -20 ${16*n} -30 Z" fill="${e.crown}" opacity="${r}"/>`,s=``;for(let t=0;t<6;t++){let n=(54+t*2.1).toFixed(1);s+=t%3==1?`<rect x="150" y="${n}" width="5" height="1.3" fill="${e.board}"/><rect x="157" y="${n}" width="5" height="1.3" fill="${e.board}"/>`:`<rect x="150" y="${n}" width="12" height="1.3" fill="${e.board}"/>`}return{svg:t([0,0,188,106],`<ellipse cx="94" cy="101" rx="82" ry="7" fill="${e.board}" opacity=".35"/>
    ${o(46,1,.7)}${o(142,-1,.7)}${o(28,1,1)}${o(160,-1,1)}
    <path d="M20 68 H168 v6 q-22 6 -36 2 q-16 -6 -34 0 q-18 6 -34 0 q-16 -6 -34 0 q-16 4 -26 -2 Z" fill="#7A5236"/>
    <ellipse cx="94" cy="68" rx="88" ry="15" fill="${e.crown}"/><ellipse cx="94" cy="64" rx="88" ry="15" fill="${e.rail}"/>
    <ellipse cx="94" cy="62" rx="74" ry="10" fill="#B9845A" opacity=".55"/>
    <path class="smoke" d="M34 54 q-5 -8 0 -16 q5 -8 0 -16 q-4 -7 1 -13" fill="none" stroke="${e.cream}" stroke-width="1.8" stroke-linecap="round" opacity=".6"/>
    <rect x="28" y="53" width="12" height="3" rx="1.5" fill="${d.brass}"/><path d="M26 55 h16 q0 9 -8 9 q-8 0 -8 -9 Z" fill="${d.brass}"/>
    <rect x="27" y="63" width="2" height="5" fill="${d.brassLo}"/><rect x="39" y="63" width="2" height="5" fill="${d.brassLo}"/>
    ${a(85,73)}${a(98,75)}${a(92,69)}
    <path d="M126 58 L146 53 L148 66 L128 71 Z" fill="${d.indigo}"/><path d="M127 55 L146 50 L147 63 L128 68 Z" fill="${e.cream}"/>
    <path d="M146 50 L166 55 L165 68 L147 63 Z" fill="${d.hanji}"/>${s}
    <rect x="146" y="67" width="26" height="11" rx="4" fill="${d.slate}"/><ellipse cx="156" cy="72" rx="5" ry="2.4" fill="#15111C"/>
    <path d="M136 76 L170 66" stroke="#C9A15A" stroke-width="3.2" stroke-linecap="round"/><path d="M170 66 l7 -2 l-5 4 Z" fill="#1E1B16"/>`,`art-soban`),box:[r-94,i-106+6,188,106],y:i}}function v(n,r,i,a=!0){let o=Math.max(0,Math.min(1,i)),s=30-o*12;return{svg:t([0,0,58,70],`
    <ellipse cx="29" cy="66" rx="27" ry="5" fill="${e.board}" opacity=".35"/>
    ${o>.05?`<ellipse cx="29" cy="24" rx="${(24+o*8).toFixed(1)}" ry="${(9+o*4).toFixed(1)}" fill="${e.moon}" opacity="${(.12+o*.16).toFixed(2)}"/>`:``}
    <path d="M8 24 Q8 50 16 60 Q29 68 42 60 Q50 50 50 24 Z" fill="#AEB7CC"/>
    <path d="M36 26 Q48 26 50 24 Q50 50 42 60 Q38 63 33 64 Q42 50 36 26 Z" fill="#8C95AD"/>
    <path d="M14 40 Q16 52 22 58" fill="none" stroke="#E2E7F1" stroke-width="3" stroke-linecap="round" opacity=".9"/>
    <rect x="12" y="60" width="34" height="6" rx="3" fill="#7A829A"/>
    <ellipse cx="29" cy="24" rx="21" ry="7" fill="#E2E7F1"/>
    <ellipse cx="29" cy="25" rx="17" ry="5" fill="#4E5470"/>
    <ellipse cx="29" cy="${(25+(s-30)*.15).toFixed(1)}" rx="${(10+o*6).toFixed(1)}" ry="${(2.6+o*2).toFixed(1)}" fill="${e.moon}"/>
    ${o>=.999?`<path d="M17 25 Q29 6 41 25 Z" fill="${e.moon}"/><path d="M23 22 Q29 12 35 22" fill="none" stroke="#FFFBE6" stroke-width="2" stroke-linecap="round"/>`:``}
    ${a?`<path d="M33 26 L47 2" stroke="#C9D0DF" stroke-width="7" stroke-linecap="round"/>
    <path d="M35 24 L48 1" stroke="#EEF1F7" stroke-width="2" stroke-linecap="round" opacity=".8"/>`:``}`,`art-mortar`),box:[n-29,r-70+4,58,70],y:r}}function y(n=1,r=0){let i=Math.min(1,Math.max(0,r))*10,a=t([0,0,16,30],`
    <ellipse cx="8" cy="27" rx="7.5" ry="2.6" fill="${e.rail}"/>
    <rect x="4.5" y="${13+i}" width="7" height="${14-i}" rx="2" fill="${e.cream}"/><rect x="9" y="${13+i}" width="2.5" height="${14-i}" rx="1" fill="#D8C9A6"/>
    <g transform="translate(0 ${i})"><g class="flame"><path d="M8 2 Q12.5 8 8 12.5 Q3.5 8 8 2 Z" fill="${e.yellow}"/><path d="M8 6 Q10 9 8 11.4 Q6 9 8 6 Z" fill="#FFF6C8"/></g></g>`,`art-candle`);return n===1?a:a.replace(`width="16" height="30"`,`width="${16*n}" height="${30*n}"`)}function b(e){let[n,r,i]=e.window.moon,a=(e,t,i)=>`<path d="M${n-t} ${r} a${t} ${t} 0 1 0 ${2*t} 0 a${t} ${t} 0 1 0 ${-2*t} 0 Z M${n-e} ${r} a${e} ${e} 0 1 1 ${2*e} 0 a${e} ${e} 0 1 1 ${-2*e} 0 Z" fill="${i}" fill-rule="evenodd"/>`,o=i+18,s=a(i-.5,i+5.5,`#A893CF`)+a(i+5.5,i+10,`#76619B`)+a(i+10,o,`#523D7A`);return{svg:t([n-o,r-o,2*o,2*o],s,`art-moon-ring`),box:[n-o,r-o,2*o,2*o]}}export{u as a,p as c,g as d,b as f,i as h,l as i,_ as l,c as m,y as n,m as o,v as p,s as r,h as s,e as t,o as u};