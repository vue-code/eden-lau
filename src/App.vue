<template>
	<v-app>
    <v-content>
      <Add></Add>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Add from './components/Add.vue';

export default Vue.extend({
  name: 'App',

  components: {
    Add,
  },

  data: () => ({
    //
  }),
});
</script>
