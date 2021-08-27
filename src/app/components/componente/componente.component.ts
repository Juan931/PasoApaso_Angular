import { Template } from "@angular/compiler/src/render3/r3_ast";
import { Component } from "@angular/core";// esto nos permite crear nuetro componente

//Este es el archivo principal de nuestro componente

@Component({
    selector:"app-componente" ,//nos ayuda hacer referencia a nuestro componente 
   // template:"<!--<h1>hola mundo </h1>, nos ayuda acrear nuestro codigo html, este es el que se nos mostrara, al importar el componente-->"
    templateUrl: "./componente.component.html", //<!-- este se pone para tener un archivo aparte y traer todo de el , si necesidad de crear todo en el template-->"
    styleUrls:["./componente.component.css"] //acá usaremos los estilos de nuestro componente 
})
//debemos importar nuestro componente desde otro lugar, por lo que si miramos en index.html, aparecera app.modules,
//enconces es aca donde debemos desde el app.component.html traer nestro componente,  
export class componenteComponents{
 //acá utilizaremos toda la logica para hacer la pagina dinamica

}