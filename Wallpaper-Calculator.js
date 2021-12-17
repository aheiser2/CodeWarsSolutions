//https://www.codewars.com/kata/567501aec64b81e252000003/


function wallpaper(l, w, h) {

    let roomArea = (2 * (l * h)) + (2 * (w * h));
  
    let roomAreaWithCushion = roomArea + (roomArea * .15);
  
    oneRoll = 52 * .01 * 10;
  
    let rolls = Math.ceil(roomAreaWithCushion / oneRoll);
  
    if (l*w*h ===0 ){
      return 'zero'
    }else if (rolls < 20){
      return numbers[rolls];
    }
    else{
      return numbers[20];
    }
}