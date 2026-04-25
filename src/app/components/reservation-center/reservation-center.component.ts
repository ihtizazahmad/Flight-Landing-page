import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-center',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="reservation-center">
      <div class="container">
        <div class="reservation-header">
          <h2>Reservations Center</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempory</p>
          <div class="divider-line"></div>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="icon-circle">
              <i class="fa-solid fa-tag"></i>
            </div>
            <div class="feature-text">
              <h3>The Best Deals</h3>
              <p>Get the best deals and cheapest prices for big savings on hotels worldwide</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="icon-circle">
              <i class="fa-solid fa-headset"></i>
            </div>
            <div class="feature-text">
              <h3>24 HR Customer Care</h3>
              <p>Dedicated staff are always available to help 24 hours a day, 7 days a week</p>
            </div>
          </div>

          <div class="feature-card">
            <div class="icon-circle">
              <i class="fa-solid fa-award"></i>
            </div>
            <div class="feature-text">
              <h3>Biggest &amp; Best Selection</h3>
              <p>Choose from a vast array of more than 500,000 hotels and destinations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .reservation-center {
      background: #f0f4f8;
      padding: 90px 0 80px;
    }

    .reservation-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .reservation-header h2 {
      font-size: 30px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 14px;
    }

    .reservation-header p {
      color: #888;
      font-size: 14px;
      max-width: 560px;
      margin: 0 auto 18px;
      line-height: 1.6;
    }

    .divider-line {
      width: 50px;
      height: 3px;
      background: #003580;
      margin: 0 auto;
      border-radius: 2px;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .feature-card {
      background: white;
      padding: 32px 28px;
      border-radius: 12px;
      display: flex;
      align-items: flex-start;
      gap: 20px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      border: 1px solid #eaeaea;
      transition: all 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 28px rgba(0,0,0,0.08);
    }

    .icon-circle {
      width: 62px;
      height: 62px;
      border: 1.5px solid #003580;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      background: transparent;
    }

    .icon-circle i {
      font-size: 20px;
      color: #003580;
    }

    .feature-text h3 {
      font-size: 16px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 10px;
      line-height: 1.3;
    }

    .feature-text p {
      font-size: 13px;
      color: #777;
      line-height: 1.7;
      margin: 0;
    }

    @media (max-width: 992px) {
      .features-grid {
        grid-template-columns: 1fr;
        max-width: 500px;
        margin: 0 auto;
      }
    }

    @media (max-width: 768px) {
      .reservation-center {
        padding: 60px 0 50px;
      }
      .reservation-header {
        margin-bottom: 40px;
      }
      .features-grid {
        max-width: 100%;
      }
    }
  `]
})
export class ReservationCenterComponent {}
