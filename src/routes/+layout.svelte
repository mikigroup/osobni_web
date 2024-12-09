<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Gdpr from "$lib/components/gdpr/Banner.svelte";
</script>
<Header />

<main>
<slot />
</main>


<Footer />
<!--<Gdpr bind:this={gdprBanner} cookieName="props.beyonk_gdpr" {...props} on:analytics={initAnalytics} />-->
<style>
</style>