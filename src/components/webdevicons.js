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

const WebDevIcons = () => (
  <>
    <div className="icons-row-container">
      <ul className="icons-list">
        <li className="li-icon">
          <img className="web-icons" src={Html} alt="html-img" />
        </li>
        <li className="li-icon">
          <img className="web-icons" src={Css} alt="css-img" />
        </li>
        <li className="li-icon">
          <img className="web-icons" src={Js} alt="js-img" />
        </li>
        <li className="li-icon">
          <img className="web-icons" src={Atom} alt="atom-img" />
        </li>
        <li className="li-icon">
          <img className="web-icons" src={Bootstrap} alt="bootstrap-img" />
        </li>
        <li className="li-icon">
          <img className="web-icons" src={WordPress} alt="wordpress-img" />
        </li>
        <li className="li-icon">
          <img className="web-icons" src={GitHub} alt="github-img" />
        </li>
        <li className="li-icon">
          <img className="web-icons" src={Node} alt="node-img" />
        </li>
        <li className="li-icon">
          <img className="web-icons" src={Vite} alt="node-img" />
        </li>
      </ul>
    </div>
  </>
);

export default WebDevIcons;
