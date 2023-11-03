import Text from "@/app/components/text";
import Image from "next/image";
import devicesImg from "../../../../../public/image/image-devices.png";

const { default: Title } = require("@/app/components/title")

const Access = () => {
    return(
        <div className="access"> 
            <div className="access-header">
                <Title title="Access Clipboard anywhere" classname="subtitle"/>
                <Text text="Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."/>
            </div>
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