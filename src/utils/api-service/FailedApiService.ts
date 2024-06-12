import { ApiServiceBase } from '@/utils/api-service/ApiServiceBase';

export class FailedApiService extends ApiServiceBase {
  constructor() {
    super('user/abc');
  }
}