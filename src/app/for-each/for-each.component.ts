import { Component, OnInit } from '@angular/core';
import { hero } from './hero';

@Component({
  selector: 'app-for-each',
  templateUrl: './for-each.component.html',
  styleUrls: ['./for-each.component.css']
})
export class ForEachComponent implements OnInit {
  heroes = ['IronMan', 'Hulk', 'Black Widow', 'Thor'];
  data = [new hero(1, "who"), new hero(2, "how")]
  constructor() { }

  ngOnInit(): void {
  }

}
