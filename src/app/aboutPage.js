export default function domRewrite(page) {
    const content = document.querySelector(".content");
    const about = `
              <div class="about">
          <section class="story-section">
            <div class="story-grid">
              <img
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445"
                alt="Restaurant Interior"
                class="story-image"
              />
              <div class="story-content">
                <h2>The Birth of Nate</h2>
                <p>
                  Founded in 2023, Nate emerged from a vision to create a dining
                  experience that bridges the gap between traditional cooking
                  methods and modern culinary innovation. Our journey began when
                  Chef Nathan Parker, after years of working in prestigious kitchens
                  across the globe, decided to bring his unique perspective on food
                  to life.
                </p>
                <p>
                  The restaurant's philosophy is rooted in the belief that
                  exceptional food should be both sophisticated and approachable. We
                  source our ingredients from local farmers and producers, ensuring
                  that each dish tells a story of our community and season.
                </p>
              </div>
            </div>
          </section>
          <section class="team-section">
            <div class="team-container">
              <div class="team-header">
                <h2>Meet Our Team</h2>
                <p>
                  The passionate individuals behind your exceptional dining
                  experience
                </p>
              </div>
              <div class="team-grid">
                <div class="team-member">
                  <img
                    src="./assets/Executive-Chef-&-Founder.svg"
                    alt="Chef Nathan"
                  />
                  <h3>Nathan Parker</h3>
                  <p>Executive Chef & Founder</p>
                </div>
                <div class="team-member">
                  <img
                    src="./assets/Head-Chef.svg"
                    alt="Chef Michael"
                  />
                  <h3>Michael Chen</h3>
                  <p>Head Chef</p>
                </div>
                <div class="team-member">
                  <img
                    src="./assets/Restaurant-Manager.svg"
                    alt="Sarah"
                  />
                  <h3>Sarah Williams</h3>
                  <p>Restaurant Manager</p>
                </div>
              </div>
            </div>
          </section>
          <section class="values-section">
            <h2>Our Values</h2>
            <div class="values-grid">
              <div class="value-card">
                <h3>Quality</h3>
                <p>
                  We never compromise on the quality of our ingredients or
                  preparation methods.
                </p>
              </div>
              <div class="value-card">
                <h3>Innovation</h3>
                <p>
                  Constantly pushing boundaries while respecting culinary
                  traditions.
                </p>
              </div>
              <div class="value-card">
                <h3>Sustainability</h3>
                <p>
                  Committed to environmental responsibility in all our practices.
                </p>
              </div>
              <div class="value-card">
                <h3>Community</h3>
                <p>
                  Supporting local producers and creating meaningful connections.
                </p>
              </div>
            </div>
          </section>
        </div>
      `;

      content.innerHTML = about;
  }