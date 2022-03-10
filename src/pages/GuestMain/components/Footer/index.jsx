import React from "react";
import Location from "../../../../assets/icons/Location.svg";
import Contacts from "../../../../assets/icons/Contacts.svg";
import Map from "../../../../assets/images/Map.png";
import CirclesBottom from "../../../../assets/images/Footer.svg";

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="footer-info">
        <div className="text">
          <h2>grsu.skills</h2>
          <h4>Начни свой путь с нами!</h4>
        </div>
      </div>
      <div className="footer-bottom">
        <img className="circles" src={CirclesBottom} />
        <div className="container">
          <div className="footer-contacts">
            <div className="contact">
              <img className="icon-location" src={Location} alt="Адрес" />
              <p>Республика Беларусь, г. Гродно, 230023, ул. Ожешко, 22</p>
            </div>
            <div className="contact">
              <img className="icon-contacts" src={Contacts} alt="Контакты" />
              <p>Телефон: +375 (152) 73-19-00, факс: +375 (152) 73-19-10</p>
            </div>
            <div className="contact mail">
              <p>Почта:</p>
              <a href="mailto:mail@grsu.by">mail@grsu.by</a>
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
    </footer>
  );
};

export default MainFooter;
