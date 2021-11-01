const React = require('react');

class Navigation extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Nav.')
    }
  
    render() {
  
      return (
        <div className="navbar-wrapper">
            <div href="/" className="navbar-logo">
                <img src="../static/img/nav-logo.png"></img>
            </div>
            <div className="navbar-links">
                <a href="/about">ABOUT</a>
                <a href="/studio">STUDIO</a>
            </div>
        </div>
      );
    }
  }
  
  module.exports = Navigation;