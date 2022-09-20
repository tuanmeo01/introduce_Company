import React from "react";
import './team.css'
import img1 from '../../image/01.jpg'
import img2 from '../../image/02.jpg'
import img3 from '../../image/03.jpg'
import img4 from '../../image/04.jpg'
class Team extends React.Component {
    render() {
        return (
            <>
                <div className="team-container">
                    <div className="text">
                        <h1 className="heading">
                            Join my Team
                        </h1>
                        <p className="info-name">--------------</p>
                        <p className="info-name"> Come to us and we will make miracles</p>
                    </div>
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
                            <img className="img" src={img3}></img>
                            <h1>Jona Doe</h1>
                            <div className="info-name">
                                <p>Senior Designer</p>
                            </div>
                        </div>
                        <div class="column">
                            <img className="img" src={img4}></img>
                            <h1>Karen Doe</h1>
                            <div className="info-name">
                                <p>Business Analys</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Team;