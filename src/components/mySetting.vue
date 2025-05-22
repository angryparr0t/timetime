<template>
  <div class="setting-container">
    <el-card class="setting-card">
      <template #header>
        <div class="card-header">
          <span>系统设置</span>
        </div>
      </template>
      
      <el-form :model="form" label-width="120px">
        <el-form-item label="系统名称">
          <el-input v-model="form.systemName" />
        </el-form-item>
        
        <el-form-item label="系统主题">
          <el-select v-model="form.theme" placeholder="请选择主题">
            <el-option label="浅色" value="light" />
            <el-option label="深色" value="dark" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="通知设置">
          <el-switch
            v-model="form.notification"
            active-text="开启通知"
            inactive-text="关闭通知"
          />
        </el-form-item>
        
        <el-form-item label="自动保存">
          <el-switch
            v-model="form.autoSave"
            active-text="开启自动保存"
            inactive-text="关闭自动保存"
          />
        </el-form-item>
        
        <el-form-item label="保存间隔">
          <el-input-number
            v-model="form.saveInterval"
            :min="1"
            :max="60"
            :disabled="!form.autoSave"
          />
          <span class="unit">分钟</span>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存设置</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'

const initialForm = {
  systemName: '我的系统',
  theme: 'light',
  notification: true,
  autoSave: true,
  saveInterval: 5
}

const form = reactive({ ...initialForm })

const onSubmit = () => {
  console.log('保存设置', form)
  ElMessage.success('设置保存成功')
}

const resetForm = () => {
  Object.assign(form, initialForm)
}
</script>

<style scoped>
.setting-container {
  padding: 20px;
}

.setting-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.unit {
  margin-left: 10px;
  color: #666;
}
</style> 