
import { Component, EventEmitter, Input, Output } from "@angular/core"
// Basicamente para la comunicacion entre componentes padre e hijo se debe tener el selector en el componete padre
@Component({
    selector: "app-card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"]

})

export class CardComponent{
    //acá haremos comunicacion de componentes padre e hijo 
    @Input() textCard// por aca se envia del padre por medio de una vaialbe al hijo
    @Output() nuevoEvento =new EventEmitter<string>()// este sera nuestro evento lo utilizaremos porque queremos que se envia del hijo al padre, es importe escoger  EventEmitter desde angular core , para comunicar de un hijo siempre es atravez de eventos no es con una variable que si se puede hacer desde el padre.
    constructor(){
        this.textCard= "";
    }
    CambiarTextoPadre(valor:string):void{//acá enviamos un nuevo valor de tipo string
        this.nuevoEvento.emit(valor)//emit es un metodo propio de las clases evn emit, aca pondremos un valor que estamos generando, en el componente padre html debemos asociar el nuevo evento que seria nuevoEvnto
    }


}