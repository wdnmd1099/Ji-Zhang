import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const Welcome = defineComponent({
    setup(props, context) {
        return () => 
        <>
        <header>logo</header>
        <main><RouterView /></main>
        <footer>buttons</footer>
        </>
    }
})