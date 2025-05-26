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
    // Listen for all images to be fully loaded
    const images = document.images;
    let loadedImages = 0;
    const totalImages = images.length;

    if (totalImages === 0) {
      setLoading(false);
      return;
    }

    const onImageLoad = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setLoading(false);
      }
    };

    for (let i = 0; i < totalImages; i++) {
      if (images[i].complete) {
        onImageLoad();
      } else {
        images[i].addEventListener("load", onImageLoad);
        images[i].addEventListener("error", onImageLoad); // handle broken links too
      }
    }
  }, []);

  return (
    <Provider>
      {loading ? (
        <Loader />
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