const url = 'http://localhost:5000/api/products'

//  Fetch only product catergory
const getUniqueCategories = async ()=>{
  const response = await fetch(url);
  const data = await response.json();
  
  const categories = data.filter(product=>{
    if (product.category === 'shoe') {
      return product.name
    }
  })

  console.log(categories);
  
  return categories
}

getUniqueCategories()