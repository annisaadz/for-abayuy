/* POPUP */

function openPopup(id){

  closeAll()

  document.getElementById(id).classList.remove("hidden")

}

function closeAll(){

  document.querySelectorAll(".popup").forEach(p=>p.classList.add("hidden"))

}

/* PASSWORD */

let input=""

function addNum(n){

  if(input.length<4){

    input+=n

    pwInput.value=input

  }

}

function delNum(){

  input=input.slice(0,-1)

  pwInput.value=input

}

function checkPw(){

  if(input==="5208"){

    closeAll()
openPopup("letterIcon")

    input=""

    pwInput.value=""

  }else{

    alert("petunjuk: hari ultahnya 🤍")

    input=""

    pwInput.value=""

  }

}

function openLetter(){

  closeAll()

  openPopup("letter")

}

/* SPOTIFY */

function openSpotify(){

  window.open(
    "https://open.spotify.com/track/7AzVV4CtTbzLVMc5GDVWZj",

    "_blank"

  )

}

/* GAME */

let x=0,y=0,cakes=0

const player=document.getElementById("player")

const cakeEls=document.querySelectorAll(".cake")

function move(dx,dy){

  x=Math.max(0,Math.min(160,x+dx))

  y=Math.max(0,Math.min(160,y+dy))

  player.style.left=x+"px"

  player.style.top=y+"px"

  checkCake()

  checkFinish()

}

function checkCake(){

  cakeEls.forEach(c=>{

    if(!c.dataset.taken){
      const cx=parseInt(c.style.left)

      const cy=parseInt(c.style.top)

      if(x===cx && y===cy){

        c.style.display="none"

        c.dataset.taken=true

        cakes++

      }

    }

  })

}

function checkFinish(){

  if(x===160 && y===160){

    if(cakes===3){

      win()

    }else{

      info.innerText="ambil semua 🍰 dulu ya"

    }

  }

}

/* WIN */

function win(){
closeAll()

  confetti.innerHTML="🎉✨🎂✨🎉✨🎂✨🎉"

  setTimeout(()=>confetti.innerHTML="",2500)

  const winPop=document.createElement("div")

  winPop.className="popup"

  winPop.innerHTML=`

    <div class="popup-inner">

      <h2>🎊YippiEee🎊</h2>

      <img src="https://em-content.zobj.net/source/apple/391/birthday-cake_1f382.png" width="140">

      <p>Hellow, Eighteen!🌟</p>

      <button onclick="this.parentElement.parentElement.remove()">tutup</button>

    </div>`

  document.body.appendChild(winPop)

}
