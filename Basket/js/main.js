if(localStorage.getItem('product')===null){
    localStorage.setItem('product',JSON.stringify([]))
}  

let buttons=document.querySelectorAll(".btn_add")
 
for(let btn of buttons){
   btn.addEventListener("click",function(e){
       e.preventDefault();
       let product=JSON.parse(localStorage.getItem('product'))
       let prod_id=e.target.parentElement.parentElement.id;
       let prod_img=e.target.parentElement.previousElementSibling.src;
       let prod_name=e.target.previousElementSibling.previousElementSibling.innerHTML;
       let prod_price=e.target.previousElementSibling.innerHTML; 
       console.log(prod_id);
       console.log(prod_img);
       console.log(prod_name);
       console.log(prod_price);

       let existProd=product.find(x=>x.id==prod_id);
       if(existProd===undefined){
            product.push({
                id:prod_id,
                img:prod_img,
                name:prod_name,
                price:prod_price,
                count:1
            })
        }
        else{
            existProd.count+=1;
        }
       localStorage.setItem('product',JSON.stringify(product));
       CountProduct();
   }) 
}


function CountProduct(){
    let product=JSON.parse(localStorage.getItem('product'))
    document.getElementById('count').innerHTML=product.length
}
CountProduct();