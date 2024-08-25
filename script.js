let searchbox= document.querySelector("form");
let search=document.querySelector("#search");
let signUpBtn=document.querySelector(".signupbtn");
let signInBtn=document.querySelector(".signinbtn");
let nameField=document.querySelector(".namefield");  
let title=document.querySelector("h1");
let underline=document.querySelector(".underline")
let text =document.querySelector(".text")
let container=document.querySelector(".container")
let login=document.querySelector(".ri-user-3-fill")
let left=document.querySelector(".ri-arrow-drop-left-line");
let right=document.querySelector(".ri-arrow-drop-right-line")
let basket=document.querySelector(".basket")
let smartcontainer=document.querySelector(".smart-container")
let smartcontainers=document.querySelector(".smart-containers")
let leftarrow=document.querySelector("#left-arrow");
let rightarrow=document.querySelector("#right-arrow")
let left1=document.querySelector("#left1");
let right1=document.querySelector("#right1")
let boxcontainers=document.querySelector(".box-containers")
let left2=document.querySelector("#left2");
let right2=document.querySelector("#right2")
let slider=document.querySelector(".slider")
let images=document.querySelectorAll(".image")
let length=images.length;




search.addEventListener("click",()=>{
    searchbox.classList.toggle("active")
})

signInBtn.addEventListener("click",(e)=>{
e.preventDefault();
nameField.style.maxHeight = '0';
title.textContent="Sign IN"
text.textContent="Lost password?"
signUpBtn.classList.add("disable")
signInBtn.classList.remove("disable")
underline.style.transform="translateX(35px)"


})
signUpBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    nameField.style.maxHeight = '60px';
    title.textContent="Sign Up"
    signUpBtn.classList.remove("disable")
    signInBtn.classList.add("disable")
    underline.style.transform="translateX(-35px)"
    text.textContent="Password Suggestions";
    
    })
login.addEventListener("click",()=>{
    container.classList.toggle("active");
})


smartcontainer.addEventListener("wheel", (e)=>{
e.preventDefault;
smartcontainer.scrollLeft+=e.deltaY;
});

right.addEventListener("click",()=>{
    smartcontainer.style.scrollBehavior="smooth";
    smartcontainer.scrollLeft+=900;
})
left.addEventListener("click",()=>{
    smartcontainer.style.scrollBehavior="smooth";
    smartcontainer.scrollLeft-=900;
})


smartcontainers.addEventListener("wheel", (e)=>{
    e.preventDefault;
    smartcontainers.scrollLeft+=e.deltaY;
    });
    
    rightarrow.addEventListener("click",()=>{
        smartcontainers.style.scrollBehavior="smooth";
        smartcontainers.scrollLeft+=900;
    })
    leftarrow.addEventListener("click",()=>{
        smartcontainers.style.scrollBehavior="smooth";
        smartcontainers.scrollLeft-=900;
    })


    boxcontainers.addEventListener("wheel", (e)=>{
        e.preventDefault;
        boxcontainers.scrollLeft+=e.deltaY;
        });
        
        right1.addEventListener("click",()=>{
            boxcontainers.style.scrollBehavior="smooth";
            boxcontainers.scrollLeft+=900;
        })
        left1.addEventListener("click",()=>{
            boxcontainers.style.scrollBehavior="smooth";
            boxcontainers.scrollLeft-=900;
        })



        slider.addEventListener("wheel", (e)=>{
            e.preventDefault;
          slider.scrollLeft+=e.deltaY;
            });
            
            right2.addEventListener("click",()=>{
               slider.style.scrollBehavior="smooth";
               slider.scrollLeft+=900;
            })
            left2.addEventListener("click",()=>{
              slider.style.scrollBehavior="smooth";
               slider.scrollLeft-=900;
            })


 let bottom=document.querySelector(".bottom");

                for(let i=0; i<length; i++){
                    let div=document.createElement("div")
            div.className="button";
            bottom.appendChild(div);
                }
            
                let buttons=document.querySelectorAll(".button")
                buttons[0].style.backgroundColor="brown" ;
              

              let reset=()=>{
                buttons.forEach((button)=>{
                    button.style.backgroundColor="transparent"
                })
              }

                buttons.forEach((button,i)=>{
                    button.addEventListener("click",()=>{
                        slider.style.transform=`translateX(${i*900}px)`

                    })
                })

 
                let slideinterval;


                let startslide=()=>{
                    slideinterval=setInterval(()=>{
                        slider.style.scrollBehavior="smooth";
                        slider.scrollLeft+=900;
                      changecolor();

                    },2000)
                }
                startslide();

                let stopslide=()=>{
                    clearInterval(slideinterval);
                }
                slider.addEventListener("mouseover",stopslide);
                slider.addEventListener("mouseout",startslide);
                right2.addEventListener("mouseover",stopslide);
                right2.addEventListener("mouseout",startslide);
                left2.addEventListener("mouseover",stopslide);
                left2.addEventListener("mouseout",startslide);


    
