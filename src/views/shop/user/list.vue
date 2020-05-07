<template>
  <div class="app-container">
    <template>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-table
              :data="scope.row.orders"
              align="center"
              stripe>
              <el-table-column
                align="center"
                label="编号"
                prop="id"/>
              <el-table-column
                label="备注"
                align="center"
                prop="note"/>
              <el-table-column
                label="下单时间"
                align="center"
                prop="gmtCreate"/>
              <el-table-column
                label="修改时间"
                align="center"
                prop="gmtModified"/>

            </el-table>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="编号"
          prop="id"/>

        <el-table-column
          align="center"
          label="用户名"
          prop="username"/>

        <el-table-column
          align="center"
          label="生日"
          prop="birthday"/>

        <el-table-column
          align="center"
          label="性别"
          prop="sex"/>

        <el-table-column label="是/否">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.deleted" @change="userStateChanged(scope.row)"/>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="地址"
          prop="address.addressName"/>

      </el-table>
    </template>

  </div>
</template>

<script>
import user from '@/api/shop/user'
export default {
  data() {
    return {
      tableData: []
    }
  },
  created() {
    this.show()
  },
  methods: {
    getRowKeys(key) {
      console.log(this.tableData)
    },
    show() {
      user.getUserAndAddressAndOrder().then(response => {
        console.log(response.data.users)
        this.tableData = response.data.users
      })
    }
  }
}
</script>
