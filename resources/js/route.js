import Accueil from './components/accueil.vue';
import Editeur from './components/editeur.vue';
import Auteur from './components/auteur.vue'
import Specialite from './components/specialiter.vue'
import { createRouter, createWebHistory } from 'vue-router';
import Livre from './components/livre.vue'
import Addediteur from'./components/Addediteur.vue'
export const routes = [
{
name: 'accueil',
path: '/',
component: Accueil
},
{
 name:'editeur',
 path: '/edi',
 component: Editeur
},
{
    name:'auteur',
    path:'/aut',
    component: Auteur
},
{
    name:'specialite',
    path:'/spec',
    component:Specialite
},
{
    name:'livre',
    path: '/liv',
    component: Livre
   },{
    name:"Addediteur",
    path:"/addedi",
    component:Addediteur
    }
    
];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;