import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { ResponseLink } from 'src/app/models/pokemon/response-link';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {

  listPokemons$ = new Subject<ResponseLink[]>();

  urlSpriteFront: string = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

  constructor(private route: ActivatedRoute,
              private PokemonService: PokeApiService) { }

  ngOnInit(): void {
    this.PokemonService
    .getListPokemons(undefined, 0, 898)
    .subscribe(
      (response) => {
      this.listPokemons$.next(response.results);
    }
    );
  }

}
