<template>
  <q-page class="flex flex-center">
    <q-list separator class="col">
      <match v-for="m in matches" :key="m.id" :match="m" />
    </q-list>
  </q-page>
</template>

<script>
import Match from "components/Match";

import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  components: {
    Match
  },
  computed: {
    ...mapGetters("matches", ["matches"])
  }
};
</script>
