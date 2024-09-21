const greetingMessageList = [
  'Hello',
  'Hi',
  'Hey',
  'Greetings',
  'Good day',
  'Howdy',
  'Salutations',
  "What's up",
  'Hiya',
  'Hey there',
  'Hello there',
  'Hello'
]

const getRandomGreetingMessage = () => {
  return greetingMessageList[Math.floor(Math.random() * greetingMessageList.length)]
}

export default getRandomGreetingMessage
