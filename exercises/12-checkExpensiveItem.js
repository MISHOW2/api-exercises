const url = 'http://localhost:5000/api/products';

const checkExpensiveItem = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');
    
    const data = await response.json();
    const checkPrice = data.filter(product=>{
      if(product.price>5000) {
        return console.log(product);
      }else{
        console.log('no product is above R 5000');
        
      }
      
    })

return checkPrice
    
    
  } catch (error) {
    console.error('Error:', error.message);
  }
};

checkExpensiveItem();
