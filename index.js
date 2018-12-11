function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name) 
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) 
  return `Currently serving ${katzDeliLine.shift(name)}.`
  else 
  return "There is nobody waiting to be served!"
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length > 0)
    for (let i = 0; i < katzDeliLine.length; i++) {
      `${i+1}. ${katzDeliLine[i]}`
    }
  else 
    return "The line is currently empty."
}