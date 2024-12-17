import app from '@/App'
import home from '@/router/home'
import institution from '@/router/institution'
import links from '@/router/links'
import team from '@/router/team'
import research from '@/router/research'
import legalcases from '@/router/legalcases'
import news from '@/router/new'
import job from '@/router/job'
import suggest from '@/router/suggest'
import apply from '@/router/apply'

const routes = [{
  path: '/',
  name: 'app',
  component: app,
  redirect: '/home',
  children: [
    ...home,
    ...institution,
    ...links,
    ...team,
    ...research,
    ...legalcases,
    ...news,
    ...job,
    ...suggest,
    ...apply
  ]
}]

export default routes
