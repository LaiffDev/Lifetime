import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserService } from '../../services/userService/user.service';
import { GetUserList, SignUp } from './user.action';
import { firstValueFrom } from 'rxjs';

export class UsersStateModel {
  users!: any[];
}

@State<UsersStateModel>({
  name: 'UsersState',
  defaults: {
    users: [],
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

    await firstValueFrom(this.userService.SignUp(payload));

    //automatically updates the users array after a user registers
    const users = await firstValueFrom(this.userService.GetUserList());

    ctx.patchState({ users });
  }
}
