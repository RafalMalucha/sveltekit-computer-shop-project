<svelte:head>

</svelte:head>

<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Popular from "$lib/components/Popular.svelte";
    import Select from "$lib/components/Select.svelte";
</script>

<div class="drawer">
    <input id="side-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
      <Navbar />
      <Popular />
    </div> 
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <label for="side-drawer" tabindex="0" class="btn btn-ghost m-1">CLOSE</label>
        <li class="pb-3"><a href="/shop">Shop</a></li>
        <li class="pb-3"><a href="/configurator">Configurator</a></li>
        
      </ul>
    </div>
  </div>
  

<style lang="postcss">

</style>