<script lang="ts">
  import { page } from '$app/stores'
  import {enhance} from '$app/forms'
</script>

<svelte:head>
  <title>A Svelte App</title>
</svelte:head>

<div>
  <nav>
    {#if !$page.data.user}
    <a href="/login">Login</a>
    <a href="/register">Register</a>
    {/if}

    {#if $page.data.user}
      <form action="/logout" method="POST" use:enhance>
        <button type="submit">Log out</button>
      </form>
    {/if}
  </nav>

  <main>
    <slot />
  </main>
</div>