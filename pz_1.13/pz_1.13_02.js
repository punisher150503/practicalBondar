function ChessBoard(width, height) {
    this.width = width;
    this.height = height;
  }

  ChessBoard.prototype.draw = function() {
    let alphabet = "ABCDEFGH";
    console.log("  " + alphabet.slice(0, this.width).split("").join(" "));
    for (let y = 0; y < this.height; y++) {
      let row = "";
      for (let x = 0; x < this.width; x++) {
        if ((x + y) % 2 == 0) {
          row += "# ";
        } else {
          row += "@ ";
        }
      }
      console.log((this.height - y) + " " + row);
    }
  };

let board1 = new ChessBoard(8, 8);
board1.draw();
