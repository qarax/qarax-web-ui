<script>
	import { api } from '$lib/api';
	import { onMount } from 'svelte';

	let hosts = [];

	onMount(async function get() {
		const { response } = await api.hosts.get();

		hosts = response;
	});
</script>

<svelte:head>
	<title>Hosts</title>
</svelte:head>

<h1>Hosts</h1>
{#each hosts as { name, address }}
	<p>{name} - {address}</p>
{/each}
