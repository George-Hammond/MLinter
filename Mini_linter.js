let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//split strings into individual array
const storyWords = story.split(' ');

//find the length of the new array
console.log('The word count is ' + storyWords.length);

// filter out unnecessaryWords
const betterWords = storyWords.filter(unnecessaryWord => {
  return ! unnecessaryWords.includes(unnecessaryWord);
});

//find number of overusedWords
let overused1 = 0
	let overused2 = 0
	let overused3 = 0

storyWords.filter(function(word) {

  if (word === overusedWords[0]) {
    overused1+=1
  } else if (word === overusedWords[1]) {
    overused2+=1
  } else if (word === overusedWords[2]) {
    overused3+=1
  }
  });




// find number of sentences in the the array 
let sentences = 0;
storyWords.forEach (word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences+=1;
  }
})

//display number of sentences
console.log('Sentence count: ' + sentences);
console.log(`Overused word: ${overusedWords[0]} -- count:` + overused1);
console.log(`Overused word: ${overusedWords[1]} -- count:` + overused2);
console.log(`Overused word: ${overusedWords[2]} -- count:` + overused3);

//Reference: https://replit.com/@mesmollar/Mini-Linter-with-Iteratorshttps://replit.com/@mesmollar/Mini-Linter-with-Iterators

//  log the betterWords array as a single string
console.log(betterWords.join(' '));