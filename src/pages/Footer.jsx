import react from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer__redes">
          <ul class="footer__redes-wrapper">
            <li>
              <a
                href="https://twitter.com/saranshSCS"
                target="_blank"
                class="footer__link"
              >
                <img src={require("../images/twitter-sign.png")} />
                twitter
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/artist/6VNdlOegPizz5bD6mN54EO?si=HEuS52WUQNu1Hkmu6CC1mA"
                target="_blank"
                class="footer__link"
              >
                <img src={require("../images/social.png")} />
                spotify
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/nullstrange/"
                target="_blank"
                class="footer__link"
              >
                <img src={require("../images/instagram.png")} />
                instagram
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com/@NullStrange"
                target="_blank"
                class="footer__link"
              >
                <img src={require("../images/youtube.png")} />
                youtube
              </a>
            </li>
            <li>
              <a
                href="mailto:nullstrange01@gmail.com"
                target="_blank"
                class="footer__link"
              >
                <img src={require("../images/email.png")} />
                e-mail
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
