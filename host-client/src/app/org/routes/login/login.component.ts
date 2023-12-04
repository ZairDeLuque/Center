import { Component } from '@angular/core';
import { CredentialsService } from '../../services/api/credentials.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent {
  //Form
  protected formLogin: FormGroup;

  constructor(private _credentials: CredentialsService, private _builder: FormBuilder, private _message: MessageService, private r: Router) {
    this.formLogin = this._builder.group({
      id: ['', [Validators.required]]
    })
  }

  login(): void {
    const packet = { id: this.formLogin.controls['id'].value };

    this._credentials.login(packet).subscribe((data: any) => {
      this._message.add({severity: 'success', summary: 'Success', detail: 'Login successfully'});
      localStorage.setItem('loggedIn', 'true');
      this.r.navigateByUrl('/home');
      this.r
    }, (error: any) => {
      this._message.add({severity: 'error', summary: 'Ocurrio un error', detail: error.error.message});
    })
  }
}
