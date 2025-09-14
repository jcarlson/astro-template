import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import { describe, expect, test } from 'vitest'

import Header from "@/components/Header.astro"
import { SITE_TITLE } from "@/consts.ts";

describe('Header', () => {
  test("It renders", async () => {
    const container = await AstroContainer.create();

    const result = await container.renderToString(Header)

    expect(result).toContain(SITE_TITLE);
  })
})
