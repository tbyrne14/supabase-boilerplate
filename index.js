
import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.10.0"

const supabaseUrl = 'https://hlcguyefwynkxworllqq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhsY2d1eWVmd3lua3h3b3JsbHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyMTMyMzQsImV4cCI6MTk5Mzc4OTIzNH0.p2Qs1AaFut3rYnQi-5FSoNtUFOjVB5HUbH_AIwKSa_s'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {  
let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><tr>${book.description}</td></tr>`;
  }
}

getBooks();
