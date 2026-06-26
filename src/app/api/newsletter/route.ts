import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, preferences } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    if (!preferences || !Array.isArray(preferences) || preferences.length === 0) {
      return NextResponse.json({ error: 'At least one newsletter must be selected' }, { status: 400 });
    }

    // Prepare data
    const subscriber = {
      id: Date.now().toString(),
      name,
      email,
      preferences,
      subscribedAt: new Date().toISOString(),
    };

    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Read or initialize subscribers.json
    const filePath = path.join(dataDir, 'subscribers.json');
    let subscribers = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf-8');
      try {
        subscribers = JSON.parse(fileData);
      } catch {
        subscribers = [];
      }
    }

    // Check for duplicate email
    const existingIndex = subscribers.findIndex((sub: { email: string; preferences: string[] }) => sub.email === email);
    if (existingIndex > -1) {
      // Update preferences
      subscribers[existingIndex].preferences = Array.from(new Set([...subscribers[existingIndex].preferences, ...preferences]));
      subscribers[existingIndex].updatedAt = new Date().toISOString();
    } else {
      subscribers.push(subscriber);
    }

    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));

    // Wait a brief moment to simulate network delay for better UX
    await new Promise(resolve => setTimeout(resolve, 600));

    return NextResponse.json({ success: true, subscriber });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
