import { Injectable } from '@angular/core';
import { Pokemon } from '../Interfaces/Pokemon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  private url = "http://localhost:3000/pokemons?_limit=9";
  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get<Pokemon[]>(this.url);
  }

  getPokemonById(id : number){
    return this.http.get<Pokemon>(`${this.url}/${id}`);
  }

  addPokemon(pokemon: Pokemon){
    this.http.post<Pokemon>(this.url, pokemon);
  }

  updatePokemon(id : number, pokemon: Pokemon){
    this.http.put<Pokemon>(`${this.url}/${id}`, pokemon);
  }

  deletePokemon(id : number){
    this.http.delete<Pokemon>(`${this.url}/${id}`);
  }
}
