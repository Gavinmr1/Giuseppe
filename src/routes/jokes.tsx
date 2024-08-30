import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { createJokeQueryOptions } from '../api/createJokeQueryOptions'

export const Route = createFileRoute('/jokes')({
  loader: async ({ context: { queryClient } }) => {
    queryClient.ensureQueryData(createJokeQueryOptions())
  },
  component: Jokes,
})

function Jokes() {
  const { data: joke, refetch } = useSuspenseQuery(createJokeQueryOptions())

  if (!joke) return <div>Loading...</div>

  return (
    <div className='group p-spacing'>
      <h1 className='gap-spacing pb-inner-spacing text-5xl'>Jokes</h1>
      <p className='font-bold'>{joke.setup}</p>
      <div className='py-inner-spacing'>
        Reveal Joke: <input type='checkbox' />
      </div>
      <p className='opacity-0 transition-opacity group-has-[input:checked]:opacity-100'>
        {joke.punchline}
      </p>

      <button
        className='hover:bg-primary/50 mt-inner-spacing rounded-lg bg-primary px-4 py-2'
        onClick={() => refetch()}
      >
        Next Joke
      </button>
    </div>
  )
}
