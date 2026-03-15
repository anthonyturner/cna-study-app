import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Flashcards } from './flashcards';

describe('Flashcards', () => {
  let component: Flashcards;
  let fixture: ComponentFixture<Flashcards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Flashcards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Flashcards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
