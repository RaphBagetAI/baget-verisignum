import { promises as fs } from 'fs';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/.+@.+\..+/.test(email)) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }

    const data = `${new Date().toISOString()} - ${email}\n`;
    const filePath = '/tmp/waitlist.txt'; 
    
    await fs.appendFile(filePath, data);

    return NextResponse.json({ message: 'Success' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
