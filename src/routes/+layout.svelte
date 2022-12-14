<script lang="ts">
	import Link from 'ilojo-bar-components/components/Link.svelte';
  import Header from 'ilojo-bar-components/components/Header.svelte';
  import BigFooter from 'ilojo-bar-components/components/BigFooter.svelte';
	import '../styles/global.css';
</script>

<Header>
	<Link linkTitle="Home" link="/" />
	<Link linkTitle="Discover stories" link="/" />
	<br>
</Header>

<main>
	<slot />
</main>

<BigFooter companyName="Ilojo Bar" />