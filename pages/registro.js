import React from 'react'
import Head from 'next/head';
import Link from 'next/link';


const Registro=()=> {
    return (
        <>
        <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&display=swap" rel="stylesheet"></link>

        </Head>

        <div className='container contenedor'>

<form >
<h1>Registro Empleados</h1>
        <div className="col sm-4">
  <span className="input-group-text">Nombre de empleado</span>
  <input type="text"  className="form-control"/>
  </div>
  <div className='row'>

  <div className="col sm">
  <span className="input-group-text">Numero de empleado</span>
  <input type="text"  className="form-control"/>
  </div>
  <div className="col sm">
  <span className="input-group-text">Acceso</span>
  <input type="password"  className="form-control"/>
</div>
<div>
<Link href='/login'>
<button className="btn btn-primary" type="submit" value="Guardar">Guardar</button>
</Link>
</div>
</div>
</form>
</div>



        </>
    )
}

export default Registro;