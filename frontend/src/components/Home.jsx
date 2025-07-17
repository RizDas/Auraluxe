import React, { useEffect } from "react";
import "/src/components/Home.css";

// 💡 Scroll-synced video hook (outside component)
const useScrollSyncedVideo = () => {
  useEffect(() => {
    if (window.matchMedia("(min-width: 769px)").matches) {
      const section = document.querySelector("section.vid");
      const vid = section?.querySelector("video");

      if (section && vid) {
        vid.pause(); // Pause initially

        const scroll = () => {
          const distance = window.scrollY - section.offsetTop;
          const total = section.clientHeight - window.innerHeight;
          let percentage = distance / total;
          percentage = Math.max(0, Math.min(1, percentage));

          if (vid.duration > 0) {
            vid.currentTime = vid.duration * percentage;
          }
        };

        vid.addEventListener("loadedmetadata", scroll);
        window.addEventListener("scroll", scroll);
        scroll(); // Initial run

        return () => {
          vid.removeEventListener("loadedmetadata", scroll);
          window.removeEventListener("scroll", scroll);
        };
      }
    }
  }, []);
};

const Home = () => {
  // ⏫ Call the hook at the top level
  useScrollSyncedVideo();

  // 👇 Spline loader on mount
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
            {/* Product cards */}
            <a
              href="http://localhost:3000/product.html?id=3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <div className="wrapper">
                  <img
                    src="/media/glass-1.png"
                    className="cover-image"
                    alt="glass-1"
                  />
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

            <a
              href="http://localhost:3000/product.html?id=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <div className="wrapper">
                  <img
                    src="/media/glass-2.png"
                    className="cover-image"
                    alt="glass-2"
                  />
                </div>
                <img src="/media/CASUAL.png" className="title" alt="casual" />
                <img
                  src="/media/glass-2-man.png"
                  className="character"
                  alt="glass-2-man"
                />
              </div>
            </a>

            <a
              href="http://localhost:3000/product.html?id=2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <div className="wrapper">
                  <img
                    src="/media/glass-3.png"
                    className="cover-image"
                    alt="glass-3"
                  />
                </div>
                <img
                  src="/media/FULL-RIM.png"
                  className="title"
                  alt="full-rim"
                />
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

      <section className="vid">
        <div className="holder">
          <video
            src="/media/lumino.mp4"
            muted
            playsInline
            preload="auto"
          ></video>
        </div>
      </section>

      <section id="section-2" className="section-gray">
        <div className="sec-2_container">
          <div className="features-grid">
            <div className="text-column">
              <h2 classNAme=" ">Why Choose <span className="text-red">LuminoLens?</span></h2>
              <p>LuminoLens is your everyday eye care companion—affordable, research-backed, and built to protect your vision in a screen-first world.</p>
            </div>
            <div className="feature-card">
              <div className="card-header">
                <span className="feature-number  ">01</span>
              </div>
              <h3 className=" ">Scientifically Verified Protection</h3>
              <p>Our lenses are tested with real spectrometer reports — no gimmicks, just proof-backed blue light filtering.</p>
            </div>
            
            <div className="feature-card">
              <div className="card-header">
                <span className="feature-number  ">02</span>
              </div>
              <h3 className=" ">Student-Friendly Pricing</h3>
              <p>Premium eye care without the premium price. Starting at just ₹399, made for students, coders & creators.</p>
            </div>
          </div>
          
           
         <div className="features-bottom-row">
            <div className="feature-card">
              <div className="card-header">
                <span className="feature-number  ">03</span>
              </div>
              <h3 className=" ">More Than Just Glasses</h3>
              <p>Every pair links to a free microsite with eye exercises, posture tips, and blue light education — health meets habit.</p>
            </div>
            
            <div className="feature-card">
              <div className="card-header">
                <span className="feature-number  ">04</span>
              </div>
              <h3 className=" ">Purpose-Driven & Future-Ready</h3>
              <p>Built to protect your present, while evolving for the future — from UV eyewear to school collabs and AR/VR standards.</p>
            </div>
            
            <div className="feature-card">
              <div className="card-header">
                <span className="feature-number  ">05</span>
              </div>
              <h3 className=" ">Energy Efficiency</h3>
              <p>Our solutions are designed to maximize energy production and efficiency.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
