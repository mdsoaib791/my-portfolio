import { container } from '@/config/ioc';
import { TYPES } from '@/config/types';
import { StudentDto } from '@/dtos/student-dto';
import StudentModel from '@/model/studentModel';
import { AxiosResponse } from 'axios';
import { injectable } from 'inversify';
import IHttpService from './interfaces/ihttp-service';
import IStudentService from './interfaces/istudent-service';


@injectable()
export default class StudentService implements IStudentService {
  private readonly httpService: IHttpService;
  constructor(httpService = container.get<IHttpService>(TYPES.IHttpService)) {
    this.httpService = httpService;
  }

  get(): Promise<AxiosResponse<StudentDto[]>> {
    return this.httpService.callWithoutInterceptor().get<StudentDto[], AxiosResponse<StudentDto[]>>(`/students`);
  }
  addStudent(model: StudentModel): Promise<AxiosResponse<StudentDto[]>> {
    return this.httpService.callWithoutInterceptor().post<StudentDto[], AxiosResponse<StudentDto[]>>(`/students/register`, model);
  }

  getStudentDetails(StudentId: string): Promise<AxiosResponse<StudentDto>> {
    return this.httpService.callWithoutInterceptor().get<StudentDto, AxiosResponse<StudentDto>>(`/students/${StudentId}`);
  }

}
