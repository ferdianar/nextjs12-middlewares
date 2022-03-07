// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const url = req.url

    res.status(200).json({
        method: req.method,
        status: 200,
        url: url,
        data: {
            data: [{
                    id: 10,
                    name: "Ferdian Ahmad R",
                    nationality: "Indonesia",
                    roles: "Frontend | UI Engineer"
                },
                {
                    id: 11,
                    name: "John Doe Mee",
                    nationality: "Germany",
                    roles: "UX Researcher"
                }
            ],
            timestamp: new Date().toUTCString()
        }
    })
}