const React = require('react');

class Clients extends React.Component {

    constructor(props) {
      super(props);
      console.log('Initializing clients.')
    }
    // <img src="../static/logos/hbo.png" />
    render() {
      return (
        <div className="clients-wrapper">
          <h3>THEY WORKED WITH US</h3>
          <div className="clients-row">
            <img src="../static/logos/redbull.png" />
            <img src="../static/logos/on.png" />
            <img src="../static/logos/ibm.png" />
            <img src="../static/logos/riot.png" />
          </div>
          <div className="clients-row">
            <img src="../static/logos/seeds.png" />
            <img src="../static/logos/undp.png" />
            <img src="../static/logos/qatar.png" />
          </div>
        </div>
      );
    }
  }
  
  module.exports = Clients;