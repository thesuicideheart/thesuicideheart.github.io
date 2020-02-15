function spongebobify(){
    var toSpongebob = "";
    var input = document.getElementById("spongebob").value;
    if(input && input !== ""){
        for(var i = 0; i < input.length; i++){
            if(i % 2 == 0){
                var toAdd = input[i].toUpperCase()
                toSpongebob += toAdd;
            }else{
                toSpongebob += input[i];
            }
        }
        document.getElementById("output").innerText = toSpongebob;
    }
}