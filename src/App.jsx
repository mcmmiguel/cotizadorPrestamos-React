import { useState, useEffect } from 'react';
import { Header } from "./components/Header";
import { Button } from './components/Button';
import { calcularTotalPagar, formatearDinero } from './helpers/index.js';

const minCantidad = 0;
const maxCantidad = 20000;
const stepCantidad = 100;

function App() {

  const [cantidad, setCantidad] = useState(10000);
  const [meses, setMeses] = useState(6);
  const [total, setTotal] = useState(0);
  const [pago, setPago] = useState(0);

  useEffect(() => {
    const cantidadTotalPagar = calcularTotalPagar(cantidad, meses);
    setTotal(cantidadTotalPagar);
  }, [cantidad, meses])

  useEffect(() => {
    // Calcular el pago mensual
    setPago(total / meses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

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

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Elige un <span className='text-indigo-600'>plazo</span> a pagar
      </h2>

      <select
        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
        value={meses}
        onChange={(e) => setMeses(+e.target.value)}
      >
        <option value="6">6 meses</option>
        <option value="12">12 meses</option>
        <option value="24">24 meses</option>
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          Resumen <span className='text-indigo-600'>de pagos</span>
        </h2>

        <p className='text-xl text-gray-500 text-center font-bold'>{meses} Meses</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(total)} Total a pagar</p>
        <p className='text-xl text-gray-500 text-center font-bold'>{formatearDinero(pago)} Mensuales</p>
      </div>

    </div>
  )
}

export default App
