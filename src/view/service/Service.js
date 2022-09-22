import React from "react";
import img1 from '../../image/code.png'
import img2 from '../../image/css.png'
import img3 from '../../image/customize.png'
import img4 from '../../image/img-04.png'
import img5 from '../../image/responsive.png'
import img6 from '../../image/task.png'
import './service.css';
class Service extends React.Component {
    render() {
        return (
            <>
                 <div className="text-feature">
                        <p className="small-text-feature">FEATURES WE'RE PROVIDED</p>
                    <h1>We do all Creative Features</h1>
                    <p className="tittle-border"></p>
                        <p className='small-text-feature'>We are used following in our landing page.</p>
                    </div>
                <div className="team-container">
                   
                    <div class="row">
                        <div class="column">
                            <img className="img-feature" src={img1}></img>
                            <h1>Built with Bootstrap</h1>
                            <p className="title-border"></p>
                            <div className="info-name">
                                <p>Styza has the pure Bootstrap 5.1.3 framework crafted, clean, smart & creative design.</p>
                            </div>
                        </div>
                        <div class="column">
                            <img className="img-feature" src={img2}></img>
                            <h1>Easy to customize</h1>
                            <p className="title-border"></p>
                            <div className="info-name">
                                <p>All the components are reusable and easy to customize it as needs.</p>
                            </div>
                        </div>
                        <div class="column">
                            <img className="img-feature" src={img3}></img>
                            <h1>Fully Responsive</h1>
                            <p className="title-border"></p>
                            <div className="info-name">
                                <p>Styza is fully responsive and comes with Bootstrap Framework</p>
                            </div>
                        </div>
                        <div class="column">
                            <img className="img-feature" src={img4}></img>
                            <h1>SASS Support</h1>
                            <p className="title-border"></p>
                            <div className="info-name">
                                <p>Built with Sass following a completely modular approach. Easy to understand, light weight and extendible.</p>
                            </div>
                        </div>
                        <div class="column">
                            <img className="img-featuremg" src={img5}></img>
                            <h1>Clean Code</h1>
                            <p className="title-border"></p>
                            <div className="info-name">
                                <p>Clean & well commented codes structured and easy to understand</p>
                            </div>
                        </div>
                        <div class="column">
                            <img className="img-feature" src={img6}></img>
                            <h1>Documentation</h1>
                            <p className="title-border"></p>
                            <div className="info-name">
                                <p>A nice documentation to help you get started fast</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Service;