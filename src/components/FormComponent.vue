<template>
  <div>
    <MessageComponent :msg="msg" v-show="msg"/>
    <form id="home-form" @submit="createTask">
      <div class="input-container">
        <label for="name">Nome</label>
        <input type="text" id="name" name="name" v-model="name" placeholder="Digite seu nome">
      </div>
      <div class="day-container">
        <label for="day">Data</label>
        <DayComponent/>
      </div>
      <div id="task-container" class="input-container">
        <label id="task-title" for="taks">Qual sua missão de hoje?:</label>
        <div class="checkbox-container" v-for="activity in activities" :key="activity.id">
          <input type="checkbox" name="task" v-model="tasks[activity.id]" :value="activity.tipo">
          <span> {{ activity.tipo }}</span>
        </div>
        <div class="input-container">
          <input type="submit" class="submit-btn" value="Criar tarefa!">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import DayComponent from "@/components/DayComponent.vue";
import MessageComponent from "@/components/MessageComponent.vue";

export default {
  name: 'FormComponent',
  components: {MessageComponent, DayComponent},

  data() {
    return {
      msg: "",
      activities: null,
      name: null,
      tasks: {},
      status: "Fazer"
    }
  },
  methods: {
    async getTasks() {
      const req = await fetch("http://localhost:3000/List");
      const data = await req.json();

      this.activities = data.activities;
    },
    async createTask(e) {
      e.preventDefault();

      const data = {
        name: this.name,
        tasks: Object.keys(this.tasks),
        status: "Fazer"
      }
      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/ToDo", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: dataJson,
      });

      const res = await req.json();

      //Colocar mensagem no sistema:
      this.msg = "Tarefa adicionada com sucesso"

      //Limpar mensagem:
      setTimeout(() => this.msg = "", 2000)

      //Limpar os campos
      this.name = "";
      this.tasks = {};
    }
  },
  mounted() {
    this.getTasks()
  }

}
</script>

<style scoped>
#home-form {
  max-width: 400px;
  margin: 0 auto;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

}

.day-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
}

label {
  font-weight: bold;
  font-size: 23px;
  margin-bottom: 20px;
  color: #000;
  padding: 5px 10px;
  border-left: 4px solid #ecc702;;
}

input, select {
  padding: 11px 10px;
  width: 400px;
  border: 1px solid lightgrey;
  border-radius: 5px;
}

span {
  font-weight: normal;
  font-size: 18px;
  margin-left: 6px;
}

#task-container {
  flex-direction: row;
  flex-wrap: wrap;
}

.checkbox-container {
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 20px;
}

#task-title {
  width: 100%;
}

.checkbox-container span,
.checkbox-container input {
  width: auto;
}

.submit-btn {
  background-color: mediumpurple;
  color: #ecc702;
  font-weight: bold;
  border: 2px solid mediumpurple;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: .5s;
}

.submit-btn:hover {
  background-color: transparent;
  color: #000;
}
</style>