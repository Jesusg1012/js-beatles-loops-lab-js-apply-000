// add solution here
function theBeatlesPlay (mus, ins)
{
  var lego = [];
  for (var i = 0; i < mus.length; i++)
  {
    lego.push(mus[i] + " plays " + ins[i]);
  }
  return lego;
}
function johnLennonFacts(facts)
{
  var x = 0;
  var test = [];
  while (x < facts.length)
  {
    test.push(facts[x] + "!!!");
    x++;
  }
  return test;
}
function iLoveTheBeatles(num)
{
  var lego = [];
  var x = 0;
  do
  {
    lego.push("I love the Beatles!");
    x++;
  }while(x < num);
  return lego;
}