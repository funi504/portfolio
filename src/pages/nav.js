import './navStyle.css'
import logo from '../images/logo.jpg'

export function nav(){

    return (

        <div className= "container" >
            <div className= "nav">
                <img src={logo} alt="Logo" />
                <div className="nav-brand">FUNI_ERNEST</div>
                <div className="nav-ul">
                    <ul>HOME</ul>
                    <ul>ABOUT</ul>
                    <ul>PROJECTS</ul>
                    <ul>CONTACT</ul>
                </div>
            </div>
        
        </div>
        
        )
}

export default nav