let image1 = document.querySelector("#POOB_image1");
let image2 = document.querySelector("#POOB_image2");
let image3 = document.querySelector("#POOB_image3");
let image4 = document.querySelector("#POOB_image4");
let image5 = document.querySelector("#POOB_image5");
let image6 = document.querySelector("#POOB_image6");
let a1 = document.querySelector("#POOB_content1");
let a2 = document.querySelector("#POOB_content2");
let a3 = document.querySelector("#POOB_content3");
let a4 = document.querySelector("#POOB_content4");
let a5 = document.querySelector("#POOB_content5");
let a6 = document.querySelector("#POOB_content6");
let slide = document.querySelector("#slide");
// ============================MediaQuery================================================
function media(){
let q = matchMedia("(max-width: 750px)");

if(q.matches){
    let flag1 = 0;
image1.addEventListener("click", ()=> {
    if (flag1 == 0) {
        image1.style.width = "100vw";
        image1.style.height = "30vh";
        image1.style.transition = " all 1s ease-in-out";
        a1.style.height = "100%";
        a1.style.width = "100%";
        a1.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";
            val.style.opacity = "1";
            val.style.transition = "1s ease-in-out";
            val.style.fontSize = "3vw";
        })
        a1.querySelector("button").style.display = "block"
        a1.querySelector("button").style.fontSize = "3vw";
        a1.querySelector("h4").style.color = "var(--maincolor)"

       // 2

        image2.style.width = "100vw";
        image2.style.height = "calc(100vmax/6)"
        image2.style.transition = " all 1s ease-in-out";
        a2.style.height = "100%";
        a2.style.height = "100%";
        a2.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a2.querySelector("button").style.display = "none";
        a2.querySelector("h4").style.color = "var(--white)";
        flag2 = 0;

         // 3

         image3.style.width = "100vw";
         image3.style.height = "calc(100vmax/6)"
         image3.style.transition = " all 1s ease-in-out";
         a3.style.height = "100%";
         a3.style.height = "100%";
         a3.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a3.querySelector("button").style.display = "none";
         a3.querySelector("h4").style.color = "var(--white)";
         flag3 = 0;
 
         // 4
 
         image4.style.width = "100vw";
        image4.style.height = "calc(100vmax/6)"
        image4.style.transition = " all 1s ease-in-out";
        a4.style.height = "100%";
        a4.style.height = "100%";
        a4.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a4.querySelector("button").style.display = "none";
        a4.querySelector("h4").style.color = "var(--white)";
        flag4 = 0;
 
         // 5
 
         image5.style.width = "100vw";
        image5.style.height = "calc(100vmax/6)"
        image5.style.transition = " all 1s ease-in-out";
        a5.style.height = "100%";
        a5.style.height = "100%";
        a5.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a5.querySelector("button").style.display = "none";
        a5.querySelector("h4").style.color = "var(--white)";
        flag5 = 0;
 
         // 6
 
         image6.style.width = "100vw";
        image6.style.height = "calc(100vmax/6)"
        image6.style.transition = " all 1s ease-in-out";
        a6.style.height = "100%";
        a6.style.height = "100%";
        a6.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a6.querySelector("button").style.display = "none";
        a6.querySelector("h4").style.color = "var(--white)";
        flag6 = 0;
 


        flag1 = 1;
    }
    else {
        image1.style.width = "100vw";
        image1.style.height = "calc(100vmax/6)"
        image1.style.transition = " all 1s ease-in-out";
        a1.style.height = "100%";
        a1.style.height = "100%";
        a1.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a1.querySelector("button").style.display = "none";
        a1.querySelector("h4").style.color = "var(--white)";
        flag1 = 0;
    }
})
 let flag2 = 0;
