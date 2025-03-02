import { GetDto } from '@/dtos/get-dto';
import Response from '@/dtos/response-dto';
import { AxiosResponse } from 'axios';


export default interface IGetService {
    get(): Promise<AxiosResponse<Response<GetDto>>>;
    getById(id: string): Promise<AxiosResponse<GetDto>>;
}
