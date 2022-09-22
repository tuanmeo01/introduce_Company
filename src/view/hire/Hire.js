import React from "react";
import './hire.css'
import img1 from '../../image/home1.jpeg'
import img2 from '../../image/home2.png'
import img3 from '../../image/home3.jpg'
import img4 from '../../image/home4.png'
class Hire extends React.Component {
    render() {
        return (
            <>
                <>
                    <div className="text">
                        <h1 className="heading">
                            Our Products
                        </h1>
                        <p className="title-border"></p>
                        <p className="info-name">Solution from heart</p>
                    </div>
                    <div className="team-container">
                        <div class="row">
                            <div class="column">
                                <img className="img" src={img1}></img>
                                <h1>Jonh Doe</h1>
                                <div className="info-name">
                                    <p>Director</p>
                                </div>
                            </div>
                            <div class="column">
                                <img className="img" src={img2}></img>
                                <h1>Mike Doe</h1>
                                <div className="info-name">
                                    <p>Senior Designer</p>
                                </div>
                            </div>
                            <div class="column">
                                <img className="img" src={img1}></img>
                                <h1>Jona Doe</h1>
                                <div className="info-name">
                                    <p>Senior Designer</p>
                                </div>
                            </div>
                            <div class="column">
                                <img className="img" src={img2}></img>
                                <h1>Karen Doe</h1>
                                <div className="info-name">
                                    <p>Business Analys</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </>
        )
    }
}
export default Hire;