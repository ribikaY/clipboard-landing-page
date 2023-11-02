import Image from "next/image";
import desktopBg from "../../../../../public/image/bg-header-desktop.png";
import mobileBg from "../../../../../public/image/bg-header-mobile.png";
import logo from "../../../../../public/image/logo.svg";
import Title from "@/app/components/title";
import Text from "@/app/components/text";
import DownloadButtons from "../components/downloadButtons";

const Header = () => {
    return (
        <div className="header">
            {/* <Image
                src={desktopBg}
                width="100%"
                height="auto"
                alt="Desktop Background"
                className="header-image desktop"
            /> */}

            <Image
                src={mobileBg}
                width="100%"
                height="auto"
                alt="Desktop Background"
                className="header-image mobile"
            />

            <div className="header-content spacing">
                <Image
                    src={logo}
                    width="125px"
                    height="125px"
                    alt="Logo"
                    className="logo-image"
                />

                <Title title="A history of everything you copy"/>
                <Text text="Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices."/>

                <DownloadButtons/>
            </div>

            {/* logo
            title
            text
            download buttons */}
        </div>
    )
}

export default Header;