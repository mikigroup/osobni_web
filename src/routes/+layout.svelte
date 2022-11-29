<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div class="">  <!-- bg-cover bg-center" style="background-image: url(/static/hor.svg) -->

<Header />
<div class="flex justify-center pt-10">
<slot />
</div>
</div>
<Footer />
<style>
</style>