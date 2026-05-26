import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

type RecType = {
    title: string,
    author: string,
    short_description: string,
    isbn_13: string,
    book_cover: string
}
const REC_BASE_URL = import.meta.env.VITE_REC_BASE_URL
export const useRecommendation = defineStore('recommend', () => {

    const rec_result: Ref<RecType> = ref({} as RecType)
    const reasoning: Ref<string> = ref('')

    const getRecommendations = async (prompt: string) => {
        console.log(prompt)
        const params = {
            text: prompt
        }
        rec_result.value = {} as RecType
        try {
            const recommendations = await fetch(`${REC_BASE_URL}/recommend/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Security-Policy': "connect-src 'self' http://localhost:8000;"

                },
                body: JSON.stringify(params)
            })
            const result = await recommendations.json()
            rec_result.value = result.data.result
            reasoning.value = result.data.reasoning
        } catch (e) {
            rec_result.value = {} as RecType
        }
    }

    const urlHealthCheck = async (url: string): Promise<boolean> => {
        const response = await fetch(REC_BASE_URL + '/health_check/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: url})
        })
        const json_res = await response.json()
        return json_res.exists as boolean
    }

    return { rec_result, reasoning, getRecommendations, urlHealthCheck }
}, {
    persist: {
        storage: sessionStorage,
        pick: ['rec_result', 'reasoning']
    }
})