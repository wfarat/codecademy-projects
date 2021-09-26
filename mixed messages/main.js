const one = ['Waste no more time, to','It never ceases to amaze me, that people', 'If a man knows not which port he sails, then', 'No person has the power to have everything they want, so', 
'In your actions, don’t procrastinate, but', 'The best revenge is to', 'Choose not to be harmed, instead', 'It’s time you realized that, it’s pointless to', 
'External things are not the problem, the problem is to', 'If anyone can refute me—show me I’m making a mistake or looking at things from the wrong perspective— then', 
'You could leave life right now, so', 'Be tolerant with others and', 'We are more often frightened than hurt; that is because we', 'Nothing, to my way of thinking, is worth to', 'He who fears death will never',
 'Think of the life you have lived until now as over and', 'If it is not right, do not do it, just', 'This is our big mistake: to', 'Life is very short and anxious, so', 
'I judge you unfortunate because, you tend', 'How does it help… to', 'People are frugal in guarding, because they', 'How long are you going to wait before You start to', 'Don’t seek for everything to happen, better start to', 
'First say to yourself what it means to', 'Curb your desire— and don’t', 'That’s why the philosophers warn us not to be satisfied with mere learning, but we', 'Don’t explain your philosophy, better', 'The chief task in life is simply this:',
'If anyone tells you that a certain person speaks ill of you, then', 'I begin to speak only, when someone', 'What man actually needs is to', 'When we are no longer trying to'];
const two = ['argue what a good man should be', 'live life according to Nature', 'love ourselves more than other people', 'like your enemy', 'feel harmed', 'dance like a puppet', 
'be content to be thought foolish and stupid', 'do anything worth of a man who is alive', 'determine what you do and say and think', 'suffer more in imagination than in reality', 
'cheerfully put to good use', 'pass some time', 'never do anything worth of a man who is alive', 'look forward to death', 'neglect the present, and fear the future', 'make troubles heavier by bemoaning them'
, 'demand the best for yourself', 'wish that everything happens as it actually will', 'don’t set your heart on so many things and you will get what you need', 'forget what we learned and end up doing the opposite',
'look for good and evil', 'make excuses about what is said', 'change a situation'];
const three = ['Live a good life', 'Love and cherish every moment', 'Help people around You', 'Change yourself', 'Find a reason to live', 'Give your life a meaning', 'Live beutifully',
'Make a lot of friends and lovers', 'Be happy', 'Follow your dreams', 'Become the person You want to be'];

const rndMsg = arr => arr[Math.floor(Math.random() * arr.length)];

console.log(`${rndMsg(one)} ${rndMsg(two)}. ${rndMsg(three)}.`);