export default interface StudentModel {
  name: string;
  gender: string;
  dateOfBirth: Date;
  roll: string;
  bloodGroup: string;
  religion: string;
  email: string;
  class: string;
  section: string;
  admissionId: string;
  phone: string; // Change this to string
  shortBio: string;
  studentPhoto: File | null;
}
