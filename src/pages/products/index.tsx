import React from 'react';
import { MyCard } from '@/components/card/Card';
import { products } from '@/constant/products';

export const Productos = () => {
  const handleEdit = (id: string) => {
    console.log('Editar producto:', id);
    // Aquí pones tu lógica para editar
  };

  const handleDelete = (id: string) => {
    console.log('Eliminar producto:', id);
    // Aquí pones tu lógica para eliminar
  };

  

  return (
    <div className="product-list">
      {products.map(product => (
        <MyCard
          key={product.id}
          titleCard={product.name}
          type="green" // o blanco, negro, según quieras
          label={`$${product.price.toFixed(2)}`} // ej: "20.99"
          imageUrl={product.img}
          variant="primary" // ejemplo
          size="sm" // ejemplo
          function1={() => handleEdit(product.id)}   // botón Editar
          function2={() => handleDelete(product.id)} // botón Eliminar
        />
      ))}
    </div>
  );
};


export default Productos;