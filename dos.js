/*Easy wallpaper

Detalles

John wants to decorate a room with wallpaper. He has been said that making sure he has the right amount of wallpaper is more complex than it sounds. He wants a fool-proof method to getting it right.

John knows that the rectangular room has a length of l meters, a width of w meters, a height of h meters. The standard width of the rolls he wants to buy is 52 centimeters. The length of a roll is 10 meters. He bears in mind however, that it’s best to have an extra length of wallpaper handy in case of mistakes or miscalculations so he wants to buy a length 15% greater than the one he needs.

Last time he did these calculations he caught a headache so could you help John? Your function wallpaper(l, w, h) should return as a plain English word in lower case the number of rolls he must buy.

#Example: wallpaper(4, 3.5, 3) should return "ten"

#Notes:

    all rolls (even with incomplete width) are put edge to edge
    0 <= l, w, h (floating numbers), it can happens that w x h x l is zero
    the integer r (number of rolls) will always be less or equal to 20*/

    function wallpaper(l, w, h) {
        let rollSize = (10 * .52);
        let newH = (h * .15) + h; //error previsto del 15%
        let areaToCover = 2 *((l*newH) + (w*newH));
        let r = Math.ceil(areaToCover/rollSize); //resultado de la operacion de area acubrir entre el tamaño del rollo
        let numberWords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"]
        if (r > 0 && r < 21) { // se asegura que no pase del 20 
        return numberWords[r-1];// la posicion r no coincide con el contenido de dicha posicion  en el arrglo, entonces r-1  
        } else if (r === 0) {// si r es igual a 0 no se comprara rollos 
          return "zero";
        } else { // devuelve el valor de r en numero y no en string para los casos que son mayor a 20 rollos  
          return r;
        }
      }
      
      console.log (wallpaper(6, 2.9, 3))