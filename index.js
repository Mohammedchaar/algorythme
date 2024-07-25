   function analyzeSentence(sentence) {
    const length = sentence.length;
    const words = sentence.split(/\s+/).filter(Boolean).length;
    const vowels = (sentence.match(/[aeiou]/gi) || []).length;
    
    return { length, words, vowels };
  }
  