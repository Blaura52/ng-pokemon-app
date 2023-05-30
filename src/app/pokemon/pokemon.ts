export class Pokemon {
  id: number;
  name: string;
  hp: number;
  cp: number;
  picture: string;
  types: Array<string>;
  created: Date;

  constructor( //on crée des valeurs par défaut pour la fonctionnalité ajout de pokémon, qui seront par la suite modifiés et enregistrer au moment de la validation de la création  
    name: string = 'Entrer un nom...',
    hp: number = 100,
    cp: number = 10,
    picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',//on va passer une image d'un site qui contient pleins d'images de pokémons
    types: string[] = ['Normal'],
    created: Date = new Date()
  ) {
    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}