import NProgress from 'nprogress';
import { createRouter, createWebHashHistory } from 'vue-router';

export const ROUTERS = [
  {
    path: '/background',
    name: 'background',
    component: () => import('../view/background/index.vue'),
    meta: {
      title: '背景介绍'
    }
  },
  {
    path: '/research',
    name: 'research',
    component: () => import('../view/research/index.vue'),
    meta: {
      title: '方案调研'
    }
  },
  {
    path: '/plan',
    name: 'plan',
    component: () => import('../view/plan/index.md'),
    meta: {
      title: '重写规划'
    }
  },
  {
    path: '/deisgn',
    name: 'deisgn',
    meta: {
      title: '架构设计'
    },
    children: [
      {
        path: '/deisgn/framework',
        name: 'framework',
        component: () => import('../view/framework/index.vue'),
        meta: {
          title: '架构设计'
        }
      },
      {
        path: '/deisgn/page',
        name: 'page',
        component: () => import('../view/page/index.vue'),
        meta: {
          title: '页面设计'
        }
      }
    ]
  },
  {
    path: '/code',
    name: 'code',
    component: () => import('../view/code/index.vue'),
    meta: {
      title: '项目源码'
    }
  },
  {
    path: '/infrastructure',
    name: 'infrastructure',
    meta: {
      title: '基础建设'
    },
    children: [
      {
        path: '/infrastructure/component',
        name: 'component',
        component: () => import('../view/component/index.vue'),
        meta: {
          title: '组件库'
        }
      },
      {
        path: '/infrastructure/util',
        name: 'util',
        component: () => import('../view/util/index.vue'),
        meta: {
          title: '工具库'
        }
      },
      {
        path: '/infrastructure/bridge',
        name: 'bridge',
        component: () => import('../view/bridge/index.vue'),
        meta: {
          title: '桥接库'
        }
      },
      {
        path: '/infrastructure/rule',
        name: 'rule',
        component: () => import('../view/rule/index.vue'),
        meta: {
          title: '前端规范'
        }
      }
    ]
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('../view/result/index.vue'),
    meta: {
      title: '优化成效'
    }
  }
];

export const NOT_SHOW_IN_ROUTERS = [];

export const REDIRECT = {
  path: '/:pathMatch(.*)',
  redirect: ROUTERS[0].path
};

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...ROUTERS, ...NOT_SHOW_IN_ROUTERS, REDIRECT],
  scrollBehavior() {
    document.getElementById('container').scrollTop = 0;
  }
});

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
