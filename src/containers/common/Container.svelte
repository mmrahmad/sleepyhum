<script lang="ts">
	let clazz: string = '';
	export { clazz as class };
</script>

<div class={`container mx-auto ${clazz || ''}`}>
	<slot />
</div>
