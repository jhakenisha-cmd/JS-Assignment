function Mirror_Corridor()
{
  var N = Number(prompt("N = "));
  var K = Number(prompt("K = "));
  var result = -1;
  
  for (var x = 0; x <= 100000; x++) 
  {
      var c = N + x;
      if (c % K === 0) 
      {
          var o = c;
          var r = 0;
          var temp = c;
          
          while (temp > 0) 
  	      {
              var digit = temp % 10;
              r = (r * 10) + digit;
              temp = Math.floor(temp / 10);
          }
          
          if (o === r) 
        	{
              result = x;
              break;
          }
      }
  }
  alert(result);
}