import { environment } from "../../environments/environment.development";

export const DomainName = environment.development ? 'https://hostname.com' : 'https://localhost:7029';