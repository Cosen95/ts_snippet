<template>
  <div class="todo-page">
    <ul>
     <todo-item 
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :index="index"
        :editingIndex="editingIndex"
        @on-save="handleSave"
        @on-edit="handleEdit"
        @on-cancel="handleCancel"
				@on-complete="handleComplete"
        ></todo-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '../components/todo-item';
import { State, Mutation } from 'vuex-class';
@Component({
	name: 'TodoPage',
	components: {
		TodoItem,
	},
})
export default class TodoPage extends Vue {
	@State('list') public list;
	public editingIndex = -1;
	@Mutation('updateList') public updateList;
	@Mutation('updateListStatus') public updateListStatus
	public handleSave({ index, content }) {
		this.updateList({ index, content });
		this.handleCancel();
	}

	public handleEdit(index) {
		this.editingIndex = index;
	}

	public handleCancel() {
		this.editingIndex = -1;
	}

	public handleComplete(index) {
		this.updateListStatus(index);
	}
}
</script>
