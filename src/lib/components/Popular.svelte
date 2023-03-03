<script lang="js">

    import Proudct from "./Proudct.svelte";
    import { fade } from 'svelte/transition'

    let showingPopular1 = true;
    let showingPopular2 = false;

    function swapPopular() {
        showingPopular1 = !showingPopular1;
        showingPopular2 = !showingPopular2
    }
</script>

<div>
    <div class='bg-neutral'>
        <div class='flex flex-row justify-center items-center'>
            <div class="text-3xl normal-case text-accent mt-9 mb-4">
                <h1>
                    POPULAR NOW
                </h1>
            </div>
        </div>
        <div class="flex flex-row justify-center items-center">
            <label>
                <button on:click={swapPopular} class="btn btn-primary btn-circle text-center text-base-100 mr-12">←</button>
            </label>
            {#if showingPopular1 === true}
            <div class="flex flex-row" transition:fade={{}}>
                <Proudct name='dupa1' info='dupa1' price='6,70' pic=''/>
                <Proudct name='dupa2' info='dupa2' price='4,20'/>
                <Proudct name='dupa3' info='dupa3'/>
            </div>
            {/if}
            {#if showingPopular2 === true}
            <div class="flex flex-row" transition:fade={{}}>
                <Proudct name='dupa4'/>
                <Proudct info='info dupa5'/>
                <Proudct price='6,90'/>
            </div>
            {/if}
            <label>
                <button on:click={swapPopular} class="btn btn-primary btn-circle text-center text-base-100 ml-12">→</button>
            </label>
        </div>
    </div>
</div>