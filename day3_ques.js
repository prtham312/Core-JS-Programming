let str = "aabbbccccddeffggghh";
var str1 = "";
for(var i =0 ; i < str.length ; i++){
    if(str.length==1) break;
    var el = str[i];
    var ctr = 1 ;
    if(el==str[i-1]) continue;
    for(var j = i+1 ; j <  str.length ; j++){
        if(el==str[j]){
            ctr++;
        }
        }
        str1 = str1 + el + ctr;
        if(ctr==1){
            break;}
}
console.log(str1)