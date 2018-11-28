import {Component} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'facebook-brands',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/social/facebook-brands.svg'));
        iconRegistry.addSvgIcon(
            'finstagram-brands',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/social/instagram-brands.svg'));
        iconRegistry.addSvgIcon(
            'telegram-plane-brands',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/social/telegram-plane-brands.svg'));
        iconRegistry.addSvgIcon(
            'youtube-brands',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/social/youtube-brands.svg'));
    }
}
