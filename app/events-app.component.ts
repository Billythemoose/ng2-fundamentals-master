import { Component } from '@angular/core'


@Component({
    selector: 'events-app',
    template: `
    <nav-bar></nav-bar>
    <!-- changed for routing <events-list></events-list>-->
    <router-outlet></router-outlet>
    `
})

export class EventsAppComponent {

}