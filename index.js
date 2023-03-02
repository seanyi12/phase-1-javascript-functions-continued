function saturdayFun( activity = "roller-skate"){
  //console.log(`This Saturday, I want to ${activity1}`)
  return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(greet){
  return function (adj = "a hard worker"){
    
  return `You are ${greet}${adj}${greet}!`
  }

}
console.log(wrapAdjective("*")())
