<script>
  let count = 0;
</script>

<div class="flex items-center gap-8 justify-center">
  <button on:click={() => count++}>+</button>
  <p>Svelte Count is: {count}</p>
  <button on:click={() => count--}>-</button>
</div>
