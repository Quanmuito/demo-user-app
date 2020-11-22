import React from 'react';
import './styleLayouts.scss';
import { Navbar } from 'react-bootstrap';

export function Header() {
    return (
        <header>
            <Navbar className="justify-content-center" bg="dark" variant="dark">
                <Navbar.Brand  href="/">
                    Demo Users
                </Navbar.Brand>
            </Navbar>
        </header>
    )
}

export function Footer() {
    return (
        <footer>
            <div className="d-flex text">2020@QuanMuiTo</div>
        </footer>
    )
}
