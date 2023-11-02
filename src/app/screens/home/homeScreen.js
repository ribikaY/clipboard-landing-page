import Access from "./sections/access";
import Features from "./sections/features";
import Header from "./sections/header";
import Services from "./sections/services";
import Brands from "./sections/brands";
import Download from "./sections/download";
import Footer from "@/app/components/footer";

const HomeScreen = () => {
    return (
        <main>
           <Header/>
           <div className="spacing">
                <Features/>
                <Access/>
                <Services/>
                <Brands/>
                <Download/>
           </div>
           <Footer/>
        </main>
    )
}

export default HomeScreen;