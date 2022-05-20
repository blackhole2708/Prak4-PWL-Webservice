import Helmet from "react-helmet";
import Footer from "../../Components/Footer";
import NavbarTop from "../../Components/Navbar";
import Cards from "./Cards";
import Keahlian from "./Keahlian";

const Home = () => {
    return(
        <>
        <Helmet>
            <title>Hasiholan Owen Ambarita  - Home</title>
            <meta name="description" content="Motivasi untuk menuangkan ide dalam sebuah aplikasi menjadikan saya semangat untuk belajar dunia IT. Semoga saya dapat berguna bagi masyarakat dalam bidang IT."/>
            <meta name="keywords" content="Hasiholan Owen Ambarita - Mahasiswa ITERA , indonesia" />
        </Helmet>
       <div>
       <NavbarTop/>
        <Cards/>
        <Keahlian/>
        <Footer/>
       </div>
        </>
    )
}
export default Home;