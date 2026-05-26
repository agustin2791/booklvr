import { defineStore } from "pinia";
import { ref } from "vue";

const OPEN_LIBRARY_BASE_URL = import.meta.env.VITE_OPEN_LIBRARY
export const useLibrary = defineStore('library', () => {
    const book_list = ref([])

    const getBookList = async (search: string): Promise<boolean> => {
        let q = search
        let book: string, author: string
        if (search.includes('+by+')) {
            [book, author] = q.split('+by+')
            q = `title=${book}&author=${author}`
        } else {
            q = `q=${q}`
        }
        const books = await fetch(`${OPEN_LIBRARY_BASE_URL}/search.json?${q}`)
        const res = await books.json()
        console.log(res)
        if (res.numFound === 0) {
            book_list.value = []
            return false
        } else {
            book_list.value = res.docs
            return true
        }
    }

    return { book_list, getBookList }
})