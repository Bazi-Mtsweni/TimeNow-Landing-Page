const menuBtn = document.querySelector(".nav-btn");
const navList = document.querySelector(".navigation");
const barsIcon = document.querySelector(" .fa-bars");
const closeIcon = document.querySelector(" .fa-xmark");

var active = false;

menuBtn.addEventListener("click", ()=>{
    if(!active){
        navList.classList.add("active");
        // btnIcon.classList.remove("fa-bars");
        barsIcon.style.display = "none";
        closeIcon.style.display = "block";

        active = true;
    }
    else {

        navList.classList.remove("active");

        active = false
    }
})

// menuBtn.addEventListener('click', () => {
//     navList.classList.toggle('active');
//     if (btnIcon.classList.contains('fa-bars')) {
//         btnIcon.classList.remove('fa-bars');
//         btnIcon.classList.add('fa-xmark');

//     }
//     else {
//         btnIcon.classList.remove('fa-xmark');
//         btnIcon.classList.add('fa-bars');
//     }
// });