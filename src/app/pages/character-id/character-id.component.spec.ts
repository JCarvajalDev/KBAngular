import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterIdComponent } from './character-id.component';

describe('CharacterIdComponent', () => {
  let component: CharacterIdComponent;
  let fixture: ComponentFixture<CharacterIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
