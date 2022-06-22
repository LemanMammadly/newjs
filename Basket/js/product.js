function GetProducts(){
    let product=JSON.parse(localStorage.getItem('product'))

    if(product.length===0){
        let alert_div='';
        alert_div=`
        <div class="alert alert-danger text-center" role="alert">
           Basket is empty!
        </div>
        `
        document.getElementById('list').innerHTML=alert_div;
    }else{
        let prod='';
        product.forEach(x => {
            prod+=`
            <div class="box d-flex justify-content-between align-items-center">
                <div class="col-lg-2">
                    <img src=${x.img} alt="">
                </div>
                <div class="col-lg-3">
                    <h5>Mehsulun adi: ${x.name} </h5>
                </div>
                <div class="col-lg-2">
                    <h6>Mehsulun qiymeti: ${x.price}</h6>
                </div>
                <div class="col-lg-2">
                    <span>Count: ${x.count}</span>
                </div>
                <div class="col-lg-1">
                    <button class="btn btn-danger btn-del" onclick="Delete()">Delete</button>
                </div>
            </div>
            `
        });
        document.getElementById("prodlist").innerHTML=prod;
    }
}
GetProducts();

function Clear(){
    let product=JSON.parse(localStorage.getItem('product'))
    product.length=0;
    localStorage.setItem('product',JSON.stringify(product))
    GetProducts();
    CountProduct();
}

function CountProduct(){
    let product=JSON.parse(localStorage.getItem('product'))
    document.getElementById('count').innerHTML=product.length
}
CountProduct();

function Refresh(){
    window.location.reload();
}

function Delete(){
    let deletebtn=document.querySelectorAll('.btn-del');

    for(let delbtn of deletebtn){
        delbtn.addEventListener('click',function(event){
            var btndeleted=event.target;
            btndeleted.parentElement.parentElement.remove();
        })
    }
    localStorage.setItem('product',JSON.stringify(product));
    GetProducts();
    CountProduct();
}