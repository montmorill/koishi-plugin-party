import type { Context } from '@koishijs/client'
import { icons } from '@koishijs/client'
import {} from '@koishijs/plugin-auth'
import Party from './icons/party.vue'
import Page from './page.vue'

export default (ctx: Context) => {
  icons.register('party', Party)

  ctx.page({
    path: '/party',
    name: '派对',
    icon: 'party',
    fields: ['user'],
    position: 'top',
    component: Page,
  })
}
