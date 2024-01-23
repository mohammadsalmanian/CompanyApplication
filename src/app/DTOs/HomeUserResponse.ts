
import { UserDTO } from './Entity/UserDTO';

export interface HomeUserResponse{
    status : string,
    data : UserDTO[]
}