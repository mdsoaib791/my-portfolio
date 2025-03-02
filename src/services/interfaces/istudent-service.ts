
import { StudentDto } from '@/dtos/student-dto';
import StudentModel from '@/model/studentModel';
import { AxiosResponse } from 'axios';

export default interface IStudentService {
  get(): Promise<AxiosResponse<StudentDto[]>>;
  addStudent(model: StudentModel): Promise<AxiosResponse<StudentDto[]>>;
  getStudentDetails(userId: string): Promise<AxiosResponse<StudentDto>>;
}
