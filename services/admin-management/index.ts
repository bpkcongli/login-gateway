import ApiService, { ResponseModel } from '../../helpers/api-service';
import { ForgetPasswordPayload, ForgetPasswordResult } from './types';

const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASEURL}/${process.env.NEXT_PUBLIC_API_VERSION}`;
const AdminManagementService = {
  forgetPassword:
  async (data: ForgetPasswordPayload): Promise<ResponseModel<ForgetPasswordResult>> => {
    const baseRequestModel = new ApiService<ForgetPasswordResult>({
      url: `${BASE_URL}/administrators/forget-password`,
      method: 'POST',
      body: JSON.stringify(data),
    });
    const responseModel = await baseRequestModel.request();
    return responseModel;
  },
};

export default AdminManagementService;
