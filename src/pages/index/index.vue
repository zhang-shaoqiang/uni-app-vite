<template>
  <view class="flex flex-col items-center justify-center">
    <image class="w-25 h-25 mt-25 mx-auto mb-12.5" src="/static/logo.png" />
    <view class="flex justify-center">
      <text class="text-lg text-gray-500">{{ $t('app.locale') }}</text>
    </view>
    <button @click="toggleLocale">切换语言</button>
  </view>
</template>

<script setup lang="ts">
import useToggleLocale from '@/composables/useToggleLocale';
const { toggleLocale } = useToggleLocale();
</script>
