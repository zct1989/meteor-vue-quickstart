<template>
    <div class="page3">
        <button @click="te">test</button>
        {{text}}
    </div>
</template>

<script>
  export default {
    data() {
        return {
            text:'this is page3'
        }
      },
      methods:{
          te(){
            this.$router.push('page2')
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