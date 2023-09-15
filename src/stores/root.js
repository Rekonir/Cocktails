import { defineStore } from "pinia";
import axios from "axios";
import {INGREDIENRS_URL, COCKTAILS_URL} from '../constants/index.js'

export const useRootStore = defineStore('root', {
    state: () => ({
        ingredients: [],
        cocktails: []
    }),
    actions: {
        async getIngredients() {
            const data = await axios.get('www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
            this.ingredients = data?.data?.drinks
        },
        async getCocktails(ingredient) {
            const data = await axios.get(`${COCKTAILS_URL}${ingredient}`)
            this.ingredients = data?.data?.drinks
        }
    }
})