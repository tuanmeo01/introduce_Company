import React from "react";
import './Home.css'
import '../../image/logo.css'
import logo from '../../image/anh1.png'
class Home extends React.Component {
    render() {
        return (
            <>
                <div className="header_name">
                    <h>VIETDEFI</h>
                </div>
                <div className="app-header">
                    <img src={logo} className="app-logo" alt="logo"/>
                </div>
                <div className="info">
                    0836993400 - Số 16 đường Trần Quốc Vượng, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội
                </div>
            </>
        )
    }
}
export default Home;