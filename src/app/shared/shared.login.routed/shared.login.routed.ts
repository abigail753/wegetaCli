import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { SessionService } from '../../service/session.service';
import { IJwt } from '../../model/jwt.interface';

@Component({
  selector: 'app-login',
  templateUrl: './shared.login.routed.html',
  styleUrls: ['./shared.login.routed.css'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedLoginRoutedComponent implements OnInit {

  errorMessage: string | null = null;

  loginForm: FormGroup = new FormGroup({});

  constructor(
    private oLoginService: LoginService,
    private oSessionService: SessionService,
    private oRouter: Router
  ) {  
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });


  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.loginForm.valid) {
      this.oLoginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
        next: (token: string) => {
          console.log('Token recibido:', token);
          alert('Inicio de sesión exitoso');

          this.oSessionService.login(token);
          this.oRouter.navigate(['/']);

          //let parsedToken: IJwt;
          //parsedToken = this.oSessionService.parseJwt(token);
          //console.log('Token parseado:', parsedToken);
        },
        error: (error: HttpErrorResponse) => {
          console.error('Error al realizar la solicitud', error);
          alert('Correo o contraseña incorrectos');
          this.errorMessage = 'Correo o contraseña incorrectos';
        }
      });
    }
  }
  

  onAdmin(){
    this.loginForm.setValue({
      email: 'emailRosa3517@gmail.com',
      password: '3e5a1bdf4ff6d0356dabc6dafc94626602269bc9576de79a3ecab591398745b8'
    });
  }

  onAuditor(){
    this.loginForm.setValue({
      email: 'emailRosa3517@gmail.com',
      password: '3e5a1bdf4ff6d0356dabc6dafc94626602269bc9576de79a3ecab591398745b8'
    });
  }

  onContable(){
    this.loginForm.setValue({
      email: 'emailRosa3517@gmail.com',
      password: '3e5a1bdf4ff6d0356dabc6dafc94626602269bc9576de79a3ecab591398745b8'
    });
  }


}