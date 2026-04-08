function Judge()
{
  var a = Number(prompt("Enter correct answers (a):"));
  var b = Number(prompt("Enter partially correct (b):"));
  var c = Number(prompt("Enter wrong answers (c):"));
  
  var score = (3 * a) + b - (2 * c);
  
  if (score < 0) 
  {
    score = 0;
  }
  
  if ((a + b + c) > 50) 
  {
    score = score - 10;
  }
  
  var status;
  if (score >= 60) 
  {
    status = "PASS";
  } 
  else 
  {
    status = "FAIL";
  }
  
  alert(score + ", " + status);
}