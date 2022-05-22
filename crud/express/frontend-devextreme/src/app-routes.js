import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage, HomeTasksPage } from './pages';

const routes = [
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/home-tasks',
    component: HomeTasksPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
