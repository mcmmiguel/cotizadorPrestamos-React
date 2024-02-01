import { useState } from 'react';
import { Header } from "./components/Header";

const minCantidad = 0;
const maxCantidad = 20000;
const stepCantidad = 100;

function App() {

  const [cantidad, setCantidad] = useState(10000);

  const handleChange = (e) => {
    setCantidad(Number(e.target.value));
  }

  const handleClickDecremento = () => {
    const valor = cantidad - stepCantidad;
    if (cantidad <= minCantidad) return;
    setCantidad(valor);
  }

  const handleClickIncremento = () => {
    const valor = cantidad + stepCantidad;
    if (cantidad >= maxCantidad) return;
    setCantidad(valor);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">

      <Header />

      <div className='flex justify-between my-5'>
        <button
          type='button'
          className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
          onClick={handleClickDecremento}
        >
          -
        </button>

        <button
          type='button'
          className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
          onClick={handleClickIncremento}
        >
          +
        </button>
      </div>

      <input
        type="range"
        min={minCantidad}
        max={maxCantidad}
        step={stepCantidad}
        value={cantidad}
        onChange={handleChange}
        className="w-full h-6 bg-gray-600 accent-lime-500 hover:accent-lime-600"
      />
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>${cantidad}</p>
    </div>
  )
}

export default App
