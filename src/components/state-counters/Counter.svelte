<script>
  import { countState } from '@store/CounterStore';
</script>

<div class="flex items-center gap-8 justify-center">
  <button on:click={() => $countState++}>+</button>
  <p>Svelte Count is: {$countState}</p>
  <button on:click={() => $countState--}>-</button>
</div>
