import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeleaderboardComponent } from './homeleaderboard.component';

describe('HomeleaderboardComponent', () => {
  let component: HomeleaderboardComponent;
  let fixture: ComponentFixture<HomeleaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeleaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeleaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
