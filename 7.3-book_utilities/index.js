const book1={name:'HarryPotter', author:'En Li Mosag', year:1992}
const book2={name:'Witcher', author:'Mosheko', year:1732}
const bookUtils={
    getFirstPublished:function(book1,book2){
        return Math.min(book1.year,book2.year);

    },
    setNewEdition:function(book,editionYear)
    {
        book.editionYear=editionYear;
    }
    , 
    setLanguage:function(book,language) {
        book[language]=language;

    }
    ,
    setTranslation:function(book,language,translation) {
        book[translation]={language:language,translation:translation};

    },
    setPublisher:function(book,name,location) {
        book[publisher]={name:name,location:location};

    },
    isSamePublisher:function(book1,book2){

        return book1.name==book2.name&&book1.location==book2.location;
    }


};

