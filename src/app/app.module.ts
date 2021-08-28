import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { componenteComponents } from './components/componente/componente.component';//Acá ya lo importamos, tambien debemos agregarlo a las declaraciones
import { CardComponent } from './components/componente/desboard/card/card.component';
import { DesboarComponent } from './components/componente/desboard/desboard.component';
import { FooterComponent } from './components/componente/footer/footer.component';
import { NavbarComponent } from './components/componente/navbar/navbar.component';
@NgModule({
  declarations: [ //componente que usa angular para inicializar la aplicación
    AppComponent,
    componenteComponents,// aca esta el componente que importamos
    NavbarComponent,
    DesboarComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
