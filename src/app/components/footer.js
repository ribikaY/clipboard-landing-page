import Image from "next/image";
import logo from "../../../public/image/logo.svg";
import facebook from "../../../public/image/icon-facebook.svg";
import twitter from "../../../public/image/icon-twitter.svg";
import instagram from "../../../public/image/icon-instagram.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content responsive-spacing">
                <Image
                    src={logo}
                    width="auto"
                    height="auto"
                    alt="logo"
                    className="logo"
                />

                <ul id="mobile-links">
                    <li>FAQs</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                    <li>Press Kit</li>
                    <li>Install Guide</li>
                </ul>

                <ul id="desktop-links">
                    <li>FAQs</li>
                    <li>Privacy Policy</li>
                    <li>Install Guide</li>
                    <li>Contact Us</li>
                    <li>Press Kit</li>
                </ul>


                <div className="footer-icons">
                    <Image
                        src={facebook}
                        width="auto"
                        height="auto"
                        alt="facebook logo"
                        className="icon"
                    />
                    <Image
                        src={twitter}
                        width="auto"
                        height="auto"
                        alt="twitter logo"
                        className="icon"
                    />
                    <Image
                        src={instagram}
                        width="auto"
                        height="auto"
                        alt="icon"
                        className="icon"
                    />

                </div>
            </div>
        </div>
    )
}

export default Footer;