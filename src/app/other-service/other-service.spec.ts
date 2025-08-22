import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherService } from './other-service';

describe('OtherService', () => {
  let component: OtherService;
  let fixture: ComponentFixture<OtherService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
