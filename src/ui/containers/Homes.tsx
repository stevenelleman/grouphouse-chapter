import React from 'react';

import jsonHomes from '../../data/houses.json';

const homes: IHouse[] = jsonHomes

interface IHouse {
  name: string;
  imageDirectory: number;
  description: string;
  calendarLink: string;
  housingAppLink: string;
  websiteLink: string;
  contact: string;
}
// Future attributes: public key, contact, contact by account (?)

type HouseInfo = {
  name: string;
  imageDirectory: number;
  description: string;
  calendarLink: string;
  housingAppLink: string;
  websiteLink: string;
  contact: string;
}

type HouseProps = {
  args: HouseInfo;
};

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

class Home extends React.Component<HouseProps> {
  render() {
    const {name, description, imageDirectory, contact, calendarLink, housingAppLink, websiteLink} = this.props.args;
    return <div className="house-container" id="homes">
      <div className="house-container-column-wide">
        <img className="house-banner-image" alt="" src={`images/houses/${imageDirectory}/banner.jpeg`}/>
      </div>

      <div className="house-container-column-narrow">
        <div className="house-info">
          <div className="house-title">
            {name}
          </div>
          <div className="house-description">
            {description}
          </div>
          {
            !isValidHttpUrl(websiteLink) ? <></> :
              <div className="house-description-section">
                <a href={websiteLink}>
                  <div className="house-description-button">
                    Website
                  </div>
                </a>
              </div>
          }
          {
            !isValidHttpUrl(calendarLink) ? <></> :
              <div className="house-description-section">
                <a href={calendarLink}>
                  <div className="house-description-button">
                    Calendar
                  </div>
                </a>
              </div>
          }
          {
            !isValidHttpUrl(housingAppLink) ? <></> :

              <div className="house-description-section">
                <a href={housingAppLink}>
                  <div className="house-description-button">
                    Live Here
                  </div>
                </a>
              </div>
          }
          {
            contact === "" ? <></> :
              <div className="house-description-section">
                  Reach Out
              </div>
          }
        </div>
      </div>
    </div>;
  }
}

export class Homes extends React.Component {
  render() {
    return (
      <div className="homes-container">
        {
          homes.map((house, index) => {
            return <Home key={index} args={house}/>;
          })
        }
      </div>
    );
  }
}