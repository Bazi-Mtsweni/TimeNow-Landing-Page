const menuBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".navigation");

var active = false;

menuBtn.addEventListener("click", ()=>{

    const barsIcon = document.querySelector(" .fa-bars");
    const closeIcon = document.querySelector(" .fa-xmark");

    if(!active){
        navList.classList.add("active");
        barsIcon.style.display = "none";
        closeIcon.style.display = "block";
        active = true;
    }
    else {

        navList.classList.remove("active");
        barsIcon.style.display = "block";
        closeIcon.style.display = "none";
        active = false
    }
})