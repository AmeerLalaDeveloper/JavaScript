var library = [
    {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true
    },
    {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true
    },
    {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
    }
    ];

    function display(library){

        let books=library.filter(item=>item.readingStatus==true)
        for(let book of books){

            console.log('title : '+book.title,'author : '+ book.author,"readingStatus : "+book.readingStatus);

        }
    }

        display(library)
