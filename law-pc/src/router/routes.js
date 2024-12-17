import index from '@/views/home/index'
import home from '@/views/home/home'
import aboutIn from '@/views/about/index'
import about from '@/views/about/template/about'
import milestones from '@/views/about/template/milestones'
import honor from '@/views/about/template/honor'
import friendship from '@/views/about/template/friendship'
import team from '@/views/team/index'
import teamDetail from '@/views/team/detail'
import domain from '@/views/domain/index'
import domainDetail from '@/views/domain/detail'
import news from '@/views/new/index'
import newsDetail from '@/views/new/detail'
import job from '@/views/job/index'
import jdx from '@/views/jdx/index'
import message from '@/views/message/index'


const routes = [{
    path: '/',
    // name: 'login',
    // component: login,
    redirect: '/home',
  },
  {
    path: '/jdx',
    name: 'jdx',
    component: jdx,
    meta: {
      setTabs: true,
      type: 'mk-jdx',
      loginToken: true
    }
  },
  {
    path: '',
    component: index,
    children: [{
        path: '/home',
        name: 'home',
        component: home,
        meta: {
          setTabs: true,
          type: 'mk-home',
          loginToken: true
        }
      },
      {
        path: '',
        component: aboutIn,
        children: [{
            path: '/about',
            name: 'about',
            component: about,
            meta: {
              setTabs: true,
              type: 'mk-about',
              loginToken: true
            }
          },
          {
            path: '/milestones',
            name: 'milestones',
            component: milestones,
            meta: {
              setTabs: true,
              type: 'mk-milestones',
              loginToken: true
            }
          },
          {
            path: '/honor',
            name: 'honor',
            component: honor,
            meta: {
              setTabs: true,
              type: 'mk-honor',
              loginToken: true
            }
          },
          {
            path: '/friendship',
            name: 'friendship',
            component: friendship,
            meta: {
              setTabs: true,
              type: 'mk-friendship',
              loginToken: true
            }
          },
        ]
      },
      {
        path: '/team',
        name: 'team',
        component: team,
        meta: {
          setTabs: true,
          type: 'mk-team',
          loginToken: true
        }
      },
      {
        path: '/team/detail',
        name: 'teamDetail',
        component: teamDetail,
        meta: {
          setTabs: true,
          type: 'mk-team-detail',
          loginToken: true
        }
      },
      {
        path: '/domain',
        name: 'domain',
        component: domain,
        meta: {
          setTabs: true,
          type: 'mk-domain',
          loginToken: true
        }
      },
      {
        path: '/domain/detail',
        name: 'domainDetail',
        component: domainDetail,
        meta: {
          setTabs: true,
          type: 'mk-domain-detail',
          loginToken: true
        }
      },
      {
        path: '/new',
        name: 'news',
        component: news,
        meta: {
          setTabs: true,
          type: 'mk-news',
          loginToken: true
        }
      },
      {
        path: '/new/detail',
        name: 'newsDetail',
        component: newsDetail,
        meta: {
          setTabs: true,
          type: 'mk-news-detail',
          loginToken: true
        }
      },
      {
        path: '/job',
        name: 'job',
        component: job,
        meta: {
          setTabs: true,
          type: 'mk-job',
          loginToken: true
        }
      },
      {
        path: '/message',
        name: 'message',
        component: message,
        meta: {
          setTabs: true,
          type: 'mk-message',
          loginToken: true
        }
      },
    ]
  }
]
export default routes
