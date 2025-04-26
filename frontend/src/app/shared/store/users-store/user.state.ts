import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserService } from '../../services/userService/user.service';
import { GetUserList, Login, SignUp } from './user.action';
import { firstValueFrom } from 'rxjs';

export class UsersStateModel {
  users!: any[];
  loggedUser!: any;
}

@State<UsersStateModel>({
  name: 'UsersState',
  defaults: {
    users: [],
    loggedUser: {},
  },
})
@Injectable()
export class UsersState {
  constructor(private userService: UserService) {}

  @Action(GetUserList)
  async getUsers(ctx: StateContext<UsersStateModel>): Promise<any> {
    const users = await firstValueFrom(this.userService.GetUserList());
    ctx.patchState({ users });
  }

  @Action(SignUp)
  async signUp(
    ctx: StateContext<UsersStateModel>,
    action: SignUp
  ): Promise<any> {
    const payload = action.payload;

    //saving a new user to database
    await firstValueFrom(this.userService.SignUp(payload));

    /*
    automatically updates the users array after a user is being registered.
    not necessary to use like this though*/
    const users = await firstValueFrom(this.userService.GetUserList());

    ctx.patchState({ users });
  }

  @Action(Login)
  async login(ctx: StateContext<UsersStateModel>, action: Login): Promise<any> {
    const payload = action.payload;
    const loggedUser = await firstValueFrom(this.userService.Login(payload));

    ctx.patchState({ loggedUser });
  }
}
