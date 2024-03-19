let registerForm = document.querySelector(".registerForm");
let result; // Corrected spelling (result instead of resault)

registerForm.onsubmit = function(event) {
  event.preventDefault();
  let elements = event.target.elements;
  let input1 = elements[0].value;
  let select = elements[1].value;

  switch (select) {
    case 'dollar':
      result = input1/3.5;
      break;
    case 'dinar':
      result = input1 / 5;
      break;
    case 'nis':
      result = input1;
      break;
    default:
      
  }

  document.querySelector(".result").innerHTML = result;
};

