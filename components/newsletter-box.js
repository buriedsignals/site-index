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
            <img src="../static/img/bs_newsletter.png"></img>
          </div>
          <h2>Support our visual journalism by signing up for our newsletter</h2>
          <div className="email-input-box"><span>YOUR EMAIL</span></div>
          <button className="button-black">Sign Up</button>
        </div>
      );
    }
  }
  
  module.exports = NewsletterBox;