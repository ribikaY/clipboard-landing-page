import Text from "@/app/components/text";
import Title from "@/app/components/title";
import computerImg from "../../../../../public/image/image-computer.png"
import Image from "next/image";

const Features = ()=> {
    return(
        <div className="features">
            <Title title="Keep track of your snippets" classname="subtitle"/>
            <Text text="Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything."/>
            <Image
               src={computerImg}
               width="auto"
               height="auto"
               alt="Computer"
               className="image"
            />

            <div className="feature">
                <Title title="Quick Search" classname="small-title"/>
                <Text text="Easily search your snippets by content, category, web address, application, and more."/>
            </div>

            <div className="feature">
                <Title title="iCloud Sync" classname="small-title"/>
                <Text text="Instantly saves and syncs snippets accross all your devices."/>
            </div>

            <div className="feature">
                <Title title="Complete History" classname="small-title"/>
                <Text text="Retrieve any snippets from the first moment you started using the app."/>
            </div>
        </div>
    )
}

export default Features;