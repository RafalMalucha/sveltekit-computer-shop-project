<script lang="js">
    import ComputerPart from "./ComputerPart.svelte";

    let total = 0.0;

    function sumPrices() {
        total;
    }
</script>

<div>
    <div class="flex flex-row m-3">
        <div class="basis-5/12 m-2 p-5 pt-3 bg-neutral rounded-lg">
            <div class="flex flex-col">
                <div class="items-justify">
                    <h1 class="text-xl">
                        Parts
                    </h1>
                </div>
                <div>
                    <ComputerPart />
                    <ComputerPart />
                    <ComputerPart />
                    <ComputerPart />
                </div>
                <div>
                    total -> {total}
                </div>
            </div>
        </div>
        <div class="basis-7/12 m-2 p-5 pt-3 bg-neutral rounded-lg">
            <h1>bruh</h1>
            <br><br><br><br><br>
            <br><br><br><br><br>
            <br><br><br><br><br>
            <h1>bruh2</h1>
        </div>
    </div>
</div>