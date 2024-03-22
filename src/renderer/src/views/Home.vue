<template>
  <main>
    <img ref="img" src="" class="cursor-pointer aspect-video nodrag" draggable="false" />
    <div
      class="py-3 m-3 text-center duration-500 bg-white rounded-lg cursor-pointer opacity-70 hover:opacity-100 hover:bg-gray-300 hover:shadow-sm nodrag"
    >
      设为壁纸
    </div>
    <div class="flex items-center justify-between mx-3 text-xs text-gray-700">下载壁纸</div>
  </main>
</template>
<script setup lang="ts">
import { useConfigStore } from '@renderer/store/useConfigStore'
import { ref, onMounted } from 'vue'
import { ElLoading } from 'element-plus'
import http from '../http/axios'

const configStore = useConfigStore()
const img = ref<HTMLImageElement>()
const load = async () => {
  console.log('load')
  const res = await http.get('/')
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  configStore.config.url = res.data.url
  img.value!.addEventListener('load', () => {
    loading.close()
  })
}

onMounted(() => {
  console.log('Home mounted')
  if (!configStore.config.url) {
    load()
  }
})
</script>
<style lang="scss" scoped></style>
```
