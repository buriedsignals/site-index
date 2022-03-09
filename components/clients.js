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
            <img src="../static/logos/redbull.png" alt="Logo Redbull" />
            <img src="../static/logos/on.png" alt="Logo On" />
            <img src="../static/logos/ibm.png" alt="Logo IBM" />
            <img src="../static/logos/riot.png" alt="Logo Riot" />
          </div>
          <div className="clients-row">
            <img src="../static/logos/seeds.png" alt="Logo Seeds" />
            <img src="../static/logos/undp.png" alt="Logo UNDP" />
            <img src="../static/logos/qatar.png" alt="Logo Qatar" />
          </div>
        </div>
      );
    }
  }
  
  module.exports = Clients;