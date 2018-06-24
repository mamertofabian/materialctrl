import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    currentUrl: string;
    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    panelOpenState: boolean = false;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router:Router) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
