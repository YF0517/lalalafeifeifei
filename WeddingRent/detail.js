let urlId = parseInt(getURL("podId"))
console.log(urlId)
console.log(rawdata)


showDetails()
function showDetails(){
  for(let product of rawdata){
    
    if(urlId == product.prodId){
      for(let img of product.productMedia){
        document.getElementById("for_img").innerHTML +=
        `
        <img class="detailimg" src="https://storage.googleapis.com/luxe_media/wwwroot/${img.url}" />
        `
      }
      document.getElementById("for_text").innerHTML += 
      `
        <p class="h4">${product.title}</p>
        <p class="h7">Starting from: ${product.price}</p>
        <p class="h7">${product.description}</p>
        <p><input type="button" onclick="location.href='./index.html';" value="Go back" /></p>
        
      `

    }
  }
}



function getURL(paramName){
  const url = window.location.search.substring(1)
  const urlParam = new URLSearchParams(url)
  return urlParam.get(paramName)
  
}