image2.addEventListener("click", function func1() {
    if (flag2 == 0) {
        image2.style.width = "100vw";
        image2.style.height = "30vh";
        image2.style.transition = " all 1s ease-in-out";
        a2.style.height = "100%";
        a2.style.width = "100%";
        a2.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";
            val.style.opacity = "1";
            val.style.transition = "1s ease-in-out";
            val.style.fontSize = "3vw";
        })
        a2.querySelector("button").style.display = "block"
        a2.querySelector("button").style.fontSize = "3vw";
        a2.querySelector("h4").style.color = "var(--maincolor)"

        // 1

        image1.style.width = "100vw";
        image1.style.height = "calc(100vmax/6)"
        image1.style.transition = " all 1s ease-in-out";
        a1.style.height = "100%";
        a1.style.height = "100%";
        a1.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a1.querySelector("button").style.display = "none";
        a1.querySelector("h4").style.color = "var(--white)";
        flag1 = 0;

         // 3

         image3.style.width = "100vw";
         image3.style.height = "calc(100vmax/6)"
         image3.style.transition = " all 1s ease-in-out";
         a3.style.height = "100%";
         a3.style.height = "100%";
         a3.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a3.querySelector("button").style.display = "none";
         a3.querySelector("h4").style.color = "var(--white)";
         flag3 = 0;
 
         // 4
 
         image4.style.width = "100vw";
        image4.style.height = "calc(100vmax/6)"
        image4.style.transition = " all 1s ease-in-out";
        a4.style.height = "100%";
        a4.style.height = "100%";
        a4.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a4.querySelector("button").style.display = "none";
        a4.querySelector("h4").style.color = "var(--white)";
        flag4 = 0;
 
         // 5
 
         image5.style.width = "100vw";
        image5.style.height = "calc(100vmax/6)"
        image5.style.transition = " all 1s ease-in-out";
        a5.style.height = "100%";
        a5.style.height = "100%";
        a5.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a5.querySelector("button").style.display = "none";
        a5.querySelector("h4").style.color = "var(--white)";
        flag5 = 0;
 
         // 6
 
         image6.style.width = "100vw";
        image6.style.height = "calc(100vmax/6)"
        image6.style.transition = " all 1s ease-in-out";
        a6.style.height = "100%";
        a6.style.height = "100%";
        a6.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a6.querySelector("button").style.display = "none";
        a6.querySelector("h4").style.color = "var(--white)";
        flag6 = 0;
 


        flag2 = 1;
    }
    else {
        image2.style.width = "100vw";
        image2.style.height = "calc(100vmax/6)"
        image2.style.transition = " all 1s ease-in-out";
        a2.style.height = "100%";
        a2.style.height = "100%";
        a2.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a2.querySelector("button").style.display = "none";
        a2.querySelector("h4").style.color = "var(--white)";
        flag2 = 0;
    }
})

let flag3 = 0;
image3.addEventListener("click", function func1() {
    if (flag3 == 0) {
        image3.style.width = "100vw";
        image3.style.height = "30vh";
        image3.style.transition = " all 1s ease-in-out";
        a3.style.height = "100%";
        a3.style.width = "100%";
        a3.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";
            val.style.opacity = "1";
            val.style.transition = "1s ease-in-out";
            val.style.fontSize = "3vw";
        })
        a3.querySelector("button").style.display = "block"
        a3.querySelector("button").style.fontSize = "3vw";
        a3.querySelector("h4").style.color = "var(--maincolor)"

        // 1

        image1.style.width = "100vw";
        image1.style.height = "calc(100vmax/6)"
        image1.style.transition = " all 1s ease-in-out";
        a1.style.height = "100%";
        a1.style.height = "100%";
        a1.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a1.querySelector("button").style.display = "none";
        a1.querySelector("h4").style.color = "var(--white)";
        flag1 = 0;

         // 2

         image2.style.width = "100vw";
         image2.style.height = "calc(100vmax/6)"
         image2.style.transition = " all 1s ease-in-out";
         a2.style.height = "100%";
         a2.style.height = "100%";
         a2.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a2.querySelector("button").style.display = "none";
         a2.querySelector("h4").style.color = "var(--white)";
         flag2 = 0;
 
         // 4
 
         image4.style.width = "100vw";
        image4.style.height = "calc(100vmax/6)"
        image4.style.transition = " all 1s ease-in-out";
        a4.style.height = "100%";
        a4.style.height = "100%";
        a4.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a4.querySelector("button").style.display = "none";
        a4.querySelector("h4").style.color = "var(--white)";
        flag4 = 0;
 
         // 5
 
         image5.style.width = "100vw";
        image5.style.height = "calc(100vmax/6)"
        image5.style.transition = " all 1s ease-in-out";
        a5.style.height = "100%";
        a5.style.height = "100%";
        a5.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a5.querySelector("button").style.display = "none";
        a5.querySelector("h4").style.color = "var(--white)";
        flag5 = 0;
 
         // 6
 
         image6.style.width = "100vw";
        image6.style.height = "calc(100vmax/6)"
        image6.style.transition = " all 1s ease-in-out";
        a6.style.height = "100%";
        a6.style.height = "100%";
        a6.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a6.querySelector("button").style.display = "none";
        a6.querySelector("h4").style.color = "var(--white)";
        flag6 = 0;
 


        flag3 = 1;
    }
    else {
        image3.style.width = "100vw";
        image3.style.height = "calc(100vmax/6)"
        image3.style.transition = " all 1s ease-in-out";
        a3.style.height = "100%";
        a3.style.height = "100%";
        a3.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a3.querySelector("button").style.display = "none";
        a3.querySelector("h4").style.color = "var(--white)";
        flag3 = 0;
    }
})

