const obj={

    name:'ameer',
    printName:function(){
        console.log(this.name);
    },
    printAfterSecond:function(){
        setTimeout(this.printName.bind(this)
        ,1000)
    }
}
obj.printAfterSecond();
