/* eslint-disable */

import "../style/index.scss";

window.onload = function() {
  let card = addEventListener("click", function() {
    let suit = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
    let suitnum = Math.floor(Math.random() * 4);
    let num = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let cardnum = Math.floor(Math.random() * 13);

    if (suit[suitnum] == "&spades;" || suit[suitnum] == "&clubs;") {
      document.querySelector("#suit1").innerHTML = suit[suitnum];
      document.querySelector("#suit1").style.color = "black";
      document.querySelector("#suit2").innerHTML = suit[suitnum];
      document.querySelector("#suit2").style.color = "black";
      document.querySelector("#cardnumber").innerHTML = num[cardnum];
      document.querySelector("#cardnumber").style.color = "black";
    } else {
      document.querySelector("#suit1").innerHTML = suit[suitnum];
      document.querySelector("#suit1").style.color = "red";
      document.querySelector("#suit2").innerHTML = suit[suitnum];
      document.querySelector("#suit2").style.color = "red";
      document.querySelector("#cardnumber").innerHTML = num[cardnum];
      document.querySelector("#cardnumber").style.color = "red";
    }
  });
};