let flag5 = 0;
image5.addEventListener("click", function func1() {
    if (flag5 == 0) {
        image5.style.width = "100vw";
        image5.style.height = "30vh";
        image5.style.transition = " all 1s ease-in-out";
        a5.style.height = "100%";
        a5.style.width = "100%";
        a5.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";
            val.style.opacity = "1";
            val.style.transition = "1s ease-in-out";
            val.style.fontSize = "3vw";
        })
        a5.querySelector("button").style.display = "block"
        a5.querySelector("button").style.fontSize = "3vw";
        a5.querySelector("h4").style.color = "var(--maincolor)"

        // 1

        image1.style.width = "100vw";
        image1.style.height = "calc(100vmax/6)"
        image1.style.transition = " all 1s ease-in-out";
        a1.style.height = "100%";
        a1.style.height = "100%";
        a1.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a1.querySelector("button").style.display = "none";
        a1.querySelector("h4").style.color = "var(--white)";
        flag1 = 0;

         // 2

         image2.style.width = "100vw";
         image2.style.height = "calc(100vmax/6)"
         image2.style.transition = " all 1s ease-in-out";
         a2.style.height = "100%";
         a2.style.height = "100%";
         a2.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a2.querySelector("button").style.display = "none";
         a2.querySelector("h4").style.color = "var(--white)";
         flag2 = 0;
 
         // 3
 
         image3.style.width = "100vw";
        image3.style.height = "calc(100vmax/6)"
        image3.style.transition = " all 1s ease-in-out";
        a3.style.height = "100%";
        a3.style.height = "100%";
        a3.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a3.querySelector("button").style.display = "none";
        a3.querySelector("h4").style.color = "var(--white)";
        flag3 = 0;
 
         // 4
 
         image4.style.width = "100vw";
        image4.style.height = "calc(100vmax/6)"
        image4.style.transition = " all 1s ease-in-out";
        a4.style.height = "100%";
        a4.style.height = "100%";
        a4.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a4.querySelector("button").style.display = "none";
        a4.querySelector("h4").style.color = "var(--white)";
        flag4 = 0;
 
         // 6
 
         image6.style.width = "100vw";
        image6.style.height = "calc(100vmax/6)"
        image6.style.transition = " all 1s ease-in-out";
        a6.style.height = "100%";
        a6.style.height = "100%";
        a6.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a6.querySelector("button").style.display = "none";
        a6.querySelector("h4").style.color = "var(--white)";
        flag6 = 0;
 


        flag5 = 1;
    }
    else {
        image5.style.width = "100vw";
        image5.style.height = "calc(100vmax/6)"
        image5.style.transition = " all 1s ease-in-out";
        a5.style.height = "100%";
        a5.style.height = "100%";
        a5.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a5.querySelector("button").style.display = "none";
        a5.querySelector("h4").style.color = "var(--white)";
        flag5 = 0;
    }
})

