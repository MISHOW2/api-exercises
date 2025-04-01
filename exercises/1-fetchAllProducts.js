const url = 'http://localhost:5000/api/products'

const getAllProducts = async ()=>{
  const response = await fetch(url);
  const data  = await response.json();
  console.log(data);
  
  return data
}

getAllProducts()