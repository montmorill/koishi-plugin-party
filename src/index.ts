import { Schema } from 'koishi'

export const name = 'nazeya'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply() {
  // write your plugin here
}
