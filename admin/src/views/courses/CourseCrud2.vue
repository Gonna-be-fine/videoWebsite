<template>
  <div>
    <h3>{{id?'编辑':'创建'}}课程</h3>

    <avue-crud
      :data="data.data"
      :option="option"
    ></avue-crud>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class CourseCrud extends Vue {
  @Prop(String) id!: string;
  data = {};
  option = {
    title: "课程管理",
    columns: [
      { prop: "name", label: "课程名称" },
      { prop: "cover", label: "课程封面图" },
    ],
  };

  get isNew() {
    return !this.id;
  }

  async submit(data: any) {
    const url = this.isNew ? "courses" : `courses/${this.id}`;
    const method = this.isNew ? "get" : "put";
    await this.$http[method](url, data);
    this.$message.success("保存成功");
    this.data = {};
    this.$router.go(-1);
  }

  async fetch(id: string) {
    const res: any = await this.$http.get(`courses/${id}`);
    this.data = res.data;
  }

  created() {
    !this.isNew && this.fetch(this.id);
  }
}
</script>

<style>
</style>