import { TestBed } from '@angular/core/testing';
import { EmptyComponent } from './empty.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EmptyComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EmptyComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AdminPage'`, () => {
    const fixture = TestBed.createComponent(EmptyComponent);
    const app = fixture.componentInstance;
    expect(app.counter).toEqual('Счетчик');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EmptyComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('AdminPage app is running!');
  });
});
