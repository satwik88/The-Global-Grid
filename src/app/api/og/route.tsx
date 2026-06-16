import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'The Global Grid';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f5f2eb', // paper color
            border: '20px solid #1a1a1a', // ink color
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 60,
              fontFamily: 'serif',
              color: '#1a1a1a',
              textAlign: 'center',
              padding: '0 80px',
              fontWeight: 700,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 40,
              fontSize: 30,
              fontFamily: 'sans-serif',
              color: '#d32f2f', // accent color
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
            }}
          >
            THE GLOBAL GRID
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
