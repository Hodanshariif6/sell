// const footer = document.querySelector("#ii")
// const footer2 = document.querySelector("#ii1")
// const btn = document.querySelector("#ii2")
// const count = document.querySelector("#coun")
// let value =count
// let calcult = 600.72;
// let calcult1 = 1201.44*2;
// // let calcult = 600.72*2;
// // let calcult = 600.72*2;
// // let calcult = 600.72*2;
// // let calcult = 600.72*2;
   
// // let bmiRounded = calcult.toFixed(1); 
// let startValue =1;

//  btn.addEventListener("click", () => {
//      calcult **
//      count.innerHTML = calcult
//     })

// btn.addEventListener("click", () => {
//      startValue ++
//      footer2.innerHTML = startValue
// //    if(startValue >1){
// //    count.innerHTML =calcult

// //    } else {
// //      count.innerHTML =calcult1
// //    }

// })
// footer.addEventListener("click", () => {
//      if(startValue > 0){
//         startValue --
//      footer2.innerHTML = startValue
//      }
// }) 





const btn1=document.querySelector("#ii2")
const text=document.querySelector("#text")
const btn2=document.querySelector("#ii")

const span1=document.querySelector("#span1")

let x=0;
let y=600.72;
let d='$'


btn1.addEventListener("click",()=>{
    x++;
    text.innerHTML=x
    span1.innerHTML=d+y*x
})

btn2.addEventListener("click",()=>{
    if(x>1){
    x--;
    text.innerHTML=x
    span1.innerHTML=d+y*x
    }
    else{
    text.innerHTML=1
    span1.innerHTML=d+y*x


    }
})

