const url = 'http://localhost:5000/api/products';

const applyDiscount = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');
    
    const data = await response.json();

    const applyDiscount = data.forEach((product)=>{
    product.price+= product.price * (0.10)

    console.log(product.price);
    
    })
    
    
  } catch (error) {
    console.error('Error:', error.message);
  }
};

applyDiscount();
