import React from 'react';
import Html from '~assets/html-5.png';
import Css from '~assets/css-3.png';
import Js from '~assets/js.png';
import Atom from '~assets/atom.png';
import Bootstrap from '~assets/bootstrap.png';
import WordPress from '~assets/wordpress-logo.png';
import GitHub from '~assets/github.png';
import Node from '~assets/nodejs.png';
import Vite from '~assets/vite-logo.png';
import { UncontrolledTooltip } from 'reactstrap';

const orangeStyling = {
  backgroundColor: 'rgba(249, 115, 22, var(--tw-text-opacity))',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  padding: '10px',
};

function WebDevIcons() {
  return (
    <>
      <div className="icons-row-container">
        <ul className="icons-list">
          <li id="icon-html" className="li-icon">
            <img className="web-icons" src={Html} alt="html-img" />
          </li>
          <UncontrolledTooltip
            placement="bottom"
            target="icon-html"
            style={orangeStyling}
          >
            Html
          </UncontrolledTooltip>
          <li id="icon-css" className="li-icon">
            <img className="web-icons" src={Css} alt="css-img" />
          </li>
          <UncontrolledTooltip
            placement="bottom"
            target="icon-css"
            style={orangeStyling}
          >
            Css
          </UncontrolledTooltip>
          <li id="icon-js" className="li-icon">
            <img className="web-icons" src={Js} alt="js-img" />
          </li>
          <UncontrolledTooltip
            placement="bottom"
            target="icon-js"
            style={orangeStyling}
          >
            JS
          </UncontrolledTooltip>
          <li id="icon-react" className="li-icon">
            <img className="web-icons" src={Atom} alt="atom-img" />
          </li>
          <UncontrolledTooltip
            placement="bottom"
            target="icon-react"
            style={orangeStyling}
          >
            React
          </UncontrolledTooltip>
          <li id="icon-bootstrap" className="li-icon">
            <img className="web-icons" src={Bootstrap} alt="bootstrap-img" />
          </li>
          <UncontrolledTooltip
            placement="bottom"
            target="icon-bootstrap"
            style={orangeStyling}
          >
            Bootstrap
          </UncontrolledTooltip>
          <li id="icon-wordpress" className="li-icon">
            <img className="web-icons" src={WordPress} alt="wordpress-img" />
          </li>
          <UncontrolledTooltip
            placement="bottom"
            target="icon-wordpress"
            style={orangeStyling}
          >
            WordPress
          </UncontrolledTooltip>
          <li id="icon-github" className="li-icon">
            <img className="web-icons" src={GitHub} alt="github-img" />
          </li>
          <UncontrolledTooltip
            placement="bottom"
            target="icon-github"
            style={orangeStyling}
          >
            GitHub
          </UncontrolledTooltip>
          <li id="icon-node" className="li-icon">
            <img className="web-icons" src={Node} alt="node-img" />
          </li>
          <UncontrolledTooltip
            placement="bottom"
            target="icon-node"
            style={orangeStyling}
          >
            Node
          </UncontrolledTooltip>
          <li id="icon-vite" className="li-icon">
            <img className="web-icons" src={Vite} alt="node-img" />
          </li>
          <UncontrolledTooltip
            placement="bottom"
            target="icon-vite"
            style={orangeStyling}
          >
            Vite
          </UncontrolledTooltip>
        </ul>
      </div>
    </>
  );
}

export default WebDevIcons;
