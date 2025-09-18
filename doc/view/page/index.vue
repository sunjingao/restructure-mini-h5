<template>
  <div>
    <h1>页面设计</h1>
    <p>在页面的重写时，遵守了前端基建中的前端规范，最大化的保证了代码的可读性、可维护性。</p>

    <h2>
      下面举例说明页面中普遍存在的部分写法问题。涉及到的不足之处，在前端规范中都有要求，如果遵守相关规范，对代码的可维护性会有非常大的提高。
    </h2>

    <h2>1：该用组件的地方没用组件。</h2>
    <p>这带来的以下问题：</p>
    <p>1）自己实现一个组件，需要一定成本，并且代码量增多，不利于维护。</p>
    <p>2）自己写的组件，没有考虑到点击等效果，展示上并不友好。</p>
    <p>3）如果对组件的通用内容，如按钮的颜色进行调整，无法覆盖自己写的内容。不利于统一调整。</p>
    <p>下面左侧是原来的代码，右侧是改造后的内容，直接使用button组件即可。</p>
    <m-image :width="200" :height="200" :src="getPublicAssetURL('/jpg/open-lock.jpg')" />
    <m-image
      class="ml-10px"
      :width="200"
      :height="200"
      :src="getPublicAssetURL('/png/new-open-lock.png')"
    />

    <h2>2：没有合理拆分组件</h2>
    <p>
      将所有代码都写在一个文件中，导致文件很大，不利于阅读维护。如此页面，单单template就有700行代码。而将页面通过组件拆分，就非常简洁清晰，维护时，不涉及到的内容根本无需阅读代码。可通过以下两个部分进行对比查看。
    </p>
    <div class="flex item-top">
      <iframe class="w-800px h-200px" :src="getPublicAssetURL('/text/no-component.txt')" />
      <m-image
        :width="200"
        :height="200"
        class="ml-10px"
        :src="getPublicAssetURL('/png/has-component.png')"
      />
    </div>

    <h2>3：拆分组件的结构不合理</h2>
    <p>
      对页面组件、工具方法、hook等内容进行拆分时，不应该放在同一个文件夹下，而应该按照结构划分放在对应的文件夹中，类似于套娃的结构，这样可以清晰的看出页面结构，维护时也可减少无用代码的阅读。可通过以下两个部分进行对比查看。
    </p>
    <div class="flex item-top">
      <m-image :width="200" :height="200" :src="getPublicAssetURL('/png/old-structure.png')" />
      <m-image
        :width="200"
        :height="200"
        class="ml-10px"
        :src="getPublicAssetURL('/png/new-structure.png')"
      />
    </div>

    <h2>4：缺少注释。</h2>
    <p>
      变量注释很少，导致阅读时必须先把页面答题看一遍，多耗费了一些时间。可通过以下两个部分进行对比查看。
    </p>
    <m-image :width="200" :height="200" :src="getPublicAssetURL('/jpg/no-declation.jpg')" />
    <m-image
      :width="200"
      :height="200"
      class="ml-10px"
      :src="getPublicAssetURL('/jpg/has-declation.jpg')"
    />

    <h2>5：变量没有按照页面逻辑，写在合适的结构中，导致可读性和可维护性很弱。</h2>
    <p>
      应该针页面的逻辑、结构，将属于相同部分的变量放在一个结构对象中，方便扩展。如下，第一个部分是优化前的代码，变量声明了这么多，导致阅读和扩展都不方便。可通过以下两个部分进行对比查看。
    </p>
    <div class="flex items-top">
      <iframe class="w-800px h-200px" :src="getPublicAssetURL('/text/ol-params.txt')" />
      <m-image
        :width="200"
        :height="200"
        class="ml-10px"
        :src="getPublicAssetURL('/png/new-params.png')"
      />
    </div>

    <h2>6：变量及函数没有好的声明，无法直接看出类型和使用范围。</h2>
    <p>
      按照前端规范，vue中，ref类型的内容应该在变量后增加Ref，使用时可直接看出其类型。函数回调应该以handle开始，可以直观的看出其是回调。不用阅读前面的代码便可减少类型使用的错误。可通过以下两个部分进行对比查看。
    </p>
    <m-image :width="200" :height="200" :src="getPublicAssetURL('/jpg/no-good-name.jpg')" />
    <m-image
      :width="200"
      :height="200"
      class="ml-10px"
      :src="getPublicAssetURL('/jpg/has-good-name.jpg')"
    />

    <h2>7：没有最大化的使用Es6函数。</h2>
    <p>
      仍以回调的方式取写代码，使用es6的async、await是线性写代码，最为直观可读。可通过以下两个部分进行对比查看。
    </p>
    <m-image :width="200" :height="200" :src="getPublicAssetURL('/jpg/no-es6.jpg')" />
    <m-image
      :width="200"
      :height="200"
      class="ml-10px"
      :src="getPublicAssetURL('/jpg/has-es6.jpg')"
    />

    <h2>8：页面内容没有按照区域划分。</h2>
    <p>
      将内容杂糅在一起，并没有按照类别区分，不易阅读，下面仅展示优化后的简单效果，可以看出，不同的类别区分防止，阅读非常清晰
    </p>
    <m-image :width="200" :height="200" :src="getPublicAssetURL('/png/layer.png')" />

    <h2>9：初始化内容没有统一放在在生命周期中，在文件的不同位置随意调用</h2>
    <p>
      不从上到下阅读一遍代码，都有可能会漏掉某些接口调用。最好在文件的最下面写好声明，按照前端规范中的vue3规范的编写顺序来写，更易阅读。
    </p>
  </div>
</template>

<script setup>
import { getPublicAssetURL } from '@/util/index.ts';

console.log(111, getPublicAssetURL('/mp4/speed-old.mp4'));
</script>

<style scoped></style>
