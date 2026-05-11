import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <h3>🌹 Rosas Eternas</h3>
      <p>Envíos a todo Chile</p>
      <div class="social-links">
        <span>📸</span>
        <span>💬</span>
        <span>📘</span>
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
    
    footer h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
    
    footer p {
      font-size: 0.9rem;
      opacity: 0.9;
      margin-bottom: 0.5rem;
    }
    
    .social-links {
      margin-top: 1rem;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  `]
})
export class FooterComponent {}
