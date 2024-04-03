const Controls = props => {
  return /*#__PURE__*/(
    React.createElement("div", { id: "controls" }, /*#__PURE__*/
    React.createElement("button", { onClick: props.updateDisplay, id: "clear", class: "btn btn-danger" }, "AC"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "divide", class: "btn btn-light" }, "/"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "multiply", class: "btn btn-light" }, "x"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "seven", class: "btn btn-dark" }, "7"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "eight", class: "btn btn-dark" }, "8"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "nine", class: "btn btn-dark" }, "9"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "subtract", class: "btn btn-light" }, "-"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "four", class: "btn btn-dark" }, "4"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "five", class: "btn btn-dark" }, "5"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "six", class: "btn btn-dark" }, "6"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "add", class: "btn btn-light" }, "+"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "one", class: "btn btn-dark" }, "1"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "two", class: "btn btn-dark" }, "2"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "three", class: "btn btn-dark" }, "3"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "equals", class: "btn btn-primary" }, "="), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "zero", class: "btn btn-dark" }, "0"), /*#__PURE__*/


    React.createElement("button", { onClick: props.updateDisplay, id: "decimal", class: "btn btn-dark" }, ".")));




};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ecuation: "",
      input: "0" };

    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(event) {
    const button = event.target.id;
    let currentEcuation = this.state.ecuation;
    const currentInput = this.state.input;

    //console.log("Ecuation before change:", currentEcuation);
    //console.log("Input before change:", currentInput);

    let newInput = currentInput;
    let newEcuation = currentEcuation;

    // Check if digit limit was reached and = was pressed
    if (currentEcuation.length >= 200 && currentEcuation.includes("=")) {
      currentEcuation = currentEcuation.slice(currentEcuation.indexOf("=") + 1);
    }

    if (currentEcuation.length <= 200) {
      switch (button) {
        // Reset ecuation and result to initial values
        case "clear":
          this.setState({
            ecuation: "",
            input: "0" });

          break;

        // Calculate result and update ecuation to include result
        case "equals":
          // Check to see if ecuation ends in a operation
          if (/[+\-*/]/.test(currentEcuation[currentEcuation.length - 1])) {
            newEcuation = currentEcuation.slice(0, currentEcuation.length - 1);
          }
          // Evaluate the ecuation
          let calculatedResult = eval(newEcuation);
          if (calculatedResult.toString().split(".")[1] && calculatedResult.toString().split(".")[1].length >= 5) {
            calculatedResult = calculatedResult.toFixed(4);
          }
          this.setState({
            ecuation: currentEcuation ?
            `${newEcuation} = ${calculatedResult}` :
            NaN,
            input: currentEcuation ? calculatedResult : NaN });

          break;
        /////////////////////////////////////////////
        // Add code to not start with / or *
        // Basic operation
        case "add":
          // Check if '=' was pressed before and only take the result
          if (currentEcuation.includes("=")) {
            newEcuation = currentEcuation.slice(
            currentEcuation.indexOf("=") + 1);

          }
          // Check if last action was a operation
          if (/[+\-*/]/.test(currentEcuation[currentEcuation.length - 1])) {
            // Might be 2 operations as '-' stacks over other opeations -> Replace them both
            if (
            currentEcuation.length >= 2 &&
            /[+\-*/]/.test(currentEcuation[currentEcuation.length - 2]))
            {
              this.setState({
                ecuation:
                currentEcuation.slice(0, currentEcuation.length - 2) + "+",
                input: "+" });

            } else {
              // Replace last operation with new operation
              this.setState({
                ecuation:
                currentEcuation.slice(0, currentEcuation.length - 1) + "+",
                input: "+" });

            }
          } else {
            this.setState({
              ecuation: newEcuation + "+",
              input: "+" });

          }
          break;
        case "subtract":
          // Check if '=' was pressed before and only take the result
          if (currentEcuation.includes("=")) {
            newEcuation = currentEcuation.slice(
            currentEcuation.indexOf("=") + 1);

          }
          // Check if last action was a operation
          if (/[+\-*/]/.test(currentEcuation[currentEcuation.length - 1])) {
            // Can only have one operation + a '-'
            // Check if there was another operation before that
            if (
            currentEcuation.length >= 2 &&
            /[+\-*/]/.test(currentEcuation[currentEcuation.length - 2]))
            {
              // Do nothing?
              null;
            } else {
              this.setState({
                ecuation: currentEcuation + "-",
                input: "-" });

            }
          } else {
            this.setState({
              ecuation: newEcuation + "-",
              input: "-" });

          }
          break;
        case "multiply":
          // Check if '=' was pressed before and only take the result
          if (currentEcuation.includes("=")) {
            newEcuation = currentEcuation.slice(
            currentEcuation.indexOf("=") + 1);

          }
          // Check if last action was a operation
          if (/[+\-*/]/.test(currentEcuation[currentEcuation.length - 1])) {
            // Might be 2 operations as '-' stacks over other opeations -> Replace them both
            if (
            currentEcuation.length >= 2 &&
            /[+\-*/]/.test(currentEcuation[currentEcuation.length - 2]))
            {
              this.setState({
                ecuation:
                currentEcuation.slice(0, currentEcuation.length - 2) + "*",
                input: "*" });

            } else {
              // Replace last operation with new operation
              this.setState({
                ecuation:
                currentEcuation.slice(0, currentEcuation.length - 1) + "*",
                input: "*" });

            }
          } else {
            this.setState({
              ecuation: newEcuation + "*",
              input: "*" });

          }
          break;
        case "divide":
          // Check if '=' was pressed before and only take the result
          if (currentEcuation.includes("=")) {
            newEcuation = currentEcuation.slice(
            currentEcuation.indexOf("=") + 1);

          }
          // Check if last action was a operation
          if (/[+\-*/]/.test(currentEcuation[currentEcuation.length - 1])) {
            // Might be 2 operations as '-' stacks over other opeations -> Replace them both
            if (
            currentEcuation.length >= 2 &&
            /[+\-*/]/.test(currentEcuation[currentEcuation.length - 2]))
            {
              this.setState({
                ecuation:
                currentEcuation.slice(0, currentEcuation.length - 2) + "/",
                input: "/" });

            } else {
              // Replace last operation with new operation
              this.setState({
                ecuation:
                currentEcuation.slice(0, currentEcuation.length - 1) + "/",
                input: "/" });

            }
          } else {
            this.setState({
              ecuation: newEcuation + "/",
              input: "/" });

          }
          break;

        case "decimal":
          // If there's a decimal already in the input then do nothing
          if (!currentInput.includes(".")) {
            // If no number was added before then add 0.
            /[\D]/.test(currentInput[currentInput.length - 1]) ?
            newInput += "0." :
            newInput += ".";
            /[\D]/.test(currentEcuation[currentEcuation.length - 1]) ?
            newEcuation += "0." :
            newEcuation += ".";

            //console.log('New ecuation:',newEcuation);
            //console.log('New input:',newInput);

            this.setState({
              ecuation: newEcuation,
              input: newInput });

          }
          break;

        // Numbers
        case "one":
          // Check if '=' was pressed before
          if (currentEcuation.includes("=")) {
            this.setState({
              ecuation: "1",
              input: "1" });

            // Check if ecuation input is 0
          } else if (currentInput === "0") {
            this.setState({
              ecuation:
              currentEcuation.slice(0, currentEcuation.length - 1) + "1",
              input: "1" });

          } else if (/[+\-*/]/.test(currentInput)) {
            this.setState({
              ecuation: currentEcuation + "1",
              input: "1" });

          } else {
            this.setState({
              ecuation: currentEcuation + "1",
              input: currentInput + "1" });

          }
          break;

        case "two":
          // Check if '=' was pressed before
          if (currentEcuation.includes("=")) {
            this.setState({
              ecuation: "2",
              input: "2" });

            // Check if ecuation input is 0
          } else if (currentInput === "0") {
            this.setState({
              ecuation:
              currentEcuation.slice(0, currentEcuation.length - 1) + "2",
              input: "2" });

          } else if (/[+\-*/]/.test(currentInput)) {
            this.setState({
              ecuation: currentEcuation + "2",
              input: "2" });

          } else {
            this.setState({
              ecuation: currentEcuation + "2",
              input: currentInput + "2" });

          }
          break;

        case "three":
          // Check if '=' was pressed before
          if (currentEcuation.includes("=")) {
            this.setState({
              ecuation: "3",
              input: "3" });

            // Check if ecuation input is 0
          } else if (currentInput === "0") {
            this.setState({
              ecuation:
              currentEcuation.slice(0, currentEcuation.length - 1) + "3",
              input: "3" });

          } else if (/[+\-*/]/.test(currentInput)) {
            this.setState({
              ecuation: currentEcuation + "3",
              input: "3" });

          } else {
            this.setState({
              ecuation: currentEcuation + "3",
              input: currentInput + "3" });

          }
          break;

        case "four":
          // Check if '=' was pressed before
          if (currentEcuation.includes("=")) {
            this.setState({
              ecuation: "4",
              input: "4" });

            // Check if ecuation input is 0
          } else if (currentInput === "0") {
            this.setState({
              ecuation:
              currentEcuation.slice(0, currentEcuation.length - 1) + "4",
              input: "4" });

          } else if (/[+\-*/]/.test(currentInput)) {
            this.setState({
              ecuation: currentEcuation + "4",
              input: "4" });

          } else {
            this.setState({
              ecuation: currentEcuation + "4",
              input: currentInput + "4" });

          }
          break;

        case "five":
          // Check if '=' was pressed before
          if (currentEcuation.includes("=")) {
            this.setState({
              ecuation: "5",
              input: "5" });

            // Check if ecuation input is 0
          } else if (currentInput === "0") {
            this.setState({
              ecuation:
              currentEcuation.slice(0, currentEcuation.length - 1) + "5",
              input: "5" });

          } else if (/[+\-*/]/.test(currentInput)) {
            this.setState({
              ecuation: currentEcuation + "5",
              input: "5" });

          } else {
            this.setState({
              ecuation: currentEcuation + "5",
              input: currentInput + "5" });

          }
          break;

        case "six":
          // Check if '=' was pressed before
          if (currentEcuation.includes("=")) {
            this.setState({
              ecuation: "6",
              input: "6" });

            // Check if ecuation input is 0
          } else if (currentInput === "0") {
            this.setState({
              ecuation:
              currentEcuation.slice(0, currentEcuation.length - 1) + "6",
              input: "6" });

          } else if (/[+\-*/]/.test(currentInput)) {
            this.setState({
              ecuation: currentEcuation + "6",
              input: "6" });

          } else {
            this.setState({
              ecuation: currentEcuation + "6",
              input: currentInput + "6" });

          }
          break;

        case "seven":
          // Check if '=' was pressed before
          if (currentEcuation.includes("=")) {
            this.setState({
              ecuation: "7",
              input: "7" });

            // Check if ecuation input is 0
          } else if (currentInput === "0") {
            this.setState({
              ecuation:
              currentEcuation.slice(0, currentEcuation.length - 1) + "7",
              input: "7" });

          } else if (/[+\-*/]/.test(currentInput)) {
            this.setState({
              ecuation: currentEcuation + "7",
              input: "7" });

          } else {
            this.setState({
              ecuation: currentEcuation + "7",
              input: currentInput + "7" });

          }
          break;

        case "eight":
          // Check if '=' was pressed before
          if (currentEcuation.includes("=")) {
            this.setState({
              ecuation: "8",
              input: "8" });

            // Check if ecuation input is 0
          } else if (currentInput === "0") {
            this.setState({
              ecuation:
              currentEcuation.slice(0, currentEcuation.length - 1) + "8",
              input: "8" });

          } else if (/[+\-*/]/.test(currentInput)) {
            this.setState({
              ecuation: currentEcuation + "8",
              input: "8" });

          } else {
            this.setState({
              ecuation: currentEcuation + "8",
              input: currentInput + "8" });

          }
          break;

        case "nine":
          // Check if '=' was pressed before
          if (currentEcuation.includes("=")) {
            this.setState({
              ecuation: "9",
              input: "9" });

            // Check if ecuation input is 0
          } else if (currentInput === "0") {
            this.setState({
              ecuation:
              currentEcuation.slice(0, currentEcuation.length - 1) + "9",
              input: "9" });

          } else if (/[+\-*/]/.test(currentInput)) {
            this.setState({
              ecuation: currentEcuation + "9",
              input: "9" });

          } else {
            this.setState({
              ecuation: currentEcuation + "9",
              input: currentInput + "9" });

          }
          break;
        case "zero":
          // Check if '=' was pressed before reset things
          if (currentEcuation.includes("=")) {
            this.setState({
              ecuation: "0",
              input: "0" });

            // If ecuation is empty add one 0
          } else if (currentEcuation === "") {
            this.setState({
              ecuation: "0",
              input: "0" });

          } else if (/[+\-*/]/.test(currentInput)) {
            this.setState({
              ecuation: currentEcuation + "0",
              input: "0" });

            // Don't add leading zeroes
          } else if (currentInput !== "0") {
            this.setState({
              ecuation: currentEcuation + "0",
              input: currentInput + "0" });

          }
          break;
        default:
          this.setState({
            ecuation: currentEcuation,
            input: currentInput });}


    } else {
      switch (button) {
        // Reset ecuation and result to initial values
        case "clear":
          this.setState({
            ecuation: "",
            input: "0" });

          break;

        // Calculate result and update ecuation to include result
        case "equals":
          // Check to see if ecuation ends in a operation
          if (/[+\-*/]/.test(currentEcuation[currentEcuation.length - 1])) {
            newEcuation = currentEcuation.slice(0, currentEcuation.length - 1);
          }
          // Evaluate the ecuation
          let calculatedResult = eval(newEcuation);
          if (calculatedResult.toString().split(".")[1] && calculatedResult.toString().split(".")[1].length >= 5) {
            calculatedResult = calculatedResult.toFixed(4);
          }

          this.setState({
            ecuation: currentEcuation ?
            `${newEcuation} = ${calculatedResult}` :
            NaN,
            input: currentEcuation ? calculatedResult : NaN });

          break;

        default:
          if (currentInput !== "DIGIT LIMIT MET") {
            this.setState({
              ecuation: currentEcuation,
              input: "DIGIT LIMIT MET" });

            setTimeout(() => {
              this.setState({
                ecuation: currentEcuation,
                input: currentInput });

            }, 700);
          }}


    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "display-div" }, /*#__PURE__*/
      React.createElement("div", { id: "ecuation" }, this.state.ecuation), /*#__PURE__*/
      React.createElement("div", { id: "display" }, this.state.input)), /*#__PURE__*/

      React.createElement(Controls, { updateDisplay: this.updateDisplay })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), document.getElementById("react-div"));