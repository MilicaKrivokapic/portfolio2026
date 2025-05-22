import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const likesFilePath = path.join(process.cwd(), 'content', 'likes.json');

// Initialize likes file if it doesn't exist
if (!fs.existsSync(likesFilePath)) {
  fs.writeFileSync(likesFilePath, JSON.stringify({}));
}

export async function GET() {
  const likesData = JSON.parse(fs.readFileSync(likesFilePath, 'utf-8'));
  return NextResponse.json(likesData);
}

export async function POST(request: Request) {
  const { slug } = await request.json();
  
  const likesData = JSON.parse(fs.readFileSync(likesFilePath, 'utf-8'));
  likesData[slug] = (likesData[slug] || 0) + 1;
  
  fs.writeFileSync(likesFilePath, JSON.stringify(likesData, null, 2));
  
  return NextResponse.json({ likes: likesData[slug] });
}

export async function DELETE(request: Request) {
  const { slug } = await request.json();
  const likesData = JSON.parse(fs.readFileSync(likesFilePath, 'utf-8'));
  if (likesData[slug] && likesData[slug] > 0) {
    likesData[slug] -= 1;
  } else {
    likesData[slug] = 0;
  }
  fs.writeFileSync(likesFilePath, JSON.stringify(likesData, null, 2));
  return NextResponse.json({ likes: likesData[slug] });
}