import ApiService, { ResponseModel } from '../../helpers/api-service';
import { LoginPayload } from './types';

const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASEURL}/${process.env.NEXT_PUBLIC_API_VERSION}`;
const AdminAuthenticationService = {
  login: async (data: LoginPayload): Promise<ResponseModel<null>> => {
    const baseRequestModel = new ApiService<null>({
      url: `${BASE_URL}/administrators/authenticate`,
      method: 'POST',
      body: JSON.stringify(data),
      credential: true,
    });
    const responseModel = await baseRequestModel.request();
    return responseModel;
  },
};

export default AdminAuthenticationService;
