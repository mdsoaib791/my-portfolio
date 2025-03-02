import StudentModel from "@/model/studentModel";
import * as Yup from 'yup';

// Regular expression to only allow alphabets (no numbers or special characters)
const nameRegex = /^[A-Za-z\s]+$/;

// Regular expression for phone number validation (e.g., only digits)
const phoneRegex = /^[0-9]{10}$/; // Example for a 10-digit phone number

const StudentSchema: Yup.ObjectSchema<StudentModel> = Yup.object().shape({
  name: Yup.string()
    .matches(nameRegex, "Name should only contain alphabets.")
    .required("Name is required."),

  gender: Yup.string()
    .required("Please select gender"),

  dateOfBirth: Yup.date()
    .required("Date of birth is required."),

  roll: Yup.string()
    .matches(/^\d+$/, "Roll number should only contain digits.")
    .required("Roll number is required."),

  bloodGroup: Yup.string()
    .required("Please select blood group"),

  religion: Yup.string()
    .matches(nameRegex, "Religion should only contain alphabets.")
    .required("Please select religion"),

  email: Yup.string()
    .email("Invalid email format.")
    .required("Email is required."),

  class: Yup.string()
    .required("Please select class"),

  section: Yup.string()
    .required("Please select section"),

  admissionId: Yup.string()
    .matches(/^\d+$/, "Admission ID should only contain digits.")
    .required("Admission ID is required."),

  phone: Yup.string()
    .matches(phoneRegex, "Phone number must be a valid 10-digit number.")
    .required("Phone number is required."),

  shortBio: Yup.string()
    .required("Short bio is required."),

  studentPhoto: Yup.mixed<File>()
    .nullable()
    .required("Photo is required"),
});

export default StudentSchema;

