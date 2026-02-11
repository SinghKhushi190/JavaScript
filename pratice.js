function getMilk(money , costPerBottle)
{
  console.log("leaveHouse");
  console.log("moveRight"); 
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  console.log("buy" + calcBottle(money , costPerBottle ) + "bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHome");

  // return money % 1.5;  
  return calcChange(money , 1.5);
}

function calcBottles(startingMoney , costPerBottle)
{
  var numberOfBottles = math.floor(startingMoney / costPerBottle);
  return numberOfBottle;


  function calcChange(startingAmount , costPerBottle)
  {
    var change  = startingAmount % costPerBottle;
    return change;
  }
  console.log("Hello master , here is your " + getMilk() + " change");
  
