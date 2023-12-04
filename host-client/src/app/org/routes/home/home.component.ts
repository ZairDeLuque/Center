import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/api/data.service';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CrearComponent } from '../../dialogs/crear/crear.component';
import { EliminarComponent } from '../../dialogs/eliminar/eliminar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [MessageService, DialogService]
})
export class HomeComponent implements OnInit{
  protected data1: any[] = [];

  protected ref: DynamicDialogRef | undefined;
  protected ref2: DynamicDialogRef | undefined;

  protected stats1: any;
  protected stats2: any;
  protected stats3: number = 0;

  protected data2: any[] = [];

  constructor(private _data: DataService, public _dialog: DialogService, private _message: MessageService) { }

  editar(id: any){
    this.ref = this._dialog.open(CrearComponent, {
      header: 'Editar información',
      width: '70%',
      data: {
        id: id
      }
    });

    this.ref.onClose.subscribe((data: any) => {
      if(data.editable === true){
        window.location.reload();
      }
    });
  }

  eliminar(id: any){
    this.ref2 = this._dialog.open(EliminarComponent, {
      header: 'Eliminar información',
      width: '70%',
      data: {
        id: id
      }
    });

    this.ref2.onClose.subscribe((data: any) => {
      if(data.deleted === true){
        window.location.reload();
      }
    });
  }

  ngOnInit(): void {
    this._data.pacientes().subscribe((data: any) => {
      this.data1 = data.data;
    }, (error: any) => {
      this._message.add({severity: 'error', summary: 'Error', detail: 'No se pudo obtener la lista de pacientes.'});
    });

    this._data.presupuestos().subscribe((data: any) => {
      this.data2 = data.data;

      for(let i = 0; i < data.data.length; i++){
        this.stats3 += Number(data.data[i].monto);
      }
    });
  }
}
