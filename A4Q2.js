function Digit_Gatekeeper()
{
      var N = prompt("N = ");
      var seed = prompt("seed = ");
      var current = N;
      for (      var i = 0; i < 3; i++) 
      {
	      if (current % 2 === 0) 
	      {
		current = current / 2 + seed;
	      } 
	      else 
	      {
		current = current * 3 - seed;
	      }
      }
      if (current >= 100 && current <= 999) 
      {
	      var mid = Math.floor(current / 10) % 10;
	      if (mid === seed) 
	      {
		alert("YES, " + current);
	      } 
	      else 
	      {
		alert("NO, " + current);
	      }
      } 
      else 
      {
	alert("NO, " + current);
      }
}