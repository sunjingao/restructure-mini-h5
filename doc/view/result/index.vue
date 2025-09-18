<template>
  <div>
    <h1>优化成效</h1>

    <h2>一：开发效率</h2>
    <p>
      下面两个视频，左侧是优化前的编译速度，右侧是优化后H5的编译速度。通过对比，可以清晰的看出重写后带来的效率上的提升。
    </p>
    <p>
      <video :width="500" :src="getPublicAssetURL('/mp4/speed-old.mp4')" controls="controls" />
      <video
        class="ml-10px"
        :width="500"
        :src="getPublicAssetURL('/mp4/speed-new.mp4')"
        controls="controls"
      />
    </p>

    <h2>二：开发成本节约</h2>
    <p>
      1）使用重写后的内容，微信小程序、支付宝小程序更新时不需要开发两套代码，只需要开发H5代码即可。
    </p>
    <p>2）其余各端，包括android、ios，都可共用H5代码，可以减少原生开发的投入。</p>

    <h2>三：测试成本节约</h2>
    <p>测试人员不需要验证各端，只需着重验证在ios端上展示的效果，以及调用原生方法的位置就可以。</p>

    <h2>四：产品的可扩展性提高</h2>
    <p>公司的产品可以很方便的展示在其他的平台，增加公司产品的曝光度，仅需要简单的对接即可。</p>
  </div>
</template>

<script setup>
import { getPublicAssetURL } from '@/util/index.ts';
</script>

<style scoped></style>
