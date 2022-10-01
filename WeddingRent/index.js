
//printList()
createCategory()
oninit()

// addPage()
// currentPage()




function oninit(){
  const url = new URL(window.location.href)
  let cate = url.searchParams.get("category")
  let price = url.searchParams.get("price")
  let asc = url.searchParams.get("ascend")
  let desc = url.searchParams.get("descend")
  let page = url.searchParams.get("page")
  
  
  
  if(price||cate||asc||desc){
    if(price&&cate){
    changeHandle("Categories",cate)
    changeHandle("price",price)
    page? sendPage(page):sendPage(0)
    
      }
      if(price||cate){
        if(price){
          changeHandle("price",price)
          page? sendPage(page):sendPage(0)
          
        }
        if(cate){
          changeHandle("Categories",cate)
          page? sendPage(page):sendPage(0)
        }
      }
      if(asc||desc){
        asc? renderHigh():renderLow()
        
        console.log(asc)
        page? sendPage(page):sendPage(0)
      }
      
  }
  else{
    printList()
    page? sendPage(page):sendPage(0)
  }
  
}


function reset(){
  const url = new URL(window.location.href)
  url.searchParams.delete("category")
  url.searchParams.delete("price")
  url.searchParams.delete("ascend")
  url.searchParams.delete("descend")
  url.searchParams.delete("page")
  window.history.pushState({ path: url.href}, '', url.href)
  document.getElementById('Categories').value = 0
  document.getElementById('price').value = 0
  printList()
  sendPage(0)
}


function printList(){
  let optionlist = ``
  let list = []
  for (let key of rawdata) {
      if(key.productMedia[0]){
        optionlist += renderData(key)
        list.push(key)
      }
    }
    document.getElementById("divID").innerHTML = optionlist
    addPage(list)
    
  }

function renderData(data){
  let addData = 
        `
          <div class="col-12 col-sm-6 col-lg-3">
            <a  href="./detail.html?podId=${data.prodId}" id="${data.prodId}">
              <div class="img-container">
                <img class="d-block autofix" src="https://storage.googleapis.com/luxe_media/wwwroot/${data.productMedia[0].url}" />
              </div>
              <p>price:${data.price}</p>
              <p>${data.title}</p>
            </a>
          </div>
        `
        return addData
}


function createCategory(){
  let prodCate = {
    cateId:[],
    cateName:[]
  }
  
  for(let item of rawdata){
    let categoryId = ''
    if(item.productMedia[0] && item.category){
      categoryId = item.categoryId
      categoryName = item.category.categoryName
      if(!prodCate.cateId.includes(categoryId)){
        prodCate.cateId.push(categoryId)
        prodCate.cateName.push(categoryName)
      }
    }
  }
  
  let option = ''
  let allCate = 
  `
  <option value="0">All Category</option>
  `
  let list = ''
  
  for(let item in prodCate.cateId){  
    option += 
    `
    <option value="${prodCate.cateId[item]}">${prodCate.cateName[item]}</option>
    `
  }
  list = allCate + option
  
  document.getElementById("Categories").innerHTML = list
}

function changeHandle(key,value){
  
  let select = document.getElementById(key)
  select.value = value
  
  
  if(key == "Categories"){
    document.getElementById("divID").innerHTML = renderfilterdata(value)
    
  }
  
  if(key == "price"){
    document.getElementById("divID").innerHTML = renderfilterprice(value)
    
  }
}

function categoryHandle(opt){
  if(opt == "cate"){
    let select = document.getElementById("Categories")
    let value = select.options[select.selectedIndex].value
    document.getElementById("divID").innerHTML = renderfilterdata(value)
    sendPage(0)
    setUrlparam("category",value)

  }
  if(opt == "price"){
    let select = document.getElementById("price")
    let value = select.options[select.selectedIndex].value
    document.getElementById("divID").innerHTML = renderfilterprice(value)
    sendPage(0)
    setUrlparam("price",value)
    
  }
  if(opt == "high"){
    renderHigh()
    sendPage(0)
    setUrlparam("ascend",1)
  }
  if(opt == "low"){
    renderLow()
    sendPage(0)
    setUrlparam("descend",1)
  }
}

