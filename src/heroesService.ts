import {Hero} from './hero';

export class HeroesService {
  heroes: Array<Hero>;

  constructor() {
    this.heroes = [{ name: "Superman" }, { name: "Batman" }]
  }

  getHeroes () {
    return this.heroes;
  }
}
