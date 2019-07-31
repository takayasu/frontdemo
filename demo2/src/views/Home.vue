<template>
    <div class="home">
        <EditForm />
        <PeopleTable />
    </div>
</template>

<script>

    import EditForm from '@/components/EditForm.vue';
    import PeopleTable from '@/components/PeopleTable.vue';

    export default {
        name: 'home',
        components: {
            EditForm,
            PeopleTable
        },
    };
</script>
