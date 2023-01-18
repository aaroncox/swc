<svelte:options tag="wharf-login-button" />

<script>
    import Modal from './Modal.svelte'
    import { writable } from 'svelte/store'

    let displaySmallModal = writable(false)

    function onClick() {
        $displaySmallModal = !$displaySmallModal
    }
</script>

<button on:click={onClick}>Login ({$displaySmallModal})</button>

{#if $displaySmallModal}
    <Modal display={$displaySmallModal} />
{/if}

<style>
    button {
        padding: 30px;
        color: #fff;
        font-size: 17px;
        border-radius: 5px;
        border: 1px solid #ccc;
        cursor: pointer;
    }
</style>
