interface User {
  id: number;
  userName: string;
  email: string;
  userDetailDTO?:{
    firstName: string;
    lastName: string;
    age: number;
    birthDay: Date;
  }
}
