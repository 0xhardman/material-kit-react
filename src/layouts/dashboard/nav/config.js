// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: '监控面板',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: '节点浏览',
    path: '/dashboard/node',
    icon: icon('ic_user'),
  },
  {
    title: '账户信息',
    path: '/dashboard/profile',
    icon: icon('ic_blog'),
  },
  {
    title: '提案投票',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: icon('ic_blog'),
  // },
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
