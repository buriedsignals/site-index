const React = require('react');
import Link from 'next/link'

class Navigation extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        logoPath: props.navLogo || '../static/img/nav-logo.png'
      }
      console.log('Initializing Nav.');
    }
    
    // handleLogoPath() {
    //   if (this.props.)
    // }
    render() {
      const path = this.state.logoPath;
      return (
        <div className="navbar-wrapper">
            <Link href="/" className="navbar-logo" passHref>
                <a><img src={path}></img></a>
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