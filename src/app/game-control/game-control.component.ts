import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{ count: number }>();

  constructor() {}

  ngOnInit(): void {}

  onGameStarted() {
    let count = 0;
    setInterval(() => {
      count += 1;
      console.log("count: ", count);
    }, 1000);
    this.gameStarted.emit({
      count
    });
  }
}
