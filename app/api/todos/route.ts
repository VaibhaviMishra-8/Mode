
import { NextResponse } from 'next/server'


export async function GET() {
  const todos = [
    { id: 1, text: 'Learn Next.js', completed: false },
    { id: 2, text: 'Build an app', completed: false },
  ]

  return NextResponse.json(todos)
}

export async function POST(request: Request) {
  const data = await request.json()

  console.log('Received data:', data)

  return NextResponse.json(
    {
      message: 'Todo created successfully',
      todo: data,
    },
    { status: 201 }
  )
}


// export async function PUT(request: Request) { ... }
// export async function DELETE(request: Request) { ... }
// export async function PATCH(request: Request) { ... }