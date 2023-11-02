import Text from "@/app/components/text";
import Image from "next/image";
import devicesImg from "../../../../../public/image/image-devices.png";

const { default: Title } = require("@/app/components/title")

const Access = () => {
    return(
        <div className="access"> 
            <Title title="Access Clipboard Anywhere" classname="subtitle"/>
            <Text text="Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."/>
            <Image
               src={devicesImg}
               width="auto"
               height="auto"
               alt="Computer"
               className="image"
            />
        </div>
    )
}

export default Access;