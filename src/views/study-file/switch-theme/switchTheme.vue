<template>
  <div>
    <el-select v-model="theme" @change="changeTheme">
      <el-option v-for="item in themes" :value="item.value" :key="item.value">{{ item.name }}</el-option>
    </el-select>

    <div class="error-font">错误信息</div>
    <div class="success-font">成功信息</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        { name: '白色主题', value: 'theme-gray' },
        { name: '黑色主题', value: 'theme-dark' },
      ],
      theme: 'theme-gray',
    };
  },
  methods: {
    changeTheme(theme) {
      window.localStorage.setItem('theme', theme);
      // 设置body类
      const body = document.querySelector('body');
      this.themes.forEach((t) => {
        body.classList.remove(t.value);
      });
      body.classList.add(theme);
    },
  },
  created() {
    // // 初始化获取主题
    // this.theme = window.localStorage.getItem('theme') || this.themes[0].value;
    // // 设置body类
    // const body = document.querySelector('body');
    // body.classList.add(this.theme);
  },
};
</script>

