
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function GET() {
  const headersList = headers()
  const token = headersList.get('authorization')

  if (!token || token !== 'Bearer valid-token') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    
    return NextResponse.json({ data: 'Protected content' })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}