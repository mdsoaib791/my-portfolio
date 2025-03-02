
import IGetService from './iget-service';
import IHttpService from './ihttp-service';

export default interface IUnitOfService {
  HttpService: IHttpService;
  GetService: IGetService
}
