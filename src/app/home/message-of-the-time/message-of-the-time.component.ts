import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'message-of-the-time',
  templateUrl: './message-of-the-time.component.html',
  styleUrls: ['./message-of-the-time.component.scss']
})
export class MessageOfTheTimeComponent implements OnInit {

  public title: string = `Don't Overstep Your Boundaries`;
  public subtitle: string = `Alls my life I had to fight, nigga`;

  public contents: Array<string> = [
    `This website means so much to me, I cannot even begin to put it into words.`,
    `Sometimes, I'm just thinking of what to say. Then I realize, it honestly doesn't matter. This is my world and my representation of The Culture.`, 
    `I started with Hip-Hop first because I have always been affected by Hip-Hop in some way. Right now, I have HIGHLY influenced by Hip-Hop.`];

  constructor() { }

  ngOnInit(): void {
  }

}
