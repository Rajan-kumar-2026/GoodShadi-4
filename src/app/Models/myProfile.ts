export class MyProfile {
    firstName!: string;
    lastName!: string;
    mobileNumber!: number;
    dateOfBirth!: string;
    genderId!: number;
    educationId!: number;
    maritalstatusId!: number;
    employmentTypeId!: number;
    jobTitle!: string;
    countryId!: number;
    mobileNumVisibility!: string;

    constructor(visibility: string) {
        this.mobileNumVisibility = visibility;
    }
}