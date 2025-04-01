const url = 'http://localhost:5000/api/products';

const findMostExpensive = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch products');

    const data = await response.json();
    if (data.length === 0) throw new Error('No products found');

    // Find the most expensive product
    const mostExpensive = data.sort((a, b) => b.price - a.price)[0];

    console.log(mostExpensive);
    return mostExpensive;
  } catch (error) {
    console.error('Error:', error.message);
  }
};

findMostExpensive();
