import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { SessionService } from "../service/session.service";
import { UsuarioService } from "../service/usuario.service";
import { IUsuario } from "../model/usuario.interface";

@Injectable({
    providedIn: 'root'
})

export class ContableGuard implements CanActivate {

    constructor(private oSessionService: SessionService,
        private oUsuarioService: UsuarioService,
        private oRouter: Router) { }


    canActivate(): boolean {
        if (this.oSessionService.isSessionActive()) {
            let email: string = this.oSessionService.getSessionEmail();
            // llamar al servidor para obtener el rol del usuario
            this.oUsuarioService.getUsuarioByEmail(email).subscribe({
                next: (data: IUsuario) => {
                    //this.oUsuario = data;
                    return data.tipousuario.descripcion === 'Contable';
                },
                error: (err) => {
                    console.error('Error al obtener los datos del Usuario', err);
                }
            });

            return true;

        } else {
            return false;
        }
    }

}






