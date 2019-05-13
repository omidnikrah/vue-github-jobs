<template>
    <div class="job-item">
        <div class="job-item-info">
            <h3>{{ data.title }}</h3>
            <span>{{ data.company }}</span>
        </div>
        <div class="job-item-detail">
            <span>{{ data.location}}</span>
            <span>{{ data.created_at }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JobItem',
        props: ["data"],
    }
</script>

<style scoped>
    .job-item {
        padding: 20px;
        background-color: #f9f9f9;
        margin: 10px 0;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
    }
    .job-item-info h3 {
        font-weight: bold;
    }
    .job-item-detail span {
        display: flex;
        opacity: 0.5;
    }
</style>