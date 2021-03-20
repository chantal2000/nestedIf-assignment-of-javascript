function getGrade(){
    var marks=87;
    var marks=30;
    switch(marks){
        case (marks>=80):
            console.log("A");
            break;
        case (marks>=70):
            console.log("B");
            break;
        case (marks>=60):
            console.log("C");
            break;
        case (marks>=50):
            console.log("D")
            break;
        case (marks>=0):
            console.log("E");
            break;
            default:
                console.log("F")
    }
}
getGrade();