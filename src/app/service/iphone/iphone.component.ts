import {Component, OnInit} from '@angular/core';
import {ServiceCenterService} from '../../services/service-center.service';

@Component({
    selector: 'app-iphone',
    templateUrl: './iphone.component.html',
    styleUrls: ['./iphone.component.scss']
})
export class IphoneComponent implements OnInit {
    iphones = [];


    constructor(private serviceCenterService: ServiceCenterService) {
    }

    ngOnInit() {
        this.serviceCenterService.getIphonePriceList().subscribe((res: any) => {
            if (res.success) {
                this.iphones = res.data;
            }
        });
    }

}
