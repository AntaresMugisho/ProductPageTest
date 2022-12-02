
//-------------------------------------------------------
// Humburger menu toggle on mobile
const humburger = document.querySelector(".humburger")
humburger.addEventListener("click", toggle_menu)

function toggle_menu(){
    console.log('Clicked')
    const navmenu = document.querySelector(".nav-menu")
    navmenu.classList.toggle("nav-menu--show")

    humburger.classList.toggle("bi-list")
    humburger.classList.toggle("bi-x")
}

// Hide navmenu when clicking on a link in navmenu
const nav_links = document.getElementsByClassName("nav-link")
for (const nav_link of nav_links){
    nav_link.addEventListener("click", toggle_menu)
}

//Image slider
const img_container = document.querySelector(".image-container")

const prev_btn = document.querySelector(".zap-btn.prev")
prev_btn.addEventListener("click", ()=>{
    img_container.scrollLeft=img_container.scrollLeft+200
})

const next_btn = document.querySelector(".zap-btn.next")
next_btn.addEventListener("click", ()=>{
    img_container.scrollLeft=img_container.scrollLeft-200
})

