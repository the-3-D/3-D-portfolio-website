// HEADER COMPONENT
class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
      <div class="logo-container">
        <img src="image/image1.png" alt="3D Team Logo" class="logo" />
        <h1 class="title">3D TEAM</h1>
      </div>

      <nav class="nav-links">
        <a href="Home.html">Home</a>
        <a href="About.html">About</a>
        <a href="Projects.html">Projects</a>
        <a href="Contact.html">Contact</a>
      </nav>
    </header>
    `;
    this.highlightActiveLink();
  }

  highlightActiveLink() {
    const links = this.querySelectorAll('nav a');
    const currentPath = window.location.pathname.split('/').pop() || 'Home.html';

    links.forEach(link => {
      if (link.getAttribute('href') === currentPath) {
        link.classList.add('active-link');
      }
    });
  }
}

// FOOTER COMPONENT
class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <div class="footer-content">
        <h3>Team 3D</h3>
        <p>Creating digital experiences that shine with innovation and excellence</p>

        <div class="social-links">
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-telegram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

      <div class="footer-bottom">
        <p>"Whatever you do, work at it with all your heart." – Colossians 3:23</p>
        <p>© 2025 Team 3D. All Rights Reserved.</p>
      </div>
    </footer>
    `;
  }
}

// Register the custom tags
customElements.define('main-header', MainHeader);
customElements.define('main-footer', MainFooter);