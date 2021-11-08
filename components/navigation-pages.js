const React = require('react');
import Link from 'next/link'

class NavigationPages extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Nav-pages.')
    }
    
    render() {
  
      return (
        <div className="navbar-wrapper-pages">
            <Link href="/" className="navbar-logo-pages" passHref>
                <a><img src="../static/img/nav-logo-black.png"></img></a>
            </Link>
            <div className="navbar-links-pages">
                <Link href="/about">ABOUT</Link>
                <Link href="/studio">STUDIO</Link>
            </div>
        </div>
      );
    }
  }
  
  module.exports = NavigationPages;