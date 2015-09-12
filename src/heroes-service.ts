import {Hero} from './hero';

export class HeroesService {
  heroes: Array<Hero> = [
    { id: 1, name: "RubberMan", power: 'flexibility'},
    { id: 2, name: "Tornado", power: 'Weather changer'}
  ];

  getHeroes () {
    return this.heroes;
  }
}
