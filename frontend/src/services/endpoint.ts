import { ENDPOINTS } from "app-constants";
import Config from 'config';

class EndpointService {
  public static BASE_URL = Config.base_url;

  query: string;

  constructor(query: string) {
    this.query = query;
  }

  get convertedWords() {
    return `${EndpointService.BASE_URL}/${ENDPOINTS.convert}${this.query}`;
  }
}

export default EndpointService;
