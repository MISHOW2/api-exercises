const url = 'http://localhost:5000/api/products'

const checkOutOfStock = async ()=>{
  const response = await fetch(url);
  const data = await response.json();
  
  

  const stock = data.forEach(product=>{
    if (product.stock<0) {
     return console.log(`product is out of stock`);
    }else{
     console.log( "all products are have stock available");
     
    }
  }
  
  )

  return stock
}

checkOutOfStock()
