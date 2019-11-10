import { Component, OnInit } from '@angular/core';
import { MymapService } from 'src/app/_services/mymap.service';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user.model';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];
  title = 'PatoWork';
  lat: any;
  lng: any;
  mapCenter: any;
  basemapType: any;
  mapZoomLevel: any;
  constructor(private mymapService: MymapService, private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {
    this.loadWithPoint();
  }

  async loadWithPoint() {
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        // Set our map properties
        // this.mapCenter = [-122.4194, 37.7749];
        this.mapCenter = [this.lng, this.lat];
        this.basemapType = 'streets';
        this.mapZoomLevel = 18;
      });
    }
  }
  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }
  onFeatureSelected(feature: string) {
    alert(feature);
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers()
  {
    this.userService.getAll().pipe(first()).subscribe(
      users=>{
        this.users = users;
      }
    );
  }
}
