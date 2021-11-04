const React = require('react');

class HeaderPages extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Header.')
    }
  
    render() {
  
      return (
        <div className="pages-header-container">
          <div className="pages-header-wrapper">
            <h1>We’re a creative studio specialised in visual essays and interactive documentaries.</h1>
          </div>
        </div>
      );
    }
  }
  
  module.exports = HeaderPages;

  // <div className="header-cta"><a href="https://buymeacoffee.com/buriedsignals" target="_blank" rel="noreferrer">BUY US COFFEE</a></div>