//Passing a object

function createUser({name : string , isStaying : Boolean}) : string{
        return ""
} 
createUser({name : "Pratham" , isStaying : true})


//Passing object as variable which allows to pass more data than should be defined.
function passVar({name : string}) {

}
let userVar = {name : "pratham" , email : "heelo@gm.com"} 
passVar(userVar) //as here is email is being passed without any error also comes under bad structure.

export {}