import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/api/data.service';

@Component({
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.component.html',
  styleUrl: './procedimientos.component.css'
})
export class ProcedimientosComponent implements OnInit{
  protected data1: any[] = [];

  constructor(private _service: DataService) { }

  ngOnInit(): void {
    this._service.procedimientos().subscribe((data: any) => {
      this.data1 = data.data;
    }, (error: any) => {
      console.log(error);
    });
  }
}
