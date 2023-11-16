export default (seconds) => {
  let minsValue = Math.floor(seconds / 60)
  let secsValue = Math.floor(seconds - minsValue * 60)
  let mins
  if (minsValue === 0) {
    mins = '00'
  } else if (minsValue < 10) {
    mins = '0' + minsValue
  } else {
    mins = '' + minsValue
  }
  let secs
  if (secs === 0) {
    secs = '00'
  } else if (secsValue < 10) {
    secs = '0' + secsValue
  } else {
    secs = '' + secsValue
  }

  return `${mins}:${secs}`
}
