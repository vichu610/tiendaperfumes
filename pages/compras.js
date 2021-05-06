import React from 'react'
import Head from 'next/head';

const compras=()=> {
    return (
        <>
                    <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&display=swap" rel="stylesheet"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
        
        </Head>
        
        <div className='grid'>
           
               <div>Cantidad
               <br/>
               <label>2</label>
               </div>
               <div>Producto
               <br/>
               <label>Lacoste 100ml</label>
               </div>
               <div>Total
               <br/>
               <label >$ 5,500.00</label>
               </div>
               
               
               <a  type='submit' ><i className="fas fa-times-circle fa-3x " ></i></a>
               
        </div>

        <div className='total conteiner-fluid'> 
        
           <button className='btn btn-success btn-lg position-relative' type='submit'>Pagar</button>
           <label>Total a Pagar </label>
           <span>$ 5,000.00</span>
           </div>        
        </>
    )
}

export default compras
