<script>
	import Container from '$containers/common/Container.svelte';
	import Logo from '$assets/images/400dpiLogo-scaled.jpg';
	import MenuItem from './menu/MenuItem.svelte';

	const menuData = [
		{ id: 1, label: 'Women', path: '#' },
		{ id: 2, label: 'Mmen', path: '#' },
		{ id: 3, label: 'Kids', path: '#' },
		{ id: 4, label: 'Accessories', path: '#' }
	];
</script>

<header>
	<Container class="flex justify-between items-center">
		<nav class="menu flex-1">
			<ul class="flex">
				{#each menuData as menu, i}
					<MenuItem label={menu.label} path={menu.path} />
				{/each}
			</ul>
		</nav>
		<div class="flex-1">
			<img role="img" src={Logo} alt="Logo" class="w-60" />
		</div>
		<div class="flex-1">
			<ul class="flex">
				<li>test</li>
				<li>test</li>
				<li>test</li>
			</ul>
		</div>
	</Container>
</header>
