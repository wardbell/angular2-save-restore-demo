import {Component, View, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {HeroEditor} from './heroEditor';

@Component({
  selector: 'hero-card',
  properties: ['hero']
})
@View({
  template: `
    <div>
      <span>Name:</span>
      <span>{{hero.name}}</span>
      <button [hidden]="editMode" (click)="editMode = !editMode">edit</button>
    </div>
    <hero-editor
      (saved)="saved($event)"
      (canceled)="canceled($event)"
      [hidden]="!editMode"
      [hero]="hero">
    </hero-editor>
    `,
  directives: [CORE_DIRECTIVES, HeroEditor]
})
export class HeroCard {
  hero: any;
  editMode: boolean

  saved (hero) {
    this.editMode = false;
  },
  canceled (previousHero) {
    this.hero = previousHero;
    this.editMode = false;
  }
}
