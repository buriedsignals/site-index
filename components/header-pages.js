const React = require('react');

class HeaderPages extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing Header.')
    }
  
    render() {

      const title = this.props.title;
  
      return (
        <div className="pages-header-container">
          <div className="pages-header-wrapper">
            <h1>{title}</h1>
          </div>
        </div>
      );
    }
  }
  
  module.exports = HeaderPages;

  // <div className="header-cta"><a href="https://buymeacoffee.com/buriedsignals" target="_blank" rel="noreferrer">BUY US COFFEE</a></div>