import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      layout: 'Default',
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
    meta: {
      layout: 'Default',
    }
  },
  {
    path: '/users/:id',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta: {
      layout: 'Default',
    }
  },
  {
    path: '/users/:id/edit',
    name: 'EditUser',
    component: () => import('../components/EditUser/EditUser.vue'),
    meta: {
      layout: 'Default',
    }
  },
  {
    path: '/users/new',
    name: 'NewUser',
    component: () => import('../views/NewUser.vue'),
    meta: {
      layout: 'Default',
    }
  }
 
];

export default routes;
