### JS-Object

notation of object:
<code>
let myBook = {
    title: '1917',
    author: 'Jack',
    pageCount:326
}
</code>



let getSummary =function(book){
    return{
        summary:`The author is ${book.author}. The page count is ${book.title}`,
        pageCountSummary:` The page count is ${book.pageCount} `
 }
    }
    
    
let bookSummary =getSummary(myBook)

let otherBookSummary=getSummary(otherBook)

console.log(bookSummary.summary)

console.log(bookSummary.pageCountSummary)
