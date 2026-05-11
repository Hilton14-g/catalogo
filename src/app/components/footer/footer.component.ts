import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="footer-content">
        <div class="footer-brand">
          <h3>🌹 Rosas Eternas</h3>
        </div>
        <div class="footer-divider"></div>
        <p class="copyright">© 2026 Rosas Eternas. Todos los derechos reservados.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--bg-lila);
      color: var(--text-light);
      text-align: center;
      padding: 3rem 2rem;
      margin-top: 0;
      border-top: 1px solid var(--border-light);
    }

    .footer-content {
      max-width: 1400px;
      margin: 0 auto;
    }

    .footer-brand {
      margin-bottom: 1.5rem;
    }

    footer h3 {
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--rose-primary);
      margin-bottom: 0.5rem;
      letter-spacing: 0.1em;
    }

    .footer-brand p {
      font-size: 0.85rem;
      color: var(--text-light);
      margin: 0;
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-weight: 600;
    }

    .footer-divider {
      width: 60px;
      height: 2px;
      background: var(--rose-light);
      margin: 1.5rem auto;
      border-radius: 1px;
    }

    .copyright {
      font-size: 0.75rem;
      color: var(--text-light);
      opacity: 0.8;
      margin: 0;
      font-family: 'Overpass', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      font-weight: 600;
    }
  `]
})
export class FooterComponent { }
