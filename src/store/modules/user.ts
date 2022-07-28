
import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { getToken } from '@/utils/cookies'
import store from '@/store'



export interface IUserState {
    token: string
    username: string
    avatar: string
    email: string
    phone: string
    menu: Array<any>
}

@Module({ dynamic: true, store, name: 'user'})
class User extends VuexModule implements IUserState {
    public token = getToken() || ''
    public active = false
    public username = ''
    public language = ''
    public avatar = ''
    public email = ''
    public phone = ''
    public menu: Array<any> = []
}