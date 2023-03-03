<script>
    export let name = 'placeholder';
    export let info = 'placeholder';
    export let price = 'placeholder';
    export let pic = '';
</script>

<div>
    <div class="card static w-64 bg-base-100 shadow-xl m-5">
        <figure class="px-10 pt-10">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="{pic}" alt="Picture" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{name}</h2>
            <p>{info}</p>
            <div class="divider"></div> 
            <p>{price}</p>
            <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
</div>