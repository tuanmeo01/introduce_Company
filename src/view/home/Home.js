import React from "react";
import './Home.css'
import '../../image/logo.css'
import logo from '../../image/anh1.png'
class Home extends React.Component {
    render() {
        return (
            <>
                <div className="app-header">
                    <img src={logo} className="app-logo" alt="logo"/>
                       <span className="name-logo">VIETDEFI</span>
                </div>
               
            </>
        )
    }
}
export default Home;