<template>
  <div>
    <avue-crud
      v-if="option.column"
      :data="data.data"
      :option="option"
      :page.sync="page"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
      @sort-change="changeSort"
      @search-change="search"
    ></avue-crud>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
  @Prop(String) resource?: string;

  data: any = {};
  option: any = {};
  page: any = {
    pageSize: 2,
    pageSizes: [2, 5, 10],
    total: 100, // 一般都得加个total才会显示出来
  };
  query: any = {
    limit: 2,
  };

  async search(where: any, done: any) {
    for (let k in where) {
      const field = this.option.column.find((v: any): boolean => v.prop === k);
      if (field.regex) {
        where[k] = { $regex: where[k] };
      }
    }
    this.query.where = where;
    this.fetch();
    done();
  }

  async changeSort(sort: any) {
    const { prop, order } = sort;
    if (!order) this.query.sort = null;
    else {
      this.query.sort = {
        [prop]: order == "ascending" ? 1 : -1,
      };
    }
    this.fetch();
  }

  async changePage(page: any) {
    const { currentPage, pageSize } = page;
    this.query.page = currentPage;
    this.query.limit = pageSize;
    this.fetch();
  }

  async fetchOption() {
    const res: any = await this.$http.get(`${this.resource}/option`);
    this.option = res.data;
  }

  async fetch() {
    const res: any = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.query,
      },
    });
    this.page.total = res.data.total;
    this.data = res.data;
  }

  async create(row: any, done: any) {
    await this.$http.post(`${this.resource}`, row);
    this.$message.success("创建成功");
    this.fetch();
    done();
  }
  async update(row: any, index: any, done: any) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    await this.$http.put(`${this.resource}/${row._id}`, data);
    this.$message.success("更新成功");
    this.fetch();
    done();
  }

  async remove(row: any) {
    try {
      await this.$confirm("是否确认删除？");
    } catch (e) {
      return;
    }
    await this.$http.delete(`${this.resource}/${row._id}`);
    this.$message.success("删除成功");
    this.fetch();
  }

  created() {
    this.fetchOption();
    this.fetch();
  }
}
</script>

<style>
.avue-upload__avatar {
  height: auto;
}
</style>