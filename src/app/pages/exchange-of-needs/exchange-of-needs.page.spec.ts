import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExchangeOfNeedsPage } from './exchange-of-needs.page';

describe('ExchangeOfNeedsPage', () => {
  let component: ExchangeOfNeedsPage;
  let fixture: ComponentFixture<ExchangeOfNeedsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeOfNeedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
