import Navbar from "./NavBar";

function Header(){




    return(

    <div className="header-container">

        <div className="banner-advert">
            <p>I'm an advert</p>
        </div>

        <div className="title-container">
            <h1 id="main-title">
                The Clothing Store
            </h1>
        </div>
        
        <Navbar/>

    </div>

    )

}

export default Header;