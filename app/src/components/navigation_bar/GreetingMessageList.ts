const greetingMessageList = [
  'Hello',
  'Hi',
  'Hey',
  'Greetings',
  'Howdy',
  'Salutations',
  'Hiya',
  'Hello'
]

const getRandomGreetingMessage = () => {
  return greetingMessageList[Math.floor(Math.random() * greetingMessageList.length)]
}

export default getRandomGreetingMessage
