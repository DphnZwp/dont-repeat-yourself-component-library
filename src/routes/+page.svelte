<script lang="ts">
	import WindowSection from 'ilojo-bar-components/components/WindowSection.svelte';
	import Window from 'ilojo-bar-components/components/Window.svelte';
  import type { PageData } from './$types';
	export let data: PageData;
  console.log(data);
</script>

<section class="stories">
	<h1>Discover stories</h1>

	<WindowSection>
	{#each data.stories as { title, image, id }}
		<a href="story/{id}">
			<Window
			storyImage={image.url}
			altTag={title}
			storyTitle={title}
			>
			</Window>
		</a>
	{/each}
	</WindowSection>
</section>

<style>
	.stories {
		padding-top: 3em;
	}

	a {
		color: var(--color-white);
		text-decoration: none;
	}
</style>