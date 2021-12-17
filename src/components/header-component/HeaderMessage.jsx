
export const HeaderMessage = () => {
  const messages = [
    'What\'s your plan for today?',
    'How are you?',
    'What\'s UP?',
    'How are you feeling today?',
    'Let\'s make plans for today!',
  ];


  const max = messages.length;
  const randomMessage =  Math.floor(Math.random()*(max))

  return (
    <h1 className="sm:text-4xl text-2xl">{messages[randomMessage]}</h1>
  )

}
