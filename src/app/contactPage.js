export default function domRewrite(page) {
    const content = document.querySelector(".content");
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
                        <p>Awra Street<br>Addis Abeba, Bole</p>
                    </div>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <div class="content">
                        <h3>Phone</h3>
                        <p>+251 992673723</p>
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

        content.innerHTML = contact;
  }