<template>
  <div class="document-container">
    <el-card class="document-card">
      <template #header>
        <div class="card-header">
          <span>文档中心</span>
          <el-button type="primary" size="small">新建文档</el-button>
        </div>
      </template>
      
      <el-table :data="documents" style="width: 100%">
        <el-table-column prop="title" label="标题" width="180" />
        <el-table-column prop="author" label="作者" width="180" />
        <el-table-column prop="date" label="创建日期" />
        <el-table-column prop="status" label="状态">
          <template #default="scope">
            <el-tag :type="scope.row.status === '已完成' ? 'success' : 'warning'">
              {{ scope.row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const documents = ref([
  {
    title: '项目说明文档',
    author: '张三',
    date: '2024-03-20',
    status: '已完成'
  },
  {
    title: '使用指南',
    author: '李四',
    date: '2024-03-19',
    status: '进行中'
  },
  {
    title: 'API文档',
    author: '王五',
    date: '2024-03-18',
    status: '已完成'
  }
])

const handleEdit = (row) => {
  console.log('编辑文档', row)
  ElMessage.info('编辑文档：' + row.title)
}

const handleDelete = (row) => {
  console.log('删除文档', row)
  ElMessage.warning('删除文档：' + row.title)
}
</script>

<style scoped>
.document-container {
  padding: 20px;
}

.document-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style> 