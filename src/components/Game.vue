<template>
    <div class="game">
        <GameItem 
            v-for="item in gameItems" 
            :key="item.id" 
            :gameItem="item"
            :clientsTurn="clientsTurn"
            @push-new-value="pushNewValue"
        />
    </div>
</template>

<script>
import GameItem from '@/components/GameItem'
export default {
    components: {
        GameItem
    },
    props: {
        gameItems: Array,
        clientsTurn: Boolean
    },
    methods: {
        pushNewValue(id) {
            this.$emit('push-new-value', id)
        }
    }
}
</script>

<style scoped>
    .game {
        width: 300px;
        min-width: 300px;
        height: 300px;
        border-radius: 100%;        
        box-shadow: 4px 4px 10px rgba(0,0,0,.4);
        margin-right: 60px;
    }
    
    @media screen and (max-width: 700px) {
        .game {
            margin: 0;
        }
    }
</style>