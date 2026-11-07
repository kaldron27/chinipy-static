var e={night:`#1A1030`,night2:`#261A42`,wall:`#4B2179`,wallDot:`#5A2B8C`,crown:`#5A3A28`,wain:`#5A3A28`,wainPanel:`#4C3022`,rail:`#A87447`,floor:`#9A6640`,floorAlt:`#A16B45`,seam:`#76492B`,board:`#3A2418`,cream:`#F3E9D2`,moon:`#FFF1B8`,yellow:`#FED73C`,candle:`#F7B24A`,cloth:`#690CA5`,lilac:`#8E4BC8`,leaf:`#3E8E4E`,leafDark:`#2C6B3A`},t=(e,t,n=``)=>`<svg class="${n}" xmlns="http://www.w3.org/2000/svg" viewBox="${e.join(` `)}" width="${e[2]}" height="${e[3]}" aria-hidden="true" focusable="false">${t}</svg>`;function n(n,r,i,a=!0){let o=Math.max(0,Math.min(1,i)),s=30-o*12;return{svg:t([0,0,58,70],`
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
    <path d="M35 24 L48 1" stroke="#EEF1F7" stroke-width="2" stroke-linecap="round" opacity=".8"/>`:``}`,`art-mortar`),box:[n-29,r-70+4,58,70],y:r}}function r(n=1,r=0){let i=Math.min(1,Math.max(0,r))*10,a=t([0,0,16,30],`
    <ellipse cx="8" cy="27" rx="7.5" ry="2.6" fill="${e.rail}"/>
    <rect x="4.5" y="${13+i}" width="7" height="${14-i}" rx="2" fill="${e.cream}"/><rect x="9" y="${13+i}" width="2.5" height="${14-i}" rx="1" fill="#D8C9A6"/>
    <g transform="translate(0 ${i})"><g class="flame"><path d="M8 2 Q12.5 8 8 12.5 Q3.5 8 8 2 Z" fill="${e.yellow}"/><path d="M8 6 Q10 9 8 11.4 Q6 9 8 6 Z" fill="#FFF6C8"/></g></g>`,`art-candle`);return n===1?a:a.replace(`width="16" height="30"`,`width="${16*n}" height="${30*n}"`)}function i(e){let[n,r,i]=e.window.moon,a=(e,t,i)=>`<path d="M${n-t} ${r} a${t} ${t} 0 1 0 ${2*t} 0 a${t} ${t} 0 1 0 ${-2*t} 0 Z M${n-e} ${r} a${e} ${e} 0 1 1 ${2*e} 0 a${e} ${e} 0 1 1 ${-2*e} 0 Z" fill="${i}" fill-rule="evenodd"/>`,o=i+18,s=a(i-.5,i+5.5,`#A893CF`)+a(i+5.5,i+10,`#76619B`)+a(i+10,o,`#523D7A`);return{svg:t([n-o,r-o,2*o,2*o],s,`art-moon-ring`),box:[n-o,r-o,2*o,2*o]}}export{n as i,r as n,i as r,e as t};