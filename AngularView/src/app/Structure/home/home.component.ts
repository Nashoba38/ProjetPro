import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Découvrez la diversité de la faune autour du globe !';

  constructor() { }

  ngOnInit() {}

}
