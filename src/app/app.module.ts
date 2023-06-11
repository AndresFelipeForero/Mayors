import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';


//Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { PastMayorsComponent } from './pages/past-mayors/past-mayors.component';
import { CurrentMayorsComponent } from './pages/current-mayors/current-mayors.component';
import { LoginComponent } from './pages/login/login.component';
import { CurrentCardComponent } from './components/current-card/current-card.component';
import { PastCardComponent } from './components/past-card/past-card.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PastMayorsComponent,
    CurrentMayorsComponent,
    LoginComponent,
    CurrentCardComponent,
    PastCardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
