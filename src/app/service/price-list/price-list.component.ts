import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
  data1 = [
      'Разбилось стекло',
      'Не работает дисплей',
      'Не работает тачскрин',
      'Поцарапался корпус',
      'Попала вода',
      'Быстро разряжается',
      'Не заряжается',
      'Не включается',
      'Не работает Wi-Fi',
      'Не ловит сеть',
      'Не работают кнопки',
      'Не работает камера',
      'Не работает звук',
      'Не работает микрофон',
      'Требует iTunes',
  ];

  constructor() { }

  ngOnInit() {
  }

}
