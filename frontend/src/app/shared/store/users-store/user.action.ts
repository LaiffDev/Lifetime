export class GetUserList {
  static readonly type = '[User] Get Users';
}

export class SignUp {
  static readonly type = '[User] Sign Up';
  constructor(public payload: any) {}
}

export class Login {
  static readonly type = '[User] Login';
  constructor(public payload: any) {}
}
