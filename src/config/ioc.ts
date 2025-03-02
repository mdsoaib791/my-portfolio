import 'reflect-metadata';

import { Container } from 'inversify';
import { TYPES } from './types';

import IHttpService from '@/services/interfaces/ihttp-service';
import IUnitOfService from '@/services/interfaces/Iunit-of-service';

import GetService from '@/services/get-service';
import HttpService from '@/services/http-service';
import IGetService from '@/services/interfaces/iget-service';
import UnitOfService from '@/services/unit-of-service';


const container = new Container();

container.bind<IHttpService>(TYPES.IHttpService).to(HttpService);
container.bind<IUnitOfService>(TYPES.IUnitOfService).to(UnitOfService);
container.bind<IGetService>(TYPES.IGetService).to(GetService);


export { container };

