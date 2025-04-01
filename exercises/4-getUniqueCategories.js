const url = 'http://localhost:5000/api/products';

// Fetch unique product categories
const getUniqueCategories = async () => {
  const response = await fetch(url);
  const data = await response.json();

  // Extract only category names
  const categories = [...new Set(data.map(product => product.category))];

  console.log(categories); // Output unique categories
  return categories;
};

getUniqueCategories();
