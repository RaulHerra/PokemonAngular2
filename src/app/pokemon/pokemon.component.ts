import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../services/pokemons.service';
import { Pokemon } from '../Interfaces/Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})
export class PokemonComponent implements OnInit{
  pokemons : Pokemon[] = []
  constructor(private pokemonsService : PokemonsService){}

  ngOnInit(): void {
    this.pokemonsService.getPokemons().subscribe({
      next: (pokemon) =>{this.pokemons=pokemon}
    });
  }
}
