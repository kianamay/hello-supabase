
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://mzrrfxjkxestlzclvjvs.supabase.co', 'public-anon-key')

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