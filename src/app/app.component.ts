import { Component } from '@angular/core';
import { ApiService } from './http/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'errorInterceptor';

  constructor(private api: ApiService){}

  get401(){
    this.api.get401().subscribe();
  }
  get403(){
    this.api.get403().subscribe();
  }
  get404(){
    this.api.get404().subscribe();
  }
  get503(){
    this.api.get503().subscribe();
  }
}
