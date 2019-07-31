<template>
    <el-table
            ref="multipleTable"
            :data="peopleData"
            stripe
            style="width: 60%; margin: auto"
            >
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column
                property="familyName"
                label="姓"
                width="120">
        </el-table-column>
        <el-table-column
                property="firstName"
                label="名"
                width="120">
        </el-table-column>
        <el-table-column
                property="email"
                label="Eメール"
                show-overflow-tooltip>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        name: "PeropleTable",
        data: function(){
            return {
                tableData: [
                    {
                        familyName: '○×',
                        firstName: '■△',
                        email: 'hogehoge@xxxx'
                    },
                    {
                        familyName: 'データ2-姓',
                        firstName: 'データ2ｰ名',
                        email: 'データ2ｰメール'
                    }
                ]
            }
        },
        computed: {
            peopleData(){
                console.log(this.$store.state);
                return this.$store.state.peopledata;
            }
        }
    }
</script>

<style scoped>

</style>
