import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  //'./app.component.html'
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ang Test';
  myWelcome: string = 'Angular 17 Demo';
  myName: string = 'Aisha Qalmouz';
  myAge: number = 23;
  myDate: Date = new Date();
  myGames: string[] = ['RE4', 'We Happy Few', 'God OF war'];
}
