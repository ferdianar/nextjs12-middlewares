import { NextResponse } from "node_modules/next/server"

export default function middleware(req) {
    const { token } = req.cookies

    const url = req.url

    console.log({
        message: "APIs Middleware",
        token: token,
        url: url,
        create_at: new Date().toUTCString()
    })

    if (!token) {
        return NextResponse.redirect(`http://localhost:3000/login`)
    }
}