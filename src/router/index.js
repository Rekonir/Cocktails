import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '../pages/CocktailRandom.vue'
import { ROITES_PATHS } from '../constants/index'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: ROITES_PATHS.HOME,
            name: ROITES_PATHS.HOME,
            component: Home
        },
        {
            path: ROITES_PATHS.COCKTAIL,
            name: ROITES_PATHS.COCKTAIL,
            component: Cocktail
        }, {
            path: ROITES_PATHS.COCKTAIL_RANDOM,
            name: ROITES_PATHS.COCKTAIL_RANDOM,
            component: CocktailRandom
        }
    ]

})
export default router