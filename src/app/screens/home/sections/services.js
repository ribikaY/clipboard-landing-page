import Service from "../components/service";
import Text from "@/app/components/text";
import Title from "@/app/components/title";
import blacklistImg from "../../../../../public/image/icon-blacklist.svg";
import textImg from "../../../../../public/image/icon-text.svg";
import previewImg from "../../../../../public/image/icon-preview.svg";

const Services = () => {
    const services = [
        {title:"Create blacklists", text:"Ensure sensitive information never makes its way to your clipboard by excluding certain sources.", img:blacklistImg, alt:"blacklist"},
        {title:"Plain text snippets", text:"Remove unwanted formatting from copied text for a consistent look.", img:textImg, alt:"text"},
        {title:"Sneak preview", text:"Quick preview of all snippets on your Clipboard for easy access.", img:previewImg, alt:"preview"},
    ]
    return (
        <div className="services">
            <Title title="Supercharge your workflow" classname="subtitle"/>
            <Text text="We've got the tools to boost your productivity."/>
            {
                services && services.map(service => (
                    <Service key={service.alt} title={service.title} text={service.text} image={service.img} alt={service.alt}/>
                  )
                )
            }
        </div>
    )
}

export default Services;