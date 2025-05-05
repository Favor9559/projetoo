function toggleMode() {
   const html = document.documentElement
   html.classList.toggle("light")
 
//pegar a tag img
const img =document.querySelector("#profile img")

//substituir a imagem
if(html.classList.contains('light')) {
// se tiver light mode, adicionnar a imagem light
img.setAttribute("src", "./assets/avatar-light.png")
   } else {
   // ser tiver sem light mode, manter a imagem normal
  img.setAttribute("src",  "./assets/avatar.png")  
   }
  

}


