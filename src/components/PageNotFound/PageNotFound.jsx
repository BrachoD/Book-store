import React from 'react'
import notFound from '../../assets/pagenotfound.jpg'
import './PageNotFound.css'


const PageNotFound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'><img className='page-not-found-img' src={notFound} /></div>
  )
}

export default PageNotFound