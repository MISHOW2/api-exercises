const url = 'http://localhost:5000/api/products';

const groupProductsByCategory = async () => {
  const response = await fetch(url);
  const data = await response.json();

  // Grouping products by category
  const categories = data.reduce((acc, product) => {
    if (product.category === 'shoe' || product.category === 'shirt') {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product.name);
    }
    return acc;
  }, {});

  console.log(categories); // Output the grouped products
  return categories;
};

groupProductsByCategory();
