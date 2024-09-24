<template>
    <div class="card">
        <header>

            <solt name="header">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum repellendus ad illo cumque a veritatis consequuntur natus similique nulla. Doloribus adipisci expedita temporibus nulla maxime laudantium dolore ad id? Deserunt.</p>            
            </solt>


        </header>

        <main>

            <slot name="main">
                <h3>默认主体内容</h3>

            </slot>

        </main>

        <footer>
            <slot name="footer">
                <h3>默认底部</h3>

            </slot>

        </footer>



    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.card{
    border: 1px soild #ccc;
    padding: 10px;
    margin: 20px;
}

header,footer{
    background-color: #f5f5f5;
    padding: 10px;
}

</style>