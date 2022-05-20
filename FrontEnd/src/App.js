import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import AOS from "aos";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Kontak from "./Pages/Kontak";
import Helmet from "react-helmet";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Helmet>
        <title>Hasiholan Owen Ambarita - Mahasiswa ITERA</title>
        <meta
          name="description"
          content="Motivasi untuk menuangkan ide dalam sebuah aplikasi menjadikan saya semangat untuk belajar dunia IT. Semoga saya dapat berguna bagi masyarakat dalam bidang IT."
        />
      </Helmet>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/kontak" exact component={Kontak} />
        {/* <Route path="*" exact component={Error_404} /> */}
      </Switch>
    </Router>
  );
}

export default App;
