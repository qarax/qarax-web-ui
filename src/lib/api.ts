const qarax = "http://localhost:3000";

export const api = {
    hosts: {
        get: async () => {
            console.log("fetching hosts...");
            return fetch(qarax + "/hosts").then(res => res.json());
        }
    }
};