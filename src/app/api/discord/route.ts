import {
    verifyKey,
    InteractionType,
    InteractionResponseType
} from 'discord-interactions';

import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest): Promise<NextResponse> {
    const publicKey = process.env.DISCORD_PUBLIC_KEY;
    if (!publicKey) {
        throw new Error("Missing Discord public key!");
    }

    const rawBody = await request.text();
    const signature = request.headers.get("X-Signature-Ed25519");
    const timestamp = request.headers.get("X-Signature-Timestamp");


    if (
        !signature ||
        !timestamp ||
        !(await verifyKey(rawBody, signature, timestamp, publicKey))
    ) {
        return new NextResponse("Invalid signature", { status: 401 });
    }

    const interaction = JSON.parse(rawBody) as { type: number };

    if (interaction.type === InteractionType.PING) {
        return NextResponse.json(
            { type: InteractionResponseType.PONG },
            { status: 200 }
        )
    }



    return NextResponse.json(
        { error: "Unsupported interaction" },
        { status: 501 }
    );

}