import react from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer__redes">
          <ul class="footer__redes-wrapper">
            <li>
              <a href="#" class="footer__link">
                <img src={require("../images/facebook.png")} />
                facebook
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                <img src={require("../images/social.png")} />
                spotify
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                <img src={require("../images/instagram.png")} />
                instagram
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                <img src={require("../images/youtube.png")} />
                youtube
              </a>
            </li>
          </ul>
        </div>
        <div class="separador"></div>
        <p class="footer__texto">Copyright @ 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
