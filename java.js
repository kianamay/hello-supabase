
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
//const supabase = createClient('https://mzrrfxjkxestlzclvjvs.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16cnJmeGpreGVzdGx6Y2x2anZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTY1MzYsImV4cCI6MjAyNjM3MjUzNn0.TS3XyLGOYmluoDbwJCC5HYMZ4vy_i_r2DVYeIm4hSBk')
const supabaseUrl = 'https://mzrrfxjkxestlzclvjvs.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16cnJmeGpreGVzdGx6Y2x2anZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3OTY1MzYsImV4cCI6MjAyNjM3MjUzNn0.TS3XyLGOYmluoDbwJCC5HYMZ4vy_i_r2DVYeIm4hSB'

const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks(){
  let { data: books, error } = await supabase
    .from('books')
    .select('*')

  for (let book of books){
    let bookList = document.getElementById('books');
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
  }
}
getBooks();