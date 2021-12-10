//https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8 

function bloodAlcoholContent(drinks, weight, sex, time){
  var bac = 0;
  if (sex === "male"){
    bac = ((drinks.ounces * drinks.abv) * 5.14 / weight * .73) - (.015 * time)
  }else{
    bac = ((drinks.ounces * drinks.abv) * 5.14 / weight * .66) - (.015 * time)
  }
  
  let calculatedBac = parseFloat(bac.toFixed(4));
  return calculatedBac
}