let flag4 = 0; 
image4.addEventListener("click", function func1() {
    if (flag4 == 0) {
        image4.style.width = "100vw";
        image4.style.height = "30vh";
        image4.style.transition = " all 1s ease-in-out";
        a4.style.height = "100%";
        a4.style.width = "100%";
        a4.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";
            val.style.opacity = "1";
            val.style.transition = "1s ease-in-out";
            val.style.fontSize = "3vw";
        })
        a4.querySelector("button").style.display = "block"
        a4.querySelector("button").style.fontSize = "3vw";
        a4.querySelector("h4").style.color = "var(--maincolor)"

        // 1

        image1.style.width = "100vw";
        image1.style.height = "calc(100vmax/6)"
        image1.style.transition = " all 1s ease-in-out";
        a1.style.height = "100%";
        a1.style.height = "100%";
        a1.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a1.querySelector("button").style.display = "none";
        a1.querySelector("h4").style.color = "var(--white)";
        flag1 = 0;

         // 2

         image2.style.width = "100vw";
         image2.style.height = "calc(100vmax/6)"
         image2.style.transition = " all 1s ease-in-out";
         a2.style.height = "100%";
         a2.style.height = "100%";
         a2.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a2.querySelector("button").style.display = "none";
         a2.querySelector("h4").style.color = "var(--white)";
         flag2 = 0;
 
         // 3
 
         image3.style.width = "100vw";
        image3.style.height = "calc(100vmax/6)"
        image3.style.transition = " all 1s ease-in-out";
        a3.style.height = "100%";
        a3.style.height = "100%";
        a3.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a3.querySelector("button").style.display = "none";
        a3.querySelector("h4").style.color = "var(--white)";
        flag3 = 0;
 
         // 5
 
         image5.style.width = "100vw";
        image5.style.height = "calc(100vmax/6)"
        image5.style.transition = " all 1s ease-in-out";
        a5.style.height = "100%";
        a5.style.height = "100%";
        a5.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a5.querySelector("button").style.display = "none";
        a5.querySelector("h4").style.color = "var(--white)";
        flag5 = 0;
 
         // 6
 
         image6.style.width = "100vw";
        image6.style.height = "calc(100vmax/6)"
        image6.style.transition = " all 1s ease-in-out";
        a6.style.height = "100%";
        a6.style.height = "100%";
        a6.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a6.querySelector("button").style.display = "none";
        a6.querySelector("h4").style.color = "var(--white)";
        flag6 = 0;
 


        flag4 = 1;
    }
    else {
        image4.style.width = "100vw";
        image4.style.height = "calc(100vmax/6)"
        image4.style.transition = " all 1s ease-in-out";
        a4.style.height = "100%";
        a4.style.height = "100%";
        a4.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a4.querySelector("button").style.display = "none";
        a4.querySelector("h4").style.color = "var(--white)";
        flag4 = 0;
    }
})

