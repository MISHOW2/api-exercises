const url = 'http://localhost:5000/api/products';

const calculateTotalStock = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');
    
    const data = await response.json(); // Fix: Await the response JSON

    const totalStock = data.reduce((acc, product) => acc + product.stock, 0); // Fix: Correct reduce logic

    console.log(totalStock);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

calculateTotalStock();
