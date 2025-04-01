const url = 'http://localhost:5000/api/products'

const uppercaseProductNames = async ()=>{
  const response = await fetch(url);
  const data = await response.json();
  
  
  const upperCase = data.map((product)=>{
    return product.name.toUpperCase()
  })

  console.log(upperCase);
  
  return upperCase
}

uppercaseProductNames()
