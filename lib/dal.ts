import { db } from '@/db'
import { getSession } from './auth'
import { eq } from 'drizzle-orm'
import { cache } from 'react'
import { issues, users } from '@/db/schema'
import { mockDelay } from './utils'
import { cacheTag } from 'next/cache'

// Get current logged-in user
export const getCurrentUser = cache(async () => {
  console.log('get current user')

  // Keep delay small or remove for production
  await mockDelay(300)

  const session = await getSession()
  if (!session) return null

  try {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId))

    return result[0] || null
  } catch (error) {
    console.error('Error getting user by ID:', error)
    return null
  }
})

// Get user by email
export const getUserByEmail = async (email: string) => {
  try {
    const result = await db.select().from(users).where(eq(users.email, email))

    return result[0] || null
  } catch (error) {
    console.error('Error getting user by email:', error)
    return null
  }
}

// Fetch all issues
export async function getIssues() {
  'use cache'
  cacheTag('issues')

  try {
    await mockDelay(400)

    const result = await db.query.issues.findMany({
      with: {
        user: true,
      },
      orderBy: (issues, { desc }) => [desc(issues.createdAt)],
    })

    return result
  } catch (error) {
    console.error('Error fetching issues:', error)
    throw new Error('Failed to fetch issues')
  }
}

// Fetch a single issue
export const getIssue = async (id: number) => {
  try {
    // Reduce delay — 7000 ms will timeout on Vercel
    await mockDelay(500)

    const issue = await db.query.issues.findFirst({
      where: eq(issues.id, id),
      with: {
        user: true,
      },
    })

    return issue
  } catch (error) {
    console.error('Error fetching issue:', error)
    return null
  }
}
