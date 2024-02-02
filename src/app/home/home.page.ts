// Importa el servicio APIServiceService y el decorador Component desde los módulos de Angular.
import { PokeapiService } from './../Services/apiservice.service';
import { Component } from '@angular/core';


// Define el componente HomePage con su selector, plantilla y estilos.
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

pokemon:any;

pokemon2:any;
item2:any;
name: any;

item:any;
id: any;
idItem: any;
idName: any;



  // Constructor del componente que recibe una instancia del servicio APIServiceService.
  constructor(private api: PokeapiService) {}

  // Método para obtener datos de un Pokémon dado su ID.
  getPokemonDataID(id: number) {
    try {
        // Declara una variable local para almacenar el nombre del Pokémon.

      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getPokemonID(id).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.pokemon = response;
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.pokemon);
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }
  getPokemonDataName(name: string) {
    try {
        // Declara una variable local para almacenar el nombre del Pokémon.

      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getPokemonName(name).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.pokemon2 = response;
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.pokemon2);
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }


  getItemDataID(id: number) {
    try {
        // Declara una variable local para almacenar el nombre del Pokémon.

      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getItemID(id).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.item = response;
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.item);
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }

  getItemDataName(name: string) {
    try {
        // Declara una variable local para almacenar el nombre del Pokémon.

      // Llama al método getPokemon del servicio y se suscribe al observable.
      this.api.getItemName(name).subscribe((response => {
        // Dentro de la función de éxito de la suscripción:
        // Asigna el nombre del Pokémon a la variable local 'pokemon'.
        this.item2 = response;
        // Imprime el nombre del Pokémon en la consola.
        console.log(this.item2);
      }));
    } catch (error) {
      // Captura cualquier error que pueda ocurrir durante la suscripción y lo imprime en la consola.
      console.log(error);
    }
  }

  

 

  

  
}