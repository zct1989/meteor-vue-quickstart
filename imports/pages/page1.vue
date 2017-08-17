<template>
    <div class="page1">
        {{text}}
    </div>
</template>
<script>
  export default {
    data () {
      return {
        text: 'not found'
      }
    }
}
</script>
<style scoped>
    .not-found {
        margin-top: 84px;
        text-align: center;
    }

    .not-found .hero {
        font-size: 2.5em;
        color: #666;
        margin: 12px;
    }

    .not-found .banner img {
        max-width: 100%;
        border-radius: 5px;
    }
</style>