let flag6 = 0;
image6.addEventListener("click", function func1() {
    if (flag6 == 0) {
        image6.style.width = "100vw";
        image6.style.height = "30vh";
        image6.style.transition = " all 1s ease-in-out";
        a6.style.height = "100%";
        a6.style.width = "100%";
        a6.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";
            val.style.opacity = "1";
            val.style.transition = "1s ease-in-out";
            val.style.fontSize = "3vw";
        })
        a6.querySelector("button").style.display = "block"
        a6.querySelector("button").style.fontSize = "3vw";
        a6.querySelector("h4").style.color = "var(--maincolor)"

        // 1

        image1.style.width = "100vw";
        image1.style.height = "calc(100vmax/6)"
        image1.style.transition = " all 1s ease-in-out";
        a1.style.height = "100%";
        a1.style.height = "100%";
        a1.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a1.querySelector("button").style.display = "none";
        a1.querySelector("h4").style.color = "var(--white)";
        flag1 = 0;

         // 2

         image2.style.width = "100vw";
         image2.style.height = "calc(100vmax/6)"
         image2.style.transition = " all 1s ease-in-out";
         a2.style.height = "100%";
         a2.style.height = "100%";
         a2.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a2.querySelector("button").style.display = "none";
         a2.querySelector("h4").style.color = "var(--white)";
         flag2 = 0;
 
         // 3
 
         image3.style.width = "100vw";
        image3.style.height = "calc(100vmax/6)"
        image3.style.transition = " all 1s ease-in-out";
        a3.style.height = "100%";
        a3.style.height = "100%";
        a3.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a3.querySelector("button").style.display = "none";
        a3.querySelector("h4").style.color = "var(--white)";
        flag3 = 0;
 
         // 4
 
         image4.style.width = "100vw";
        image4.style.height = "calc(100vmax/6)"
        image4.style.transition = " all 1s ease-in-out";
        a4.style.height = "100%";
        a4.style.height = "100%";
        a4.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a4.querySelector("button").style.display = "none";
        a4.querySelector("h4").style.color = "var(--white)";
        flag4 = 0;
 
         // 5
 
         image5.style.width = "100vw";
        image5.style.height = "calc(100vmax/6)"
        image5.style.transition = " all 1s ease-in-out";
        a5.style.height = "100%";
        a5.style.height = "100%";
        a5.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a5.querySelector("button").style.display = "none";
        a5.querySelector("h4").style.color = "var(--white)";
        flag5 = 0;
 


        flag6 = 1;
    }
    else {
        image6.style.width = "100vw";
        image6.style.height = "calc(100vmax/6)"
        image6.style.transition = " all 1s ease-in-out";
        a6.style.height = "100%";
        a6.style.height = "100%";
        a6.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a6.querySelector("button").style.display = "none";
        a6.querySelector("h4").style.color = "var(--white)";
        flag6 = 0;
    }
})
}
else{
    let flag1 = 0;
image1.addEventListener("click", function func1() {
    if (flag1 == 0) {
        image1.style.width = "calc(100vw/3)";
        image1.style.transition = " all 1s ease-in-out";
        a1.style.height = "100%";
        a1.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";
            val.style.opacity = "1";
            val.style.transition = "1s ease-in-out";
        })
        a1.querySelector("button").style.display = "block"
        a1.querySelector("h4").style.color = "var(--maincolor)"

        // 2

        image2.style.width = "calc(100vw/6)";
        image2.style.transition = " all 1s ease-in-out";
        a2.style.height = "50%";
        a2.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a2.querySelector("button").style.display = "none";
        a2.querySelector("h4").style.color = "var(--white)";
        flag2 =0

         // 3

         image3.style.width = "calc(100vw/6)";
         image3.style.transition = " all 1s ease-in-out";
         a3.style.height = "50%";
         a3.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a3.querySelector("button").style.display = "none";
         a3.querySelector("h4").style.color = "var(--white)";
         flag3 = 0;
 
         // 4
 
         image4.style.width = "calc(100vw/6)";
         image4.style.transition = " all 1s ease-in-out";
         a4.style.height = "50%";
         a4.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a4.querySelector("button").style.display = "none";
         a4.querySelector("h4").style.color = "var(--white)";
         flag4 = 0;
 
         // 5
 
         image5.style.width = "calc(100vw/6)";
         image5.style.transition = " all 1s ease-in-out";
         a5.style.height = "50%";
         a5.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a5.querySelector("button").style.display = "none";
         a5.querySelector("h4").style.color = "var(--white)";
         flag5 = 0;
 
         // 6
 
         image6.style.width = "calc(100vw/6)";
         image6.style.transition = " all 1s ease-in-out";
         a6.style.height = "50%";
         a6.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a6.querySelector("button").style.display = "none";
         a6.querySelector("h4").style.color = "var(--white)";
         flag6 = 0;
 


        flag1 = 1;
    }
    else {
        image1.style.width = "calc(100vw/6)";
        image1.style.transition = " all 1s ease-in-out";
        a1.style.height = "50%";
        a1.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a1.querySelector("button").style.display = "none";
        a1.querySelector("h4").style.color = "var(--white)";
        flag1 = 0;
    }
})


