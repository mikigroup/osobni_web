<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
</script>

<div class="bg-cover bg-center" style="background-image: url(/static/hor.jpg)">

<Header />
<slot />

</div>
<style>
</style>