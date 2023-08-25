import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OldPage } from './old.page';

describe('OldPage', () => {
  let component: OldPage;
  let fixture: ComponentFixture<OldPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
