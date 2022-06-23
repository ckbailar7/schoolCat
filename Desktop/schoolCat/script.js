class School {

    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents; 
        
    }

    get name() {
        return this._name;
    }      v 

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${ this.level} school level.` )
    }

   static pickSubsituteTeacher(subsituteTeacher){
    const randInt = Math.floor(subsituteTeacher.length * Math.random());
    return subsituteTeacher[randInt];
    }

    set numberOfStudents(value) {
        if(value.isNan()) {
            console.log('Invalid Input, numberOfStudents must have a number value')
    } else {
        this._numberOfStudents = value;
    }

};
};

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary',  numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }


}

class MiddleSchool extends School {
    constructor(name, numberOfStudents, sportsTeams){
        super(name, 'middle', numberOfStudents);
        this.sportsTeams = sportsTeams
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams, avgTestScores,) {
        super(name, 'high', numberOfStudents);
        this._sportTeams = sportsTeams;
        this._avgTestScores = avgTestScores;
    }

    get sportsTeams() {
        return this._sportTeams;
    }

    get avgTestScores() {
        return this._avgTestScores;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')


const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);


const bentonMiddle = new MiddleSchool('Benton Louise Middle School <3', 499, ['Baseball', 'Soccer', 'Football', 'VolleyBall']);


const ForrestPPP = new HighSchool('Forest PP', 600, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 4.5);




// Logging to the console

// lorraineHansbury.quickFacts();

//returns random intg of array.length
// console.log(School.pickSubsituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']))


//only returns the sports team property of the Al. E smith Highschool class
// console.log(alSmith.sportsTeams);

// console.log(bentonMiddle)


console.log(ForrestPPP)

console.log('All good captain');








    


    