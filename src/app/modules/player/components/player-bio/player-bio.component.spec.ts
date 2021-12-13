import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerBioComponent } from './player-bio.component';

describe('PlayerBioComponent', () => {
  let component: PlayerBioComponent;
  let fixture: ComponentFixture<PlayerBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
