import React, { useEffect, useState } from "react";
import "./App.css";
import "./loader.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Certification from "./components/certification";
import homepage from "./components/homepage";
import Loader from "./components/loader";
import { ContactUs } from "./components/contactfrom";
import { Provider } from "./context";
import Projectpage from "./components/projectpage";
import SingleProject from "./components/singleproject";
import Blogpage from "./components/blogpage";
import SingleBlog from "./components/singleblog";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <Provider>
      {loading ? (
        <Loader /> // Show loader if still loading
      ) : (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={homepage} />
            <Route exact path="/certification" component={Certification} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/project/:id" component={SingleProject} />
            <Route exact path="/projectpage" component={Projectpage} />
            <Route exact path="/blog/:id" component={SingleBlog} />
            <Route exact path="/blogpage" component={Blogpage} />
          </Switch>
          <Footer />
        </BrowserRouter>
      )}
    </Provider>
  );
}

export default App;