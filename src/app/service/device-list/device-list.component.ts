import {Component, OnInit} from '@angular/core';
import {ServiceCenterService} from '../../services/service-center.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-device-list',
    templateUrl: './device-list.component.html',
    styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent implements OnInit {
    devices = [];
    type: string;
    deviceName: string;

    constructor(private serviceCenterService: ServiceCenterService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.type = this.route.snapshot.paramMap.get('type');
        switch (this.type) {
            case 'iphone':
                this.deviceName = 'iPhone';
                break;
            case 'ipad':
                this.deviceName = 'iPad';
                break;
            case 'watch':
                this.deviceName = 'Apple Watch';
                break;
            case 'mac':
                this.deviceName = 'MacBook';
        }

        this.serviceCenterService.getDevices(this.type).subscribe((res: any) => {
            if (res.success) {
                this.devices = res.data;
            }
        });
    }
}
