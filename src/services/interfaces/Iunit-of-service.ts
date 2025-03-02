
import IHttpService from './ihttp-service';
import IStudentService from './istudent-service';

export default interface IUnitOfService {
  HttpService: IHttpService;
  StudentService: IStudentService;
}
