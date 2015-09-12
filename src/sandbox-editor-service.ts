import {Hero} from './hero';

export class SandboxEditorService {
  private _originalItem: Hero;
  currentItem: Hero;

  setItem (item: Hero) {
    this._originalItem = item;
    this.restoreItem();
  }

  getItem () :Hero {
    return this.currentItem;
  }

  restoreItem () {
    this.currentItem = this.clone(this._originalItem);
  }

  saveItem () {
    this._originalItem = this.currentItem;
    this.restoreItem();
  }


  clone (item: Hero) :Hero {
    // super poor clone implementation
    return JSON.parse(JSON.stringify(item));
  }
}
