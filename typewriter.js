const sentence = "hello there from karma";

 let i = 0

 const typewriter = () => setTimeout(() => {
   process.stdout.write(sentence[i++]);
   if (i < sentence.length) typewriter();
   if (i === sentence.length) process.stdout.write('\n');
 }, 50);

 typewriter();


//  let initialDelay = 0;

//  for(const char of sentence) {
//    setTimeout(() => {
//      process.stdout.write(char);
//    }, initialDelay);
//    initialDelay += 50;
//    console.log('\n'); // this doesnt work
//  };

// not sure how to implement \n for this ... will come back

