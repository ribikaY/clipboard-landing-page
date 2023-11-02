import Button from "@/app/components/button";

const DownloadButtons = () =>{
    return (
        <div className="download-buttons">
            <Button text="Download for iOS" classname="ios-button"/>
            <Button text="Download for Mac" classname="mac-button"/>
        </div>
    )
}

export default DownloadButtons;