import { container } from '@/config/ioc';
import { TYPES } from '@/config/types';
import { injectable } from 'inversify';

import { AxiosResponse } from 'axios';

import { GetDto } from '@/dtos/get-dto';
import Response from '@/dtos/response-dto';
import IGetService from './interfaces/iget-service';
import IHttpService from './interfaces/ihttp-service';


@injectable()
export default class GetService implements IGetService {
    private readonly httpService: IHttpService;
    constructor(httpService = container.get<IHttpService>(TYPES.IHttpService)) {
        this.httpService = httpService;
    }

    get(): Promise<AxiosResponse<Response<GetDto>>> {
        return this.httpService.callWithoutInterceptor().get<GetDto, AxiosResponse<Response<GetDto>>>(`/posts/`);
    }
    getById(id: string): Promise<AxiosResponse<GetDto>> {
        return this.httpService.callWithoutInterceptor().get<GetDto, AxiosResponse<GetDto>>(`/posts/${id}`);
    }
}
