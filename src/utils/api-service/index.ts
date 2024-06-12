import {UserApiService} from '@/utils/api-service/UserApiService';
import { FailedApiService } from '@/utils/api-service/FailedApiService';

/**
 * A const that contains all the reusable api services
 * A API call can be invoked like this: apiService.user.get();
 * */
export const apiService = {
  user: new UserApiService(),
  failed: new FailedApiService()
};