<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import WaveSurfer from 'wavesurfer.js'
import axios from 'axios';

const ws = ref()
const statusIcon = ref("⫸")

async function getPeaks() {
    let peaks: never[] = [];
    await axios.get('http://audio.dustcolor.asia/Cheerleader.json').then(
        function (res) {
            peaks = res.data.data
        }
    )
    console.log(peaks)
    return peaks;
}

const ctx = document.createElement('canvas').getContext('2d')
//Playing Gradient
const gradientUp = ctx?.createLinearGradient(0, 0, 0, 70)
gradientUp?.addColorStop(0, 'rgb(255, 253, 137)')
gradientUp?.addColorStop(0.7, 'rgb(255, 255, 255)')
gradientUp?.addColorStop(1, 'rgb(176, 255, 86)')
//Played Gradient
const gradientDown = ctx?.createLinearGradient(0, 0, 0, 70)
gradientDown?.addColorStop(1, 'rgb(255, 253, 137)')
gradientDown?.addColorStop(0.7, 'rgb(0, 0, 0)')
gradientDown?.addColorStop(0, 'rgb(176, 255, 86)')

const init = async () => {
    ws.value = WaveSurfer.create({
        container: '#waveform',
        cursorColor: '#fff',
        cursorWidth: 2,
        waveColor: gradientUp,
        progressColor: gradientDown,
        height: "auto",
        width: 500,
        url: "http://audio.dustcolor.asia/Cheerleader.mp3",
        peaks: await getPeaks(),
        barWidth: 2,
        // Optionally, specify the spacing between bars
        barGap: 1,
        // And the bar radius
        barRadius: 2,
        barHeight: 0.8,
        dragToSeek: true
    });
    ws.value.on('interaction', () => {
        ws.value.play()
    })
}

onMounted(() => {
    init();
})

function control() {
    ws.value.isPlaying() ? ws.value.pause() : ws.value.play()
    ws.value.isPlaying() ? statusIcon.value = "⫻" : statusIcon.value = "⫸"
}

</script>

<template>
    <div id="body">
        <div class="waves">
            <div id="waveform" style="width: 500px;border: 1px solid white;"></div>
            <button @click="control()" style="font-size: 2rem;">{{ statusIcon }}</button>
        </div>
    </div>
</template>

<style>
#body {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}
div {
    color: rgb(255, 255, 255);
    transition: all 1s;
}

.waves {
    width: 70%;
    position: relative;
    right: 20;

}
</style>