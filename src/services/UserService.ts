import { Ref, ref } from 'vue'
import User from '../interfaces/User'




class UserService {
  private user: Ref<User>
  private users: Ref<Array<User>>

  constructor () {
    this.user = ref<User>({})
    this.users = ref<Array<User>>([])
  }

  getUser ():Ref<User>{
    return this.user
  }

  getUsers ():Ref<Array<User>>{
    return this.users
  }
  postUser (user:User):void{
    this.user.value = user
  }


  async fetchAll():Promise<void> {
    try {
      const url = 'http://localhost:8081/v1/users?detailed=true'
      const response = await fetch(url)
      const json =  await response.json()
      
      this.users.value = await json.map( usuario => {
          Object.assign(usuario,usuario.userDetailDTO)
          delete usuario.userDetailDTO
          return usuario
        })
      
        this.users.value.forEach( usuario => {
          delete usuario.userDTO
          delete usuario.password
          delete usuario.birthDay
        })

    } catch (error) {
      console.log(error);
      
    }
  }
  
  async fetchById(id: any):Promise<void> {
    try {
      const url = `http://localhost:8081/v1/users/${id}`
      const response = await fetch(url)
      const json =  await response.json()
      this.user.value = await json
    } catch (error) {
      console.log(error);
      
    }
  }

  async createUser(user: User): Promise<void> {
    try {
      const url = 'http://localhost:8081/v1/users'
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) // enviar el usuario nuevo como JSON al servidor
      })
      const json = await response.json()
      this.user.value = await json // asignar el usuario creado con la respuesta del servidor
    } catch (error) {
      console.log(error)
    }

  }

}

export default UserService