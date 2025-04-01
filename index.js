const url = 'http://localhost:5000/api/products'

const fetchFirstTwoProducts = async ()=>{
  const response = await fetch(url);
  const data = await response.json();
  
  const currentIndex = 0;
  const [first,second] = data
  console.log(first,second);
  const firstTwo = data.splice(currentIndex,2)
  
  
  console.log(firstTwo);
  
  return firstTwo
}

fetchFirstTwoProducts()
