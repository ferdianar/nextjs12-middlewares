import { NextResponse } from "next/server"

export default function middleware(req) {
    const { token } = req.cookies

    const baseUrl = `http://localhost:3000`

    //  check cookie from server
    console.log(req.cookies)

    const res = NextResponse.next()
    res.cookie("session_server", "bgdsc6s7643##$^@$3dscdsc", {
        httpOnly: true
    })

    return res

    //     const url = req.url

    //     console.log({
    //         message: "Pages Middleware",
    //         token: token,
    //         url: url,
    //         create_at: new Date().toUTCString()
    //     })

    //     if (token && url === `${baseUrl}/login`) {
    //         console.log(url)
    //         return NextResponse.redirect(`${baseUrl}/dashboard`)
    //     }

    //     if (url === `${baseUrl}/secret`) {
    //         return NextResponse.rewrite(`${baseUrl}/secretpages`)
    //     }
}