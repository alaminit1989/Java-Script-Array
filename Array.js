//===== Array Map Function (Start Code)==========================================================

var arr = [1,2,3,4,5,6,7]

//Map Function Alternative For Loop

var arrnew = []

for(i=0; i < arr.length; i++){

    arrnew.push(arr[i] + 3);

};

console.log('New Array Result = ' + arrnew)


//Using Map Function

var mapresult = arr.map(function(value){

    return value + 3;

})

console.log('Map Result = ' + mapresult);


//Customizing Map Function

function myCustomizeMap(a, cb){

    var mapnewarr = []

    for(i=0; i<arr.length; i++){

        mapnewarr.push(cb(arr[i]))

    }

    return mapnewarr;
}


var CustMap = myCustomizeMap(arr, function(value){

    return value - 2;

})

console.log('My Customize Map Result = ' + CustMap);


//===== Array Map Function (End Code)==========================================================

//===== Array Filter Function (Start Code)==========================================================

var arrfilter = [1,2,3,4,5,6,7,8,9]

var newarrF = []

for(j = 0; j<arrfilter.length; j++){

    if(arrfilter[j] % 2 == 1){

        newarrF.push(arrfilter[j])

    }

}

console.log('New Array Filter Result = ' + newarrF);


var arr = [1,2,3,4,5,6,7,8,9]

var arrfresult = arr.filter(function(value){

    return value % 2 == 1;

});

console.log(arrfresult);

