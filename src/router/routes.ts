import Home from '../pages/Home/index'
import DiscoverMusic from '../pages/Home/DiscoverMusic/index'
import PersonalRecommend from '../pages/Home/DiscoverMusic/PersonalRecommend/index'
import MusicSheets from '../pages/Home/DiscoverMusic/MusicSheets/index'
import LatestSongs from '../pages/Home/DiscoverMusic/LatestSongs/index'
import MusicSheet from '../pages/Home/MusicSheet/index'

export interface RouteObject {
  path: string;
  component?: any;
  redirect?: string | Object;
  children?: Array<object>;
  exact?: boolean;
}

const routes: Array<RouteObject> = [
  {
    path: '/',
    redirect: '/recommend/discover/personal',
    exact: true
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/recommend/discover',
        component: DiscoverMusic,
        children: [
          {
            path: '/recommend/discover/personal',
            component: PersonalRecommend
          },
          {
            path: '/recommend/discover/sheets',
            component: MusicSheets
          },
          {
            path: '/recommend/discover/latest',
            component: LatestSongs
          }
        ]
      },
      {
        path: '/musicsheet/created',
        component: MusicSheet
      }
    ]
  }
]

export default routes
