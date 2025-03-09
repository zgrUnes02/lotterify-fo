import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {
  comingSoonImage: string = '../../assets/coming-soon-images/lotterify-logo.PNG';
  
  constructor() {}

  ngOnInit(): void {
      
  }
}
