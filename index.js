// add solution here
function theBeatlesPlay (mus, ins)
{
  var lego = [];
  for (var i = 0; i < mus.length; i++)
  {
    lego += mus[i] + " Plays " + ins[i];
  }
  return lego;
}
function johnLennonFacts(facts)
{
  var x = 0;
  while (x < facts.length)
  {
    facts[x] = facts[x] + "!!!"
    x++;
  }
  return facts;
}
function iLoveTheBeatles(num)
{
  var lego = [];
  var x = 0;
  do
  {
    lego.push("I love the Beatles!")
    x++
  }while(x < num)
}