let flag2 =0;
image2.addEventListener("click", () => {
    if (flag2 == 0) {

        // 2
        image2.style.width = "calc(100vw/3)";
        image2.style.transition = " all 1s ease-in-out";
        a2.style.height = "100%";
        a2.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";
            val.style.opacity = "1";
            val.style.transition = "1s ease-in-out";
        })
        a2.querySelector("button").style.display = "block"
        a2.querySelector("h4").style.color = "var(--maincolor)"

        // 1

        image1.style.width = "calc(100vw/6)";
        image1.style.transition = " all 1s ease-in-out";
        a1.style.height = "50%";
        a1.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a1.querySelector("button").style.display = "none";
        a1.querySelector("h4").style.color = "var(--white)";
        flag1 = 0

        // 3

        image3.style.width = "calc(100vw/6)";
        image3.style.transition = " all 1s ease-in-out";
        a3.style.height = "50%";
        a3.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a3.querySelector("button").style.display = "none";
        a3.querySelector("h4").style.color = "var(--white)";
        flag3 = 0;

        // 4

        image4.style.width = "calc(100vw/6)";
        image4.style.transition = " all 1s ease-in-out";
        a4.style.height = "50%";
        a4.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a4.querySelector("button").style.display = "none";
        a4.querySelector("h4").style.color = "var(--white)";
        flag4 = 0;

        // 5

        image5.style.width = "calc(100vw/6)";
        image5.style.transition = " all 1s ease-in-out";
        a5.style.height = "50%";
        a5.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a5.querySelector("button").style.display = "none";
        a5.querySelector("h4").style.color = "var(--white)";
        flag5 = 0;

        // 6

        image6.style.width = "calc(100vw/6)";
        image6.style.transition = " all 1s ease-in-out";
        a6.style.height = "50%";
        a6.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a6.querySelector("button").style.display = "none";
        a6.querySelector("h4").style.color = "var(--white)";
        flag6 = 0;

        flag2 = 1;
    }
    else {
        image2.style.width = "calc(100vw/6)";
        image2.style.transition = " all 1s ease-in-out";
        a2.style.height = "50%";
        a2.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a2.querySelector("button").style.display = "none";
        a2.querySelector("h4").style.color = "var(--white)";
        flag2 = 0;
    }
})

let flag3 =0;
image3.addEventListener("click", () => {
    if (flag3 == 0) {
        image3.style.width = "calc(100vw/3)";
        image3.style.transition = " all 1s ease-in-out";
        a3.style.height = "100%";
        a3.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";

            val.style.opacity = "1";

            val.style.transition = "1s ease-in-out";
        })
        a3.querySelector("button").style.display = "block"
        a3.querySelector("h4").style.color = "var(--maincolor)"

        // 1

        image1.style.width = "calc(100vw/6)";
        image1.style.transition = " all 1s ease-in-out";
        a1.style.height = "50%";
        a1.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a1.querySelector("button").style.display = "none";
        a1.querySelector("h4").style.color = "var(--white)";
        flag1 = 0;

         // 2

         image2.style.width = "calc(100vw/6)";
         image2.style.transition = " all 1s ease-in-out";
         a2.style.height = "50%";
         a2.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a2.querySelector("button").style.display = "none";
         a2.querySelector("h4").style.color = "var(--white)";
         flag2 =0
 
         // 4
 
         image4.style.width = "calc(100vw/6)";
         image4.style.transition = " all 1s ease-in-out";
         a4.style.height = "50%";
         a4.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a4.querySelector("button").style.display = "none";
         a4.querySelector("h4").style.color = "var(--white)";
         flag4 = 0;
 
         // 5
 
         image5.style.width = "calc(100vw/6)";
         image5.style.transition = " all 1s ease-in-out";
         a5.style.height = "50%";
         a5.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a5.querySelector("button").style.display = "none";
         a5.querySelector("h4").style.color = "var(--white)";
         flag5 = 0;
 
         // 6
 
         image6.style.width = "calc(100vw/6)";
         image6.style.transition = " all 1s ease-in-out";
         a6.style.height = "50%";
         a6.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a6.querySelector("button").style.display = "none";
         a6.querySelector("h4").style.color = "var(--white)";
         flag6 = 0;
 

        flag3 = 1;
    }
    else {
        image3.style.width = "calc(100vw/6)";
        image3.style.transition = " all 1s ease-in-out";
        a3.style.height = "50%";
        a3.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a3.querySelector("button").style.display = "none";
        a3.querySelector("h4").style.color = "var(--white)";
        flag3 = 0;
    }
})

