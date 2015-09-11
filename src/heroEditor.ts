import {Component, View, FORM_DIRECTIVES, EventEmitter, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {RestoreService} from './restoreService';

@Component({
  selector: 'hero-editor',
  events: ['canceled', 'saved'],
  properties: ['hero'],
  bindings: [RestoreService]
})
@View({
  template: `
    <div>
      <span>Name:</span>
      <input [(ng-model)]="hero.name"/>
      <div>
        <button (click)="saved.next(hero)">save</button>
        <button (click)="onCanceled()">cancel</button>
      </div>
    </div>`,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroEditor {
  canceled = new EventEmitter();
  saved: = new EventEmitter();
  constructor(restoreService: RestoreService<any>) {
    this.restoreService = restoreService;
  }
  set hero (hero) {
    this.restoreService.setItem(hero);
  },
  get hero () {
    return this.restoreService.getItem();
  },
  onCanceled () {
    this.hero = this.restoreService.restoreItem();
    this.canceled.next(this.hero);
  }
}
