const url = 'http://localhost:5000/api/products'

const checkOutOfStock = async ()=>{
  const response = await fetch(url);
  const data = await response.json();
  
  
  const sortPrice = data.sort()


  return sortPrice
}

checkOutOfStock()
