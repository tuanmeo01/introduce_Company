import React from "react";
import './Home.css'
import '../../image/logo.css'
import logo from '../../image/anh1.png'
import  img from '../../image/architect.jpg'
class Home extends React.Component {
    render() {
        return (
            <>
                {/* <div className="app-header">
                    <img src={logo} className="app-logo" alt="logo"/>
                       <span className="name-logo">VIETDEFI</span>
                </div> */}
                <header className="contain-header">
                    <img className="img-home" src={img} alt="Architechture"></img>
                    <div class="w3-display-middle w3-margin-top w3-center">
                        <h1 class="w3-xxlarge w3-text-white">
                            <span class="w3-padding w3-black w3-opacity-min">
                                <b>VIETDEFI</b>
                            </span>
                            <span class="w3-hide-small w3-text-light-grey">
                                Solution Tech
                            </span>
                        </h1>
                    </div>
                </header>
            </>
        )
    }
}
export default Home;