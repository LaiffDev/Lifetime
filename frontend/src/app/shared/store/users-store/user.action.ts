export class GetUserList {
  static readonly type = '[User] Get';
}

export class SignUp {
  static readonly type = '[User] Sign Up';
  constructor(public payload: any) {}
}
