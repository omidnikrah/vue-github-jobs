<template>
  <div class="job-item">
    <router-link :to="`/position/${data.id}`">
      <div class="job-item-info">
        <h3>{{ data.title }}</h3>
        <span>{{ data.company }}</span>
      </div>
      <div class="job-item-detail">
        <span>{{ data.location }}</span>
        <span>{{ moment(data.created_at).fromNow() }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'JobItem',
  props: ['data'],
};
</script>

<style lang="scss" scoped>
.job-item {
  a {
    padding: 20px;
    background-color: #f9f9f9;
    margin: 10px 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    color: #444;
    .job-item-info h3 {
      font-weight: bold;
    }
    .job-item-detail {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      span {
        display: flex;
        opacity: 0.5;
      }
    }
  }
}
</style>
