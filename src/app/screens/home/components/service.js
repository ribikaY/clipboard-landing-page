import Title from "@/app/components/title";
import Text from "@/app/components/text";
import Image from "next/image";

const Service = ({title, text, image, alt}) => {
    return(
        <div className="service">
            {
                image && 
                <Image
                    src={image}
                    width="auto"
                    height="auto"
                    alt={alt}
                    className="image"
                />
            }
            <Title title={title} classname="small-title"/>
            <Text text={text}/>
        </div>
    )
}

export default Service;