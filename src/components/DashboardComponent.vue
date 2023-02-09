<template>
  <div id="task-table">
    <div>
      <MessageComponent :msg="msg" v-show="msg"/>
      <div id="task-table-head">
        <div class="order-id">#</div>
        <div>Quem?</div>
        <div>Data:</div>
        <div>Tarefa:</div>
        <div>Status:</div>
      </div>
    </div>
    <div id="task-table-row">
      <div class="task-table-row" v-for="item in toDo" :key="item.id">
        <div class="order-number">{{ item.id }}</div>
        <div> {{ item.name }}</div>
        <div>09/02/2023</div>
        <div>
          <ul>
            <li v-for="task in item.tasks" :key="task.id">{{ getTask(task).tipo }}</li>
          </ul>
        </div>
        <div>
          <select name="status" id="status" @change="updateTask($event, item.id)">
            <option v-for="s in status" :key="s.id" :value="s.tipo" :selected="item.status === s.tipo">
              {{ s.tipo }}
            </option>
          </select>
          <button class="delete-btn" @click="deleteTask(item.id)">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageComponent from "@/components/MessageComponent.vue";

export default {
  name: 'DashboardComponent',
  components: {MessageComponent},
  data() {
    return {
      msg: "",
      date: null,
      toDo: null,
      activities: null,
      toDoId: null,
      status: [],
    }
  },
  methods: {
    async loadData() {
      const activitiesReq = await fetch("http://localhost:3000/List");
      const activitiesData = await activitiesReq.json();
      this.activities = activitiesData.activities;

      const toDosReq = await fetch("http://localhost:3000/ToDo");
      this.toDo = await toDosReq.json();
    },
    getTask(task) {
      const filtered = this.activities.filter(item => {
        return item.id === parseInt(task)
      });

      return filtered[0]
    },

    async getStatus() {
      const statusReq = await fetch("http://localhost:3000/status");
      this.status = await statusReq.json();

    },

  },

  async deleteTask(id) {
    await fetch(`http://localhost:3000/ToDo/${id}`, {
      method: "DELETE"
    });

    this.msg = "Deletado com sucesso";
    await this.loadData();

    setTimeout(() => this.msg = "", 2000)
  },

  async updateTask(event, id) {
    const option = event.target.value;
    const dataJson = JSON.stringify({status: option});

    const req = await fetch(`http://localhost:3000/ToDo/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: dataJson
    });

    const res = await req.json();
    console.log(res)
  },

  mounted() {
    this.loadData();
    this.getStatus();
  }
}
</script>

<style scoped>
#task-table {
  max-width: 1200px;
  margin: 0 auto;
}

#task-table-head,
#task-table-row,
.task-table-row {
  display: flex;
  flex-wrap: wrap;
}

#task-table-head {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

#task-table-head div,
.task-table-row div {
  width: 23%;
}

.task-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #CCC;
}

#task-table-head .order-id,
.task-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
  background-color: mediumpurple;
  color: #ecc702;
  font-weight: bold;
  border: 2px solid mediumpurple;
  padding: 12px 12px;
  margin: 0 auto;
  cursor: pointer;
  transition: .5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #333;
  border: 2px solid mediumpurple;
}
</style>