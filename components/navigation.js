const React = require('react');
import Link from 'next/link'

class Navigation extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Nav.')
    }
  
    render() {
  
      return (
        <div className="navbar-wrapper">
            <Link href="/" className="navbar-logo" passHref>
                <a><img src="../static/img/nav-logo.png"></img></a>
            </Link>
            <div className="navbar-links">
                <a href="/about">ABOUT</a>
                <a href="/studio">STUDIO</a>
            </div>
        </div>
      );
    }
  }
  
  module.exports = Navigation;