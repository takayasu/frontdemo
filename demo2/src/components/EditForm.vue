<template>
    <input type="file" v-on:change="fileAdd">
</template>

<script>
    export default {
        name: "EditForm",
        methods: {
            fileAdd(e) {
                const files = e.target.files || e.dataTransfer.files;
                const reader = new FileReader();
                const editForm = this;

                reader.onload = event => {
                    const lines = event.target.result.split(/\r\n|\n/);
                    const headerLine = lines.shift();
                    console.log(headerLine);

                    const peopleData = lines.filter(line => !(line === '')).map((line) => {
                        const peopleLine = line.split(',');
                        return {
                            firstName: peopleLine[2],
                            familyName: peopleLine[1],
                            email: peopleLine[7]
                        }
                    });
                    console.log(peopleData);
                    const promise = editForm.$store.dispatch('add',peopleData);
                    promise.then((result) => {
                        console.log('Dispatch:',result);
                    });
                };

                reader.readAsText(files[0]);
            }
        }
    }
</script>

<style scoped>

</style>
