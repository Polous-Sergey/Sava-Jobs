import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StoreService {
    data = {
        succes: true,
        data: [{
            headline: 'iPhone 6s 16Gb',
            price: 7999,
            shortDescription: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from '
            + 'Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
            description: 'В середине 2017 был заменен аккумулятор (на данный момент 550 циклов) в UiPservice. ' +
            'На верхних и нижних частях корпуса видны незначительные потертости. Все остальные комплектующие в исправном состоянии.',
            conditions: [{
                name: 'дисплей',
                rating: 10
            }, {
                name: 'корпус',
                rating: 7
            }],
            totalRating: 8.5,
            equipment: [
                'силиконовый чехол на выбор',
                'Lightning-кабель',
                'Зарядное устройство'
            ]
        }, {
            headline: 'iPhone 7 (Product Red) 16Gb',
            price: 7999,
            shortDescription: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from '
            + 'Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
            description: 'В середине 2017 был заменен аккумулятор (на данный момент 550 циклов) в UiPservice. ' +
            'На верхних и нижних частях корпуса видны незначительные потертости. Все остальные комплектующие в исправном состоянии.',
            conditions: [{
                name: 'дисплей',
                rating: 10
            }, {
                name: 'корпус',
                rating: 7
            }],
            totalRating: 8.5,
            equipment: [
                'силиконовый чехол на выбор',
                'Lightning-кабель',
                'Зарядное устройство'
            ]
        }, {
            headline: 'iPhone 7 (Product Red) 16Gb',
            price: 7999,
            shortDescription: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from '
            + 'Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
            description: 'В середине 2017 был заменен аккумулятор (на данный момент 550 циклов) в UiPservice. ' +
            'На верхних и нижних частях корпуса видны незначительные потертости. Все остальные комплектующие в исправном состоянии.',
            conditions: [{
                name: 'дисплей',
                rating: 10
            }, {
                name: 'корпус',
                rating: 7
            }],
            totalRating: 8.5,
            equipment: [
                'силиконовый чехол на выбор',
                'Lightning-кабель',
                'Зарядное устройство'
            ]
        }, {
            headline: 'iPhone 7 (Product Red) 16Gb',
            price: 7999,
            shortDescription: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from '
            + 'Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
            description: 'В середине 2017 был заменен аккумулятор (на данный момент 550 циклов) в UiPservice. ' +
            'На верхних и нижних частях корпуса видны незначительные потертости. Все остальные комплектующие в исправном состоянии.',
            conditions: [{
                name: 'дисплей',
                rating: 10
            }, {
                name: 'корпус',
                rating: 7
            }],
            totalRating: 8.5,
            equipment: [
                'силиконовый чехол на выбор',
                'Lightning-кабель',
                'Зарядное устройство'
            ]
        }, {
            headline: 'iPhone 7 (Product Red) 16Gb',
            price: 7999,
            shortDescription: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from '
            + 'Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
            description: 'В середине 2017 был заменен аккумулятор (на данный момент 550 циклов) в UiPservice. ' +
            'На верхних и нижних частях корпуса видны незначительные потертости. Все остальные комплектующие в исправном состоянии.',
            conditions: [{
                name: 'дисплей',
                rating: 10
            }, {
                name: 'корпус',
                rating: 7
            }],
            totalRating: 8.5,
            equipment: [
                'силиконовый чехол на выбор',
                'Lightning-кабель',
                'Зарядное устройство'
            ]
        }, {
            headline: 'iPhone 7 (Product Red) 16Gb',
            price: 7999,
            shortDescription: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from '
            + 'Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
            description: 'В середине 2017 был заменен аккумулятор (на данный момент 550 циклов) в UiPservice. ' +
            'На верхних и нижних частях корпуса видны незначительные потертости. Все остальные комплектующие в исправном состоянии.',
            conditions: [{
                name: 'дисплей',
                rating: 10
            }, {
                name: 'корпус',
                rating: 7
            }],
            totalRating: 8.5,
            equipment: [
                'силиконовый чехол на выбор',
                'Lightning-кабель',
                'Зарядное устройство'
            ]
        }, {
            headline: 'iPhone 7 (Product Red) 16Gb',
            price: 7999,
            shortDescription: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from '
            + 'Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
            description: 'В середине 2017 был заменен аккумулятор (на данный момент 550 циклов) в UiPservice. ' +
            'На верхних и нижних частях корпуса видны незначительные потертости. Все остальные комплектующие в исправном состоянии.',
            conditions: [{
                name: 'дисплей',
                rating: 10
            }, {
                name: 'корпус',
                rating: 7
            }],
            totalRating: 8.5,
            equipment: [
                'силиконовый чехол на выбор',
                'Lightning-кабель',
                'Зарядное устройство'
            ]
        }]
    };

    constructor(private http: HttpClient) {
    }

    getAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
            }, 15);
        });
    }
}
