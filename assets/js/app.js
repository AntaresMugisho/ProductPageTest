

//+--------------------------------+
//| AUTO UPDATE FOOTER YEARS       |
//+--------------------------------+

let start_year = 2022
let years_label = document.querySelector(".years")
let year = (new Date).getFullYear()

// If user time is incorrect, then use UTC time
if (year < start_year){
    year = (new Date).getUTCFullYear()
}

if (year == start_year){
    years_label.innerText = start_year
}
else{
    years_label.innerText = `${start_year} - ${year}`
}

//+--------------------------------+
//| NAV MENU ON MOBILE             |
//+--------------------------------+

// Humburger menu toggle on mobile
const humburger = document.querySelector(".humburger")
humburger.addEventListener("click", toggle_menu)

function toggle_menu(){
    const navmenu = document.querySelector(".nav-menu")
    navmenu.classList.toggle("nav-menu--show")
    humburger.classList.toggle("bi-list")
    humburger.classList.toggle("bi-x")
}

// Hide navmenu when clicking on a link of navmenu
const nav_links = document.getElementsByClassName("nav-link")
for (const nav_link of nav_links){
    nav_link.addEventListener("click", toggle_menu)
}
 

//+--------------------------------+
//| IMAGE CONTAINER (SLIDER)       |
//+--------------------------------+

const img_container = document.querySelector(".image-container")

// Scroll with arrow buttons
const next_btn = document.querySelector(".zap-btn.next")
next_btn.addEventListener("click", ()=>{
    img_container.scrollLeft += 200
})

const prev_btn = document.querySelector(".zap-btn.prev")
prev_btn.addEventListener("click", ()=>{
    
    if (img_container.scrollLeft == 1191){
        img_container.scrollLeft -= 191
        // 1191 is the max scrollLeft value in my case
    }
    else{
        img_container.scrollLeft -= 200
    }
})

// Update active image indicator on scroll
let nav_btns = document.querySelectorAll(".nav-btn")
img_container.addEventListener("scroll", ()=>{
    const scroll_pos = img_container.scrollLeft

    nav_btns.forEach(nav_btn=>{
        nav_btn.classList.remove("active")
    })

    if (scroll_pos<200){
        nav_btns[0].classList.add("active")
    }
    else if (scroll_pos<400){
        nav_btns[1].classList.add("active")
    }
    else if (scroll_pos<600){
        nav_btns[2].classList.add("active")
    }
    else if (scroll_pos<800){
        nav_btns[3].classList.add("active")
    }
    else if (scroll_pos<1000){
        nav_btns[4].classList.add("active")
    }
    else if (scroll_pos<1191){
        nav_btns[5].classList.add("active")
    }
    else if (scroll_pos>=1191){
        nav_btns[6].classList.add("active")
    }
})

// Scroll if active image indicator button is clicked
nav_btns.forEach((nav_btn, i) => {
    nav_btn.addEventListener("click", ()=>{
        img_container.scrollLeft = i*200
    })
})


//+--------------------------------+
//| PRICE INCREASE                 |
//+--------------------------------+

const unit_price = document.getElementById("unit-price").innerText
const quantity = document.getElementById("quantity")
const total_amount = document.getElementById("total-amount")

// Initialize the total price label
total_amount.innerText = unit_price

// Increase total price on quantity input
quantity.addEventListener("input", ()=>{
    total_amount.innerText = (quantity.value != 0) ? quantity.value * unit_price : unit_price
})