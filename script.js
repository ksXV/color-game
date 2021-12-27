const square = document.getElementsByClassName("square");
const tryAgainbtn = document.getElementById("tryAgainbtn");
const won = document.getElementById("mySpan");
const mainBar = document.getElementById("mainbar");
let colors = [];
//This makes the color
const makeTheColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + " " + g + "," + " " + b + ")";
};
//This modifies the buttons
const replaceColor = (color) => {
  for (let i = 0; i < 3; i++) {
    square[i].style.backgroundColor = color;
    square[i].style.display = "inline-block";
  }
};
//This resets the game
const popColors = (arr) => {
  for (let i = 0; i <= 3; i++) {
    arr.shift();
  }
};
//This plays the game
const intGame = () => {
  let randomNum = Math.floor(Math.random() * 3);
  for (let i = 0; i < 3; i++) {
    colors.push(makeTheColor());
    square[i].style = `background-color:${colors[i]};`;
    let text = String(colors[randomNum]);
    document.getElementById("myH1").innerText = text.toUpperCase();
    square[i].onclick = () => {
      if (square[i].style.backgroundColor === colors[randomNum]) {
        won.innerText = "correct".toUpperCase();
        let color = square[i].style.backgroundColor;
        replaceColor(color);
        console.log(color);
        mainBar.style.backgroundColor = color;
        tryAgainbtn.innerText = "Play again".toUpperCase();
      } else {
        won.innerText = "try again".toUpperCase();
        square[i].style.display = "none";
      }
    };
  }
  console.log(colors);
};
intGame();
tryAgainbtn.onclick = () => {
  popColors(colors);
  intGame();
  mainBar.style = "background-color:rgb(89, 214, 214)";
  tryAgainbtn.innerText = "new colors".toUpperCase();
  won.innerText = "";
};
//Done :)
