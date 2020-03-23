<template>
  <q-item dense clickable class="justify-center items-center">
    <span class="col text-right">
      {{ team.team_home }}
    </span>
    <span class="row col-2 ">
      <span class="col text-right">
        {{ team.team_home_score }}
      </span>
      <span class="col-2 text-center">
        -
      </span>
      <span class="col left">
        {{ team.team_away_score }}
      </span>
    </span>
    <span class="col">
      {{ team.team_away }}
    </span>
    <span>
      {{ team.team  }} {{ team.year }}
    </span>
  </q-item>
</template>

<script>
export default {
  name: "Team",
  props: {
    team: {
      required: true
    }
  }
};
</script>
