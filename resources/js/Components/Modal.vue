<!-- resources/js/Components/Modal.vue -->
<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg w-full">
            <div class="flex justify-between items-center p-4 border-b">
                <h3 class="text-2xl font-semibold">{{ title }}</h3>
                <button @click="close" class="text-gray-600 hover:text-gray-800 text-2xl">&times;</button>
            </div>
            <div class="p-4">
                <img :src="image" v-if="image" alt="" class="w-full h-64 object-cover mb-4 rounded">
                <p>{{ content }}</p>
            </div>
            <div class="flex justify-end p-4 border-t">
                <button @click="close" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded">Закрыть</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        title: String,
        content: String,
        image: String
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
/* Дополнительные стили при необходимости */
</style>
