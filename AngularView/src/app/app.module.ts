import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeEspecesComponent } from './Especes/liste-especes/liste-especes.component';
import { FooterComponent } from './Structure/footer/footer.component';
import { MenuComponent } from './Structure/menu/menu.component';
import { HomeComponent } from './Structure/home/home.component';
import { DiscoverComponent } from './discover/discover.component';
import { DetailEspeceComponent } from './Especes/detail-espece/detail-espece.component';
import { ReptilesComponent } from './Genres/reptiles/reptiles.component';
import { ArticlesComponent } from './Articles/articles/articles.component';
import { GalerieReptilesComponent } from './Galeries/galerie-reptiles/galerie-reptiles.component';
import { GalerieOiseauxComponent } from './Galeries/galerie-oiseaux/galerie-oiseaux.component';
import { GalerieMammiferesComponent } from './Galeries/galerie-mammiferes/galerie-mammiferes.component';
import { GalerieInvertebresComponent } from './Galeries/galerie-invertebres/galerie-invertebres.component';
import { GalerieFloreComponent } from './Galeries/galerie-flore/galerie-flore.component';
import { GaleriePaysagesComponent } from './Galeries/galerie-paysages/galerie-paysages.component';
import { GalerieAmphibiensComponent } from './Galeries/galerie-amphibiens/galerie-amphibiens.component';
import { GalerieAllComponent } from './Galeries/galerie-all/galerie-all.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeEspecesComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    DiscoverComponent,
    DetailEspeceComponent,
    ReptilesComponent,
    ArticlesComponent,
    GalerieReptilesComponent,
    GalerieOiseauxComponent,
    GalerieMammiferesComponent,
    GalerieInvertebresComponent,
    GalerieFloreComponent,
    GaleriePaysagesComponent,
    GalerieAmphibiensComponent,
    GalerieAllComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
