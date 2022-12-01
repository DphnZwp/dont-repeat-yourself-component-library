<script lang="ts">
	export let companyName: string;
    import FooterLink from "ilojo-bar-components/components/FooterLink.svelte";
</script>

<footer>
	<section class="footer-copyright">
		<a href="/" >
			<img
				src="/assets/images/logo-ilojo-bar.webp"
				alt="Logo Ilojo Bar"
				width="200"
				height="auto"
				loading="lazy"
			/>
		</a>
		<p>&#169; {new Date().getFullYear()} {companyName}</p>
	</section>
	
	<section class="footer-links-pages">
		<h2 class="footer-links__header">Menu</h2>
		<FooterLink link="/" linkTitle="Home" />
		<FooterLink link="/" linkTitle="Discover stories" />
	</section>

	<section class="footer-links">
		<FooterLink link="/spanish-migrant" linkTitle="Spanish migrant" />
		<FooterLink link="/the-returnees" linkTitle="The returnees" />
		<FooterLink link="/a-vip" linkTitle="A VIP" />
	</section>

	<section class="footer-links">
		<FooterLink link="/the-malaucay-connection" linkTitle="The Macaulay connection" />
		<FooterLink link="/a-family-house" linkTitle="A family house" />
		<FooterLink link="/slave-trade" linkTitle="Slave trade" />
	</section>

	<section class="footer-links">
		<FooterLink link="/botched-dreams" linkTitle="Botched dreams" />
		<FooterLink link="/a-angels-story" linkTitle="The Angel's Story" />
		<FooterLink link="/illegal-demolition" linkTitle="llegal demolition" />
	</section>
</footer>

<style>
	footer {
		padding: 3em;
		color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		gap: 0;
		background-color: #000;
	}
	.footer-copyright {
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: .5em;
	}
	.footer-links {
		display: none;
	}
	.footer-links__header {
		margin-bottom: .25em;
	}
	@media (min-width: 70em) {
		footer {
			text-align: left;
			display: flex;
			justify-content: center;
			flex-direction: row;
			gap: 2em;
		}
		.footer-links-pages,
		.footer-links {
			display: flex;
			flex-direction: column;
			align-items: baseline;
		}
	}
</style>