function Skipping_Numbers()
{
  var N = Number(prompt("Enter N:"));
  var seed = Number(prompt("Enter seed:"));
  
  var sum = 0;
  var m = 0;
  var skip = seed + 2;
  
  while (sum < N) 
  {
    m = m + 1;
    if (m % skip !== 0) 
    {
      sum = sum + m;
    }
  }
  
  alert("m: " + m + "\nSum: " + sum);
}
