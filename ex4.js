function fibonacci(n) {
  let pnum = 0;
  let snum = 1;
  let i = 0;

  while (i < n) {
    console.log(pnum);
    const temp = pnum + snum;
    pnum = snum;
    snum = temp;
    i++;
  }
}

let num = prompt('Digite o número do termo até o qual a sequência será renderizada:');

fibonacci(num);