import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid: React.FC = () => {
  const products = [
    { title: 'Product 1', price: 19.99, image: '/path/to/image1.jpg' },
    { title: 'Product 2', price: 29.99, image: '/path/to/image2.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
