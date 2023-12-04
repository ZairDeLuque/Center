import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/api/data.service';

@Component({
  selector: 'app-donativos',
  templateUrl: './donativos.component.html',
  styleUrl: './donativos.component.css'
})
export class DonativosComponent implements OnInit{
  
  protected donativos: any[] = []

  constructor(private _services: DataService) { }

  ngOnInit(): void {
    this._services.donativos().subscribe((data: any) => {
      this.donativos = data.data;
    });
  }
}
