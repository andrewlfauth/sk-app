<script lang="ts">
  import {enhance, applyAction} from '$app/forms'
  import {invalidateAll} from '$app/navigation'
  import type { ActionData} from './$types'
  import type {SubmitFunction} from '@sveltejs/kit'

  export let form: ActionData
  const handleLogin: SubmitFunction = () => {
    return async ({ result }) => {
      invalidateAll()
      await applyAction(result)
    }
  } 
</script>

<h1>Login</h1>

<form action="?/login" method="POST" use:enhance={handleLogin}>
  <div>
    <label for="username">Username</label>
    <input id="username" name="username" type="text" required />
  </div>

  <div>
    <label for="password">Password</label>
    <input id="password" name="password" type="password" required />
  </div>

  {#if form?.invalid}
    <p>Username and password is required.</p>
  {/if}

  {#if form?.credentials}
    <p>You have entered the wrong credentials.</p>
  {/if}

  <button type="submit">Log in</button>
</form>
