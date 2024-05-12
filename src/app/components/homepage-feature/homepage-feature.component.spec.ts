import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFeatureComponent } from './homepage-feature.component';

describe('HomepageFeatureComponent', () => {
  let component: HomepageFeatureComponent;
  let fixture: ComponentFixture<HomepageFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomepageFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
