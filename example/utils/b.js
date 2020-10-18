const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //0 = A, 25 = Z

const iToA = i => {
  let current = i;

  let a = "";

  while (current > -1) {
    let digit = current % 26;
    a = alpha[digit] + "" + a;

    //This is not a straight number base conversion, we need to
    //treat A as
    current = Math.floor(current / 26) - 1;
  }

  return a;
};

export default iToA