const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]


  function isWin(element) {
      if(element.result === "W") {
          return element;
      }
  }

  function superbowlWin(array) {
      let arrayRow = array.find(isWin);

      if (arrayRow !== undefined) {
          return arrayRow.year;
      }
      else {
          return undefined;
      }
  }
