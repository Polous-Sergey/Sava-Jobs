import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {ServiceCenterService} from '../../services/service-center.service';
import {PriceList} from '../../shared/model/price-list';

@Component({
    selector: 'app-price-list',
    templateUrl: './price-list.component.html',
    styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {
    id: string;
    priceList: PriceList = new PriceList(null, 'iPhone', null, null, [], []);
    test = 'menu';
    data1 = [
        {
            text: 'Разбилось стекло',
            icon: 'ic2'
        },
        {
            text: 'Не работает дисплей',
            icon: 'ic3'
        },
        {
            text: 'Не работает тачскрин',
            icon: 'ic4'
        },
        {
            text: 'Поцарапался корпус',
            icon: 'ic2'
        },
        {
            text: 'Попала вода',
            icon: 'ic6'
        },
        {
            text: 'Быстро разряжается',
            icon: 'ic13'
        },
        {
            text: 'Не заряжается',
            icon: 'ic12'
        },
        {
            text: 'Не включается',
            icon: 'ic11'
        },
        {
            text: 'Не работает Wi-Fi',
            icon: 'ic14'
        },
        {
            text: 'Не ловит сеть',
            icon: 'ic15'
        },
        {
            text: 'Не работают кнопки',
            icon: 'ic5'
        },
        {
            text: 'Не работает камера',
            icon: 'ic9'
        },
        {
            text: 'Не работает звук',
            icon: 'ic7'
        },
        {
            text: 'Не работает микрофон',
            icon: 'ic8'
        },
        {
            text: 'Требует iTunes',
            icon: 'ic10'
        }
    ];

    constructor(private iconRegistry: MatIconRegistry,
                private sanitizer: DomSanitizer,
                private route: ActivatedRoute,
                private serviceCenterService: ServiceCenterService) {
        iconRegistry.addSvgIcon(
            'ic1',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_01.svg'));
        iconRegistry.addSvgIcon(
            'ic2',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_02.svg'));
        iconRegistry.addSvgIcon(
            'ic3',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_03.svg'));
        iconRegistry.addSvgIcon(
            'ic4',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_04.svg'));
        iconRegistry.addSvgIcon(
            'ic5',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_05.svg'));
        iconRegistry.addSvgIcon(
            'ic6',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_06.svg'));
        iconRegistry.addSvgIcon(
            'ic7',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_07.svg'));
        iconRegistry.addSvgIcon(
            'ic8',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_08.svg'));
        iconRegistry.addSvgIcon(
            'ic9',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_09.svg'));
        iconRegistry.addSvgIcon(
            'ic10',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_10.svg'));
        iconRegistry.addSvgIcon(
            'ic11',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_11.svg'));
        iconRegistry.addSvgIcon(
            'ic12',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_12.svg'));
        iconRegistry.addSvgIcon(
            'ic13',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_13.svg'));
        iconRegistry.addSvgIcon(
            'ic14',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_14.svg'));
        iconRegistry.addSvgIcon(
            'ic15',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icons/price-list/ic_15.svg'));
    }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.serviceCenterService.getPriceListById(this.id).subscribe((res: any) => {
            console.log(res);
            if (res.success) {
                this.priceList = res.data;
            }
        });
    }

}
