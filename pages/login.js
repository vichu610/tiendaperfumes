
import React from 'react'
import Head from 'next/head';
import Link from 'next/link';


const login=()=> {
    return (
        <>
        <Head>
       
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&display=swap" rel="stylesheet"></link>

        </Head>
        <div className='container contenedor2'>
        
        <form >
        <img src='/static/imagenes/registro.jpg'></img>

  <div className="form-group">
  
    <label htmlFor="exampleInputEmail1">Numero de Empleado</label> 
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Captura Numero Empleado"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Acceso</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Numero Acceso"/>
  </div>
  <Link href='/'>
  <button type="submit" className="btn btn-primary">Entrar</button> 
  </Link>

  <Link href='/registro'><a><button  type="submit" className="btn btn-primary" >Registro</button> 
  </a></Link>
</form>
</div>
            
        </>
    )
}


export default login;