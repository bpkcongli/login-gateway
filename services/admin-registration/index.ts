import ApiService, { ResponseModel } from '../../helpers/api-service';
import { RequestVerificationLinkPayload } from './types';

const BASE_URL = `${process.env.NEXT_PUBLIC_API_BASEURL}/${process.env.NEXT_PUBLIC_API_VERSION}`;
const AdminRegistrationService = {
  requestVerificationLink:
  async (data: RequestVerificationLinkPayload): Promise<ResponseModel<null>> => {
    const baseRequestModel = new ApiService<null>({
      url: `${BASE_URL}/administrators/registrations/request-verification-link`,
      method: 'POST',
      body: JSON.stringify(data),
    });
    const responseModel = await baseRequestModel.request();
    return responseModel;
  },
};

export default AdminRegistrationService;
