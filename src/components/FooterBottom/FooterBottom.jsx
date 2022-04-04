import React from "react";
import Location from "../../assets/icons/Location.svg";
import Contacts from "../../assets/icons/Contacts.svg";
import Map from "../../assets/images/Map.svg";
import LogoGRSU from "../../assets/icons/LogoGRSU.svg";
import { GrsuSkillsLogoLight } from "../GrsuSkillsLogo";
import "./index.css";

import Footer from "../../assets/images/Footer.svg";
import FooterMain from "../../assets/images/FooterMain.svg";

export const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <img className="circles" src={Footer} />
      <div className="container">
        <div className="info">
          <div className="footer-contacts">
            <div className="contact">
              <img className="icon-location" src={Location} alt="Адрес" />
              <p>Республика Беларусь, г. Гродно, 230023, ул. Ожешко, 22</p>
            </div>
            <div className="contact">
              <img className="icon-contacts" src={Contacts} alt="Контакты" />
              <p>
                Телефон: <a href="tel:+375152731900">+375 (152) 73-19-00</a> ,
                факс: <a href="tel:+375152731900">+375 (152) 73-19-10</a>
              </p>
            </div>
            <div className="contact mail">
              <p>Почта:</p>
              <a href="mailto:mail@grsu.by">mail@grsu.by</a>
            </div>
          </div>
          <div className="logos">
            <a href="https://www.grsu.by/" target="_blank">
              <img className="main-logo" src={LogoGRSU} alt="GRSU" />
            </a>
            <div className="logo">
              <GrsuSkillsLogoLight />
            </div>
          </div>
        </div>
        <a
          className="footer-map"
          href="https://yandex.by/maps/org/grodnenskiy_gosudarstvenny_universitet_imeni_yanki_kupaly/1038749843/?ll=23.840210%2C53.684710&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=18"
          target="_blank"
        >
          <img src={Map} alt="Map" />
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
};

export const FooterBottomMain = () => {
  return (
    <div className="footer-bottom">
      <img className="circles" src={FooterMain} />
      <div className="container">
        <div className="info">
          <div className="footer-contacts">
            <div className="contact">
              <img className="icon-location" src={Location} alt="Адрес" />
              <p>Республика Беларусь, г. Гродно, 230023, ул. Ожешко, 22</p>
            </div>
            <div className="contact">
              <img className="icon-contacts" src={Contacts} alt="Контакты" />
              <p>
                Телефон: <a href="tel:+375152731900">+375 (152) 73-19-00</a> ,
                факс: <a href="tel:+375152731900">+375 (152) 73-19-10</a>
              </p>
            </div>
            <div className="contact mail">
              <p>Почта:</p>
              <a href="mailto:mail@grsu.by">mail@grsu.by</a>
            </div>
          </div>
          <div className="logos">
            <a href="https://www.grsu.by/" target="_blank">
              <img className="main-logo" src={LogoGRSU} alt="GRSU" />
            </a>
            <div className="logo">
              <GrsuSkillsLogoLight />
            </div>
          </div>
        </div>
        <a
          className="footer-map"
          href="https://yandex.by/maps/org/grodnenskiy_gosudarstvenny_universitet_imeni_yanki_kupaly/1038749843/?ll=23.840210%2C53.684710&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=18"
          target="_blank"
        >
          <img src={Map} alt="Map" />
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
};
