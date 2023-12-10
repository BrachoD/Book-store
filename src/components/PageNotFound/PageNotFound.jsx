import React from 'react'
import notFound from '../../assets/pagenotfound.jpg'
import './PageNotFound.css'


const PageNotFound = () => {
  return (
    <div><img className='page-not-found-img' src={notFound} /></div>
  )
}

export default PageNotFound