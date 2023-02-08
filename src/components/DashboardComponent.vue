<template>
  <div id="task-table">
    <div>
      <div id="task-table-head">
        <div class="order-id">#</div>
        <div>Quem?</div>
        <div>Data:</div>
        <div>Tarefa:</div>
        <div>Status:</div>
      </div>
    </div>
    <div id="task-table-row">
      <div class="task-table-row">
        <div class="order-number">1</div>
        <div>J</div>
        <div>08/02/2023</div>
        <div>
          <ul>
            <li>Lavar roupa</li>
            <li>Academia</li>
          </ul>
        </div>
        <div>
          <select name="status" id="status">
            <option value="">selecione</option>
          </select>
          <button class="delete-btn">Cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardComponent',
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