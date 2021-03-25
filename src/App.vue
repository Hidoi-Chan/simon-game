<template>
    <div id="app">
        <h1>Simon Says</h1>
        <div class="container">
            <Game
                :gameItems="gameItems"
                :clientsTurn="clientsTurn"
                @push-new-value="pushNewValue"
            />
            <Control 
                @start-new-game="startNewGame"
                @set-interval="setInterval"
                :round="round"
                :error="error"
                :clientsTurn="clientsTurn"
            />
        </div>
    </div>
</template>

<script>
import Game from '@/components/Game'
import Control from '@/components/Control'

export default {
    name: 'App',
    data() {
        return {
            round: 0,
            gameItems: [
                {
                    id: 0,
                    isActive: false
                },
                {
                    id: 1,
                    isActive: false
                },
                {
                    id: 2,
                    isActive: false
                },
                {
                    id: 3,
                    isActive: false
                }
            ],
            sequenceOfValues: [],
            clientSequenceOfValues: [],
            interval: 1500,
            clientsTurn: false,
            error: false
        }
    },
    components: {
        Game,
        Control
    },
    methods: {
        startNewGame() {
            this.round = 0
            this.error = false
            this.startNewRound()
        },
        startNewRound() {
            this.round += 1
            this.clientSequenceOfValues = []
            this.sequenceOfValues.push(this.generateRandomNum())
        },
        pushNewValue(id) {
            if (this.clientsTurn) {
                this.clientSequenceOfValues.push(id)
                this.playAudio(id)
            }
        },
        generateRandomNum() {
            return Math.floor(Math.random() * 4)
        },
        playAudio(num) {
            new Audio(require(`./assets/sounds/${num}.mp3`)).play()
        },
        setInterval(value) {
            this.interval = +value
        }
    },
    watch: {
        sequenceOfValues: {
            handler: function(values) {
                if (!values.length) return

                for (let i = 0; i <= values.length; i++) {
                        setTimeout(() => {
                            if (i === values.length) {
                                if (this.round) {
                                    this.clientsTurn = true
                                }
                                return
                            }

                            this.gameItems[values[i]].isActive = true
                            this.playAudio(values[i])

                            setTimeout(() => {
                                this.gameItems[values[i]].isActive = false
                                
                            }, this.interval - 100)                            
                        }, this.interval * i)
                }
            },
            deep: true
        },
        clientSequenceOfValues: {
            handler: function(clientValues) {
                if (!clientValues.length) return

                for (let i = 0; i < clientValues.length; i++) {
                    if (this.sequenceOfValues[i] !== clientValues[i]) {
                        this.sequenceOfValues = []
                        this.clientSequenceOfValues = []
                        this.clientsTurn = false
                        this.error = true
                        break
                    }
                }
                if (this.sequenceOfValues.length === clientValues.length  && !this.error) {
                    this.clientsTurn = false
                    setTimeout(this.startNewRound, 500)
                }
            },
            deep: true
        },
        interval() {
            this.round = 0
            this.sequenceOfValues = []
            this.clientSequenceOfValues = []
            this.clientsTurn = false
            this.error = false
        }
    }
}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1 {
        text-align: center;
    }

    .container {
        max-width: 600px;
        margin: 0 auto;
        display: flex;
    }

    @media screen and (max-width: 700px) {
        .container {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
