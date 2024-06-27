function createPerson(name) {
    //An object defining the persons age
    const privateproperties = {}
    
    // A function to manipulate and  get the age and name of the person
    const person = {
        setName(name){
        if (!name) {
            throw new Error('A person must have a name')
            } 
            privateproperties.name = name;
        },
        getName() {
            return privateproperties.name;
        },
        setAge(age) {
            if (age < 18) {
                throw Error('A perosn must be older than 18')
            }
            privateproperties.age = age;
        },
        getAge() {
            return privateproperties.age;
        }

       
        
    } 

    person.setName(name)

    return person 

}

//factory is a way of calling an object in an abstract manner giving an incapsulation
//