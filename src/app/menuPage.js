export default function domRewrite(page) {
    const content = document.querySelector(".content");
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
      content.innerHTML = menu;

  }