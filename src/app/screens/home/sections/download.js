import Text from "@/app/components/text";
import Title from "@/app/components/title";
import DownloadButtons from "../components/downloadButtons";

const Download = () => {
    return (
        <div className="download">
            <Title title="Clipoard for iOS and Mac OS" classname="subtitle"/>
            <Text text="Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard."/>
            <DownloadButtons/>
        </div>
    )
}

export default Download;