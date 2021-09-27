//sets the number count and sum variables
var count = 0;
var sum = 0;

//one function for all the number buttons
function add(x)
{
  count = count + 1;
  sum = sum + x;
  print();
}

//clear button function
function clearit()
{
  count = 0;
  sum = 0;
  document.getElementById("count").innerHTML = "";
  document.getElementById("sum").innerHTML = "";
}

function print()
{
  document.getElementById("count").innerHTML = "<hr><div>Times clicked: " + count + ".</div>";
  document.getElementById("sum").innerHTML = "<div>Sum: " + sum + ".</div>";
}
