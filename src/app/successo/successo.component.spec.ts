import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessoComponent } from './successo.component';

describe('SuccessoComponent', () => {
  let component: SuccessoComponent;
  let fixture: ComponentFixture<SuccessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
