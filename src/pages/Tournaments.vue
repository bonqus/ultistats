<template>
  <q-page class="flex flex-center">
    <q-list separator class="col">
      <tournament v-for="t in tournaments" :key="t.id" :tournament="t" />
    </q-list>
  </q-page>
</template>

<script>
import Tournament from "components/Tournament";

import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  components: {
    Tournament
  },
  computed: {
    ...mapGetters("tournaments", ["tournaments"])
  }
};
</script>
