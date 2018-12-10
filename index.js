function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name) 
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) 
  katzDeliLine.shift(name)
  else (katzDeliLine.length = 0)
  return "There is nobody waiting to be served!"
}