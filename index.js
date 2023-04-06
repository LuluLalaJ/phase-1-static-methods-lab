class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^\w\s'\-]/g, '')
  }

  static titleize(string) {
    let words = string.split(" ")
    let exceptions = ["a", "an", "but", "of", "and", "for", "by", "at", "from", "the"]
    let newWords = [this.capitalize(words[0])]
    words.slice(1).forEach(word => {
      if (exceptions.includes(word)) {
        newWords.push(word)
      } else {
        newWords.push(this.capitalize(word))
      }
    }) 

  return newWords.join(" ")    

  }
}

