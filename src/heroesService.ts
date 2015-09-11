export class HeroesService {
  heroes: Array<any>;

  constructor() {
    this.heroes = [{ name: "Superman" }, { name: "Batman" }]
  }

  getHeroes () {
    return this.heroes;
  }
}
