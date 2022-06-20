import axios, { AxiosResponseHeaders, AxiosResponse } from 'axios';
import {
  Body,
  Method,
  Headers,
  isResponseWithoutData,
  isResponseWithData,
  DefaultErrorMessage,
} from './types';

interface ApiServiceProps {
  url: string;
  method?: Method;
  headers?: Headers;
  credential?: boolean;
  body?: Body;
}

export interface ResponseModel<T> {
  error: boolean;
  message: string;
  statusCode: number;
  headers: AxiosResponseHeaders;
  data: T;
}

export default class ApiService<T> {
  private _url: string;
  private _method: Method;
  private _headers: Headers;
  private _credential: boolean;
  private _body: Body;

  constructor(props: ApiServiceProps) {
    this._url = props.url;
    this._method = props.method || 'GET';
    this._headers = { 'Content-Type': 'application/json', ...props.headers };
    this._credential = props.credential || false;
    this._body = props.body || null;
  }

  async request(): Promise<ResponseModel<T>> {
    const response = await axios({
      url: this._url,
      method: this._method,
      headers: this._headers,
      withCredentials: this._credential,
      data: this._body,
    }).catch((err) => err.response);

    const responseModel: ResponseModel<T> = this.buildResponseModel(response);
    return responseModel;
  }

  private buildResponseModel(res: AxiosResponse): ResponseModel<T> {
    let message = 'success';
    let error = false;

    if (res.status >= 400) {
      error = true;

      switch (res.status) {
        case 401:
          message = DefaultErrorMessage.Unauthorized;
          if (isResponseWithoutData(res.data)) {
            message = res.data.status.message;
          }

          break;
        case 500:
          message = DefaultErrorMessage.ServerError;
          if (isResponseWithoutData(res.data)) {
            message = res.data.status.message;
          }

          break;
        default:
          if (isResponseWithoutData(res.data)) {
            message = res.data.status.message;
          }
      }
    }

    const response: ResponseModel<T> = {
      error,
      message,
      statusCode: res.status,
      headers: res.headers,
      data: isResponseWithData(res.data) ? res.data.data : null,
    };

    return response;
  }
}
