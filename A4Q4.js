function Fare_Calculator()
{
  var base = Number(prompt("Enter base:"));
  var d = Number(prompt("Enter distance:"));
  var late = Number(prompt("Enter Minutes Late:"));
  var seed = Number(prompt("Enter seed:"));
  
  var fare = base + (7 * d);
  
  if (late > 15) 
  {
      fare = fare + 20;
  }
  
  if (d > 10)
  {
      fare = fare + (0.10 * fare);
  }
  
  if (seed % 2 !== 0) 
  {
      fare = fare - seed;
  } else {
      fare = fare + seed;
  }
  
  while (fare % 5 !== 0) 
  {
      fare++;
  }
  
  alert(fare);
}