import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget'
import booklogo from '../../assets/logo-books.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <Navbar className='navbar-color' data-bs-theme="dark">
            <Container>
                <Navbar.Brand ><Link to={'/'}><img className="navbar-logo" src={booklogo} /></Link></Navbar.Brand>
                <Nav>
                    <Link to={'/'}><Nav.Item className='active nav-link'>Home</Nav.Item></Link>
                    <NavDropdown active='true' title="Genre" id="navbarScrollingDropdown">
                        <Link to={`/category/Children's Fiction`}><p className='dropdown-item'>Children's Fiction</p></Link>
                        <Link to={'/category/Fantasy'}><p className='dropdown-item'>Fantasy</p></Link>
                        <Link to={'/category/Non-Fiction'}><p className='dropdown-item'>Non-Fiction</p></Link>
                        <Link to={'/category/Young adult'}><p className='dropdown-item'>Young adult</p></Link>
                        <Link to={'/category/Tragedy'}><p className='dropdown-item'>Tragedy</p></Link>
                    </NavDropdown>
                    <NavDropdown active='true' title="Author" id="navbarScrollingDropdown">
                        <Link to={'/author/Caroline Peckham & Susanne Valenti'}><p className='dropdown-item'>Caroline Peckham</p></Link>
                        <Link to={'/author/Ernesto Sabato'}><p className='dropdown-item'>Ernesto Sabato</p></Link>
                        <Link to={'/author/George R. R. Martin'}><p className='dropdown-item'>George R. R. Martin</p></Link>
                        <Link to={'/author/Rick Riordan'}><p className='dropdown-item'>Rick Riordan</p></Link>
                        <Link to={'/author/William Shakespeare'}><p className='dropdown-item'>William Shakespeare</p></Link>
                    </NavDropdown>
                </Nav>
                <Link to={'/cart'}>
                    <CartWidget />
                </Link>
            </Container>
        </Navbar>
    )
}

export default NavBar