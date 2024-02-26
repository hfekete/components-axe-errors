<template>
  <div>
    <h1>Example page for upopover issues</h1>
    <UPopover>
      <UButton color="white" label="Open" trailing-icon="i-heroicons-chevron-down-20-solid" />

      <template #panel>
        <div class="p-4">
          <div class="h-20 w-48"></div>
        </div>
      </template>
    </UPopover>
  </div>
</template>
