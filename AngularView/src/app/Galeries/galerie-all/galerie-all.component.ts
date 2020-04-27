import { Component, OnInit } from '@angular/core';
import '../../../assets/js/script.js';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GaleriesService } from '../galeries.service';
import { FormsModule } from '@angular/forms';
import { Especes } from 'src/app/Especes/especes.js';
import { Categories } from 'src/app/Genres/categories';
import { EspecesService } from 'src/app/Especes/especes.service.js';
import { CategoriesService } from 'src/app/Genres/categories.service';
import { DetailEspeceComponent } from 'src/app/Especes/detail-espece/detail-espece.component.js';
import { Pipe, PipeTransform } from '@angular/core';
import { Galeries } from '../galeries.js';
import { element } from 'protractor';


@Component({
  selector: 'app-galerie-all',
  templateUrl: './galerie-all.component.html',
  styleUrls: ['./galerie-all.component.scss']
})
export class GalerieAllComponent implements OnInit {



  category: number[] = [];
  pays: number[] = [];
  espece: string[] = [];
  especes = [];
  photos: Galeries[] = [];
  isModalOpen = false;
  modal = undefined;
  currentIndex: number;
  last = false;

  filteredPhotos: Galeries[] = [];

  amphiChecked = false;
  floreChecked = false;
  inverteChecked = false;
  mammiChecked = false;
  oiseauChecked = false;
  paysaChecked = false;
  reptiChecked = false;
  allCatChecked = false;

  franceChecked = false;
  marocChecked = false;
  costaChecked = false;
  madaChecked = false;
  allPaysChecked = false;

  searchText;

  constructor(
    private galeriesService: GaleriesService,
    private categoriesService: CategoriesService,
    private especesService: EspecesService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getPhotos();
    this.getEspeces();

  }

  getPhotos() {
    this.galeriesService.getPhotos().subscribe(photo => ((this.photos = photo)));
  }
  getEspeces(): void {
    this.especesService.getEspeces().subscribe(data => ((this.especes = data)));
  }

  openModal(i) {
    if (this.filteredPhotos.length > 0) {
      this.modal = this.filteredPhotos[i];
      this.currentIndex = i;
      this.isModalOpen = true;

    } else {
      this.modal = this.photos[i];
      this.currentIndex = i;
      this.isModalOpen = true;
    }
  }

  closeModal() {
    this.isModalOpen = false;
  }

  precedent() {
    const btnPrevious = document.getElementsByClassName('previous');
    this.currentIndex--;
    this.modal = this.photos[this.currentIndex]
  }

  suivant() {
    const btnNext = document.getElementsByClassName('next');
    this.currentIndex++;
    this.modal = this.photos[this.currentIndex];
  }

  getCheckedValue(category?: number, pays?: number) {
    if (category != undefined) {
      if (this.category.includes(category)) {
        let index = this.category.indexOf(category);
        this.category.splice(index, 1);
      } else {
        this.category.push(category)
      }
    }
    if (pays != undefined) {
      if (this.pays.includes(pays)) {
        let i = this.pays.indexOf(pays);
        this.pays.splice(i, 1);
      } else {
        this.pays.push(pays)
      }
    }
  }


  displayChecked(photo: Galeries) {

    for (let i = 0; i < photo.pays.length; i++) {
      if (this.pays.includes(photo.pays[i]) && this.category.length === 0) {
        return true;
      } else if (this.pays.includes(photo.pays[i]) && this.category.includes(photo.category)) {
        return true;
      }
    }
    if (this.pays.length === 0 && this.category.length === 0) {
      return true;
    } else if (this.category.includes(photo.category) && this.pays.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  onSearch(event) {
    const searchValue = event.target.value;
    this.filteredPhotos = [];
    for (let i = 0; i < this.photos.length; i++) {
      const elem = this.photos[i];
      if (elem.nom.toLowerCase().includes(searchValue.toLowerCase())) {
        this.filteredPhotos.push(elem);
      } else if (elem.nomLatin.toLowerCase().includes(searchValue.toLowerCase())) {
        this.filteredPhotos.push(elem);
      }
    }
  }
}

