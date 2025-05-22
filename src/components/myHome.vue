<template>
  <div class="home-container">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>今日概览</span>
            </div>
          </template>
          <div class="card-content">
            <el-statistic title="活跃用户" :value="activeUsers">
              <template #suffix>
                <span>人</span>
              </template>
            </el-statistic>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>任务统计</span>
            </div>
          </template>
          <div class="card-content">
            <el-statistic title="待处理任务" :value="pendingTasks">
              <template #suffix>
                <span>个</span>
              </template>
            </el-statistic>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>系统状态</span>
            </div>
          </template>
          <div class="card-content">
            <el-statistic title="系统运行时间" :value="systemUptime">
              <template #suffix>
                <span>%</span>
              </template>
            </el-statistic>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeUsers = ref(1234)
const pendingTasks = ref(42)
const systemUptime = ref(99.9)
</script>

<style scoped>
.home-container {
  padding: 20px;
}

.box-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-content {
  text-align: center;
  padding: 20px 0;
}
</style> 