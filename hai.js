// console.log("hello world")
// let a=(x)=>10+x
// console.log(a(33))

var x=document.querySelector('input')

var y=document.querySelector('button')
var parent=document.querySelector('div.container')
let z=async(a)=>{
    // console.log(`hai from async=${a}`)
    var b=await fetch(`https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${a}`)
    // console.log(b)
    var d=await b.json()

    const receipe=d.hits
    console.log(receipe)
    receipe.forEach(element => {
        console.log(element.recipe.label)
  
      let template=`

      <div class="header" style="background: url(${element.recipe.image}) no-repeat center;"></div>
   
      <h1 class="name">${element.recipe.label}</h1>
   
      <div class="border"></div>
   
      <p class="info">${element.recipe.source}</p>
   
      <div class="grey-border"></div>
   
      <a href="${element.recipe.url}" class="button">Read More</a>
    
   `

let newcard=document.createElement('div')
newcard.setAttribute('class','wrapper')
newcard.innerHTML=template
parent.appendChild(newcard)
    });






}
// let aa=()=>{
//     console.log("hello haghsghworld")
// }

y.addEventListener('click',()=>{
    // console.log(e.target.value)
    // parent.innerHTML="hello world"
    z(x.value)})