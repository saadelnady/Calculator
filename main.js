let result = document.getElementById("result");
let btns = document.querySelectorAll(".inputs button");
let btnDelete = document.getElementById("delete");
let equal = document.getElementById("equal");
btns.forEach((ele) => {
  ele.onclick = () => {
    result.innerHTML += ele.innerHTML;
  };
});
// btnEqual function
equal.onclick = () => {
  let myResult = eval(result.innerHTML);

    deleteResult();
    result.innerHTML = myResult;
  console.log("Result------>", myResult);
};

// btnDelete function

let deleteResult = () => {
  result.innerHTML = "";
};
btnDelete.onclick = deleteResult;
