import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class ApplicationController extends Controller {
  @tracked otherProperty = 100;

  @action
  changeOther() {
    this.otherProperty = this.otherProperty - 1;
  }
}
