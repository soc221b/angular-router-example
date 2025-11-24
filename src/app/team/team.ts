import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.html',
  imports: [RouterOutlet],
})
export class Team {
  readonly teamId = input.required<string>();
}
