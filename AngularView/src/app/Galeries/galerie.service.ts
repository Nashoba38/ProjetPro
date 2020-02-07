import { Especes } from './../Especes/especes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GalerieService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Especes[]> {
    const photos = this.http.get<Especes[]>('http://localhost:8000/api/EspecesDetails');
    return photos;
  }
}
