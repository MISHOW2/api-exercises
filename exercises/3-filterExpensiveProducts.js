const url = 'http://localhost:5000/api/products'

//  Fetch only product names
const filterExpensiveProducts = async ()=>{
  const response = await fetch(url);
  const data = await response.json();
  
  const expensiveProducts = data.filter(product=> {
    if (product.price > 2000) {
      return console.log(`${product.name} is above R2000`);
      
    }
  })

  return expensiveProducts
}

filterExpensiveProducts()