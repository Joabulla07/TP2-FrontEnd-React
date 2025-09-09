

export const createUserRouter = async (payload) => {
    const API_URL = import.meta.env.VITE_API_URL; // definido en .env
    console.log("entrando a crear usuario")

    try  {
        const res = await fetch(`${API_URL}/api/user/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        console.log(res.json().then(data => console.log(data)))

        if (!res.ok) {
            const text = await res.text().catch(() => "");
            throw new Error(text || `Error HTTP ${res.status}`);
        }
    } catch (err) {
        console.log(err);
    }
}