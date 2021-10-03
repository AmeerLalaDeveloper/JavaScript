function centuryFromYear(year){

    return year/100%1==0?year/100:parseInt(year/100)+1;

}
console.log(
    centuryFromYear(1601)
);