import { withNavigationWatcher } from './contexts/navigation';
import { HomePage, TasksPage, ProfilePage } from './pages';
import ExamplePage from './pages/example/example'

const routes = [
  {
    path: '/tasks',
    component: TasksPage
  },
  {
    path: '/example',
    component: ExamplePage
  },
  {
    path: '/profile',
    component: ProfilePage
  },
  {
    path: '/home',
    component: HomePage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
