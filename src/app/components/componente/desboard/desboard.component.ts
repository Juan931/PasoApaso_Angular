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
    img: string;
    texto: string;
    title:boolean | string;
    constructor(){
        this.nombre= "Juan Medina"; //aca estamos creando nuestra variable despues vamos al html del componente
        this.img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vaporwave-4K-Wallpapers.jpg/800px-Vaporwave-4K-Wallpapers.jpg"
        this.texto="Escribe aqui"; //esto es porperting binding
        this.title="esto es event bindig da click para probar";

    }
    getName():string{
        return this.nombre=" juan medina 2"
    }


    mult(num1:number, num2:number) {
        return num1 * num2

    }

    cambiarNombre():void {
      this.title = "probando event binding"; // esto es event bindig
    }
   
}