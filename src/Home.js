import React from 'react'
import { useFetch } from './useFetch';

export default function Home() {


  const {data} = useFetch('https://jsonplaceholder.typicode.com/todos')

  return (
    <>
      {data && data.map((todo) => {
          return <h3 key={todo.id}>{todo.title}</h3>
      })}
    </>
  )
}
