<script lang="ts">
  import "./style.css";

  export let count = 0;
  let action: string | null = null;
  function increment() {
    count += 1;
    action = "increment";
  }
  function decrement() {
    count -= 1;
    action = "decrement";
  }
</script>

<div>
  <h2 class="text-center">
    Welcome to your <a href="https://www.plasmo.com" target="_blank">Plasmo</a> Extension!
  </h2>
  <div class="flex w-60 items-center justify-center gap-12">
    <button on:click={decrement}>-</button>
    <p>Current count: <b>{count}</b></p>
    <button on:click={increment}>+</button>
  </div>
  {#if action}<p class="text-center font-bold text-green-600">{action}</p>{/if}
  <a href="https://docs.plasmo.com" target="_blank"> View Docs </a>
</div>

<style>
</style>
