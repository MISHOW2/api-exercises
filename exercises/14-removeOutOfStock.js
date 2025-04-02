const url = 'http://localhost:5000/api/products';

const removeOutOfStock = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');
    
    const data = await response.json();

    // Filter out products where stock is 10
    const availableProducts = data.filter(product => product.stock > 10);

    console.log(availableProducts); // Check the result
    return availableProducts;
  } catch (error) {
    console.error('Error:', error.message);
  }
};

removeOutOfStock();
