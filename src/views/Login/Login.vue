<template>
    <div class="flex justif-beetwen font-inter">
      <div class="w-1/2">
          <img src="../../assets/images/login/fons.svg" alt="FONS" class="w-[600px] 2xl:w-[750px] mx-[15px] 2xl:mx-[100px] absolute">
           <div class="mt-[170px] 2xl:mt-[250px] relative">
            <h1 class="text-center font-[700] text-[30px] text-[#101828] ">Tizimga kirish</h1>
            <p class="text-center font-[400] text-[16px] text-[#101828] w-1/3 mx-auto mt-[16px]">Boshqaruv paneliga kirish uchun telefon raqamingiz va parolni kiriting</p>
            <form class="w-1/2 mx-auto space-y-4 md:space-y-6 mt-[38px]" action="#">
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-[14px] text-[#323231]"
                    >Telefon raqamingiz</label
                  >
                  <input
                    type="phone"
                    name="phone"
                    id="phone"
                    class="border sm:text-sm rounded-lg outline-none block w-full p-2.5 border-white placeholder-gray-400"
                    placeholder="+998 90 123 45 67"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-[14px] text-[#323231]"
                    >Parol</label
                  >
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="border outline-none sm:text-sm rounded-lg block w-full p-2.5 border-white placeholder-gray-400"
                    required=""
                  />
                </div>
                <div class="flex items-center justify-end">
                  
                </div>
                <button
                  type="submit"
                  class="w-full bg-[#2E90FA] border-white hover:bg-[#006262] text-white text-[14px] rounded-lg text-sm px-5 py-2.5 text-center"
                >
                Yuborish
                </button>
              </form>
           </div>
        </div>
        <div class="w-1/2">
          <img src="../../assets/images/login/fon.svg" alt="FON" class="w-[100%] h-screen object-cover">
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>

                    <!-- v-model="input.phone" -->
                    <!-- v-model="input.password" -->
