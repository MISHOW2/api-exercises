const url = 'http://localhost:5000/api/products'

//  Fetch only product names
const fetchProductNames = async ()=>{
  const response = await fetch(url);
  const data = await response.json();
  
  const names = data.forEach(product=>{
   console.log(product.name);
  })
   
  return names

}

fetchProductNames()