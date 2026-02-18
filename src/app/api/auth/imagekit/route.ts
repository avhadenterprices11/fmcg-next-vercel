import { getUploadAuthParams } from "@imagekit/next/server";
import { NextResponse } from "next/server";

export async function GET() {
    const privateKey = process.env.PRIVATE_KEY;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

    if (!privateKey || !publicKey || !urlEndpoint) {
        return NextResponse.json(
            { error: "Missing ImageKit environment variables" },
            { status: 500 }
        );
    }

    const { token, expire, signature } = getUploadAuthParams({
        privateKey,
        publicKey,
    });

    return NextResponse.json({ token, expire, signature, publicKey });
}
