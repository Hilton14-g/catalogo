import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar">
      <div class="navbar-top">
        <div class="logo">🌹 Rosas Eternas</div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, var(--rose-gradient-start) 0%, var(--rose-gradient-end) 100%);
      color: white;
      padding: 0;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: 0 4px 30px rgba(253, 121, 168, 0.3);
    }
    
    .navbar-top {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    
    .logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: white;
    }
  `]
})
export class NavbarComponent {
}
