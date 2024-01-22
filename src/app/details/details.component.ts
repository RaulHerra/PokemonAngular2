import { Component } from '@angular/core';
import { Pokemon } from '../Interfaces/Pokemon';
import { PokemonsService } from '../services/pokemons.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent {
  pokemon!: Pokemon 
  pokemonId!: number;
  constructor(private pokemonsService : PokemonsService){}

  ngOnInit(): void {
    this.pokemonsService.getPokemonById(this.pokemonId).subscribe({
      next: (pokemon) =>{this.pokemon=pokemon}
    });
  }
}
