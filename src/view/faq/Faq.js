import React from "react";
import './faq.css'
class Faq extends React.Component {
    render() {
        return (
            <>
                <div className="contact-sum">
                    <div className="contact-info">
                        <h1>Contact info</h1>
                        <p className="contact-info2">Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
                    </div>

                    <div className="contain-contact">
                        <h1 className="h1>">test</h1>
                        <div className="contact">
                            <input type='text' placeholder="Name..." />
                        </div>
                        <div className="contact">
                            <input type='text' placeholder="Email..." />
                        </div>
                        <div className="contact">
                            <label for="subject"></label>
                            <textarea id="subject" name="subject" placeholder="Message..." />
                        </div>
                        <div className="button-contact">
                            <button className="button-contact" type="button">Send</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Faq;