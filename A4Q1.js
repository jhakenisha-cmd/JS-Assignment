function RollSeedLock()
{
  var L = prompt("L = ");
  var R = prompt("R = ");
  var K = prompt("K = ");
  var count = 0;
  for (var x = L; x < R; x++) {
      if (x % K === 0) {
          var temp = x;
          var sum = 0;
          var hasZero = false;
          while (temp > 0) {
              var digit = temp % 10;
              if (digit === 0) {
                  hasZero = true;
                  break;
              }
              sum += digit;
              temp = Math.floor(temp / 10);
          }
          if (!hasZero && sum > 1) {
              var isPrime = true;
              for (var i = 2; i <= Math.sqrt(sum); i++) {
                  if (sum % i === 0) {
                      isPrime = false;
                      break;
                  }
              }
              if (isPrime) {
                  count++;
              }
          }
      }
  }
  alert(count);
}