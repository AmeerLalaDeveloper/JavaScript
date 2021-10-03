const log=console.log;
function gradeAssign(grade){

    if (grade<=64)return 'F';
    else if (grade<=69)return 'D';
    else if (grade<=79)return 'C';
    else if (grade<=89)return 'B';    
    else if (grade<=100)return 'A';    
    

    else
        return 'Invalid';



}
log(gradeAssign(21));

//Math.range For Lazy Programmers