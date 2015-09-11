import {Hero} from './hero';

export class HeroesService {
  heroes: Array<Hero> = [{ name: "Superman" }, { name: "Batman" }]

  getHeroes () {
    return this.heroes;
  }
}
