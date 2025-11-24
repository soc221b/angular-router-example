import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
})
export class User {
  readonly userId = input.required<string>();
}
