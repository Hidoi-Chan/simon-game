<template>
    <div 
        class="game-item" 
        :class="{disabled: !clientsTurn, active: gameItem.isActive}"
        @click="$emit('push-new-value', gameItem.id)"
    />
</template>

<script>
export default {
    props: {
        gameItem: Object,
        clientsTurn: Boolean
    }
}
</script>

<style scoped>
    .game-item {
        float: left;
        width: 150px;
        height: 150px;
        opacity: .6;
        cursor: pointer;
        transition: opacity, box-shadow 150ms ease;
    }
    
    .game-item.active {
        opacity: 1;
    }
    
    .game-item:nth-child(1) {
        background: #1e90ff;
        border-radius: 100% 0 0 0;
    }
    .game-item:nth-child(1):hover {
        box-shadow: inset -2px -2px 10px rgba(0,0,0,.4);
    }
    .game-item:nth-child(2) {
        background: #FF5643;
        border-radius: 0 100% 0 0;
    }
    .game-item:nth-child(2):hover {
        box-shadow: inset 2px -2px 10px rgba(0,0,0,.4);
    }
    .game-item:nth-child(3) {
        background: #FEEF33;
        border-radius: 0 0 0 100%;
    }
    .game-item:nth-child(3):hover {
        box-shadow: inset -2px 2px 10px rgba(0,0,0,.4);
    }
    .game-item:nth-child(4) {
        background: #BEDE15;
        border-radius: 0 0 100% 0;
    }
    .game-item:nth-child(4):hover {
        box-shadow: inset 2px 2px 10px rgba(0,0,0,.4);
    }
    
    .game-item.disabled:hover {
        cursor: auto;
        box-shadow: none;
    }
</style>