<script setup>
import { reactive, ref } from 'vue';
import router from '../router/router';

function toHome(){
    router.push("/home")
}

function toNoteList(){
    router.push("/noteList")
}

</script>

<template>
    <div>
        <el-menu mode="horizontal">
            <el-menu-item index="1" @click="toHome()" >首页</el-menu-item>
            <el-menu-item index="2" @click="toNoteList()" >笔记</el-menu-item>
        </el-menu>
    </div>
</template>


<style scoped>
  
</style>
