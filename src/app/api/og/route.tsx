/* eslint-disable react/forbid-dom-props */
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'The Global Grid';

    return new ImageResponse(
      (
        <div
          tw="flex flex-col items-center justify-center w-full h-full bg-[#f5f2eb] border-[20px] border-[#1a1a1a]"
        >
          <div
            tw="flex text-[60px] font-serif text-[#1a1a1a] text-center px-[80px] font-bold"
          >
            {title}
          </div>
          <div
            tw="flex mt-[40px] text-[30px] font-sans text-[#d32f2f] uppercase tracking-[0.2em]"
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
