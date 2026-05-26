import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
    { path: '/', component: () => import('../components/HelloWorld.vue')},
    {
        path: '/book_list/:title',
        component: () => import('../components/template/MainTemplate.vue'),
        children: [
            { path: '/:title', component: () => import('../components/book_list/BookList.vue')},
            { path: '/details', component: () => import('../components/book_list/BookDetails.vue')}
        ]
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;