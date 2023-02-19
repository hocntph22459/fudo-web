const ListProduct = [
    {
        id: 1,
        name:"Big and Juicy Wagyu Beef Cheeseburger",
        price:30,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./src/image/index/image 26.jpg",
        category:1
    },
    {
        id: 2,
        name:"Fresh Lime Roasted Salmon",
        price:10,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./src/image/index/image 26.png",
        category:1
    },
    {
        id: 3,
        name:"The Best Easy One Pot Chicken and Rice",
        price:20,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./src/image/index/image 26 (1).jpg",
        category: 3
    },
    {
        id: 4,
        name:"Fresh and Healthy Mixed Mayonnaise ",
        price:50,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./src/image/index/image 26 (2).jpg",
        category: 4
    },
    {
        id: 5,
        name:"The Creamiest Creamy Chicken",
        price:60,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./src/image/index/image 26 (3).jpg",
        category: 5
    },
    {
        id: 6,
        name:"Fruity Pancake with Orange & Blueberry",
        price:15,
        desc:"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image:"./src/image/index/image 26 (4).jpg",
        category: 6
    }
]
const ListCategory = [
    {
        id:1,
        name:"breakfast",
        image:"./src/image/index/image 25.png"
    },
    {
        id:2,
        name:"vegan",
        image:"./src/image/index/image 20.png"
    },
    {
        id:3,
        name:"meat",
        image:"./src/image/index/image 21.png"
    },
    {
        id:4,
        name:"dessert",
        image:"./src/image/index/image 22.png"
    },
    {
        id:5,
        name:"lunch",
        image:"./src/image/index/image 23.png"
    },
    {
        id:6,
        name:"chocolate",
        image:"./src/image/index/image 24.png"
    }
]
function showproducts(data){
    const category = document.querySelector(".category");
    if(category){
        category.innerHTML = "";
        for(let item of data){
            category.innerHTML += `
            <div class="popular__item">
            <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
            <h3><a href="./detail.html?id=${item.id}">${item.name}</a></h3>
            <p>
            <img src="./src/image/index/Group 831.png" alt="">
            <img src="./src/image/index/Group 832.png" alt="">
            </p>
            </div>
            `
         }
     }
 }
 
showproducts(ListProduct);




function showcate(data){
    const cate = document.querySelector(".cate");
    if(cate){
        for(let item of data){
            cate.innerHTML += `
            <div class="cate-item">
            <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
            <a href="./detail.html?id=${item.id}"><p>${item.name}</p></a>
            </div>
            `
        }
    }
}
  
showcate(ListCategory);



const filterSelect = document.querySelector("#filter-select")
function filterProduct(){
    const under30 = ListProduct.filter(function(product){
        return product.price < 30
    })
    if(filterSelect.value == 'under30'){
        showproducts(under30)
    }
    const over30 = ListProduct.filter(function(product){
        return product.price > 30
    })
    if(filterSelect.value == 'over30'){
        showproducts(over30)
    }
    const all = ListProduct.filter(function(product){
        return product.price == under30,over30
    })
    if(filterSelect.value == 'all'){
        showproducts(all)
    }
}
if(filterSelect){
    filterSelect.addEventListener("change",filterProduct)
}






// form inndex
const ten = document.getElementById("ten");
const subject = document.getElementById("subject");
const email = document.getElementById("email");
const enquiry = document.getElementById("enquiry");
const messages = document.getElementById("messages");
function contact(){
    if(ten.value == 0 || subject.value == 0 || email.value == 0 || enquiry.checked == 0|| messages.value == 0){
        alert("phải nhập tất cả các trường");
        ten.style.background = "yellow";
        subject.style.background = "yellow";
        email.style.background = "yellow";
        enquiry.style.background = "yellow";
        messages.style.background = "yellow";
        return false;
    }

}





function detailProduct(){
    const prdId = new URLSearchParams(window.location.search).get('id');
    if(prdId){
        const deltai = ListProduct.find(function(item){
            return item.id == prdId
        })
        
        const detailProductDiv = document.querySelector(".chesseburger");
        detailProductDiv.innerHTML = `
        <div class="chesseburger-text">
        <h1>${deltai.name}</h1>
        <h5>$ ${deltai.price}</h5>
        <p>${deltai.desc}</p>
        <input type="text" placeholder="Quantity">
        <button>Add To Cart</button>
    </div>
    <div class="chesseburger-img">
        <img src="${deltai.image}" alt="">
    </div>
        `
    }
    
}
detailProduct();



function listCategory(){
    const cateList = document.querySelector('#cate-list')
    for(let item of ListCategory){
        cateList.innerHTML += `
            <li><a href="./product.html?cateId=${item.id}">${item.name}</a></li>
        `
    }
}
listCategory()

function listproductpage(data){
    const listproductpage = document.querySelector(".main-item")
    listproductpage.innerHTML = "";
    for(let item of data){
        listproductpage.innerHTML += `
        <div class="popular__item">
        <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
        <h3><a href="./detail.html?id=${item.id}">${item.name}</a></h3>
        <p>
        <img src="./src/image/index/Group 831.png" alt="">
        <img src="./src/image/index/Group 832.png" alt="">
        </p>
        </div>
        `
    }
}
listproductpage(ListProduct)


function reRender(){
    const cateId = new URLSearchParams(window.location.search).get('cateId')
    const productByCategory = ListProduct.filter(function(item){
        return item.category == cateId
    })   
    if(cateId){
        listproductpage(productByCategory)
    }else{
        listproductpage(ListProduct)
    }
    
}
reRender()