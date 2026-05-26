<script setup lang="ts">
import { Browser } from '@capacitor/browser';
import Button from '../shared/Button.vue';
import { useRecommendation } from '../../stores/recommendation';

const props = defineProps(['book'])
const recommendation = useRecommendation()


// const link = computed(() => {
//     let book, author
//     if (props.book?.includes(' by ')) {
//         [book, author] = props.book?.split(' by ')
//     } else {
//         book = props.book
//     }
//     return `/book_list/${book?.replace(/ /g, '+')}`
// })

const nav_to = async () => {
    try {
        let url = `https://bookshop.org/a/115902/${props.book.isbn_13}`
        const has_link = await recommendation.urlHealthCheck(url)

        if (!has_link) {
            url = `https://bookshop.org/beta-search?keywords=${props.book.title.replace(/ /g, '+')}`
        }

        await Browser.open({url})
    } catch (e) {
        console.log(e)
    }
    // var http = new XMLHttpRequest();
    // http.open('HEAD', url, false);
    // http.send();
    // console.log(http)
    // if (http.status != 404)
    //     window.open(url, '_blank')
    // else
    //     window.open(`https://bookshop.org/beta-search?keywords=${props.book.title.replace(/ /g, '+')}`);
}

</script>
<template>
    <ion-grid class="my-2">
        <ion-row>
            <ion-col size="12"><div class="flex-1 text-lg text-center bg-blue-950 text-white rounded-md p-2">{{ props.book.title }} by {{ props.book.author }}</div></ion-col>
        </ion-row>
        <ion-row class="flex flex-wrap p-2">
            <ion-col size-sm="12" size="auto" class="px-2">{{ props.book.short_description }}</ion-col>
            <div class="w-full">
                <Button @click="nav_to" class="w-1/2 m-auto" bg="bg-emerald-500" color="text-white" label="View Options" />
            </div>
        </ion-row>
    </ion-grid>

</template>