import { Component } from '@angular/core';
import appInfo from '../assets/app-info.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'devOpsFrontend';
  version: string = appInfo.version
}