function renderfilterprice(value){
  let optionlist = ''
  let list1 = []
  let pricelist = []
  filterCate(list1)
  
  for(item of list1){
    if(item.productMedia[0] && item.category){
      if(value == 1 && item.price <= 50){
        optionlist += renderData(item)
        pricelist.push(item)
      }
      if(value == 2 && 50 < item.price && item.price<= 100){
        optionlist += renderData(item)
        pricelist.push(item)
      }
      if(value == 3 && 100 < item.price && item.price <= 200){
        optionlist += renderData(item)
        pricelist.push(item)
      }
      if(value == 4 && item.price > 200){
        optionlist += renderData(item)
        pricelist.push(item)
      }
      if(value == 0){
        optionlist += renderData(item)
        pricelist.push(item)
      }
    }
  }
  addPage(pricelist)
  return optionlist
}






//filter price/category

function filterPrice(list){ 
  let price = document.getElementById("price")
  let pricevalue = price.options[price.selectedIndex].value
  for(item of rawdata){
    if(item.productMedia[0] && item.category){
      if(pricevalue == 1 && item.price <= 50){
        list.push(item)
      }
      if(pricevalue == 2 && 50 < item.price && item.price<= 100){
        list.push(item)
      }
      if(pricevalue == 3 && 100 < item.price && item.price <= 200){
        list.push(item)
      }
      if(pricevalue == 4 && item.price > 200){
        list.push(item)
      }
      if(pricevalue == 0){
        list.push(item)
      }
    }
  }
  return list
}

function filterCate(list){
  let cate = document.getElementById("Categories")
  let catevalue = cate.options[cate.selectedIndex].value
  for(item of rawdata){
    if(item.productMedia[0] && item.category){
      if(catevalue == item.categoryId){
        list.push(item)
      }
      if(catevalue == 0){
        list.push(item)
      }
    }
    }
    return list
}




function renderfilterdata(value){
  let optionlist = ''
  let list = []
  let catelist = []
  filterPrice(list)

  for(item of list){
    if(item.productMedia[0] && item.category){
      if(value == item.categoryId){
        optionlist += renderData(item)
        catelist.push(item)
      }
      if(value == 0){
        optionlist += renderData(item)
        catelist.push(item)
      }
    }
  }
  addPage(catelist)
  
  
  return optionlist
    
}


//setUrl for filter
function setUrlparam(key,value){
  const url = new URL(window.location.href)
  if(key == "ascend" || key == "descend"){
    url.searchParams.delete("ascend")
    url.searchParams.delete("descend")
  }
  
  url.searchParams.set(key,value)
  if(value == 0){
    url.searchParams.delete(key)
  }
  window.history.pushState({ path: url.href}, '', url.href)
 
}

//price high/low to high/low
//fiter ascend
function renderHigh(){
  let pricelist = []
  pricelist = filterPrice(pricelist)
  let catelist =[]
  catelist = filterCate(catelist)
  let list = []
  for(item of catelist){
    if(pricelist.includes(item)){
      list.push(item)
    }
  }
  
  list.sort((a,b) =>{
    if(a.price > b.price) return -1;
    if(a.price < b.price) return 1;
    return 0;
  })
  addPage(list)
  let optionlist = ``
  for(item of list){
    optionlist += renderData(item)
  }
  document.getElementById("divID").innerHTML = optionlist
}

//filter descend
function renderLow(){
  let pricelist = []
  pricelist = filterPrice(pricelist)
  let catelist =[]
  catelist = filterCate(catelist)
  let list = []
  for(item of catelist){
    if(pricelist.includes(item)){
      list.push(item)
    }
  }
  
  list.sort((a,b) =>{
    if(a.price > b.price) return 1;
    if(a.price < b.price) return -1;
    return 0;
  })
  addPage(list)
  let optionlist = ``
  for(item of list){
    optionlist += renderData(item)
  }
  document.getElementById("divID").innerHTML = optionlist
}

function addPage(list){
  let pageNum = Math.ceil(list.length/10)
  // console.log(pageNum)
  let pageList = ``
  
  for(let i=0; i<pageNum; i++){
    pageList +=  `
      <li class="page-item" onclick="sendPage(${i})"><a class="page-link">${i+1}</a></li>
    `
  }
  document.getElementById("page").innerHTML = pageList
  
  
}

function sendPage(number){
  const listItems =  document.getElementById("divID").querySelectorAll('div.col-12.col-sm-6.col-lg-3');
  
  const preRange = parseInt(number)  * 10;
  let b = parseInt(number)+1
  const currRange = b * 10;
  
  listItems.forEach((item, index) => {
    item.classList.add('d-none');
    if(index >= preRange && index < currRange) {
      item.classList.remove('d-none');
    }
  })
  setUrlparam("page",number)

}







  
