<script lang="ts">
  import ScrollToTopButton from 'ilojo-bar-components/components/ScrollToTopButton.svelte';
	import type { PageData } from '../[id]/$types';
	export let data: PageData;
</script>
<section class="story">
  <h1 class="story__title">{data.title}</h1>
	<div class="story__content">
		{@html data.content.html}
	</div>
</section>

<style>
	.story {
		padding: 3em 1em;
	}

	.story__title {
		margin-bottom: 1em;
	}

	.story__content {
		display: grid;
			grid-template-columns: repeat(1, 1fr);
			gap: 2em;
	}

	@media (min-width: 70em) {
		.story__content {
			padding: 3em 7em;
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
			gap: 2em;
		}
	}
</style>