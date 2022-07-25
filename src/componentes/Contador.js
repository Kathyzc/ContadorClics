import React from 'react'
import '../estilos/Contador.css'

export default function Contador({ numclics }) {
  return (
    <div className='contador' >
      {numclics}
    </div>
  )
}
