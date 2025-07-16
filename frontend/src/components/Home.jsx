import React, { useEffect } from "react";
import "/src/components/Home.css";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.10.31/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div id="main">
      <section className="section-1">
        <div className="bg-video">
          <spline-viewer
            className="spline"
            url="https://prod.spline.design/6SMhyKFA1PgFr9vC/scene.splinecode"
          ></spline-viewer>
          <div className="video-overlay"></div>
        </div>

        <div className="section-content">
          <h2>
            SOUND BEYOND <br />
            SILENCE
          </h2>
          <p>Immerse yourself into the beats of Auraluxe.</p>
          <div className="buttons">
            <a href="#section-2" className="btn btn-primary">
              SHOP NOW
            </a>
            <a href="http://localhost:3000" className="btn btn-secondary">
              <span>
                Learn More&nbsp;
                <img
                  className="arrow arrow-default"
                  src="src/assets/rightward-arrow.png"
                  alt="→"
                />
                <img
                  className="arrow arrow-hover"
                  src="src/assets/rightward-arrow-black.png"
                  alt="→"
                />
              </span>
            </a>
          </div>
        </div>
      </section>

      <div id="section-2" className="services-section">
        <div className="container">
          <div className="services-header">
            <h2>WE SHOW. YOU CHOOSE.</h2>
            <p>
              Explore our wide range of products, for all ages, faces, curated
              specifically for you.
            </p>
          </div>
          <div className="card-holder">

            <a href="http://localhost:3000/product.html?id=3" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="wrapper">
                  <img src="/media/glass-1.png" className="cover-image" alt="glass-1" />
                </div>
                <img src="/media/ROUND.png" className="title" alt="round" />
                <img
                  src="/media/glass-1-woman.png"
                  className="character"
                  style={{ width: "125%" }}
                  alt="glass-1-woman"
                />
              </div>
            </a>

            <a href="http://localhost:3000/product.html?id=1" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="wrapper">
                  <img src="/media/glass-2.png" className="cover-image" alt="glass-2" />
                </div>
                <img src="/media/CASUAL.png" className="title" alt="casual" />
                <img
                  src="/media/glass-2-man.png"
                  className="character"
                  alt="glass-2-man"
                />
              </div>
            </a>

            <a href="http://localhost:3000/product.html?id=2" target="_blank" rel="noopener noreferrer">
              <div className="card">
                <div className="wrapper">
                  <img src="/media/glass-3.png" className="cover-image" alt="glass-3" />
                </div>
                <img src="/media/FULL-RIM.png" className="title" alt="full-rim" />
                <img
                  src="/media/glass-3-man.png"
                  className="character"
                  style={{ width: "145%" }}
                  alt="glass-3-man"
                />
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
