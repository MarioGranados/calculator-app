const buttonDiv = document.getElementById("buttons");
      const calculatorButtons = [
        1,
        2,
        3,
        "cc",
        4,
        5,
        6,
        "+",
        7,
        8,
        9,
        "*",
        "",
        0,
        "/",
        "=",
      ];
      const result = document.getElementById("display_screen");
      const calculatorScreen = document.getElementById("display_screen");
      const reg = new RegExp("^[0-9]*$");
      let btnPress = "";
      //we could add special operations later or sum.
      //as of right now it would be cool to have a simple calculator app then navigate

      createButtons(calculatorButtons);

      function createButtons(buttons) {
        for (i = 0; i < buttons.length; i++) {
          let btn = document.createElement("button");
          btn.innerHTML = buttons[i];
          btn.className = "calc-btn btn-grid-item";
          btn.addEventListener("click", function () {
            if (btn.innerHTML == "cc") {
              //clears calculator
              result.innerHTML = "";
              btnPress = '';
            } else {
              if (btn.innerHTML == "=") {
                result.innerHTML = calculation(result.innerHTML);
                console.log(result.innerHTML);
              } else {
                result.innerHTML += btn.innerHTML;
              }
            }
          });
          buttonDiv.appendChild(btn);
        }
      }

      calculatorScreen.addEventListener("click", function () {
        window.addEventListener("keydown", (event) => {
          if (reg.test(event.key)) {
            btnPress += event.key;
          }
          if (
            event.key == "+" ||
            event.key == "-" ||
            event.key == "/" ||
            event.key == "*"
          ) {
            btnPress += event.key;
          }
          if (event.key == "Enter" || event.key == "=") {
            result.innerHTML = calculation(btnPress);
            btnPress = "";
          } else {
            result.innerHTML = btnPress;
          }
          if (event.key == "Backspace") {
            btnPress = "";
            result.innerHTML = btnPress;
          }
        });
      });

      //make life simpler
      function calculation(str) {
        return Function(`'use strict'; return (${str})`)();
      }