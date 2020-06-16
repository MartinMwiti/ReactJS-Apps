import React from 'react'

function NavBar() {
    return ( 

        <nav className="navbar navbar-expand-lg navbar transparent">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <a className="navbar-brand" href="/#">E-commerce Shopping Cart</a>

                <div className="collapse navbar-collapse navbar_search" id="navbarTogglerDemo03">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>   
    )
}

export default NavBar;