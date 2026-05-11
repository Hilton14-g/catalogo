import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="footer-content">
        <h3>Rosas Eternas</h3>
        <p>Envíos a todo Chile</p>
        <div class="contact-info">
          <a href="https://wa.me/51983836445" target="_blank" class="whatsapp-link">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="whatsapp-logo">
          </a>
        </div>
        <p class="copyright"> 2026 Rosas Eternas. Todos los derechos reservados.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: linear-gradient(135deg, var(--rose-dark) 0%, var(--rose-primary) 100%);
      color: white;
      text-align: center;
      padding: 2rem 1rem;
      margin-top: 2rem;
    }
    
    .footer-content {
      max-width: 600px;
      margin: 0 auto;
    }
    
    footer h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    footer p {
      margin-bottom: 0.5rem;
      opacity: 0.9;
      font-size: 0.95rem;
    }
    
    .contact-info {
      margin: 1rem 0;
      padding: 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    
    .contact-info p {
      font-weight: 500;
      margin-bottom: 0;
    }
    
    .whatsapp-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: transform 0.3s ease;
    }
    
    .whatsapp-link:hover {
      transform: scale(1.1);
    }
    
    .whatsapp-logo {
      width: 32px;
      height: 32px;
    }
    
    .copyright {
      margin-top: 1.5rem;
      font-size: 0.85rem;
      opacity: 0.7;
    }
  `]
})
export class FooterComponent {}
