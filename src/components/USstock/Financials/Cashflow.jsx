import React from 'react'
import { useParams } from 'react-router-dom';


function Cashflow() {
  const { symbol } = useParams(); 
  return (
    <div>
      Cash flow statement
      <p>Symbol =  {symbol}</p>
      Cash flow statement
      Cash flow statement
      Cash flow statement
      Cash flow statement
      Cash flow statement
      Cash flow statement
    </div>
  )
}

export default Cashflow
