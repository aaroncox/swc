<svelte:options tag="wharf-login-modal" />

<script lang="ts">
    function close() {
        console.log('close')
    }
</script>

<div on:click={close} class="dimmer" />
<div class={`modal`}>
    <div class="modal-header">
        <h1>modal header!</h1>
    </div>
    <div class="modal-content">modal content!</div>
    <div class="button-container" />
</div>

<style>
    .dimmer {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto; /* Enable scroll if needed */
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1001;
    }

    .modal {
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: -0.26px;
        color: var(--main-black);
        background-color: var(--main-white);

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04),
            0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04),
            0px 0px 1px rgba(0, 0, 0, 0.04);
        border-radius: 20px;

        width: 80%;
        max-width: 300px;

        z-index: 2000;
    }
</style>
