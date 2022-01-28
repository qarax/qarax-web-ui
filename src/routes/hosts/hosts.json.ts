import { api } from '$lib/api';

export async function get() {
    const hosts = await api.hosts.get();
}