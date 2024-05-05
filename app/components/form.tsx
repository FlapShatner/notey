'use client'
import React, { useState } from 'react'
import { notes } from '../data/db'

function Form() {
 const [title, setTitle] = useState('')
 const [content, setContent] = useState('')

 const handleSubmit = () => {
  if (!title || !content) return
  const newNote = {
   id: Math.random().toString(),
   title,
   content,
  }
  notes.push(newNote)
 }

 return (
  <div className='flex flex-col gap-2'>
   <input
    className='border p-2 rounded-md text-slate-500'
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    type='text'
   />
   <textarea
    value={content}
    onChange={(e) => setContent(e.target.value)}></textarea>
   <button
    onChange={handleSubmit}
    className='bg-slate-500 py-1'>
    Submit
   </button>
  </div>
 )
}

export default Form
