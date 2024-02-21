<template>
    <div class="w-[350px] border-r-2 ">
        <img src="../../assets/images/logo/Logo.svg" alt="Logo" class="px-[28px] py-[32px]">
        <div class="mt-[32px]">
            <div v-for="el in navLinks" :key="el.id" class="px-[16px] mt-1">
                <router-link :to="el.link" class="flex items-center gap-3 px-[12px] py-[8px] hover:bg-[#F9FAFB]">
                    <img :src="el.icon" alt="">
                    <p class="text-[24px] font-semibold">{{ el.title }} <span></span></p>
                </router-link>
            </div>
        </div>
        <div class="flex items-center justify-between px-[28px] mt-[90px] 2xl:mt-[250px]">
            <div class="flex items-center gap-6">
                <img src="../../assets/user.avif" alt="user" class="w-[60px] rounded-full bg-gray-500 p-1">
                <div>
                    <h3 class="font-bold text-[18px]">Olivia Rhye</h3>
                    <p>Admin</p>
                </div>
            </div>
            <div>
                <img src="../../assets/images/icon/logout.svg" alt="Logout" class="w-[30px]">
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useRouter } from "vue-router";
    import {navLinks} from '../../constants/navLinks'
</script>

<style lang="scss" scoped>
.router-link-exact-active {
    background-color: #F9FAFB;
  }
</style>