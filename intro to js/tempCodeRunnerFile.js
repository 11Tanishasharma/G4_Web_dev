function sumofthree(a){
        return function(b){
                return function(c){
                        console.log(a+b+c);
                }
        }
}
console.log(sumofthree(20)(30)(40));