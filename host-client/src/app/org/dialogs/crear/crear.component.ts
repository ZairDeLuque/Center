import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/api/data.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

  protected formCurrent: FormGroup;

  constructor(private _builder: FormBuilder, private _service: DataService, private _config: DynamicDialogRef, private _info: DynamicDialogConfig) {
    this.formCurrent = this._builder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      age: ['', [Validators.required]],
    });
  }

  onSubmit(): void{
    const packet = { nombre: this.formCurrent.controls['name'].value, apellido: this.formCurrent.controls['lastname'].value, edad: this.formCurrent.controls['age'].value, id: this._info.data.id };

    this._service.editarpacientes(packet).subscribe((data: any) => {
      alert('Paciente editado correctamente.');
      this._config.close({editable: true});
    }, (error: any) => {
      console.error(error);
      alert('No se pudo editar el paciente.');
      this._config.close({editable: false});
    });
  }
}
