import React from 'react'
import Head from 'next/head';

const  navbar=()=> {
    return (
        <>
                 <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Antonio:wght@100&display=swap" rel="stylesheet"></link>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"/>


        </Head>
    

        <nav className='navbar navbar-expand-lg navbar-light  iconos'>
        <div className=' collapse navbar-collapse' id="navbarNavAltMarkup" >

            <ul className='navbar-nav'>
            <li>
            <a href='/login'><i className='fas fa-sign-in-alt fa-2x'></i></a>
            </li>
            <li>
            <a href='/registro'><i className='fas fa-user fa-2x'></i></a>
            </li>
            <li>
            <a href='/compras'><i className='fas fa-shopping-cart fa-2x'></i></a>
            </li>
            
                
            </ul>
        </div>


        </nav>
    </>
    )
}

export default navbar
