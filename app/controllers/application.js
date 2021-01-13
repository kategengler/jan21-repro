import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";

export default class ApplicationController extends Controller {
  @tracked value = 0;

  @tracked otherProperty = 100;

  @action
  changeValue() {
    this.value = this.value + 1;
  }

  @action
  changeOther() {
    this.otherProperty = this.otherProperty - 1;
  }
}
