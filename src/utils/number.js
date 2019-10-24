export default {
  formatPercentage (value, signal = true) {
    let variation = +((+value).toFixed(2))
    if (signal) {
      variation = `${variation}%`
    }
    return variation
  }
}
