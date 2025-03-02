import axios, { AxiosError, AxiosInstance } from 'axios';
import { injectable } from 'inversify';
import IHttpService from './interfaces/ihttp-service';

@injectable()
export default class HttpService implements IHttpService {
  private readonly baseUrl: string;
  private readonly clientId: string;

  constructor() {
    this.baseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;
    this.clientId = `${process.env.CLIENT_ID}`;
  }

  externalCall(contentType: string = 'application/json'): AxiosInstance {
    const instance = axios.create({
      withCredentials: true, // Enable CORS and credentials for external calls if needed
    });
    instance.defaults.headers.common['Content-Type'] = contentType;
    return instance;
  }

  call(contentType: string = 'application/json'): AxiosInstance {
    const instance = axios.create({
      baseURL: this.baseUrl,
      withCredentials: true, // Support for cross-origin requests with credentials (cookies, tokens, etc.)
    });
    instance.defaults.headers.common['clientId'] = this.clientId;
    instance.defaults.headers.common['Content-Type'] = contentType;

    const token = localStorage.getItem('at');
    if (token) {
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    // Validate response
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            // 401 Unauthorized
            console.log('call logout'); // Implement logout
          } else if (error.response?.status === 403) {
            // 403 Forbidden
            console.log('call access-denied page'); // Implement access-denied handling
          }

          const statusCode: number = error.response?.status || 0;
          if (statusCode >= 400 && statusCode < 500) {
            return error;
          }
        }

        // Handle global error
        return error;
      }
    );
    return instance;
  }

  callWithoutInterceptor(contentType: string = 'application/json'): AxiosInstance {
    const instance = axios.create({
      baseURL: this.baseUrl,
      withCredentials: true, // Enable cross-origin requests with credentials
    });
    instance.defaults.headers.common['clientId'] = this.clientId;
    instance.defaults.headers.common['Content-Type'] = contentType;

    return instance;
  }
}
