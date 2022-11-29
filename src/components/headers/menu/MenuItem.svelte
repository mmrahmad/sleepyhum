<script lang="ts">
	export let label: string;
	export let path: string;
</script>

<li
	class="py-2 px-2 mx-3 text-gray-800 hover:text-primary-dark font-[500] transition duration-150 border-b-2 border-transparent hover:border-primary"
>
	<a href={path}>{label}</a>
</li>
