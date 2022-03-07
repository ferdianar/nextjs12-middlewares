import { NextResponse } from "next/server"

export default function middleware(req) {
    const { token } = req.cookies

    const url = req.url

    console.log({
        message: "Dashboard Middleware",
        token: token,
        url: url,
        create_at: new Date().toUTCString()
    })

    const baseUrl = `http://localhost:3000`

    if (!token) {
        return NextResponse.redirect(`${baseUrl}/login`)
    }

    //     return new Response("Middleware")
}