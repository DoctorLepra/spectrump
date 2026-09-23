import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { paramsToSign } = body;

    const signature = cloudinary.utils.api_sign_request(
      paramsToSign,
      process.env.CLOUDINARY_API_SECRET!
    );

    return NextResponse.json({ signature });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
