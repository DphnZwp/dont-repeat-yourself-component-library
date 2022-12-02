<script lang="ts">
	import WindowSection from 'ilojo-bar-components/components/WindowSection.svelte';
	import Window from 'ilojo-bar-components/components/Window.svelte';
  import * as prismic from '@prismicio/helpers';
	export let data;
	const stories = data.documents
</script>

<section class="stories">
	<h1>Discover stories</h1>
	<WindowSection>
	{#each stories as story}
			<a href="/{story.uid}">
					<Window
					storyImage={story.data.image.url}
					altTag={story.data.image.url}
					storyTitle={story.data.title}
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