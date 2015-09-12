import {Component, View, FORM_DIRECTIVES, EventEmitter, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';
import {SandboxEditorService} from './sandbox-editor-service';
import {Hero} from './hero';

@Component({
  selector: 'hero-editor',
  events: ['canceled', 'saved'],
  properties: ['hero'],
  bindings: [SandboxEditorService]
})
@View({
  template: `
    <div class="editor">
      <div>
      <span>Name: </span>
      <input [(ng-model)]="hero.name"/>
      </div>
      <div>
        <button (click)="onSaved()">save</button>
        <button (click)="onCanceled()">cancel</button>
      </div>
    </div>`,
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroEditor {
  canceled = new EventEmitter();
  saved = new EventEmitter();
  sandboxService: SandboxEditorService;

  constructor() {
    this.sandboxService = new SandboxEditorService();
  }
  //constructor(sandboxService: SandboxEditorService) {}

  set hero (hero: Hero) {
    this.sandboxService.setItem(hero);
  }

  get hero () {
    return this.sandboxService.getItem();
  }

  onSaved() {
    this.sandboxService.saveItem();
    this.saved.next(this.hero);
  }

  onCanceled () {
    this.sandboxService.restoreItem();
    this.canceled.next();
  }
}
