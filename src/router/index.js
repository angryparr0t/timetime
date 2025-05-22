import {
    createRouter,
    createWebHistory
} from 'vue-router'
import myHome from '../components/myHome.vue'
import myDocument from '../components/myDocument.vue'
import mySetting from '../components/mySetting.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: myHome
    },
    {
        path: '/document',
        name: 'Document',
        component: myDocument
    },
    {
        path: '/setting',
        name: 'Setting',
        component: mySetting
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router