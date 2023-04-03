import {createRouter, createWebHistory} from 'vue-router'
import ContactsManager  from '../view/ContactsManager.vue'
import AddContacts from '../view/AddContacts.vue'
import EditContacts from '../view/EditContacts.vue'
import ViewContacts from '../view/ViewContacts.vue'
import PageNotFound from '../view/PageNotFound.vue'

const routes = [
    {
        path:'/',
        name:'ContactsManager',
        component: ContactsManager
    },
    {
        path:'/Add',
        name:'AddContacts',
        component: AddContacts
    },
    {
        path:'/Edit/:id',
        name:'EditContacts',
        component: EditContacts
    },
    {
        path:'/View/:id',
        name:'ViewContacts',
        component: ViewContacts
    },
    {
        path:'/:pathMatch(.*)*',
        name:'PageNotFound',
        component: PageNotFound
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;