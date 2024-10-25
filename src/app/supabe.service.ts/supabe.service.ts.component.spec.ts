import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupabeServiceTsComponent } from './supabe.service.ts.component';

describe('SupabeServiceTsComponent', () => {
  let component: SupabeServiceTsComponent;
  let fixture: ComponentFixture<SupabeServiceTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupabeServiceTsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupabeServiceTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
