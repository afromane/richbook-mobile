import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExchangeOfPotentialsPage } from './exchange-of-potentials.page';

describe('ExchangeOfPotentialsPage', () => {
  let component: ExchangeOfPotentialsPage;
  let fixture: ComponentFixture<ExchangeOfPotentialsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeOfPotentialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
