const React = require("react");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    console.log("Initializing Header.");
  }

  render() {
    return (
      <div className="header-wrapper">
        <h1 className="typography-main-header">
        Discover the world&apos;s best visual narratives.
        </h1>
        <div className="header-socials">
          <a
            href="https://discord.gg/JSZuVpbPDJ"
            target="_blank"
            rel="noreferrer"
            className="header-social"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a
            href="https://twitter.com/buriedsignals"
            target="_blank"
            rel="noreferrer"
            className="header-social"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    );
  }
}

module.exports = Footer;

// <div className="header-cta"><a href="https://buymeacoffee.com/buriedsignals" target="_blank" rel="noreferrer">BUY US COFFEE</a></div>
