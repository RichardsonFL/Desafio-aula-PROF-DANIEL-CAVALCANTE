import logo from "../images/LogoHorizontal.svg"
const Header = function(){
    console.log(logo)
    return(
        <div className="header">
            <div>
                <a href="/"><img src={logo} alt="Seuguia Logo"/></a>
            </div>
            <div  className="nav-menu"></div>
        </div>
    )
}

export default Header