let flag4 = 0;
image4.addEventListener("click", () => {
    if (flag4 == 0) {
        image4.style.width = "calc(100vw/3)";
        image4.style.transition = " all 1s ease-in-out";
        a4.style.height = "100%";
        a4.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";

            val.style.opacity = "1";

            val.style.transition = "1s ease-in-out";
        })
        a4.querySelector("button").style.display = "block"
        a4.querySelector("h4").style.color = "var(--maincolor)"

         // 1

         image1.style.width = "calc(100vw/6)";
         image1.style.transition = " all 1s ease-in-out";
         a1.style.height = "50%";
         a1.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a1.querySelector("button").style.display = "none";
         a1.querySelector("h4").style.color = "var(--white)";
         flag1 = 0;
 
          // 2
 
          image2.style.width = "calc(100vw/6)";
          image2.style.transition = " all 1s ease-in-out";
          a2.style.height = "50%";
          a2.querySelectorAll("p").forEach((val) => {
              val.style.display = "none";
  
          })
          a2.querySelector("button").style.display = "none";
          a2.querySelector("h4").style.color = "var(--white)";
          flag2 =0
 
         //  3
 
         image3.style.width = "calc(100vw/6)";
         image3.style.transition = " all 1s ease-in-out";
         a3.style.height = "50%";
         a3.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a3.querySelector("button").style.display = "none";
         a3.querySelector("h4").style.color = "var(--white)";
         flag3 = 0;
  
          // 5
  
          image5.style.width = "calc(100vw/6)";
          image5.style.transition = " all 1s ease-in-out";
          a5.style.height = "50%";
          a5.querySelectorAll("p").forEach((val) => {
              val.style.display = "none";
  
          })
          a5.querySelector("button").style.display = "none";
          a5.querySelector("h4").style.color = "var(--white)";
          flag5 = 0;
  
          // 6
  
          image6.style.width = "calc(100vw/6)";
          image6.style.transition = " all 1s ease-in-out";
          a6.style.height = "50%";
          a6.querySelectorAll("p").forEach((val) => {
              val.style.display = "none";
  
          })
          a6.querySelector("button").style.display = "none";
          a6.querySelector("h4").style.color = "var(--white)";
          flag6 = 0;
        flag4 = 1;
    }
    else {
        image4.style.width = "calc(100vw/6)";
        image4.style.transition = " all 1s ease-in-out";
        a4.style.height = "50%";
        a4.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a4.querySelector("button").style.display = "none";
        a4.querySelector("h4").style.color = "var(--white)";
        flag4 = 0;
    }
})

let flag5 = 0;
image5.addEventListener("click", () => {
    if (flag5 == 0) {
        image5.style.width = "calc(100vw/3)";
        image5.style.transition = " all 1s ease-in-out";
        a5.style.height = "100%";
        a5.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";

            val.style.opacity = "1";

            val.style.transition = "1s ease-in-out";
        })
        a5.querySelector("button").style.display = "block"
        a5.querySelector("h4").style.color = "var(--maincolor)"

         // 1

         image1.style.width = "calc(100vw/6)";
         image1.style.transition = " all 1s ease-in-out";
         a1.style.height = "50%";
         a1.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a1.querySelector("button").style.display = "none";
         a1.querySelector("h4").style.color = "var(--white)";
         flag1 = 0;
 
          // 2
 
          image2.style.width = "calc(100vw/6)";
          image2.style.transition = " all 1s ease-in-out";
          a2.style.height = "50%";
          a2.querySelectorAll("p").forEach((val) => {
              val.style.display = "none";
  
          })
          a2.querySelector("button").style.display = "none";
          a2.querySelector("h4").style.color = "var(--white)";
          flag2 =0
 
         //  3
 
         image3.style.width = "calc(100vw/6)";
         image3.style.transition = " all 1s ease-in-out";
         a3.style.height = "50%";
         a3.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a3.querySelector("button").style.display = "none";
         a3.querySelector("h4").style.color = "var(--white)";
         flag3 = 0;
  
          // 4
  
          image4.style.width = "calc(100vw/6)";
          image4.style.transition = " all 1s ease-in-out";
          a4.style.height = "50%";
          a4.querySelectorAll("p").forEach((val) => {
              val.style.display = "none";
  
          })
          a4.querySelector("button").style.display = "none";
          a4.querySelector("h4").style.color = "var(--white)";
          flag4 = 0;
  
          // 6
  
          image6.style.width = "calc(100vw/6)";
          image6.style.transition = " all 1s ease-in-out";
          a6.style.height = "50%";
          a6.querySelectorAll("p").forEach((val) => {
              val.style.display = "none";
  
          })
          a6.querySelector("button").style.display = "none";
          a6.querySelector("h4").style.color = "var(--white)";
          flag6 = 0;
        flag5 = 1;
    }
    else {
        image5.style.width = "calc(100vw/6)";
        image5.style.transition = " all 1s ease-in-out";
        a5.style.height = "50%";
        a5.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a5.querySelector("button").style.display = "none";
        a5.querySelector("h4").style.color = "var(--white)";
        flag5 = 0;
    }
})

