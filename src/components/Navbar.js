import React from "react"
const Navbar = () => {
    return (
    <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
            <font size="5" color="black">Portfolio</font>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link text-capitalize" href="/"><i class="fas fa-home"></i> <span>Home</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-capitalize" href="/about"><i class="fas fa-user"></i> <span>About</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-capitalize" href="/education"><i class="fas fa-university"></i> <span>Education</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-capitalize" href="/experience"><i class="fas fa-laptop-code"></i> <span>Experience</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-capitalize" href="/projects"><i class="fas fa-code"></i><span>Projects</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-capitalize" href="/contact"><i class="far fa-address-book"></i> <span>Contact</span></a>
                    </li> 
                </ul>
            </div>
        </nav>
    </React.Fragment>
    );
}


export default Navbar;