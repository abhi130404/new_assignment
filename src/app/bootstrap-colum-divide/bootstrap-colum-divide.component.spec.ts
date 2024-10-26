import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapColumDivideComponent } from './bootstrap-colum-divide.component';

describe('BootstrapColumDivideComponent', () => {
  let component: BootstrapColumDivideComponent;
  let fixture: ComponentFixture<BootstrapColumDivideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootstrapColumDivideComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BootstrapColumDivideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
