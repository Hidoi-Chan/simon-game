<template>
    <div class="control">
        <h2>Раунд: {{round}}</h2>
        <div class="info-block" :class="{info: clientsTurn, error}">
            <span v-if="error">Вы проиграли на {{round}} раунде. Попробуйте снова!</span>
            <span v-else-if="clientsTurn">Ваш ход!</span>
        </div>
        <button 
            class="start"
            v-bind:disabled="round !== 0  && !error"
            @click="$emit('start-new-game')"
        >
            Старт
        </button>
        <h3>Уровень сложности:</h3>
        <div class="radio-block">
            <input type="radio" name="interval" id="ease" value="1500" @change="setInterval" checked>
            <label for="ease">Легко</label>
        </div>
        <div class="radio-block">
            <input type="radio" name="interval" id="medium" value="1000" @change="setInterval">
            <label for="medium">Средне</label>
        </div>
        <div class="radio-block">
            <input type="radio" name="interval" id="hard" value="400" @change="setInterval">
            <label for="hard">Сложно</label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        round: Number,
        error: Boolean,
        clientsTurn: Boolean
    },
    methods: {
        setInterval($event) {
            this.$emit('set-interval', $event.target.value)
        }
    }
}
</script>

<style scoped>
    .control {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .start {
        outline: none;
        border: 1px solid #ccc;
        border-radius: 20px;
        background: #74b4f5;
        cursor: pointer;
        padding: 8px 16px;
        font-size: 20px;
        transition: background 200ms ease;
    }

    .start:hover {
        background: #1e90ff;
    }

    .start:disabled {
        background: #ccc;
    }

    .info-block {
        width: 100%;
        max-width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        border: 1px solid #bbb;
        border-radius: 4px;
        box-sizing: border-box;
        text-align: center;
    }

    .info-block.info {
        border: 1px solid #1e90ff;
        color: #1e90ff;
    }

    .info-block.error {
        border: 1px solid #FF5643;
        color: #FF5643;
    }

    .radio-block {
        align-self: start;
        margin-bottom: 5px;
    }

    input[type="radio"] {
        margin-right: 10px;
    }
</style>