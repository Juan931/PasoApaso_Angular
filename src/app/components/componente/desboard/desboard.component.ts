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
    texto2: string;
    texto3:string;
    
    title:boolean | string;
    constructor(){
        this.nombre= "Juan Medina"; //aca estamos creando nuestra variable despues vamos al html del componente
        this.img="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vaporwave-4K-Wallpapers.jpg/800px-Vaporwave-4K-Wallpapers.jpg"
        this.texto="Escribe aqui"; //esto es porperting binding
        this.texto2= "Este es un componente hijo"
        this.title="Comunicacion entre componentes";
        this.texto3="Este es un componente padre"

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
   
    cambiarTexto(nuevoTexto:string):void{//debemos recibir un evento el parametro que estamos enviando mediante el evento
        this.texto3=nuevoTexto

    }
}