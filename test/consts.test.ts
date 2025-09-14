import { expect, test } from 'vitest'
import { SITE_TITLE } from '@/consts'

test('SITE_TITLE', () => {
  expect(SITE_TITLE).toBe('Astro Blog')
})
