import React, { useState, useEffect } from 'react'

const JokeFetcher = () => {
  const [joke, setJoke] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  
  const fetchJoke = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      if (!response.ok) {
        throw new Error('Failed to fetch joke')
      }
      const data = await response.json()
      setJoke(data.joke)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    fetchJoke()
  }, []) 
  
  return (
    <div>
      <h3>Random Programming Joke</h3>
      {isLoading && <p>Loading joke...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && <p>{joke}</p>}
      <button onClick={fetchJoke}>Get New Joke</button>
    </div>
  )
}

export default JokeFetcher