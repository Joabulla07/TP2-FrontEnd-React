

export const loginRouter = async (payload) => {
    const API_URL = import.meta.env.VITE_API_URL; // definido en .env

    try  {
        const res = await fetch(`${API_URL}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
            const errorMessage = data.message || `Error HTTP ${res.status}`;
            throw new Error(errorMessage);
        }
        else{
            return data
        }
    } catch (err) {
        console.log(err);
    }
}