import { container } from '@/config/ioc';
import { TYPES } from '@/config/types';
import { injectable } from 'inversify';

import IUnitOfService from './interfaces/Iunit-of-service';
import IGetService from './interfaces/iget-service';
import IHttpService from './interfaces/ihttp-service';


@injectable()
export default class UnitOfService implements IUnitOfService {
  public HttpService: IHttpService;
  public GetService: IGetService;

  constructor(
    httpService = container.get<IHttpService>(TYPES.IHttpService),
    GetService = container.get<IGetService>(TYPES.IGetService),

  ) {
    this.HttpService = httpService;
    this.GetService = GetService;

  }
}
