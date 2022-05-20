import Footer from "../../Components/Footer";
import NavbarTop from "../../Components/Navbar";
import SectionKontak from "./SectionKontak";
import Helmet from "react-helmet";

const Kontak = () => {
    return(
        <>
         <Helmet>
            <title>Hasiholan Owen Ambarita  - Kontak</title>
            <meta name="description" content="Motivasi untuk menuangkan ide dalam sebuah aplikasi menjadikan saya semangat untuk belajar dunia IT. Semoga saya dapat berguna bagi masyarakat dalam bidang IT."/>
            <meta name="keywords" content="Hasiholan Owen Ambarita - Kontak" />
        </Helmet>
        <NavbarTop/>
        <SectionKontak/>
        <Footer/>
        </>
    )
}
export default Kontak;