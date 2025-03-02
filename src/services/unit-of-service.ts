import { container } from '@/config/ioc';
import { TYPES } from '@/config/types';
import { injectable } from 'inversify';

import IUnitOfService from './interfaces/Iunit-of-service';
import IHttpService from './interfaces/ihttp-service';
import IStudentService from './interfaces/istudent-service';


@injectable()
export default class UnitOfService implements IUnitOfService {
  public HttpService: IHttpService;
  public StudentService: IStudentService;
  constructor(
    httpService = container.get<IHttpService>(TYPES.IHttpService),
    studentService = container.get<IStudentService>(TYPES.IStudentService),

  ) {
    this.HttpService = httpService;
    this.StudentService = studentService;
  }
}
