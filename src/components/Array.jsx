import React, { useState } from "react";

function Array() {
  const [cells, setCells] = useState(["a", "b", "c"]);

  const changeCellContent = (newCellValue, indexToUpdate) => {
    const newCells = [...cells];
    newCells[indexToUpdate] = newCellValue;
    setCells(newCells);

    // setCells((prevCells) => { //same as above but with callback. Basically loop over the array and update the value at the correct index passed in
    //  prevCells.map((cell, i) => {
    //    i === indexToUpdate ? newCellValue : cell;
    //  });
  };

  const handleClicked = (index) => {
    //every click will generate a new cell
    setCells((prevCells) => [
      ...prevCells.slice(0, index + 1), //all the cells before the clicked cell
      "_",
      ...prevCells.slice(index + 1), //all the cells after the clicked cell
    ]);
  };

  const combinedString = cells.join("");

  return (
    <>
      <div className="w-full flex justify-center">
        {cells.map((cell, index) => (
          <div
            key={index}
            className="text-white font-bold border rounded-lg p-5 text-center w-20 relative"
          >
            <input
              className="text-white w-5 text-center bg-black border-none cursor-pointer "
              value={cell}
              onChange={(e) => changeCellContent(e.currentTarget.value, index)}
            ></input>

            {index < cells.length - 1 && (
              <span
                className="absolute -right-[21px] -top-[0.5px] h-[60px] transition duration-300 hover:bg-green-500/50 w-10 rounded-full text-sm text-center cursor-pointer text-green-500/50"
                onClick={() => handleClicked(index)}
              >
                |
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="text-white font-bold text-2xl border w-full border-green-500 rounded-lg p-5 text-center mt-5">
        {combinedString}
      </div>
    </>
  );
}

export default Array;
