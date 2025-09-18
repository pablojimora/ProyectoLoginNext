import { useState } from "react";
import Image from 'next/image';

export default function App() {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state); // ahora alterna entre mostrar y ocultar
  };

  interface Products {
    name: string;
    price: number;
    description: string;
    amount: number;
    isActive: boolean;
    img?: string;
  }

  const products: Products[] = [
    { name: "moto", price: 3000, description: "yamaha mt-09", amount: 10, isActive: true, img: "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/Mt09_2024_azul.jpg" },
    { name: "moto2", price: 2500, description: "yamaha mt-07", amount: 8, isActive: true },
    { name: "moto3", price: 2000, description: "yamaha mt-03", amount: 5, isActive: false },
    { name: "moto4", price: 1500, description: "yamaha mt-01", amount: 3, isActive: false },
    { name: "moto5", price: 1000, description: "yamaha mt-02", amount: 7, isActive: false },
  ]
  return (
    <div>
      <div>Hola mundo</div>
      <div>Hola mundo 2</div>
      <div>Estado: {state ? "Activo" : "Inactivo"}</div>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {state ? "Ocultar productos" : "Mostrar productos"}
      </button>

      {/* Mostrar productos solo si state = true, ese && es un entonces */}
      {state && (
        <>
          <h2>Lista de productos</h2>
          <ul>
            {products.map((product) => (
              <li key={product.name}>
                <div><strong> Nombre de la moto es: {product.description}</strong></div>
                <div>El precio es ${product.price} </div>
                <div>{product.name} </div>
                <div>Cantidad: {product.amount} </div>
                <div>¿El producto está activo? {product.isActive ? "Si" : "No"} </div>
                {product.img && (<Image
                  src={product.img}// Ruta de la imagen
                  alt= {product.name} // Texto alternativo
                  width={500} // Ancho de la imagen
                  height={300} // Alto de la imagen
                />)}
                <hr />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}