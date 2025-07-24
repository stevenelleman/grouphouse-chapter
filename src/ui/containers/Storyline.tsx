import React from 'react';

import {Homes} from "./Homes";

import Typewriter from "typewriter-effect";

export class Storyline extends React.Component<unknown> {
  render() {
    return (
      <div className="storyline-container">
        <div className="image-container">
          <div className="image-wrapper">
            <div className="storyline-intro-image">
              <div className="banner-section-transition"/>
            </div>
          </div>
          <div className="storyline-intro-image-text storyline-intro-centered" id="typewriter">
            <Typewriter
              onInit={(typewriter)=> {
                typewriter
                  .typeString("Change starts in Berkeley")
                  .pauseFor(1000)
                  .deleteChars(12)
                  .typeString(" at home.")
                  .pauseFor(1000)
                  .start();
              }}
            />
            <div className="storyline-intro-image-text-blur storyline-intro-centered"/>
          </div>
        </div>
        <div className="transition-block"></div>
        <div className="mission-container">
          <div id="mission" className="storyline-section-title">
            Mission
          </div>
          <div className="storyline-section-hook">
            For fellow travelers seeking home.
          </div>
        </div>
        <div className="transition-block"></div>
        <Homes/>
        <div className="transition-block"></div>

        <div id="community" className="storyline-section-grey">
          <div className="image-container">
            <div className="community-image-wrapper">
              <div className="community-image-triangle-right triangle-1-right"></div>
              <div className="community-image-triangle-right triangle-2-right"></div>
              <div className="community-image-triangle-right triangle-3-right"></div>
              <div className="community-image-triangle-right triangle-4-right"></div>
              <div className="community-image-triangle-right triangle-5-right"></div>
              <div className="community-image-triangle-right triangle-6-right"></div>
              <div className="community-image-triangle-right triangle-7-right"></div>
              <div className="community-image-triangle-right triangle-8-right"></div>
              <div className="community-image-triangle-right triangle-9-right"></div>
              <div className="community-image-triangle-right triangle-10-right"></div>
              <div className="community-image-triangle-right triangle-11-right"></div>
              <div className="community-image-triangle-right triangle-12-right"></div>
              <div className="community-image-triangle-right triangle-13-right"></div>
              <div className="community-image-triangle-left triangle-1-left"></div>
              <div className="community-image-triangle-left triangle-2-left"></div>
              <div className="community-image-triangle-left triangle-3-left"></div>
              <div className="community-image-triangle-left triangle-4-left"></div>
              <div className="community-image-triangle-left triangle-5-left"></div>
              <div className="community-image-triangle-left triangle-6-left"></div>
              <div className="community-image-triangle-left triangle-7-left"></div>
              <div className="community-image-triangle-left triangle-8-left"></div>
              <div className="community-image-triangle-left triangle-9-left"></div>
              <div className="community-image-triangle-left triangle-10-left"></div>
              <div className="community-image-triangle-left triangle-11-left"></div>
              <div className="community-image-triangle-left triangle-12-left"></div>
              <div className="community-image-triangle-left triangle-13-left"></div>
              <div className="community-image"></div>
            </div>
            <div className="community-centered community-image-text">
              <div className="community-section-title">
                <div>Community</div>
              </div>
              <div className="community-section-hook">The smallest steps are the bravest.</div>
            </div>
            <div className="community-centered community-image-text-blur"/>

            <div className="community-buttons-centered">
              <div className="community-buttons">
                <div className="community-button">
                  <a className="community-link" href="https://discord.gg/SejPVdUnM3">JOIN SERVER</a>
                </div>
                <div className="community-button">
                  <a className="community-link" href="https://github.com/stevenelleman/berkeley-grouphouse/issues/2">ADD HOUSE</a>
                </div>
                <div className="community-button">
                  <a className="community-link" href="https://github.com/stevenelleman/berkeley-grouphouse">WRITE CODE</a>
                </div>
                <div className="community-button">
                  <a className="community-link" href="https://github.com/stevenelleman/berkeley-grouphouse/issues/3">HOST CHAPTER</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}