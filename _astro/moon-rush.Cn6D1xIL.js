import{t as e}from"./preload-helper.khBccGFq.js";import{r as t}from"./hall-kit.CRoGAv3A.js";import{o as n}from"./scene-sound.DLhouHsz.js";var r=``+new URL(`moon-rush.BbdxzrB_.css`,import.meta.url).href,i=`/images/moonrise/hall/kit/`,a=new Promise(e=>{if(document.querySelector(`link[href="${``+new URL(`moon-rush.BbdxzrB_.css`,import.meta.url).href}"]`)){e();return}let t=document.createElement(`link`);t.rel=`stylesheet`,t.href=r,t.addEventListener(`load`,()=>e()),t.addEventListener(`error`,()=>e()),document.head.append(t)});async function o(r){await a;let o=document.activeElement,s=document.createElement(`dialog`);s.className=`moon-rush`,s.dataset.theme=`paper`,s.setAttribute(`aria-labelledby`,`moonRushTitle`),s.setAttribute(`aria-describedby`,`moonRushDesc`),s.innerHTML=`
    <div class="moon-rush-frame">
      <img class="moon-rush-window" src="/images/moonrise/hall/meong/window.webp" alt="" width="1600" height="1600" decoding="async" />
      <span class="moon-rush-scene" role="img" aria-label="보름 밤 소동에 놀란 호키·리트·파이·치니: 쑥이 나무만큼 자라고, 소스 비가 내리고, 포도가 터지고, 치즈가 쏟아져요"></span>
    </div>
    <div class="moon-rush-body">
      <h2 id="moonRushTitle">보름 밤이라 점방이 난리예요</h2>
      <div id="moonRushDesc" class="moon-rush-desc">
        <p>손님이 한꺼번에 몰려서 실시간 손님 수를 잠깐 쉬어요.</p>
        <p>점괘·메뉴·결제는 그대로 열려 있어요. 손님 수는 조금 전 숫자예요.</p>
      </div>
      <button type="button" class="moon-take moon-rush-ok">알겠어요</button>
    </div>`;let c=s.querySelector(`.moon-rush-scene`),l=document.createElement(`img`);l.alt=``,l.width=1430,l.height=642,l.src=`${i}moon-rush-f${r.reduce?3:0}.webp`,c.append(l),r.root.append(s);let u=null,d=()=>{},f=new Promise(e=>d=e),p=()=>{s.open&&s.close()};return s.querySelector(`.moon-rush-ok`).addEventListener(`click`,p),s.addEventListener(`close`,()=>{u?.stop(),s.remove(),o?.isConnected&&o.focus({preventScroll:!0}),d()},{once:!0}),s.showModal(),n(`sfx.moon_rush`),s.querySelector(`.moon-rush-ok`).focus({preventScroll:!0}),r.reduce||(s.animate([{opacity:0,translate:`0 24px`},{opacity:1,translate:`0 0`}],{duration:320,easing:`ease-out`}),Promise.all([e(()=>import(`./kit-play.Dy1dCgDr.js`),[],import.meta.url),t()]).then(([e,t])=>{if(!s.open)return;let n=e.kitSlot(t.default,c,null,`rush`);u=n,n.once(`rush`,()=>{s.open&&n.loop(`rush-rain`)})},()=>{})),{close:p,closed:f}}export{o as showMoonRush};