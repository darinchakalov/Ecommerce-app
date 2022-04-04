import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutModule } from './about/about.module';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './+store';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['global'], rehydrate: true })(reducer);
}

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

const metaReducers: Array<MetaReducer<any, any>> = [
  debug,
  localStorageSyncReducer,
];

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HomeModule,
    AboutModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
