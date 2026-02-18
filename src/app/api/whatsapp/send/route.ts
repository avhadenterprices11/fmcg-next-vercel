import { NextResponse } from 'next/server';

// Type definition for request body
interface WhatsAppMessageRequest {
    message: string;
    phoneNumber?: string; // Optional: User's phone number if we want to reply directly
}

export async function POST(req: Request) {
    try {
        const body: WhatsAppMessageRequest = await req.json();
        const { message, phoneNumber } = body;

        // Environment Variables
        const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;
        const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
        const BUSINESS_ACCOUNT_ID = process.env.WHATSAPP_BUSINESS_ACCOUNT_ID;
        // Default recipient (e.g., your support team's WhatsApp number)
        const DEFAULT_RECIPIENT_PHONE = process.env.WHATSAPP_RECIPIENT_PHONE;

        // 1. Basic Validation
        if (!message) {
            return NextResponse.json(
                { error: 'Message content is required' },
                { status: 400 }
            );
        }

        // 2. Check Configuration
        if (!PHONE_NUMBER_ID || !ACCESS_TOKEN) {
            console.warn('Missing WhatsApp API configuration');
            // Mock success for development if config is missing but mode is 'api'
            // This prevents the UI from breaking during initial setup
            return NextResponse.json({
                success: true,
                mock: true,
                message: 'Configuration missing. Message logged but not sent to WhatsApp.'
            });
        }

        // 3. Construct Payload
        // Note: For initiating conversations, we usually need a Template Message.
        // For replying to user-initiated messages within 24h window, text is fine.
        // Assuming this endpoint is triggered by a user on the site, we likely want to notify the BUSINESS.
        // To notify the business, we send a message TO the business number.
        // However, WhatsApp API sends messages TO external users.
        // Strategy: Send message to the configured RECIPIENT (e.g., support phone).

        const targetPhone = phoneNumber || DEFAULT_RECIPIENT_PHONE;

        if (!targetPhone) {
            return NextResponse.json(
                { error: 'Recipient phone number not configured' },
                { status: 400 }
            );
        }

        const payload = {
            messaging_product: 'whatsapp',
            to: targetPhone,
            type: 'text',
            text: { body: message }
        };

        // 4. Send Request to Meta Graph API
        const response = await fetch(
            `https://graph.facebook.com/v17.0/${PHONE_NUMBER_ID}/messages`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            console.error('WhatsApp API Error:', data);
            return NextResponse.json(
                { error: 'Failed to send message via WhatsApp', details: data },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true, data });

    } catch (error) {
        console.error('Internal API Error:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
