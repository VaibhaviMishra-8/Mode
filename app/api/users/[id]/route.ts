
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const userData = {
    id,
    name: 'John Doe',
    email: 'john@example.com',
  }

  return NextResponse.json(userData)
}