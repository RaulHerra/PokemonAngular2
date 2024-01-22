import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{path:'', component:IndexComponent},
{path:'Pokemons', component:PokemonComponent, children: [
    {path:':pokemonId', component:DetailsComponent}
]},
{path:'**', component:NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {bindToComponentInputs:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
