//A -> 80 -100





function gradeCalc(score,totalScore){
    let percent =(score /totalScore) * 100;
    const letterGrade ="";

    if (percent >= 80){
        letterGrade ="A";
    }else if(percent >= 60){
        letterGrade ="B";
    }else if (percent >= 40){
        letterGrade ="c";
    } else if(percent >=20){
        letterGrade ="D";
    }else {
        letterGrade ="E"
    }

    return `you got grade ${letterGrade}which is ${percent}%`;
}

let scoreNum1 =gradeCalc(11,20);
console.log(scoreNum1);