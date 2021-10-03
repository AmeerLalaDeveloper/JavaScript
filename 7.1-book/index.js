function bookDescription(book) {

    return `The book ${book.name} has been created ${book.published} was written by ${book.author}`;
    
}

const book={author:'Ameer',name:'shero',published:1970,title:'JavaScrapt',description:'shenbalalalalblalbaoao'}
console.log( bookDescription(book));