function generate() {
    var arr = [];
    

for ( var i = 0; i < 16; i++ ) {
    x = Math.round( Math.random() * 8 );
    if (arr.length == 0) 
    { arr.push(x);}
    else
     { arr.push('count');}

}
  /*   var count = 0; 
for (var j = 0; j < arr.length; i++) { if (arr[j] == x)         { count++; }}
        if (count < 2) {arr.push(x)} else    */   
    
    



document.write( '<br>' + arr + '<br>' );

document.write( '<br>' + Math.max(...arr) + '<br>' );

document.write( '<br>' + Math.min(...arr) + '<br>' );

}

generate();