let flag6 = 0;
image6.addEventListener("click", () => {
    if (flag6 == 0) {
        image6.style.width = "calc(100vw/3)";
        image6.style.transition = " all 1s ease-in-out";
        a6.style.height = "100%";
        a6.querySelectorAll("p").forEach((val) => {
            val.style.display = "block";

            val.style.opacity = "1";

            val.style.transition = "1s ease-in-out";
        })
        a6.querySelector("button").style.display = "block"
        a6.querySelector("h4").style.color = "var(--maincolor)"

         // 1

         image1.style.width = "calc(100vw/6)";
         image1.style.transition = " all 1s ease-in-out";
         a1.style.height = "50%";
         a1.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a1.querySelector("button").style.display = "none";
         a1.querySelector("h4").style.color = "var(--white)";
         flag1 = 0;
 
          // 2
 
          image2.style.width = "calc(100vw/6)";
          image2.style.transition = " all 1s ease-in-out";
          a2.style.height = "50%";
          a2.querySelectorAll("p").forEach((val) => {
              val.style.display = "none";
  
          })
          a2.querySelector("button").style.display = "none";
          a2.querySelector("h4").style.color = "var(--white)";
          flag2 =0
 
         //  3
 
         image3.style.width = "calc(100vw/6)";
         image3.style.transition = " all 1s ease-in-out";
         a3.style.height = "50%";
         a3.querySelectorAll("p").forEach((val) => {
             val.style.display = "none";
 
         })
         a3.querySelector("button").style.display = "none";
         a3.querySelector("h4").style.color = "var(--white)";
         flag3 = 0;
  
          // 4
  
          image4.style.width = "calc(100vw/6)";
          image4.style.transition = " all 1s ease-in-out";
          a4.style.height = "50%";
          a4.querySelectorAll("p").forEach((val) => {
              val.style.display = "none";
  
          })
          a4.querySelector("button").style.display = "none";
          a4.querySelector("h4").style.color = "var(--white)";
          flag4 = 0;
  
          // 5
  
          image5.style.width = "calc(100vw/6)";
          image5.style.transition = " all 1s ease-in-out";
          a5.style.height = "50%";
          a5.querySelectorAll("p").forEach((val) => {
              val.style.display = "none";
  
          })
          a5.querySelector("button").style.display = "none";
          a5.querySelector("h4").style.color = "var(--white)";
          flag5 = 0;
        flag6 = 1;
    }
    else {
        image6.style.width = "calc(100vw/6)";
        image6.style.transition = " all 1s ease-in-out";
        a6.style.height = "50%";
        a6.querySelectorAll("p").forEach((val) => {
            val.style.display = "none";

        })
        a6.querySelector("button").style.display = "none";
        a6.querySelector("h4").style.color = "var(--white)";
        flag6 = 0;
    }
})
}
}
onload = media();
onresize = media();
