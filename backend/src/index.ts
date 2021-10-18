import app from "@shared/infra/http/server";

const startup = async () => {
    try {
        const PORT = process.env.PORT || 3005
        app.listen(PORT, () => console.log('Server listening on port'))
    } catch (error) {
        process.exit(0)
    }
}
startup()