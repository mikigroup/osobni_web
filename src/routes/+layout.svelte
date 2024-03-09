<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import 'animate.css';
</script>
<Header />

<main>
<slot />
</main>
<Footer />

<style>
</style>