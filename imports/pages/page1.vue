<template>
    <div class="page1">
        {{text}}----{{posts.length}}
          <Button type="primary" @click="search">Primary</Button>
          <div v-for="item in posts">{{item}}</div>
           <Input v-model="text" placeholder="请输入..." style="width: 300px"></Input>
    </div>
    
</template>
<script>
import { Posts } from '../models'

export default {
  meteor: {
    $lazy: true,
    $subscribe: {
      posts: []
    },
    posts: {
         /// / Vue Reactivity
     // We declare which params depends on reactive vue properties
      params () {
       // Here you can use Vue reactive properties
       // Don't use Meteor reactive sources!
        return {
          text: this.text
        }
      },
     // Optionally we can watch the parameters for changes in nested
     // objects using the 'deep' option
      deep: true,
     /// / Meteor Reactivity
     // This will be refresh each time above params changes from Vue
     // Then it calls Tracker.autorun() to refresh the result
     // each time a Meteor reactive source changes
      update ({text}) {
       // Here you can use Meteor reactive sources
       // like cursors or reactive vars
       // Don't use Vue reactive properties!
        return Posts.find({})
      }
    }
  },
  data () {
    return {
      text: 'test',
      sss: '',
      posts: []
    }
  },
  computed: {
    aaa () {
      return Posts.find().count()
    }
  },
  methods: {
    search () {
      this.activate()
    },
    activate () {
      this.$startMeteor()
    },

    deactivate () {
      this.$stopMeteor()
    }
  },
  mounted () {

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