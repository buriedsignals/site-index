const React = require('react');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

class ContactBox extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing contact-box.')
    }
  
    render() {
  
      return (
        <div className="contact-box-container">
            <div className="contact-box-header"><h2>Interested in working with us? Get in touch!</h2></div>
            <div className="contact-box-socials">
            <a href="https://discord.gg/XA6mqnyk" target="_blank" rel="noreferrer" className="footer-social"><FontAwesomeIcon icon={faDiscord} /></a>
            <a href="https://twitter.com/buriedsignals" target="_blank" rel="noreferrer" className="footer-social"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com/buriedsignals" target="_blank" rel="noreferrer" className="footer-social"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="mailto:tom@buriedsignals.com" target="_blank" rel="noreferrer" className="footer-social"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </div>
      );
    }
  }
  
  module.exports = ContactBox;