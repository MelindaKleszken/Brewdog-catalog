import React, { Component } from "react";
import './contact.css';
class Contact extends Component {
  render() {
    return (
      <div className="contact-details">
        <h2>GOT QUESTIONS?</h2>
        <p>Please send an email to <a className="contact-a" href="mailto:melindakleszken1021@gmail.com"> the creator</a> of the page.
        </p>
      </div>
    );
  }
}
 
export default Contact;