import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-container container">
      <div class="search-tabs">
        <button
          [class.active]="tripType === 'oneWay'"
          (click)="setTripType('oneWay')"
        >
          ONE WAY
        </button>
        <button
          [class.active]="tripType === 'roundTrip'"
          (click)="setTripType('roundTrip')"
        >
          Round Trip
        </button>
        <button
          [class.active]="tripType === 'multiCity'"
          (click)="setTripType('multiCity')"
        >
          Multi-City
        </button>
      </div>

      <div class="search-box">
        <div class="search-fields">

          <div class="field-item">
            <span class="field-icon"><i class="fa-solid fa-plane-departure"></i></span>
            <div class="field-info">
              <label>From</label>
              <input
                type="text"
                class="field-input"
                [(ngModel)]="searchForm.from"
                placeholder="City or Airport"
              >
            </div>
          </div>

          <button class="swap-btn" (click)="swapLocations()" title="Swap locations">
            <i class="fa-solid fa-right-left"></i>
          </button>

          <div class="field-item">
            <span class="field-icon"><i class="fa-solid fa-plane-arrival"></i></span>
            <div class="field-info">
              <label>To</label>
              <input
                type="text"
                class="field-input"
                [(ngModel)]="searchForm.to"
                placeholder="City or Airport"
              >
            </div>
          </div>

          <div class="v-divider"></div>

          <div class="field-item date-field">
            <span class="field-icon"><i class="fa-solid fa-calendar-days"></i></span>
            <div class="field-info">
              <label>Check In</label>
              <input
                type="date"
                class="field-input date-input"
                [(ngModel)]="searchForm.checkIn"
                [min]="todayStr"
              >
            </div>
          </div>

          <div class="h-arrow"><i class="fa-solid fa-arrow-right"></i></div>

          <div class="field-item date-field">
            <span class="field-icon"><i class="fa-solid fa-calendar-days"></i></span>
            <div class="field-info">
              <label>Check Out</label>
              <input
                type="date"
                class="field-input date-input"
                [(ngModel)]="searchForm.checkOut"
                [min]="searchForm.checkIn || todayStr"
              >
            </div>
          </div>

          <div class="v-divider"></div>

          <div class="field-item passenger-field" (click)="togglePassengerDropdown($event)">
            <span class="field-icon"><i class="fa-solid fa-user-group"></i></span>
            <div class="field-info">
              <label>Passenger</label>
              <div class="field-value">{{ passengerSummary }}</div>
            </div>
            <span class="arrow-down" [class.open]="showPassengerDropdown">
              <i class="fa-solid fa-chevron-down"></i>
            </span>

            @if (showPassengerDropdown) {
              <div class="passenger-dropdown" (click)="$event.stopPropagation()">
                <div class="passenger-row">
                  <div class="pax-label">
                    <span class="pax-type">Adults</span>
                    <span class="pax-desc">12+ years</span>
                  </div>
                  <div class="counter">
                    <button class="counter-btn" (click)="decrement('adults')">-</button>
                    <span class="counter-val">{{ passengers.adults }}</span>
                    <button class="counter-btn" (click)="increment('adults')">+</button>
                  </div>
                </div>
                <div class="passenger-row">
                  <div class="pax-label">
                    <span class="pax-type">Children</span>
                    <span class="pax-desc">2–11 years</span>
                  </div>
                  <div class="counter">
                    <button class="counter-btn" (click)="decrement('children')">-</button>
                    <span class="counter-val">{{ passengers.children }}</span>
                    <button class="counter-btn" (click)="increment('children')">+</button>
                  </div>
                </div>
                <div class="passenger-row">
                  <div class="pax-label">
                    <span class="pax-type">Infants</span>
                    <span class="pax-desc">Under 2 years</span>
                  </div>
                  <div class="counter">
                    <button class="counter-btn" (click)="decrement('infants')">-</button>
                    <span class="counter-val">{{ passengers.infants }}</span>
                    <button class="counter-btn" (click)="increment('infants')">+</button>
                  </div>
                </div>
                <button class="apply-btn" (click)="applyPassengers()">Done</button>
              </div>
            }
          </div>
          <button class="search-btn-large" (click)="onSearch()">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .search-container {
      margin-top: -60px;
      position: relative;
      z-index: 100;
      background: transparent;
    }

    .search-tabs {
      display: flex;
      align-items: flex-end;
      gap: 2px;
      margin-bottom: 0;
      background: transparent;
    }

    .search-tabs button {
      background: transparent;
      color: rgba(255, 255, 255, 0.9);
      padding: 10px 22px;
      border-radius: 6px 6px 0 0;
      font-weight: 600;
      font-size: 13px;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
      letter-spacing: 0.3px;
      line-height: 1;
    }

    .search-tabs button.active {
      background: #003580;
      color: white;
    }

    .search-tabs button:not(.active):hover {
      color: white;
      background: rgba(255, 255, 255, 0.12);
    }

    .search-box {
      background: white;
      padding: 14px 16px;
      border-radius: 0 12px 12px 12px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
      border: 1px solid #dde5f0;
    }

    .search-fields {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .field-item {
      flex: 1;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 10px;
      border: 1px solid #eee;
      border-radius: 8px;
      cursor: pointer;
      transition: border-color 0.2s;
      min-width: 0;
      position: relative;
    }

    .field-item:hover {
      border-color: #003580;
    }

    .field-icon {
      font-size: 15px;
      color: #003580;
      flex-shrink: 0;
      width: 18px;
      text-align: center;
    }

    .field-info {
      display: flex;
      flex-direction: column;
      min-width: 0;
      flex: 1;
    }

    .field-info label {
      font-size: 10px;
      color: #aaa;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      cursor: pointer;
      pointer-events: none;
    }

    .field-input {
      border: none;
      outline: none;
      font-size: 13px;
      font-weight: 700;
      color: #1a1a1a;
      font-family: 'Inter', sans-serif;
      background: transparent;
      width: 100%;
      padding: 0;
      cursor: pointer;
    }

    .field-input::placeholder {
      color: #bbb;
      font-weight: 400;
    }

    .date-input {
      font-size: 12px;
      font-weight: 700;
      color: #1a1a1a;
    }

    .date-input::-webkit-calendar-picker-indicator {
      opacity: 0;
      position: absolute;
      right: 0;
      width: 100%;
      cursor: pointer;
    }

    .field-value {
      font-size: 12px;
      font-weight: 700;
      color: #1a1a1a;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .swap-btn {
      color: #003580;
      font-size: 15px;
      cursor: pointer;
      padding: 8px;
      border-radius: 50%;
      background: #eef2ff;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      transition: all 0.2s ease;
    }

    .swap-btn:hover {
      background: #003580;
      color: white;
      transform: rotate(180deg);
    }

    .v-divider {
      width: 1px;
      height: 38px;
      background: #e8e8e8;
      flex-shrink: 0;
    }

    .h-arrow {
      color: #bbb;
      font-size: 12px;
      flex-shrink: 0;
    }

    .passenger-field {
      flex: 1.6;
    }

    .arrow-down {
      margin-left: auto;
      font-size: 11px;
      color: #999;
      flex-shrink: 0;
      transition: transform 0.2s ease;
    }

    .arrow-down.open {
      transform: rotate(180deg);
    }

    .passenger-dropdown {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.15);
      padding: 16px;
      z-index: 999;
      min-width: 260px;
      border: 1px solid #eee;
    }

    .passenger-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #f0f0f0;
    }

    .passenger-row:last-of-type {
      border-bottom: none;
    }

    .pax-label {
      display: flex;
      flex-direction: column;
    }

    .pax-type {
      font-size: 14px;
      font-weight: 600;
      color: #1a1a1a;
    }

    .pax-desc {
      font-size: 11px;
      color: #aaa;
    }

    .counter {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .counter-btn {
      width: 30px;
      height: 30px;
      border: 1px solid #ddd;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: #003580;
      cursor: pointer;
      background: white;
      font-weight: 600;
      transition: all 0.2s;
    }

    .counter-btn:hover {
      background: #003580;
      color: white;
      border-color: #003580;
    }

    .counter-val {
      font-size: 15px;
      font-weight: 700;
      color: #1a1a1a;
      min-width: 20px;
      text-align: center;
    }

    .apply-btn {
      width: 100%;
      margin-top: 14px;
      padding: 10px;
      background: #003580;
      color: white;
      border-radius: 8px;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
      border: none;
    }

    .apply-btn:hover {
      background: #002460;
    }

    .search-btn-large {
      background: #003580;
      color: white;
      width: 56px;
      height: 52px;
      border-radius: 8px;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .search-btn-large:hover {
      background: #002460;
      transform: scale(1.05);
    }

    @media (max-width: 1100px) {
      .search-fields {
        flex-wrap: wrap;
        gap: 8px;
      }
      .field-item {
        flex: 1 1 calc(33% - 10px);
        min-width: 160px;
      }
      .passenger-field {
        flex: 1 1 100%;
      }
      .v-divider, .h-arrow {
        display: none;
      }
      .swap-btn {
        flex-shrink: 0;
      }
      .search-btn-large {
        width: 100%;
        height: 48px;
        margin-top: 4px;
      }
    }

    @media (max-width: 768px) {
      .search-container {
        margin-top: -30px;
      }
      .search-box {
        border-radius: 0 8px 8px 8px;
        padding: 12px;
      }
      .search-tabs {
        overflow-x: auto;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        gap: 0;
      }
      .search-tabs button {
        flex: 0 0 auto;
        padding: 8px 14px;
        font-size: 12px;
      }
      .search-fields {
        flex-direction: column;
      }
      .field-item {
        width: 100%;
        min-width: 100%;
        flex: 1 1 100%;
      }
      .swap-btn {
        transform: rotate(90deg);
        align-self: center;
      }
      .swap-btn:hover {
        transform: rotate(90deg) rotate(180deg);
      }
    }
  `]
})
export class SearchFormComponent implements OnInit {
  tripType: 'oneWay' | 'roundTrip' | 'multiCity' = 'oneWay';
  todayStr = '';
  showPassengerDropdown = false;

  searchForm = {
    from: 'Karachi, Pakistan',
    to: 'United Kingdom',
    checkIn: '',
    checkOut: ''
  };

  passengers = {
    adults: 2,
    children: 3,
    infants: 1
  };

  get passengerSummary(): string {
    const parts: string[] = [];
    if (this.passengers.infants > 0) parts.push(`${this.passengers.infants} Infant${this.passengers.infants > 1 ? 's' : ''}`);
    if (this.passengers.adults > 0) parts.push(`${this.passengers.adults} Adult${this.passengers.adults > 1 ? 's' : ''}`);
    if (this.passengers.children > 0) parts.push(`${this.passengers.children} Child${this.passengers.children > 1 ? 'ren' : ''}`);
    return parts.length > 0 ? parts.join(', ') : 'Add Passengers';
  }

  ngOnInit() {
    const today = new Date();
    this.todayStr = this.formatDateForInput(today);

    const checkIn = new Date(today);
    checkIn.setDate(today.getDate() + 25);
    this.searchForm.checkIn = this.formatDateForInput(checkIn);

    const checkOut = new Date(checkIn);
    checkOut.setDate(checkIn.getDate() + 1);
    this.searchForm.checkOut = this.formatDateForInput(checkOut);
  }

  formatDateForInput(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  setTripType(type: 'oneWay' | 'roundTrip' | 'multiCity') {
    this.tripType = type;
  }

  swapLocations() {
    const temp = this.searchForm.from;
    this.searchForm.from = this.searchForm.to;
    this.searchForm.to = temp;
  }

  togglePassengerDropdown(event: Event) {
    event.stopPropagation();
    this.showPassengerDropdown = !this.showPassengerDropdown;
  }

  increment(type: 'adults' | 'children' | 'infants') {
    this.passengers[type]++;
  }

  decrement(type: 'adults' | 'children' | 'infants') {
    if (type === 'adults' && this.passengers[type] <= 1) return;
    if (this.passengers[type] > 0) this.passengers[type]--;
  }

  applyPassengers() {
    this.showPassengerDropdown = false;
  }

  onSearch() {
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.showPassengerDropdown = false;
  }
}
