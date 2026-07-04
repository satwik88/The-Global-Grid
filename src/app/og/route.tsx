import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  const date = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#F5F1E8',
          color: '#1B1B1B',
          padding: '60px',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'serif',
        }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #1B1B1B',
          padding: '40px',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}>
          <h1 style={{ 
            fontSize: '100px', 
            fontWeight: 'bold', 
            margin: 0, 
            letterSpacing: '-0.05em' 
          }}>
            THE GLOBAL GRID
          </h1>
          <p style={{ 
            fontSize: '32px', 
            fontStyle: 'italic', 
            marginTop: '20px', 
            marginBottom: '40px' 
          }}>
            The daily paper for the modern world.
          </p>
          <div style={{ 
            width: '100%', 
            height: '2px', 
            backgroundColor: '#1B1B1B', 
            marginBottom: '40px' 
          }} />
          <div style={{ 
            display: 'flex', 
            width: '100%', 
            justifyContent: 'flex-end', 
            fontSize: '24px' 
          }}>
            <span>{date}</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
