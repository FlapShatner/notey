import { notes } from './data/db'
import Form from './components/form'

export default function Home() {
 return (
  <main className='flex min-h-screen flex-col items-center p-24'>
   <h1 className='text-xl'>THIS IS APP</h1>
   <Form />
   <div>
    {notes.map((note) => (
     <div
      key={note.id}
      className='border p-4 my-4 rounded-md'>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
     </div>
    ))}
   </div>
  </main>
 )
}
