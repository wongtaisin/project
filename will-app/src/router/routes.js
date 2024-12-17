import index from '@/App'
import home from '@/views/home/home'
import institution from '@/views/institution/index'
import links from '@/views/links/index'
import team from '@/views/team/index'
import teamDetail from '@/views/team/detail'
import research from '@/views/research/index'
import researchDetail from '@/views/research/detail'
import legalcases from '@/views/legalcases/index'
import legalcasesDetail from '@/views/legalcases/detail'
import news from '@/views/new/index'
import newsDetail from '@/views/new/detail'
import job from '@/views/job/index'
import suggest from '@/views/suggest/index'
import apply from '@/views/apply/index'

const routes = [{
    path: '/',
    redirect: '/home',
  },
  {
    path: '',
    component: index,
    children: [{
        path: '/home',
        name: 'home',
        component: home,
        meta: {
          type: 'page-home'
        }
      },
      {
        path: '/institution',
        name: 'institution',
        component: institution,
        meta: {
          type: 'page-institution'
        },
      },
      {
        path: '/links',
        name: 'links',
        component: links,
        meta: {
          type: 'page-links'
        },
      },
      {
        path: '/team',
        name: 'team',
        component: team,
        meta: {
          type: 'page-team'
        }
      },
      {
        path: '/team/detail',
        name: 'teamDetail',
        component: teamDetail,
        meta: {
          type: 'page-team-detail'
        }
      },
      {
        path: '/research',
        name: 'research',
        component: research,
        meta: {
          type: 'page-research'
        }
      },
      {
        path: '/research/detail',
        name: 'researchDetail',
        component: researchDetail,
        meta: {
          type: 'page-research-detail'
        }
      },
      {
        path: '/legalcases',
        name: 'legalcases',
        component: legalcases,
        meta: {
          type: 'page-legalcases'
        }
      },
      {
        path: '/legalcases/detail',
        name: 'legalcasesDetail',
        component: legalcasesDetail,
        meta: {
          type: 'page-legalcases-detail'
        }
      },
      {
        path: '/news',
        name: 'news',
        component: news,
        meta: {
          type: 'page-news'
        }
      },
      {
        path: '/news/detail',
        name: 'newsDetail',
        component: newsDetail,
        meta: {
          type: 'page-news-detail'
        }
      },
      {
        path: '/job',
        name: 'job',
        component: job,
        meta: {
          type: 'page-job'
        }
      },
      {
        path: '/suggest',
        name: 'suggest',
        component: suggest,
        meta: {
          type: 'page-suggest'
        }
      },
      {
        path: '/apply',
        name: 'apply',
        component: apply,
        meta: {
          type: 'page-apply'
        }
      }
    ]
  }
]

export default routes
