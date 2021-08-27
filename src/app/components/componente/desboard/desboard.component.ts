import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
 selector: "app-desboard",
 templateUrl: "./desboard.component.html",
 styleUrls: ["./desboard.component.css"]
})
//interpolacion: desde el archivo ts es donde vamos a enviar las variables a nuestro componente html
export class DesboarComponent {
    nombre: string;

    constructor(){
        this.nombre= "Juan Medina"; //aca estamos creando nuestra variable despues vamos al html del componente
    }
    getName():string{
        return this.nombre=" juan medina 2"
    }

    mult(num1:number, num2:number) {
        return num1 * num2

    }
}