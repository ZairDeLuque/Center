import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/api/data.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent implements OnInit{
  
  protected data1: any[] = [];

  constructor(private _service: DataService) { }

  ngOnInit(): void {
    this._service.personal().subscribe((data: any) => {
      this.data1 = data.data;
    }, (error: any) => {
      console.error(error);
      alert('No se pudo obtener la información del personal.');
    });
  }
}
