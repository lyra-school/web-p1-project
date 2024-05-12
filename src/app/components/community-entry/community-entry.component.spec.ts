import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityEntryComponent } from './community-entry.component';

describe('CommunityEntryComponent', () => {
  let component: CommunityEntryComponent;
  let fixture: ComponentFixture<CommunityEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommunityEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
