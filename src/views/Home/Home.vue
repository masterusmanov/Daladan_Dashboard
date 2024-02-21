<template>
    <div class="p-[32px] font-inter">
        <div class="flex items-center justify-between">
            <h1 class="text-[24px] font-[700]">Monitoring</h1>
            <div class="flex items-center">
                <div class="flex items-center gap-6">
                    <div class="border border-[#D0D5DD] shadow-md rounded-lg p-1">
                        <i class='bx bx-calendar'></i>
                        <select name="" id="" class="border-none outline-none">
                            <option value="" class="">Kunlik</option>
                            <option value="">Haftalik</option>
                            <option value="">Oylik</option>
                        </select>
                    </div>
                    <input type="date" :value="dateInput" class="border border-[#D0D5DD] shadow-md rounded-lg p-1">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    const dateInput = ref(formattedDate);
    
</script>

<style lang="scss" scoped>

</style>