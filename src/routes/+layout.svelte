<script>
  import "../app.css";
  import Header from "$lib/components/Header.svelte";
</script>

<div class="nevim container">

<Header />
<slot />
</div>
<style>
  .nevim {
    }
</style>