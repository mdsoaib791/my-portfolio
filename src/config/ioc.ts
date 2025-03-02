import 'reflect-metadata';

import { Container } from 'inversify';
import { TYPES } from './types';

import IHttpService from '@/services/interfaces/ihttp-service';
import IUnitOfService from '@/services/interfaces/Iunit-of-service';

import HttpService from '@/services/http-service';
import IStudentService from '@/services/interfaces/istudent-service';
import StudentService from '@/services/student-service';
import UnitOfService from '@/services/unit-of-service';

const container = new Container();

container.bind<IHttpService>(TYPES.IHttpService).to(HttpService);
container.bind<IUnitOfService>(TYPES.IUnitOfService).to(UnitOfService);
container.bind<IStudentService>(TYPES.IStudentService).to(StudentService);


export { container };


