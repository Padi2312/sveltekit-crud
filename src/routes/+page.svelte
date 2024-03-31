<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<div class="flex justify-center items-center p-8">
	<div class="min-w-96">
		<form
			method="POST"
			class="flex flex-col gap-4"
			use:enhance={({}) => {
				return async ({ result }) => {
					// `result` is an `ActionResult` object
					if (result.status === 200) {
						goto('/overview');
					} else {
						await applyAction(result);
					}
				};
			}}
		>
			{#if form?.invalid === true || form?.error === true}
				<div class="w-full text-center">
					{#if form?.error === true}
						<div class="bg-red-200 text-red-800 p-4 rounded-md">
							<p>Error during login.</p>
						</div>
					{:else}
						<div class="bg-red-200 text-red-800 p-4 rounded-md">
							<p>Invalid username or password.</p>
						</div>
					{/if}
				</div>
			{/if}

			<input type="text" name="username" placeholder="Username" class="border p-2" required />
			<input type="password" name="password" placeholder="Password" class="border p-2" required />
			<button type="submit" class="bg-blue-500 text-white p-2">Login</button>
		</form>
		<div class="text-center mt-4">
			<p>Don't have an account? <a href="/register" class="text-blue-500">Register</a></p>
		</div>
	</div>
</div>
