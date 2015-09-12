import {bootstrap, Component, View, CORE_DIRECTIVES} from 'angular2/angular2';
import {HeroesService} from './heroes-service';
import {HeroEditor} from './hero-editor';
import {Hero} from './hero';

@Component({
  selector: 'hero-app'
})
@View({
  template: `
    <div >

      <h2>Heros:</h2>
      <div *ng-for='#item of heroItems'>
        <span>Name:</span>
        <span>{{item.hero.name}}</span>
        <button [hidden]="item.editActive" (click)="item.editActive = !item.editActive">edit</button>
      </div>

      <h2>Hero Editors:</h2>
      <div *ng-for='#editItem of heroItems'>
        <div *ng-if='editItem.editActive'>
          <hero-editor
            [hero]='editItem.hero'
            (canceled)="onCanceled(editItem)"
            (saved)="onSaved(editItem, $event)">
          </hero-editor>
        </div>
      </div>
      
    </div>`,
  directives: [CORE_DIRECTIVES, HeroEditor]
})
export class HeroApp {
  heroItems: HeroItem[];

  constructor(heroesService: HeroesService) {
    this.heroItems = heroesService.getHeroes().map(hero => new HeroItem(hero));
  }

  onCanceled(editItem:HeroItem){
    editItem.editActive = false;
  }

  onSaved(editItem:HeroItem, updatedHero:Hero){
    editItem.hero = updatedHero;
    editItem.editActive = false;
  }
}

class HeroItem {
  constructor(public hero: Hero) {}
  editActive = false;
}

bootstrap(HeroApp, [HeroesService]);
