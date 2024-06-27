// Define the Boat class to hold the final boat configuration
class Boat {
    constructor(config) {
        this.hasMotor = config.hasMotor; // Whether the boat has a motor
        this.motorCount = config.motorCount; // Number of motors
        this.motorBrand = config.motorBrand; // Brand of the motor
        this.motorModel = config.motorModel; // Model of the motor
        this.hasSails = config.hasSails; // Whether the boat has sails
        this.sailsCount = config.sailsCount; // Number of sails
        this.sailsBrand = config.sailsBrand; // Brand of the sails
        this.sailsModel = config.sailsModel; // Model of the sails
        this.hullColor = config.hullColor; // Color of the boat's hull
    }
}

// Define the BoatBuilder class to build and configure the Boat instance
class BoatBuilder {
    // Method to add motors to the boat
    withMotor(count, brand, model) {
        this.hasMotor = true;
        this.motorCount = count;
        this.motorBrand = brand;
        this.motorModel = model;
        return this; // Return the builder instance for chaining
    }

    // Method to add sails to the boat
    withSails(count, brand, model) {
        this.hasSails = true;
        this.sailsCount = count;
        this.sailsBrand = brand;
        this.sailsModel = model;
        return this; // Return the builder instance for chaining
    }

    // Method to set the hull color of the boat
    setHullColor(color) {
        this.hullColor = color;
        return this; // Return the builder instance for chaining
    }

    // Method to build the final Boat instance
    build() {
        return new Boat({
            hasMotor: this.hasMotor,
            motorCount: this.motorCount,
            motorBrand: this.motorBrand,
            motorModel: this.motorModel,
            hasSails: this.hasSails,
            sailsCount: this.sailsCount,
            sailsBrand: this.sailsBrand,
            sailsModel: this.sailsModel,
            hullColor: this.hullColor // Pass the hull color to the Boat constructor
        });
    }
}

// Using the BoatBuilder to create a Boat instance
const myBoat = new BoatBuilder()
    .withMotor(2, 'jero', 'jkjnbkj') // Adding motors
    .withSails(2, 'jero', 'jkjnbkj') // Adding sails
    .setHullColor('red') // Setting the hull color
    .build(); // Building the Boat instance

console.log(myBoat.motorCount); // Outputs: red
