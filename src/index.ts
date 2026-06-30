import type { Context } from 'koishi'
import { resolve } from 'node:path'
import {} from '@koishijs/console'

export const name = 'party'
export const inject = ['console']

export function apply(ctx: Context) {
  ctx.console.addEntry({
    dev: resolve(__dirname, '../client/index.ts'),
    prod: resolve(__dirname, '../dist'),
  })
}
