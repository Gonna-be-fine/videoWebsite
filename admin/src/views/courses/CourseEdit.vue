<template>
  <div>
    <!-- <h3>{{id?'编辑':'创建'}}课程</h3>

    <ele-form
      :form-data="data"
      :form-desc="fields"
      :request-fn="submit"
    >

    </ele-form> -->

  </div>
</template>

<script lang="ts">
// import { Vue, Component, Prop } from "vue-property-decorator";

// @Component({})
// export default class CourseEdit extends Vue {
//   @Prop(String) id!: string;
//   data = {};

//   get isNew() {
//     return !this.id;
//   }

//   fields = {
//     title: { label: "课程名称", type: "input" },
//     cover: { label: "课程封面图", type: "input" },
//   };

//   async submit(data: any) {
//     const url = this.isNew ? "courses" : `courses/${this.id}`;
//     const method = this.isNew ? "get" : "put";
//     await this.$http[method](url, data);
//     this.$message.success("保存成功");
//     this.data = {};
//     this.$router.go(-1);
//   }

//   async fetch(id: string) {
//     const res: any = await this.$http.get(`courses/${id}`);
//     this.data = res.data;
//   }

//   created() {
//     !this.isNew && this.fetch(this.id);
//   }
// }
</script>

<style>
</style>