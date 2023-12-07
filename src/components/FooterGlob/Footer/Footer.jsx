import FooterLogoBox from "../FooterLogoBox/FooterLogoBox";
import FooterNavBox from "../FooterNavBox/FooterNavBox";
import s from "./Footer.module.css";
const Footer = () => {
    return (
        <div className={s.footer}>
            <FooterLogoBox />
            <FooterNavBox />
        </div>
    );
};

export default Footer;
