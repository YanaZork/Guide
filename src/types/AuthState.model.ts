import { User } from "./User.model";

export default interface AuthStateModel {
  currentUser?: User;
}
