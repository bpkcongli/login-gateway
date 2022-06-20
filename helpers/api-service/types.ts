enum AllowedMethods {
  'POST',
  'GET',
  'PUT',
  'PATCH',
}

export type Body = string | null | undefined;
export type Method = keyof typeof AllowedMethods;
export type Headers = {
  [key: string]: string | number | boolean;
};

export interface ApiGatewayResponse {
  timestamp: string;
  path: string;
  status: number;
  error: string;
  requestId: string;
}

interface ResponseStatusDescription {
  code: number;
  field: string;
  message: string;
}

interface ResponseStatus {
  code: number;
  message: string;
  descriptions?: ResponseStatusDescription[];
}

export interface ResponseWithoutData {
  status: ResponseStatus;
}
export interface ResponseWithData extends ResponseWithoutData {
  data: any;
}

export const isResponseWithData =
  (response: any): response is ResponseWithData => {
    if (response.status && response.data) return true;
    else return false;
}

export const isResponseWithoutData =
  (response: any): response is ResponseWithoutData => {
    if (response.status && !response.data) return true;
    else return false;
}

export const DefaultErrorMessage = {
  Unauthorized: 'Maaf, anda tidak memiliki akses, silahkan login kembali.',
  ServerError: 'Ada yang error di sistem kami, silahkan kembali lagi nanti.',
};
