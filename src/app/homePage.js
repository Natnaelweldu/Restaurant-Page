export default function HomePageLoader() {
    const content = document.querySelector(".content");
    const home = `
        <div class="home">
          <section class="hero" id="home">
            <h1>NATE</h1>
            <p>Experience Modern Culinary Excellence</p>
            <a href="#reservations" class="cta-button">Make a Reservation</a>
          </section>
          <section class="info-section" id="about">
            <h2>Welcome to Nate</h2>
            <div class="info-grid">
              <div class="info-card">
                <h3>Our Story</h3>
                <p>
                  Founded in 2023, Nate brings a fresh perspective to modern dining,
                  combining traditional flavors with contemporary techniques.
                </p>
              </div>
              <div class="info-card">
                <h3>Cuisine</h3>
                <p>
                  Our menu features carefully curated dishes that celebrate local
                  ingredients and global inspiration.
                </p>
              </div>
              <div class="info-card">
                <h3>Atmosphere</h3>
                <p>
                  Immerse yourself in our thoughtfully designed space, where
                  minimalism meets comfort.
                </p>
              </div>
            </div>
          </section>
        </div>
      `;
      content.innerHTML = home;
  }