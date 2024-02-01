import { useState } from 'react';
import { Header } from "./components/Header";
import { Button } from './components/Button';
import { formatearDinero } from './helpers/index.js';

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

        <Button
          operador='-'
          fn={handleClickDecremento}
        />

        <Button
          operador='+'
          fn={handleClickIncremento}
        />
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
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{formatearDinero(cantidad)}</p>
    </div>
  )
}

export default App
