import { TestBed } from '@angular/core/testing';
import { CounterComponent } from './counter.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CounterComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AdminPage'`, () => {
    const fixture = TestBed.createComponent(CounterComponent);
    const app = fixture.componentInstance;
    expect(app.counter).toEqual('Счетчик');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('AdminPage app is running!');
  });
});
