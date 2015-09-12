import {Hero} from './hero';

export class HeroesService {
  heroes: Array<Hero> = [
    { id: 1, name: "RubberMan", superpowers: [] },
    { id: 2, name: "Tornado", superpowers: []
  }];

  getHeroes () {
    return this.heroes;
  }
}
