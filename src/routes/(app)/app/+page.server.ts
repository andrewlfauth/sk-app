import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load = (async ({ locals }) => {
  const user = locals?.user

  if (!user) {
    throw redirect(303, '/')
  }

  return {
    user: locals.user.name,
  }
}) satisfies PageServerLoad
