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
                <a href="/about">ABOUT</a>
                <a href="/studio">STUDIO</a>
            </div>
        </div>
      );
    }
  }
  
  module.exports = NavigationPages;