import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './footer/footer.component';
import {CounterComponent} from './counter/counter.component';
import {EmptyComponent} from './empty/empty.component';
import {LeftmenuComponent} from './leftmenu/leftmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    EmptyComponent,
    LeftmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
