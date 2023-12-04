import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/api/data.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent implements OnInit{
  protected data1: any[] = [];

  constructor(private _service: DataService) { }

  ngOnInit(): void {
    this._service.equipo().subscribe((data: any) => {
      this.data1 = data.data;
    }, (error: any) => {
      console.log(error);
    });
  }
}
