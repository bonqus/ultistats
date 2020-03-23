<template>
  <q-page class="column">
    <div ref="scrollTarget">
      <q-btn-toggle flat v-model="division" :options="divisions">
        <template v-slot:open>
          <q-icon right name="directions_boat" />
        </template>

        <template v-slot:women>
          <q-icon right name="directions_car" />
        </template>

        <template v-slot:mixed>
          <q-icon right name="directions_railway" />
        </template>
      </q-btn-toggle>

      <q-virtual-scroll :items="matches.items" separator
        :scroll-target="$refs.scrollTarget"
        class="bg-blue"
      >
        <template v-slot="{ item, index }">
          <match :key="index" :match="item" />
        </template>
      </q-virtual-scroll>

      <div v-if="matches.loading" class="row justify-center q-my-md">
        <q-spinner-dots color="primary" size="40px" />
      </div>

      <!-- <q-list separator class="col">
         <match v-for="(m, index) in matches.items" :key="index" :match="m" />
         </q-list>
         <a @click="matches.pageTo += 1">load more</a> -->
    </div>
  </q-page>
</template>

<script>
import Match from "components/Match";
import { createInstance } from "vuex-pagination";
import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  data() {
    return {
      scrollInfo: {},
      division: "mixed",
      divisions: [
        { label: "Open", value: "open", slot: "open" },
        { label: "Women", value: "women", slot: "women" },
        { label: "Mixed", value: "mixed", slot: "mixed" }
      ]
    };
  },
  methods: {
    onScroll(info) {
      console.log("scroll")
      if (!this.matches.loading && Math.ceil(this.$refs.scrollTarget.scrollTop) + this.$refs.scrollTarget.clientHeight >= this.$refs.scrollTarget.scrollHeight) {
        this.matches.pageTo += 1;
      }
    }
  },
  components: {
    Match
  },
  computed: {
    // ...mapGetters("matches", ["matches", "matchesInDivision"]),
    // matches() {
    //   return this.matchesInDivision(this.division);
    // },
    matches: createInstance("matchesPage", {
      pageFrom: 1,
      pageSize: 10
    })
  }
};
</script>
