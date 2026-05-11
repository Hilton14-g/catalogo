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
          <p>� WhatsApp: +51 983 836 445</p>
        </div>
        <p class="copyright">© 2025 Rosas Eternas. Todos los derechos reservados.</p>
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
    
    .copyright {
      margin-top: 1.5rem;
      font-size: 0.85rem;
      opacity: 0.7;
    }
  `]
})
export class FooterComponent {}
