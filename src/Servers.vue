<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <li class="list-group-item" v-for="index in 5" :key="index">
          Server #{{ index }}
        </li>
      </ul>
    </div>
    <comp-server-detail />
  </div>
</template>

<script>
import ServerDetails from "./ServerDetails";
export default {
  components: {
    "comp-server-detail": ServerDetails
  }
};
</script>

<style scoped></style>
