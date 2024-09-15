import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    // Fetch meetings and webinars from Zoom API

    const meetings = [
      { id: '1', topic: 'Meeting 1' },
      { id: '2', topic: 'Meeting 2' },
    ];
    const webinars = [
      { id: '3', topic: 'Webinar 1' },
      { id: '4', topic: 'Webinar 2' },
    ];

    // Combine meetings and webinars into one object
    const result = {
      meetings: meetings,
      webinars: webinars,
    };

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: {
          message: error.message || 'An error occurred while fetching meetings and webinars',
        },
      },
      { status: 500 },
    );
  }
}
