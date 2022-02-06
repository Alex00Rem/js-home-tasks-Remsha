function Wordcounter() {
  var text = prompt('Ввести текст', '').toLowerCase().split('');
  var numberChar = text.length;
  var count = 0;
  var vowels = ['у', 'е', 'ы', 'а', 'о', 'э', 'я', 'и', 'a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < numberChar; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }
  console.log(count);
}
Wordcounter();