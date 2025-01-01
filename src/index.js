// import "./styles/main.css";
function domRewrite(page) {
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
  const menu = `
        <div class="menu">
        <div class="menu-nav">
          <div class="menu-nav-links">
            <a href="#starters">Starters</a>
            <a href="#main-courses">Main Courses</a>
            <a href="#desserts">Desserts</a>
            <a href="#drinks">Drinks</a>
          </div>
        </div>
        <section class="menu-section" id="starters">
          <h2>Starters</h2>
          <div class="menu-grid">
            <div class="menu-item">
              <img
                src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58"
                alt="Truffle Burrata"
              />
              <div class="special-tag">Chef's Special</div>
              <h3>Truffle Burrata</h3>
              <p class="menu-item-description">
                Fresh burrata cheese, black truffle shavings, aged balsamic
                reduction, micro greens
              </p>
              <div class="menu-item-price">$18</div>
              <div class="dietary-info">
                <span class="dietary-icon">🌱</span>Vegetarian
              </div>
            </div>
            <div class="menu-item">
              <img
                src="https://images.unsplash.com/photo-1656106577512-0259bf5b9fd6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tuna Tartare"
              />
              <h3>Tuna Tartare</h3>
              <p class="menu-item-description">
                Fresh yellowfin tuna, avocado, sesame oil, wasabi aioli, wonton
                crisps
              </p>
              <div class="menu-item-price">$22</div>
              <div class="dietary-info">
                <span class="dietary-icon">🐟</span>Seafood
              </div>
            </div>
          </div>
        </section>
        <section class="menu-section" id="main-courses">
          <h2>Main Courses</h2>
          <div class="menu-grid">
            <div class="menu-item">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947"
                alt="Ribeye Steak"
              />
              <h3>Dry-Aged Ribeye</h3>
              <p class="menu-item-description">
                45-day dry-aged ribeye, truffle potato puree, roasted seasonal
                vegetables
              </p>
              <div class="menu-item-price">$48</div>
            </div>
            <div class="menu-item">
              <img
                src="https://images.unsplash.com/photo-1560717845-968823efbee1"
                alt="Sea Bass"
              />
              <h3>Pan-Seared Sea Bass</h3>
              <p class="menu-item-description">
                Mediterranean sea bass, saffron risotto, preserved lemon, herbs
              </p>
              <div class="menu-item-price">$42</div>
              <div class="dietary-info">
                <span class="dietary-icon">🐟</span>Seafood
              </div>
            </div>
          </div>
        </section>
        <section class="menu-section" id="desserts">
          <h2>Desserts</h2>
          <div class="menu-grid">
            <div class="menu-item">
              <img
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307"
                alt="Chocolate Soufflé"
              />
              <h3>Dark Chocolate Soufflé</h3>
              <p class="menu-item-description">
                Valrhona chocolate, vanilla bean ice cream, raspberry coulis
              </p>
              <div class="menu-item-price">$14</div>
              <div class="dietary-info">
                <span class="dietary-icon">🌱</span>Vegetarian
              </div>
            </div>
          </div>
        </section>
        <section class="menu-section" id="drinks">
          <h2>Drinks</h2>
          <div class="menu-grid">
            <div class="menu-item">
              <img
                src="https://images.unsplash.com/photo-1536935338788-846bb9981813"
                alt="Signature Cocktail"
              />
              <h3>The Nate Signature</h3>
              <p class="menu-item-description">
                House-infused gin, elderflower liqueur, fresh citrus, herbs
              </p>
              <div class="menu-item-price">$16</div>
            </div>
          </div>
        </section>
      </div>
    `;
  const contact = `
      <div class="contact">
        <header class="contact-header">
          <h1>Contact Us</h1>
            </header>
        
            <div class="contact-container">
          <div class="contact-info">
              <h2>Get in Touch</h2>
              <div class="info-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <div class="content">
                      <h3>Location</h3>
                      <p>123 Culinary Street<br>New York, NY 10001</p>
                  </div>
              </div>
              <div class="info-item">
                  <i class="fas fa-phone"></i>
                  <div class="content">
                      <h3>Phone</h3>
                      <p>+1 (212) 555-0123</p>
                  </div>
              </div>
              <div class="info-item">
                  <i class="fas fa-envelope"></i>
                  <div class="content">
                      <h3>Email</h3>
                      <p>info@naterestaurant.com</p>
                  </div>
              </div>
          </div>
          <form class="contact-form">
              <h2>Send us a Message</h2>
              <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" required>
              </div>
              <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" required>
              </div>
              <div class="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" required>
              </div>
              <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" rows="5" required></textarea>
              </div>
              <button type="submit" class="submit-btn">Send Message</button>
          </form>
            </div>
        
            <section class="hours-section">
          <div class="hours-container">
              <h2>Opening Hours</h2>
              <div class="hours-grid">
                  <div class="hours-item">
                      <h3>Lunch</h3>
                      <p>Monday - Friday<br>11:30 AM - 2:30 PM</p>
                  </div>
                  <div class="hours-item">
                      <h3>Dinner</h3>
                      <p>Monday - Sunday<br>5:30 PM - 10:30 PM</p>
                  </div>
                  <div class="hours-item">
                      <h3>Brunch</h3>
                      <p>Saturday - Sunday<br>10:00 AM - 3:00 PM</p>
                  </div>
              </div>
          </div>
            </section>
      </div>
    `;
  switch (page) {
    case "homePage":
      content.innerHTML = home;
      break;
    case "aboutPage":
      content.innerHTML = about;
      break;
    case "menuPage":
      content.innerHTML = menu;
      break;
    case "contactPage":
      content.innerHTML = contact;
      break;
  }
}

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const menu = document.querySelector("#menu");
const contact = document.querySelector("#contact");

document.addEventListener("DOMContentLoaded", () => {
  domRewrite("homePage");
});

home.addEventListener("click", () => domRewrite("homePage"));
about.addEventListener("click", () => domRewrite("aboutPage"));
menu.addEventListener("click", () => domRewrite("menuPage"));
contact.addEventListener("click", () => domRewrite("contactPage"));
