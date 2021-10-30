const React = require('react');
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Header.')
    }
  
    render() {
  
      return (
        <div className="header-wrapper">
          <h1>A repository of visual experiments in journalism.</h1>
          <div className="header-socials">
            <a href="https://discord.gg/XA6mqnyk" target="_blank" rel="noreferrer" className="header-social"><FontAwesomeIcon icon={faDiscord} /></a>
            <a href="https://twitter.com/buriedsignals" target="_blank" rel="noreferrer" className="header-social"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://instagram.com/buriedsignals" target="_blank" rel="noreferrer" className="header-social"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="mailto:tom@buriedsignals.com" target="_blank" rel="noreferrer" className="header-social"><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </div>
      );
    }
  }
  
  module.exports = Footer;

  // <div className="header-cta"><a href="https://buymeacoffee.com/buriedsignals" target="_blank" rel="noreferrer">BUY US COFFEE</a></div>