function convert(desimal){
    var angka = []
    var max = 0
    for(var i = 0; i < desimal.length; i++){
        angka[i] = parseFloat(desimal[i])/100
        if(angka[i] > angka[max]){
             max =i;
        }
        
    }
    return angka;
   // return max; // nilai terbesar
    
}
console.log(convert(["33%","98.1%","56.44%","100%"]))