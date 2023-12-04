import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DataService } from '../../services/api/data.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit{
  
  constructor(private dialog: DynamicDialogConfig, public ref: DynamicDialogRef, private service: DataService) { }
  
  delete(){
    this.service.eliminarpacientes({id: this.dialog.data.id}).subscribe((data: any) => {
      alert('Paciente eliminado correctamente.');
      this.ref.close({deleted: true});
    }, (error: any) => {
      console.error(error);
      alert('No se pudo eliminar el paciente.');
      this.ref.close({deleted: false});
    });
  }

  ngOnInit(): void {
      
  }
}
