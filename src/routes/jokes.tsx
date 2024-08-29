import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { createJokeQueryOptions } from '../api/createJokeQueryOptions'

export const Route = createFileRoute('/jokes')({
  component: Jokes
})

function Jokes() {
  const { data: joke } = useQuery(createJokeQueryOptions())

  if (!joke) return <div>Loading...</div>

  return (
    <div className='group p-spacing'>
      <h1 className='text-5xl pb-inner-spacing gap-spacing'>Jokes</h1>
      <p className='font-bold'>{joke.setup}</p>



      
      <div className='py-inner-spacing'>Reveal Joke: <input type="checkbox" /></div>
      <p className='transition-opacity opacity-0 group-has-[input:checked]:opacity-100'>{joke.punchline}</p>
    </div>
  )
}