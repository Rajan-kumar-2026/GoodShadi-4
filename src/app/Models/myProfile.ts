export class MyProfile {
    firstName!: string;
    lastName!: string;
    mobileNumber!: number;
    dateOfBirth!: string;
    genderid!: number;
    educationid!: number;
    maritalStatusid!: number;
    employmentTypeid!: number;
    jobTitle!: string;
    countryid!: number;
    mobileNumVisibility!: string;

    constructor(visibility: string) {
        this.mobileNumVisibility = visibility;
    }
}