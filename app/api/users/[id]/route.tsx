
import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(
    request: NextRequest,
   { params}: {params: { id: number}}) {
    if (params.id > 10 )
        return NextResponse.json({error: 'User not found'}, { status: 404});

    return NextResponse.json({ id: 1, name: 'Francis'});
   }

export async function  POST(request: NextRequest) {
   const body = await request.json();
   if(!body.name)
        return NextResponse.json({error: 'Name is required'}, { status: 400});
   return NextResponse.json({id: 1, name: body.name });
}

export  async function PUT(
    request:NextRequest,
    { params }: { params: {id: number} }) {
        const body = await request.json();
        const validation = schema.safeParse(body);
        if(!validation.success)
            return NextResponse.json( validation.error.errors, { status: 400});
        if (params.id > 10 )
            return NextResponse.json({ error: 'User not found'}, { status: 404});

        return NextResponse.json({id: 1, name: body.name});
    }

    export function DELETE(
        request:NextRequest,
        { params }: { params: {id: number} }
    ) {
        if (params.id > 10 )
            return NextResponse.json({ error: 'User not found'}, { status: 404})
        return NextResponse.json({});
    }