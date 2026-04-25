import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Flight Status</a></li>
            <li><a href="#">Check-in</a></li>
            <li><a href="#">Baggage</a></li>
            <li><a href="#">Travel Insurance</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Adventures</h3>
          <ul>
            <li><a href="#">Scuba Diving</a></li>
            <li><a href="#">Mountain Trekking</a></li>
            <li><a href="#">City Tours</a></li>
            <li><a href="#">Desert Safari</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>Country</h3>
          <ul>
            <li><a href="#">USA</a></li>
            <li><a href="#">France</a></li>
            <li><a href="#">Italy</a></li>
            <li><a href="#">UAE</a></li>
          </ul>
        </div>

        <div class="footer-col contact-col">
          <h3>Social Work</h3>
          <h2 class="let-talk">Let's Talk →</h2>
          <div class="social-links">
            <a href="#">LinkedIn</a> / <a href="#">Facebook</a> / <a href="#">Instagram</a>
          </div>
        </div>
      </div>

      <div class="container footer-bottom">
        <div class="legal">
          <a href="#">Privacy Policy</a>
          <span>© 2026 Flight Booking. All rights reserved.</span>
        </div>
        <div class="payments">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png" alt="Mastercard">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="Paypal">
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #f9fbff;
      padding: 80px 0 40px;
      border-top: 1px solid #eee;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 40px;
      margin-bottom: 60px;
    }

    .footer-col h3 {
      font-size: 16px;
      margin-bottom: 25px;
      color: var(--text-dark);
    }

    .footer-col ul li {
      margin-bottom: 12px;
    }

    .footer-col ul li a {
      color: var(--text-muted);
      font-size: 14px;
    }

    .footer-col ul li a:hover {
      color: var(--accent-color);
    }

    .let-talk {
      font-size: 32px;
      margin-bottom: 20px;
      cursor: pointer;
    }

    .social-links {
      font-size: 14px;
      color: var(--text-muted);
    }

    .footer-bottom {
      padding-top: 40px;
      border-top: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    .legal {
      font-size: 13px;
      color: var(--text-muted);
      display: flex;
      gap: 20px;
    }

    .payments {
      display: flex;
      gap: 15px;
      align-items: center;
    }

    .payments img {
      height: 20px;
      opacity: 0.6;
    }

    @media (max-width: 768px) {
      .footer {
        padding: 50px 0 30px;
      }
      .footer-grid {
        gap: 30px;
      }
      .footer-bottom {
        flex-direction: column;
        text-align: center;
        gap: 30px;
      }
      .payments {
        justify-content: center;
      }
      .legal {
        justify-content: center;
        flex-direction: column;
        gap: 10px;
      }
    }
  `]
})
export class FooterComponent {}
