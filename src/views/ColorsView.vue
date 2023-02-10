<template>
    <main>
        <div class="container">
            <h1 class="heading is-1">Colors</h1>
            <p class="is-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum delectus
                explicabo architecto, ipsum voluptatum provident quo ullam iste tenetur nostrum,
                modi assumenda alias voluptate harum. Molestiae quam beatae nobis?
            </p>
            <div class="colors-container">
                <div v-for="color in tokens" :key="color.name">
                    <p class="h6 color-name">Pink</p>
                    <p class="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis fugiat
                        consectetur reprehenderit obcaecati perspiciatis minima sunt earum alias
                        rerum placeat!
                    </p>
                    <div class="swatch-wrapper">
                        <div v-for="hue in color.hues" :key="hue.value" class="swatch-container">
                            <div
                                class="swatch"
                                :style="{ backgroundColor: `var(${hue.class})` }"
                            ></div>
                            <div>
                                <p class="hue">{{ hue.hue }}</p>
                                <p class="sm">{{ hue.value }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import tokens from '../data/tokens.json'
</script>

<style scoped>
.container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 20px;
}
.colors-container {
    margin-top: 30px;
}
.color-name {
    color: var(--gray-900);
    font-weight: 500;
    /* margin-bottom: 10px; */
}
.swatch-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
    margin-bottom: 50px;
}
.swatch-container {
    display: flex;
}
.swatch {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin-right: 20px;
}
.hue {
    font-weight: 500;
    color: var(--gray-700);
}
</style>
