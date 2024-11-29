import React from 'react';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => (
  <div className="rounded-md border p-4 shadow-sm">
    <img src={image} alt={title} className="mb-2 h-40 w-full rounded-md object-cover" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-600">${price.toFixed(2)}</p>
  </div>
);

export default ProductCard;
