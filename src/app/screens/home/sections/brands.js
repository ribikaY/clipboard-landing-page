import googleLogo from "../../../../../public/image/logo-google.png";
import ibmLogo from "../../../../../public/image/logo-ibm.png";
import microsoftLogo from "../../../../../public/image/logo-microsoft.png";
import hewlettLogo from "../../../../../public/image/logo-hp.png";
import vgLogo from "../../../../../public/image/logo-vector-graphics.png";
import Image from "next/image";

const Brands = () => {
    const brands = [
        {img:googleLogo, alt:"Google"},
        {img:ibmLogo, alt:"IBM"},
        {img:microsoftLogo, alt:"Microsoft"},
        {img:hewlettLogo, alt:"Hewlett Packard Enterprise"},
        {img:vgLogo, alt:"Vector Graphics"},
    ]
    return (
        <div className="brands">
            {
              brands && brands.map(brand => (
                <Image
                    src={brand.img}
                    key={brand.alt}
                    width="auto"
                    height="auto"
                    alt={brand.alt}
                    className="brand-image"
                />
              ))
            }
        </div>
    )
}

export default Brands;