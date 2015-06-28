
function numberAbrvFilter () {
  var abrvAmounts = [
    { amount: 0, abrv: '' },
    { amount: 1000, abrv: 'K' },
    { amount: 1000000, abrv: 'M' },
    { amount: 1000000000, abrv: 'B' },
    { amount: 1000000000000, abrv: 'T' }
  ];

  return (input) => {
    for (var i = 0; i < abrvAmounts.length; i++) {
      var a = abrvAmounts[i],
          b = abrvAmounts[i + 1];

      if (input > a.amount && !b || input < b.amount) {
        if (a.amount === 0) {
          return input;
        }

        var amount = input / a.amount;
        var decimals = 3 - Math.round(amount).toString().length;

        if (decimals < 0) {
          decimals = 0;
        }

        return amount.toFixed(decimals) + a.abrv;
      }
    }
  };
}

export default numberAbrvFilter;