import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="top-nav">
        <div class="container top-container">

          <div class="logo">
            <img src="assets/images/logo.png" alt="Out On Excursion">
          </div>

          <div class="header-actions">
            <div class="action-item">
              <i class="fa-solid fa-globe"></i>
              <span>EN</span>
              <i class="fa-solid fa-chevron-down tiny"></i>
            </div>

            <div class="action-item">
              <span>USD</span>
              <i class="fa-solid fa-chevron-down tiny"></i>
            </div>

            <button class="btn-signin">SIGN IN</button>
          </div>

        </div>
      </div>

      <nav class="main-nav">
        <div class="container">
          <ul>
            <li class="active">
              <i class="fa-solid fa-plane"></i>
              <span>Flights</span>
            </li>
            <li>
              <i class="fa-solid fa-hotel"></i>
              <span>Hotel</span>
            </li>
            <li>
              <i class="fa-solid fa-ticket"></i>
              <span>Tour</span>
            </li>
            <li>
              <i class="fa-solid fa-helicopter"></i>
              <span>Charter</span>
            </li>
            <li>
              <i class="fa-solid fa-car"></i>
              <span>Rental Car</span>
            </li>
            <li>
              <i class="fa-solid fa-passport"></i>
              <span>Visa</span>
            </li>
            <li>
              <i class="fa-solid fa-shield-halved"></i>
              <span>Insurance</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      color: white;
    }

    .top-nav {
      padding: 18px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }

    .top-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo img {
      height: 42px;
      filter: brightness(0) invert(1);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .action-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.9);
      transition: color 0.2s ease;
    }

    .action-item:hover {
      color: white;
    }

    .action-item i {
      font-size: 14px;
    }

    .tiny {
      font-size: 9px !important;
      opacity: 0.7;
    }

    .btn-signin {
      background: transparent;
      color: white;
      border: 1.5px solid rgba(255, 255, 255, 0.8);
      padding: 8px 22px;
      border-radius: 4px;
      font-weight: 600;
      font-size: 13px;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .btn-signin:hover {
      background: white;
      color: #003580;
      border-color: white;
    }

    .main-nav {
      padding: 12px 0;
    }

    .main-nav ul {
      display: flex;
      gap: 32px;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .main-nav li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.85);
      cursor: pointer;
      padding-bottom: 4px;
      border-bottom: 2px solid transparent;
      transition: all 0.2s ease;
      white-space: nowrap;
    }

    .main-nav li:hover {
      color: white;
      border-bottom-color: rgba(255, 255, 255, 0.6);
    }

    .main-nav li.active {
      color: white;
      border-bottom-color: #ffb700;
    }

    .main-nav li i {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.8);
    }

    .main-nav li.active i {
      color: #ffb700;
    }

    @media (max-width: 992px) {
      .main-nav { display: none; }
    }

    @media (max-width: 768px) {
      .top-nav { padding: 14px 0; }
      .top-container {
        flex-wrap: wrap;
        gap: 12px;
      }
      .header-actions {
        gap: 14px;
      }
      .btn-signin {
        padding: 7px 16px;
        font-size: 12px;
      }
    }

    @media (max-width: 480px) {
      .logo img { height: 34px; }
      .action-item span { display: none; }
    }
  `]
})
export class HeaderComponent {}
