const React = require('react');

class NewsletterBox extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Newsletter.')
    }
  
    render() {
  
      return (
        <div className="newsletter-box">
          <div className="newsletter-logo-wrapper">
            <img src="/img/bs.svg"></img>
          </div>
          <h2>Support our visual journalism by signing up for our newsletter.</h2>
          <a href="https://buriedsignals.substack.com/" target="_blank" rel="noreferrer" className="email-input-box"><span>SIGN UP</span></a>
        </div>
      );
    }
  }
  
  module.exports = NewsletterBox;