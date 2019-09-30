import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private KeepAfterNavigationChange = false;
    constructor(private router: Router) {
        //clear alert message on route change
        router.events.subscribe(event => {
            if (this.KeepAfterNavigationChange) {
                //only keep for a single location change
                this.KeepAfterNavigationChange = false;
            }
            else {
                //clear alert
                this.subject.next();
            }
        });
    }

    success(message: string, KeepAfterNavigationChange = false) {
        this.KeepAfterNavigationChange = KeepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message })
    }

    error(message: string, KeepAfterNavigationChange = false) {
        this.KeepAfterNavigationChange = KeepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}