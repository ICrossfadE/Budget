<template>
  <el-card class="budget-form">
    <el-form :model="formData" ref="addItemInForm" :rules="rules" >

      <el-form-item label="Type" prop="type">
        <el-select class="form-select" v-model="formData.type" placeholder="Choose type...">
          <el-option label="Income" value="INCOME"/>
          <el-option label="Outcome" value="OUTCOME"/>
        </el-select>
      </el-form-item>

      <el-form-item label="Comments" prop="comment">
        <el-input v-model="formData.comment" placeholder="Comment" />
      </el-form-item>

      <el-form-item label="Value" prop="value">
        <el-input v-model.number="formData.value" />
      </el-form-item>

      <el-button @click="onSubmit" type="primary">Submit</el-button>
    </el-form>
  </el-card>
</template>

<script>

export default {
  name: 'Form',
  data: () => ({
    formData: {
      type: 'INCOME',
      comment: '',
      value: 0
    },
      rules: {
        type: [{ required: true, message: 'Please select type', trigger: 'blur'}],
        comment: [{ required: true, message: 'Please iput comment', trigger: 'blur' }],
        value: [
          { required: true, message: 'Please iput value', trigger: 'chahge' },
          { type: "number", message: 'Please iput value', trigger: 'chahge'}
        ]
    },
  }),

  methods: {
    onSubmit() {
      this.$refs.addItemInForm.validate((valid) => {
        if(valid) {
          this.$emit('submitForm', { ...this.formData })
          this.$refs.addItemInForm.resetFields();
        }
      })
    },
  },
}
</script>

<style scoped>
  .budget-form {
    max-width: 500px;
    margin: auto;
    margin-bottom: 25px;
  }
  .form-select {
    min-width: 100%;
  }
</style>